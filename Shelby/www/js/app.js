// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform, $ionicModal) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    
    $ionicConfigProvider.tabs.position("bottom");//Posiciona las pestanas en la parte de abajo
    $ionicConfigProvider.navBar.alignTitle("center");//Alinea el titulo al centro de la barra de titulo


    $stateProvider
        //Crea el estado de las pestanas
        .state('tab', {
        url: '/tab',
        abstract: true, //Le decimos que no es una pagina
        templateUrl: 'templates/tab.html'
    })
    //Crea el estado de la pagina de inicio
    .state('tab.home', { //El nombre se genera para heredar la plantilla tab
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/home.html'//Localizacion de la pagina
            }
        }
    })
    //Crea el estado de la pagina del coche
    .state('tab.coche', {
        url: '/coche',
        views: {
            'tab-coche': {
                templateUrl: 'templates/coche.html',//Localizacion de la pagina
                controller: 'CocheCtrl'//Le asigna el controlador llamado CocheCtrl
            }
        }
    })
    //Crea el estado de la pagina de comunidad
    .state('tab.comunidad', {
        url: '/comunidad',
        views: {
            'tab-comunidad': {
                templateUrl: 'templates/comunidad.html',//Localizacion de la pagina
                controller: 'ComunidadCtrl'//Le asigna el controlador llamado ComunidadCtrl
            }
        }
    })

    .state('tab.user', {
        url: '/user/:id',
        views: {
            'tab-user': {
                templateUrl: 'templates/user.html',//Localizacion de la pagina
                controller: 'UserCtrl'//Le asigna el controlador llamado UserCtrl
            }
        }
    })

    $urlRouterProvider.otherwise('tab/home');//Cuando no encuetra la pagina directamente manda a la pagina de inicio
})