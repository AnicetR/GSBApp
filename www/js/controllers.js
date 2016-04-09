angular.module('starter.controllers', [])

.controller('FraisCtrl', function($scope) {

})


.controller('FraisDetailCtrl', function($scope, $stateParams, Frais) {
  $scope.frais = Frais.get($stateParams.fraisId);
})

    .controller('FraisHFCtrl', function($scope, $stateParams) {
    })

.controller('AccountCtrl', function($scope) {

});
