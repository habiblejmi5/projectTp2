function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "15px 0" }}>
      <a href="#accueil">Accueil</a>
      <a href="#etudiants">Étudiants</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
export default Navbar;