const projets = [
  {
    id: 1,
    titre: "API de capture d'erreurs",
    description: "API REST (Node.js, Express, PostgreSQL) qui valide les adresses saisies dans un formulaire web et signale les erreurs avec un diagnostic en français.",
    lien: "https://github.com/programotis-wq/api-capture-erreurs",
    texteLien: "Voir sur GitHub",
  },
  {
    id: 2,
    titre: "Dépanneur du Lac",
    description: "Site web démo avec formulaire «\u00A0Créer un profil\u00A0», autocomplétion d'adresse et base de données PostgreSQL.",
    lien: "https://programotis-wq.github.io/site_demo/",
    texteLien: "Voir le site",
  },
]
function Projets() {
  return (
    <section id="projets">
      <h2>Projets</h2>
      <div className="liste-projets">
        {projets.map((projet) => (
          <article key={projet.id}>
            <h3>{projet.titre}</h3>
            <p>{projet.description}</p>
            <a href={projet.lien}>{projet.texteLien}</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projets