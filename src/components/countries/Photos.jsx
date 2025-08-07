import { useEffect, useState } from "react";

const Photos = () => {
   const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPhotos() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
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
      <h1>The countris: {photos.length}</h1>
      {
        photos.map(photo => <Photos key={photo.id} photo={photo}/>)
      }
    </div>
  );
};

export default Photos;