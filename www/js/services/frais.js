/**
 * @ngdoc service
 * @name GSBApp.service:Frais
 *
 * @requires GSBApp.service:Api
 *
 * @restrict C
 * @description
 * Gère la récupération des données de l'API liée aux frais
 **/

angular.module('GSBApp')
    .service('Frais', function (Api) {

        /**
         * @ngdoc method
         * @name GSBApp.service:Frais#putBundled
         * @methodOf GSBApp.service:Frais
         * @param {object} data Les données à envoyer
         * @description
         * Met à jour le frais forfaitisés
         */
        this.putBundled = function (data) {
            return Api.one('Bundled').customPUT(data);
        };

        /**
         * @ngdoc method
         * @name GSBApp.service:Frais#putNotBundled
         * @methodOf GSBApp.service:Frais
         * @param {object} data Les données à envoyer
         * @description
         * Met à jour le frais hors forfait
         */
        this.putNotBundled = function (data) {
            return Api.one('NotBundled').customPUT(data);
        };

        /**
         * @ngdoc method
         * @name GSBApp.service:Frais#getAllFrais
         * @methodOf GSBApp.service:Frais
         * @description
         * Récupère la liste des frais
         */
        this.getAllFrais = function () {
            return Api.one('Datas').get();
        }
    });
