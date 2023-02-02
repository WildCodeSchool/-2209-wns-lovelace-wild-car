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

import { SectionTitle } from "../../styles/base-styles";
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

const CreateRide = () => {
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
    <>
      <SectionTitle>Crée un nouveau trajet Wild - car</SectionTitle>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await submit();
        }}
      >
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
        <br />
        <label>
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
        <br />
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
        <br />
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
        <br />
        <label>
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
        </label>
        <br />
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
        <br />
        <label>
        Place restante
          <br />
          <input
            type="Float"
            required
            id="maxPassagerLeft"
            name="maxPassagerLeft"
            value={maxPassagerLeft}
            onChange={(event) => {
              setmaxPassagerLeft(Number(event.target.value));
            }}
          />
        </label>
        <br />
        <label>
          Prix
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
        <br />
        <label>
          Fumeur
          <br />
          <input
            type="checkbox"
            id="smoker"
            name="smoker"
            value={"smoker"}
            onChange={(event) => {
              setsmoker(Boolean(event.target.value));
            }}
          />
        </label>
        <br />
        <label>
          Animaux 
          <br />
          <input
            type="checkbox"
            id="pet"
            name="pet"
            value={"pet"}
            onChange={(event) => {
              setpet(Boolean(event.target.value));
            }}
          />
        </label>
        <br />
        
        <button disabled={loading}>{loading ? <Loader /> : "Valider"}</button>
      </form>
    </>
  );
};

export default CreateRide;
