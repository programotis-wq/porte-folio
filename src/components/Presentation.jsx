import { useState } from 'react'
import Galerie from './Galerie'

function Presentation() {
  const [afficherPlus, setAfficherPlus] = useState(false)

  return (
    <section id="apropos">
      <h2>À propos</h2>
      <p>
        Après plus de 20 ans en foresterie, je me suis réorienté vers la programmation web. J'ai toujours été lié au monde de l'informatique depuis mon adolescence. Ma curiosité, mon esprit créatif et mes talents d'autodidacte m'ont toujours poussé à en savoir plus.
      </p>
      <p>
        Diplômé en janvier 2027 de l'AEC en Programmation Web et Mobile à l'Institut Teccart, j'ai accumulé des connaissances dans plusieurs domaines :
      </p>
      <ul>
        <li>Développement web client : HTML, CSS, JavaScript et React</li>
        <li>Développement web côté serveur : Node.js et Express</li>
        <li>Applications transactionnelles web : C#, ASP.NET Core MVC et Entity Framework Core</li>
        <li>Commerce électronique : PHP, MySQL, PDO et phpMyAdmin</li>
        <li>Bases de données : SQL, PL/SQL, PostgreSQL et phpMyAdmin</li>
        <li>Programmation orientée objet en Java et développement d'applications Android</li>
        <li>Travail d'équipe avec Git et GitHub</li>
      </ul>
      <p>Autrement dit : «&nbsp;Je livre la marchandise!&nbsp;»</p>

           <button className="bouton-plus" onClick={() => setAfficherPlus(!afficherPlus)}>
        {afficherPlus ? 'Réduire' : 'En savoir plus sur moi'}
      </button>

      {afficherPlus && (
        <div>
          <h3>Pourquoi me réorienter?</h3>
          <p>
            Mon corps ne suit plus. Le travail en forêt, en usine et en plomberie est très exigeant physiquement et ma qualité de vie en était très diminuée.<br/>
            Le développement web et mobile m'apporte ce que je cherchais : un métier qui rassemble esprit créatif et résolution de problèmes.
          </p>
          <p>
            J'ai accumulé plusieurs habiletés dans des domaines différents, comme l'édition photo et vidéo, le dessin 3D, l'édition et la production audio, et l'opération de machinerie assistée par ordinateur, comme la gravure laser et le CNC.
          </p>

          <h3>Mes qualifications autres que l'informatique</h3>
          <ul>
            <li>DEP en aménagement de la forêt</li>
            <li>DEP en plomberie-chauffage</li>
          </ul>

          <p>
            Au cours de ma carrière en foresterie, j'ai participé aux tests de rodage d'une application Visual Basic, « InvenStock », pour la prise de données d'inventaire forestier. J'ai aussi fait l'expérience de la conversion de format de fichier pour transmettre les données au MRNF.
          </p>
          <p>
            Mon expérience de chef d'équipe et de contremaître m'a appris la rigueur, l'autonomie et l'assiduité au travail, ce que j'applique maintenant à mes projets de développement. J'ai été amené à me débrouiller seul au cours de ma carrière, ce qui fait de moi un candidat de confiance en télétravail.
          </p>

          <h3>Expérience de travail</h3>
          <ul>
            <li>Bûcheron à la scie à chaîne, débardage du bois à la débusqueuse</li>
            <li>Travail dans une usine de production de panneaux pour la confection de meubles (Uniboard Sayabec)</li>
            <li>Plombier</li>
            <li>Technicien forestier</li>
            <li>Contremaître forestier</li>
            <li>Chef d'équipe en aménagement forestier, débroussaillage et reboisement</li>
            <li>Manœuvre dans une scierie</li>
          </ul>
          
          <Galerie />
        </div>
      )}
    </section>
  )
}
export default Presentation