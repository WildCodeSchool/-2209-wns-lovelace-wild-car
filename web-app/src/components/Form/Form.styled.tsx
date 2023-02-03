import styled from 'styled-components';

export const FormBlock = styled.form`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 20px;
  }
`;

export const FormRide = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    border-bottom-left-radius: 20px;
  }
`;

export const Start = styled.h1`
  height: 30px;
  width: 280px;
  margin-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 768px) {
    height: 80px;
    width: 80px;
    border-bottom-left-radius: 20px;
  }
`;

export const RideStart = styled.input`
  height: 30px;
  width: 280px;
  border-top: none;
  border-left: none;
  border-right: none;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 768px) {
    height: 80px;
    width: 150px;
    border-bottom: none;
  }
`;

export const End = styled.h1`
  height: 30px;
  width: 280px;
  margin-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 768px) {
    height: 80px;
    width: 80px;
  }
`;

export const RideEnd = styled.input`
  height: 30px;
  width: 280px;
  border-top: none;
  border-left: none;
  border-right: none;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 768px) {
    height: 80px;
    width: 150px;
    border-bottom: none;
  }
`;

export const FormInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  @media (min-width: 768px) {
    height: 50px;
    border-top-right-radius: 20px;
  }
`;

export const RideDate = styled.h1`
  height: 60px;
  width: 140px;
  background-color: white;
  margin: 0px;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 768px) {
    height: 30px;
    width: 280px;
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;

export const RideNB = styled.h1`
  height: 60px;
  width: 140px;
  background-color: white;
  margin: 0px;
  @media (min-width: 768px) {
    height: 50px;
    width: 300px;
    border-top-right-radius: 20px;
  }
`;

export const GoButton = styled.div`
  color: white;
  text-align: center;
  background-color: #ffa553;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 300px;
  height: 50px;
  border: none;
  @media (min-width: 768px) {
    height: 50px;
    width: 145px;
    border-radius: 25px;
    margin-top: 20px;
    background-color: white;
    color: black;
  }
`;

// export const SForm = styled.div`
//   .form {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     margin-top: 25px;
//     background-color: white;
//     width: 280px;
//     height: 220px;
//     border-radius: 20px;
//   }

//   h1 {
//     font-size: small;
//   }

//   .row {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-evenly;
//   }

//   button {
//     color: white;
//     background-color: #ffa553;
//     border-bottom-left-radius: 20px;
//     border-bottom-right-radius: 20px;
//     width: 280px;
//     height: 50px;
//     border: none;
//   }

//   @media (min-width: 768px) {
//     .form {
//       display: flex;
//       flex-direction: row;
//     }
//   }
// `;
