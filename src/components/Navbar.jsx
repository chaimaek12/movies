// import React from 'react';
// import { Images } from '../constant';
// import MovieDetailPage from '../pages/MovieDetailPage';


// function Navbar() {
//     return (
//         <div  className='bg-gray-900  text-gray-600 flex items-center justify-between'>
//         <div className='droite    flex items-center justify-center   gap-20'> 
//             <div className='photos'>
//                 <img  className='w-10   ml-4' src={Images.mov}alt="" />
//             </div>
//             <div className='linkss  flex gap-7'>
//                 <a  className='  hover:text-white  hover:underline' href="">Home</a>
//                 <a className='  hover:text-white  hover:underline' href="">tv shows</a>
//                 <a  className='  hover:text-white  hover:underline' href=""> Movies</a>
//                 <a   className='  hover:text-white   hover:underline' href="">new & popular</a>
//                 <a   className='  hover:text-white    hover:underline' href=""> my list </a>
//             </div>
//         </div>
//         <div className='gauche   flex  gap-4'>
//             <input  className='bg-gray-800    flex justify-center items-center  m-auto h-[30px] w-[180px] rounded-3xl  p-4' type="text"  placeholder='serach' />
//             <img  className='w-11  mr-4 rounded-full' src={Images.ptofil}alt="" />

//         </div>
//         </div>
//     );
// }

// export default Navbar;

import React, { useState, useContext } from "react";
import { Images } from "../constant";
import { MovieContext } from "../context/Moviecontext";
import { Link, useNavigate } from "react-router-dom";
import { IoMoon } from "react-icons/io5";

const Navbar = () => {
  const { movies = [] } = useContext(MovieContext);
  const [titres, settitres] = useState("");  //dakchy li ktbt finput
  const [results, setResults] = useState([]); //laflam libhal dakchy li ktbt
  const navigate = useNavigate();   //bach nmchy lpage dyal details 


  //nbdlo nightmood 

    const[black,setblack]=useState(false) //true dark 

const onchangee=()=>{
    
    setblack(!black)  //changement
}


  // hna bach itl3o smiyat dyal alflam oanaa kn9lb bhala kitfeltraw 
  const chercher = (e) => {
    const value = e.target.value;  //knakhod lvalue mnlinput
    settitres(value); 

    if (value.length > 0) {
      const filter = movies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filter); //bach ibano hadok result li bhal bhal 
    } else {
      setResults([]);
    }
  };


  return (
    //  <div className="bg-gray-900 text-gray-600 flex items-center justify-between p-4 relative   ">
    <div
  className={`flex items-center justify-between p-4 relative transition-colors duration-500 ${
    black ? "bg-gray-800 text-white" : "bg-white text-black"
  }`}
>

      <div className="flex items-center gap-20">
        <div className="photos">
          <img className="w-10 ml-4" src={Images.mov} alt="" />
        </div>
        <div className="links flex gap-7">
          <a className="hover:text-white hover:underline" href="/">Home</a>
          <a className="hover:text-white hover:underline" href="/">TV Shows</a>
          <a className="hover:text-white hover:underline" href="/">Movies</a>
          <a className="hover:text-white hover:underline" href="/">New & Popular</a>
          <a className="hover:text-white hover:underline" href="/">My List</a>
        </div>
      </div>

      
      <div className="flex gap-4 relative">
        <input
          type="text"
          value={titres}
          onChange={chercher}// bach ib9a ifelity dema 
     
          placeholder="Search..."
          className="bg-gray-800 h-10 w-64 rounded-3xl px-4 text-white focus:outline-none"
        />

         {/* Dropdown    kiban hta knkteb chi haja  */}
        {results.length > 0 && (
          <div className="absolute top-full left-0 w-64 bg-white text-black mt-1 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
            {results.map((movie) => (
              <Link
                key={movie.id}
                to={`/movies/${movie.id}`}
                className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
               
              >
                {movie.title}
              </Link>
            ))}
          </div>
        )}

        <img
          className="w-11 mr-4 rounded-full"
          src={Images.ptofil}
          alt=""
        />
<div className="    flex items-center justify-center text-white">
        <   IoMoon   onClick={onchangee} />
</div>
      </div>
    </div>
  );
};

export default Navbar;
