import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'

const IndexPage = () => (
  <div>
    <div className="MainPage">
      <div className="MainPageGroup">
        <h1>How to stay <br /> at home if you are sick or unwell</h1>
        <p>So not to infect your dearest colleagues</p>
        <Link to="/page-2/">PRO TIP: How to get rid of fever</Link>
        <div className="Logos">
          <img src={require('../imgs/logo-sketch.png')} width="50" />
          <img src={require('../imgs/logo-figma.png')} width="50" />
          <img src={require('../imgs/logo-react.png')} width="50" />
          <img src={require('../imgs/logo-studio.png')} width="50" />
          <img src={require('../imgs/logo-framer.png')} width="50" />
          <img src={require('../imgs/logo-swift.png')} width="50" />
        </div>
        <svg width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
          
            M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;

            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; 

            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
            "
            />
          </path>
        </svg>
      </div>
    </div>
    <div className="Cards">
      <h2>9 questions to ask yourself</h2>
      <div className="CardGroup">
        <Card
          title="Fever?"
          text=" 'But I have deadlines and projects I can’t delay' "
          image={require('../imgs/wallpaper.jpg')} />
        <Card
          title="Feeling feverish/chills?"
          text=" 'I worry about being seen as unreliable' "
          image={require('../imgs/wallpaper2.jpg')} />
        <Card
          title="Cough?"
          text=" 'I don’t have enough paid sick days' "
          image={require('../imgs/wallpaper3.jpg')} />
        <Card
          title="Sore throat?"
          text=" 'I feel responsible for my team' "
          image={require('../imgs/wallpaper4.jpg')} />
        <Card
          title="Runny nose?"
          text=" 'My symptoms are mild, just a runny nose' "
          image={require('../imgs/wallpaper.jpg')} />
        <Card
          title="Stuffy nose?"
          text=" 'I can't work effectively from home' "
          image={require('../imgs/wallpaper2.jpg')} />
        <Card
          title="Muscle/Body aches?"
          text=" 'I have an important meeting' "
          image={require('../imgs/wallpaper3.jpg')} />
        <Card
          title="Headaches?"
          text=" 'My symptoms aren't serious or contagious' "
          image={require('../imgs/wallpaper4.jpg')} />
        <Card
          title="Fatigue (tiredness)?"
          text=" 'I should push through and show up' "
          image={require('../imgs/wallpaper.jpg')} />
      </div>
    </div>
  </div>
)

export default IndexPage