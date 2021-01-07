import React from 'react';

 import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles';
 import ProfileData from '../../components/ProfileData';
 import RepoCard from '../../components/RepoCard';
 import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositórios</span>
      <span className="number">28</span>
    </div>
  )


  return (
    <Container>
      <Tab className = "desktop">
        <div className="wrapper">
          <span className="offset" />
        <TabContent />
        </div>
        <span className="line" />
      </Tab>
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
        <RightSide>
          <Tab className = "mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>
          <Repos>
            <h2>Random repos</h2>
            <div>{[ 1, 2, 3, 4, 5, 6 ].map(n => (
              <RepoCard 
              key = {n}
              username = {'rafaeltreiber'}
              reponame = {'segredo'}
              description = {'Joguinho para aprender Ionic + Firebase'}
              language = {n % 3 === 0 ? 'Javascript' : 'TypeScript'}
              stars = {8}
              forks = {4}
              />
            ))}</div>
          </Repos>
          <CalendarHeading>
            Calendário randômico. Não representa dados reais
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;