import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  DeleteRideMutation,
  DeleteRideMutationVariables,
  GetRidesQuery,
} from "../../gql/graphql";

import blankProfilePicture from "../../media/blank-profile-picture.png";
import { getErrorMessage } from "../../utils";
import CloseButton from "../CloseButton/CloseButton";
import Dialog from "../Dialog/Dialog";

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
    <Card>
      <CardImage src={blankProfilePicture} alt="" />
      <CardTitle>
        {driverName} 
      </CardTitle>
      <CardParagraph> Ville de départ : {departureCity} <br></br>
       Adresse de départ : {departureAdress} <br></br> 
       Date : {rideDate} <br></br> 
       Déestination : {arrivalCity} <br></br> 
        Nombre de passager : {maxPassagerNumber} <br></br>
        Place restante : {maxPassagerLeft} <br></br> 
        Prix : {ridePrice}<br></br> 
        Fumeur : {smoker} <br></br>
        Animaux : {pet} <br></br>
   
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
  );
};

export default Ride;
