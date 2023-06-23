import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import { SectionTitle } from '../../styles/base-styles';
import { TRAJECT_SUMMARY } from '../paths';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { GetRidesQuery } from '../../gql/graphql';
import Form from '../../components/Form/Form';
import SwitchButton from '../../components/SwitchButton/SwithButton';

import Ride from '../../components/Ride/Ride';
import {
  Main,
  ResearchSection,
  ResultSection,
  SwitchSection,
  ResearchBloc,
  TravelCard,
} from './Home.styled';
import GoButton from '../../components/GoButton/GoButton';

interface Ride {
  id: string;
  driverName: string;
  departureCity: string;
  departureAdress: string;
  rideDate: string;
  arrivalCity: string;
  maxPassagerNumber: number;
  maxPassagerLeft: number;
  ridePrice: number;
  smoker: boolean;
  pet: boolean;
}

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

const GET_RIDES_BY_LOCATIONS = gql`
  query GetRidesByLocations($departureCity: String!) {
    getRidesByLocations(departureCity: $departureCity) {
      id
      departureCity
    }
  }
`;

const Home = () => {
  const { data, loading, error, refetch } = useQuery<GetRidesQuery>(GET_RIDES, {
    fetchPolicy: 'cache-and-network',
  });

  const [getRidesByLocations, { loading: searchLoading, data: searchData }] =
    useLazyQuery(GET_RIDES_BY_LOCATIONS);

  const [formData, setFormData] = useState({
    departureCity: '',
    arrivalCity: '',
    date: '',
    nbPassager: 0,
  });

  const renderMainContent = () => {
    if (loading || searchLoading) {
      return <Loader />;
    }
    if (error) {
      return error.message;
    }
    if (!searchData?.ridesByLocations?.length) {
      return 'Aucun trajet à afficher.';
    }

    return (
      <>
        {searchData.ridesByLocations.map((ride: Ride) => (
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

  function handleSearchFunction(): void {
    getRidesByLocations({
      variables: {
        departureCity: formData.departureCity,
        arrival: formData.arrivalCity,
      },
    });
  }

  console.log(formData.departureCity);

  return (
    <>
      <ResearchSection>
        <SwitchButton />
        <Form
          dataStart={formData.departureCity}
          dataEnd={formData.arrivalCity}
          dataDate={formData.date}
          dataPassenger={formData.nbPassager}
          handleStartChange={(value) =>
            setFormData({ ...formData, departureCity: value })
          }
          handleEndChange={(value) =>
            setFormData({ ...formData, arrivalCity: value })
          }
          handleDateChange={(value) =>
            setFormData({ ...formData, date: value })
          }
          handlePassengerChange={(value) =>
            setFormData({ ...formData, nbPassager: value })
          }
        />
        <GoButton handleClickSearch={handleSearchFunction} />
        {renderMainContent()}
      </ResearchSection>
    </>
  );
};

export default Home;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Loader from '../../components/Loader';
// import { SectionTitle } from '../../styles/base-styles';
// import { TRAJECT_SUMMARY } from '../paths';
// import { useQuery, gql, useLazyQuery } from '@apollo/client';
// import { GetRidesQuery } from '../../gql/graphql';
// import Form from '../../components/Form/Form';
// import SwitchButton from '../../components/SwitchButton/SwithButton';

// import Ride from '../../components/Ride/Ride';
// import {
//   Main,
//   ResearchSection,
//   ResultSection,
//   SwitchSection,
//   ResearchBloc,
//   TravelCard,
// } from './Home.styled';
// import GoButton from '../../components/GoButton/GoButton';

// const GET_RIDES = gql`
//   query GetRides {
//     rides {
//       id
//       driverName
//       departureCity
//       departureAdress
//       rideDate
//       arrivalCity
//       maxPassagerNumber
//       maxPassagerLeft
//       ridePrice
//       smoker
//       pet
//     }
//   }
// `;

// const GET_FILTERED_RIDES = gql`
//   query GetFilteredRides($departure: String!, $arrival: String!) {
//     filteredRides(departure: $departure, arrival: $arrival) {
//       id
//       driverName
//       departureCity
//       departureAddress
//       rideDate
//       arrivalCity
//       maxPassengerNumber
//       maxPassengerLeft
//       ridePrice
//       smoker
//       pet
//     }
//   }
// `;

// const Home = () => {
//   const { data, loading, error, refetch } = useQuery<GetRidesQuery>(GET_RIDES, {
//     fetchPolicy: 'cache-and-network',
//   });

//   const [
//     fetchFilteredRides,
//     { data: filteredRidesData, loading: filteredRidesLoading },
//   ] = useLazyQuery(GET_FILTERED_RIDES);

//   const [formData, setFormData] = useState({
//     départ: '',
//     arrivé: '',
//     date: '',
//     nbPassager: 0,
//   });

//   const handleClickSearch = () => {
//     fetchFilteredRides({
//       variables: {
//         departure: formData.départ,
//         arrival: formData.arrivé,
//       },
//     });
//   };

//   const renderFilterContent = () => {
//     if (loading || filteredRidesLoading) {
//       return <Loader />;
//     }
//     if (error) {
//       return error.message;
//     }
//     if (!data?.rides?.length && !filteredRidesData?.filteredRides?.length) {
//       return 'Aucun trajet à afficher.';
//     }

//     const rides = filteredRidesData?.filteredRides || data.rides;

//     return (
//       <>
//         {rides.map((ride) => (
//           <Ride
//             key={ride.id}
//             id={ride.id}
//             driverName={ride.driverName}
//             departureCity={ride.departureCity}
//             departureAddress={ride.departureAddress}
//             rideDate={ride.rideDate}
//             arrivalCity={ride.arrivalCity}
//             maxPassengerNumber={ride.maxPassengerNumber}
//             maxPassengerLeft={ride.maxPassengerLeft}
//             ridePrice={ride.ridePrice}
//             smoker={ride.smoker}
//             pet={ride.pet}
//             onDelete={refetch}
//           />
//         ))}
//       </>
//     );
//   };

//   const renderMainContent = () => {
//     if (loading) {
//       return <Loader />;
//     }
//     if (error) {
//       return error.message;
//     }
//     if (!data?.rides?.length) {
//       return 'Aucun trajet à afficher.';
//     }

//     return (
//       <>
//         {data.rides.map((ride) => (
//           <Ride
//             key={ride.id}
//             id={ride.id}
//             driverName={ride.driverName}
//             departureCity={ride.departureCity}
//             departureAdress={ride.departureAdress}
//             rideDate={ride.rideDate}
//             arrivalCity={ride.arrivalCity}
//             maxPassagerNumber={ride.maxPassagerNumber}
//             maxPassagerLeft={ride.maxPassagerLeft}
//             ridePrice={ride.ridePrice}
//             smoker={ride.smoker}
//             pet={ride.pet}
//             onDelete={refetch}
//           />
//         ))}
//       </>
//     );
//   };

//   return (
//     <>
//       <ResearchSection>
//         <SwitchButton />
//         <Form
//           dataStart={formData.départ}
//           dataEnd={formData.arrivé}
//           dataDate={formData.date}
//           dataPassenger={formData.nbPassager}
//           handleStartChange={(value) =>
//             setFormData({ ...formData, départ: value })
//           }
//           handleEndChange={(value) =>
//             setFormData({ ...formData, arrivé: value })
//           }
//           handleDateChange={(value) =>
//             setFormData({ ...formData, date: value })
//           }
//           handlePassengerChange={(value) =>
//             setFormData({ ...formData, nbPassager: value })
//           }
//         />
//         <GoButton handleClickSearch={''} />
//         {renderMainContent()}
//         {renderFilterContent()}
//       </ResearchSection>
//     </>
//   );
// };

// export default Home;
