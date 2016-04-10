angular.module('starter')

.service('Message', function(){
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

  this.getFraisForfait = function(type) {
    return this.text.frais[type];
  };
});
