# Battery System

Really, the pack design is going to be led by the BMS. Charging is the main unsolved problem in this. Once I figure out a solution to that, everything else should fall into place.

## BMS

I really don’t want to have to design and build my own.

Henry has the Battery Murdering System that he uses in the Quick-E. I could probably ask him about it.

[OrionBMS](https://www.orionbms.com/products/orion-bms-standard) is a commercial off-the-shelf BMS with support for J1772 charging, meant for EVs. This is quite intriguing to me. They have extension public documentation, not just on [use](https://www.orionbms.com/manuals/pdf/orionbms2_operational_manual.pdf), but also actually [putting the thing together](https://www.orionbms.com/manuals/pdf/orionbms2_wiring_manual.pdf). It is quite expensive, and would more than double the cost of the entire system.

### Designing my own

There exist chips for making this slightly easier, I could go down this route. I need to verify how much I can parallelize the mj1 cells.

The main issue with designing my own system is managing charging and how that works out - specifically making sure each gets properly charged. Especially with the 51V packs I was originally designing for - e.g. can I feel 400V to all 7 packs in series and it’ll all charge properly, even up to 95%+ charged? That seems too good to be true, given what else I know about lithium-ion being such a finicky technology.

## Charger

There exists a working group to design aircraft chargers - they want to come up with a single charger standard. Last I checked, they don’t have anything public released.

Instead, I’m thinking of either placing an onboard J1772 charger, or potentially even a tesla-compatible charger. While it would be awesome to have compatibility with the supercharger network, there are precisely 0 superchargers on airport ramps - making this useless to me (Am I going to land on a highway and then taxi to a supercharger? I’d be floored if there’s even 1 supercharger station where that could work).
