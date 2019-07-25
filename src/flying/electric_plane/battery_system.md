# Battery System

Really, the pack design is going to be led by the BMS. Charging is the main unsolved problem in this. Once I figure out a solution to that, everything else should fall into place.

The current thought is 3 strings of 12s25p modules, with 9 modules in series each. For a total of 27 total modules, and 8100 total cells.

The parallel strings will introduce eddy currents, but I'd rather have the backup capacity available. I have thoughts of mitigating this by tieing each string together on the pack level, with a fuse or circuit breaker to disable individual modules.

TODO: add circuit diagram.

## BMS

[Has it's own page](./bms.md)

## Charger

There exists a working group to design aircraft chargers - they want to come up with a single charger standard. Last I checked, they don’t have anything public released.

Instead, I’m thinking of either placing an onboard J1772 charger, or potentially even a tesla-compatible charger. While it would be awesome to have compatibility with the supercharger network, there are precisely 0 superchargers on airport ramps - making this useless to me [^lol superchargers]

[^lol superchargers]: Am I going to land on a highway and then taxi to a supercharger? I’d be floored if there’s even 1 supercharger station where that could work.
