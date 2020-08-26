import React from 'react';
import logo from '../images/logo.png';
import header1 from '../images/header1.jpg';
import header2 from '../images/header2.jpg';
import header3 from '../images/header3.jpg';
import header4 from '../images/header4.jpg';
import header5 from '../images/header5.jpg';
import css from '../css/home.module.css';
import Projects from "./projects";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
  

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

var HeaderimageNumber = randomNumber(1, 5);

var HeaderImage;

var HeaderImageLicenseHref;
var HeaderImageLicenseName;

function headerImageChosser() {
  if (HeaderimageNumber === 1) {
    HeaderImage = header1;
    HeaderImageLicenseHref = 'https://unsplash.com/@impatrickt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText';
    HeaderImageLicenseName = 'Patrick Tomasso';
  } else if (HeaderimageNumber === 2) {
    HeaderImage = header2;
    HeaderImageLicenseHref = 'https://unsplash.com/@impatrickt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText';
    HeaderImageLicenseName = 'Patrick Tomasso';
  } else if (HeaderimageNumber === 3) {
    HeaderImage = header3;
    HeaderImageLicenseHref = 'https://unsplash.com/@cg?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText';
    HeaderImageLicenseName = 'Cristi Goia';
  } else if (HeaderimageNumber === 4) {
    HeaderImage = header4;
    HeaderImageLicenseHref = 'https://unsplash.com/@claykaufmann?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Clay Kaufmann</a> on <a href="https://unsplash.com/@claykaufmann?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText';
    HeaderImageLicenseName = 'Clay Kaufmann';
  } else {
    HeaderImage = header5;
    HeaderImageLicenseHref = 'https://unsplash.com/@claykaufmann?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Clay Kaufmann</a> on <a href="https://unsplash.com/@claykaufmann?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText';
    HeaderImageLicenseName = 'Clay Kaufmann';
  }
}

headerImageChosser();

export default function Home() {
  return (
    <div>
      <header className={css.header} style={{ background: 'url(' + HeaderImage + ')', backgroundSize: "cover" }} id="header">
        <div className={css.HeaderBox}>
          <img className={css.logo} src={logo} alt="logo"/>
          <h1>zalnaRs</h1>
          <h2>Indie app/game developer.</h2>
          <span>Photo by <a style={{ color: "white" }} href={HeaderImageLicenseHref}>{HeaderImageLicenseName}</a> on <a style={{ color: "white" }} href="https://unsplash.com/s/photos/header?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </div>
        <center>
          <a href="#Projects">
            <ArrowDownwardIcon/>
          </a>
        </center>
      </header>              
      <Projects id="Projects" />
    </div>
  );
}
