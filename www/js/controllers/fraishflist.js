angular.module('starter')

.controller('FraisHFListCtrl', function($scope, Message, Frais, store) {
  $scope.data = {};
  $scope.texts = Message.fraisHorsForfait;

  Frais.getAllFrais().then(function(result) {
    store.set('listsitem', result);
    $scope.listsitem = store.get('listsitem');
  }, function() {
    $scope.listsitem = store.get('listsitem');
  });
});
