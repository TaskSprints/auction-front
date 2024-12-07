import { useState } from "react";

const images = [
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
];

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square">
        <img
          src={images[selectedImage]}
          alt="Product"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
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
        ))}
      </div>
    </div>
  );
}
