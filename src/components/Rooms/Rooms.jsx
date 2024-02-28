import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return (
    <Container>
      <div className="grid pt-10 grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8">
        {rooms.map((room) => (
          <Card room={room} key={room._id}></Card>
        ))}
      </div>
    </Container>
  );
};

export default Rooms;
