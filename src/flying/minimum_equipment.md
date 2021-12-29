# Minimum Required Equipment

[FAR 91.205](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91#91.205) lists the required equipment for all flights.

Note that the order of precedence goes MEL (Minimum Equipment List - an individualized list of minimum required equipment for a specific aircraft), MMEL (Master Minimum Equipment List - essentially an MEL, but for an entire type/range of types of aircraft), then KOEL (Kinds of Operations Equipment List), and then if that doesn't exist, then following what's in 91.205 (assuming you're flying under Part 91).

## VFR Day

- Airspeed indicator
- Altimeter
- Magnetic direction indicator (compass)
- Tachometer
- Oil pressure gauge for each engine using a pressure system
- Temperature gauge for each liquid cooled engine
- Oil temperature gauge for each air cooled engine
- Manifest pressure gauge for each altitude engine
- Fuel gauge indicating the quantity of fuel in each tank
- Landing gear position indicator, if retractable.
- If certified after 1996-03-11, red and white anticollision light system.
- If over water, and beyond glide distance: approved flotation gear, and at least one flare.
- Approved safety belt for everyone > 2
- If made after 1978-07-18, shoulder harness or restraint for each front seat.
  - If made after 1986-12-12, shoulder harness or restraint for all seats.
- An ELT, as required for [91.207](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91#91.207)

Or, as a mnemonic (retrieved from [Ask A CFI](https://www.askacfi.com/1647/vfr-required-equipment.htm)), TOMATOE A FLAMES:

- **T**achometer (for each engine)
- **O**il Pressure Gauge
- **M**agnetic Direction Indicator (magnetic compass)
- **A**irspeed Indicator
- **T**emperature Gauge for each liquid cooled engine
- **O**il Temperature Gauge
- **E**mergency equipment (beyond power off gliding distance over water) pyrotechnic signaling device, flotation device
- **A**nti-collision Lights
- **F**uel Gauge for each tank
- **L**anding gear position indicator
- **A**ltimeter
- **M**anifold Pressure Gauge for each engine
- **E**mergency Locator Transmitter
- **S**afety Belts and Shoulder Harnesses

Source: [FAR 91.205 (b)](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.205#p-91.205(b))

## VFR Night

Everything in VFR Day plus the following:

mnemonic:

- **F**uses
- **L**anding light, if operated for hire
- **A**nti-collision light (beacon and/or strobes)
- **P**osition Lights – Nav Lights (Red on the left, Green on the Right, White facing aft)
- **S**ource of electricity (battery, generator, alternator)

Source: [FAR 91.205 (c)](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.205#p-91.205(c))

## IFR

IFR Adds GRABCARD to the respective VFR Day or Night requirements (i.e. for IFR day, you need all the required equipment for VFR day, plus what follows. For IFR night, you need all the required equipment for VFR Day & Night, plus what follows.)

- **G**enerator/Alternator
- **R**adios (Two-way comms + navigation equipment suitable for the route to be flown)
- **A**ltimeter (sensitive & adjustable for barometric pressure)
- **B**all (Slip-kid indicator)
- **C**lock (display hours, minutes, and seconds with a sweep-second pointer or digital presentation)
- **A**ttitude Indicator
- **R**ate-of-Turn Indicator
- **D**irection gyroscope (heading indicator)

Source: [FAR 91.205 (d)](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.205#p-91.205(d))

## Specific Equipment

### ADS-B and Mode C transponder.

You need ADS-B out whenever you need a Mode C transponder (Mode C means altitude encoding, so squawk code + altitude).

You need a Mode C transponder under the following conditions:

- When operating in class A, B or C airspace.
- When operating above class B or C airspace (up to 10,000 feet MSL, at which point, due to the next item, you still need the transponder)
- When operating in class E airspace at or above 10,000 feet MSL (within CONUS), except when you are operating at or below 2,500 AGL
- Within 30 nm of class B airspace primary airport, below 10,000 feet MSL.
- Whenever you are flying into, within, or across the contiguous United States Air Defense Identification Zone (ADIZ).

There is also a case where you need ADS-B out, but not necessarily a transponder:

- When operating in class E airspace at or above 3,000 feet MSL over the gulf of Mexico from the US coastline out to 12 nm.

But you should be running the transponder & ADS-B out at all times.

### VOR Accuracy Checks

There are several ways to check the accuracy of VOR equipment. Note that the VOR itself itself is only accurate to about 1°.

| Type | Required Accuracy |
|------|-------------------|
| VOR Test Signal (VOT) | ±4° |
| Radio Repair Station Test Signal | ±4° |
| VOR Ground checkpoint | ±4° |
| VOR Airborne checkpoint | ±6° |
| Airborne over prominent landmark along centerline of established VOR airway (20+ NM from VOR) | ±6° |
| Checking a dual VOR system against each other | ±4° |

You can check a dual VOR system against each other in lieu of all other VOR check procedures.

When using a VOT, you tune the VOR to 108.0 MHz, and the OBS should read 0° (TO), and 180° (FROM).

A VOR check must be done within the preceding 30 days to operate an aircraft under IFR.

#### Logging

Regardless of how you check it, you must log the date, place, and bearing error for each VOR. You must also sign it. ([91.171 (d)](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/subject-group-ECFRef6e8c57f580cfd/section-91.171#p-91.171(d)))

e.g (from my own logs):

```txt
VOR check 66083
2021-12-17
VOR GND Check

R1: 049: No deviation, to
    229: No deviation, from
R2: 049: No deviation, to
    229: No deviation, from
```

(with my signature at the bottom).
