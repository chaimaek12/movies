import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/Moviecontext";
import { Link } from "react-router-dom";
import { images } from '../constant/images';


const MovieDetailPage = () => {
  const { id } = useParams(); // id de la route
 const { movies } = useContext(MovieContext);
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Film non trouvé</h2>;

   return (
  


   <div className={`${black ? "bg-gray-800 text-white" : "bg-white text-black"} transition-colors duration-500`}>
      
   
      <Link to="/"className="inline-block mb-6 text-indigo-400 hover:text-indigo-300">  go back </Link>

      
      <div className="max-w-4xl mx-auto bg-slate-800 rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
       
        <img className="w-full md:w-1/3 object-cover"   src={images[movie.image]} alt="" />

        
        <div className="p-6 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-indigo-400"> {movie.title}</h1>

          <p className="text-sm text-gray-400">📅 {movie.year}</p>

          <p className="text-gray-200 leading-relaxed"> {movie.description}</p>

          <button className="mt-4 w-fit bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-2 rounded-lg transition"> ▶ Watch</button>
        </div>
      </div>
    </div>



    
  );
};


export default MovieDetailPage;


