import './StudentForm.css'
import { useState, useEffect } from 'react'

function StudentForm({
  onAjouterEtudiant,
  etudiantAModifier,
  onModifierEtudiant,
  onClose
}) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    filiere: '',
    anneeEtude: '',
    groupe: '',
    ville: ''
  })

  const [image, setImage] = useState('')

  const [erreurs, setErreurs] = useState({})

  // Préremplir les champs en mode modification
  useEffect(() => {
    if (etudiantAModifier) {
      setFormData({
        nom: etudiantAModifier.nom || '',
        prenom: etudiantAModifier.prenom || '',
        email: etudiantAModifier.email || '',
        telephone: etudiantAModifier.telephone || '',
        filiere: etudiantAModifier.filiere || '',
        anneeEtude: etudiantAModifier.anneeEtude || '',
        groupe: etudiantAModifier.groupe || '',
        ville: etudiantAModifier.ville || ''
      })

      setImage(etudiantAModifier.image || '')
    } else {
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        filiere: '',
        anneeEtude: '',
        groupe: '',
        ville: ''
      })

      setImage('')
    }

    setErreurs({})
  }, [etudiantAModifier])

  // Gérer les changements des champs
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Sélectionner une image
  const handleImage = (e) => {
    const fichier = e.target.files[0]

    if (fichier) {
      setImage(URL.createObjectURL(fichier))
    }
  }

  // Validation du formulaire
  const validerFormulaire = () => {
    const nouvellesErreurs = {}

    if (!formData.nom.trim()) {
      nouvellesErreurs.nom = 'Le nom est obligatoire'
    }

    if (!formData.prenom.trim()) {
      nouvellesErreurs.prenom = 'Le prénom est obligatoire'
    }

    if (!formData.email.trim()) {
      nouvellesErreurs.email = "L'email est obligatoire"
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      nouvellesErreurs.email = 'Format email invalide'
    }

    if (!formData.telephone.trim()) {
      nouvellesErreurs.telephone = 'Le téléphone est obligatoire'
    }

    setErreurs(nouvellesErreurs)

    return Object.keys(nouvellesErreurs).length === 0
  }

  // Ajouter ou modifier
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validerFormulaire()) {
      return
    }

    const etudiant = {
      ...formData,
      image: image
    }

    if (etudiantAModifier) {
      onModifierEtudiant({
        ...etudiantAModifier,
        ...etudiant
      })
    } else {
      onAjouterEtudiant(etudiant)
    }
  }

  return (
    <div className="student-form-container">

      <h2>
        {etudiantAModifier
          ? 'Modifier un étudiant'
          : 'Ajouter un étudiant'}
      </h2>

      <form onSubmit={handleSubmit}>

        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
        />
        {erreurs.nom && <p className="error">{erreurs.nom}</p>}

        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
        />
        {erreurs.prenom && <p className="error">{erreurs.prenom}</p>}

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {erreurs.email && <p className="error">{erreurs.email}</p>}

        <label htmlFor="telephone">Téléphone :</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
        />
        {erreurs.telephone && <p className="error">{erreurs.telephone}</p>}

        <label htmlFor="filiere">Filière :</label>
        <select
          id="filiere"
          name="filiere"
          value={formData.filiere}
          onChange={handleChange}
          required
        >
          <option value="">Choisir une filière</option>
          <option value="GLSI">GLSI</option>
          <option value="DSI">DSI</option>
          <option value="RSI">RSI</option>
        </select>

        <label htmlFor="anneeEtude">Année d'étude :</label>
        <input
          type="text"
          id="anneeEtude"
          name="anneeEtude"
          value={formData.anneeEtude}
          onChange={handleChange}
          required
        />

        <label htmlFor="groupe">Groupe :</label>
        <input
          type="text"
          id="groupe"
          name="groupe"
          value={formData.groupe}
          onChange={handleChange}
          required
        />

        <label htmlFor="ville">Ville :</label>
        <input
          type="text"
          id="ville"
          name="ville"
          value={formData.ville}
          onChange={handleChange}
          required
        />

        <label htmlFor="image">Image :</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImage}
        />

        {image && (
          <img
            src={image}
            alt="Aperçu"
            width="100"
          />
        )}

        <button type="submit">
          {etudiantAModifier
            ? 'Enregistrer les modifications'
            : 'Ajouter'}
        </button>

        <button type="button" onClick={onClose}>
          Annuler
        </button>

      </form>
    </div>
  )
}

export default StudentForm