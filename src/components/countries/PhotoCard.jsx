const PhotoCard = ({ photo }) => {
  return (
    <div>
      <img src={photo.thumbnailUrl} alt={photo.thumbnailUrl} />
      <h1>{photo.title}</h1>
      <h2>{photo.thumbnailUrl}</h2>
    </div>
  );
};

export default PhotoCard;
