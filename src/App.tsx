import { ImageSlider } from "./ImageSlider";
import flower1 from "./images/flower-1.jpg";
import flower2 from "./images/flower-2.jpg";
import flower3 from "./images/flower-3.jpg";
import flower4 from "./images/flower-4.jpg";

const IMAGES = [flower1, flower2, flower3, flower4];

export default function App() {
  return (
    <div style={{ maxWidth: "1200px", width: "100%", aspectRatio: "10/6", margin: "0 auto" }}>
      <ImageSlider imageUrls={IMAGES} />;
    </div>
  );
}
