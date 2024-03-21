import Tvalidation from "./Tvalidation";
import pjointe from '../img/tache.jpg'

const TVHtml = () => {

    const tacheValid = [{
        numTache: 'Tâche N°',
        duree: 'Duré: 60h',
        syllabus: 'Syllabus',
        nomSyllabus: 'Les bases en HTML & CSS',
        titre: 'Tâche de validation HTML & CSS',
        objectif: "Expliquez brièvement l'objectif de la tâche de validation.", 
        Description: "Décrivez en détail la tâche que le validateur doit effectuer. Incluez toutes les étapes nécessaires et les critères d'acceptation.",
        EtapeValidation: 'Etapes de validation',
        EtapeValidation1:  [
            {Etape1:"Détaillez l'action que le validateur doit effectuer."},
            { critereValid: "Qu'est-ce qui constitue un résultat réussi pour cette étape ?"},
        ],
        titre2:'Liens utiles',
        liensUtiles:"https://webdevtrick.com/wp-content/uploads/html-css-form-validation.mp4?_=1",
        titre3:"Pièce jointe",
        imgPjointe: pjointe
      }]
      
    return (  <>
        {tacheValid &&
        tacheValid.map((tache) =>
          <Tvalidation 
            numTache={tache.numTache} duree={tache.duree} syllabus={tache.syllabus}
            nomSyllabus={tache.nomSyllabus}
            titre={tache.titre} Description={tache.Description}
            objectif={tache.objectif} titre2={tache.titre2} liensUtiles={tache.liensUtiles}
            EtapeValidation={tache.EtapeValidation} titre3={tache.titre3} imgPjointe={tache.imgPjointe}
            EtapeValidation1={tache.EtapeValidation1.map((etap, index) => 
            <li key={index} >
              {etap.Etape1} {etap.critereValid} 
            </li>)} />
        )}
    </> );
}
 
export default TVHtml;