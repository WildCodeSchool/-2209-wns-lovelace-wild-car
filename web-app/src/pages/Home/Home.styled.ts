import styled from 'styled-components';

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
export const ResearchSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(157.67deg, #fb9555 15.1%, #f87a23 75.26%);
  height: 60vh;
  width: 100%;
  padding-top: 100px;
  @media (min-width: 768px) {
    height: 100vh;
  }
`;

export const ResultSection = styled.section`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  bottom: 0;
  flex-direction: row;
  background-color: white;
  height: 50vh;
  width: 100%;
  border-radius: 40px 40px 0px 0px;
  z-index: 2;
  overflow: scroll;
  @media (min-width: 768px) {
    background-color: rgba(255, 255, 255, 0);
    height: 60vh;
  }
`;

export const SwitchSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: blue;
  height: 40px;
  width: 70%;
  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const ResearchBloc = styled.section`
  display: flex;
  flex-direction: column;
  background-color: red;
  height: 25vh;
  width: 70%;
  margin-top: 40px;
  @media (min-width: 768px) {
    width: 90%;
    height: 10vh;
  }
`;

export const CardRow = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;


export const TravelCard = styled.section`
  display: flex;
  background-color: green;
  height: 25vh;
  width: 70%;
  margin-top: 40px;
  @media (min-width: 768px) {
    width: 90%;
    margin: 10px 0px;
    height: 15vh;
  }
`;
