angular.module('Nina')

.controller('NinaController', function($scope, influentialFiguresService){
    $scope.figures = influentialFiguresService.getAll();
});