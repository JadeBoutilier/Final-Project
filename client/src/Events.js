import { useEffect, useState } from "react";
import styled from "styled-components";

const Events = () => {
  const [events, setEvents] = useState();
  useEffect(() => {
    fetch(`/events`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error(data.message);
        } else {
          setEvents(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!events) {
    return <div>Loading...</div>;
  }
  console.log(events);
  return (
    <Wrapper>
      {events.map((event) => {
        return (
          <EventContainer key={event._id}>
            <Image src={event.imgUrl} alt="Event promotion material"/>
            <EventInfo>
            <Text>{event.name}</Text>
            <Text>{event.address}</Text>
            <Text>{event.postalCode}</Text>
            <Text>{event.about}</Text>
            </EventInfo>
          </EventContainer>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-grey);
  color: var(--color-burnt-red);
`;
const EventContainer = styled.div`
  display: flex;
  padding: 100px;
  align-items: center;
  `;
const EventInfo=styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
height: 100%;
`
const Image= styled.img`
 height: 15rem;
 object-fit: cover;
 `
 const Text=styled.div`
 padding: 10px;
 `
export default Events;
