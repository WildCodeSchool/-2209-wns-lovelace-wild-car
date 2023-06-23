//import ChooseRideButton from "../../components/ChooseRideButton/ChooseRideButton";
//import {
// Start,
//DetailSection,
// InfoSection,
// RideDate,
// StartTime,
// StartCity,
// End,
// EndTime,
// EndCity,
// Price,
// Driver,
// DriverName,
// PriceH1,
// PriceValue,
// MoreInfoTitle,
// MoreInfoText,
// Logo,
// DriverImg,
// EndingPointImg,
// StartTimeImg,
// DriverPPImg,
// DotContainer,
// Dot,
// Main,
//} from "./RideDetail.styled";
//import startingPoint from "../../img/starting-point.png";
//import endingPoint from "../../img/ending-point.png";
//import steeringWheel from "../../img/steering-wheel.png";
//import driver from "../../img/driver.png";
//import { getRidesId } from "../../gql/graphql";
import Ride from "../../components/Ride/Ride";

//import { ApolloClient, InMemoryCache } from "@apollo/client";
import Loader from "../../components/Loader";

import { gql } from "graphql-request";
import { useQuery } from "@apollo/client";
import parse from "graphql-tag";

//import ChooseRideButton from "../../components/ChooseRideButton/ChooseRideButton";

const GET_RIDES_BY_ID = parse(`
  query GetRidesId($id: ID!) {
    getRidesId(id: $id) {
      id
      driverName
      departureCity
      departureAdress
      rideDate
      arrivalCity
      maxPassagerNumber
      maxPassagerLeft
      ridePrice
      smoker
      pet
    }
  }
`);

const RideDetail = ({ rideId }: { rideId: string }) => {
  const { loading, error, data } = useQuery(GET_RIDES_BY_ID, {
    variables: { id: rideId },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Erreur: {error.message}</p>;
  }

  const ride = data?.Ride;

  if (!ride) {
    return <p>Trajet non trouvée.</p>;
  }

  return <RideDetail rideId={rideId} />;
};

export default RideDetail;

/*<Ride ride={rideId} />
      {/* <Main>
        <DetailSection>
          <Start>
            <StartTimeImg src={startingPoint} alt="starting position" />
            <StartTime>08h00</StartTime>
            <StartCity>{ride.departureCity}</StartCity>
          </Start>
          <DotContainer>
            <Dot />
            <Dot />
            <Dot />
          </DotContainer>
          <End>
            <EndTime>18h00</EndTime>
            <EndingPointImg src={endingPoint} alt="ending position" />
            <EndCity>{ride.arrivalCity}</EndCity>
          </End>
          <Price>
            <PriceH1>prix</PriceH1>
            <PriceValue>{ride.ridePrice}€</PriceValue>
          </Price>
          <Driver>
            <DriverImg src={steeringWheel} alt="steering wheel" />
            <DriverName>{ride.driverName}</DriverName>
            <DriverPPImg src={driver} alt="driver pp img" />
          </Driver>
        </DetailSection>
        <InfoSection>
          <ChooseRideButton />
          <MoreInfoTitle>informations supplémentaires</MoreInfoTitle>
          <MoreInfoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          </MoreInfoText>
        </InfoSection>
      </Main> */

//           </Start>
//           <DotContainer>
//             <Dot />
//             <Dot />
//             <Dot />
//           </DotContainer>
//           <End>
//             <EndTime>18h00</EndTime>
//             <EndingPointImg src={endingPoint} alt="ending position" />
//             <EndCity>Lyon</EndCity>
//           </End>
//           <Price>
//             <PriceH1>prix</PriceH1>
//             <PriceValue>30€</PriceValue>
//           </Price>
//           <Driver>
//             <DriverImg src={steeringWheel} alt="steering wheel" />
//             <StartCity>{driverName}</StartCity>
//             <DriverPPImg src={driver} alt="driver pp img" />
//           </Driver>
//         </DetailSection>
//         <InfoSection>
//           <ChooseRideButton />
//           <MoreInfoTitle>informations supplémentaires</MoreInfoTitle>
//           <MoreInfoText>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
//           </MoreInfoText>
//         </InfoSection>
//       </Main>
//     </>
//   );
// };
