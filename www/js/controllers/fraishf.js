angular.module('starter')

.controller('FraisHFCtrl', function($scope, $stateParams, Message, Frais, $cordovaDatePicker, $filter) {
  $scope.data = {};
  $scope.texts = Message.fraisHorsForfait;

  var options = {
    date: new Date(),
    mode: 'date',
    allowOldDates: true,
    allowFutureDates: false
  };

  $scope.selectDate = function() {
    $cordovaDatePicker.show(options).then(function(date){
      $scope.data.date = $filter('date')(new Date(date), 'yyyy-MM-dd');
    });
  };

  $scope.submit = function() {
    Frais.putNotBundled($scope.data).then(function(result){
      $scope.status = result;
    });
  }
});
