input.onButtonPressed(Button.A, function () {
    if (mode == true) {
        First += 20
    }
    if (mode == false) {
        Second += 20
    }
})
input.onButtonPressed(Button.AB, function () {
    mode = false
})
input.onButtonPressed(Button.B, function () {
    if (mode == true) {
        First += -20
    }
    if (mode == false) {
        Second += 20
    }
})
let Second = 0
let mode = false
let First = 90
mode = true
basic.forever(function () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, First, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, Second, 64)
    if (mode == true) {
        basic.showIcon(IconNames.Heart)
    }
    if (mode == false) {
        basic.showIcon(IconNames.SmallHeart)
    }
})
