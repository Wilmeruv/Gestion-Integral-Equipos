type Props = {
  titulo: string
  valor: string | number
  color?: 'green' | 'red' | 'blue'
}

function StatusCard({ titulo, valor, color }: Props) {
  return (
    <article className={`card ${color ?? ''}`}>
      <span>{titulo}</span>
      <strong>{valor}</strong>
    </article>
  )
}

export default StatusCard
