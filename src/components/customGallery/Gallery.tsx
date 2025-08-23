import { type ReactImageGalleryItem } from "react-image-gallery";
import ImageGallery from "react-image-gallery";
import "./Gallery.css";

interface Props {
  items: ReactImageGalleryItem[];
  position: "bottom" | "top" | "right" | "left";
}

const renderThumbInner = (item: ReactImageGalleryItem) => {
  return (
    <div className="flex  items-center justify-between rounded-xl">
      <img src={item.original} className=" bg-gray-100 rounded-xl " />
    </div>
  );
};
const renderItem = (item: ReactImageGalleryItem) => {
  return (
    <div className="flex  items-center justify-between rounded-xl">
      <img
        src={item.original}
        className=" bg-gray-100 rounded-xl xl:h-[420px] xl:w-[950px]"
      />
    </div>
  );
};

function Gallery({ items, position }: Props) {
  return (
    <ImageGallery
      showNav={false}
      items={items}
      showPlayButton={false}
      showFullscreenButton={false}
      thumbnailPosition={position}
      renderThumbInner={renderThumbInner}
      renderItem={renderItem}
    />
  );
}

export default Gallery;
