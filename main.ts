//% color=#E03131 weight=100 icon=""
namespace max30102 {
    let inited = false

    //% shim=max30102_init
    function _init(address: number): boolean { return false }

    //% shim=max30102_readSample
    function _readSample(outBuffer: number[]): number { return 0 }

    //% shim=max30102_available
    function _available(): number { return 0 }

    //% shim=max30102_clearFifo
    function _clearFifo(): void { }

    //% block="MAX30102 initialize at I2C address %address"
    //% address.defl=0x57
    export function initialize(address: number = 0x57): boolean {
        inited = _init(address)
        return inited
    }

    //% block="MAX30102 read sample (returns 2-element array: [red, ir])"
    export function readSample(): number[] {
        if (!inited) initialize()
        const out: number[] = [0, 0]
        const got = _readSample(out)
        if (got == 2) return out
        return [0, 0]
    }

    //% block="MAX30102 number of available samples"
    export function available(): number {
        if (!inited) initialize()
        return _available()
    }

    //% block="MAX30102 clear FIFO"
    export function clearFIFO(): void {
        if (!inited) initialize()
        _clearFifo()
    }

    // Convenience blocks
    //% block="MAX30102 read Red value"
    export function readRed(): number {
        const s = readSample()
        return s[0]
    }

    //% block="MAX30102 read IR value"
    export function readIR(): number {
        const s = readSample()
        return s[1]
    }
}
