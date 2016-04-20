/**
 * @ngdoc controller
 * @name GSBApp.controller:FraisCtrl
 *
 * @requires $scope
 * @requires GSBApp.service:Message
 *
 * @description
 * Gère les actions liées aux frais
 **/

angular.module('GSBApp')
    .controller('FraisCtrl', function ($scope, Message) {
        $scope.texts = Message.text;
    });
