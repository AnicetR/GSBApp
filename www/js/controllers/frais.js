angular.module('starter')

.controller('FraisCtrl', function($scope, Message) {
  $scope.texts = Message.text;
});
