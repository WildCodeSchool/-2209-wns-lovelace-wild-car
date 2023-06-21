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
//import { GetRidesQuery } from "../../gql/graphql";
//import Ride from "../../components/Ride/Ride";

//import { ApolloClient, InMemoryCache } from "@apollo/client";
//import Loader from "../../components/Loader";

import { gql } from "graphql-request";
import { Connection } from "your-database-library";

const GET_RIDES_BY_ID = gql`
  query GetRideById($id: ID!) {
    findOneById(id: $id) {
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
`;

const id = "GET_RIDES_BY_ID";

const query = Connection.query(
  GET_RIDES_BY_ID,
  { id },
  (error: any, results: any) => {
    if (error) {
      console.error("Erreur lors de l'exécution de la requête :", error);
    } else {
      console.log("Résultats de la requête :", results);
    }
  }
);

export default query;

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
