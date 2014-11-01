'use strict';

describe('Controller: FormExampleCtrl', function () {

  // load the controller's module
  beforeEach(module('helloworldApp'));

  var FormExampleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormExampleCtrl = $controller('FormExampleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
