import { useMemo, useState } from 'react'
import './App.css'

type Equipo = {
  ficha: string
  denominacion: string
  estado: string
  ubicacion: string
  clasificacion: string
  diasDetenido: number
}

const equiposIniciales: Equipo[] = [
  {
    ficha: '1001',
    denominacion: 'Excavadora CAT 320',
    estado: 'Disponible',
    ubicacion: 'Proyecto Norte',
    clasificacion: 'Excavadora',
    diasDetenido: 0,
  },
  {
    ficha: '1002',
    denominacion: 'Cargador CAT 950',
    estado: 'Fuera de servicio',
    ubicacion: 'Proyecto Norte',
    clasificacion: 'Cargador',
    diasDetenido: 12,
  },
  {
    ficha: '1003',
    denominacion: 'Rodillo HAMM',
    estado: 'Seguimiento',
    ubicacion: 'Proyecto Este',
    clasificacion: 'Rodillo',
    diasDetenido: 2,
  },
  {
    ficha: '1004',
    denominacion: 'Camion Volvo',
    estado: 'Disponible',
    ubicacion: 'Proyecto Sur',
    clasificacion: 'Camion',
    diasDetenido: 0,
  },
  {
    ficha: '1005',
    denominacion: 'Pavimentadora',
    estado: 'Fuera de servicio',
    ubicacion: 'Proyecto Este',
    clasificacion: 'Asfalto',
    diasDetenido: 21,
  },
]

const menu = [
  'Resumen',
  'Lista de Equipos',
  'Proyectos',
  'Compras',
  'Fuera de Servicio',
  'Taller',
  'Industrial',
  'Neumaticos',
  'Asfalto',
  'Administracion',
]

function App() {
  const [pantalla, setPantalla] = useState('Resumen')
  const [buscar, setBuscar] = useState('')
  const [estado, setEstado] = useState('Todos')
  const [proyecto, setProyecto] = useState('Todos')
  const [descendente, setDescendente] = useState(false)

  const proyectos = [
    'Todos',
    ...Array.from(new Set(equiposIniciales.map((e) => e.ubicacion))),
  ]

  const estados = [
    'Todos',
    ...Array.from(new Set(equiposIniciales.map((e) => e.estado))),
  ]

  const equipos = useMemo(() => {
    const resultado = equiposIniciales.filter((e) => {
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
      const comparacion = a.ficha.localeCompare(b.ficha, undefined, {
        numeric: true,
      })

      return descendente ? -comparacion : comparacion
    })
  }, [buscar, estado, proyecto, descendente])

  const disponibles = equiposIniciales.filter(
    (e) => e.estado === 'Disponible' || e.estado === 'Seguimiento',
  ).length

  const fueraServicio = equiposIniciales.filter(
    (e) => e.estado === 'Fuera de servicio',
  ).length

  const disponibilidad =
    equiposIniciales.length === 0
      ? 0
      : (disponibles / equiposIniciales.length) * 100

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandIcon">IE</div>

          <div>
            <strong>Gestion Integral</strong>
            <span>Equipos IE</span>
          </div>
        </div>

        <nav>
          {menu.map((item) => (
            <button
              key={item}
              className={pantalla === item ? 'active' : ''}
              onClick={() => setPantalla(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="sidebarFooter">
          <span>Microsoft 365</span>
          <strong>SharePoint</strong>
        </div>
      </aside>

      <main className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Mantenimiento de Equipos</p>
            <h1>{pantalla}</h1>
          </div>

          <div className="user">
            <div className="avatar">WU</div>
            <div>
              <strong>Wilmer Ureña</strong>
              <span>Gestion Integral Equipos</span>
            </div>
          </div>
        </header>

        {pantalla === 'Resumen' ? (
          <>
            <section className="cards">
              <article className="card">
                <span>Total equipos</span>
                <strong>{equiposIniciales.length}</strong>
              </article>

              <article className="card green">
                <span>Disponibles</span>
                <strong>{disponibles}</strong>
              </article>

              <article className="card red">
                <span>Fuera de servicio</span>
                <strong>{fueraServicio}</strong>
              </article>

              <article className="card blue">
                <span>Disponibilidad</span>
                <strong>{disponibilidad.toFixed(1)}%</strong>
              </article>
            </section>

            <section className="panel">
              <div className="panelTitle">
                <div>
                  <h2>Estado general</h2>
                  <p>
                    Primera versión del dashboard de Gestion Integral Equipos IE
                  </p>
                </div>
              </div>

              <div className="welcome">
                <h3>Aplicacion funcionando correctamente</h3>
                <p>
                  En la siguiente etapa sustituiremos estos datos de prueba por
                  los registros reales de la lista Equipos IE de SharePoint.
                </p>

                <button
                  className="primary"
                  onClick={() => setPantalla('Lista de Equipos')}
                >
                  Ver equipos
                </button>
              </div>
            </section>
          </>
        ) : pantalla === 'Lista de Equipos' ||
          pantalla === 'Proyectos' ||
          pantalla === 'Fuera de Servicio' ? (
          <section className="panel">
            <div className="panelTitle">
              <div>
                <h2>Equipos</h2>
                <p>{equipos.length} registros encontrados</p>
              </div>

              <button className="primary">+ Nuevo equipo</button>
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
                      <td>
                        <strong>{e.ficha}</strong>
                      </td>

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
        ) : (
          <section className="panel">
            <div className="empty">
              <h2>{pantalla}</h2>
              <p>
                Este modulo ya tiene asignado su espacio. Lo desarrollaremos
                progresivamente.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App