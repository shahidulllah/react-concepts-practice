import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";

const PhotoCard = ({ photo }) => {
  const {name} = useContext(authContext)
  return (
    <div>
      <img src={photo.thumbnailUrl} alt={photo.thumbnailUrl} />
      <h1>{name}</h1>
      <h2>{photo.thumbnailUrl}</h2>
    </div>
  );
};

export default PhotoCard;
