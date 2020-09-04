# Location

Encoded as latitude/longitude. I look forward to the day when humans can specify planet and have that actually have meaning in most people's everyday lives.

[This stackoverflow answer](https://gis.stackexchange.com/a/8674) describes an excellent way to describe what decimal degrees signifies (on Earth), reproduced:

| Digit | Accuracy Denoted | Explanation |
|-------|------------------|-------------|
| Sign | | Indicates which part of the globe we're on |
| Hundreds | | Using longitude, not latitude |
| Tens | 1000 km | Useful for indicating continent or ocean |
| Ones | 111 km | Large state/Country |
| 0.1 (Tenth) | 11.1 km | Distinguishing cities |
| 0.01 (Hundredth) | 1.1 km | Distinguishing villages |
| 0.001 (Thousandth) | 110 m | Large agricultural field or institutional campus |
| 0.0001 (Ten-Thousandth, 1e-4) | 11 m | A parcel of land. It is comparable to the typical accuracy of an uncorrected GPS unit with no interference. |
| Fifth-Decimal (1e-5) | 1.1 m | Distinguishing trees from each other. Accuracy to this level with commercial GPS units can only be achieved with differential correction. |
| Sixth-Decimal (1e-6) | 0.11 m | you can use this for laying out structures in detail, for designing landscapes, building roads. It should be more than good enough for tracking movements of glaciers and rivers. This can be achieved by taking painstaking measures with GPS, such as differentially corrected GPS. |
| Seventh-Decimal (1e-7) | 11 mm | this is good for much surveying and is near the limit of what GPS-based techniques can achieve. |
| Eight-Decimal (1e-8) | 1.1 mm | Charting motions of tectonic plates and movements of volcanoes. Permanent, corrected, constantly-running GPS base stations might be able to achieve this level of accuracy. |
| Ninth-Decimal (1e-9) | 11 microns | For almost any conceivable application with earth positions, this is overkill and will be more precise than the accuracy of any surveying device. |
| 10+ Decimal (1e-10) | | Indicates that a computer/calculator used without regard for the fact that this level of detail is meaningless. |

