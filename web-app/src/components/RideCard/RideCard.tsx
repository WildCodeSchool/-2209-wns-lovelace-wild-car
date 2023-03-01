import {
  Main,
  Button,
  LeftSide,
  DistanceBetweenPoint,
  StartingPoint,
  StartingPointImage,
  EndingPoint,
  EndingPointImage,
  DotContainer,
  Dot,
  Driver,
  DriverImage,
  Passenger,
  PassengerImage,
  RightSide,
  Time,
  TimeImage,
  Calendar,
  CalendarImage,
  DriverPP,
  DriverPPImage,
} from './RideCard.styled';

import startingPoint from '../../img/starting-point.png';
import endingPoint from '../../img/ending-point.png';
import steeringWheel from '../../img/steering-wheel.png';
import passengers from '../../img/passengers.png';
import time from '../../img/time.png';
import calendar from '../../img/calendar.png';
import driver from '../../img/driver.png';

const RideCard = ({
  driverNameData,departureCityData,  rideDateData,
  arrivalCityData, maxPassagerNumberData,}) => {
  return (
    <Main>
      <LeftSide>
        <DistanceBetweenPoint>
          <StartingPoint>
            <StartingPointImage src={startingPoint} alt="start position" />
            {departureCityData}
          </StartingPoint>
          <DotContainer>
            <Dot />
            <Dot />
            <Dot />
          </DotContainer>
          <EndingPoint>
            <EndingPointImage src={endingPoint} alt="ending position" />
            {arrivalCityData}
          </EndingPoint>
        </DistanceBetweenPoint>
        <Driver>
          <DriverImage src={steeringWheel} alt="steering wheel" />
          {driverNameData}
        </Driver>
        <Passenger>
          <PassengerImage src={passengers} alt="passengers" />
          {maxPassagerNumberData}
        </Passenger>
      </LeftSide>
      <RightSide>
        <Time>
          <TimeImage src={time} alt="time" />
          08h45
        </Time>
        <Calendar>
          <CalendarImage src={calendar} alt="calendar" />
          {rideDateData}
        </Calendar>
        <DriverPP>
          <DriverPPImage src={driver} alt="jean" />
        </DriverPP>
      </RightSide>

      <Button>détails du trajet</Button>
    </Main>
  );
};

export default RideCard;
