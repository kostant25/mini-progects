const editor = document.querySelector('#text-editor');
const wordsCount = document.querySelector('#words');
const charactersCount = document.querySelector('#characters');
const symbolsCount = document.querySelector('#symbols');

const specSymbol = ['/', ',', '.']

editor.addEventListener('input', () => {
    wordsCount.innerHTML = wordsCounter(editor.innerHTML)
    charactersCount.innerHTML = characterCounter(editor.innerHTML)
    symbolsCount.innerHTML = symbolCounter(editor.innerHTML)
})

const wordsCounter = (text) => {
    return text.length === 0 ? 0 : text.split(' ').length
}

const characterCounter = (text) => {
    return text.length
}

const symbolCounter = (text) => {
    let count = 0;

    const arr = text.split('')

    arr.forEach(symbol => {
        console.log(symbol)
        if (specSymbol.includes(symbol)) {
            count++
        }
    })

    return count;
}
