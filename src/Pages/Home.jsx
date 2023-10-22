import { useLoaderData } from "react-router-dom";
import HomeCard from "../Components/HomeCard";
import Search from "../Components/Search";

const Home = () => {
  const events = useLoaderData();
  return (
    <div>
      <div className="home-header text-center py-28">
        <h2 className="font-bold text-4xl uppercase">
          I grow by helping people in need.
        </h2>
        <div className="my-4">
          <Search events={events}></Search>
        </div>
      </div>
      <div className="events grid grid-cols-4 gap-4 mb-12">
        {events.map((event) => (
          <HomeCard key={event.id} event={event}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
