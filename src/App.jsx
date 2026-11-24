import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "./components/header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import StudentProvider from "./context/StudentProvider.jsx";
import Home from "./pages/Home.jsx";
import Etudiants from "./pages/Etudiants.jsx";
import DetailEtudiant from "./pages/DetailEtudiant.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/etudiants" element={<Etudiants />} />
            <Route path="/etudiants/:id" element={<DetailEtudiant />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;