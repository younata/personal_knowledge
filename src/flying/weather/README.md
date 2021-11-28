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

## Weather Forecast and Advisories

Airmets, sigmets, convective sigmets, PIREPs (Pilot reports), METARs, TAFs, etc.

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
