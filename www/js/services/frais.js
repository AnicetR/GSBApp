angular.module('starter')

  .service('Frais', function(Api){

    // met à jour le frais
    this.putBundled = function(data) {
      return Api.one('Bundled').customPUT(data);
    };

    // met à jour le frais hors forfait
    this.putNotBundled = function(data) {
      return Api.one('NotBundled').customPUT(data);
    };

    // met à jour la liste des frais
    this.getAllFrais = function() {
      return Api.one('Datas').get();
    }
  });
