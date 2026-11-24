import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { StudentContext } from "../context/StudentContext.jsx";
import "./DetailEtudiant.css";

function DetailEtudiant() {
  const { id } = useParams();
  const { etudiants } = useContext(StudentContext);
  const etudiant = etudiants.find((element) => element.id === Number(id));

  if (!etudiant) {
    return (
      <main className="student-detail">
        <p>Étudiant introuvable !</p>
        <Link to="/etudiants">Retour à la liste des étudiants</Link>
      </main>
    );
  }

  return (
    <main className="student-detail">
      <img src={etudiant.image} alt={`${etudiant.prenom} ${etudiant.nom}`} />
      <h2>{etudiant.prenom} {etudiant.nom}</h2>
      <dl>
        <div><dt>Email</dt><dd>{etudiant.email}</dd></div>
        <div><dt>Téléphone</dt><dd>{etudiant.telephone}</dd></div>
        <div><dt>Filière</dt><dd>{etudiant.filiere}</dd></div>
        <div><dt>Année d'étude</dt><dd>{etudiant.anneeEtude}</dd></div>
        <div><dt>Groupe</dt><dd>{etudiant.groupe}</dd></div>
        <div><dt>Ville</dt><dd>{etudiant.ville}</dd></div>
      </dl>
      <Link to="/etudiants">Retour à la liste des étudiants</Link>
    </main>
  );
}

export default DetailEtudiant;
