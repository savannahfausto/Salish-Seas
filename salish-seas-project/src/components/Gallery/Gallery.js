import { imagesArray } from "./imageData";
import { ImageGallery } from "react-image-grid-gallery";

export default function Gallery() {
  return (
    <ImageGallery
      imagesInfoArray={imagesArray}
      columnWidth={400}
      gapSize={24}
    />
  );
}