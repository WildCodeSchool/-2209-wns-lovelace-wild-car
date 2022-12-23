import { SForm } from './Form.styled';

const Form = () => {
  return (
    <SForm>
      <h1>départ</h1>
      <textarea></textarea>
      <h1>arrivée</h1>
      <textarea />
      <div className='block'>
        <h1>calendrier</h1>
        <h1>nb place</h1>
      </div>
      <div className='go'>
        <button>go !</button>
      </div>
    </SForm>
  );
};

export default Form;
