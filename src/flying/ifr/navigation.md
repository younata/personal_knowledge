# Navigation Systems

Radio navigation systems: DME, NDB, VOR, RNAV, GPS, etc.

[See AIM chapter 1 for more reference](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html).

## DME - Direct Measuring Equipment

Tuned automatically with a paired VHF station (Localizer or VOR). Works by having the DME unit on the aircraft ping the ground unit. Ground unit will respond to the ping, and the airborne unit will compute & display distance to the ground unit using time-of-flight.

Note that DME will display "slant range" (actual distance) to the receiver, not horizontal distance. However, you can... effectively ignore that and use horizontal distance if you are 1 NM away for every 1000 feet above/below the station. E.G. at 5000 feet above the station, you need to be at least 5 NM to more-or-less use the slant range as a horizontal distance. This results in the degree of error being less than 10° (`asin(1000 ft / 1 NM) ~= asin(0.1646) ~= 9.473°`)

## NDB - Non-Directional Beacon

Operates in the LF to MF range (190-535 kHz). As the name describes, this does not give you the direction to the beacon. Has the following service volumes:

| Type | Service Volume Radius |
|------|-----------------------|
| Compass Locator | 15 NM |
| Medium High | 25 NM |
| High | 50 NM (or less, as published by NOTAM or in the chart supplement) |
| High High | 75 NM |

### Compass Locator

A type of NDB installed at the outer or middle markers (sometimes both) on some ILS approaches. Low-powered, at least 25 watts & 15 NM range.

## VOR - VHF Omnidirectional Range

As the name describes, they're in the VHF range (108 to 117.95 MHz). These are beacons that include a directional signal, so that a receiver can figure out what radial they're on and display how far off the radial (up to 10° for most HSIs) the aircraft is.

The VOR MON (minimum operational network) program ensures that as old
VORs are decommissioned, a MON airport (equipped with legacy ILS or VOR approach) is available within 100 NM regardless of aircraft position in the continental US.

Service volume depends on the VOR. For all VOR types, from 0 ft AGL up to 1000 ft AGL, it looks like a cone, extending out to the volume specified at 1,000 ft.

| VOR Type | Service Volumes | MON Service Volume |
|----------|-----------------|--------------------|
| Terminal | 1,000 ft to 12,000 ft: Radius 25 NM | n/a |
| Low      | 1,000 ft to 18,000 ft: Radius 40 NM | 5,000 ft to 18,000 ft: Radius 70 NM |
| High     | 1,000 ft to 14,500 ft: Radius 40 NM.<br /> 14.5k to 18k ft: Radius 100 NM.<br /> 18k to 45k ft: Radius 130 NM.<br /> 45k to 60k ft: Radius 100 NM | 5,000 ft to 14,500 ft: Radius 70 NM. Rest unchanged. |

