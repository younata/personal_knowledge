# Recumbent Ebike Build

[Video of the build](https://www.youtube.com/watch?v=q4v96sHWJDM). It goes into more detail than this page does.

Recently, I got a 2-wheel recumbent bicycle. Recumbent bikes are cool because they're much more comfortable, and more aerodynamic than standard, upright bicycles. Sadly, they never really caught on for a number of reasons. First, they were banned by the UCI (the group that oversees/runs the big road cycling events) in the 1930s. Because they were faster than upright bikes. Yeah. Second, they have a bit of a learning curve when switching from an upright bicycle. On recumbents, the pedals are in front of the seat, instead of right below it. You also can't really cheat and push off the ground to get going. You need to position the pedals just right so that you can get going enough to bring your other foot up and continue pedaling. This doesn't take that long to get used to, but it's definitely different and odd compared to an upright bicycle. This isn't really an issue on 3-wheel recumbents because they're no chance of falling over. Which does help to explain why 3-wheel recumbents are much more popular and thus easier to find.

A velomobile is essentially a 3 or 4 wheel recumbent cycle with aerodynamic fairings. Velomobiles are awesome because the fairings allow you to go incredibly fast for the amount of watts you put in.

But this page isn't meant to be about how awesome recumbents are. This is about my electric recumbent build.

I'm starting off with an HP Velotechnik Grasshopper FX. It's a fairly high-end 2-wheel folding recumbent with 20 inch wheels. The configuration I ordered has under-seat-stearing, as well as cargo racks. Some of what I wished to accomplish with this is:

- Add a lighting system with daytime running lights, brake lights, and turn signals. All running off the same battery as the motor.
- Add controls for the lighting system. Hook brake lights in to the braking system to turn on when either heavy deceleration is detected or when the brakes are squeezed.
- Add the motors & rest of the system. Use a front-hub direct-drive motor for output with a torque-sensing "bottom" bracket and thumb throttle as the control inputs. Additionally, use the brake sensor (also used for turning on the brake lights) with this to utilize regen.

## Light System

I put off adding brake lights and turn signals for now.

The front light is a [Sate-Light SPL-01](https://www.satelitebikelight.com/ebike-lights-front-light/super-bright-front%20light-spl-01.html). This light has 3 modes: daytime running, low-beam, and high beam. The high beam mode can output up to 1900 lumens. The control, unfortunately, needs to be extended so that I can actually access it. Right now, the control sits right next to where my feet are, though eventually I'll splice an extension cable to route it where the other controls are.

The rear light is a Roxim R1 Elight that I also got from Grin. I have this connected directly to the motor controller such that it's always on, with the power cable snaking all the way to where the light is mounted. Because this is on constantly, I don't have to think about it.

## Motor System

The motor is a grin all-axle front hub motor. It's controlled by a grin phaserunner. I went with this setup because it'll give me fairly strong regenerative braking, while leaving the drivetrain entirely alone. The existing drivetrain is a rear derailleur and an internally geared hub in the rear wheel.

There's a thumb-throttle that's mounted on the right handlebar, and an e-rider torque sensor in the bottom bracket.

## Display & Mount

I used a Cycle Analyst from Grin. It's mounted inside of a custom 3d-printed mount attached to the end of the boom.

## Battery & Mount

I bought a new 52v, 14 amp-hour battery, and I have it secured on top of the rear rack using a custom platform made from plywood.

## Future work

- Add a sling so that I can easily carry & maneuver the bike when it's folded.
- Add a linear hall sensor to the brakes so that I can get proportional regenerative braking.
- Add a solar canopy.
- Add dc-dc converters & USB-C ports. Additionally, add an inverter so I can use the bike as a power station.
- Route lighting controls to the handlebars.
- Add turn signals.
- Add brake lights.
- Add an additional light higher up to increase the chances that others will see me.
