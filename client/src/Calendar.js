import styled from "styled-components";

const Calendar = () => {
  return (
    <Wrapper>
      <CalendarBox>CALENDAR</CalendarBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-golden-yellow);
  color: var(--color-burnt-red);
`;
const CalendarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
`;
export default Calendar;
