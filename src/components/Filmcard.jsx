
import React, { useContext } from 'react';
import { Images  } from '../constant';
import { IoIosAlarm } from "react-icons/io";


import {Link} from  'react-router-dom';
import { MovieContext } from '../context/Moviecontext';
import { images } from '../constant/images';
function Filmcard() {
    const {movies}=useContext(MovieContext);
 

//         <div  className='p-6'>  
//         <div  className='flex   items-center  gap-30  pt-10 pl-2  pr-2 '  >
            
//         <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//          <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//          <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//          <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//          <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//          <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//          <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//      </div>



//    <div  className='flex   items-center  gap-30  pt-10 pl-2  pr-2 '  >
            
//         <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//          <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//          <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//          <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//          <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//          <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//          <div className='cardone'>
//             <img  className='w-40'  src={Images.lfilm} alt="" />
//             <p>5.0 .38 reviews </p>
//             <h1>Tenet</h1>
//         </div>
//      </div>


//      </div>


  return (
    <div className=' bg-gray-900   '>
      <h1 className='text-3xl font-bold mb-8 text-center    text-white'>Films</h1>
<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3   p-4 lg:grid-cols-4">
      {movies.map((movie) => (
        <div key={movie.id}className='border rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4   hover:scale-105 transition-transform duration-300
 bg-slate-800 text-white
 flex flex-col  items-center'>
          
          <img  className=' h-48 object-cover    rounded-lg mb-4 transition duration-300 group-hover:scale-105' src={images[movie.image]} alt="" />
          <h3 className=" text-center  text-lg font-bold text-yellow-400" >{movie.title}</h3>
       
          <p className=" mb-4  text-gray-400  bg-black/70 text-xs px-2 py-1 rounded-full">Year: {movie.year}</p>
         
          <Link   className='mt-4 inline-block bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-2 rounded-full text-sm transition' to={`/movie/${movie.id}`}>See Details</Link>  
        </div>

       
      ))}
    </div>
    </div>
  );
};

export default Filmcard;