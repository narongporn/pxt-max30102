//% color=#AA0000 icon="♥" block="MAX30105"
namespace max30105 {

    //% block="initialize MAX30105"
    export function begin(): boolean {
        return _begin()
    }

    //% block="read red value"
    export function red(): number {
        return _red()
    }

    //% block="read IR value"
    export function ir(): number {
        return _ir()
    }

    //% block="read green value"
    export function green(): number {
        return _green()
    }

    //% block="read temperature °C"
    export function temperature(): number {
        return _temperature()
    }

    // Shims
    //% shim=max30105::_begin
    function _begin(): boolean { return false }

    //% shim=max30105::_red
    function _red(): number { return 0 }

    //% shim=max30105::_ir
    function _ir(): number { return 0 }

    //% shim=max30105::_green
    function _green(): number { return 0 }

    //% shim=max30105::_temperature
    function _temperature(): number { return 0 }
}
