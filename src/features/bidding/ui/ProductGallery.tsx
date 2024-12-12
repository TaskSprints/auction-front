import React, { useState } from "react";

// TODO: 백엔드 API 연동 후, Id를 통해 데이터를 가져오도록 수정해야 한다.
interface ProductGalleryProps {
  imgSrc: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ imgSrc }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square">
        <img
          src={imgSrc}
          alt="Product"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {/* TODO: 백엔드 API 연동 후, Id를 통해 데이터를 가져오도록 수정해야 한다. */}
        {/* {imgSrc.map((image, index) => (
          <button
            type="button"
            key={image}
            className={`relative aspect-square ${
              selectedImage === index ? "ring-2 ring-green-600" : ""
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover rounded"
            />
          </button>
        ))} */}
        {[...Array(3)].map((_, i) => (
          <button
            type="button"
            key="image"
            className={`relative aspect-square ${
              selectedImage === i ? "ring-2 ring-green-600" : ""
            }`}
            onClick={() => setSelectedImage(i)}
          >
            <img
              src={imgSrc}
              alt={`Thumbnail ${i + 1}`}
              className="w-full h-full object-cover rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
