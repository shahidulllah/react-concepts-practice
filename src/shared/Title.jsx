const Title = ({ title, description }) => {
  return (
    <div className="text-center py-4">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Title;
