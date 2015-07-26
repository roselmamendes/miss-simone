describe("InfluentialFiguresController", function() {
  beforeEach(module("InfluentialFiguresApp"));

  var $controller;

  beforeEach(inject(function(_$controller_, _$httpBackend_){
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
  }));
    
  describe("get all Influential Figures", function(){
      it("should keep all figures in figures variable", function(){
          var $scope = {};
          var expectedData = [{"id": "f1", "name": "Nina Simone", "description": "Singer, black activist", "socialMovement": "quilombolas"}];
          
          $httpBackend.whenGET('http://0.0.0.0:8000/influential_figures').respond(expectedData);
          
          $controller("InfluentialFiguresController", {$scope : $scope});
          
          $httpBackend.flush();
          
          expect($scope.figures[0].id).toEqual(expectedData[0].id);
          expect($scope.figures[0].name).toEqual(expectedData[0].name);
          expect($scope.figures[0].description).toEqual(expectedData[0].description);
          expect($scope.figures[0].socialMovement).toEqual(expectedData[0].socialMovement);
      });
  });
    
});