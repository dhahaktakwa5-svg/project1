import { useState } from 'react'
import takImg from './assets/tak.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  //const [count, setCount] = useState(0)
  const etudiant = {
    nom:"Dhahak",
    prenom:"Takoua",
    email:"dhahaktakwa5@gmail.com",
    tel:"29192252",
    filiere:"Genie Logiciel et Systeme d'Informatique",
    anne:"2026/2027",
    grp:"Glsi2b",
    ville:"Mahdia",
  };
  return (
  
<div className="motif">

<img src={takImg} alt="Photo de Dhahak Takwa" />
<h1>Fiche etudiant</h1>
<p><strong>Nom & Prenom:</strong>{etudiant.nom}</p>
<p><strong>Email:</strong> {etudiant.email}</p>
<p><strong>Téléphone:</strong> {etudiant.tel}</p>
<p><strong>Filière:</strong> {etudiant.filiere}</p>
<p><strong>Année d'étude:</strong> {etudiant.anne}</p>
<p><strong>Groupe:</strong> {etudiant.grp}</p>
<p><strong>Ville:</strong> {etudaint.ville}</p>
<button onClick={() => window.location.href = "mailto:${etudiant.email}"}>
  Contacter
</button>
</div>

  )
}

export default App
