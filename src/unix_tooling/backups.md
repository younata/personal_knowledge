# Backups

Backing up your computer. Do it.

For Macs, use time machine. For Linux, use `rsync` configured with `cron` to automate this. For iOS devices, use iCloud backup. This should be an option for the Mac, but it isn't, and that's silly. The only windows box I have is an xbox, and backing up my game saves is part of why I pay for xbox live.

Basically, you have two options: Have your computers be ephemeral, where you don't care if they die. Or back them up. Keep in mind the only way to really keep your computers ephemeral is to have an automated way to set them back up to their current state. But then that way needs to be backed up. So you'll need at least one machine backed up. Additionally, you need to backup all your important data (photos, etc.) anyway.

## Local Backup

For every computer you backup, get an extra drive that is at least as good as the drive in the computer (i.e. same capacity or greater, same drive technology or better). Back each computer up to their own backup drive. The idea is that when the main drive dies, you will immediately replace it with the backup drive (and then rush out and get a new backup drive). However, if you easily can't replace the drive the computer uses (like... all Apple laptops), then you really only need the backup drive to be at least the same capacity as the main drive.

For desktops, keep the backup drive plugged in all the time, but make sure to only ever use it for backups. For laptops, plug in the backup drive at least once a day (or whenever you plug it in to charge. Whichever is more often).

On a linux desktop, set up a crontab entry for root to backup your main drive to, something like:

`0 5 * * * rsync -vax --delete --ignore-errors / /mnt/backup_drive/`

Where `/mnt/backup_drive` is the path to your mounted backup drive. This'll back up your main drive (and only that drive) every day at 5 am.

### Backing up Xbox Game Saves

Per [this thread](https://answers.microsoft.com/en-us/xbox/forum/all/backing-up-saved-game-files-on-xbox-one/5c623320-1332-4fab-918d-ff0494c8a7b2), you can apparently back up xbox game saves by plugging in an external drive to the USB port, and go to Settings -> System -> Kinect & Devices -> Storage. Only just learned this while writing this article, so I haven't tried it myself.

## Cloud Backup

Backing up to the cloud is an "in addition to local backups" thing. It's very tempting to make it your only backup, and, honestly, it's ok to do that. Obviously not ideal, but a small monthly cost is much easier to stomach than large-ish one-time expenses. Additionally, cloud backup is much more convenient to setup, and it entirely solves the "my house burned down" from a data-protection standpoint. The downsides with cloud backups that it's much slower to restore, you have to keep paying for it, and you have to worry about cloud issues (keeping your account paid and in good standing, keeping your account secure, company staying around, etc.). Still, it's 100% worth it to have cloud backup.

I use [backblaze (note: Referral link)](https://secure.backblaze.com/r/02uf0p) for my Macs. It's $6 per month per computer, which is a really good price. For the [Linode]({{#path_for linode}}) instances I use, I pay the extra for Linode's backup system (and then these are also set up to be ephemeral anyway in case that fails).

## Testing Your Backups

Your backups are worthless if they don't actually work. The only way you know they work is if you test them. In addition to verifying the logs that data was actually backed up, you should be able to boot directly from the backup. By booting to the backup disk, and by verifying it has the correct data, you've tested your backup.

For Macs, go into Time Machine and verify that it has been backing up. Time machine backups are not bootable, so this is how you verify that it's bootable.

For Cloud Backup, you can use their web interface to view your files and download them. For testing, you should be able to download a full archive of your system onto an external drive. I don't do that. I pick a random recently-updated set of files, as well as some much older set of files and verify I can pull those down.

Do this at least once every year. Preferably every 6 months. Set a calendar reminder.

## Sources

This is formed from a combination of the advice from the following:

- [Jeff Geerling write a blog post on his backup plan](https://www.jeffgeerling.com/blog/2021/my-backup-plan)
- [Jamie Zawinski has a very good page on setting up backups](https://www.jwz.org/doc/backups.html)
