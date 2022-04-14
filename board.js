const boardArray = Array.from({ length: 20 })
const gameBoard = document.querySelector('.main__board')
const boardCell = document.createElement('div')
const imgs = ['img/cat-black.jpg', 'img/cat-climbs.jpg', 'img/cat-flower.jpg', 'img/cat-grey.jpg', 'img/cat-grey-white.jpg', 'img/cat-licks.jpg', 'img/cat-sitting.jpg', 'img/cat-sneaky-black.jpg', 'img/cat-watch.jpg', 'img/cat-watch-2.jpg']

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
console.log(shuffledCats)

const prepareBoard = () => boardArray.fill(boardCell)

const createCells = () => {
    const cellsNodes = boardArray.map(() => boardCell.cloneNode(true))

    cellsNodes.forEach(cellNode => {
        const imgContainer = document.createElement('img')

        imgContainer.classList.add('cell__cat-img')
        cellNode.appendChild(imgContainer)
        gameBoard.appendChild(cellNode)
    })

    return cellsNodes
}

const addImages = () => {
    const catsContainers = document.querySelectorAll('.cell__cat-img')

    catsContainers.forEach((cat, index) => {
        cat.setAttribute('src', shuffledCats[index])
    })
}

export { prepareBoard, createCells, addImages }