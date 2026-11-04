type Props = {
  titulo: string
}

function Topbar({ titulo }: Props) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Mantenimiento de Equipos</p>
        <h1>{titulo}</h1>
      </div>

      <div className="user">
        <div className="avatar">WU</div>
        <div>
          <strong>Wilmer Ureña</strong>
          <span>Gestion Integral Equipos</span>
        </div>
      </div>
    </header>
  )
}

export default Topbar
