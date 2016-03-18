<<<<<<< HEAD
# Setup information (so far)

* Download Raspbian Image
* Flash SD Card with Disk Imager
	- Buy new SD Card
* Flash NEW SD Card with Disk Imager
	- Needs to be > 4gb
* Added information to /boot/config.txt
	- See config.txt in repo
* Upon boot, allocate more memory to GPU and expand filesystem
	- sudo raspi-config
	- > Advanced options
	- > Memory Split
	- Change from 0 to 128
	- expand filesystem
* Restart
* Make sure RPi is connected to internet
* Install LAMP
	- sudo su
	- apt-get update && apt-get upgrade
	- apt-get install apache2 php5 mysql-client mysql-server vsftpd
		- set root password for mysql
	- cd /var/www
	- nano index.html
* Power down RPi
	- Put SD card back in computer
	- Edit last line of config.txt to change orientation
* Start completely over because you failed to eject SD card properly and corrupted the OS
* Install Chromium
	- Chromium not available - switch to iceweasel
* FTP Everything over to /var/www/html
* Kweb???
	- Seems to be working
	- kweb -KJEHCUA+-zbhrqfpoklgtjneduwxy http://localhost
	- Can put that in a script
	- Need to fix CSS for frontend
* Create new file in /home/pi
	- .xsession
	- #!/bin/bash
	- kweb -KJEHCUA+-zbhrqfpoklgtjneduwxy http://localhost
	- This disables just about everything that isn't kweb. Use ctrl-alt-F1 to get to terminal
=======
# Setup information (so far)

* Download Raspbian Image
* Flash SD Card with Disk Imager
	- Buy new SD Card
* Flash NEW SD Card with Disk Imager
	- Needs to be > 4gb
* Added information to /boot/config.txt
	- See config.txt in repo
* Upon boot, allocate more memory to GPU and expand filesystem
	- sudo raspi-config
	- > Advanced options
	- > Memory Split
	- Change from 0 to 128
	- expand filesystem
* Restart
* Make sure RPi is connected to internet
* Install LAMP
	- sudo su
	- apt-get update && apt-get upgrade
	- apt-get install apache2 php5 mysql-client mysql-server vsftpd
		- set root password for mysql
	- cd /var/www
	- nano index.html
* Power down RPi
	- Put SD card back in computer
	- Edit last line of config.txt to change orientation
* Start completely over because you failed to eject SD card properly and corrupted the OS
* Install Chromium
	- Chromium not available - switch to iceweasel
* FTP Everything over to /var/www/html
* Kweb???
	- Seems to be working
	- kweb -KJEHCUA+-zbhrqfpoklgtjneduwxy http://localhost
	- Can put that in a script
	- Need to fix CSS for frontend
* Create new file in /home/pi
	- .xsession
	- #!/bin/bash
	- kweb -KJEHCUA+-zbhrqfpoklgtjneduwxy http://localhost
	- This disables just about everything that isn't kweb. Use ctrl-alt-F1 to get to terminal
>>>>>>> origin/master
	- Use ctrl-alt-f7 to get back to X