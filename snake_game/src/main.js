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
}
const speed = {
    x: 0,
    y: 0,
}
const size = 15
const fps = 50

const snake = [
    [17, 17],
    [16, 17],
    [15, 17],
    [14, 17],
    [13, 17],
]

const drawBackGround = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = colors.backGround;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const drawSnake = () => {
    snake.forEach((item, index) => {
        ctx.fillStyle = index === 0 ? colors.snakeHead : colors.snakeBody;
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

        ctx.fillRect(item[0] * size, item[1] * size, size, size)
    })
}

const crawl = () => {
    if (speed.x !== 0 || speed.y !== 0) {
        const newHead = [snake[0][0] + speed.x, snake[0][1] + speed.y]
        for (let i = snake.length - 1; i > 0; i--) {
            snake[i] = snake[i - 1]
            snake[i] = snake[i - 1]
        }
        snake[0] = newHead
    }
}

const render = () => {
    drawBackGround()
    crawl()
    drawSnake()
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
drawBackGround()
drawSnake()
const gameLoop = setInterval(render, fps)
