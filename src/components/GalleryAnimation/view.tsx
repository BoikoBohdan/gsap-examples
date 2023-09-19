import React, { useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";
import { useIsomorphicLayoutEffect } from "@/src/helpers/isomorphicEffect";
import { GalleryItem, GallerySettings } from "./interface";
import { DEFAULT_GALLERY_SETTINGS } from "./const";
import clsx from "clsx";

const GalleryAnimation = ({
  settings,
  items,
  wrapperClass,
  caption,
}: {
  settings?: GallerySettings;
  wrapperClass?: string;
  items: GalleryItem[];
  caption?: string;
}) => {
  const galleryRef = useRef<HTMLElement>();
  useIsomorphicLayoutEffect(() => {
    const galleryEl = galleryRef.current;
    if (!galleryRef || !galleryEl) return;
    let ctx = gsap.context(() => {
      let _settings = Object.assign({}, DEFAULT_GALLERY_SETTINGS, settings);
      const galleryCaption = galleryEl.querySelector(".caption");
      const galleryItems = galleryEl.querySelectorAll(".gallery__item");
      const galleryItemsInner = [...galleryItems]
        .map((item) => (item.children.length > 0 ? [...item.children] : []))
        .flat();
      _settings.scrollTrigger.trigger = galleryEl;
      _settings.scrollTrigger.pin = galleryEl.parentElement;
      console.log(_settings)
      // Temporarily add the final class to capture the final state
      galleryEl.classList.add("gallery--switch");

      // @ts-ignore
      const flipstate = Flip.getState([galleryItems, galleryCaption], {
        props: "filter, opacity",
      });

      // Remove the final class to revert to the initial state
      galleryEl.classList.remove("gallery--switch");

      // Create the Flip animation timeline
      const tl = Flip.to(flipstate, _settings);

      if (galleryItemsInner.length) {
        tl.fromTo(
          galleryItemsInner,
          {
            scale: 2,
          },
          {
            scale: 1,
            scrollTrigger: {
              trigger: galleryEl,
              start: _settings.scrollTrigger.start,
              end: _settings.scrollTrigger.end,
              scrub: true,
            },
          },
          0
        );
      }
    });

    return () => ctx.revert(); // cleanup
  });

  return (
    <div className="gallery-wrap">
      <div ref={galleryRef} className={clsx("gallery", wrapperClass)}>
        {items.map((galleryItem, index) => (
          <div
            key={index}
            className={clsx("gallery__item", galleryItem.className)}
            style={{ backgroundImage: `url(${galleryItem.imgUrl})` }}
          >
            {galleryItem.children ? <div /> : null}
          </div>
        ))}

        <div className="caption">{caption}</div>
      </div>
    </div>
  );
};

export { GalleryAnimation };
