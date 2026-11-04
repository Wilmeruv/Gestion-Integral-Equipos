import type { Equipo } from '../types/Equipo'

export const equiposPrueba: Equipo[] = [
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
