import Categories from "../../components/Rooms/Category/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  return (
    <div>
      {/* category section */}
      <Categories></Categories>
      {/* rooms section  */}
      <Rooms></Rooms>
      <h2 className="text-5xl">this is room</h2>
      <h2 className="text-5xl">this is room</h2>
      <h2 className="text-5xl">this is room</h2>
      <h2 className="text-5xl">this is room</h2>
      <h2 className="text-5xl">this is room</h2>
      <h2 className="text-5xl">this is room</h2>
    </div>
  );
};

export default Home;
