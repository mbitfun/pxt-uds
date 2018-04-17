//% weight=70 icon="\u30A2" color=#EC7505 block="超音波距離センサ"
namespace uds {

    //% blockId=uds block="距離を測定 trig %trig|echo %echo"
    export function get(trig: DigitalPin, echo: DigitalPin): number {
      pins.digitalWritePin(trig, 0)
      control.waitMicros(2)
      pins.digitalWritePin(trig, 1)
      control.waitMicros(20)
      pins.digitalWritePin(trig, 0)
      return pins.pulseIn(echo, PulseValue.High) * 153 
    }
}
