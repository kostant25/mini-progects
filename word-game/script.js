const getCharacter = () => {
    let ch = []

    for (let i = 0; i < 5; i++) {
        ch.push([])
        for (let j = 0; j < 5; j++) {
            ch[i].push(document.getElementById(`${i}${j}`))
        }
    }

    return ch
}

const colorGreen = () => {
    for (let k = 0; k < 5; k++) {
        rows[i][k].style.backgroundColor = '#64ff31';
    }
    console.log('GGGGGGGGG')
}

const colorYellow = () => {
    console.log('YYYYYY')
}

const rows = getCharacter()
const word = 'отчет'

let i = 0
let j = 0
let currentWord = ''
let isWin = false

console.log(rows)

document.addEventListener('keydown', event => {
    if (event.code === 'Backspace') {
        if (j !== 0) {
            console.log(event.key)
            j--
            rows[i][j].innerHTML = ''
            currentWord = currentWord.slice(0, currentWord.length - 1)
            console.log(currentWord)
        }
    } else if (event.code === 'Enter') {
        if (j === 5) {
            if (word === currentWord) {
                colorGreen()
            } else {
                colorYellow()
                currentWord = ''
                i++
                j = 0
            }
        }
    } else {
        if (j < 5) {
            rows[i][j].innerHTML = event.key.toUpperCase()
            currentWord += event.key
            console.log(currentWord)
            j++
        }
    }
})
