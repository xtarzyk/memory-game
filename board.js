const boardArray = Array.from({ length: 20 })
const gameBoard = document.querySelector('.main__board')
const boardCell = document.createElement('div')
const imageContainer = document.createElement('img')
const imgs = ['img/cat-black.jpg', 'img/cat-climbs.jpg', 'img/cat-flower.jpg', 'img/cat-grey.jpg', 'img/cat-grey-white.jpg', 'img/cat-licks.jpg', 'img/cat-sitting.jpg', 'img/cat-sneaky-black.jpg', 'img/cat-watch.jpg', 'img/cat-watch-2.jpg']

boardCell.classList.add('board__cell')
imageContainer.classList.add('cell__cat-img')

const prepareBoard = () => boardArray.fill(boardCell)

const createCells = () => {
    const cellsNodes = boardArray.map(() => boardCell.cloneNode(true))

    cellsNodes.forEach(cellNode => gameBoard.appendChild(cellNode))

    return cellsNodes
}

const duplicateImages = imgs.flatMap(img => [img, img])
const shuffleCats = () => {
    const random = duplicateImages.map(Math.random)
    return duplicateImages.sort((a, b) => random[a] - random[b])
}
const result = shuffleCats()
    // duplicateImages.reduce((acc, cat, index) => {
    //
    // },[])
console.log(result)




export { prepareBoard, createCells }