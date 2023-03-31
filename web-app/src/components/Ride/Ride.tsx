import {
    Main,
    Button,
    LeftSide,
    DistanceBetweenPoint,
    StartingPoint,
    StartingPointImage,
    EndingPoint,
    EndingPointImage,
    DotContainer,
    Dot,
    Driver,
    DriverImage,
    Passenger,
    PassengerImage,
    RightSide,
    Time,
    TimeImage,
    Calendar,
    CalendarImage,
    DriverPP,
    DriverPPImage,
  } from './Ride.styled';
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
  
  
  
  import startingPoint from '../../img/starting-point.png';
  import endingPoint from '../../img/ending-point.png';
  import steeringWheel from '../../img/steering-wheel.png';
  import passengers from '../../img/passengers.png';
  import time from '../../img/time.png';
  import calendar from '../../img/calendar.png';
  import driver from '../../img/driver.png';  
  
  
  
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
    driverName,departureCity, rideDate,
    arrivalCity, maxPassagerNumber, 
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
      <Main>
        <LeftSide>
          <DistanceBetweenPoint>
            <StartingPoint>
              <StartingPointImage src={startingPoint} alt="start position" />
              {departureCity}
            </StartingPoint>
            <DotContainer>
              <Dot />
              <Dot />
              <Dot />
            </DotContainer>
            <EndingPoint>
              <EndingPointImage src={endingPoint} alt="ending position" />
              {arrivalCity}
            </EndingPoint>
          </DistanceBetweenPoint>
          <Driver>
            <DriverImage src={steeringWheel} alt="steering wheel" />
            {driverName}
          </Driver>
          <Passenger>
            <PassengerImage src={passengers} alt="passengers" />
            {maxPassagerNumber}
          </Passenger>
        </LeftSide>
        <RightSide>
          <Time>
            <TimeImage src={time} alt="time" />
            08h45
          </Time>
          <Calendar>
            <CalendarImage src={calendar} alt="calendar" />
            {rideDate}
          </Calendar>
          <DriverPP>
            <DriverPPImage src={driver} alt="jean" />
          </DriverPP>
        </RightSide>
  
        <Button>détails du trajet</Button>
  
  
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
      </Main>
  
  
  
  
  
    );
  };
  
  export default Ride;
  