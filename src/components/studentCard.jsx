import "../app.css";

function StudentCard(props) {
  // Fallback if city is missing (as shown in the TP)
  const ville = props.ville || "Non renseignée";

  return (
    <div className="card">
      <div className="card-avatar" aria-hidden="true">
        {props.prenom.charAt(0)}{props.nom.charAt(0)}
      </div>
      <h2>Fiche étudiant</h2>
      <p><strong>Nom & Prénom:</strong> {props.prenom} {props.nom}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Téléphone:</strong> {props.telephone}</p>
      <p><strong>Filière:</strong> {props.filiere}</p>
      <p><strong>Année:</strong> {props.anneeEtude}</p>
      <p><strong>Groupe:</strong> {props.groupe}</p>
      <p><strong>Ville:</strong> {ville}</p>
    </div>
  );
}

export default StudentCard;