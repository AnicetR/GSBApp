ionic.Platform.ready(function () {
    angular.bootstrap(document, ['GSBApp']);
});

/**
 * @ngdoc interface
 * @name GSBApp
 *
 * @requires ionic
 * @requires restangular
 * @requires ngCordova
 * @requires angular-storage
 * @requires base64
 *
 * @scope
 *
 * @description
 * Initialise l'application
 **/
angular.module('GSBApp', ['ionic', 'restangular', 'ngCordova', 'angular-storage', 'base64'])
    
    /**
     * @ngdoc overview
     * @name GSBApp.APIUrl
     * @description
     * Constante contenant l'URL de l'API à laquelle l'application se connecte
     * @example
     * .constant('APIUrl', 'http://kooth.suroot.com:3005/api/')
     */
    .constant('APIUrl', 'http://kooth.suroot.com:3005/api/')

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })

            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

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
