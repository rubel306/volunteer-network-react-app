const HomeCard = ({ event }) => {
  const { id, eventName, eventImageLink, eventCreatorName, email } = event;
  return (
    <div>
      <div className="card">
        <img className="h-60" src={eventImageLink} alt={eventName} />
        <h3 className="p-3 bg-sky-400 text-white text-center font-bold cursor-pointer">
          {eventName}
        </h3>
      </div>
    </div>
  );
};

export default HomeCard;
