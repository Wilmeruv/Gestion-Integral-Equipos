import { useState } from 'react'
import './App.css'

import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

import Dashboard from './pages/Dashboard'
import Equipos from './pages/Equipos'
import ModuloPendiente from './pages/ModuloPendiente'

import { equiposPrueba } from './data/equiposPrueba'

function App() {
  const [pantalla, setPantalla] = useState('Resumen')

  function contenido() {
    switch (pantalla) {
      case 'Resumen':
        return (
          <Dashboard
            equipos={equiposPrueba}
            onVerEquipos={() =>
              setPantalla('Lista de Equipos')
            }
          />
        )

      case 'Lista de Equipos':
      case 'Proyectos':
      case 'Fuera de Servicio':
        return <Equipos datos={equiposPrueba} />

      default:
        return <ModuloPendiente titulo={pantalla} />
    }
  }

  return (
    <div className="app">
      <Sidebar
        pantalla={pantalla}
        onCambiarPantalla={setPantalla}
      />

      <main className="content">
        <Topbar titulo={pantalla} />

        {contenido()}
      </main>
    </div>
  )
}

export default App