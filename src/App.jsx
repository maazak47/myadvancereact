import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './componets/Greeting'
import Userdetails from './componets/Userdetails'
import { DSUSerdetails } from './componets/Userdetails'
import Citydetails from './componets/Citydetails'
import Pcity from './componets/Pcity'
import Conatiner from "./componets/Conatiner"
import UserTable from "./componets/usertable"
import UserDynamictable from"./componets/userDynamictable"
import CarouselCIty from "./componets/Carousels"
import Counter from './componets/hooks/useState/counter'
import CityAccordian from './componets/CityAccordian'
import ChangeColor from './componets/hooks/useState/ChangeColor'
import InputVAlue from "./componets/hooks/useState/gettingInputValue"
import { NextUSer } from './componets/hooks/useState/nextUser'
import InputValueB from './componets/hooks/useState/getInputvalueB'
import FullName from './componets/hooks/useState/getFullName'
import ShowImg from './componets/hooks/useState/showImg'
import Rectangle from './componets/hooks/useState/addRectangle'




function App() {
  const nanded={
    name: "naned",
    code: "46541",
    img: "vite.svg",
    population: "10cr",
    popularPlace: "railway station",    
    state: "maharstra",
  };

  const Mumbai = {
    name: "mumbai",
    code: "658543",
    img: "vite.svg",
    population: "50cr",
    popularPlace: "india way of gate",
  };
  const Nizamabad = {
    name: "nizamabad",
    code: "503001",
    img:"vite.svg",
    population : "50cr",
    popularPlace : "nizamsagar",

  };

 
  return (
    
    <>
    <Rectangle/>
    <br /><hr />
    <ShowImg/>
    <br /><hr />
    {/* <FullName/>
    <br /><hr />
     <NextUSer/>
    <br /> <hr />
    <InputValueB/>
    <br /><hr />
    <InputVAlue/>
    <hr /><br />
  <ChangeColor/>
  <br />
  <hr />
 <Counter/>
  <hr />
  <br />
  <CityAccordian/>


<CarouselCIty/>
      <br />

    <hr />
    < UserDynamictable />
    <br />
    <hr />
    <Greeting data ='maaz' name='khan' />  
    <hr /><hr />
    <Userdetails name = "maaz" age = "23" city='nizamabad'/>
    <hr />
    <DSUSerdetails name = "aman" age="23" city= "hyderabad" />
    <hr />
    <Citydetails details={Mumbai}/>
    <Pcity details= {Nizamabad}/>

    <Conatiner>
    <ol>
      <li>altamas</li>
      <li>maaz</li>
    </ol>
    </Conatiner>
    <UserTable/>  */}

    </>
    

    
  )
};

export default App
