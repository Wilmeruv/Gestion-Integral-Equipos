import { useMemo, useState } from 'react'
import type { Equipo } from '../types/Equipo'

type Props = {
  datos: Equipo[]
}

function Equipos({ datos }: Props) {
  const [buscar, setBuscar] = useState('')
  const [estado, setEstado] = useState('Todos')
  const [proyecto, setProyecto] = useState('Todos')
  const [descendente, setDescendente] = useState(false)

  const proyectos = [
    'Todos',
    ...Array.from(new Set(datos.map((e) => e.ubicacion))),
  ]

  const estados = [
    'Todos',
    ...Array.from(new Set(datos.map((e) => e.estado))),
  ]

  const equipos = useMemo(() => {
    const resultado = datos.filter((e) => {
      const texto = buscar.toLowerCase()

      const coincideBusqueda =
        e.ficha.toLowerCase().includes(texto) ||
        e.denominacion.toLowerCase().includes(texto)

      const coincideEstado =
        estado === 'Todos' || e.estado === estado

      const coincideProyecto =
        proyecto === 'Todos' || e.ubicacion === proyecto

      return coincideBusqueda && coincideEstado && coincideProyecto
    })

    return [...resultado].sort((a, b) => {
      const comparacion = a.ficha.localeCompare(
        b.ficha,
        undefined,
        { numeric: true },
      )

      return descendente ? -comparacion : comparacion
    })
  }, [datos, buscar, estado, proyecto, descendente])

  return (
    <section className="panel">
      <div className="panelTitle">
        <div>
          <h2>Equipos</h2>
          <p>{equipos.length} registros encontrados</p>
        </div>

        <button className="primary">
          + Nuevo equipo
        </button>
      </div>

      <div className="filters">
        <input
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          placeholder="Buscar ficha o denominacion..."
        />

        <select
          value={proyecto}
          onChange={(e) => setProyecto(e.target.value)}
        >
          {proyectos.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <select
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          {estados.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>

        <button
          className="secondary"
          onClick={() => setDescendente(!descendente)}
        >
          Ficha {descendente ? '↓' : '↑'}
        </button>
      </div>

      <div className="tableWrap">
        <table>
          <thead>
            <tr>
              <th>Ficha</th>
              <th>Denominacion</th>
              <th>Estado</th>
              <th>Proyecto</th>
              <th>Clasificacion</th>
              <th>Dias detenido</th>
            </tr>
          </thead>

          <tbody>
            {equipos.map((e) => (
              <tr key={e.ficha}>
                <td><strong>{e.ficha}</strong></td>
                <td>{e.denominacion}</td>
                <td>
                  <span
                    className={`status ${
                      e.estado === 'Disponible'
                        ? 'ok'
                        : e.estado === 'Fuera de servicio'
                          ? 'error'
                          : 'warning'
                    }`}
                  >
                    {e.estado}
                  </span>
                </td>
                <td>{e.ubicacion}</td>
                <td>{e.clasificacion}</td>
                <td>{e.diasDetenido}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Equipos
