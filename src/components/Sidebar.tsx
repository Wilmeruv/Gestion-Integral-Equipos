type Props = {
  pantalla: string
  onCambiarPantalla: (pantalla: string) => void
}

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

function Sidebar({ pantalla, onCambiarPantalla }: Props) {
  return (
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
            onClick={() => onCambiarPantalla(item)}
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
  )
}

export default Sidebar
