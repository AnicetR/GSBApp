angular.module('starter')

.controller('AccountCtrl', function($scope, Auth, Frais, store) {
  $scope.auth = Auth.getSessionInfo();

  $scope.updateData = function() {
    Frais.getAllFrais().then(function(result) {
      store.set('listsitem', result);
    }, function() {
      $scope.listsitem = store.get('listsitem');
    });
  };
});
