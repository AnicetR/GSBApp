/**
 * @ngdoc controller
 * @name GSBApp.controller:AccountCtrl
 *
 * @requires $scope
 * @requires GSBApp.service:Auth
 * @requires GSBApp.service:Frais
 * @requires store
 * 
 * @description
 * Gère les actions liées à la session de l'utilisateur courant
 **/

angular.module('GSBApp')
    .controller('AccountCtrl', function ($scope, Auth, Frais, store) {
        $scope.auth = Auth.getSessionInfo();

        /**
         * @ngdoc method
         * @name GSBApp.controller:AccountCtrl#updateData
         * @methodOf GSBApp.controller:AccountCtrl
         * @description
         * Met à jour les informations de l'utilisateur
         */
        $scope.updateData = function () {
            Frais.getAllFrais().then(function (result) {
                store.set('listsitem', result);
            }, function () {
                $scope.listsitem = store.get('listsitem');
            });
        };

        /**
         * @ngdoc method
         * @name GSBApp.controller:AccountCtrl#logout
         * @methodOf GSBApp.controller:AccountCtrl
         * @description
         * Déconnecte l'utilisateur
         */
        $scope.logout = function () {
            Auth.logout();
        }
    });
