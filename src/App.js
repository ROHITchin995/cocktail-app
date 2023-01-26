import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import  {About}  from './Pages/About';
import { Error } from './Pages/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SingleCocktail } from './Pages/SingleCocktail';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
