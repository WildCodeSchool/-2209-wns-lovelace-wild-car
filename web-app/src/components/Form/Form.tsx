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

const Form = () => {
  const [formData, setFormData] = useState({
    départ: '',
    arrivé: '',
    date: '',
    nbPassager: '',
  });

  const submit = () => {
    console.log('submit');
  };

  return (
    <>
      <FormBlock>
        <FormRide>
          {/* <Start>départ</Start> */}
          <StartBlock>
            <StartingPointImage src={startingPoint} alt='start position' />
          </StartBlock>
          <RideStart
            type='text'
            name='start'
            placeholder='départ'
            value={formData.départ}
          />
          {/* <End>arrivée</End> */}
          <EndBlock>
            <StartingPointImage src={startingPoint} alt='start position' />
          </EndBlock>
          <RideEnd
            type='text'
            name='end'
            placeholder='arrivée'
            value={formData.arrivé}
          />
        </FormRide>
        <FormInfo>
          {/* <RideDate>date</RideDate> */}
          <DateBlock>
            <DateImage src={calendarImage} alt='calendar icon' />
          </DateBlock>
          <RideDate
            type='text'
            name='end'
            placeholder="aujourd'hui"
            value={formData.date}
          />
          {/* <RideNB>NB</RideNB> */}
          <PassengerBlock>
            <PassengerImage src={passengerImage} alt='passenger icon' />
          </PassengerBlock>
          <RidePassenger
            type='text'
            name='end'
            placeholder='1'
            value={formData.nbPassager}
          />
        </FormInfo>
      </FormBlock>
      {/* <GoButton>go !</GoButton> */}
    </>
    // <SForm>
    //   <div
    //     className='form'
    //     onSubmit={async (event) => {
    //       event.preventDefault();
    //       await submit();
    //     }}
    //   >
    //     <h1>départ</h1>
    //     <input
    //       className='inputForm'
    //       type='text'
    //       name='départ'
    //       value={formData.départ}
    //     />
    //     <h1>arrivée</h1>
    //     <input
    //       className='inputForm'
    //       type='text'
    //       name='départ'
    //       value={formData.arrivé}
    //     />
    //     <div className='row'>
    //       <h1>calendrier</h1>
    //       <h1>nb place</h1>
    //     </div>
    //     <button type='submit'>go !</button>
    //   </div>
    // </SForm>
  );
};

export default Form;
