// Módulo com pacote de idiomas que pode ser utilizado em uma aplicação Angular 1.x
var ngLanguage = angular.module('ngLanguage',[]);

ngLanguage.run(['$rootScope',function($rootScope){
    $rootScope.ngRL = {
        st1     :   'Foo',
        st2     :   'Bar'
    }
}]);
