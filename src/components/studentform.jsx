import { useState } from "react";

export default function StudentForm({ onAjouterEtudiant }) {
    // State for all form fields as taught in TP 4 (Slide 23)
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [filiere, setFiliere] = useState("");
    const [anneeEtude, setAnneeEtude] = useState("");
    const [groupe, setGroupe] = useState("");
    const [ville, setVille] = useState("");
    const [image, setImage] = useState("");

    // Handle form submission (TP 4 - Slides 28 & 29)
    function handleSubmit(e) {
        e.preventDefault(); // Prevents default page reload[cite: 29]

        const nouvelEtudiant = {
            nom: nom,
            prenom: prenom,
            email: email,
            telephone: telephone,
            filiere: filiere,
            anneeEtude: anneeEtude,
            groupe: groupe,
            ville: ville,
            image: image,
        };

        // Send data to parent component via props (TP 4 - Slide 31)
        onAjouterEtudiant(nouvelEtudiant);

        // Optional: Reset form fields after submission
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

    return (
        <form onSubmit={handleSubmit} className="student-form">
            <h2>Ajouter un étudiant</h2>

            <div className="form-group">
                <label htmlFor="nom">Nom : </label>
                <input
                    type="text"
                    id="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="prenom">Prénom : </label>
                <input
                    type="text"
                    id="prenom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email : </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="telephone">Téléphone : </label>
                <input
                    type="tel"
                    id="telephone"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="filiere">Filière : </label>
                <select
                    id="filiere"
                    value={filiere}
                    onChange={(e) => setFiliere(e.target.value)}
                    required
                >
                    <option value="">Choisir une filière</option>
                    <option value="GLSI">GLSI</option>
                    <option value="DSI">DSI</option>
                    <option value="RSI">RSI</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="anneeEtude">Année d’étude : </label>
                <input
                    type="text"
                    id="anneeEtude"
                    value={anneeEtude}
                    onChange={(e) => setAnneeEtude(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="groupe">Groupe : </label>
                <input
                    type="text"
                    id="groupe"
                    value={groupe}
                    onChange={(e) => setGroupe(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="ville">Ville : </label>
                <input
                    type="text"
                    id="ville"
                    value={ville}
                    onChange={(e) => setVille(e.target.value)}
                    required
                />
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

            <button type="submit" className="btn-submit">Ajouter</button>
        </form>
    );
}