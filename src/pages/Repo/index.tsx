import React from "react";
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to = {'/rafaeltreiber'}>rafaeltreiber
        </Link>
        <span>/</span>
        <Link className = {'reponame'} to = {'/rafaeltreiber/segredo'}>segredo</Link>
      </Breadcrumb>
      <p>Um joguinho para aprender Ionic + Firebase</p>
      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
        <ForkIcon />
        <b>0</b>
        <span>forks</span>
        </li>
      </Stats>

      <LinkButton href = {'https://github.com/rafaeltreiber/segredo'}>
        <GithubIcon />
        <span>Ver no Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
