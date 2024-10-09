const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(gameLoop)
})

const colors = {
    snakeHead: '#408345',
    snakeBody: '#77ff81',
    backGround: '#000000',
    apple: '#ff2424',
    font: '#ececec'
}
const speed = {
    x: 0,
    y: 0,
}
const size = 15
const fps = 50

let apple = [Math.floor(Math.random() * 35), Math.floor(Math.random() * 35)]
const snake = [
    [17, 17],
    [16, 17],
    [15, 17],
    [14, 17],
    [13, 17],
]

const draw = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

const drawSnake = () => {
    snake.forEach((item, index) => {
        if (item[0] >= canvas.width / size) {
            item[0] = 0;
        } else if (item[0] < 0) {
            item[0] = canvas.width / size - 1;
        }
        if (item[1] >= canvas.height / size) {
            item[1] = 0;
        } else if (item[1] < 0) {
            item[1] = canvas.height / size - 1;
        }

        let color = index === 0 ? colors.snakeHead : colors.snakeBody;
        draw(item[0] * size, item[1] * size, size, size, color)
    })
}

const crawl = () => {
    if (speed.x !== 0 || speed.y !== 0) {
        const newHead = [snake[0][0] + speed.x, snake[0][1] + speed.y]
        for (let i = snake.length - 1; i > 0; i--) {
            snake[i] = snake[i - 1]
        }
        snake[0] = newHead
    }
}

const checkApple = () => {
    if (apple[0] === snake[0][0] && apple[1] === snake[0][1]) {
        apple = [Math.floor(Math.random() * 36), Math.floor(Math.random() * 36)]
        snake.push(snake[snake.length - 1])
    }
}

const checkTail = () => {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0][0] === snake[i][0] && snake[0][1] === snake[i][1]) {
            clearInterval(gameLoop)
            return true
        }
    }
}

const gameOverScreen = () => {
    ctx.fillStyle = colors.font
    ctx.font = 'bold 50px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('GAME OVER', 17 * size, 17 * size)
}

const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(0, 0, canvas.width, canvas.height, colors.backGround);
    crawl()
    checkApple()
    if (checkTail()) {
        gameOverScreen()
        return
    }
    drawSnake()
    draw(apple[0] * size, apple[1] * size, size, size, colors.apple)
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowUp') {
        if (speed.y !== 1) {
            speed.x = 0
            speed.y = -1
        }
    }
    if (e.key === 'ArrowDown') {
        if (speed.y !== -1) {
            speed.x = 0
            speed.y = 1
        }
    }
    if (e.key === 'ArrowLeft') {
        if (speed.x !== 1) {
            speed.x = -1
            speed.y = 0
        }

    }
    if (e.key === 'ArrowRight') {
        if (speed.x !== -1) {
            speed.x = 1
            speed.y = 0
        }

    }
})

const gameLoop = setInterval(render, fps)
