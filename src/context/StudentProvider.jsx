import { useState } from "react";
import { initialEtudiants } from "../data/student.js";
import { StudentContext } from "./StudentContext.jsx";

function StudentProvider({ children }) {
  const [etudiants, setEtudiants] = useState(initialEtudiants);

  return (
    <StudentContext.Provider value={{ etudiants, setEtudiants }}>
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;
