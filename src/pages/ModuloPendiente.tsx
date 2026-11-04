type Props = {
  titulo: string
}

function ModuloPendiente({ titulo }: Props) {
  return (
    <section className="panel">
      <div className="empty">
        <h2>{titulo}</h2>
        <p>
          El modulo ya tiene asignado su espacio dentro de
          Gestion Integral Equipos IE y sera desarrollado
          progresivamente.
        </p>
      </div>
    </section>
  )
}

export default ModuloPendiente
