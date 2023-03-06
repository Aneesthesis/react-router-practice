import { useParams } from "react-router-dom";

function EventDetails() {
  const params = useParams();
  return (
    <>
      <h1>Here are the event details</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  );
}

export default EventDetails;
