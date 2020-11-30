/**
 * Code used in conjunction with "btn_notify.py" code running on a Raspberry Pi to verify Bluetooth connectivity. A basic code block simply to act as a connectivity test.
 * 
 * See https://github.com/ukBaz/python-bluezero/issues/279 for a background to the problem and its on-going testing.
 */
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
