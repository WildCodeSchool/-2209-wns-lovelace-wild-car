import styled from 'styled-components';

export const Main = styled.section`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const DetailSection = styled.section`
  height: 50vh;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 768px) {
    width: 50vw;
    height: 100vh;
  }
`;

export const Logo = styled.div``;

export const RideDate = styled.h1`
  color: black;
  @media (min-width: 768px) {
    text-align: center;
    font-size: 36px;
  }
`;

export const Start = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
    margin-left: 50px;
  }
`;

export const StartTime = styled.h1`
  color: black;
  width: 80px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const StartTimeImg = styled.img`
  height: 30px;
  width: auto;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 768px) {
    margin-top: 25px;
    margin-left: 5px;
  }
`;

export const StartCity = styled.h1`
  color: black;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  @media (min-width: 768px) {
    margin-left: 140px;
  }
`;

export const Dot = styled.div`
  height: 6px;
  width: 6px;
  background-color: #dfdfdf;
  border-radius: 20px;
  margin-top: 10px;
  @media (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;

export const End = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
    margin-left: 50px;
  }
`;

export const EndTime = styled.h1`
  color: black;
  width: 80px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const EndingPointImg = styled.img`
  height: 30px;
  width: auto;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const EndCity = styled.h1`
  color: black;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const PriceH1 = styled.h1`
  color: orange;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-right: 20px;
  }
`;

export const PriceValue = styled.h1`
  color: orange;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-left: 20px;
  }
`;

export const Driver = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const DriverImg = styled.img`
  height: 30px;
  width: auto;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

export const DriverName = styled.h1`
  @media (min-width: 768px) {
    font-size: 24px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const DriverPPImg = styled.img`
  height: 50px;
  width: auto;
  margin-top: 10px;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-left: 20px;
  }
`;

export const InfoSection = styled.section`
  height: 50vh;
  background-color: #f87a23;
  padding-right: 20px;
  padding-left: 20px;
  @media (min-width: 768px) {
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MoreInfoTitle = styled.h1`
  color: white;
  @media (min-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const MoreInfoText = styled.p`
  color: white;
  @media (min-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;
