import { createCells } from './board'

let selectedCards = []
let score = 0

const flipCard = event => {
    $(event.target).parent().addClass('toggle-board__cell', 'disabled')
    selectedCards = selectedCards.concat($(event.target).parent())

    if (selectedCards.length === 2) {
        $('.main__board').addClass('disabled')
        setTimeout(checkBoard, 1000)
    }
}

const checkBoard = () => {
    const [firstCard, secondCard] = selectedCards

    if ($(firstCard).children().last().attr('src') === ($(secondCard).children().last().attr('src'))) {
        selectedCards = []
        $('.main__board').removeClass('disabled')
        score++
        $('.result').text(`${score}`)

        return
    }

    selectedCards.forEach(card => {
        $(card).toggleClass('toggle-board__cell')
        $(card).removeClass('disabled')
        $('.main__board').removeClass('disabled')
    })

    selectedCards = []
}

createCells()

export {
    flipCard
}