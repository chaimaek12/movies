import React from 'react';
import { Link } from 'react-router-dom';
import {Images, } from '../constant';
import Navbar from '../components/Navbar';
import Filmcard from '../components/filmcard';
import Tiltlaone from '../components/Tiltlaone';

function Dashoard() {
    return (

    <div>
         <Navbar/>
         {/* <Tiltlaone/> */}

         <Filmcard  />
        
      
   
    </div>

    );
}

export default Dashoard;