import React, {useEffect} from 'react'
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "../styles/globals.css";

// Registre required plugins for future animations
gsap.registerPlugin(Flip, ScrollTrigger);

const MyApp = ({ Component, pageProps }: { Component: any, pageProps: any}) => {
  useEffect( () => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true
    });

    lenis.on('scroll', () => ScrollTrigger.update());

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])
  return <Component {...pageProps} />;
}

export default MyApp;
