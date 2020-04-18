# Battery Monitoring System

Henry has the Battery Murdering System that he uses in the Quick-E. I could probably ask him about it.

I do not (yet?) have the skills necessary to safely design a BMS - I'd rather not do that.

[This thread](https://endless-sphere.com/forums/viewtopic.php?f=14&t=92952&hilit=bms+schematic&sid=d7a411de98627fcea5ebafc67a0b98d4&start=25) documents another manager-worker BMS that almost exactly suits my needs. I might put my effort into that instead.

Given that, this page aims to document my current progress and goals with my own BMS, starting from the worker-boards (I'll build out the manager board later)

## Worker Board

This is based around the [LTC6811-1](https://www.analog.com/en/products/ltc6811-1.html) chip[^LTC6811 Datasheet].

## Manager Board

I'm likely going to go with the [LTC6820](https://www.analog.com/en/products/ltc6820.html#product-overview) chip[^LTC6820 Datasheet].

## isoSPI

Both the LTC6811 and the LTC6820 use the <a href="https://www.eetimes.com/document.asp?doc_id=1280373" data-proofer-ignore>isoSPI</a> standard to safely and reliably transmit large amounts of data between the chips. The idea here is that, instead of directly connecting multiple chips, as you might in traditional SPI, each chip is isolated via transformers. Data is then transmitted electromagnetically via these transformers. This is used in other technologies (twisted pair ethernet, for example), and this is mostly just adapting this to also work via SPI.

[^LTC6811 Datasheet]: [Datasheet here](https://www.analog.com/media/en/technical-documentation/data-sheets/68111fb.pdf)

[^LTC6820 Datasheet]: [Datasheet here](https://www.analog.com/media/en/technical-documentation/data-sheets/LTC6820.pdf)
