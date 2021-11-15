import React from "react";
import { Link } from "react-router-dom";
// Images
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import RMBDTvLogo from '../../images/react-tv-logo.png'
// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg, TvLogoImg } from "./Header.styles";


const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <Link to="/tv">
          <TvLogoImg src={RMBDTvLogo} alt="rmdbtv-logo" />
        </Link>
        <a href="https://www.themoviedb.org/" target='blank' rel='norefferer noopener'>
          <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </a>
      </Content>
    </Wrapper>
  );
};

export default Header;
