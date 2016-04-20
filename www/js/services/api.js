/**
 * @ngdoc service
 * @name GSBApp.service:Api
 *
 * @requires Restangular
 * @requires GSBApp.service:Auth
 * @requires GSBApp.APIUrl
 *
 * @restrict C
 * @description
 * Permet de gérer les accès à l'API par les services en incluant un middleware pour chaque sollicitation
 **/

angular.module('GSBApp')
    .service('Api', function (Restangular, Auth, APIUrl) {

        return Restangular.withConfig(function (RestangularConfigurer) {

            // Ajoute un une base url pour toutes les requêtes
            RestangularConfigurer.setBaseUrl(APIUrl);

            // Ajoute un middlerware avant l'envois de chaque requête
            RestangularConfigurer.addFullRequestInterceptor(function (element, operation, what, url, headers, queryParams, httpConfig) {
                // Vérifie la connexion
                if (Auth.isLogged()) {
                    // Ajoute le header
                    headers.Authorization = Auth.getToken();
                }
                // envois la requête
                return {
                    headers: headers,
                    params: queryParams,
                    element: element,
                    httpConfig: httpConfig
                };
            });

            // Ajoute un middlerware apres l'envois de chaque requête et catch les errors
            return RestangularConfigurer.setErrorInterceptor(function (response, deferred) {
                if (response.status === 401 && Auth.isLogged()) {
                    Auth.destroy();
                    $state.go('login');
                }
                return true;
            });
        });
    });
