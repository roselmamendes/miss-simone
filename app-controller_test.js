describe("NinaController", function() {
  beforeEach(module("Nina"));

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
          
          $controller("NinaController", {$scope : $scope});
          
          $httpBackend.flush();
          
          expect(1).toEqual($scope.figures.length);
      });
  });
    
});