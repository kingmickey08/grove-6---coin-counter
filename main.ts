input.onButtonPressed(Button.A, function () {
    count = 0
    _4digit.show(0)
})
let _4digit: grove.TM1637 = null
let count = 0
pins.digitalWritePin(DigitalPin.P1, 1)
count = 0
_4digit = grove.createDisplay(DigitalPin.P2, DigitalPin.P16)
_4digit.show(0)
basic.forever(function () {
    if (pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    60
    ) < 1) {
        count += 1
        _4digit.show(count)
        basic.pause(300)
    } else {
    	
    }
})
