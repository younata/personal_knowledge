# Ebikes

Electric Bicycles, or ebikes, manage to have all of the benefits of a standard bicycle (very cheap to buy and own, nimble, versatile, oftentimes faster than driving), and they reduce or eliminate the effort required to actually get around. I am a huge fan and proponent of electric bicycles (and really, EVs of all kinds. Bring on the electric revolution).

## Motors

There are basically 2 ways to mount the motors in an ebike nowadays: Hub, and Mid-Drive.

Hub motors are motors directly embedded into one of the wheels of the bike. Mid-drive motors are mounted such that they use the bike's drivetrain to deliver power.

### Hub Motors

Hub motors work by embedding the motor into the wheel. Which makes installing a hub motor onto an existing bike super easy - all you need to do is replace the wheel, mount the other electronics, and go.

In general, hub motors are thinner than mid-drives. They do, after all, have to fit inside of a bicycle wheel. And even fat tire bikes have relatively thin wheels. This generally means that they'll have a larger diameter than a mid-drive motor of the same power rating, which gives them a larger surface area and improves heat dissipation.

Hub motors are also unsprung weight. On a bike without suspension, this doesn't really mean anything, but on a bike with suspension, it reduces the effectiveness of the suspension, which both reduces traction on bumpy roads and makes the ride itself bumpier.

Hub motors, being independent of the system drive train, also offer redundancy. In the event that the drive train fails, then you can get home using only the motors.

All motors have specific most efficient and max rpms that they operate. Which for hub motors directly translates into a most efficient and max speeds. These are based on the voltage of your system, as well as the specific motor, and the diameter of your wheel. Larger diameter wheels will have higher max speeds, but lower torque. Mid-drives, which use the gearing of your bike, also have max speeds, which are based off whichever gear your bike is in.

#### Direct Drive

Direct drive motors are as simple as you can get, and they work very well. They are motors that directly drive the wheel, with no clutch used. Generally, direct drive motors have no internal gear reduction. Meaning that the RPM of the wheel is the RPM of the motor. There are motors with internal gearing without clutches, such as [Grin Tech's GMAC motor](https://ebikes.ca/shop/electric-bicycle-parts/motors/gmac10t.html), which are usually lumped in with direct drive motors when talking about certain topics like regenerative braking. You will almost never find a direct drive motor that has a clutch.

Direct drives don't have a clutch. The motor is always engaged. This is what enables regenerative breaking, but it also means that you can't just turn off the motor and pedal - the motor will actively sap your power even if the entire system is off. You can configure certain systems to electronically freewheel, which does use extra power (on the order of a few watts), but this still results in less system losses than if you simply allowed the motor to drain your power.

Direct drives offer regenerative braking. Which allows you to slow down by using the motor as a generator, converting your kinetic energy back into electricity (and ultimately chemical energy as it recharges your battery). Depending on the kind of environment you'll be riding on, regenerative braking can typically recover (or extend your range by) 3% to 15%. Hillier terrain will allow you to extend your range the most. Additionally, more urban environments (where you'll be stopping more often) also allows you to recover more energy as you'll be stopping more often. However, more important than extending your range is that regenerative braking will vastly reduce wear on your physical brakes. Additionally, your motor controller needs to support regen in order for regenerative braking to work. Otherwise there's really no point installing a direct drive motor.

Direct drives also can be operated at a much higher power level than geared hub or mid-drive. Without having to worry about damaging any internal gearing, or damaging the bicycle's drivetrain, it's not rare to see direct drive motors that can output 2 to 4 KW of power. (Which does not apply to geared hub motors that lack a clutch).

Direct drive motors are near-silent. There's no gearing to cause additional noise. The only noises are road noise, wind noise, and whining of the electronics.

The main downsides to direct drive motors are that they are inefficient for low speed/high torque uses. The 1-1 ratio of the motor to the wheel means that for bicycle wheels, direct drive motors don't really run at efficient RPMs until you're going greater than 15 mph or so. This is especially exacerbated for hills, or when pulling cargo, where you're naturally going to put more load on the motor at lower speeds. Running a direct drive motor under such high-load conditions can lead to overheating. This isn't as much of an issue for motors with geared hubs that lack clutches, which can handle higher torque loads.

To my knowledge, it's very hard to find a factory ebike that ships with a direct drive motor. These are generally used in DIY installs, or from high-end boutique manufacturers.

#### Geared Hub

A geared hub motor is a motor with internal planetary gears that allow the motor to spin at a much faster rate than a traditional direct drive motors. Additionally, nearly all geared hub motors have clutches that allow them to freewheel. Which means you can turn off the electrics and pedal the bike like a very heavy acoustic (non-electric) bike.

Geared hubs are most of the hub motors on the market. Because of the gearing, they provide much more torque than direct drives, and can thus be much smaller than direct drives. They are generally a bit louder than direct drives, but newer ones are coming out that use quieter gear reduction which somewhat mitigates that issue. Generally, if you come across a hub motor kit on the market, it's using a geared hub motor.

Geared hub motors are usually, but not always, slightly lower power than direct drives. Higher power geared hub motors can have heat dissipation issues. Plus at higher power levels, you'll want to run a direct drive motor for the extra speed.

Because geared hub motors are so common, they're typically used in most entry-level ebike conversions. Additionally, a lot of entry-level factory ebikes use geared hub motors.

### Mid Drive Motors

