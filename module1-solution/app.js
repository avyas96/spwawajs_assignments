(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope){
    $scope.dishes = "";
    $scope.message = "";
    $scope.checkLunchItems = function () {
      $scope.dishes = $scope.dishes.trim();

      if ($scope.dishes === "") {
        $scope.message = "Please Enter Data First!";
      } else {
        var $dishesArray = $scope.dishes.split(',');
        $dishesArray = $dishesArray.filter(function(v) {
          return v.trim() !== '';
        })
        var $length = $dishesArray.length;
        if ($length <= 3) {
          $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too much!";
          }
        }
      }
    }
}());
