Notes
=====

This is a collection of notes related to getting this application up and running.


Installing NGINX
----------------

Had problems with `brew install nginx` (see below), so I had to dig around.

This link helped:
http://blog.frd.mn/install-nginx-php-fpm-mysql-and-phpmyadmin-on-os-x-mavericks-using-homebrew/

// (1) force install of xcode command line tools
xcode-select --install

// (2) i had install problems initially, so this was needed
brew uninstall pcre
brew uninstall nginx

// (3) install nginx
brew install nginx

Notes from `brew install nginx`
-------------------------------

Warning: Could not link pcre. Unlinking...
Error: The `brew link` step did not complete successfully
The formula built, but is not symlinked into /usr/local
You can try again using `brew link pcre'

Possible conflicting files are:
Warning: Could not link pcre. Unlinking...
Error: Permission denied - /usr/local/lib/pkgconfig

NGINX
-----

Docroot is: /usr/local/var/www
(i want this to be: /Applications/MAMP/htdocs/radio)

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

To have launchd start nginx at login:
    ln -sfv /usr/local/opt/nginx/*.plist ~/Library/LaunchAgents

Then to load nginx now:
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist

Or, if you don't want/need launchctl, you can just run:
    nginx

