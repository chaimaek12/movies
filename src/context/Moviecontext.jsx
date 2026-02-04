import { createContext, useState } from "react";
import Courses  from "../data/courses.json";
export const MovieContext = createContext();
// import { Images } from "../constant";
// import images from "../constant/images";

 
export const MovieProvider = ({ children }) => {
//   const [movies] = useState([
//     { id: 1, title: "allo", year: 2010, director: "Christopher Nolan" },
//     { id: 2, title: "Interstellar", year: 2014, director: "Christopher Nolan" },
//     { id: 3, title: "test", year: 2019, director: "Bong Joon-ho" },
//   ]);



const [movies, setMovies] = useState(Courses);

// if (Courses.id=1) return{
//     <img src={Images.tabbb} alt="" />
// }



  return (
    <MovieContext.Provider value={{ movies,setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
