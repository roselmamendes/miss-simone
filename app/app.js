var myApp = angular.module('myApp', ['restangular']);

myApp.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('http://www.mocky.io/v2');
    RestangularProvider.setDefaultHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
});
RestangularProvider.setDefaultHttpFields({
    'withCredentials': true
});
});

myApp.controller('getInfluentialFigures', function($scope, Restangular){
    $scope.figures = Restangular.all('55b2f504af8d0ac8187dd1d2').getList().$object;
});