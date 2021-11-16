# ZNC

[ZNC](https://wiki.znc.in/ZNC) is an irc bouncer. It essentially is a proxy between your client and the actual networks you want to connect to, and allows you to appear to be connected to a network without actually being connected.

## SSL/LetsEncrypt

[The ZNC wiki has a really useful page on setting this up](https://wiki.znc.in/ZNC).

Essentially, the gist here is two things: After renewing an ssl cert, you need to concat the privkey.pem and fullkey.pem files into one file that znc knows about.

`cat /etc/letsencrypt/live/$MY_DOMAIN/{privkey,cert,chain}.pem > ~/.znc/znc.pem`

Also, znc will auto-reload this key file as each client connects, so there's no command to tell znc to look for this new file.
