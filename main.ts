let start = 0
let elapsed = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    score = Math.abs(elapsed - 7000)
    basic.clearScreen()
    basic.showNumber(Math.round(score / 100))
})