In general, Mid drive motors work by driving the rear wheel via the bike's drivetrain. Modern ebikes do this by essentially mounting the motor in or around the bottom bracket. This places the weight of the motor in a really good position, balance wise. It also reduces the total unsprung weight of the bike, which improves traction. Because mid-drives can take advantage of the bike's gearing, you can get both high torque, and a decently fast top speed. Meaning they can climb well and perform well on flat ground.

The downsides of mid-drives are that they increase wear on the bike's drive train. They also can't be run at super high power levels. Above 2000 watts, there's a real risk of snapping your bicycle chain. Even at more regular power levels like 500 watts, they still increase wear simply because the average human will put out something like 100 watts continuously. You can't really do regen on a mid-drive, so you'll be able to climb hills faster, but you won't regain any of that energy on the way down. They also tend to be louder because most mid-drives have some kind of internal gearing in addition to using the bike's gearing. Finally, if your bike uses external gearing (aka a derailleur, most bikes use these) instead of internal gearing, then you need to not run power through the drive while shifting. This is done either by using a specific "gearsensor" to detect when a gear change, which the controller will use to briefly cut power to the motor during that. Alternatively, you can make a habit to cut power when you change gears.

Still, for most people a mid-drive motor is a really good entry to ebiking. Especially if you're going to get a factory-built ebike. Most factory-built ebikes are specced for the European market, which has a limit of 250 watts on the motor, and a mid-drive really helps when the motor will only output 250 watts of power.

### Which motor style is better?

It depends.

First, let's examine this from a hub motor vs. mid-drive motor. Mid-drives excel at climbing hills and going from a stop. Making them a no-brainer for something like mountain biking. They also work really well for other high-torque applications, like riding through sand or snow.

My first few ebikes used mid-drive motors, and the only thing I really want from hub motors is the ability to use regenerative braking.

Hub motors are excel at riding on flat terrain, or climbing relatively gentle inclines. Additionally, because of the potential for regenerative braking, hub motors are better for downhill and urban environments. Additionally, because they're separate from the bike's drivetrain, you get a bit of redundancy if either fails. With mid-drives, you can obviously still pedal if the electrics fail. But if the drivetrain fails, at best you're left with a really awkward scooter. Thankfully, this isn't an issue in practice so long as you take care of the drivetrain (regularly clean and lubricate the chain, replacing it as needed, etc.) and don't run too much power through it.

Again, it depends on your use case. My first few ebikes used mid-drive motors, which allowed me to relatively easily convert these existing bikes without much fuss. My only complaint with these are with the specific kits I used, otherwise I'm quite happy with these.

## Solar?

Powering an ebike using solar power is actually doable and sometimes worthwhile. It's not cost-efficient in terms of being the sole source of electricity. Ebikes are efficient enough, and energy is cheap enough that you will spend maybe $1.00 in electricity for the entire life of the bicycle. However, for long-range applications, it is cheaper to buy and set up solar panels + a charge controller than it is to buy a second (or larger) battery.

The way you use solar with an ebike is to use the panels to charge the ebike battery. It doesn't make sense to ditch the battery and use the panels to directly run the motor. The power output from the panels is too low and variable to be worth doing.

The most obvious reason to use solar power is for long, off-grid bicycle tours. Solar also works well for other types of off-grid charging. For example, you might ride an ebike to work, and leave it outside to fully charge back up while you work. Which, again, won't save you anywhere near enough money to be worth tracking, but if you were going to leave the bike outside anyway, then it might as well charge while it's there. This also saves you time from needing to keep a charger at work, or from having to bring your battery to your desk to charge there.

One idea I'm planning to explore with solar is the idea of putting on a solar roof, which would provide partial shade for me on rides, while also slightly charging the battery. Here the primary reason to do this is to provide shade, with a side-benefit of slightly extending the range of the ebike. I'll update this once I do so.

## My Experience

I currently have 2 ebikes, each of which is powered by a BBS02 mid-drive motor. One of which is on a Yuba Mundo longtail cargo bike, and the other is on a standard hybrid bike. I think that the BBS02 and BBSHD mid-drive motors are excellent kits for creating a really good ebike with minimal fuss. My main issue with these kits is that Bafang (the manufacturer) decided to only use cadence-based pedal-assist for these, not torque-sensing. Additionally, I'd love to use regenerative braking, so I'm actively looking at changing one of my bikes to use a hub-motor system so I can try out regenerative braking.

## Links

- [Grin Technologies, one of the authorities for DIY ebikes](https://ebikes.ca/)

## Legality

I'm a person on the internet. This is not legal advice. This might even be entirely wrong or outdated. Or you might live outside of the US (or in one of the states that bans ebikes). Don't be an ass, use your brain.

In the US, ebikes are limited to 750 watts when operated in public spaces. Locally, there may be additional limitations or even bans. In private spaces, there's basically no limits.

A bunch of states are adopting different classes of ebikes, based off what California introduces. These are:

1. Class 1: Ebikes limited to 20 mph, pedal-assist only.
2. Class 2: Ebikes limited to 20 mph, throttle allowed.
3. Class 3: Ebikes limited to 28 mph, pedal-assist only. Can't ride on "Class 1 bicycle paths". Must be at least 16 to ride.

You can still pedal an ebike past the given limit, but after 28 mph, a class 3 ebike should cut off the motor.

In practice, ebikes are basically ignored by cops. They likely aren't educated on these laws, and even if they are, it's really hard to prove that you were actually doing anything wrong. The takeaway here is to try not to do anything to bring extra attention to you. Which, unfortunately, [might not be possible]({{#path_for Antiracism}}).

Cool, that's done.
