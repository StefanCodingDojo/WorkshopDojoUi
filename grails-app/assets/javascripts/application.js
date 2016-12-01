// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better 
// to create separate JavaScript files as needed.
//
//= require lib/jquery/jquery.js
//= require lib/jquery-ui/jquery-ui.js
//= require lib/angular/angular.js
//= require lib/angular/angular-route.js
//= require lib/angular/angular-sanitize.js
//= require lib/angular/angular-resource.js
//= require lib/angular/angular-translate.js
//= require lib/bootstrap/bootstrap.js
//= require lib/bootstrap/ui-bootstrap-tpls-1.2.4.js
//= require_self

//= require components/client/clientModule.js
//= require components/startPage/startPageModule.js

(function () {
    angular.module('dojoApp', [
        'ui.bootstrap',
        'ngRoute',
        'ngResource',
        'ngSanitize',
        'startPageModule'
    ]);

}());