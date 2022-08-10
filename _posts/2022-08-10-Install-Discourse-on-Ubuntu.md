---
title: Install Discourse on Ubuntu
date: 2022-08-10 22:45:00 +1300
categories: [web]
tags: [discourse]
---
## Install Discourse on Ubuntu

Install Discourse Dependencies

As regular user run this script 103 in terminal, to setup Rails development environment:-
```
bash <(wget -qO- https://raw.githubusercontent.com/discourse/install-rails/master/linux)
```
This will install following new packages on your system:

    Git 163
    rbenv 159
    ruby-build 102
    Ruby 142 (stable)
    Rails 86
    PostgreSQL 275
    SQLite 48
    Redis 120
    Bundler 106
    MailHog 44
    ImageMagick 147

In case you have any of this package pre-installed and don’t want to run entire script, see the script 103 and pick the packages you don’t have currently installed. The script is fine-tuned for Discourse, and includes all the packages required for Discourse installation.

Now that we have installed Discourse dependencies, let’s move on to install Discourse itself.
Clone Discourse

Clone the Discourse repository in ~/discourse folder:
```
git clone https://github.com/discourse/discourse.git ~/discourse
```
~ indicates home folder, so Discourse source code will be available in your home folder.

Setup Database

Create role with the same name as your ubuntu system username:
```
sudo -u postgres createuser -s "$USER"
```
Bootstrap Discourse

Switch to your Discourse folder:
```
cd ~/discourse
```
Install the needed gems
```
source ~/.bashrc
bundle install
```
Now that you have successfully installed gems, run these commands:
```
bundle exec rake db:create 
bundle exec rake db:migrate
RAILS_ENV=test bundle exec rake db:create db:migrate
```
Try running the specs:
```
bundle exec rake autospec
```
All the tests should pass.

Start rails server:
```
bundle exec rails server
```
You should now be able to connect with your Discourse app on http://localhost:3000 959 - try it out!

Starting with Discourse 2.5+ EmberCLI is required in development and these additional steps will be required:

In a separate terminal instance, navigate to your discourse folder (cd ~/discourse) and run:
```
bin/ember-cli
```
You should now be able to navigate to http://localhost:4200 63 to see your local Discourse installation.
Create New Admin

To create a new admin, run the following command:
```
RAILS_ENV=development bundle exec rake admin:create
```
Follow the prompts, and a new admin account will be created.
Configure Mail

Run MailHog:
```
mailhog
```
Congratulations! You are now the admin of your own Discourse installation!
