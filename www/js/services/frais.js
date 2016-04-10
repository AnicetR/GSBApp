angular.module('starter')

  .service('Frais', function(Api){

    this.putBundled = function(data) {
      return Api.one('Bundled').customPUT(data);
    };

    this.putNotBundled = function(data) {
      return Api.one('NotBundled').customPUT(data);
    };

    this.getAllFrais = function() {
      return Api.one('Datas').get();
    }
  });
