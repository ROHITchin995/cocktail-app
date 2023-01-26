import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { Error } from './Pages/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
