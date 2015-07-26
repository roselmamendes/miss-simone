angular.module('InfluentialFiguresApp')

.controller('InfluentialFiguresController', function($scope, Restangular){
    $scope.figures = Restangular.all('influential_figures').getList().$object;
});