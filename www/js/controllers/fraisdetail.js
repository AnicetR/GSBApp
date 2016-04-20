/**
 * @ngdoc controller
 * @name GSBApp.controller:FraisDetailCtrl
 *
 * @requires $scope
 * @requires $stateParams
 * @requires GSBApp.service:Message
 * @requires GSBApp.service:Frais
 *
 * @description
 * Gère les actions liées aux détails des frais
 **/

angular.module('GSBApp')

    .controller('FraisDetailCtrl', function ($scope, $stateParams, Message, Frais) {
        $scope.data = {};
        $scope.texts = Message.getFraisForfait($stateParams.fraisId);

        $scope.status = null;

        /**
         * @ngdoc method
         * @name GSBApp.controller:FraisCtrl#submit
         * @methodOf GSBApp.controller:FraisCtrl
         * @description
         * Met à jour le frais forfaitisés concerné
         */
        $scope.submit = function () {
            var data = {};
            data[$scope.texts.id] = $scope.data.value;
            Frais.putBundled(data).then(function (result) {
                $scope.status = result;
            });
        }
    });
