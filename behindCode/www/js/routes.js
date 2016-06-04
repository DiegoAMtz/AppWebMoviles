angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    
    $ionicConfigProvider.navBar.alignTitle("center");
    
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginController'
  })

  .state('signUp', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signUpController'
  })

  .state('forgot', {
    url: '/forgot',
    templateUrl: 'templates/forgot.html',
    controller: 'forgotController'
  })
  
  .state('temas', {
        url: '/temas',
        templateUrl: 'templates/temas.html',
        controller:'TemasController'
    })
    .state('subtemas',{
        url:'/temas/subtemas/:id',
        templateUrl:'templates/subtemas.html',
        controller:'SubTemasController'
    })
    
    .state('datos',{
        url:'/temas/subtemas/datos/:id',
        templateUrl:'templates/datos.html',
        controller:'DatosController'
    })
    
    .state('examen',{
        url:'/temas/subtemas/examen/:id',
        templateUrl:'templates/examen.html',
        controller:"ExamenController"
    })

  $urlRouterProvider.otherwise('/home')
});