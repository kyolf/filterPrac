let app1 = angular.module('app1', []);
let demoController = {};

demoController.FilterController = function ($scope) {
  $scope.customers = [
    {name: 'Kayle B', city: 'San Francisco'},
    {name: 'Sike H', city: 'New York'},
    {name: 'Kek W', city: 'San Diego'}
  ];
};

app1.controller(demoController);