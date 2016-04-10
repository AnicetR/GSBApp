// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
ionic.Platform.ready(function() {
  angular.bootstrap(document, ['starter']);
});

angular.module('starter', ['ionic', 'restangular', 'ngCordova', 'angular-storage', 'base64'])

  // Constant api url
  .constant('APIUrl', 'http://kooth.suroot.com:3005/api/')

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:
      .state('tab.frais', {
        url: '/frais',
        views: {
          'tab-frais': {
            templateUrl: 'templates/tab-frais.html',
            controller: 'FraisCtrl'
          }
        }
      })
      .state('tab.frais-details', {
        url: '/frais/:fraisId',
        views: {
          'tab-frais': {
            templateUrl: 'templates/frais-forfait-detail.html',
            controller: 'FraisDetailCtrl'
          }
        }
      })
      .state('tab.frais-hf-saisie', {
        url: '/fraishf/saisie',
        views: {
          'tab-frais': {
            templateUrl: 'templates/frais-hf-saisie.html',
            controller: 'FraisHFCtrl'
          }
        }
      })
      .state('tab.frais-hf-liste', {
        url: '/fraishf/liste',
        views: {
          'tab-frais': {
            templateUrl: 'templates/frais-hf-liste.html',
            controller: 'FraisHFListCtrl'
          }
        }
      })
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });
