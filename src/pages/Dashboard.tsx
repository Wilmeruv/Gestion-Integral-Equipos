import StatusCard from '../components/StatusCard'
import type { Equipo } from '../types/Equipo'

type Props = {
  equipos: Equipo[]
  onVerEquipos: () => void
}

function Dashboard({ equipos, onVerEquipos }: Props) {
  const disponibles = equipos.filter(
    (e) => e.estado === 'Disponible' || e.estado === 'Seguimiento',
  ).length

  const fueraServicio = equipos.filter(
    (e) => e.estado === 'Fuera de servicio',
  ).length

  const disponibilidad =
    equipos.length === 0
      ? 0
      : (disponibles / equipos.length) * 100

  return (
    <>
      <section className="cards">
        <StatusCard titulo="Total equipos" valor={equipos.length} />
        <StatusCard titulo="Disponibles" valor={disponibles} color="green" />
        <StatusCard titulo="Fuera de servicio" valor={fueraServicio} color="red" />
        <StatusCard
          titulo="Disponibilidad"
          valor={`${disponibilidad.toFixed(1)}%`}
          color="blue"
        />
      </section>

      <section className="panel">
        <div className="panelTitle">
          <div>
            <h2>Estado general</h2>
            <p>Gestion Integral Equipos IE</p>
          </div>
        </div>

        <div className="welcome">
          <h3>Sistema de gestion de equipos</h3>

          <p>
            Actualmente estamos utilizando datos de prueba.
            Posteriormente estos indicadores utilizaran directamente
            los registros de Equipos IE.
          </p>

          <button className="primary" onClick={onVerEquipos}>
            Ver equipos
          </button>
        </div>
      </section>
    </>
  )
}

export default Dashboard
