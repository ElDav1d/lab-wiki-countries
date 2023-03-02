import { Routes, Route } from 'react-router-dom';
import './App.css';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
