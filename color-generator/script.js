const colorImg = document.querySelector("#color-img");
const colorCodeP = document.querySelector('#color-code');
const generateColorBtn = document.querySelector("#generate-color")
const copyBtn = document.querySelector("#copyBtn");

const colors = '0123456789abcdef'

let currentColor = ''

generateColorBtn.addEventListener('click', () => {
    generateColor()
})

copyBtn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(currentColor);
})

document.addEventListener('copy', e => {
    e.preventDefault();
    e.clipboardData.setData('text/plain', currentColor);
})

document.addEventListener('keydown', e => {
    if (e.key === ' ') {
        generateColor()
    }
})

const generateColorCode = () => {
    let colorCode = '#'
    for (let i = 0; i < 6; i++) {
        colorCode += colors[Math.floor(Math.random() * colors.length)]
    }
    return colorCode;
}

const generateColor = () => {
    currentColor = generateColorCode()
    colorImg.style.backgroundColor = currentColor;
    colorCodeP.innerHTML = currentColor
}
