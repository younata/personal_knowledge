# Electric Plane

Lessons learned and consolidation for the electric plane I'm designing.

This might not materialize as a thing I do, mostly due to lack of space to build the thing in.

## Base Plane

Initially, I planned to use a [Sling 2](https://www.airplanefactory.com/aircraft/sling-2-kit/) as the "base" plane. Recently (October 2019), I was able to chat with the person who designed the [Berkut](https://en.wikipedia.org/wiki/Berkut_360), who also worked for Rutan back in the day and he encouraged me to take a look at the [Long-EZ](https://en.wikipedia.org/wiki/Rutan_Long-EZ). Because the Long-EZ is a more aerodynamic aircraft, I can get a longer range with less battery. Which is obviously better as it's less battery weight overall and also cheaper. Additionally, the overall project cost should be MUCH cheaper as it's much cheaper to buy a 90% complete long-ez  (~10-20k USD) than it is to buy a new sling (~60k USD).

Currently, I estimate I can get approximately 300 statute miles with no reserves on a 70 kWhr battery.

## Battery System

[Main page here](./battery_system.md)

When I started this project, I thought I might use salvaged Tesla batteries. As I did more research I realized that the Tesla battery packs are severely over engineered for my needs.[^battery heating]. I can build a battery system that’ll be not as good as a Tesla system, but it’ll be good enough, and much lighter than a Tesla system.

### Pack Design

I’m still working through this.

Current thought is to use [LG M50](https://www.batteryspace.com/prod-specs/11514.pdf) cells, which, as of late 2019, have the highest energy density (~263 watt-hours per kilogram) of any battery cell I could find[^feasible for use in EVs]. This might change by the time I get around to being ready to manufacture the battery packs.

### Mounting the Batteries

Initially, I thought I’d mount the batteries where the gas tanks would go - there’s plenty of space, the wing spar will handle the load, etc. But, I realized that I need to be able to access the battery packs easily, and for that it’s much easier to place them firewall forward or otherwise in/around the fuselage. (Having to take apart the wings, or build in a folding hatch, was and is not appealing to me).

I need to CAD this up, but the current thought is to place most of the batteries in where the engine would go, with the rest behind the main seat, as weight and balance dictates.

One of the super nice things about an electric plane is that the “fuel” doesn’t slosh around, or otherwise change the weight and balance. Which makes weight and balance calculations much easier, as well as allowing me to better optimize weight distribution. Of course, this nicety is countered by the fact that I’m always running at the heaviest fuel load.

## Charging

I’m still figuring this out, and once I have this figured out, I’m sure my battery system will change to suit this.

I’m aware of the existence of a standard for electric airplane charging, but I’m unaware of it’s contents.

So, instead, I’m thinking of integrating an automotive EV charger. These are designed for ~400V battery systems, so I should be able to get one to work with mine.

I still haven’t ruled out working with actual electrical engineers to design/build my own.

Ideally, though, I’d be able to integrate an aircraft charger.

## Motors

Current thought is a single [Emrax 228](https://emrax.com/products/emrax-228/) motor.

### Motor Controllers

Still researching this. Current thought is to run two controllers per motor (so... two controllers), with each able to handle 100A at 450V (or 45kW each). This'll allow redundancy in the case one of the controllers blows.

Need to research what kind of motor controller.

### Cooling

While I'd like to use air cooling, this really depends on what I can find for the motor controllers. I might have to build a liquid-cooling system (likely using glycol as the liquid) for this.

## Solar Charger

While I'm not going to slap solar cells on the plane, I do want to build a folding solar array that can be stored in the plane.

<a href="https://sunelec.com" data-proofer-ignore>sunelec</a> is a place where you can buy PALLETS of solar panels for fairly cheap.

## Things that won’t be on the MVP

Out of scope things that won’t be on the plane, at least, not initially.

### Motorized Wheels

For making ground operations much more efficient, I’ve considered placing ebike motors in main gear of the airplane. The thought was to aid in taxiing (don’t use the propeller to move), takeoff (use motors + propeller to get up to speed), and landing (regenerative breaking). However, for reasons of simplicity, I’m not going to do that.

I still might build motors into the wheels, but not hook them up to anything, though.

### Solar Wings

TL;DR: It’s not worth it. Yet.

For the planes I’m considering, I have about 130 square feet total wing area. With the most efficient solar cells available on the market, I expect to get approximately 25 watts per square foot, or about 3 kilowatts for the entire wing. For reasons, I expect to only be able to utilize at most 2/3rds of the total wing area. Reducing this down to 2 kilowatts at most (realistically, closer to only 1). This is not useful whatsoever for extending the duration of flight (It would add on the order of 10 minutes total duration), which means that it’s only useful for charging, either to supplement grid power (that’ll be a fun challenge), or when grid power is not available.

There’s other things I can do to increase the amount of solar, e.g. covering most of the fuselage & tail, but that’s not really worth doing.

Additionally, just adding solar cells on top of the wings will affect the aerodynamics, potentially in a way I don’t want it to.

Instead, I’m considering building a folding array that I can set up next to the plane and use to charge it. This’ll have a convenience and weight penalty compared to directly mounting the cells, but I’ll have much more surface area available, and it won’t interfere with the aerodynamics of the plane.

## Other Electric Plane Builds

- [Helno’s Electric Motorglider](https://endless-sphere.com/forums/viewtopic.php?f=38&t=89000)
- [Farfle’s Electric Ultralight](https://endless-sphere.com/forums/viewtopic.php?f=38&p=1298367)

[^battery heating]: This plane is going to be based in LA. The batteries won’t overheat from use (air-cooled), though they do need some cooling to protect them while the plane sits outside in summer. Heating won’t be required (see: the model 3 lacks a battery heater), but even if it does, then I can utilize the same environmental cooling system to heat as well as cool.
[^feasible for use in EVs]: There exist batteries that are kinda-available with much higher energy-densities than the M50 (lithium sulfur), but they're not feasible for use in EVs. I'm ok paying a bunch for batteries, but they need to be usable for multiple years. The other chemistries don't hold their capacities after many charge cycles.