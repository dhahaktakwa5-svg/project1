import './App.css'
import takImg from './assets/tak.jpg'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import StudentCard from './components/StudentCard.jsx'
import Footer from './components/Footer.jsx'

const etudiants = [
  {
    prenom: "Takoua",
    nom: "Dhahak",
    email: "dhahaktakwa5@gmail.com",
    telephone: "29192252",
    filiere: "Genie Logiciel et Systeme d'Informatique",
    anneeEtude: "2026/2027",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: takImg,
  },
  {
    prenom: "Slim",
    nom: "Boubaker",
    email: "slimboubaker@gmail.com",
    telephone: "+216 99 999 999",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: takImg,
  },
  {
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "+216 22 345 678",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Sousse",
    image: takImg,
  }
];

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      
      <main className="student-list">
        {etudiants.map((etudiant) => (
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
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
