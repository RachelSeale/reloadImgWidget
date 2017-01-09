var app = angular.module('myApp',[]);

app.controller('control', ['$scope', function($scope){
  $scope.indexToShow = 0;
  $scope.items = [
    'http://tinyurl.com/zv9s4dx',
    'http://tinyurl.com/gvf627q',
    'http://tinyurl.com/zs3dkwl'
  ];

  $scope.change = function(){
    $scope.indexToShow = ($scope.indexToShow + 1) %
      $scope.items.length;
  };

  $scope.showPopover = function() {
    $scope.popoverIsVisible = true;
  };

  $scope.hidePopover = function () {
    $scope.popoverIsVisible = false;
  };

}]);
