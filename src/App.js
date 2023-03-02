import { Routes, Route } from 'react-router-dom';
import './App.css';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Routes>
            <Route path="/:id" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
