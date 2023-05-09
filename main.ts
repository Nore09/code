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
    if (input.buttonIsPressed(Button.A)) {
        code += 1
    }
})
