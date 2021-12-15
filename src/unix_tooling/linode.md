# Linode

[Referral Link](https://www.linode.com/?r=26c18f81c8ccc1d84df0e2ab8e119e0c6c8b7aa8). If you sign up using that link, you'll receive a $100, 60-day credit once you've added a valid payment method to your account. [Non-referral link](https://www.linode.com).

A really nice host of linux-based machines that I use to host many sites (including this one!). This have a number of [different offerings](https://www.linode.com/products/), though I only use them for their VPSs (the "Shared CPU" compute offering). As of this writing, I have 2 different VPSs set up: a "nanode" instance ($5/month), and a 2 GB "linode" instance ($10/month). The nanode plan essentially runs nginx configured for a bunch of different roots (this site, the [coz-e site](https://coz-e.rachelbrindle.com), and others). The linode instance exists solely to run my [CI](https://ci.younata.com), running both a Concourse web instance, as well as a single Linux worker.

These are all managed through an [Ansible](https://www.ansible.com) playbook I wrote (with initial setup being covered by a small shell script. This script does the bare minimum to create and configure an instance enough to have Ansible work correctly).
