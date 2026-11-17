import { useRef, useState } from "react";
import "./app.css";
import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import StudentCard from "./components/studentCard.jsx";
import studentImage1 from "./assets/1.jpg"; 
import studentImage2 from "./assets/2.jpeg"; 
import studentImage3 from "./assets/3.jpeg"; 
import StudentForm from "./components/studentform.jsx";

function App() {
  const nextStudentId = useRef(4);
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "amine ",
      nom: "amine",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: studentImage1,
    },
    {
      id: 2,
      prenom: "mahdi ",
      nom: "mahdi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 22 345 678",
      filiere: "DSI",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sousse",
      image: studentImage2,
    },
    {
      id: 3,
      prenom: "sousou",
      nom: "boubou",
      email: "mariem.khalfallah@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Sfax",
      image: studentImage3,
    },
  ]);

  const [etudiantAModifier, setEtudiantAModifier] = useState(null);

  // State for the field of study filter
  const [filiereFiltree, setFiliereFiltree] = useState("Tous");
  //generer new id
  function genererNouvelId() {
    const id = nextStudentId.current;
    nextStudentId.current += 1;
    return id;
  }

  // Task 1: Add a student function adapted from TP 4 (Slide 30)
  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: genererNouvelId(),
    };
    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
  }

  // Task 3: Delete a student
  const supprimerEtudiant = (idAExclure) => {
    setEtudiants((etudiantsActuels) =>
      etudiantsActuels.filter((etudiant) => etudiant.id !== idAExclure)
    );
  };

  function modifierEtudiant(etudiantModifie) {
    setEtudiants((etudiantsActuels) =>
      etudiantsActuels.map((etudiant) =>
        etudiant.id === etudiantModifie.id
          ? etudiantModifie
          : etudiant
      )
    );
    setEtudiantAModifier(null);
  }

  // Task 5: Filter students based on selection
  const etudiantsFiltres = filiereFiltree === "Tous"
    ? etudiants
    : etudiants.filter((etudiant) => etudiant.filiere === filiereFiltree);

  return (
    <div className="container">
      <Header />
      <Navbar />       
        <div className="student-actions">
          {/* Dropdown filter */}
          <select 
            value={filiereFiltree} 
            onChange={(e) => setFiliereFiltree(e.target.value)}
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
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            supprimer={() => supprimerEtudiant(etudiant.id)}
            modifier={() => setEtudiantAModifier(etudiant)}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;