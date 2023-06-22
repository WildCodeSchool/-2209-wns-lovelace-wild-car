import { useState } from 'react';
import {
  FormInfo,
  FormBlock,
  FormRide,
  RideStart,
  RideEnd,
  RideDate,
  RideNB,
  // Start,
  End,
  StartBlock,
  EndBlock,
  StartingPointImage,
  DateBlock,
  DateImage,
  PassengerBlock,
  PassengerImage,
  RidePassenger,
  // GoButton,
} from './Form.styled';
import startingPoint from '../../img/starting-point.png';
import calendarImage from '../../img/calendar.png';
import passengerImage from '../../img/passengers.png';

const Form = ({
  dataStart,
  dataEnd,
  dataDate,
  dataPassenger,
  handleStartChange,
  handleEndChange,
  handleDateChange,
  handlePassengerChange,
}: {
  dataStart: string;
  dataEnd: string;
  dataDate: string;
  dataPassenger: number;
  handleStartChange: (value: string) => void;
  handleEndChange: (value: string) => void;
  handleDateChange: (value: string) => void;
  handlePassengerChange: (value: number) => void;
}) => {
  const submit = () => {
    console.log('submit');
  };
  return (
    <>
      <FormBlock>
        <FormRide>
          <StartBlock>
            <StartingPointImage src={startingPoint} alt='start position' />
          </StartBlock>
          <RideStart
            type='text'
            name='start'
            placeholder='départ'
            value={dataStart}
            onChange={(event) => handleStartChange(event.target.value)}
          />
          <EndBlock>
            <StartingPointImage src={startingPoint} alt='start position' />
          </EndBlock>
          <RideEnd
            type='text'
            name='end'
            placeholder='arrivée'
            value={dataEnd}
            onChange={(event) => handleEndChange(event.target.value)}
          />
        </FormRide>
        <FormInfo>
          <DateBlock>
            <DateImage src={calendarImage} alt='calendar icon' />
          </DateBlock>
          <RideDate
            type='text'
            name='end'
            placeholder="aujourd'hui"
            value={dataDate}
            onChange={(event) => handleDateChange(event.target.value)}
          />
          <PassengerBlock>
            <PassengerImage src={passengerImage} alt='passenger icon' />
          </PassengerBlock>
          <RidePassenger
            type='number'
            name='end'
            placeholder='1'
            value={dataPassenger}
            onChange={(event) =>
              handlePassengerChange(Number(event.target.value))
            }
          />
        </FormInfo>
      </FormBlock>
    </>
  );
};
export default Form;
