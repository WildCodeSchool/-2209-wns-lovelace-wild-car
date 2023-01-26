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

const RideCard = () => {
  return (
    <Main>
      <LeftSide>
        <DistanceBetweenPoint>
          <StartingPoint>
            <StartingPointImage src={startingPoint} alt="start position" />
            lyon
          </StartingPoint>
          <DotContainer>
            <Dot />
            <Dot />
            <Dot />
          </DotContainer>
          <EndingPoint>
            <EndingPointImage src={endingPoint} alt="ending position" />
            paris
          </EndingPoint>
        </DistanceBetweenPoint>
        <Driver>
          <DriverImage src={steeringWheel} alt="steering wheel" />
          Dave Lopper
        </Driver>
        <Passenger>
          <PassengerImage src={passengers} alt="passengers" />3
        </Passenger>
      </LeftSide>
      <RightSide>
        <Time>
          <TimeImage src={time} alt="time" />
          08h45
        </Time>
        <Calendar>
          <CalendarImage src={calendar} alt="calendar" />
          jeu 15
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
