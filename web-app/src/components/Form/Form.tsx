import { useState } from 'react';
import {
  FormInfo,
  FormBlock,
  FormRide,
  RideStart,
  RideEnd,
  RideDate,
  RideNB,
  Start,
  End,
  // GoButton,
} from './Form.styled';

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
          <Start>départ</Start>
          <RideStart type='text' name='start' value={formData.départ} />
          <End>arrivée</End>
          <RideEnd type='text' name='end' value={formData.arrivé} />
        </FormRide>
        <FormInfo>
          <RideDate>date</RideDate>
          <RideNB>NB</RideNB>
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
