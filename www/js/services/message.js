/**
 * @ngdoc service
 * @name GSBApp.service:Message
 *
 * @restrict C
 * @description
 * Gère les données liés aux frais forfaitisés
 **/

angular.module('GSBApp')
    .service('Message', function () {
        this.text = {
            frais: {
                kilometrique: {
                    id: 'KM',
                    icon: 'ion-android-car',
                    header_text: 'Forfaits Kilométriques',
                    label_text: 'Nombre de kilomètres pour le mois'
                },
                repas: {
                    id: 'REP',
                    icon: 'ion-android-restaurant',
                    header_text: 'Forfaits Repas',
                    label_text: 'Nombre de repas pour le mois'
                },
                hotel: {
                    id: 'NUI',
                    icon: 'ion-ios-cloudy-night',
                    header_text: 'Forfaits Nuitées',
                    label_text: 'Nombre de nuit pour le mois'
                },
                etapes: {
                    id: 'ETP',
                    icon: 'ion-coffee',
                    header_text: 'Forfaits Etapes',
                    label_text: 'Nombre d\'étapes pour le mois'
                }
            }
        };

        /**
         * @ngdoc method
         * @name GSBApp.service:Message#getFraisForfait
         * @methodOf GSBApp.service:Message
         * @param {string} type Le type de frais demandé
         * @description
         * Récupère les informations correspondantes au frais forfaitisé affiché
         */
        this.getFraisForfait = function (type) {
            return this.text.frais[type];
        };
    });
