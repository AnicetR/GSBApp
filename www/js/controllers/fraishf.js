angular.module('starter')

.controller('FraisHFCtrl', function($scope, $stateParams, Message, Frais, $cordovaDatePicker, $filter) {
  $scope.data = {};
  $scope.texts = Message.fraisHorsForfait;

  var options = {
    date: new Date(),
    mode: 'date', // or 'time'
    minDate: new Date() - 10000
  };

  $scope.selectDate = function() {
    $cordovaDatePicker.show(options).then(function(date){
      $scope.data.date = $filter('date')(new Date(date), 'yyyy-MM-dd');
    });
  };

  $scope.submit = function() {
    Frais.putNotBundled($scope.data).then(function(result){
      $scope.status = result[0].success
    }, function(error){
      $scope.status = error
    });
  }
});
