import { prepareBoard, createCells, addImages } from './board'

const mainBoard = document.querySelector('.main__board')
const scoresResult = document.querySelector('.result')
let selectedCards = []
let scores = 0

const flipCard = event => {
    event.target.parentNode.classList.add('toggle-board__cell', 'disabled')
    selectedCards.push(event.target.parentNode)

    if (selectedCards.length === 2) {
        mainBoard.classList.add('disabled')
        setTimeout(() => {
            checkBoard()
        }, 1000)
    }
}

const checkBoard = () => {
    if (selectedCards[0].lastChild.src === selectedCards[1].lastChild.src) {
        selectedCards = []
        mainBoard.classList.remove('disabled')
        scores++
        scoresResult.innerHTML = `${scores}`

        return
    }

    selectedCards.forEach(card => {
        card.classList.toggle('toggle-board__cell')
        card.classList.toggle('disabled')
        mainBoard.classList.remove('disabled')
    })

    selectedCards = []
}

prepareBoard()
createCells()
addImages()

export {
    flipCard
}