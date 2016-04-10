angular.module('starter')

.service('Auth', function(Restangular, store, $base64, APIUrl, $state){

  this.login = function(login, key) {
    var token = $base64.encode(login + ':' + key);

    Restangular.setDefaultHeaders({ Authorization: 'Basic '+ token });
    return Restangular.oneUrl('login', APIUrl + 'Infos').get().then(function (response) {
      store.set('session', response);
      store.set('token', token);
      return response;
    });
  };

  this.isLogged = function() {
    return store.get('session') && store.get('token');
  };

  this.getToken = function() {
    return 'Basic '+ store.get('token');
  };

  this.destroy = function() {
    store.remove('session');
    store.remove('token');
  };

  this.logout = function() {
    this.destroy();
    $state.go('login');
  };

  this.getSessionInfo = function() {
    return store.get('session');
  }
});
