import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { MyProfileQuery } from '../gql/graphql';

import CreateWilder from '../pages/CreateWilder/CreateWilder';
import Home from '../pages/Home/Home';
import {
  CREATE_WILDER_PATH,
  HOME_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from '../pages/paths';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import { Footer, Header, MainContainer } from './App.styled';

const MY_PROFILE = gql`
  query MyProfile {
    myProfile {
      emailAddress
    }
  }
`;

function App() {
  return (
    <>
      <Header></Header>
      <MainContainer>
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={CREATE_WILDER_PATH} element={<CreateWilder />} />
        </Routes>
      </MainContainer>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
