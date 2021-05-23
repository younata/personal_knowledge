# Instrument Flying

Operating an aircraft solely by reference to instruments.

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

## Navigation Systems

Radio navigation systems: DME, NDB, VOR, RNAV, GPS, etc.

[See AIM chapter 1 for more reference](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html).

### DME - Direct Measuring Equipment

Tuned automatically with a paired VHF station (Localizer or VOR). Works by having the DME unit on the aircraft ping the ground unit. Ground unit will respond to the ping, and the airborne unit will compute & display distance to the ground unit using time-of-flight.

Note that DME will display "slant range" (actual distance) to the receiver, not horizontal distance. However, you can... effectively ignore that and use horizontal distance if you are 1 NM away for every 1000 feet above/below the station. E.G. at 5000 feet above the station, you need to be at least 5 NM to more-or-less use the slant range as a horizontal distance. This results in the degree of error being less than 10° (`asin(1000 ft / 1 NM) ~= asin(0.1646) ~= 9.473°`)

### NDB - Non-Directional Beacon

Operates in the LF to MF range (190-535 kHz). As the name describes, this does not give you the direction to the beacon. Has the following service volumes:

| Type | Service Volume Radius |
|------|-----------------------|
| Compass Locator | 15 NM |
| Medium High | 25 NM |
| High | 50 NM (or less, as published by NOTAM or in the chart supplement) |
| High High | 75 NM |

#### Compass Locator

A type of NDB installed at the outer or middle markers (sometimes both) on some ILS approaches. Low-powered, at least 25 watts & 15 NM range.

### VOR - VHF Omnidirectional Range

As the name describes, they're in the VHF range (108 to 117.95 MHz). These are beacons that include a directional signal, so that a receiver can figure out what radial they're on and display how far off the radial (up to 10° for most HSIs) the aircraft is.

The VOR MON (minimum operational network) program ensures that as old
VORs are decommissioned, a MON airport (equipped with legacy ILS or VOR approach) is available within 100 NM regardless of aircraft position in the continental US.

Service volume depends on the VOR. For all VOR types, from 0 ft AGL up to 1000 ft AGL, it looks like a cone, extending out to the volume specified at 1,000 ft.

| VOR Type | Service Volumes | MON Service Volume |
|----------|-----------------|--------------------|
| Terminal | 1,000 ft to 12,000 ft: Radius 25 NM | n/a |
| Low      | 1,000 ft to 18,000 ft: Radius 40 NM | 5,000 ft to 18,000 ft: Radius 70 NM |
| High     | 1,000 ft to 14,500 ft: Radius 40 NM. 14.5k to 18k ft: Radius 100 NM. 18k to 45k ft: Radius 130 NM. 45k to 60k ft: Radius 100 NM | 5,000 ft to 14,500 ft: Radius 70 NM. Rest unchanged. |

![[VOR service volumes, thanks to boldmethod.com](https://www.boldmethod.com/learn-to-fly/navigation/how-a-vor-works/)](https://cdn.boldmethod.com/images/learn-to-fly/navigation/how-a-vor-works/vor-service-volumes.jpg)

#### Limitations

- Cone of Confusion: When you're directly over the VOR, the receiver has a hard time distinguishing which radial you're on.
- Reverse sensing: In older HSIs, if you've accidentally tuned the opposite radial (e.g. you're on the 180 radial, but tuned to the 360 radial), and are off course/trying to get back on, you need to fly away from the line deflection and not towards it.
- VORs requires line-of-sight between aircraft and the VOR transmitter. i.e. mountains will mess with the signal.

#### Receiver checks

Must be done every 30 calendar days. Log DEPS: date, error, place (location), and signature.

- VOT (VOR test facility) ±4°
- Repair Station ±4°
- VOR ground checkpoint ±4°
- VOR airborne checkpoint ±6°
- Dual VOR cross-check ±4°
- Above a prominent ground landmark on a selected radial at least 20 NM from a VOR, flying at a “reasonable low altitude” ±6°
