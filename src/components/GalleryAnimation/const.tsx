import { GallerySettings, GalleryTestData } from "./interface";

export const DEFAULT_GALLERY_SETTINGS: GallerySettings = {
  absoluteOnLeave: true,
  absolute: false,
  scale: false,
  simple: true,
  scrollTrigger: {
    start: "center center",
    end: "+=300%",
    scrub: true,
  },
  stagger: 0,
};

export const TEST_DATA_1: GalleryTestData = {
  settings: {
    absoluteOnLeave: true,
    scale: false,
  },
  items: [
    {
      imgUrl: "/img/6.jpg",
      className: "gallery__item--s",
    },
    {
      imgUrl: "/img/3.jpg",
      className: "gallery__item--m",
    },
    {
      imgUrl: "/img/4.jpg",
      className: "gallery__item--l",
    },
    {
      imgUrl: "/img/1.jpg",
      className: "gallery__item--xl gallery__item--center",
    },
    {
      imgUrl: "/img/5.jpg",
      className: "gallery__item--l",
    },
    {
      imgUrl: "/img/2.jpg",
      className: "gallery__item--m",
    },
    {
      imgUrl: "/img/6.jpg",
      className: "gallery__item--s",
    },
  ],
  caption: (
    <p>
      Devoid of inherent knowledge, the language model relies solely on
      probabilities to craft a peculiar vision. As a result, the earrings hang
      in curious defiance of physics, inviting us to ponder the implications of
      relinquishing human understanding in the pursuit of artificial creativity.
    </p>
  ),
  wrapperClass: "gallery--row",
};

export const TEST_DATA_2: GalleryTestData = {
  settings: {},
  items: [
    {
      children: true,
      imgUrl: "/img/6.jpg",
      className: "gallery__item-cut",
    },
    {
      children: true,
      imgUrl: "/img/3.jpg",
      className: "gallery__item-cut",
    },
    {
      children: true,
      imgUrl: "/img/4.jpg",
      className: "gallery__item-cut",
    },
    {
      children: true,
      imgUrl: "/img/1.jpg",
      className: "gallery__item-cut gallery__item--center",
    },
    {
      children: true,
      imgUrl: "/img/5.jpg",
      className: "gallery__item-cut",
    },
    {
      children: true,
      imgUrl: "/img/2.jpg",
      className: "gallery__item-cut",
    },
    {
      children: true,
      imgUrl: "/img/6.jpg",
      className: "gallery__item-cut",
    },
    {
      children: true,
      imgUrl: "/img/5.jpg",
      className: "gallery__item-cut",
    },
    {
      children: true,
      imgUrl: "/img/2.jpg",
      className: "gallery__item-cut",
    },
  ],
  caption: (
    <p>
      Devoid of inherent knowledge, the language model relies solely on
      probabilities to craft a peculiar vision. As a result, the earrings hang
      in curious defiance of physics, inviting us to ponder the implications of
      relinquishing human understanding in the pursuit of artificial creativity.
    </p>
  ),
  wrapperClass: "gallery--grid gallery--breakout",
};

export const TEST_DATA_3: GalleryTestData = {
  settings: {},
  items: [
    {
      children: true,
      imgUrl: "/img/6.jpg",
      className: "",
    },
    {
      children: true,
      imgUrl: "/img/3.jpg",
      className: "",
    },
    {
      children: true,
      imgUrl: "/img/4.jpg",
      className: "",
    },
    {
      children: true,
      imgUrl: "/img/1.jpg",
      className: "",
    },
    {
      children: true,
      imgUrl: "/img/5.jpg",
      className: "",
    },
    {
      children: true,
      imgUrl: "/img/2.jpg",
      className: "",
    },
  ],
  caption: (
    <p>
      Devoid of inherent knowledge, the language model relies solely on
      probabilities to craft a peculiar vision. As a result, the earrings hang
      in curious defiance of physics, inviting us to ponder the implications of
      relinquishing human understanding in the pursuit of artificial creativity.
    </p>
  ),
  wrapperClass: "gallery--stack gallery--stack-glass",
};

