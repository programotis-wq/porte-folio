import { useState } from 'react'

const modules = import.meta.glob('../assets/galerie/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})
const photos = Object.values(modules)

function Galerie() {
  const [ouverte, setOuverte] = useState(null)

  if (photos.length === 0) return null

  return (
    <>
      <h3>Mon travail en forêt</h3>
      <div className="galerie">
        {photos.map((src, index) => (
          <button key={src} className="galerie-vignette" onClick={() => setOuverte(src)}>
            <img src={src} alt={`Photo de mon travail en forêt, numéro ${index + 1}`} />
          </button>
        ))}
      </div>

      {ouverte && (
        <div className="galerie-fond" onClick={() => setOuverte(null)}>
          <img src={ouverte} alt="Photo agrandie" />
        </div>
      )}
    </>
  )
}

export default Galerie