# Tesla

I have a Model 3.

## Keyfob

The optional keyfob is an extra $150, because of course it is. It's actually kind of nice because you can use it to remotely lock/unlock the car without using your phone (I don't trust the "lock when walking away" to lock soon enough). Don't expect it to be great for valet - the Tesla keyfobs are odd enough that key cards are easier for a valet.

### Summon with the Keyfob

As of 2019.7.11, you can use the keyfob with summon. It requires "Requires Continuous Press" in the summon settings to be off, but once that's a thing, you press on the "roof" button of the car until the emergency lights and such turn on, then you press on the frunk (forward) or trunk (backward) button to move the car. Press on the roof button again to stop.

## Drafting

Aerodynamics is awesome. When drafting behind a vehicle, there are at two zones where the air currents help you out: The zone immediately behind the leading vehicle, which gives the most drafting advantage - at the expense of being incredibly dangerous. This then drops off quickly into a very turbulent and aerodynamically harmful zone - to the point where it’s better to not draft than be in that turbulent zone. Afterwards, there’s another zone where you get pretty decent performance. This zone, once found, is the area where you can balance safety (you’re safely behind the leading vehicle) and efficiency. With the autopilot feature, you can then let the car keep you in that zone of maximum efficiency.

### Methodology

The goal here is to use autopilot at specific follow distances to find a local efficiency maxima. This works best on a very long stretch of mostly straight, same-grade (so... flat) road. If the leading vehicle maintains the same speed throughout this, then it’s even better (ideally, they’d also stay in the same position in the lane, but that’s a bit to hopeful).

Essentially, set follow distance to 7 (the max), pull up the energy monitor, set it to show the consumption rate (so you can view the current efficiency), and follow the vehicle for 5 miles. After 5 miles, note the energy usage for that and repeat with a lowered follow distance. Eventually, you’ll reach a follow distance where the energy usage not only increased, but it increased dramatically (I’ve seen jumps from 180 Wh/mi to 220 Wh/mi). This means that you’re in the turbulent zone. Once you have that, set the follow distance to whichever had the highest efficiency/lowest energy usage.

Note that the particular follow distances depend greatly on the type of leading vehicle, and the speed they’re traveling. In general, the faster the leading vehicle is, the more elongated each zone is.

### Data/Previous Results

| Leading Vehicle Kind | Speed (mph) | Follow Distance |
|:--|:--|:--|
| Semi (w/ Trailer) | 60 | 5 |
