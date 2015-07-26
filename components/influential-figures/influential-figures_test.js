describe('InfluentialFiguresService', function(){
    
   beforeEach(module("InfluentialFigures"));

  var $controller;

  beforeEach(inject(function(_influentialFiguresService_, _$httpBackend_){
    $service = _influentialFiguresService_;
    $httpBackend = _$httpBackend_;
  }));
    
    describe('Influential Figures List', function(){
        it('should get Influential Figures list', function(){
            var expectedData = [{"id": "f1", "name": "Nina Simone", "description": "Singer, black activist", "socialMovement": "quilombolas"}];
          
            $httpBackend.whenGET('http://0.0.0.0:8000/influential_figures').respond(expectedData);
            
            var actual_list = $service.getAll();
            
            $httpBackend.flush();
          
            expect(actual_list[0].id).toEqual(expectedData[0].id);
            expect(actual_list[0].name).toEqual(expectedData[0].name);
            expect(actual_list[0].description).toEqual(expectedData[0].description);
            expect(actual_list[0].socialMovement).toEqual(expectedData[0].socialMovement);
        });
    });
});