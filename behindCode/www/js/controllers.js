angular.module('starter.controllers',[])
   
.controller('loginController', ['$scope','$http','$state','$ionicPopup', function($scope,$http,$state,$ionicPopup){
    
    $scope.signIn = function(isValid){
//        var user = $scope.user;
//        var pass = $scope.pass;
        var user = document.getElementById('user').value;
        var pass = document.getElementById('pass').value;
        if(isValid){
            var req = {
                method: 'POST',
                url: 'http://127.0.0.1/php/Acceder.php',
                headers: {
                    'Content-Type': undefined
                },
                data: {user : user , pass : pass},
                dataType: "jsonp"
            }
 
            $http(req)
                .success(function(data) {
                   // si no existe el usuario nos muestre un alerta de error
                   if (typeof(data.Usuario) == "undefined"){
                        var alertPopup = $ionicPopup.alert({
                            title: 'Error',
                            template: 'Usuario y/o contrasena incorrectos'
                        });
                   }else{
                       var alertPopup = $ionicPopup.alert({
                            title: 'Bienvenido',
                            template: 'Bienvenido '+data.Nombre+' '+data.Apellidos
                        });
                       alertPopup.then(function(res) {
                         $state.go('temas');
                       });
                   }
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }else{
            $scope.error = true;
        }
    }
}])
   
.controller('signUpController',['$scope','$http','$state','$ionicPopup', function($scope,$http,$state,$ionicPopup){
    $scope.signUp = function(){
        var nombre = document.getElementById('nombre').value;
        var apellidos = document.getElementById('apellidos').value;
        var telefono = document.getElementById('telefono').value;
        var correo = document.getElementById('correo').value;
        var usuario = document.getElementById('usuario').value;
        var contrasena = document.getElementById('contrasena').value;
        //if(isValid){
            var req = {
                method: 'POST',
                url: 'http://127.0.0.1/php/Registro.php',
                headers: {
                    'Content-Type': undefined
                },
                data: {nombre : nombre , apellidos : apellidos , telefono : telefono , correo : correo , usuario : usuario , contrasena : contrasena},
                dataType: "jsonp"
            }
 
            $http(req)
                .success(function(data) {
                       var alertPopup = $ionicPopup.alert({
                                title: 'Gracias',
                                template: 'Registro completo'
                            });
                           alertPopup.then(function(res) {
                             $state.go('login');
                           });
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        //}else{
//            $scope.error = true;
//            console.log('putos todos');
//        }
    }
}])
   
.controller('forgotController', function($scope) {

})

.controller('TemasController', ['$scope', '$http', '$state', function($scope, $http, $state) {
        $http.get('js/temas2.json').success(function(data) {
            $scope.temas = data.temas;
        });
    }])

    .controller('SubTemasController', ['$scope', '$http', '$state', function($scope, $http, $state) {
        $http.get('js/temas2.json').success(function(data) {
            $scope.temas = data.temas[$state.params.id];
            idTema = $state.params.id;
        });
    }])
    
    .controller('DatosController', ['$scope', '$http', '$state', function($scope, $http, $state) {
        $http.get('js/temas2.json').success(function(data) {
            $scope.dato = data.temas[idTema].subtemas[$state.params.id];
        });
    }])

    .controller('ExamenController', ['$scope','$ionicModal','$state', function($scope,$ionicModal,$state){
        var calificacion = 0;
        
        $scope.preg1 = [
            { res: "Es un enunciado que solamente puede ser calificado como verdadero.", value: "1" },
            { res: "Es un enunciado que puede ser calificado como verdadero o falso.", value: "2" },
            { res: "Es un enunciado que no importa como pueda ser calificado.", value: "3" },
            { res: "Es un enunciado que solamente puede ser calificado como falso.", value: "4" }
        ];
        
        $scope.preg2 = [
            { res: "Verdadero", value: "1" },
            { res: "Falso.", value: "2" }
        ];
        
        $scope.preg3 = [
            { res: "Verdadero", value: "1" },
            { res: "Falso.", value: "2" }
        ];
        
        $scope.preg4 = [
            { res: "Es un operador que devuelve el valor contrario de la proposición.", value: "1" },
            { res: "Es un operador que siempre vuelve falsa la proposición.", value: "2" },
            { res: "Es un operador que siempre vuelve verdadera la proposición.", value: "3" },
            { res: "Es un operador que devuelve el valor de la proposición.", value: "4" }
        ];
        $scope.preg5 = [
            { res: "Bases de datos.", value: "1" },
            { res: "Inteligencia Artificial.", value: "2" },
            { res: "Lenguajes de programación.", value: "3" },
            { res: "Todas las anteriores.", value: "4" }
        ];
        
        $scope.res1 = {
            value:"0"
        };
        $scope.res2 = {
            value:"0"
        };
        $scope.res3 = {
            value:"0"
        };
        $scope.res4 = {
            value:"0"
        };
        $scope.res5 = {
            value:"0"
        };
        
        $scope.checar = function(){
            if(calificacion > 0){
                calificacion = 0;
            }
            if($scope.res1.value == "2"){
                calificacion += 20;
                $scope.p1 = true;
            }else{
                $scope.p1 = false;
            }
            if($scope.res2.value == "2"){
                calificacion += 20;
                $scope.p2 = true;
            }else{
                $scope.p2 = false;
            }
            if($scope.res3.value == "2"){
                calificacion += 20;
                $scope.p3 = true;
            }else{
                $scope.p3 = false;
            }
            if($scope.res4.value == "1"){
                calificacion += 20;
                $scope.p4 = true;
            }else{
                $scope.p4 = false;
            }
            if($scope.res5.value == "4"){
                calificacion += 20;
                $scope.p5 = true;
            }else{
                $scope.p5 = false;
            }
            if($scope.p1 && $scope.p2 && $scope.p3 && $scope.p4 && $scope.p5){
                $scope.todasCorrectas = true;
            }else{
                $scope.todasCorrectas = false;
            }
            localStorage.calificacion1 = calificacion;
            $scope.calificacion = parseInt(localStorage.calificacion1);
            $scope.openModal();
        };
        
        guardar = function(){
        if(localStorage.calificacion){
            $scope.calificacion = parseInt(localStorage.calificacion1);
            $scope.terminado = true;
        }else{
            $scope.calificacion = undefined;
            $scope.terminado = false;
        }
        }
        
        $ionicModal.fromTemplateUrl('calificacion.html', {
            scope: $scope,
            animation: 'slide-in-up'
              }).then(function(modal) {
                $scope.modal = modal;
              });
              $scope.openModal = function() {
                $scope.modal.show();
              };
              $scope.closeModal = function() {
                $scope.modal.hide();
              };
              // Cleanup the modal when we're done with it!
              $scope.$on('$destroy', function() {
                $scope.modal.remove();
              });
              // Execute action on hide modal
              $scope.$on('modal.hidden', function() {
                $state.go('temas');
              });
              // Execute action on remove modal
              $scope.$on('modal.removed', function() {
                
              });
    }])
