// const OFFSET_TOP = {
//   bottomLeft: 25,
//   bottomRight: 25,
//   bottom: 25,
// }

// const OFFSET_LEFT = {
//   bottomLeft: {
//     small: 0,
//     medium: -180,
//     large: 0,
//   },
//   bottomRight: 25,
//   bottom: 25,
// }

// const OFFSET = {
//   bottomLeft: {
//     top: 25,
//     left: -180
//   }
// }

const calculateTop = ({ postion, size }) => {
  return 0
}

const calculateLeft = ({ postion, size }) => {
  return 0
}


const calculateOffset = ({ postion, size, targetBounds }) => {
  const { top = 0, left = 0 } = targetBounds

  return {
    top: top + calculateTop({ postion, size }),
    left: left + calculateLeft({ postion, size })
  }
}

export default calculateOffset
