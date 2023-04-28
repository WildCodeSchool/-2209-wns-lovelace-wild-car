import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { SectionTitle } from "../../styles/base-styles";
import { TRAJECT_SUMMARY } from "../paths";
import { useQuery, gql } from "@apollo/client";
import { GetRidesQuery } from "../../gql/graphql";
import Form from "../../components/Form/Form";
import SwitchButton from "../../components/SwitchButton/SwithButton";

import Ride from "../../components/Ride/Ride";
import {
  Main,
  ResearchSection,
  ResultSection,
  SwitchSection,
  ResearchBloc,
  TravelCard,
} from "./Home.styled";
import { RideDate } from "../RideDetail/RideDetail.styled";

const GET_RIDES = gql`
  query GetRides {
    rides {
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

const Home = () => {
  const { data, loading, error, refetch } = useQuery<GetRidesQuery>(GET_RIDES, {
    fetchPolicy: "cache-and-network",
  });

  const renderMainContent = () => {
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return error.message;
    }
    if (!data?.rides?.length) {
      return "Aucun trajet à afficher.";
    }

    return (
      <>
        {data.rides.map((ride) => (
          <Ride
            key={ride.id}
            id={ride.id}
            driverName={ride.driverName}
            departureCity={ride.departureCity}
            departureAdress={ride.departureAdress}
            rideDate={ride.rideDate}
            arrivalCity={ride.arrivalCity}
            maxPassagerNumber={ride.maxPassagerNumber}
            maxPassagerLeft={ride.maxPassagerLeft}
            ridePrice={ride.ridePrice}
            smoker={ride.smoker}
            pet={ride.pet}
            onDelete={refetch}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <ResearchSection>
        <SwitchButton />
        <Form />
        {renderMainContent()}
      </ResearchSection>
    </>
  );
};

export default Home;
