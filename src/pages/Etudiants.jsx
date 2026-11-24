import { useContext, useRef, useState } from "react";
import StudentCard from "../components/studentCard.jsx";
import StudentForm from "../components/studentform.jsx";
import { StudentContext } from "../context/StudentContext.jsx";
import "./Etudiants.css";

function Etudiants() {
  const { etudiants, setEtudiants } = useContext(StudentContext);
  const nextStudentId = useRef(
    Math.max(0, ...etudiants.map((etudiant) => etudiant.id)) + 1
  );
  const [etudiantAModifier, setEtudiantAModifier] = useState(null);
  const [filiereFiltree, setFiliereFiltree] = useState("Tous");
  const [recherche, setRecherche] = useState("");

  function ajouterEtudiant(nouvelEtudiant) {
    setEtudiants((anciensEtudiants) => [
      ...anciensEtudiants,
      { ...nouvelEtudiant, id: nextStudentId.current++ },
    ]);
  }

  function supprimerEtudiant(idAExclure) {
    setEtudiants((etudiantsActuels) =>
      etudiantsActuels.filter((etudiant) => etudiant.id !== idAExclure)
    );
  }

  function modifierEtudiant(etudiantModifie) {
    setEtudiants((etudiantsActuels) =>
      etudiantsActuels.map((etudiant) =>
        etudiant.id === etudiantModifie.id ? etudiantModifie : etudiant
      )
    );
    setEtudiantAModifier(null);
  }

  const termeRecherche = recherche.trim().toLocaleLowerCase();
  const etudiantsFiltres = etudiants.filter((etudiant) => {
    const correspondAFiliere =
      filiereFiltree === "Tous" || etudiant.filiere === filiereFiltree;
    const correspondARecherche =
      !termeRecherche ||
      [
        etudiant.prenom,
        etudiant.nom,
        etudiant.email,
        etudiant.telephone,
        etudiant.filiere,
        etudiant.groupe,
        etudiant.ville,
      ].some((valeur) => valeur.toLocaleLowerCase().includes(termeRecherche));
    return correspondAFiliere && correspondARecherche;
  });

  return (
    <section className="etudiants-page">
      <h2>Gestion des étudiants</h2>
      <div className="student-actions">
        <input
          type="search"
          aria-label="Rechercher un étudiant"
          placeholder="Rechercher un étudiant..."
          value={recherche}
          onChange={(event) => setRecherche(event.target.value)}
        />
        <select
          aria-label="Filtrer par filière"
          value={filiereFiltree}
          onChange={(event) => setFiliereFiltree(event.target.value)}
        >
          <option value="Tous">Toutes les filières</option>
          <option value="GLSI">GLSI</option>
          <option value="DSI">DSI</option>
          <option value="RSI">RSI</option>
        </select>
      </div>

      <StudentForm
        key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
        etudiantAModifier={etudiantAModifier}
        onAjouterEtudiant={ajouterEtudiant}
        onModifierEtudiant={modifierEtudiant}
      />

      <main>
        {etudiantsFiltres.length ? (
          etudiantsFiltres.map((etudiant) => (
            <StudentCard
              key={etudiant.id}
              {...etudiant}
              supprimer={() => supprimerEtudiant(etudiant.id)}
              modifier={() => setEtudiantAModifier(etudiant)}
            />
          ))
        ) : (
          <p className="no-students">Aucun étudiant trouvé.</p>
        )}
      </main>
    </section>
  );
}

export default Etudiants;
