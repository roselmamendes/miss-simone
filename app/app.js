var myApp = angular.module('myApp', []);

myApp.controller('getInfluentialFigures', function($scope){
    $scope.figures = [
        {'id': 'f1', 'name': 'Nina Simone', 'description': 'Singer, black activist', 'socialMovement': 'quilombolas'},
        {'id': 'f2', 'name': 'Bob Marley', 'description': 'Singer, Reggae pioneer', 'socialMovement': 'quilombolas'},
        {'id': 'f1', 'name': 'Audre Lorde', 'description': 'Poetic, black activist', 'socialMovement': 'quilombolas'},
        {'id': 'f2', 'name': 'Angela Davis', 'description': 'Professor, Reggae pioneer', 'socialMovement': 'quilombolas'}
    ];
});