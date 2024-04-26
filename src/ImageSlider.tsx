import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./style.css";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  // This if you have fixed length
  // function handleClickRight() {
  //   imageIndex === 3 ? setImageIndex(0) : setImageIndex(imageIndex + 1);
  // }
  // function handleClickLeft() {
  //   imageIndex === 0 ? setImageIndex(3) : setImageIndex(imageIndex - 1);
  // }

  function handleClickRight() {
    setImageIndex((index) => {
      return index === images.length - 1 ? 0 : index + 1;
    });
  }
  function handleClickLeft() {
    setImageIndex((index) => {
      return index === 0 ? images.length - 1 : index - 1;
    });
  }

  return (
    <section aria-label="Image Slider" style={{ width: "100%", height: "100%", position: "relative" }}>
      <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
        {images.map(({ url, alt }, index) => (
          <img src={url} key={url} alt={alt} aria-hidden={imageIndex !== index} className="img-slider-img" style={{ translate: `${-100 * imageIndex}%` }} />
        ))}
      </div>
      {/* <img src={imageUrls[imageIndex]} className="img-slider-img" /> */}
      <button className="img-slider-btn" style={{ left: "0" }} onClick={handleClickLeft} aria-label="View Previous Image">
        <ArrowBigLeft />
      </button>
      <button className="img-slider-btn" style={{ right: "0" }} onClick={handleClickRight} aria-label="View Next Image">
        <ArrowBigRight />
      </button>
      <div style={{ position: "absolute", bottom: ".5rem", left: "50%", translate: "-50%", display: "flex", gap: " .25rem" }}>
        {images.map((_, index) => (
          <button key={index} className="img-slider-dot-btn" onClick={() => setImageIndex(index)} aria-label={`View Image ${index + 1}`}>
            {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
          </button>
        ))}
      </div>
    </section>
  );
}
