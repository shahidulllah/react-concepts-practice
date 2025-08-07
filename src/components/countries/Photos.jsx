import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPhotos() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos`
        );
        const photosData = await response.json();
        return setPhotos(photosData);
      } catch (error) {
        console.error("Error in getUserData:", error);
        return null;
      }
    }
    getPhotos();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-bold">
        Number Of Photos: <span className="font-normal"> {photos.length}</span>
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-2">
        {photos.slice(1, 10).map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Photos;
