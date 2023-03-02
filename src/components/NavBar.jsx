import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <ul className="container">
        <li>
          <Link className="navbar-brand" to="/">
            LAB - WikiCountries
          </Link>
        </li>
      </ul>
    </nav>
  );
}
