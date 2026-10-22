import { useState } from 'react'
import takImg from './assets/tak.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function StudentCard(props) {
  return (
    <div className="motif">
      <img src={props.image} alt="Photo de l'étudiant" />
      <h1>Fiche etudiant</h1>
      <p><strong>Nom & Prénom:</strong> {props.prenom} {props.nom}</p>
      <p>Email: {props.email}</p>
      <p>Téléphone: {props.Tel}</p>
      <p>Filière: {props.filiere}</p>
      <p>Année: {props.Annee}</p>
      <p>Groupe: {props.Groupe}</p>
      <p>Ville: {props.ville}</p>
    </div>
  );
}

export default StudentCard;