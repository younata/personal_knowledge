# Weather

- [Briefings]({{#path_for Briefings}}) covers receiving weather briefings. It could use a lot of fleshing out.
- [Icing]({{#path_for Icing}}) covers icing specifically.

All weather events are the result of unequal heating and cooling of the Earth's surface and atmosphere.

## Standard Values

Standard temperature and pressure at sea level is considered 15℃ and 29.92" Hg (inches of Mercury). This is part of the "Standard Atmosphere".

Atmospheric Pressure decreases approximately 1" Hg per 1,000 ft.

Up to approximately 35,000 feet MSL, on average, the outside air temperature will decrease by 2 ℃ for every 1,000 feet gained. This is the standard lapse rate. This is obviously not true always - inversion layers are things after all - but it is very useful for calculating freezing levels and the like.

## Humidity and Dewpoint

Relative humidity is the is the ratio of actual water vapor in a volume of air compared to the amount of water vapor that volume of air could hold at a particular temperature and pressure. With constant pressure, the total amount of water vapor a volume of air can hold depends on its temperature - warmer air can hold more total water. Or put another way: if you take a volume of air and only increase its temperature, the relative humidity will go down.

When the relative humidity is 100% - that is, the amount of water vapor in that air is the maximum it can hold - then we say the air volume is saturated.

The dewpoint is the temperature a volume of air (at constant pressure) must be cooled to to allow the water vapor to condense into dew. Dew is simply water condensed onto a surface. When the dewpoint is below 0 ℃, the dewpoint is sometimes called the frost point.

Given only the dewpoint and the current air temperature, you can calculate the relative humidity by dividing the air temperature (in celsius) by the dewpoint (in celsius).

For example, if the dewpoint is 10 ℃ and the air temperature is 20 ℃, then the relative humidity is 100%.

You can also use this (combined with the standard lapse rate) to calculate where you should expect clouds at. If the air is already saturated, then you can expect fog at or near the ground.

Note that a dry air mass is denser than a wet air mass. Meaning you should expect pressure to decrease when the humidity is high, and you should expect pressure to increase when the humidity is low. This is part of why some weather instruments indicate that lower pressures as rain and stormy conditions, even if it's not actually raining.

## Weather Systems

### Pressure Systems

Flow of air in high pressure and low pressure systems:

| High Pressure | Low Pressure     |
|---------------|------------------|
| Outward Flow  | Inward Flow      |
| Downward      | Upward           |
| Clockwise     | Counterclockwise |

High pressure systems are characterized by descending air, which which tends to cause cloud dissipation and good weather.
Low pressure systems are characterized by rising air, which tends to bring clouds, precipitation, and bad weather.

### Fronts

4 types of fronts

1. Cold Front
  - Cold, dense, stable air replaces a warm mass. Typically moves faster than a warm front.
  - As the front passes, expected weather can include towering cumulus or cumulonimbus, heavy rain accompanied by lightning, thunder and/or hail; tornadoes possible; during passage, poor visibility, winds variable and gusting; temperature/dew point and barometric pressure drop rapidly.
2. Warm Front - Area when a warm air mass contacts and flows over a colder air mass.
3. Occluded Front - When a fast-moving cold front "catches up" with a slow-moving warm front. Has two subtypes: cold front occlusion and warm front occlusion.
4. Stationary Front - When the forces of two air masses are relatively equal, the boundary or front that separates them remains stationary and remains for a few days. Weather is mixture of both.

## Flight Categories

There are 4 flight categories: LIFR, IFR, MVFR, and VFR. The category is defined as the lowest category that contains one of the ceiling or visibility (i.e. if ceiling is at 5,000 ft, but visibility is < 1 mile, then it's still LIFR, despite the ceiling being VFR conditions).

| Category | Ceiling (feet AGL) | Visibility (Statute Miles) |
|----------|--------------------|----------------------------|
| VFR      | > 3,000            | > 5 miles                  |
| MVFR     | 1,000 to 3,000     | 3 to 5 miles               |
| IFR      | 500 to 999         | 1 to < 3 miles             |
| LIFR     | < 500              | < 1 mile                   |

## Weather Forecast and Advisories

Airmets, sigmets, convective sigmets, PIREPs (Pilot reports), METARs, TAFs, etc.

### TAFs

Terminal Aerodrome Forecast. Forecast for an area 5 statute miles around the forecast location (i.e. airport). Provides expected weather for the next day. Valid for 24 hours after issuance.

### Airmets

Airmets are advisories of significant weather that may affect all aircraft, but particularly lighter aircraft - i.e. airlines are less concerned with these. They are valid for 6 hours from time of issue, and have the following subtypes:

- Airmet T (Tango): Moderate turbulence, sustained surface 30+ kts, and/or non-convective low-level wind shear.
- Airmet Z (Zulu): Moderate icing and provides freezing level heights.
- Airmet S (Sierra): Describes IFR conditions and/or mountain obscuration.
- Airmet G (Graphical): Found at [aviationweather.gov](https://www.aviationweather.gov)

For example, the coastal fog on the west coast usually results in Airmet Sierras being issued.

### Sigmets

Sigmets are more significant airmets and are potentially hazardous to all types of aircraft. For what I do, a relevant sigmet means you're not flying today. They are valid for 4 hours from time of issue, and are issued when the following is expected:

- Severe icing not associated with thunderstorms
- Severe or extreme turbulence or clean air turbulence not associated with thunderstorms.
- Dust storms, sandstorms, and other non-thunderstorm phenomena lowering surface visibility below 3 miles.

For example, the ash spewed from an erupting volcano would cause a sigmet to be issued.

### Convective Sigmets

Essentially Sigmets for thunderstorms.

Valid for 2 hours after issue, convective sigmets contain either an observation and a forecast, or only a forecast. All convective sigmets imply severe or greater turbulence, severe icing, and low level wind shear.

They are issued for any of the following:

- Severe thunderstorms, due to:
  - Surface winds 50+ kts
  - Surface hail greater than 3/4 inch in diameter.
- Tornadoes
- Embedded thunderstorms of any intensity level
- a line of thunderstorms at least 60 miles long with thunderstorms affecting at least 40% of its length
- Thunderstorms producing
heavy or greater precipitation (VIP level 4) affecting at least 40% of an area of at least 3000 square miles.

### Graphical Forecast for Aviation (GFA)

The GFA provides a graphical view of observations, forecasts, and warnings from 14 hours ago to 15 hours from now, from surface up to FL 480 (~48,000 ft MSL). Available in different layers (3,000 ft layers up to FL 180, then 6,000 ft layers from FL 180 to FL 480).

Can be viewed at [aviationweather.gov/gfa](https://www.aviationweather.gov/gfa).

### Inflight Aviation Weather Advisories

AIRMET, SIGMET, Convective SIGMET, and center weather advisory are available as inflight weather advisories, to advise enroute aircraft of the development of potentially hazardous weather.

### Center Weather Advisory

[FAA Weather Services/Center Weather Advisory](https://www.faa.gov/air_traffic/publications/atpubs/fs_html/chap8_section_8.html).

Basically, they are SIGMET (WS), Convective SIGMET (WST), and AIRMETs (WA) distributed through an ARTCC (center). They are valid for up to 2 hours, and include both existing conditions and conditions expected to occur in that 2 hour block. Will include a note at the end if these conditions are expected to last beyond the 2 hour block. These are not scheduled.

They are issued under the following conditions:

> 1. When necessary to supplement an existing WS, WST, or WA for the purpose of refining or updating the location, movement, extent, or intensity of the weather event relevant to the ARTCC's area of responsibility.
> 2. When an inflight advisory has not yet been issued, but the observed or expected weather conditions meet WS, WST or WA criteria based on current pilot reports and reinforced by other sources of information concerning existing meteorological conditions.
> 3. When observed, or developing weather conditions do not meet WS, WST or WA criteria but current pilot reports or other weather information sources indicate that an existing, or anticipated, meteorological phenomena will adversely affect the safe flow of air traffic within the ARTCC's area of responsibility.

## Aviation Weather Charts

Surface Analysis Chart, Ceiling and Visibility Analysis (CVA), Significant Weather Prognostic Chart, Short-Range Surface Prognostic Chart, Convective Outlook Chart, Constant Pressure Analysis Chart, Freezing Level Graphics.

### Ceiling and Visibility Analysis (CVA)

[aviationweather.gov/gfa, select CIG/VIS](https://www.aviationweather.gov/gfa).

A real-time view of current ceiling and visibility conditions across CONUS. Gives a visual depiction of ceiling and visibility conditions (and therefore, flight category).

### Significant Weather Prognostic Chart

Different charts depicting significant weather at different altitudes. Very useful for preflight planning, should be followed up with other, specific forecasts.

#### Surface

[aviationweather.gov/progchart/sfc](https://www.aviationweather.gov/progchart/sfc).

Depicts surface weather observations - pressure, highs/lows/ridges/troughs, locations and types of fronts, etc. Pressure is expressed in MSL, everything else is expressed as they occur at the surface point of observation (e.g. 0 AGL for the given location).

#### Low-Level

[Low-Level SIGWX chart](https://www.aviationweather.gov/progchart/low)

Forecast of significant weather at FL 240 and below. Updated 4 times per day, in either 12 hour or 24 hour prognostics.

#### Mid-Level

[Mid-Level SIGWX chart](https://www.aviationweather.gov/progchart/mid). They only show the North Atlantic Ocean region.

Forecast depicting significant weather from 10,000 ft MSL (FL 100) to FL 450. Updated 4 times per day, shows forecast for the next 24 hours.

#### High-Level

[High-Level SIGWX chart, Region A (Most of North America and South America)](https://www.aviationweather.gov/progchart/high?region=a)

Forecast depicting significant weather between FL 250 and FL 630 (and associated surface weather features). Each chart depicts the weather as expected at the valid time.

### Convective Outlook Chart

[aviationweather.gov/convection](https://www.aviationweather.gov/convection).

Graphical and narrative convective outlooks for convective weather, both severe and non-severe weather. Specifies the following risks over at 8 day period:

- Marginal (MRGL)
- Slight (SLGT)
- Enhanced (ENH)
- moderate (MDT)
- High (HIGH)

Based on probability percentage, varying for time periods and how far out it is.

### Constant Pressure Level Forecasts

[weather.gov/jetstream/850mb, provides an 850 millibar constant pressure level chart](https://www.weather.gov/jetstream/850mb)

Computer model depicting select weather at a specified constant pressure level (e.g. 850 MB), along with altitudes (in meters). Provide an overview of weather patterns at specified times & pressure altitudes. Provide source for wind/temperature aloft forecasts. In general, pressure patterns cause/characterize much of the weather. Note that these charts show pressure near the depicted pressure level (i.e. for a general range of pressure, it'll show lines of constant pressure there). In the weather.gov links, you'll see the option to view other weather patterns.

You can generally see the jet stream at [300 MB](https://www.weather.gov/jetstream/300mb), 250 MB, and [200 MB](https://www.weather.gov/jetstream/200mb).
