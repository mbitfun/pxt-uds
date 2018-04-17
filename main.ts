//% weight=70 icon="\u30A2" color=#EC7505 block="超音波距離センサ"
namespace uds {

    //% blockId=uds block="距離を測定"
    export function get(): void {
      let distance = 0
      pins.digitalWritePin(DigitalPin.P0, 0)
      control.waitMicros(2)
      pins.digitalWritePin(DigitalPin.P0, 1)
      control.waitMicros(20)
      pins.digitalWritePin(DigitalPin.P0, 0)
      distance = pins.pulseIn(DigitalPin.P1, PulseValue.High) * 153 / 29 / 2 / 100
      if (distance < 20) {
          basic.showIcon(IconNames.Happy)
      } else {
          basic.showIcon(IconNames.Sad)
      }
      basic.pause(10)
    }
}
