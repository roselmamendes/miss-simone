# miss-simone
This project is aimed be a spike for figure out how we are gonna use AngularJS and other stuff for Nina Client.
Nina is a project from "At the Beach" team on ThoughtWorks.

[Snap CI](https://snap-ci.com)

[![Build Status](https://snap-ci.com/roselmamendes/miss-simone/branch/master/build_image)](https://snap-ci.com/roselmamendes/miss-simone/branch/master)

# Stack
 - NodeJS
 - AngularJS 1.4.3
 - Lodash (Restangular dependency)
 - Restangular
 - Grunt Template
 - Karma
 - Jasmine
 
# Test
For test **Rest calls**, I used **mocky.io**. This site provide url that provide response by json.
It's important that you configure mocky.io using **advanced mode** and set these following keys to allow cross-domain approach:

    'Access-Control-Allow-Origin: {your local domain}'
    'Access-Control-Allow-Methods: GET, POST, PUT, DELETE'
    'Access-Control-Allow-Headers: Accept, X-Requested-With'
    'Access-Control-Allow-Credentials: true'
 
 To run tests written using Jasmine, use the command 'npm test' or 'karma start'.
 
# Next Steps
 - [x] Make Rest calls
 - [x] Set the dependencies using npm.
 - [x] Add to CI
 - [x] Add tests
 - [ ] Fix CSS
 - [ ] Set configs (such as url of the back end) using grunt-template
 
# References and useful links
 https://github.com/johnpapa/angular-styleguide#application-structure

 http://www.ng-newsletter.com/advent2013/#!/day/5
 
 http://www.ng-newsletter.com/posts/restangular.html
 
 http://stackoverflow.com/questions/22526903/restangular-crossdomain-request-what-i-do-wrong

 https://cdnjs.com/libraries
 
 http://blog.nodejitsu.com/package-dependencies-done-right/
 
 http://package-json-validator.com/
 
 https://docs.angularjs.org/guide/unit-testing
 
 http://nathanleclaire.com/blog/2013/12/13/how-to-unit-test-controllers-in-angularjs-without-setting-your-hair-on-fire/
