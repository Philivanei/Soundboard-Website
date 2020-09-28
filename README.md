# Soundboard-Website
In this repository you'll find a website that can be hosted with a Raspberry Pi. The application plays sounds on your device after a button click on the web-page.

- [How to setup apache webserver](#how-to-setup-apache-webserver)
- [Setup files of repository](#setup-files-of-repository)
- [Test your webpage](#test-your-webpage)


## How to setup apache webserver

1. First you need a Raspberry Pi (operating system: [Raspberry Pi OS](#https://www.raspberrypi.org/downloads/)) to host your website
2. Then open a terminal and type in the following commands:
3. sudo apt-get install apache2
   sudo groupadd www-data
   sudo usermod -g www-data www-data


## Setup files of repository

The apache webserver hosts a html file that is located at ```/var/www/html/<html-document>```. In here you can build your own folder/file structure.
Keep in mind that you have to change the paths of the sound-sample, JavaScript and CSS files in the HTML document.
Build your structure in the ```html``` folder. This folder is kind of a root of the webserver files, so if you want to access files outside of the ```html``` folder,
it won't find your files.


## Test your webpage

Now everything should work fine. With the command ```ifconfig``` in any terminal you can see the ip address of your Raspberry Pi (in your home-network). Call this ip in
a browsers search bar of your choice. Then the soundboard should appear on your device.