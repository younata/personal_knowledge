# Home Automation

I currently use Apple's HomeKit to manage my home automation devices. Which is fine, but I've been thinking of migrating away. In particular, I'm having trouble with the following:

- HomeKit-compatible devices have the Apple Tax. Almost as a rule, they're more expensive than non-HomeKit-compatible devices. This should get better once Matter becomes more of a thing. But for the time being, this is an annoyance, and not really helped by the next point.
- Integrating non-HomeKit-compatible devices with HomeKit is a pain. You have to use something like [HomeAssistant](https://www.home-assistant.io) or [HomeBridge](https://homebridge.io) to do that, both of which involve running your own hardware to manage.
- You can't add arbitrary device types to HomeKit. For example, as of November 2022 (iOS 16.1), HomeKit has no concept of a pressure sensor. Which is fine, except now you're limited by Apple adding these, and thus limited to Apple's release schedule.
- Exporting data from homekit is extremely difficult and non-obvious. This is nominally a good thing because it makes it harder for third parties to do so. But it's annoying for me because I'd like to more easily be able to export this data and save it off for my own analysis.
- Related to the above, but the only way to view a dashboard of homekit data is to use either Apple's Home app, or a custom iOS (or iPadOS) app to do the same. macOS doesn't even support HomeKit apps natively, let alone creating a dashboard viewable in a web browser.

That said, HomeKit generally just works, and is much more privacy-oriented than Google's or Amazon's home automation systems. Which is obviously a massive plus to me. My issues are definitely power-user features, specifically related to my desire to view sensor states (i.e. not just "is this plug on", but also "how much power is this plug pulling?"), and also see historical trends.

I'm looking at replacing or augmenting my homekit usage with [HomeAssistant](https://www.home-assistant.io). At the very least, I still want to keep using HomeKit for the Siri integration and a few other benefits, but I'm looking at changing from having HomeKit be the hub, to having HomeKit be more of a node to HomeAssistant's hub. Which is currently easier said than done, as I have a lot of devices that are HomeKit-only. Meaning I'd have to somehow re-pair them with HomeAssistant. Thankfully, HomeAssistant does have [documentation for making HomeKit devices available in HomeAssistant](https://www.home-assistant.io/integrations/homekit_controller/).
