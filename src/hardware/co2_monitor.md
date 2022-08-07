# CO2 Monitor

I'm still noodling on this. Mostly I just want to play with an NDIR sensor.

I'd love a relatively cheap way to measure CO2 levels in my house. It's been shown that even CO2 as "low" as 800 PPM affects cognition, and I'd like to be able to monitor this continuously. Never mind that this can be solved by just getting a single CO2 monitor and using that. I want to log this to a database I control, and see if I can integrate it with a home automation system. Because that's the type of nerd I am.

This idea came about after I came across [this project for a facemask with CO2 monitor](https://github.com/ashumate/CO2-Monitor-Respirator), which uses an [SCD-30 NDIR sensor](https://www.adafruit.com/product/4867) to measure CO2 in parts per million. At ~$60/sensor, that's quite affordable as far as NDIR sensors go.

[NDIR sensors](https://en.wikipedia.org/wiki/Nondispersive_infrared_sensor) work by using infrared light to measure the amount of CO2 in a sample of air. CO2 is transparent to visible light, but it is opaque at certain infrared wavelengths. NDIR sensors basically shine an infrared light through a sample of air at a detector, and emits a value based on the brightness of the light as received by the detector. They're decently sensitive (the one linked from adafruit is accurate to 400 ppm), and very accurate.

I want to integrate this with a raspberry pi and create an ad-hoc homekit accessory for it. The pi would simultaneously offer the current/most recent data to homekit, as well as upload the data to a database for other kinds of analysis.

I have done 0 research into the kind of database to upload this to.

As far as implementing homekit support, I'd likely use [Apple's ADK](https://github.com/apple/HomeKitADK) to create a one-off (or set of one-off) sensors.  I could also an ESP32 or ESP8266 with [esp-homekit](https://github.com/maximkulkin/esp-homekit) instead of a raspberry pi. Which would result in a smaller package, so maybe! OTOH, I have an unused pi 3 just sitting around, and I don't have any ESP hardware whatsoever.
