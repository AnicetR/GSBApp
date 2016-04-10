angular.module('starter')

.controller('LoginCtrl', function($scope, Auth, $ionicPopup, $state, store, $cordovaDevice) {
  if (store.get('session') && store.get('token'))
    $state.go('tab.frais');
  else if (store.get('token')) {

  }

  // mock de l'utilisateur
  $scope.data = {
    login: '0637835881',
    key: ''
  };

  $scope.getToken = function() {
    Auth.getTokenWithSms($scope.data.login).then(function(token) {
      $scope.token = token;
    }, function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Phone number is incorrect!'
      });
    });
  };

  $scope.login = function() {
    Auth.login($scope.data.login, $scope.data.key).then(function() {
      $state.go('tab.frais');
    }, function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });
    });
  };
});
