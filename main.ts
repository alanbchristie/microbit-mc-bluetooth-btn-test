bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
    serial.writeLine("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
    serial.writeLine("D")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    serial.writeLine("A")
    bluetooth.uartWriteString("A")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    serial.writeLine("B")
    bluetooth.uartWriteString("B")
})
basic.showLeds(`
    . . . . .
    . . # . .
    . . . . .
    . # . # .
    . . . . .
    `)
bluetooth.startButtonService()
bluetooth.startTemperatureService()
bluetooth.startUartService()
