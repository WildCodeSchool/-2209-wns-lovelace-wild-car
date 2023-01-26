import styled from 'styled-components';

export const Main = styled.article`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 80%;
  height: 27vh;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(88, 88, 88, 0.25);
  background-color: white;
  margin: 20px 0px;

  @media (min-width: 768px) {
    height: 23vh;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 0px 0px 25px 25px;
  background-color: #ffa553;
  color: white;
  font-weight: 600;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 170px;
  padding: 10px 0px 10px 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 100px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 170px;
  padding: 10px 0px 10px 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 100px;
  }
`;

export const DistanceBetweenPoint = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: bold;
  width: 100%;
  color: #535353;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-right: 30px;
  }
`;

export const StartingPointImage = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

export const StartingPoint = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const EndingPointImage = styled.img`
  width: 12px;
  margin-right: 10px;
`;

export const EndingPoint = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2px 0px 2px 5px;
  height: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 30px;
    align-items: center;
    margin-right: 8px;
  }
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: #dfdfdf;
  border-radius: 20px;
`;

export const Driver = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: #535353;
  font-weight: bold;
`;

export const DriverImage = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 10px;
`;

export const Passenger = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: #535353;
  font-weight: bold;
`;

export const PassengerImage = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 10px;
`;

export const Time = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: #535353;
  font-weight: bold;
`;

export const TimeImage = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 10px;
`;

export const Calendar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: #535353;
  font-weight: bold;
`;

export const CalendarImage = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 10px;
`;

export const DriverPP = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const DriverPPImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 30px;
`;
