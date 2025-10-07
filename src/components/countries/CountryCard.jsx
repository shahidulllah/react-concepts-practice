import { useGetPostsQuery } from "../../redux/features/baseApi/baseApi";

const CountryCard = () => {
  const { data } = useGetPostsQuery();

  return (
    <div>
      <h1>This is country card</h1>
      <h2>{data}</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
        facere animi velit optio odit laboriosam, nobis delectus temporibus
        distinctio magni aliquam deleniti ex!
      </p>
    </div>
  );
};

export default CountryCard;
