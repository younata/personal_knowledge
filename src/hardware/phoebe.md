# Phoebe

Phoebe is an [ARRMA-RC Raider BLS rc car](https://www.arrma-rc.com/rc-cars/latest/raider/bls) that I've spent the past 4 years off and on making semi-autonomous.

## Motors

Phoebe came stock with an arrma-rc BLS ESC & Motor combination. This is a sensorless brushless motor, which is not ideal for a robot, and I've been on the hunt for a suitable sensored replacement.

From [the specs](https://www.arrma-rc.com/power-systems/latest/bls), the motor is:

|Component      |Measurement|Unit|
|---------------|-----------|----|
|Diameter       | 35.8      | mm |
|Length         | 54        | mm |
|Shaft Length   | 13        | mm |
|Shaft Diameter | 3         | mm |
|Motor Speed    | 4000      | kv |
|Poles          | 2         |    |

Any replacement motor, to fit on the car, needs to match the physical dimensions. To keep a similar performance (I don't care to replace the gearbox - I might as well buy a new platform if I do so), I also want it to have a similar speed as the stock motor.

## Control System Mounts

### Attaching to Phoebe

There are 4 screw holes - 2 on each side. They are symmetrical.

- It appears that the first 2 set are 24 mm from the back.
- The next set are 83 mm from the first
- Allow at least 5 mm vertical clearance from the screws to the bottom of the control system platform
- From the screw holes to the bottom of the chassis for Phoebe is 34 mm.
- m3 screws.
- The holes aren't threaded - use nuts + lock washers on the other side to hold them in.
- The batteries for the electronics will likely be 16mm thick.

### ESC

- The stock ESC is 54 mm long, 38 mm wide, and 21 mm tall.
- The (m3) screws are 46 mm apart (center to center)
  - 17 mm from one edge
  - 21 mm from the other (this one is the side with the cable leading to the switch)
- It should be mounted opposite the side the facing the micro USB port for the raspberry pi

### PWM Servo Driver

Phoebe uses a <a href="https://www.sunfounder.com/pca9685-16-channel-12-bit-pwm-servo-driver.html" data-proofer-ignore>SunFounder PCA9685 PWM Servo Driver</a> to interface a raspberry pi 3 to the servo and ESC.

- It is 62 mm long, 26 mm wide.
- The (m3) screws are 19 mm apart (centers inset by 3.5), and are 56 mm apart.

### Raspberry Pi 3 B+

- [Mechanical drawings for a raspberry pi 3 b+](https://www.raspberrypi.org/documentation/hardware/raspberrypi/mechanical/rpi_MECH_3bplus.pdf)
  - Length: 85 mm
  - Width: 56 mm
  - Screws:
    - m3 screws
    - 49 mm width between screw holes.
    - 58 mm length between screw holes
    - Inset 3.5 mm from width of board.
    - Trailing screws are inset 3.5mm from length of board.
  - The micro USB/Power input is 8 mm wide, and the center is 10.6 mm from the edge of the board.
    - Doing some math, the center of the power input is 4.6 mm from the nearest screw hole - the nearest edge of it starts 0.6 mm from that screw hole.
    - It is ~1.5 mm tall. The hole in the side of the mount should allocate 15 mm width + 10 mm height for the cable.
    - In other words, the hole for the mount should start just past the screw holes and continue for 15 mm. It should allow sufficient height plus/minus for the micro usb cable.
  - The USB A ports extend approximately 2 mm beyond the length of the board.
