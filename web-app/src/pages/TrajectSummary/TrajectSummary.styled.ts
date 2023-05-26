import styled from 'styled-components';

export const Main = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #109eab;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(156.54deg, #1cb8c7 8.29%, #0fbdcd 94.05%);
  color: white; */

  @media (max-width: 768px) {
    height: 120vh;
    padding-top: 30px;
  }
`;

// export const MainContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   @media (min-width: 768px) {
//     background-color: gray;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//   }
// `;

export const HeaderContainer = styled.section`
  @media (min-width: 768px) {
    height: 10vh;
  }
`;

export const BigTitle = styled.h1`
  color: white;
  text-align: center;
`;

export const Recap = styled.h2`
  text-align: center;
  color: white;
`;

export const Block = styled.section`
  @media (min-width: 768px) {
    /* background-color: green; */
    width: 60vw;
    height: 40vh;
    margin-left: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 5vh;
  }
`;

export const FormBlock = styled.form``;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const RideStart = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const StartInput = styled.input`
  @media (min-width: 768px) {
  }
`;

export const RideEnd = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: 2vh;
  }
`;

export const EndInpute = styled.input`
  @media (min-width: 768px) {
  }
`;

export const RideDate = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: 2vh;
  }
`;

export const DateInput = styled.input`
  @media (min-width: 768px) {
  }
`;

export const RideSeat = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: 2vh;
  }
`;

export const SeatInput = styled.input`
  @media (min-width: 768px) {
  }
`;

export const RidePrice = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: 2vh;
  }
`;

export const PriceInput = styled.input`
  @media (min-width: 768px) {
  }
`;

export const SuppInfo = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoTitle = styled.h3``;

export const Animal = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const AnimalInputYes = styled.input`
  @media (min-width: 768px) {
  }
`;

export const AnimalInputNo = styled.input`
  @media (min-width: 768px) {
  }
`;

export const Smoker = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: 2vh;
  }
`;

export const SmokerInputYes = styled.input`
  @media (min-width: 768px) {
  }
`;

export const SmokerInputNo = styled.input`
  @media (min-width: 768px) {
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoButton = styled.button`
  @media (min-width: 768px) {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: white;
    color: ' #535353';
    border-radius: 30px;
    border: 'none';
    font-size: 20px;
  }
`;

// export const Recap = styled.section`
//   display: flex;
//   flex-direction: column;
//   width: 100vw;
//   @media (min-width: 768px) {
//     width: 20vw;
//   }
// `;

// export const BigTitle = styled.section`
//   font-weight: 700;
//   font-size: 20px;
//   width: 60vw;
//   padding-left: 30px;
//   @media (min-width: 768px) {
//     display: flex;
//     align-items: center
//     justify-content: center;
//     text-align: center;
//     width: 100vw;
//     font-size: 30px;
//   }
// `;

export const RecapContainer = styled.section`
  padding: 0px 30px;
  margin-top: 40px;
  background-color: #48c8d4;
  color: white;

  @media (max-width: 768px) {
    padding: 50px;
    margin-bottom: 30px;
  }
`;

export const Title = styled.section`
  font-size: 20px;
  text-align: center;
`;

export const Departure = styled.section`
  margin: 15px 0px;
  font-size: 15px;
`;

export const Arrival = styled.section`
  margin: 15px 0px;
  font-size: 15px;
`;

export const DriveDate = styled.section`
  margin: 15px 0px;
  font-size: 15px;
`;

export const NumberPlaceSetted = styled.section`
  margin: 15px 0px;
  font-size: 15px;
`;

export const FormContainer = styled.section`
  /* background-color: #48c8d4; */
  width: 100vw;
  padding: 30px;
  margin: 30px 0px;
  font-size: 14px;
`;

export const InputContainer = styled.section`
  color: white;

  input {
    height: 30px;
    border-radius: 30px;
    border: none;
    margin 10px 0px;
    padding-left:20px;
  }

  label {
    color: white;
    font-weight:700;
  }

   @media (max-width: 768px) {
     display:flex;
     justify-content:flex-start;
     width: "100%";
     padding-left:25%;
    label {
      color: white;
      font-weight:700;
    }
   }
`;

export const MainInfoLeftSide = styled.div`
  margin-right: 30px;

  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const MainInfoRightSide = styled.div``;
// export const ButtonContainer = styled.section`;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
