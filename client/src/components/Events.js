import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import * as FontAwesome from "react-icons/fa";

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
    return <Spinner>
    <FontAwesome.FaSpinner />
  </Spinner>;
  }
  // console.log(events);
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
  padding: 0 100px;
`;
const EventContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-lightGrey);
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 30px;
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
 const Spin = keyframes`
 from {transform: rotate(0deg);}
 to {transform: rotate(360deg);}
 `;
 
 const Spinner = styled.span`
   font-size: 2rem;
   display: flex;
   justify-content: center;
   align-items: center;
   animation: ${Spin} 1s infinite;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translateX(-50%);
 `;
export default Events;
