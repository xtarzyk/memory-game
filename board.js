import { flipCard } from './main'

const boardArray = Array.from({ length: 20 })
const gameBoard = document.querySelector('.main__board')
const boardCell = document.createElement('div')
const scoresBoard = document.querySelector('.main__scores')
const scoresHeader = document.createElement('h1')
const result = document.createElement('h1')
const imgs = ['img/cat-black.jpg', 'img/cat-climbs.jpg', 'img/cat-flower.jpg', 'img/cat-grey.jpg', 'img/cat-grey-white.jpg', 'img/cat-licks.jpg', 'img/cat-sitting.jpg', 'img/cat-sneaky-black.jpg', 'img/cat-watch.jpg', 'img/cat-watch-2.jpg']

scoresHeader.innerHTML = 'Scores: '
result.innerHTML = '0'
result.classList.add('result')
scoresBoard.appendChild(scoresHeader)
scoresBoard.appendChild(result)
boardCell.classList.add('board__cell')

const duplicateImages = imgs.flatMap(img => [img, img])

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const nextItem = Math.floor(Math.random() * (i + 1)); // <-- this semicolon is necessary, srsly

        [array[i], array[nextItem]] = [array[nextItem], array[i]]
    }

    return array
}

const shuffledCats = shuffleArray(duplicateImages)

const prepareBoard = () => boardArray.fill(boardCell)

const createCells = () => {
    const cellsNodes = boardArray.map(() => boardCell.cloneNode(true))

    cellsNodes.forEach(cellNode => {
        const cellFront = document.createElement('div')
        const cellBack = document.createElement('img')

        cellFront.classList.add('cell__front')
        cellBack.classList.add('cell__back')

        cellNode.appendChild(cellFront)
        cellNode.appendChild(cellBack)
        gameBoard.appendChild(cellNode)

        cellNode.addEventListener('click', flipCard)
    })

    return cellsNodes
}

const addImages = () => {
    const catsContainers = document.querySelectorAll('.cell__back')

    catsContainers.forEach((cat, index) => {
        cat.setAttribute('src', shuffledCats[index])
    })
}

export {
    prepareBoard,
    createCells,
    addImages
}