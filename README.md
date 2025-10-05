# MAX30105 MakeCode Extension for micro:bit


This MakeCode extension allows reading Red, IR, and Green data, plus temperature from the MAX30105 optical sensor.


## Features
- Initialize the MAX30105 sensor
- Read Red, IR, and Green channels
- Read onboard temperature


## Example (MakeCode)
```blocks
max30105.begin()
basic.forever(function() {
let red = max30105.red()
let ir = max30105.ir()
let green = max30105.green()
serial.writeNumbers([red, ir, green])
basic.pause(100)
})
