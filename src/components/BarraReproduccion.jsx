export default function BarraReproduccion(){
  return (
    <div>
      <section className="barra-progreso">
        <div>
          <h1>Cancion</h1>
          <small>Artista</small>
        </div>
        <div className="progreso-cancion">
          <span>0:00</span>
          <input type="range"></input>
          <span>3:42</span>
        </div>
        <div className="controles">
          <button>⏮</button>
          <button>▶</button>
          <button>⏭</button>
        </div>
        <div className="volumen">
          <p>🔈</p>
          <input type="range" min="0" max="100"></input>
        </div>
      </section>
    </div>
  )
}