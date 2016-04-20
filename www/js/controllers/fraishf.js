/**
 * @ngdoc controller
 * @name GSBApp.controller:FraisHFCtrl
 *
 * @requires $scope
 * @requires $stateParams
 * @requires GSBApp.service:Message
 * @requires GSBApp.service:Frais
 * @requires $cordovaDatePicker
 * @requires $filter
 *
 * @description
 * Gère les actions liées aux frais hors forfait
 **/

angular.module('GSBApp')

    .controller('FraisHFCtrl', function ($scope, $stateParams, Message, Frais, $cordovaDatePicker, $filter) {
        $scope.data = {};
        $scope.texts = Message.fraisHorsForfait;

        var options = {
            date: new Date(),
            mode: 'date',
            allowOldDates: true,
            allowFutureDates: false
        };

        /**
         * @ngdoc method
         * @name GSBApp.controller:FraisHFCtrl#selectDate
         * @methodOf GSBApp.controller:FraisHFCtrl
         * @description
         * Affiche le selecteur de date et enregistre la date séléctionné dans une variable
         */
        $scope.selectDate = function () {
            $cordovaDatePicker.show(options).then(function (date) {
                $scope.data.date = $filter('date')(new Date(date), 'yyyy-MM-dd');
            });
        };

        /**
         * @ngdoc method
         * @name GSBApp.controller:FraisHFCtrl#submit
         * @methodOf GSBApp.controller:FraisHFCtrl
         * @description
         * Enregistre le frais hors forfait
         */
        $scope.submit = function () {
            Frais.putNotBundled($scope.data).then(function (result) {
                $scope.status = result;
            });
        };

    });
