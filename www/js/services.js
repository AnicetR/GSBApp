angular.module('starter.services', [])
    .factory('Frais', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var frais = [{
        id: 'KM',
        name: 'Frais kilométriques',
        icon: 'ion-android-car',
        libelle: 'Nombre de Km'
      }
      ];

      return {
        get: function(fraisId) {
          for (var i = 0; i < frais.length; i++) {
            if (frais[i].id == fraisId) {
              return frais[i];
            }
          }
          return null;
        }
      };
    });

