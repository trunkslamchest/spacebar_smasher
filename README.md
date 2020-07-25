
<p align="center"><img width=75% src="https://raw.githubusercontent.com/trunkslamchest/mod3_project/frontend-0.1/src/assets/spacebar_smasher_logo.png"></p>

<p align="center">
  <img align="center" src="https://img.shields.io/badge/CSS-3.0-1572B6">
  <img align="center" src="https://img.shields.io/badge/Firebase-7.15.5-F57C00">
  <img align="center" src="https://img.shields.io/badge/HTML-5.2-E34F26">
  <img align="center" src="https://img.shields.io/badge/Javascript-1.8.5-F7DF1E">
  <img align="center" src="https://img.shields.io/badge/React.JS-16.13.1-61DAFB">
  <img align="center" src="https://img.shields.io/badge/Redux.JS-7.2.0-764ABC">
</p>

<p align="center">
  <a href="https://trunkslamchest.com/spacebarsmasher/"><img align="center" src="https://img.shields.io/badge/Current%20Deployment-Link-000000"></a>
</p>

<p align="center">
  <a href="https://github.com/trunkslamchest/spacebar_smasher/tree/0.37.6"><img align="center" src="https://img.shields.io/badge/Latest%20Repository-0.37.6-000000"></a>
</p>

# Contents
- [Introduction](#introduction)
  - [Description](#description)
  - [Key Features](#key-features)
  - [Goals](#goals)
  - [Challenges](#challenges)
- [Demo](#demo)
- [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Local Installation](#local-installation)
- [Summary Of Files](#summary-of-files)
  - [Internal File Structure](#internal-file-structure)
- [Credits](#credits)
- [Contact](#contact)

&nbsp;

# Introduction
  ### Description
Spacebar Smasher is an interactive game where a player tries to press the spacebar as many times as possible in 30 seconds, after which they can submit their score and name to a leaderboard, which is then persisted throughout the application.

  ### Key Features
  - Competitive gameplay designed to encourage competition
  - Single Page Single Interaction Application
  - Easy to Play, Difficult to Master
  - Logging of player scores
  - Power Meter that fluctuates based on repetitions per keypress
  - Fun for the whole family

  ### Goals
  The two main goals of the project is to develop a Single Page Single Interaction Application, as well as to test my abilites to create as much engagement from a user with as little interaction as possible.

  ### Challenges
  - Develop the majority of the application within 10 days
  - Work together with a single team member to make sure all deliverables were met and no overlaps in workflow occured
  - Create a positive user feedback through a creative uses of condtional rendering and event listeners that encouraged repetitive engagement
  - Design then redesign all CSS elements and animations to non-intrusively appeal to different userbases and demographics
  - Refactor the application to utilize React.js instead of vanilla Javascript
  - Refactor the application to utilize Firebase instead of Ruby on Rails
  - Deployment to a 3rd part webhost

&nbsp;

<a href="https://github.com/trunkslamchest/spacebar_smasher/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;

# Demo

<p align="center">
  <a href="https://www.youtube.com/watch?v=h2Pfk5HSqjY" target="_blank">
    <img align="center" src="https://img.youtube.com/vi/h2Pfk5HSqjY/0.jpg">
  </a>
</p>

&nbsp;

<a href="https://github.com/trunkslamchest/spacebar_smasher/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;

# Installation
  ### Prerequisites
  Spacebar Smasher is built using NPM, React, & Firebase. Make sure you have the latest versions of the following components installed before cloning this repo. You can find their official installation guides below:
  - [NPM](https://docs.npmjs.com/getting-started/)
  - [React](https://reactjs.org/docs/getting-started.html)
  - [Firebase](https://firebase.google.com/docs/guides)
  - [Firebase CLI](https://firebase.google.com/docs/cli)

  ### Local Installation
  - [Clone the most recent branch](https://github.com/trunkslamchest/spacebar_smasher)
  - Run `npm install` in your bash-enabled terminal to make sure all dependancies are installed
  - Replace fetch request URL's with the appropriate Firebase URLs after you have setup your project on firebase
  - Run `npm start` to locally initalize React on port 3000
    - You can now access Frontend of Spacebar Smasher by visiting: `http://localhost:3000`

   Thats it! Have fun breaking/fixing/doing whatever you want with Spacebar Smasher. The world is your oyster!

  **If you have recieved any errors during this process, feel free to contact me so I can help you and update this readme accordingly**

&nbsp;

<a href="https://github.com/trunkslamchest/mod3_project/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;

# Summary Of Files
  ### Internal File Structure
  - [build](https://github.com/trunkslamchest/spacebar_smasher/tree/master/build): Most Recent Deployable Build
  - [functions](https://github.com/trunkslamchest/spacebar_smasher/tree/master/functions): Firebase Cloud Functions
  - [public](https://github.com/trunkslamchest/spacebar_smasher/tree/master/public): Various Assets for General Purposes
  - [releases](https://github.com/trunkslamchest/spacebar_smasher/tree/master/releases): Collection of Legacy Builds
  - [src](https://github.com/trunkslamchest/spacebar_smasher/tree/master/src): Root Development Folder
    - [assets](https://github.com/trunkslamchest/spacebar_smasher/tree/master/src/assets): Art Assets
    - [error](https://github.com/trunkslamchest/spacebar_smasher/tree/master/src/error): Error handing Components
    - [game](https://github.com/trunkslamchest/spacebar_smasher/tree/master/src/game): Core Gameplay Loop
    - [index](https://github.com/trunkslamchest/spacebar_smasher/tree/master/src/index): Index Page Functionality
    - [UI](https://github.com/trunkslamchest/spacebar_smasher/tree/master/src/UI): Various UI Elements & Components
    - [utility](https://github.com/trunkslamchest/spacebar_smasher/tree/master/src/utility): Abstraction Libraries
  - [package.json](https://github.com/trunkslamchest/spacebar_smasher/blob/master/package.json): Modules & Dependencies

&nbsp;

<a href="https://github.com/trunkslamchest/spacebar_smasher/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;

# Credits

  - [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
  - [Fast JSON API](https://github.com/Netflix/fast_jsonapi)
  - [Firebase](https://firebase.google.com/)
  - [Jamal Farah](https://github.com/moulayja): Co-creator & Contributor
  - [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [React](https://reactjs.org/)
  - [Redux](https://redux.js.org/)
  - [The Flatiron School](https://flatironschool.com/)

&nbsp;

# Contact
  - austin.smith.dev@gmail.com
  - <a href="https://www.linkedin.com/in/austin-smith-dev/">LinkedIn</a>
  - <a href="https://medium.com/@trunk9slamchest">Medium</a>

&nbsp;
