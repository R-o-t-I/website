import React from "react";
import style from "./Gallery.module.scss";

interface GalleryProps {
  scrollStep?: number;
  children: React.ReactNode;
}

const Gallery = ({ children, scrollStep = 500 }: GalleryProps) => {
  const gallery = React.useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = React.useState<number>();
  let scrollRight = (gallery?.current?.clientWidth || 0) + (scrollLeft || 0);

  function onScrollGallery() {
    setScrollLeft(gallery?.current?.scrollLeft || 0);
  }

  function scrollOn(e: any) {
    if (!gallery.current) return;

    const direction = e.target.dataset.direction;
    const step = direction === "left" ? -scrollStep : scrollStep;
    const defaultLeft = gallery.current.scrollLeft + step;
    gallery.current.scrollTo({
      left:
        defaultLeft <= 50
          ? 0
          : defaultLeft >= scrollRight - 50
          ? defaultLeft + 50
          : defaultLeft,
      behavior: "smooth",
    });
  }

  function buttonMouse(e: any) {
    if (!gallery.current) return;

    const direction = e.target.dataset.direction;
    gallery.current.scrollTo({
      left:
        gallery.current.scrollLeft +
        (direction === "left"
          ? e.type === "mouseenter"
            ? -20
            : 20
          : e.type === "mouseenter"
          ? 20
          : -20),
      behavior: "smooth",
    });
  }

  return (
    <div className={style.GalleryContainer}>
      <div ref={gallery} className={style.Gallery} onScroll={onScrollGallery}>
        <div>{children}</div>
      </div>

      {scrollLeft !== 0 && (
        <button
          className={style.left}
          data-direction={"left"}
          onClick={scrollOn}
          onMouseEnter={buttonMouse}
          onMouseLeave={buttonMouse}
        />
      )}
      {scrollRight !== gallery?.current?.scrollWidth && (
        <button
          className={style.right}
          data-direction={"right"}
          onClick={scrollOn}
          onMouseEnter={buttonMouse}
          onMouseLeave={buttonMouse}
        />
      )}
    </div>
  );
};

export default Gallery;
