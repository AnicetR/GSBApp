angular.module('starter')

.service('Auth', function(Restangular, store, $base64, APIUrl, $state, $cordovaDevice){

  // function de connexion
  this.login = function(login, key) {

    // génére le token
    var token = $base64.encode(login + ':' + store.get('apikey') + '*' + key);

    // ajoute le header de connexion
    Restangular.setDefaultHeaders({ Authorization: 'Basic '+ token });

    // envois la requêtes de connexion
    return Restangular.oneUrl('login', APIUrl + 'Infos').get().then(function (response) {
      // store la session et le token en localsTorage
      store.set('session', response);
      store.set('token', token);
      return response;
    });
  };

  this.getTokenWithSms = function(login) {
    var device = $cordovaDevice.getDevice();
    var token = $base64.encode(login + ':');

    Restangular.setDefaultHeaders({ Authorization: 'Basic '+ token });
    return Restangular.oneUrl('token', APIUrl).get({uuid: device.uuid, model: device.model, platform: device.platform}).then(function (response) {
      store.set('apikey', response.apiKey);
      return response.apiKey;
    });
  };

  // vérifie la connexion
  this.isLogged = function() {
    return store.get('session') && store.get('token');
  };

  // recupère le token
  this.getToken = function() {
    return 'Basic '+ store.get('token');
  };

  // détruis la session
  this.destroy = function() {
    store.remove('session');
    store.remove('token');
  };

  // déconnecte l'utilisateur et redirige sur la page d'accueil
  this.logout = function() {
    this.destroy();
    $state.go('login');
  };

  // recupère les informations de l'utilisateurs
  this.getSessionInfo = function() {
    return store.get('session');
  }
});
