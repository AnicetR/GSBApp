angular.module('starter')

.controller('LoginCtrl', function($scope, Auth, $ionicPopup, $state, store) {
  if (store.get('session') && store.get('token'))
    $state.go('tab.frais');

  $scope.data = {
    login: '0673088228',
    key: 'AB31547F2'
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
