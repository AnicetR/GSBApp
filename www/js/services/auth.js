angular.module('starter')

.service('Auth', function(Restangular, store, $base64, APIUrl, $state){

  // function de connexion
  this.login = function(login, key) {

    // génére le token
    var token = $base64.encode(login + ':' + key);

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
