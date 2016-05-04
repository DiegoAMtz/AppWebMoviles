angular.module('starter.controllers', [])
//Controlador de la vista del coche
.controller('CocheCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    //Obtiene un recurso y guarda en una variable los datos del JSON
    $http.get('js/data.json').success(function (data) {
        $scope.detalles = data.detalles;
        $scope.data = {
            showReoder: false
        };
    });
    //Funcion que dice si se debe mostrar el texto resumido o no
    $scope.toggleDescripcion = function (item) {
        item.resumido = !item.resumido;
    }
    //Funcion que permite reordenar la lista
    $scope.moveItem = function (item, fromIndex, toIndex) {
        $scope.detalles.splice(fromIndex, 1);
        $scope.detalles.splice(toIndex, 0, item);
    }

}])
//Controlador de la vista de comunidad
.controller('ComunidadCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    //Obtiene un recurso y guarda en una variable los datos del JSON
    $http.get('js/data.json').success(function (data) {
        $scope.usuarios = data.usuarios;
    });
}])
//Controlador de la vista de usuarios
.controller('UserCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    //Obtiene un recurso y guarda en una variable los datos del JSON
    $http.get('js/data.json').success(function (data) {
        //Guarda en la variable unicamente los datos del id del usuario que se selecciono
        $scope.data = data.usuarios[$state.params.id];
    });
}])