import { prepareBoard, createCells, addImages } from './board'

let selectedCards = []
let foundPairs = []
let clickLimit = 2

const flipCard = event => {
    let currentCats = document.querySelectorAll('.toggle-board__cell')

    if (!clickLimit) {
        resetBoard(currentCats)
    }

    event.target.parentNode.classList.add('toggle-board__cell', 'disabled')
    selectedCards.push(event.target.nextSibling.src)
    clickLimit--
    console.log(selectedCards)
    console.log(foundPairs)
}

const resetBoard = currentCats => {
    clickLimit = 2
    if (selectedCards[0] === selectedCards[1]) {
        selectedCards.forEach(card => foundPairs.push(card))
        selectedCards = []
        return
    }
    currentCats.forEach(cat => {
        cat.classList.toggle('toggle-board__cell')
        cat.classList.toggle('disabled')
    })
    selectedCards = []
}



prepareBoard()
createCells()
addImages()

export { flipCard }