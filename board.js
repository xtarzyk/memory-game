import { flipCard } from './main'

const imgs = ['img/cat-black.jpg', 'img/cat-climbs.jpg', 'img/cat-flower.jpg', 'img/cat-grey.jpg', 'img/cat-grey-white.jpg', 'img/cat-licks.jpg', 'img/cat-sitting.jpg', 'img/cat-sneaky-black.jpg', 'img/cat-watch.jpg', 'img/cat-watch-2.jpg']

$('<h1>Scores: </h1>').appendTo('.main__scores')
$('<h1>0</h1>').addClass('result').appendTo('.main__scores')

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
            const $cellFront = $('<div></div>').addClass('cell__front')
            const $cellBack = $('<img>').addClass('cell__back').attr('src', img)
            
            $('<div></div>')
                .addClass('board__cell')
                .click(flipCard)
                .append($cellFront, $cellBack)
                .appendTo('.main__board')
        })
}

export {
    createCells
}