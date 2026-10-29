import portrait from '../assets/moi.jpg'

function Entete() {
  return (
    <header>
      <div className="entete-contenu">
        <div className="portrait">
          <img src={portrait} alt="Sylvain Otis" />
        </div>
        <div>
          <h1>Sylvain Otis</h1>
          <p>Développeur web</p>
          <ul>
            <li>Application web et application mobile</li>

          </ul>
        </div>
      </div>
      <nav className="menu">
        <a href="#apropos">À propos</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Entete