import Counter from './Counter';
import {
  Main,
  Recap,
  BigTitle,
  RecapContainer,
  Title,
  Departure,
  Arrival,
  DriveDate,
  NumberPlaceSetted,
  FormContainer,
  ButtonContainer,
  MainContainer,
} from './TrajectSummary.styled';
import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useState  } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader";
import {
  CreateRideMutation,
  CreateRideMutationVariables,
} from "../../gql/graphql";

import { getErrorMessage } from "../../utils";




const CREATE_RIDE = gql`
  mutation CreateRide($driverName: String!,
    $departureCity: String!,
    $departureAdress: String!,
    $rideDate: DateTime!,
    $arrivalCity: String!,
    $maxPassagerNumber: Float!,
    $maxPassagerLeft:Float!,
    $ridePrice:Float!,
    $smoker: Boolean!,
    $pet: Boolean!,) {
    createRide(driverName : $driverName, departureCity: $departureCity,
      departureAdress: $departureAdress, rideDate: $rideDate, arrivalCity: $arrivalCity, maxPassagerNumber: $maxPassagerNumber, 
      maxPassagerLeft: $maxPassagerLeft, ridePrice: $ridePrice,
     smoker: $smoker, pet: $pet) {
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
  const [driverName, setdriverName] = useState("");
  const [departureCity, setdepartureCity] = useState("");
  const [departureAdress, setdepartureAdress] = useState("");
  const [rideDate, setrideDate] = useState(new Date().toLocaleString());
  const [arrivalCity, setarrivalCity] = useState("");
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
      await createRide({ variables: { driverName, departureCity,
        departureAdress, rideDate, arrivalCity, maxPassagerNumber, maxPassagerLeft, ridePrice,
       smoker, pet } });
      toast.success(`Ride ${driverName} ${departureCity} ${departureAdress} ${rideDate} ${arrivalCity} ${maxPassagerNumber} 
      ${maxPassagerLeft} ${ridePrice} ${smoker}  ${pet}  votre trajet a étais crée avec succès.`);
      setdriverName("");
      setdepartureCity("");
      setdepartureAdress("");
      setrideDate(Date);
      setarrivalCity("");
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
        <BigTitle>Finalisez la création de votre trajet !</BigTitle>

        <MainContainer>
          <Recap>
            <RecapContainer>
              <Title>Récapitulatif</Title>
              <Title> <label>
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
              <Departure> <label>
          Ville de départ
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
         </Departure>
              <Arrival><label>
          Déstination
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
        </label> </Arrival>
              <DriveDate>  <label>
          Date
          <br />
          <input
            type="datetime"
            required
            id="rideDate"
            name="rideDate"
            value={rideDate}
            onChange={(event) => {
              setrideDate(event.target.value);
            }}
          />
        </label></DriveDate>
              <NumberPlaceSetted>
              <label>
          Nombre de passager
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
        <label>
          Fumeur
          <br />
          <input
            type="checkbox"
            id="smoker"
            name="smoker"
            checked={smoker}
            onChange={(event) => {
              setsmoker(Boolean(event.target.checked))
              
            }}
            
            
          />
        </label>
              </NumberPlaceSetted>
            </RecapContainer>
          </Recap>
          <FormContainer>
            <p style={{ fontWeight: 900, fontSize: 18 }}>
              Informations complémentaires
            </p>

            <fieldset id="groupe1" style={{ border: 0 }}>
              acceptez vous les animaux ?
              <label>
                <input
                  type="checkbox"
                  
                  id="pet"
                  name="pet"
                  checked={pet}
                  onChange={(event) => {
                    setpet(Boolean(event.target.checked));
                  }}
                />
              
                </label>
            </fieldset>
            
             {/*  <fieldset id="groupe3" style={{ border: 0, display: 'flex' }}>
                niveau discussion :
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label>
                    <input
                      type="radio"
                      required
                      id="lastName"
                      name="groupe3"
                      value={''}
                      onChange={(event) => {
                        /*setLastName(event.target.value);
                      }}
                    />
                    je suis bavard
                  </label>
                  <label>
                    <input
                      type="radio"
                      required
                      id="lastName"
                      name="groupe3"
                      value={''}
                      onChange={(event) => {
                        /*setLastName(event.target.value);
                      }}
                    />
                    je parle quand je suis à l’aise
                  </label>
                  <label>
                    <input
                      type="radio"
                      required
                      id="lastName"
                      name="groupe3"
                      value={''}
                      onChange={(event) => {
                        /*setLastName(event.target.value);
                      }}
                    />
                    je ne souhaite pas discuter
                  </label>
                </div>
                    </fieldset> */}

            <fieldset
              
              style={{ border: 0, display: 'flex', alignItems: 'center' }}
            >
              prix de votre trajet :
              <label>
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
                {/* <Counter/> */ } 
              </label>
            </fieldset>
          </FormContainer>
        </MainContainer>
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
          disabled={loading}>{loading ? <Loader /> : "go !"}
            
                  </button>
        </ButtonContainer>
      </form>
    </Main>
  );

};

export default TrajectSummary;
