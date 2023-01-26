import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { Error } from './Pages/Error';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Error />
    </div>
  );
}

export default App;
