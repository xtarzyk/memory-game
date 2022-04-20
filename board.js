import {flipCard} from './main'

const gameBoard = document.querySelector('.main__board')
const scoresBoard = document.querySelector('.main__scores')
const scoresHeader = document.createElement('h1')
const result = document.createElement('h1')
const imgs = ['img/cat-black.jpg', 'img/cat-climbs.jpg', 'img/cat-flower.jpg', 'img/cat-grey.jpg', 'img/cat-grey-white.jpg', 'img/cat-licks.jpg', 'img/cat-sitting.jpg', 'img/cat-sneaky-black.jpg', 'img/cat-watch.jpg', 'img/cat-watch-2.jpg']

scoresHeader.innerHTML = 'Scores: '
result.innerHTML = '0'
result.classList.add('result')
scoresBoard.appendChild(scoresHeader)
scoresBoard.appendChild(result)

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const nextItem = Math.floor(Math.random() * (i + 1)); // <-- this semicolon is necessary, srsly

        [array[i], array[nextItem]] = [array[nextItem], array[i]]
    }

    return array
}

const createCells = () => {
    shuffleArray(imgs.concat(imgs))
        .forEach(img => {
            const boardCell = document.createElement('div')
            const cellFront = document.createElement('div')
            const cellBack = document.createElement('img')

            cellFront.classList.add('cell__front')
            cellBack.classList.add('cell__back')
            boardCell.classList.add('board__cell')

            cellBack.setAttribute('src', img)
            boardCell.appendChild(cellFront)
            boardCell.appendChild(cellBack)
            gameBoard.appendChild(boardCell)

            boardCell.addEventListener('click', flipCard)
        })
}

export {
    createCells
}