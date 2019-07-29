# Using an E6B Mechanical Flight Computer

Literally something you only need to do during primary training, to prove you CAN use an e6b. Sigh.

## Density Altitude

For engine performance!

As you know, density altitude is pressure altitude adjusted for non-standard temperature. Standard temperature is 59° F, or 15° C at sea level.

Pressure altitude is true altitude adjusted for non-standard pressure. Standard pressure is 29.92 in. hg.

Pressure altitude is a really simple formula: `pressure_altitude = (standard_pressure - pressure_setting) * 1000 + true_altitude`

And while we can easily correct for non-standard temperature (the formula is: `density_altitude = pressure_altitude + (120 * (outside_air_temperature - isa_standard_temperature))`), it's not as simple to do it manually, and an e6b is easy enough to use here.

Estimating isa standard temperature is `((true_altitude / 500) - 15) * -1`

In the image below, the pressure altitude is 4500 feet, the true altitude is 4500 feet, and the outside air temperature is estimated to be 28° C. For the sake of the calculation, we bump that to 30° C. As you can see, the e6b then tells us that the density altitude is just over 7000 feet. Which we can double-check after a bit enough:

```txt
pressure_altitude = 4500 + (120 * (28 - (((4500 / 1000) - 15) * -1)))
 = 4500 + (120 * (28 - ((9 - 15) * -1)))
 = 4500 + (120 * (28 - (-6 * -1)))
 = 4500 + (120 * (28 - 6))
 = 4500 + (120 * 22)
 = 4500 + 2640
 = 7140
```

Which is about what the e6b tells us it us.

![sample density altitude calculation](https://cdn.buttify.io/e6b/density_altitude.jpg)

## True Airspeed

## Ground Speed

For a given true airspeed and heading, you can easily calculate your ground speed.

For this example, let's say you are heading 270 at 125 knots, with the wind at 300 at 15 knots.

Set the center "dot" on the rear of the circle to some value - I pick 100 because it's a nice round number. Set the circle (true index) to the wind direction (so... 300). Now, mark (IN PENCIL) the wind speed relative to the value you chose (place a mark where it says 115). Like so:

![sample wind marker placement](https://cdn.buttify.io/e6b/ground_speed_1.jpg)

Now rotate so that the corrected heading is under the true index, and slide up so that the true airspeed is under the center dot. Like so:

![sample ground speed calculation](https://cdn.buttify.io/e6b/ground_speed_2.JPG)

Now we can read the ground speed (in this case, ~139 knots), and wind correction angle (~3 degrees, to the right - or fly heading 273).

When done, wipe the pencil lead off.

## Time to travel distance

## Fuel usage
