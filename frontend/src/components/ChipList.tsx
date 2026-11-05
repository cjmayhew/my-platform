type ChipListProps = {
  items: string[]
  onMoss?: boolean
}

function ChipList({ items, onMoss = false }: ChipListProps) {
  return (
    <ul className="chip-list">
      {items.map((item) => (
        <li key={item} className={onMoss ? 'chip chip--on-moss' : 'chip'}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default ChipList
