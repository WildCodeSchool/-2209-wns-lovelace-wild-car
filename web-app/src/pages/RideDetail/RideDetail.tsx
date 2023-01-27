import ChooseRideButton from '../../components/ChooseRideButton/ChooseRideButton';
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
  MoreInfoTitle,
  MoreInfoText,
  Logo,
  DriverImg,
  EndingPointImg,
  StartTimeImg,
  DriverPPImg,
  DotContainer,
  Dot,
} from './RideDetail.styled';
import startingPoint from '../../img/starting-point.png';
import endingPoint from '../../img/ending-point.png';
import steeringWheel from '../../img/steering-wheel.png';
import driver from '../../img/driver.png';

const RideDetail = () => {
  return (
    <>
      <DetailSection>
        <Logo>Logo</Logo>
        <RideDate>jeudi 1 juin</RideDate>
        <Start>
          <StartTime>09h15</StartTime>
          <StartTimeImg src={startingPoint} alt='start position' />
          <StartCity>Paris</StartCity>
        </Start>
        <DotContainer>
          <Dot />
          <Dot />
          <Dot />
        </DotContainer>
        <End>
          <EndTime>18h00</EndTime>
          <EndingPointImg src={endingPoint} alt='ending position' />
          <EndCity>Lyon</EndCity>
        </End>
        <Price>
          <PriceH1>prix</PriceH1>
          <PriceValue>30€</PriceValue>
        </Price>
        <Driver>
          <DriverImg src={steeringWheel} alt='steering wheel' />
          <DriverName>Jean Driver</DriverName>
          <DriverPPImg src={driver} alt='driver pp img' />
        </Driver>
      </DetailSection>
      <InfoSection>
        <ChooseRideButton />
        <MoreInfoTitle>informations supplémentaires</MoreInfoTitle>
        <MoreInfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        </MoreInfoText>
      </InfoSection>
    </>
  );
};

export default RideDetail;
