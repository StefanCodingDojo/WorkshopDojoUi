//= require_self
//= require_tree .
;
'use strict';

(function () {
    angular.module('startPageModule', [])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'partials/startPage/startPage',
                controller: 'startPageCtrl',
                controllerAs: 'sc'
            })
        }]);

}());
