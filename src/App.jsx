import './App.css'
import takImg from './assets/tak.jpg'
import { useState } from 'react'

import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import StudentCard from './components/StudentCard.jsx'
import Footer from './components/Footer.jsx'
import StudentForm from './components/StudentForm.jsx'

const initialEtudiants = [
  {
    id: 1,
    nom: 'Dhahak',
    prenom: 'Takoua',
    email: 'dhahaktakwa5@gmail.com',
    telephone: '29192252',
    filiere: 'GLSI',
    anneeEtude: '2026/2027',
    groupe: 'GLSI 2',
    ville: 'Mahdia',
    image: takImg
  },
  {
    id: 2,
    nom: 'Boubaker',
    prenom: 'Slim',
    email: 'slimboubaker@gmail.com',
    telephone: '99999999',
    filiere: 'GLSI',
    anneeEtude: '2ème année',
    groupe: 'GLSI 2',
    ville: 'Mahdia',
    image: takImg
  },
  {
    id: 3,
    nom: 'Trabelsi',
    prenom: 'Sarra',
    email: 'sarra.trabelsi@gmail.com',
    telephone: '22345678',
    filiere: 'GLSI',
    anneeEtude: '2ème année',
    groupe: 'GLSI 1',
    ville: 'Sousse',
    image: takImg
  }
]

function App() {
  const [etudiants, setEtudiants] = useState(initialEtudiants)

  const [recherche, setRecherche] = useState('')

  const [formVisible, setFormVisible] = useState(false)

  const [etudiantAModifier, setEtudiantAModifier] = useState(null)

  // Ouvrir le formulaire d'ajout
  const ouvrirAjout = () => {
    setEtudiantAModifier(null)
    setFormVisible(!formVisible)
  }

  // Ouvrir le formulaire de modification
  const ouvrirModification = (etudiant) => {
    setEtudiantAModifier(etudiant)
    setFormVisible(true)
  }

  // Fermer le formulaire
  const fermerFormulaire = () => {
    setFormVisible(false)
    setEtudiantAModifier(null)
  }

  // Ajouter un étudiant
  const ajouterEtudiant = (nouvelEtudiant) => {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now(),
      image: nouvelEtudiant.image || takImg
    }

    setEtudiants([...etudiants, etudiantAvecId])
    fermerFormulaire()
  }

  // Supprimer un étudiant
  const supprimerEtudiant = (id) => {
    setEtudiants(
      etudiants.filter((etudiant) => etudiant.id !== id)
    )
  }

  // Enregistrer les modifications
  const enregistrerModification = (etudiantModifie) => {
    setEtudiants(
      etudiants.map((etudiant) =>
        etudiant.id === etudiantModifie.id
          ? etudiantModifie
          : etudiant
      )
    )

    fermerFormulaire()
  }

  // Recherche
  const etudiantsFiltres = etudiants.filter((etudiant) =>
    (
      etudiant.nom +
      ' ' +
      etudiant.prenom +
      ' ' +
      etudiant.email +
      ' ' +
      etudiant.filiere
    )
      .toLowerCase()
      .includes(recherche.toLowerCase())
  )

  return (
    <div>
      <Header />
      <Navbar />

      <main>
        <h1>Fiche étudiant</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Rechercher un étudiant..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>

        <h2
          className="ajouter-titre"
          onClick={ouvrirAjout}
        >
          Ajouter étudiant
        </h2>

        {formVisible && (
          <StudentForm
            onAjouterEtudiant={ajouterEtudiant}
            etudiantAModifier={etudiantAModifier}
            onModifierEtudiant={enregistrerModification}
            onClose={fermerFormulaire}
          />
        )}

        <div className="students-container">
          {etudiantsFiltres.map((etudiant) => (
            <StudentCard
              key={etudiant.id}
              etudiant={etudiant}
              onDelete={supprimerEtudiant}
              onEdit={ouvrirModification}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
