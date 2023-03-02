import { Routes, Route } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<CountriesList />} />
      </Routes>
    </div>
  );
}

export default App;
