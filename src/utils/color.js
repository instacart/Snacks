export function darken(color, amount) {
  return adjustColor(color, -amount)
}

export function lighten(color, amount) {
  return adjustColor(color, amount)
}

// Darkens or lightens hex colors. Mostly taken from
// https://css-tricks.com/snippets/javascript/lighten-darken-color/
function adjustColor(color, amount) {
  const num = parseInt(color.slice(1), 16)

  // Bit shifting
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Right_shift
  const r = normalize((num >> 16) + amount)
  const b = normalize(((num >> 8) & 0x00FF) + amount)

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND
  const g = normalize((num & 0x0000FF) + amount)

  // Padded with leading zeros to handle colors like
  // #086e00 which come out as #86e00 without it.
  return `#${String(`000000${(g | (b << 8) | (r << 16)).toString(16)}`).slice(-6)}`
}

function normalize(value) {
  if (value > 255) {
    return 255
  }
  if (value < 0) {
    return 0
  }
  return value
}
