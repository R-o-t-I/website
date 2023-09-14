import React, { useEffect } from "react";
import style from "./Gallery.module.scss";

interface GalleryProps {
  children: React.ReactNode;
}

const Gallery = ({ children }: GalleryProps) => {
  const [isMouse, setIsMouse] = React.useState<boolean>(false);
  const gallery = React.useRef<HTMLDivElement>(null);

  function onMouseEnter() {
    setIsMouse(true);
  }

  function onMouseLeave() {
    setIsMouse(false);
  }

  function scrollToLeft() {
    // @ts-ignore
    gallery.current.scrollTo({
      left: gallery.current.scrollLeft - 500,
      behavior: "smooth",
    });
  }

  function scrollToRight() {
    // @ts-ignore
    gallery.current.scrollTo({
      left: gallery.current.scrollLeft + 500,
      behavior: "smooth",
    });
  }

  return (
    <div className={style.GalleryContainer}>
      <div
        ref={gallery}
        className={style.Gallery}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div>{children}</div>
      </div>

      <button className={style.left} onClick={scrollToLeft} />
      <button className={style.right} onClick={scrollToRight} />
    </div>
  );
};

export default Gallery;
