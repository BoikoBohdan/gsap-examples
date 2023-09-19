import React from "react";

export interface GallerySettings {
  absolute?: boolean | undefined;
  absoluteOnLeave?: boolean;
  ease?: "none" | "easy";
  scale?: boolean;
  scrollTrigger?: {
    trigger?: HTMLElement;
    end?: string;
    start?: "center center";
    pin?: HTMLElement | null;
    scrub?: boolean;
  };
  simple?: boolean | undefined;
  stagger?: number;
}

export interface GalleryItem {
  className?: string,
  imgUrl?:string,
  children?: boolean
}

export interface GalleryTestData {
  settings: GallerySettings,
  items: GalleryItem[],
  caption: any,
  wrapperClass: string
}