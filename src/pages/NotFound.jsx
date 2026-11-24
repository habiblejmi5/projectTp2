import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found-page">
      <h2>404</h2>
      <p>Oups! Cette page n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </main>
  );
}

export default NotFound;