[![VOR service volumes, thanks to boldmethod.com](https://cdn.boldmethod.com/images/learn-to-fly/navigation/how-a-vor-works/vor-service-volumes.jpg)](https://www.boldmethod.com/learn-to-fly/navigation/how-a-vor-works/)

### Limitations

- Cone of Confusion: When you're directly over the VOR, the receiver has a hard time distinguishing which radial you're on.
- Reverse sensing: In older HSIs, if you've accidentally tuned the opposite radial (e.g. you're on the 180 radial, but tuned to the 360 radial), and are off course/trying to get back on, you need to fly away from the line deflection and not towards it.
- VORs requires line-of-sight between aircraft and the VOR transmitter. i.e. mountains will mess with the signal.

### Receiver checks

Must be done every 30 calendar days. Log DEPS: date, error, place (location), and signature.

- VOT (VOR test facility) ±4°
- Repair Station ±4°
- VOR ground checkpoint ±4°
- VOR airborne checkpoint ±6°
- Dual VOR cross-check ±4°
- Above a prominent ground landmark on a selected radial at least 20 NM from a VOR, flying at a “reasonable low altitude” ±6°

## RNAV - Area Navigation

Allows navigation on any desired path without the need to overfly ground-based facilities

Multiple types:
 - GNSS-based (GPS is the US version)
 - VOR/DME RNAV
 - DME/DME RNAV
 - Inertial Reference Unit / System

Most of the time, in the US, you'll be using GPS-based RNAV.

In an approach, you can also get RNAV VNAV, which provides Vertical NAVigation guidance (using GPS?), and BARO-VNAV, which uses barometric altitude to provide vertical guidance.

Published RNAV routes are Q (above 18,000 MSL) and T (up to 18,000 MSL) routes. Designated RNAV 1, unless otherwise charted.

### RNP - Required Navigation Performance

RNAV with navigation monitoring and alerting. It also is "a statement of navigation equipment and service performance".

All RNAV approaches are RNP approaches.

- Most US RNP approaches are titled "RNAV (GPS)"
- US approaches with "RNAV (RNP)" in the title are "AR" (Authorization Required) approaches. You must have specific FAA approval for the crew, aircraft, and operation to fly those.
- In other countries, all RNP approaches may have "RNP" in the title, even those that do not require special authorization.

#### RNP approach minimas and equipment

- GLS DA minimas using GBAS (This is a GPS-based precision approach)
- LP MDA or LPV DA minimas require RNP via WAAS
- LNAV/VNAV DA achieved by VNAV-approved WAAS or BARO-VNAV systems
- LNAV MDA achieved by a basic, unaugmented IFR-approved GPS

### GPS - Global Positioning System

The first GNSS (Global Navigation Satellite System). Created by the US. Minimum 24 satellites (currently a lot more), all at a half-synchronous orbit (2 orbits/day) of 10,900 NM. At least 5 are in view from at any given location on Earth.

[Wikipedia has a good article on how GPS actually works](https://en.wikipedia.org/wiki/Global_Positioning_System).

Each satellite carries an atomic clock, and broadcasts their time and current position. The time difference allows the receiver to calculate the exact distance to the satellite, and with the position of the satellite, the receiver knows they're somewhere on the surface of a sphere centered on the satellite with radius equal to the distance to the satellite. With a second satellite sphere, the receiver knows it's somewhere on the circle formed by the intersection of those 2 satellites. With a third satellite sphere, the receiver can calculate its the 2D position (latitude and longitude). With a fourth satellite sphere, you can calculate the 3D position (latitude, longitude, and altitude). With a fifth satellite sphere, you can detect know if one of the other signals is faulty, and with a sixth sphere, you can eliminate the fault.

Fault detection and elimination is known as RAIM (Receiver Autonomous Integrity Monitoring). You can also use an altimeter to substitute a satellite input, so that you can detect a fault with only 4 satellites, and eliminate it with 5.

GPS CDI deflection shows horizontal distance from the centerline, contrast with a VOR CDI, which shows the amount of degrees off course you are.

GPS can substitute ADF (Automatic Direction Finder) and DME, except for ADF substitution on NDB approaches without a GPS overlay ("or GPS" in title).

Check GPS NOTAMs before flight, and use RAIM prediction if available.

GPS Augmentation Systems, or Differential GPS (DGPS) is a system that improves GPS accuracy by measuring errors received by reference stations at known locations and then broadcasting those errors to supported GPS receivers. There are a few things here for that:

#### SBAS - Satellite Based Augmentation System

WAAS (Wide Area Augmentation System) is the US system, EGNOS is the equivalent in Europe.

Ground stations (Wide-area Reference Stations and Wide-area Master Stations) measure GPS errors and produce correction signals. "These corrections are broadcasted back to the satellite segment from which they are bounced back to aircraft GPS WAAS receivers to improve accuracy, integrity and availability monitoring for GPS navigation." This covers a wide area.

#### GBAS - Ground Based Augmentation System

- Formerly named Local Area Augmentation System (LAAS) in the US. Now replaced with the ICAO term “GBAS.”
- Errors are broadcasted via VHF to GBAS-enabled GPS receivers.
- GBAS is more accurate than WAAS but covers a much smaller geographical area.
- Allows for category I and above approaches to GLS DA minima.

### Difference between RNAV, GNSS, GPS, PBN and RNP

- RNP is a specific statement of PBN for the flight segment and aircraft capability.
- RNP is also defined as RNAV + navigation monitoring and alerting functionality.
  - Receiver Autonomous Integrity Monitoring (RAIM) or built-in monitoring in WAAS provide this capability.
- En route – RNP 2.0 (2 NM accuracy 95% of the flight time)
- Terminal & Departure – RNP 1.0 (1 NM accuracy 95% of the flight time)
- Final Approach – RNP 0.3 (0.3 NM accuracy 95% of flight time)
- Advanced RNP (A-RNP) - is a higher RNP standard mandatory for RNP AR, that require capability for: (AIM 1-2-2)
  - Radius-to-Fix (RF) legs
  - Scalable RNP (meaning RNP accuracy can change value), and
  - Parallel offset flight path generation
