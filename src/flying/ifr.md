# Instrument Flying

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

"Center, `$CALLSIGN`, reporting `$LOCATION`, `$ALTITUDE` at `$TIME`. On IFR flight plan. Next position `$NEXT_FIX` at `$NEXT_FIX_TIME`. Afterward `$SUCCEEDING_POINT`. `$REMARKS`"

- Aircraft ID
- Position
- Time
- Altitude
- Type of flight plan (except when communicating with ARTCC / Approach control)
- ETA and name of next reporting fix
- Name only of the next succeeding point along the route of flight (Point after next reporting fix)
- Any relevant remarks

## Altitudes

[Part 91.177](https://ecfr.io/Title-14/Section-91.177), Pilot/Controller Glossary.

- **DA** or **DH**: Decision Altitude / Decision Height. The Altitude (MSL) or Height (above runway threshold) on an instrument approach procedure at which the pilot must decide whether to continue the approach or go missed
- **MAA**: Maximum Authorized Altitude. Annotated "MAA - 17000" (17,000 ft as an example) on IFR charts.
- **MCA**: Minimum Crossing Altitude. Minimum altitude you must cross a fix at. Depicted as a flag with an X inside of it on the charts.
- **MDA** or **MDH**: Minimum Descent Altitude / Minimum Descent Height. The lowest Altitude (MSL) or Height (above runway threshold) to which descent is authorized on a non-precision approach until the pilot sees the visual references required for landing.
  - You descend to the MDA/MDH, and maintain that altitude/height until you either reach the missed approach point, or you see the visual references required for landing.
- **MEA**: Minimum Enroute Altitude. The lowest published altitude between radio fixes which assures acceptable navigation signal coverage and meets obstacle clearance requirements. An MEA gap establishes an area of loss in navigational coverage and is annotated "MEA GAP" on IFR charts.
  - The important thing here is adequate navigation signal coverage and meeting obstacle clearance requirements.
- **MOCA**: Minimum Obstruction Clearance Altitude. Like MEA, but only up to 22 NM from the VOR.
  - If both an MEA and MOCA are specified for a particular route segment, you may fly lower than the MEA down to, but not below the MOCA. You must be able to receive the applicable navigation signals. If you're using VOR for navigation, this only applies when aircraft is within 22 NM of VOR.
- **MRA**: Minimum Reception Altitude. Minimum altitude to receive navigation signals.
- **MTA**: Minimum Turning Altitude. Provides vertical and lateral obstacle clearance in turns over certain fixes. Annotated with the MTA X icon and a note describing the restriction.
- **MVA**: Minimum Vectoring Altitude: Lowest altitude at which an IFR aircraft will be vectored by a radar controller. Unless otherwise authorized for radar approaches, departures, and missed approaches. MVAs may be lower than the minimum altitudes depicted on aeronautical charts, such as MEAs or MOCAs.
  - MVAs are not published in any aeronautical chart used by pilots. They're available only to ATC.
- **OROCA**: Off Route Obstruction Clearance Altitude. Provides obstruction clearance with a 1,000 foot buffer in non-mountainous terrain areas and 2,000 feet in mountainous areas. Does not provide navigation or communication signal coverage.

### Descending below MDA/DA

You can descend below the MDA/DA when all of the following conditions are true:

- The aircraft is continuously in a position from which a descent to a landing on the intended runway can be made at a normal rate of descent using normal maneuvers. i.e. no chop and drop/slipping.
- The flight visibility is not less than the visibility prescribed in the standard instrument approach being used.
- At least one of the following visual references for the intended runway is distinctly visible and identifiable to the pilot:
  - The approach light system, except that the pilot may not descend below 100 feet above the touchdown zone elevation using the approach lights as a reference unless the red terminating bars or the red side row bars are also distinctly visible and identifiable.
  - The threshold.
  - The threshold markings.
  - The threshold lights.
  - The runway end identifier lights.
  - The visual glideslope indicator.
  - The touchdown zone or touchdown zone markings.
  - The touchdown zone lights.
  - The runway or runway markings.
  - The runway lights.
