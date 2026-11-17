import { useState } from "react";
import "./studentform.css";

export default function StudentForm({
    etudiantAModifier,
    onAjouterEtudiant,
    onModifierEtudiant,
}) {
    const [nom, setNom] = useState(etudiantAModifier?.nom || "");
    const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
    const [email, setEmail] = useState(etudiantAModifier?.email || "");
    const [telephone, setTelephone] = useState(etudiantAModifier?.telephone || "");
    const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || "");
    const [anneeEtude, setAnneeEtude] = useState(etudiantAModifier?.anneeEtude || "");
    const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
    const [ville, setVille] = useState(etudiantAModifier?.ville || "");
    const [image, setImage] = useState(etudiantAModifier?.image || "");
    const [erreurs, setErreurs] = useState({});

    function validerFormulaire() {
        const nouvellesErreurs = {};

        if (!nom.trim()) nouvellesErreurs.nom = "Nom est obligatoire";
        if (!prenom.trim()) nouvellesErreurs.prenom = "Prénom est obligatoire";
        if (!email.trim()) {
            nouvellesErreurs.email = "Email est obligatoire";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            nouvellesErreurs.email = "Email invalide";
        }
        if (!telephone.trim()) nouvellesErreurs.telephone = "Téléphone est obligatoire";
        if (!filiere.trim()) nouvellesErreurs.filiere = "Filière est obligatoire";
        if (!anneeEtude.trim()) nouvellesErreurs.anneeEtude = "Année d’étude est obligatoire";
        if (!groupe.trim()) nouvellesErreurs.groupe = "Groupe est obligatoire";
        if (!ville.trim()) nouvellesErreurs.ville = "Ville est obligatoire";

        setErreurs(nouvellesErreurs);
        return Object.keys(nouvellesErreurs).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!validerFormulaire()) return;

        const donneesEtudiant = {
            nom,
            prenom,
            email,
            telephone,
            filiere,
            anneeEtude,
            groupe,
            ville,
            image,
        };

        if (etudiantAModifier) {
            onModifierEtudiant({
                ...etudiantAModifier,
                ...donneesEtudiant,
            });
        } else {
            onAjouterEtudiant(donneesEtudiant);
            setNom("");
            setPrenom("");
            setEmail("");
            setTelephone("");
            setFiliere("");
            setAnneeEtude("");
            setGroupe("");
            setVille("");
            setImage("");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="student-form" noValidate>
            <h2 className="form-text">
                {etudiantAModifier ? "Modifier un étudiant" : "Ajouter un étudiant"}
            </h2>

            <div className="form-group">
                <label htmlFor="nom">Nom : </label>
                <input
                    type="text"
                    id="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />
                {erreurs.nom && <p className="error-msg">{erreurs.nom}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="prenom">Prénom : </label>
                <input
                    type="text"
                    id="prenom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                />
                {erreurs.prenom && <p className="error-msg">{erreurs.prenom}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email : </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {erreurs.email && <p className="error-msg">{erreurs.email}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="telephone">Téléphone : </label>
                <input
                    type="tel"
                    id="telephone"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                />
                {erreurs.telephone && <p className="error-msg">{erreurs.telephone}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="filiere">Filière : </label>
                <select
                    id="filiere"
                    value={filiere}
                    onChange={(e) => setFiliere(e.target.value)}
                >
                    <option value="">Choisir une filière</option>
                    <option value="GLSI">GLSI</option>
                    <option value="DSI">DSI</option>
                    <option value="RSI">RSI</option>
                </select>
                {erreurs.filiere && <p className="error-msg">{erreurs.filiere}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="anneeEtude">Année d’étude : </label>
                <input
                    type="text"
                    id="anneeEtude"
                    value={anneeEtude}
                    onChange={(e) => setAnneeEtude(e.target.value)}
                />
                {erreurs.anneeEtude && <p className="error-msg">{erreurs.anneeEtude}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="groupe">Groupe : </label>
                <input
                    type="text"
                    id="groupe"
                    value={groupe}
                    onChange={(e) => setGroupe(e.target.value)}
                />
                {erreurs.groupe && <p className="error-msg">{erreurs.groupe}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="ville">Ville : </label>
                <input
                    type="text"
                    id="ville"
                    value={ville}
                    onChange={(e) => setVille(e.target.value)}
                />
                {erreurs.ville && <p className="error-msg">{erreurs.ville}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="image">Image : </label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={(e) => {
                        const fichier = e.target.files[0]; // retrieves selected image[cite: 27]
                        if (fichier) {
                            setImage(URL.createObjectURL(fichier)); // creates temporary URL[cite: 27]
                        }
                    }}
                />
            </div>

            <button type="submit" className="btn-submit">
                {etudiantAModifier ? "Enregistrer les modifications" : "Ajouter"}
            </button>
        </form>
    );
}