import { createCells } from './board'

const mainBoard = document.querySelector('.main__board')
const scoresResult = document.querySelector('.result')
let selectedCards = []
let score = 0

const flipCard = event => {
    event.target.parentNode.classList.add('toggle-board__cell', 'disabled')
    selectedCards = selectedCards.concat(event.target.parentNode)

    if (selectedCards.length === 2) {
        mainBoard.classList.add('disabled')
        setTimeout(() => {
            checkBoard()
        }, 1000)
    }
}

const checkBoard = () => {
    const [firstCard, secondCard] = selectedCards
    if (firstCard.lastChild.src === secondCard.lastChild.src) {
        selectedCards = []
        mainBoard.classList.remove('disabled')
        score++
        scoresResult.innerHTML = `${score}`

        return
    }

    selectedCards.forEach(card => {
        card.classList.toggle('toggle-board__cell')
        card.classList.toggle('disabled')
        mainBoard.classList.remove('disabled')
    })

    selectedCards = []
}

createCells()

export {
    flipCard
}