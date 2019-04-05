# Electric Plane

Lessons learned and consolidation for the electric plane I'm designing.

## Base Plane

I’m thinking of basing this off either a Sling 2 or a Sling 4. My plan for this doesn’t need not require 4 seats, so the only reason to go with the 4 is for the larger carrying capacity for only slightly more power required.

## Battery System

When I started this project, I thought I might use salvaged Tesla batteries. As I did more research I realized that the Tesla battery packs are severely over engineered for my needs.[^battery heating]. I can build a battery system that’ll be not as good as a Tesla system, but it’ll be good enough, and much lighter than a Tesla system.

## Motors

Current thought is two emrax 208 motors in a stack configuration. I’d like to have these be air-cooled for weight reasons, though I need to ensure that the stack configuration won’t interfere with that desire.

The stack configuration is for redundancy and power reasons.

- if one motor (or motor controller) dies, then the other can pick up the slack, with a lower max-power.
- this reduces the strain on each motor, which should improve their longevity
- For my desired voltage (400V), it’s much easier to find motor controllers that are rated for the lower power each motor will require.

[^battery heating]: This plane is going to be based in LA. The batteries won’t overheat from use (air-cooled), though they do need some cooling to protect them while the plane sits outside in summer. Heating won’t be required (see: the model 3 lacks a battery heater), but even if it does, then I can utilize the same environmental cooling system to heat as well as cool.