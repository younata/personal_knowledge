# Panel

The front panel, and the overall pilot interface.

In addition to stock Sling (which is essentially dual Garmin G3X), I'll likely need at least one custom display for the electrics information.

## Motor Controls

If I don't do motorized wheels, this is really simple - single throttle, which directly controls the amount of power to send to the motor controller.

Or is it? If I want to do some type of propeller regen (windmilling the propeller to draw power from the motor and slightly recharge the batteries), or even a reverse throttle, then what does that look like? I've had three thoughts on this:

- The neutral point on the throttle is not when the throttle is fully let out.  
  The idea here is to have leave some space in the "back", which would control how much reverse throttle to do. Maybe even spring-load it so that the throttle returns to neutral unless pressure is applied to it. This has the benefit of keeping the simple "the motor power is controlled by one and only one input" thing that I'm used to, though it does introduce some complexities in that I really don't want to make it easy to accidentally keep reverse throttle applied.
- Using the brakes will apply reverse throttle.
  The idea here is that, if you apply both brakes at once, then forward power is cut, and reverse power is applied proportionally to whatever the least brake applied is (e.g. if left brake is only 25% applied, and right is 50% applied, then only 25% reverse throttle is applied). This is nice in that the only way to get reverse power is when you're already trained to want it - when applying brakes. However, it does introduce control complexities in that the motor needs to know to cut power when brakes are applied. Additionally, this makes it annoying when you want to a small radius turn (apply power, apply only right or left brake, and turn on a point) if you accidentally apply opposite brake.
- Switch to apply reverse throttle.
  This is probably the simplest in both hardware and software to do. Essentially, add a single (hardware?) switch that is binary forward or reverse throttle. This is likely what I'll go with, but it will require additional overhead (essentially, another item to the checklist: ensure power direction switch is forward).

In all three cases, I think I will have it that neutral throttle will engage the windmilling regen.

### With Motorized Wheels

However, if I do add motorized wheels, then I have to consider the dual (or even triple) controls. Because now there's 3 motors - the propeller motor, and the right and left main gear motors. So far, I've come up with 2 control schemes:

- Throttle lever for each motor.
  This is the simplest in hardware to do. The idea is that each motor gets its own throttle. Simple enough, except each motor has different roles, and I don't want to make it easier to conflate propeller throttle with wheel throttle. I probably won't do this, but wanted to list it out.
- Combined propeller throttle and wheel throttle, brakes cut or reduce power to wheels.
  The idea is to keep the interface simple - single throttle to control forward power. When on the ground and not preparing to take off, then the throttle controls the max power going to the wheels. When a switch is thrown for flight mode, then throttle controls the propeller. Can even add a additional settings to that switch - e.g. a takeoff mode that sets throttle to apply forward throttle to both wheels and propeller. Power to the wheels would be muxed with the brakes to either use more regen on a wheel motor with brake applied, or, even to give more power to the opposite wheel motor from the one that has brake applied. I can see this becoming quite complex soon, so I might have to model and prototype something to see how it might work.

However, as the [top-level electric plane](README.md) notes, [I'm not going to focus on this initially](README.md#motorized-wheels).
