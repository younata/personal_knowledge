# Flight Systems

## Gyroscopic Systems

Instruments: heading indicator, attitude indicator, turn indicator.

Works off two principles: Rigidity in space and precession.

Rigidity in space means using angular momentum to maintain internal orientation regardless of what the aircraft does.

Heading indicator & attitude indicator both rely on the rigidity in space principle.

Heading indicator only measures change in heading, and steam gauge ones don't correct for the earth's rotation (meaning that it'll precess noticeably over time as the earth rotates under the gyroscope). Must be calibrated against the magnetic compass in straight & level flight (or on the ground).

Attitude shows bank & pitch information. Should show correct attitude within 5 minutes of starting engine. Some may have a tumble limit (gimble lock). May have small acceleration errors (accelerate: slight pitch up, decelerate: pitch down) and roll-out errors (following a 180° turn, it'll show a slight turn to the opposite direction).

Turn indicators work on precession. Turn coordinator show rate of turn & rate of roll. Turn & slip indicators show rate of turn only.

## Pitot-Static System

Instruments: Altimeter, Vertical Speed Indicator (VSI), Airspeed Indicator.

Switching to an alternate static port (which is usually located in the cabin, so that it doesn't freeze over) will cause a momentary increase of all 3 of these instruments. This is because, in an unpressurized cabin, there's a lower air pressure than there is outside.

### Altimeter

[Aneroid barometer](https://en.wikipedia.org/wiki/Barometer#Aneroid_barometers) (barometer that does not use a liquid) that shows height above a given pressure level. Basically, there's a stack of sealed metal (aneroid) wafers that expand/contract based on the atmosphere as given by the static port. These wafers are mechanically linked between to the steam gauge which displays this. "Sensitive" altimeters (most aircraft altimeters) have an altimeter setting knob that essentially moves the dial to correct for the current altimeter setting.

Uses just the static port.

Standard lapse rate: 1000 feet per inch of mercury.

In the US, when operating below 18,000 MSL, regularly set the altimeter to a station within 100 nautical miles. Above 18,000 MSL, set it to 29.92 inches of mercury. This is to allow for better aircraft separation.

"High to low - watch out below!" - Going from a high pressure area to a low pressure area will cause your altimeter to indicate a higher-than-actual altitude.  
Same error when flying from warm air to cool air.

#### Types of Altitudes

| Name      | Description |
|-----------|-------------|
| Indicated | Uncorrected altitude indicated on the dial when set to local pressure setting |
| Pressure  | Attitude above the 29.92 inches of mercury datum plane. This is the setting used when flying above 18,000 MSL. |
| Density   | Pressure altitude corrected for nonstandard temperature. Used for performance calculations. "The altitude the airplane behaves like it's at" |
| True      | Actual altitude above mean sea level (MSL) |
| Absolute  | Height above ground |

### Vertical Speed Indicator

Basically, but-not-actually, uses R=D/T to give you rate of climb. Also gives rate trend. There is a noticeable lag in normal VSIs. Instantaneous VSIs (IVSI) interpolate standard VSI data with accelerometers to remove most of the lag.

Uses just the static port.

Works via a diaphragm inside the instrument connected directly to the static source. Outside of that is a an area that receives the same static pressure, but at a much lower rate than inside the diaphragm (this is where the lag comes from). As diaphragm expands/contracts, a mechanical linkage (in a steam gauge) moves the pointer needle to display rate of climb.

### Airspeed Indicator

Uses both static port and ram air. Essentially, indicated airspeed = ram pressure - static pressure.

A diaphragm in the instrument receives ram pressure from the pitot tube. The area outside the diaphragm is sealed and connected to the static port. A mechanical linkage converts the expansion and contraction of the diaphragm to airspeed shown on the display dial.

#### Types of Airspeeds

| Name | Description |
|------|-------------|
| Indicated airspeed (IAS) | As indicated by the airspeed indicator |
| Calibrated airspeed (CAS) | IAS corrected for instrument & position errors |
| Equivalent airspeed (EAS) | CAS corrected for compressibility error |
| True airspeed (TAS) | EAS correct for nonstandard temperature and pressure. Actual speed through the air. Used for performance calculations |
| Mach number | Ratio of TAS to the local speed of sound |
| Ground speed | TAS corrected for wind. Actual speed over the ground |

### Errors

#### Static Port blocked

E.g. when it's frozen over.

- Airspeed Indicator will only indicate correctly at the altitude the blockage occurred at.
  - If you're at a higher altitude, airspeed will be lower than actual.
  - Lower altitude -> higher-than-actual airspeed
- Altimeter freezes at thee blockage altitude.
- VSI drops to zero.
  - After verifying a blockage in the static port, you should use an alternate static source or break the VSI window (in which case, expect reverse VSI information).

#### Pitot Tube blocked

Only affects the airspeed indicator.

- Ram air inlet clogged, but drain hole open: Airspeed drops to zero.
- Both clogged: Airspeed indicator will act as an altimeter (higher altitude corresponds to higher indicated speed)
- Turn on the pitot heat to melt ice that may be the cause of the blockage.
