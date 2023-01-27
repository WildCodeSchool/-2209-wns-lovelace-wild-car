import { useState } from 'react';
import { SForm } from './Form.styled';

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
    <SForm>
      <div
        className='form'
        onSubmit={async (event) => {
          event.preventDefault();
          await submit();
        }}
      >
        <h1>départ</h1>
        <input
          className='inputForm'
          type='text'
          name='départ'
          value={formData.départ}
        />
        <h1>arrivée</h1>
        <input
          className='inputForm'
          type='text'
          name='départ'
          value={formData.arrivé}
        />
        <div className='row'>
          <h1>calendrier</h1>
          <h1>nb place</h1>
        </div>
        <button type='submit'>go !</button>
      </div>
    </SForm>
  );
};

export default Form;
