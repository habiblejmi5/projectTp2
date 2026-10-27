import { useState } from "react";
import "./app.css";
import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import StudentCard from "./components/studentCard.jsx";
import studentImage1 from "./assets/1.jpg"; 
import studentImage2 from "./assets/2.jpeg"; 
import studentImage3 from "./assets/3.jpeg"; 

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "amine ",
      nom: "amine",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: studentImage1,
    },
    {
      prenom: "mahdi ",
      nom: "mahdi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 22 345 678",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sousse",
      image: studentImage2,
    },
    {
      prenom: "sousou",
      nom: "boubou",
      email: "mariem.khalfallah@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Sfax",
      image: studentImage3,
    },
  ]);

  // Task 5: State for the field of study filter
  const [filiereFiltree, setFiliereFiltree] = useState("Tous");

  // Task 1: Add a student
  const ajouterEtudiant = () => {
    const nouvelEtudiant = {
      prenom: "Yassine",
      nom: "Ben Salem",
      email: "yassine.bensalem@gmail.com",
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Kairouan",
      image: studentImage1,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  };

  // Task 3: Delete a student
  const supprimerEtudiant = (emailAExclure) => {
    setEtudiants(etudiants.filter((etudiant) => etudiant.email !== emailAExclure));
  };

  // Task 4: Modify a student's name
  const modifierEtudiant = (emailCible) => {
    const etudiantCible = etudiants.find((etudiant) => etudiant.email === emailCible);
    if (!etudiantCible) return;

    const nouveauNom = window.prompt("Entrez le nouveau nom :", etudiantCible.nom);
    if (nouveauNom === null || !nouveauNom.trim()) return;

    setEtudiants((etudiantsActuels) =>
      etudiantsActuels.map((etudiant) =>
        etudiant.email === emailCible
          ? { ...etudiant, nom: nouveauNom.trim() }
          : etudiant
      )
    );
  };

  // Task 5: Filter students based on selection
  const etudiantsFiltres = filiereFiltree === "Tous"
    ? etudiants
    : etudiants.filter((etudiant) => etudiant.filiere === filiereFiltree);

  return (
    <div className="container">
      <Header />
      <Navbar />
      
      <main>
        <div className="student-actions">
          <button onClick={ajouterEtudiant}>+ Ajouter un étudiant</button>

          {/* Task 5: Dropdown filter */}
          <select 
            value={filiereFiltree} 
            onChange={(e) => setFiliereFiltree(e.target.value)}
          >
            <option value="Tous">Toutes les filières</option>
            <option value="Génie Logiciel et Systèmes d'Information">Génie Logiciel et Systèmes d'Information</option>
          </select>
        </div>

        {/* Map through the filtered list */}
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            supprimer={() => supprimerEtudiant(etudiant.email)}
            modifier={() => modifierEtudiant(etudiant.email)}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;