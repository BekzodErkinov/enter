const PrevArrow = ({ className, style, onClick, styles }) => {
  return (
    <div
      className={className}
      style={{ ...style, ...styles }}
      onClick={onClick}
    />
  )
}

const NextArrow = ({ className, style, onClick, styles }) => {
  return (
    <div
      className={className}
      style={{ ...style, ...styles }}
      onClick={onClick}
    />
  )
}

export {
  PrevArrow,
  NextArrow,
}
