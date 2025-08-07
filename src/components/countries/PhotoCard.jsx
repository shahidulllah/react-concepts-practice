
const PhotoCard = ({photo}) => {
    console.log(photo);
    return (
        <div>
            <img src={photo.thumbnailUrl} alt={photo.thumbnailUrl} />
            <h1>{photo.title}</h1>
        </div>
    );
};

export default PhotoCard;