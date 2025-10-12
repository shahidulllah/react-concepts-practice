const Title = ({ title, description }) => {
  return (
    <div className="text-center py-4">
      <h1 className="text-4xl font-semibold py-8 text-center">{title}</h1>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default Title;
