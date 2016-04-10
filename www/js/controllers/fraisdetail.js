angular.module('starter')

.controller('FraisDetailCtrl', function($scope, $stateParams, Message, Frais) {
  $scope.data = {};
  $scope.texts = Message.getFraisForfait($stateParams.fraisId);

  $scope.status = null;

  $scope.submit = function() {
    var data = {};
    data[$scope.texts.id] = $scope.data.value;
    Frais.putBundled(data).then(function(result){
      $scope.status = result;
    });
  }
});
