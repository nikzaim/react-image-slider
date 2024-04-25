import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./style.css";

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
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
      return index === imageUrls.length - 1 ? 0 : index + 1;
    });
  }
  function handleClickLeft() {
    setImageIndex((index) => {
      return index === 0 ? imageUrls.length - 1 : index - 1;
    });
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img src={imageUrls[imageIndex]} className="img-slider-img" />
      <button className="img-slider-btn" style={{ left: "0" }} onClick={handleClickLeft}>
        <ArrowBigLeft />
      </button>
      <button className="img-slider-btn" style={{ right: "0" }} onClick={handleClickRight}>
        <ArrowBigRight />
      </button>
    </div>
  );
}
