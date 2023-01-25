import styled from 'styled-components';

export const SForm = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 25px;
    background-color: white;
    width: 280px;
    height: 220px;
    border-radius: 20px;
  }

  h1 {
    font-size: small;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  button {
    color: white;
    background-color: #ffa553;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 280px;
    height: 50px;
    border: none;
  }
`;
