var myApp = angular.module('InfluentialFiguresApp', ['restangular']);

myApp.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('http://0.0.0.0:8000');
    RestangularProvider.setDefaultHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
});
RestangularProvider.setDefaultHttpFields({
    'withCredentials': true
});
});

myApp.controller('InfluentialFiguresController', function($scope, Restangular){
    $scope.figures = Restangular.all('influential_figures').getList().$object;
});