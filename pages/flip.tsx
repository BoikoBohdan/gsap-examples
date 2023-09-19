import React from "react";
import {
  GalleryAnimation,
  TEST_DATA_1,
} from "@/src/components/GalleryAnimation";
import {
  TEST_DATA_2,
  TEST_DATA_3,
} from "@/src/components/GalleryAnimation/const";

export default function FlipAnimations() {
  return (
    <div>
      <section className="project project--intro">
        <span className="project__label project__label--name">Project</span>
        <span className="project__name">Flip Animations Test with Next.js</span>
        <span className="project__label project__label--date">Date</span>
        <span className="project__date">Sep, 2023</span>
        <h2 className="project__title">
          <span className="project__title-line">Creativity</span>
          <span className="project__title-line">Bohdan Boiko</span>
        </h2>
        <span className="project__label project__label--mission">Mission</span>
        <div className="project__mission">
          <p>
            Reuse existing code with GSAP, Flop and ScrollTrigger to create
            smooth animation with Next.js including all SSR and animation
            features.
          </p>
        </div>
      </section>
      <GalleryAnimation
        items={TEST_DATA_1.items}
        wrapperClass={TEST_DATA_1.wrapperClass}
        settings={TEST_DATA_1.settings}
        caption={TEST_DATA_1.caption}
      />
      <GalleryAnimation
        items={TEST_DATA_2.items}
        wrapperClass={TEST_DATA_2.wrapperClass}
        settings={TEST_DATA_2.settings}
        caption={TEST_DATA_2.caption}
      />
      <GalleryAnimation
        items={TEST_DATA_3.items}
        wrapperClass={TEST_DATA_3.wrapperClass}
        settings={TEST_DATA_3.settings}
        caption={TEST_DATA_3.caption}
      />
    </div>
  );
}
