let code = 0
basic.forever(function () {
    if (code == 0 && input.buttonIsPressed(Button.A)) {
        code = 1
    }
    if (code == 1 && input.buttonIsPressed(Button.B)) {
        code += 1
    }
    if (code == 2 && input.logoIsPressed()) {
        code += 1
    }
    if (code == 3 && input.buttonIsPressed(Button.A)) {
        code += 1
    }
    if (code == 4 && input.logoIsPressed()) {
        code += 1
    }
})
basic.forever(function () {
    if (code == 0) {
        basic.showString("c")
    }
    if (code == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (code == 2) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (code == 3) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (code == 4) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (code == 5) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (code == 1 && (input.buttonIsPressed(Button.B) || input.logoIsPressed())) {
        basic.showIcon(IconNames.No)
    }
    if (code == 2 && (input.buttonIsPressed(Button.A) || input.logoIsPressed())) {
        basic.showIcon(IconNames.No)
    }
    if (code == 3 && (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A))) {
        basic.showIcon(IconNames.No)
    }
    if (code == 4 && (input.buttonIsPressed(Button.B) || input.logoIsPressed())) {
        basic.showIcon(IconNames.No)
    }
    if (code == 5 && (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A))) {
        basic.showIcon(IconNames.No)
    }
})
