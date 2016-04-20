/**
 * @ngdoc controller
 * @name GSBApp.controller:FraisHFListCtrl
 *
 * @requires $scope
 * @requires $stateParams
 * @requires GSBApp.service:Message
 * @requires GSBApp.service:Frais
 * @requires store
 *
 * @description
 * Gère les actions liées à la liste des frais hors forfait
 **/

angular.module('GSBApp')
    .controller('FraisHFListCtrl', function ($scope, Message, Frais, store) {
        $scope.data = {};
        $scope.texts = Message.fraisHorsForfait;

        Frais.getAllFrais().then(function (result) {
            store.set('listsitem', result);
            $scope.listsitem = store.get('listsitem');
        }, function () {
            $scope.listsitem = store.get('listsitem');
        });
    });
