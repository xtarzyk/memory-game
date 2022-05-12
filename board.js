import { flipCard } from './main'

let imgs = []

$('<h1>').text('Scores: ').appendTo('.main__scores')
$('<h1>').text('0').addClass('result').appendTo('.main__scores')

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
        const $cellFront = $('<div>').addClass('cell__front')
        const $cellBack = $('<img>').addClass('cell__back').attr('src', img)
        
        $('<div>')
        .addClass('board__cell')
        .click(flipCard)
        .append($cellFront, $cellBack)
        .appendTo('.main__board')
    })
}

const getCatsImgs = async () => {
    const $loader = $('<div>').addClass('loader').appendTo('.main__board')
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&mime_types=jpg,png', {
        headers: {
            "x-api-key": "27ebfa90-bb94-4e12-a8dd-5f527401fb31"
        }
    })
        .then(res => res.json())
        .then(json => json.forEach(obj => imgs = imgs.concat(obj.url)))
        .catch(error => $('<div>').text(error + '  ;-(').addClass('error').appendTo('.main__board'))
        .finally(() => {
            $loader.remove()
            createCells()
        })

    return response
}

export {
    getCatsImgs
}