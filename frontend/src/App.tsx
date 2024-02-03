import React, { useState } from 'react';
import logo from './logo.svg';
import tree from './tree.png';
import bush from './bush.png';
import cloud from './cloud.png';
import Button from 'react-bootstrap/Button';

import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";


import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css';

function App() {


  const [locationName, setLocName] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const handleSetLocation = (event) => {
    setLocName(event.target.value);
    fromAddress(event.target.value)
      .then(({ results }) => {
        const { lata, lnga } = results[0].geometry.location;
        setLat(lata);
        setLong(lnga);
        
        console.log("changed");
      })
      .catch(console.error);
  };


  return (
    <div className="App">
      
      <Parallax pages={5} style={{backgroundColor:"#87CEEB"}}>
        <ParallaxLayer speed={0.2} sticky={{ start: 0, end: 0.5 }}>
          <h1 className='title'> Air Way </h1>
          
        </ParallaxLayer>
        <ParallaxLayer speed={1}>
        <img src={cloud} alt="Tree" style={{ width: '300px', height: 'auto', position:'absolute', top: "0px", left:"10" }}></img>
        <img src={cloud} alt="Tree" style={{ width: '300px', height: 'auto', position:'absolute', top: "200px", left:"0" }}></img>
        <img src={cloud} alt="Tree" style={{ width: '300px', height: 'auto', position:'absolute', top: "800px", left:"50px" }}></img>
        <img src={cloud} alt="Tree" style={{ width: '300px', height: 'auto', position:'absolute', top: "600px", right:"400px" }}></img>

        <img src={cloud} alt="Tree" style={{ width: '300px', height: 'auto', position:'absolute', top: "300px", right:"50px" }}></img>
      
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} factor={2} >
          <img src={tree} alt="Tree" style={{ width: '650px', height: 'auto', position:'relative', top: "65px" }}></img>

        </ParallaxLayer>
       

        {/* Layer meant to start at the top of the 5th page, so offset is 4 */}
        <ParallaxLayer style={{backgroundColor:"#2E8B57"}} offset={1} >
        <img src={bush} alt="Tree" style={{ width: '300px', height: 'auto', position:'relative', top: "-100px" }}></img>
        <h1 style={{fontSize:"60px", color:"#AFE1AF"}}> Want to learn about Pollen data near you?</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={2} style={{backgroundColor:"	#b69f66"}}>
        <h3>Pollen Calculate</h3>
        <input></input>
        <br></br>
        <h4>Location:</h4>
        <input value={locationName}></input>
        <br></br>
        <br></br>

        <Button variant="success">Success</Button>


        </ParallaxLayer>
      </Parallax>
    </div>
  );
}



export default App;
