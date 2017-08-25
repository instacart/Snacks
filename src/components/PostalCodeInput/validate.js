// Postal codes never start with characters that might be mistaken for numbers: I, O, Q, U, W, Z
// First letter cannot be W or Z.
const canadaRegEx = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i)

/**
 * Validate postal codes for USA and Canada based on options.
 *
 * @param {string | number} postalCode - The key of the corresponding resource in the redux state.
 * @param {{forCanada: boolean, forUsa: boolean}} options - Configs, all are optional
 *
 * @return {boolean} isValid
 */
function validate(postalCode, options = {}) {
  const { forUsa = true, forCanada = false } = options

  return (
    !!postalCode && (
      (forUsa && validateUsa(postalCode.toString())) ||
      (forCanada && validateCanada(postalCode.toString()))
    )
  )
}

const validateUsa = (postalCode) => (
  postalCode.length === 5 &&
  /^\d+$/.test(postalCode)
)

const validateCanada = (postalCode) => (
  (
    postalCode.length === 6 &&
    canadaRegEx.test(postalCode)
  ) || (
    postalCode.length === 7 &&
    canadaRegEx.test(postalCode.replace(/\W+/g, ''))
  )
)

export default validate
