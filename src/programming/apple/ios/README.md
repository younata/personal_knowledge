# iOS Development

## Preventing device sleep

Set the [`isIdleTimerDisabled`](https://developer.apple.com/documentation/uikit/uiapplication/1623070-isidletimerdisabled) property on the [`UIApplication`](https://developer.apple.com/documentation/uikit/uiapplication) object to true in order to prevent the device from going to sleep due to limited/no interaction. For obvious reasons, be careful with this api as it'll prevent the device from going to sleep.
