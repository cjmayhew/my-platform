type BlobProps = {
  color: 'moss' | 'clay' | 'sand'
  shape?: 1 | 2 | 3 | 4
  size: string
  top?: string
  left?: string
  right?: string
  bottom?: string
}

// A blurred, organically shaped wash of color placed behind section content.
function Blob({ color, shape = 1, size, ...position }: BlobProps) {
  return (
    <div
      className={`blob blob--${color}`}
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: `var(--blob-${shape})`,
        ...position,
      }}
    />
  )
}

export default Blob
