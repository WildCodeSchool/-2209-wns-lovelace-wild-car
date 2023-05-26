import {
  Main,
  Recap,
  BigTitle,
  RecapContainer,
  InputContainer,
  MainInfoLeftSide,
  MainInfoRightSide,
  Title,
  Departure,
  Arrival,
  DriveDate,
  NumberPlaceSetted,
  FormContainer,
  ButtonContainer,
  Block,
  MainInfo,
  SuppInfo,
  RideStart,
  RideEnd,
  RideDate,
  RideSeat,
  DateInput,
  StartInput,
  EndInpute,
  SeatInput,
  RidePrice,
  PriceInput,
  InfoTitle,
  Animal,
  AnimalInputYes,
  AnimalInputNo,
  Smoker,
  SmokerInputYes,
  SmokerInputNo,
  FormBlock,
  GoButton,
  HeaderContainer,
} from './TrajectSummary.styled';
import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader';
import {
  CreateRideMutation,
  CreateRideMutationVariables,
} from '../../gql/graphql';

import { getErrorMessage } from '../../utils';
import SwitchButton from '../../components/SwitchButton/SwithButton';

const CREATE_RIDE = gql`
  mutation CreateRide(
    $driverName: String!
    $departureCity: String!
    $departureAdress: String!
    $rideDate: DateTime!
    $arrivalCity: String!
    $maxPassagerNumber: Float!
    $maxPassagerLeft: Float!
    $ridePrice: Float!
    $smoker: Boolean!
    $pet: Boolean!
  ) {
    createRide(
      driverName: $driverName
      departureCity: $departureCity
      departureAdress: $departureAdress
      rideDate: $rideDate
      arrivalCity: $arrivalCity
      maxPassagerNumber: $maxPassagerNumber
      maxPassagerLeft: $maxPassagerLeft
      ridePrice: $ridePrice
      smoker: $smoker
      pet: $pet
    ) {
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

const TrajectSummary = () => {
  const [driverName, setdriverName] = useState('');
  const [departureCity, setdepartureCity] = useState('');
  const [departureAdress, setdepartureAdress] = useState('');
  const [rideDate, setrideDate] = useState('');
  const [arrivalCity, setarrivalCity] = useState('');
  const [maxPassagerNumber, setmaxPassagerNumber] = useState<number>(0);
  const [maxPassagerLeft, setmaxPassagerLeft] = useState<number>(0);
  const [ridePrice, setridePrice] = useState<number>(0);
  const [smoker, setsmoker] = useState(false);
  const [pet, setpet] = useState(false);

  const [createRide, { loading }] = useMutation<
    CreateRideMutation,
    CreateRideMutationVariables
  >(CREATE_RIDE);

  const submit = async () => {
    try {
      await createRide({
        variables: {
          driverName,
          departureCity,
          departureAdress,
          rideDate: new Date(rideDate),
          arrivalCity,
          maxPassagerNumber,
          maxPassagerLeft,
          ridePrice,
          smoker,
          pet,
        },
      });

      toast.success(`Bonjour ${driverName} 
      votre trajet a été crée avec succès.`);
      setdriverName('');
      setdepartureCity('');
      setdepartureAdress('');
      setrideDate('');
      setarrivalCity('');
      setmaxPassagerNumber(Number);
      setmaxPassagerLeft(Number);
      setridePrice(Number);
      setsmoker(Boolean);
      setpet(Boolean);
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <Main>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await submit();
        }}
      >
        <HeaderContainer />
        <SwitchButton />
        <BigTitle>Créez votre trajet !</BigTitle>
        <FormBlock>
          <Block>
            <MainInfo>
              <MainInfoLeftSide>
                <InputContainer>
                  <label>
                    Prénom
                    <br />
                    <input
                      type="text"
                      required
                      id="driverName"
                      name="driverName"
                      value={driverName}
                      onChange={(event) => {
                        setdriverName(event.target.value);
                      }}
                    />
                  </label>
                </InputContainer>
                <InputContainer>
                  <label>
                    Ville départ
                    <br />
                    <input
                      type="text"
                      required
                      id="departureCity"
                      name="departureCity"
                      value={departureCity}
                      onChange={(event) => {
                        setdepartureCity(event.target.value);
                      }}
                    />
                  </label>
                </InputContainer>
                <InputContainer>
                  <label>
                    Adresse de départ
                    <br />
                    <input
                      type="text"
                      required
                      id="departureAdress"
                      name="departureAdress"
                      value={departureAdress}
                      onChange={(event) => {
                        setdepartureAdress(event.target.value);
                      }}
                    />
                  </label>
                </InputContainer>
                <InputContainer>
                  <label>
                    Destination
                    <br />
                    <input
                      type="text"
                      required
                      id="arrivalCity"
                      name="arrivalCity"
                      value={arrivalCity}
                      onChange={(event) => {
                        setarrivalCity(event.target.value);
                      }}
                    />
                  </label>
                </InputContainer>
              </MainInfoLeftSide>
              <MainInfoRightSide>
                <InputContainer>
                  <label>
                    Date
                    <br />
                    <input
                      type="datetime-local"
                      required
                      id="rideDate"
                      name="rideDate"
                      value={rideDate}
                      onChange={(event) => {
                        setrideDate(event.target.value);
                      }}
                    />
                  </label>
                </InputContainer>
                <InputContainer>
                  <label>
                    Nombre de place disponible
                    <br />
                    <input
                      type="Float"
                      required
                      id="maxPassagerNumber"
                      name="maxPassagerNumber"
                      value={maxPassagerNumber}
                      onChange={(event) => {
                        setmaxPassagerNumber(Number(event.target.value));
                      }}
                    />
                  </label>
                </InputContainer>
                <InputContainer>
                  <label>
                    Prix de votre trajet
                    <br />
                    <input
                      type="Float"
                      required
                      id="ridePrice"
                      name="ridePrice"
                      value={ridePrice}
                      onChange={(event) => {
                        setridePrice(Number(event.target.value));
                      }}
                    />
                  </label>
                </InputContainer>
              </MainInfoRightSide>
            </MainInfo>

            {/* <MainInfo>
              <Title>
                <label>
                  Prénom
                  <br />
                  <input
                    type="text"
                    required
                    id="driverName"
                    name="driverName"
                    value={driverName}
                    onChange={(event) => {
                      setdriverName(event.target.value);
                    }}
                  />
                </label>
              </Title>
              <RideStart>
                Ville départ{' '}
                <StartInput
                  type="text"
                  required
                  id="departureCity"
                  name="departureCity"
                  value={departureCity}
                  onChange={(event) => {
                    setdepartureCity(event.target.value);
                  }}
                />
              </RideStart>
              <label>
                Adresse de départ
                <br />
                <input
                  type="text"
                  required
                  id="departureAdress"
                  name="departureAdress"
                  value={departureAdress}
                  onChange={(event) => {
                    setdepartureAdress(event.target.value);
                  }}
                />
              </label>
              <RideEnd>
                Destination{' '}
                <EndInpute
                  type="text"
                  required
                  id="arrivalCity"
                  name="arrivalCity"
                  value={arrivalCity}
                  onChange={(event) => {
                    setarrivalCity(event.target.value);
                  }}
                />
              </RideEnd>
              <RideDate>
                date{' '}
                <DateInput
                  type="datetime-local"
                  required
                  id="rideDate"
                  name="rideDate"
                  value={rideDate}
                  onChange={(event) => {
                    setrideDate(event.target.value);
                  }}
                />
              </RideDate>
              <RideSeat>
                nombre de place disponible{' '}
                <SeatInput
                  type="Float"
                  required
                  id="maxPassagerNumber"
                  name="maxPassagerNumber"
                  value={maxPassagerNumber}
                  onChange={(event) => {
                    setmaxPassagerNumber(Number(event.target.value));
                  }}
                />
              </RideSeat>
              <RidePrice>
                prix de votre trajet{' '}
                <PriceInput
                  type="Float"
                  required
                  id="ridePrice"
                  name="ridePrice"
                  value={ridePrice}
                  onChange={(event) => {
                    setridePrice(Number(event.target.value));
                  }}
                />
              </RidePrice>
            </MainInfo> */}
            <RecapContainer>
              <SuppInfo>
                <InfoTitle>informations complémentaires</InfoTitle>
                <Animal>
                  acceptez-vous les animaux ?
                  <input
                    type="checkbox"
                    id="pet"
                    name="pet"
                    checked={pet}
                    onChange={(event) => {
                      setpet(Boolean(event.target.checked));
                    }}
                  />
                </Animal>

                {/* <AnimalInputYes type="radio" /> oui{" "}
              <AnimalInputNo type="radio" /> non </Animal>  */}

                <Smoker>
                  acceptez-vous les fumeurs ?
                  <input
                    type="checkbox"
                    id="smoker"
                    name="smoker"
                    checked={smoker}
                    onChange={(event) => {
                      setsmoker(Boolean(event.target.checked));
                    }}
                  />
                </Smoker>
                {/* <SmokerInputYes type="radio" /> oui{" "}
              <SmokerInputNo type="radio" /> non */}
              </SuppInfo>
            </RecapContainer>
          </Block>
        </FormBlock>

        <ButtonContainer>
          <button
            style={{
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 50,
              paddingRight: 50,
              backgroundColor: 'white',
              color: ' #535353',
              borderRadius: 30,
              border: 'none',
              fontSize: 20,
            }}
            disabled={loading}
          >
            {loading ? <Loader /> : 'go !'}
          </button>
        </ButtonContainer>
      </form>
    </Main>
  );
};

export default TrajectSummary;
