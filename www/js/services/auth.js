/**
 * @ngdoc service
 * @name GSBApp.service:Auth
 *
 * @requires Restangular
 * @requires store
 * @requires $base64
 * @requires GSBApp.APIUrl
 * @requires $state
 * @requires $cordovaDevice
 *
 * @restrict C
 * @description
 * Gère l'authentification avec l'API
 **/

angular.module('GSBApp')
    .service('Auth', function (Restangular, store, $base64, APIUrl, $state, $cordovaDevice) {

        /**
         * @ngdoc method
         * @name GSBApp.service:Auth#login
         * @param {string} login Numéro de téléphone
         * @param {string} key La clé d'API
         * @methodOf GSBApp.service:Auth
         * @description
         * Connexion de l'utilisateur
         */
        this.login = function (login, key) {

            // génére le token
            var token = $base64.encode(login + ':' + store.get('apikey') + '*' + key);

            // ajoute le header de connexion
            Restangular.setDefaultHeaders({Authorization: 'Basic ' + token});

            // envois la requêtes de connexion
            return Restangular.oneUrl('login', APIUrl + 'Infos').get().then(function (response) {
                // store la session et le token en localsTorage
                store.set('session', response);
                store.set('token', token);
                return response;
            });
        };

        /**
         * @ngdoc method
         * @name GSBApp.service:Auth#getTokenWithSms
         * @param {string} login Numéro de téléphone
         * @methodOf GSBApp.service:Auth
         * @description
         * Demande à l'API de générer une nouvelle clé d'API et un nouveau Token d'authentification à renvoyer par SMS
         */
        this.getTokenWithSms = function (login) {
            var device = $cordovaDevice.getDevice();
            var token = $base64.encode(login + ':');

            Restangular.setDefaultHeaders({Authorization: 'Basic ' + token});
            return Restangular.oneUrl('token', APIUrl).get({
                uuid: device.uuid,
                model: device.model,
                platform: device.platform
            }).then(function (response) {
                store.set('apikey', response.apiKey);
                return response.apiKey;
            });
        };

        /**
         * @ngdoc method
         * @name GSBApp.service:Auth#isLogged
         * @methodOf GSBApp.service:Auth
         * @description
         * Vérifie la connexion
         */
        this.isLogged = function () {
            return store.get('session') && store.get('token');
        };

        /**
         * @ngdoc method
         * @name GSBApp.service:Auth#getToken
         * @methodOf GSBApp.service:Auth
         * @description
         * Récupère le Token de connexion HTTP
         */
        this.getToken = function () {
            return 'Basic ' + store.get('token');
        };

        /**
         * @ngdoc method
         * @name GSBApp.service:Auth#destroy
         * @methodOf GSBApp.service:Auth
         * @description
         * Détruit la session
         */
        this.destroy = function () {
            store.remove('session');
            store.remove('token');
        };

        /**
         * @ngdoc method
         * @name GSBApp.service:Auth#logout
         * @methodOf GSBApp.service:Auth
         * @description
         * Déconnecte l'utilisateur
         */
        this.logout = function () {
            this.destroy();
            $state.go('login');
        };

        /**
         * @ngdoc method
         * @name GSBApp.service:Auth#getSessionInfo
         * @methodOf GSBApp.service:Auth
         * @description
         * Récupère les informations de la session
         */
        this.getSessionInfo = function () {
            return store.get('session');
        }
    });
