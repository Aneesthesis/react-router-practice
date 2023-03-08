import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const { events, isError, message } = useLoaderData(); // destructured response object

  // if (isError) {
  //   return <p>{message}</p>;
  // }
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 500 });
    ///or..

    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // }); or...

    // return {
    //   isError: true,
    //   message: "Could not fetch events",
    // };
  } else {
    return response;
    // const resData = await response.json(); ...if not for the response object provided by react-router
    // return resData.events;
  }
}
