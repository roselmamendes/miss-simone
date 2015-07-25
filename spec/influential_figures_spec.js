describe('InfluentialFiguresController', function() {
  beforeEach(module('InfluentialFiguresApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
    
  describe('get all Influential Figures', function(){
      it('should keep all figures in figures variable', function(){
          var $scope = {};
          var controller = $controller('InfluentialFigures', {$scope : $scope});
          expect($scope.figures).toEqual([{}]);
      });
  });
    
});