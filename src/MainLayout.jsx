import Navbar from "./components/Navbar";
import Title from "./shared/Title";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className=" max-w-7xl mx-auto">
          <Title
            title={"Practice concepts of React"}
            description={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos maiores vero ipsam voluptas, rerum aperiam recusandae voluptate voluptatibus corporis, explicabo eveniet tempore impedit esse ad dolore optio totam ducimus tenetur asperiores. Unde, nobis id."
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
