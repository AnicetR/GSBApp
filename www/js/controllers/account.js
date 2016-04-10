angular.module('starter')

.controller('AccountCtrl', function($scope, Auth, Frais, store, $cordovaDevice) {
  var device = $cordovaDevice.getDevice();
  console.log(device);

  $scope.auth = Auth.getSessionInfo();

  $scope.updateData = function() {
    Frais.getAllFrais().then(function(result) {
      store.set('listsitem', result);
    }, function() {
      $scope.listsitem = store.get('listsitem');
    });
  };

  $scope.logout = function() {
    Auth.logout();
  }
});
