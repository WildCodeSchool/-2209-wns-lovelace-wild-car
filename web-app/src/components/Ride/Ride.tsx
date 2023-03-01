import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  DeleteRideMutation,
  DeleteRideMutationVariables,
  GetRidesQuery,
} from "../../gql/graphql";


import { getErrorMessage } from "../../utils";
import CloseButton from "../CloseButton/CloseButton";
import Dialog from "../Dialog/Dialog";
import RideCard from "../RideCard/RideCard";

import {
  Card,
  CardImage,
  CardParagraph,
  CardTitle,
} from "./Ride.styled";

const DELETE_RIDES = gql`
  mutation DeleteRide($id: String!) {
    deleteRide(id: $id) {
      id
      driverName
    }
  }
`;

type PropType = GetRidesQuery["rides"][number] & {
  onDelete: () => void;
};

const Ride = ({ id,
  driverName,departureCity, departureAdress, rideDate,
  arrivalCity, maxPassagerNumber, maxPassagerLeft, ridePrice,
  smoker, pet,
  onDelete }: PropType) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteRide] = useMutation<
    DeleteRideMutation,
    DeleteRideMutationVariables
  >(DELETE_RIDES);

  const onCloseButtonClick = () => {
    setShowDeleteConfirmation(true);
  };

  const onDeleteConfirmation = async () => {
    try {
      await deleteRide({ variables: { id } });
      toast.success(`Le trajet de  ${driverName} à étais supprimé avec succès.`);
      onDelete();
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
     <>
    <Card>
      <CardTitle>
        {driverName} 
      </CardTitle>
      <CardParagraph> Ville de départ : {departureCity} <br></br>
       Adresse de départ : {departureAdress} <br></br> 
       Date : {rideDate} <br></br> 
       Déstination : {arrivalCity} <br></br> 
        Nombre de passager : {maxPassagerNumber} <br></br>
        Place restante : {maxPassagerLeft} <br></br> 
        Prix : {ridePrice}<br></br> 
        Fumeur : {smoker?"oui":"non"} <br></br>
        Animaux : {pet?"oui":"non"}  <br></br>

     </CardParagraph>
      <CloseButton onClick={onCloseButtonClick} />
      {showDeleteConfirmation && (
        <Dialog
          onCancel={() => {
            setShowDeleteConfirmation(false);
          }}
          onConfirm={() => {
            setShowDeleteConfirmation(false);
            onDeleteConfirmation();
          }}
        />
      )}
    </Card>
    <RideCard />
    </>
  );
};

export default Ride;



