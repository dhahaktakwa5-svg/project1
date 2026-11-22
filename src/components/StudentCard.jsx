import './StudentCard.css'
import { useState } from 'react'

function StudentCard({ etudiant, onDelete, onEdit }) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false)

  const basculerInformation = () => {
    setCoordonneesVisibles(!coordonneesVisibles)
  }

  return (
    <div className="student-card">

      <img
        src={etudiant.image}
        alt="Photo étudiant"
        className="student-image"
      />

      <h2>
        {etudiant.prenom} {etudiant.nom}
      </h2>

      <p>Filière : {etudiant.filiere}</p>
      <p>Année : {etudiant.anneeEtude}</p>
      <p>Groupe : {etudiant.groupe}</p>
      <p>Ville : {etudiant.ville}</p>

      {coordonneesVisibles && (
        <div>
          <p>Email : {etudiant.email}</p>
          <p>Téléphone : {etudiant.telephone}</p>
        </div>
      )}

      <button
        className="info-button"
        onClick={basculerInformation}
      >
        {coordonneesVisibles
          ? 'Masquer les informations'
          : 'Afficher les informations'}
      </button>

      <div className="buttons">

        <button onClick={() => onEdit(etudiant)}>
          Modifier
        </button>

        <button onClick={() => onDelete(etudiant.id)}>
          Supprimer
        </button>

      </div>

    </div>
  )
}

export default StudentCard