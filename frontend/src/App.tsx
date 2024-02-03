import React, { useState } from 'react';
import logo from './logo.svg';
import tree from './tree.png';
import bush from './bush.png';
import cloud from './cloud.png';
import axios from "axios";

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
import CoolInput from './CoolInput';
import CartoonButton from './CartoonButton';

function App() {


  const [locationName, setLocName] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [Rdata, setData] = useState();
  //setKey(KEY);
  //setLanguage("en");
  //setRegion("es");

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

  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/route', { 'Latitude': lat, 'Longitude': long});
      console.log(response.data)
      setData(response.data)
      //someNestedValue = response.data?.['driving']?.['without']?.['emission'];

    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };


  return (
    <div className="App">
      
      <Parallax pages={5} style={{backgroundColor:"#87CEEB"}}>
        <ParallaxLayer speed={0.2} sticky={{ start: 0, end: 0.5 }}>
          <h1 className='title'> HealthWay </h1>
          
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
        <h2>Your Health Data</h2>
        <CoolInput onChange={handleClick} placeholder="Name" ></CoolInput>
        <br></br>
        <CoolInput onChange={handleClick} placeholder="Age" ></CoolInput>
        <br></br>
        <CoolInput onChange={handleClick} placeholder="Medical Condition" ></CoolInput>
        <br></br>
        <CoolInput onChange={handleClick} placeholder="Gender" ></CoolInput>


        <br></br>

        <h2>Location:</h2>
        <CoolInput onChange={handleClick} placeholder="Location" ></CoolInput>
        <br></br>
        <br></br>
        <CartoonButton children={"Calculate"} onClick={handleClick} color='green'></CartoonButton>
        



        </ParallaxLayer>
      </Parallax>
    </div>
  );
}



export default App;
