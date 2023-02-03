import React from 'react';
import { Link } from 'react-router-dom';
import { CardRow } from './Home.styled';
import Ride from '../../components/Ride/Ride';
import Loader from '../../components/Loader';
import { SectionTitle } from '../../styles/base-styles';
import { CREATE_RIDE_PATH } from '../paths';
import { useQuery, gql } from '@apollo/client';
import { GetRidesQuery } from '../../gql/graphql';

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
  const { data, loading, error, refetch } = useQuery<GetRidesQuery>(
    GET_RIDES,
    { fetchPolicy: 'cache-and-network' }
  );

  const renderMainContent = () => {
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return error.message;
    }
    if (!data?.rides?.length) {
      return 'Aucun trajet à afficher.';
    }
    return (
      <CardRow>
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
      </CardRow>
    );
  };

  return (
    <>
      <SectionTitle>Rides</SectionTitle>
      <Link to={CREATE_RIDE_PATH}>Ajouter un nouveau Trajets</Link>
      <br />
      <br />
      {renderMainContent()}
    </>
  );
};

export default Home; 


/*

export default Home;*/
import Form from '../../components/Form/Form';
import SwitchButton from '../../components/SwitchButton/SwithButton';

import RideCard from '../../components/RideCard/RideCard';
import {
  Main,
  ResearchSection,
  ResultSection,
  SwitchSection,
  ResearchBloc,
  TravelCard,
} from './Home.styled';

const Home = () => {
  return (
    <Main>
      <ResearchSection>
        {/* <SwitchSection></SwitchSection> */}
        <SwitchButton />
        {/* <ResearchBloc></ResearchBloc> */}
        <Form />
      </ResearchSection>
      <ResultSection>
        <RideCard></RideCard>
        <RideCard></RideCard>
        <RideCard></RideCard>
      </ResultSection>
    </Main>
  );
};

export default Home; */
