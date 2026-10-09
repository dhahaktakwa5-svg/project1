import { useState } from 'react'
import takImg from './assets/tak.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
const prenom_nom="Dhahak takoua";
const email="dhahaktakwa5@gmail.com";
const tel="29192252";
const filiere="Genie Logiciel et Systeme d'Informatique";
const anne="2026/2027";
const grp="Glsi2b";
const ville="Mahdia";

function App() {
  //const [count, setCount] = useState(0)

  return (
  
<div className="motif">

<img src={takImg} alt="Photo de Dhahak Takwa" />
<h1>Fiche etudiant</h1>
<p><strong>Nom & Prenom:</strong>{prenom_nom}</p>
<p><strong>Email:</strong> {email}</p>
<p><strong>Téléphone:</strong> {tel}</p>
<p><strong>Filière:</strong> {filiere}</p>
<p><strong>Année d'étude:</strong> {anne}</p>
<p><strong>Groupe:</strong> {grp}</p>
<p><strong>Ville:</strong> {ville}</p>
<button onClick={() => window.location.href = "mailto:${email}"}>
  Contacter
</button>
</div>

  )
}

export default App
