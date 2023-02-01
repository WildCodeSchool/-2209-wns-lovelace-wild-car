import styled from 'styled-components';

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(156.54deg, #1cb8c7 8.29%, #0fbdcd 94.05%);
  color: white;
`;

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const Recap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const BigTitle = styled.section`
  font-weight: 700;
  font-size: 20px;
  width: 60%;
  padding-left: 30px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center
    justify-content: center;
    text-align: center;
    width: 100%;
    font-size: 30px;
  }
`;

export const RecapContainer = styled.section`
  padding: 0px 30px;
  margin-top: 40px;
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
  background-color: #48c8d4;
  with: 100%;
  padding: 30px;
  margin: 30px 0px;
  font-size: 14px;
`;

export const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
