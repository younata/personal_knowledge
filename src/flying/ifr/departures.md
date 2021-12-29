# Departures

Covered in [AIM, Chapter 5, Section 2](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_2.html).

## Picking up Clearance and Departing

There are 4 ways to enter IFR.

- Pick up IFR clearance on the ground, and depart IFR.
- Pick up IFR clearance on the ground, depart VFR, then switch over to IFR in the air. (But... why?)
- File IFR prior to startup, depart VFR, and pick up clearance in the air. (But... why?)
- Depart VFR, and pick up a pop-up IFR clearance in the air.

In the first 3 cases, you file for IFR at some point on the ground (ideally before the engine is even started up, but you can certainly do that while the engine is running. Which I've done if I'm on the second-half of a cross-country trip where I only filed prior to leaving the first time. Knowing what I know now, I would just file twice.)

Regardless, in the first 3 cases, you pick up your clearance, either by calling clearance departure or ground (you will only call ground if you're departing from an airport that has a ground frequency but doesn't have a clearance departure frequency). Sometimes, you might pick up your clearance by using your phone to call clearance departure. You pick up your clearance, copy it down with the standard CRAFT, and confirm.

If you're going to depart IFR, then once you're ready, you'll call ATC back, and they'll either clear you for release (towered field), give you a clearance void time (untowered field), or told to hold for release (either, really only if ATC is busy). If you plan to depart VFR, but switch over to IFR in the air, advise them of this.

If you're planning to depart VFR, then do so as you would normally. If you pick up a clearance in the air, you'll advise ATC with "$ATC, $MY_CALL_SIGN, $APPROXIMATE_LOCATION, VFR. IFR flight plan on file to $DESTINATION." If you want a pop-up, then you'll check in with "$ATC, $MY_CALL_SIGN, $ALTITUDE, $APPROXIMATE_LOCATION, VFR. Would like to pick up an IFR pop-up clearance to $DESTINATION." with any other requests in that. (e.g. "would like to pick up an IFR pop-up clearance to Corvallis for 3 approaches")

## Departure Procedures

Departure Procedures are pre-planned IFR routes which provide obstacle clearance from the terminal area to the en-route area. When they exist, they provide a specific way to depart IFR where, so long as you can meet certain criteria, you know you will be clear of any obstacles in your path. Note that if you do fly a DP, it is your responsibility to follow it so that you maintain obstacle clearance.

You can fly a DP without needing to be cleared to do so by ATC, and you are encouraged to do so if departing at night, or in MVFR or IMC conditions.

Unless stated otherwise, the criteria for DPs are:

- Cross departure end of runway at least 35 feet AGL (above elevation of the departure end.
- Climb to 400 AGL before making initial turn. (Part of TERPS - Terminal Instrument Procedures).
- The aircraft is performing nominally, with all engines operating.
- Maintain a climb gradient of 200 feet per nautical mile.

When a procedure uses non-standard minimums, the procedure will have the "Triangle T" (black triangle with a T inside it - looks like a solid [Nabla](https://en.wikipedia.org/wiki/Nabla_symbol) (∇) with a T inscribed) in the notes section of the instrument procedure chart.

You can convert your ground speed (in nm/hr) and climb rate (in ft/min) to climb gradient ft/nm using the following formula:

\\(`climb_gradient` = (`ground_speed` / 60) * `climb_rate`\\)

So, if your ground speed is 90 knots, and you're climbing at 500 fpm, then your climb gradient is \\(90 / 60 * 500 = 1.5 * 500 = 750 ft/nm\\).

There are two subtypes of departure procedures: Obstacle Departure Procedures (ODPs) and Standard Instrument Departures (SIDs).

DPs can be found in the IFR Takeoff Minimums and (Obstacle) Departure Procedures section, Section L, of the Terminal Procedure Publications (TPPs). SIDs and complex ODPs are published graphically and given titles.

All public performance-based navigation (PBN) DPs are normally designated using RNAV 1, RNP 1, or A-RNP. RNAV 1 and RNP 1 means the total system error must not be more than 1 NM for 95% of the total flight time. A-RNP will be charted in the PBN box. You are expected to maintain route centerlines, as depicted by the CDI unless authorized to deviate by ATC or under emergency conditions.

### Obstacle Departure Procedures

ODPs are printed either textually or graphically. Some ODPs can be found in the Instrument Procedure Charts for the area, named ones will have a specific plate.

You can fly a DP without needing to be cleared to do so by ATC, and you are encouraged to do so if departing at night, or in MVFR or IMC conditions.

Graphic ODPs (which have "(OBSTACLE)" in the name, e.g. "GEYSR THREE DEPARTURE (OBSTACLE)" or "CROWN ONE DEPARTURE (RNAV) (OBSTACLE)") and provide a graphical depiction of the DP.

### Standard Instrument Departures

SIDs are printed graphically, and perform similarly as ODPs, with the additional benefit of reducing pilot/controller workload ("climb via the SID" is a much faster clearance to give). You **must** have specific ATC clearance to fly a SID.

### Diverse Vector Areas

> A Diverse Vector Area (DVA) is an area in which ATC may provide random radar vectors during an uninterrupted climb from the departure runway until above the MVA/MIA, established in accordance with the TERPS criteria for diverse departures. The DVA provides obstacle and terrain avoidance in lieu of taking off from the runway under IFR using an ODP or SID.

Or, essentially, a DVA allows ATC to assign you radar vectors while you climb up to the Minimum Vectoring Altitude (MVA) or Minimum IFR Altitude (MIA).

### Visual Climb over Airport

Another departure option for IFR. Where you essentially do a box climb in VMC to the published climb-to altitude. Note that the weather conditions must be VMC up to (or above) the specified visibility/ceiling in the procedure. VCOAs are a kind of a DP, though you must specifically request to fly the VCOA.

### Without a DP, or  No Instrument Departure Available

Airports that have been surveyed for instrument approaches should also have some kind of IFR departure available. While there might not be a graphical DP available, you should check to see if it's listed in the Instrument Procedure Charts for the area. For the many airports that don't have an instrument approach available, then you can depart IFR, but you have to provide your own separation and obstacle clearance. Meaning you need to maintain VFR until you get to the Minimum Vectoring Altitude (MVA) or Minimum IFR Altitude (MIA) where ATC can then provide obstacle clearance.
