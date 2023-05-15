let start = 0
let code = 0
basic.forever(function () {
    if (true) {
        code += 1
    }
})
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Up)) {
        start = 0
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Down)) {
        start = 0
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right)) {
        start = 0
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left)) {
        start = 0
    }
})
basic.forever(function () {
    if (code == 0 && input.buttonIsPressed(Button.A)) {
        code += 1
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
})
