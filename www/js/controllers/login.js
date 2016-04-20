/**
 * @ngdoc controller
 * @name GSBApp.controller:LoginCtrl
 *
 * @requires $scope
 * @requires GSBApp.service:Auth
 * @requires $ionicPopup
 * @requires $state
 * @requires store
 *
 * @description
 * Gère les actions liées à la connexion de l'utilisateur
 **/

angular.module('GSBApp')
    .controller('LoginCtrl', function ($scope, Auth, $ionicPopup, $state, store) {
        if (store.get('session') && store.get('token'))
            $state.go('tab.frais');
        else if (store.get('token')) {

        }

        // mock de l'utilisateur
        $scope.data = {
            login: '',
            key: ''
        };


        /**
         * @ngdoc method
         * @name GSBApp.controller:LoginCtrl#getToken
         * @methodOf GSBApp.controller:LoginCtrl
         * @description
         * Récupère le token d'authentification
         */
        $scope.getToken = function () {
            Auth.getTokenWithSms($scope.data.login).then(function (token) {
                $scope.token = token;
            }, function () {
                var alertPopup = $ionicPopup.alert({
                    title: 'Erreur de connexion !',
                    template: 'Le numéro de téléphone est incorrect!'
                });
            });
        };


        /**
         * @ngdoc method
         * @name GSBApp.controller:LoginCtrl#login
         * @methodOf GSBApp.controller:LoginCtrl
         * @description
         * Permet la connexion de l'utilisateur
         */
        $scope.login = function () {
            Auth.login($scope.data.login, $scope.data.key).then(function () {
                $state.go('tab.frais');
            }, function () {
                var alertPopup = $ionicPopup.alert({
                    title: 'Erreur de connexion !',
                    template: 'Le token n\'est pas bon !'
                });
            });
        };
    });
