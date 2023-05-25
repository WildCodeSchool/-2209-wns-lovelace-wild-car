import styled from 'styled-components';

export const Button = styled.button`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 40px;
  width: 140px;
  background-color: white;
  border: none;
  @media (min-width: 768px) {
    width: 210px;
    height: 50px;
  }
`;
