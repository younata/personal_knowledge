# Soap Dispenser

⚠️ Warning! ⚠️ I haven't built this, this was a project idea I came up with while working on something else, and wanted to write down my thoughts to get it out of my head.

While working on the epoxy dispenser for the coz-e, I also came across parts that could be used for a soap dispenser.

The basic idea is to combine a proximity contactless button ([Sparkfun](https://www.sparkfun.com/products/18582)), with a pump of some kind. Probably a peristaltic one because that has 0 chance of becoming gumming up the pump ([Sparkfun](https://www.sparkfun.com/products/16898), [adafruit](https://www.adafruit.com/product/3910)).

The code should be fairly simple, and could easily run on an ATTiny using only an interrupt, with something like this:

```C++
#include <Arduino.h>

const int interrupt_pin = 2; // Don't recall.
const int motor_controller_pin = A0; // or whatever.

void main() {
    attachInterrupt(interrupt_pin, dispense, RISING);
    attachInterrupt(interrupt_pin, stop_dispense, FALLING);

    sleep();

    for (;;) {}
}

void sleep() {
    sleep_enable();
    set_sleep_mode(SLEEP_MODE_PWR_DOWN);
    sleep_cpu();
}

void dispense() {
    sleep_disable();
    analogWrite(motor_controller_pin, 255);
}

void stop_dispense() {
    analogWrite(motor_controller_pin, 0);
    sleep();
}
```

(again, have not built this, and certainly haven't tested this code).

This code is also a bit over-optimized for my use case, but it does allow me to build a long-lasting battery-powered version of this. With the big if being an assumption that the contactless button (i.e. IR sensor) is a low-power consumption device (which seems like it would be false).

## Case

I'd like to 3d print a case, which would be a small thing designed with the following in mind:

- Fit on top of a large jug of soap.
- Provide mount points for the button, the pump, and the circuit board.
  - Circuit board should have access to power, and otherwise be protected from the liquids.
  - Button should be facing downward
  - pump should have tubing that exists as close to the button as possible.

I'd also like to build a small base, which could hold the soap jug at a slight angle, so that as the soap gets used, it'll start to gather at a single spot, instead of being in a shallow pool on the bottom. Which serves to try to use as much soap as possible before switching jugs.

## References

- [How to sleep an Arduino](https://thekurks.net/blog/2018/1/24/guide-to-arduino-sleep-mode)
