
const playerOneRacetrack = document.querySelector('#player1_race')
const playerTwoRacetrack = document.querySelector('#player2_race')

const moveCarForward = (playerTrack) => {
  let activeChild
  let nextChild

  const allChildren = playerTrack.querySelectorAll('td')

  allChildren.forEach((child, index) => {
    console.log('index', index)

    const classname = child.classList.value

    activeChild= child

    nextChild = allChildren [index + 1]
}
}

  activeChild.classList.remove('active')
  nextChild.classList.add('active')
}


const handleKeyDown = (event) => {
  if (event.code === 'KeyQ') {
    console.log('The user pressed Q')
    moveCarForward(playerOneRacetrack)
  }

  if (event.code === 'KeyP') {
    console.log('The user pressed P')
    moveCarForward(playerTwoRacetrack)
  }
}

document.addEventListener('keydown', handleKeyDown)
