# Instrument Flying

Operating an aircraft solely by reference to instruments.

- [Altitudes]({{#path_for Altitudes}}) covers IFR altitude names. Also includes the definition of what you must see in order to descend below the DA/MDA.
- [Approaches]({{#path_for Approaches}}) covers Instrument approaches and related topics.
- [Departures]({{#path_for Departures}}) covers Instrument departures and departing under IFR/Picking up IFR in flight.
- [IFR Flight Plans]({{#path_for IFR Flight Plans}}) covers contents of an IFR flight plan.
- [Navigation]({{#path_for Navigation Systems}}) covers IFR navigation methods.

## Mandatory Reporting Events

`MARVELOUS VFR C500`

- **M**issed approach
- **A**irspeed ± max(10 kts, 5% change) of filed TAS
- **R**eaching a holding fix (time + altitude)
- **V**FR on top: changing altitude
- **E**TA changed ± 2 min (3 min in the North Atlantic). Only in non-radar environments
- **L**eaving a holding fix/point
- **O**uter marker (or fix used in lieu of). Only in non-radar environments
- **U**n-forecasted weather.
- **S**afety of flight (emergencies and such)
- **V**acating an altitude/FL
- **F**inal approach fix. Only in non-radar environments
- **R**adio/navigation/approach equipment failure
- **C**ompulsory reporting points. Only in non-radar environments
- **5**00 - unable to climb/descend 500 FPM

### Position reporting items

"Center, `\$CALLSIGN`, reporting `\$LOCATION`, `\$ALTITUDE` at `\$TIME`. On IFR flight plan. Next position `\$NEXT_FIX` at `\$NEXT_FIX_TIME`. Afterward `\$SUCCEEDING_POINT`. `\$REMARKS`"

- Aircraft ID
- Position
- Time
- Altitude
- Type of flight plan (except when communicating with ARTCC / Approach control)
- ETA and name of next reporting fix
- Name only of the next succeeding point along the route of flight (Point after next reporting fix)
- Any relevant remarks
