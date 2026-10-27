import { useState } from "react";
import "../app.css";

function StudentCard(props) {
  // Task 2: State to manage whether contact details are visible or hidden
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  const basculerInformations = () => {
    setCoordonneesVisibles(!coordonneesVisibles);
  };

  const ville = props.ville || "Non renseignée";

  return (
    <div className="card">
      <img
        className="card-avatar"
        src={props.image}
        alt={`${props.prenom} ${props.nom}`}
      />
      <h2>Fiche étudiant</h2>
      <p><strong>Nom & Prénom:</strong> {props.prenom} {props.nom}</p>
      <p><strong>Filière:</strong> {props.filiere}</p>
      <p><strong>Année:</strong> {props.anneeEtude}</p>
      <p><strong>Groupe:</strong> {props.groupe}</p>
      <p><strong>Ville:</strong> {ville}</p>

      {/* Task 2: Conditional rendering for contact info */}
      {coordonneesVisibles && (
        <div className="coordonnees">
          <p><strong>Email:</strong> {props.email}</p>
          <p><strong>Téléphone:</strong> {props.telephone}</p>
        </div>
      )}

      {/* Button to show/hide coordinates */}
      <button onClick={basculerInformations} style={{ margin: "5px 0", display: "block" }}>
        {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
      </button>

      {/* Task 4: Button to modify student info */}
      <button onClick={props.modifier} style={{ backgroundColor: "#ffc107", color: "black", margin: "5px 0", display: "block" }}>
        Modifier le nom
      </button>

      {/* Task 3: Button to delete student */}
      <button onClick={props.supprimer} style={{ backgroundColor: "#ff4d4d", color: "white", margin: "5px 0", display: "block" }}>
        Supprimer l'étudiant
      </button>
    </div>
  );
}

export default StudentCard;