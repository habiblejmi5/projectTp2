import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="site-nav">
      <Link to="/">Accueil</Link>
      <Link to="/etudiants">Étudiants</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
export default Navbar;