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
  background: linear-gradient(157.67deg, #fb9555 15.1%, #f87a23 75.26%);
  height: 60vh;
  width: 100%;
`;

export const ResultSection = styled.section`
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  background-color: white;
  height: 50vh;
  width: 100%;
  border-radius: 40px 40px 0px 0px;
  z-index: 2;
`;
