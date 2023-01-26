import ChooseRideButton from '../../components/ChooseRideButton/ChooseRideButton';
import RideCard from '../../components/RideCard/RideCard';
import {
  Dot,
  DotContainer,
  DriverImage,
  DriverPP,
  DriverPPImage,
  EndingPointImage,
  StartingPointImage,
} from '../../components/RideCard/RideCard.styled';
import {
  Start,
  DetailSection,
  InfoSection,
  RideDate,
  StartTime,
  StartCity,
  End,
  EndTime,
  EndCity,
  Price,
  Driver,
  DriverName,
  PriceH1,
  PriceValue,
} from './RideDetail.styled';
import startingPoint from '../../img/starting-point.png';
import endingPoint from '../../img/ending-point.png';
import steeringWheel from '../../img/steering-wheel.png';
import driver from '../../img/driver.png';

const RideDetail = () => {
  return (
    <>
      <DetailSection>
        <RideDate>date du trajet</RideDate>
        <Start>
          <StartTime>heure de départ</StartTime>
          <StartingPointImage src={startingPoint} alt='start position' />
          <StartCity>ville de départ</StartCity>
        </Start>
        <DotContainer>
          <Dot />
          <Dot />
          <Dot />
        </DotContainer>
        <End>
          <EndTime>heure d'arrivée</EndTime>
          <EndingPointImage src={endingPoint} alt='ending position' />
          <EndCity>ville d'arrivée</EndCity>
        </End>
        <Price>
          <PriceH1>prix</PriceH1>
          <PriceValue>€</PriceValue>
        </Price>
        <Driver>
          <DriverImage src={steeringWheel} alt='steering wheel' />
          <DriverName>nom</DriverName>
          <DriverPP>
            <DriverPPImage src={driver} alt='jean' />
          </DriverPP>
        </Driver>
      </DetailSection>
      <InfoSection>
        <ChooseRideButton />
      </InfoSection>
    </>
  );
};

export default RideDetail;
