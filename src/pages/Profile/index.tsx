import React from 'react';

 import { Container, Main, LeftSide, RightSide } from './styles';
 import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
           username = { 'rafaeltreiber' }
           name = { 'Rafael Treiber' }
           avatarUrl = {'https://avatars0.githubusercontent.com/u/37600196?v=4'}
           followers = {600}
           following = {10}
           company = {'Cowtrol'}
           location = {'Lages, Brasil'}
           email = {'rafaeltreiber@yahoo.com.br'}
           blog = {undefined}
          />

        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;