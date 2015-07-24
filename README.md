# miss-simone
This project is aimed be a spike for figure out how we are gonna use AngularJS and other stuff for Nina Client.
Nina is a project from "At the Beach" team on ThoughtWorks.

# Stack
 - NodeJS
 - AngularJS 1.4.3
 - Lodash (Restangular dependency)
 - Restangular
 - Grunt Template
 
# Tips
For test **Rest calls**, I used **mocky.io**. This site provide url that provide response by json.
It's important that you configure mocky.io using **advanced mode** and set these following keys:

    'Access-Control-Allow-Origin: {your local domain}'
    'Access-Control-Allow-Methods: GET, POST, PUT, DELETE'
    'Access-Control-Allow-Headers: Accept, X-Requested-With'
    'Access-Control-Allow-Credentials: true'
 
# Next Steps
 - [x] Make Rest calls
 - [ ] Set the dependencies using npm.
 - [ ] Fix CSS
 - [ ] Set configs (such as url of the back end) using grunt-template
 - [ ] Add tests
 - [ ] Add to CI
 
# References
 https://github.com/johnpapa/angular-styleguide#application-structure

 http://www.ng-newsletter.com/advent2013/#!/day/5
 
 http://www.ng-newsletter.com/posts/restangular.html
 
 http://stackoverflow.com/questions/22526903/restangular-crossdomain-request-what-i-do-wrong

 https://cdnjs.com/libraries
