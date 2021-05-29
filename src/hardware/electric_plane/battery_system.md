# Battery System

Really, the pack design is going to be led by the BMS. Charging is the main unsolved problem in this. Once I figure out a solution to that, everything else should fall into place.

The current thought is to use LG M50 21700 cells (same-size as the model 3 cells, different model cells, though). These present advantages in that they're lighter than 18650 cells, and have higher capacity per-cell (M50 has ~18.15 Wh/cell, MJ1 has ~12.72 Wh/cell)

The current thought involves 27 12s13p modules, 9 modules in series, and 3 in parallel. The idea behind that (which might be terrible - I need to do further research to verify this) is that it'll mitigate eddy currents as much as possible.

## BMS

[Has it's own page]({{#path_for Battery Monitoring System}})

## Charger

There exists a working group to design aircraft chargers - they want to come up with a single charger standard. Last I checked, they don’t have anything public released.

Instead, I’m thinking of either placing an onboard J1772 charger, or potentially even a tesla-compatible charger. While it would be awesome to have compatibility with the supercharger network, there are precisely 0 superchargers on airport ramps - making this useless to me [^lol superchargers]

[^lol superchargers]: Am I going to land on a highway and then taxi to a supercharger? I’d be floored if there’s even 1 supercharger station where that could work.
