import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const HomeCard = ({ event }) => {
  const { id, eventName, eventImageLink, eventCreatorName, email } = event;

  const swetAlart = () => {
    Swal.fire({
      icon: "success",
      title: "Successfully Added",
      text: "Thanks you added this event",
    });
  };
  return (
    <div>
      <div className="card">
        <img className="h-60" src={eventImageLink} alt={eventName} />
        <h3 className="p-3 bg-sky-400 text-white font-bold cursor-pointer">
          {eventName}
        </h3>
        <Link
          onClick={swetAlart}
          className="font-semibold text-white py-3 px-8 bg-[#434141]  hover:bg-slate-600 transition-all duration-300"
        >
          Add Event
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
