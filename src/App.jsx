import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashoard.jsx";
// import Navbar from "./components/Navbar.jsx";
import MovieDetailPage from "./pages/MovieDetailPage.jsx";

import { MovieProvider } from "./context/Moviecontext.jsx";

function App() {
  return   (
   
   
    <MovieProvider>

    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
     
      </Routes>
      </MovieProvider>
  
  );
}

export default App;
  //n9dar nmodifie hnaa nder blast hadchy ireturni liya courses 