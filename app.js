angular.module('MyApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: "/",
                views: {
                    "select": {template: ""},
                    "content": {templateUrl: "partials/mohnblume.html"}
                }
            })
            .state('blume/nach-name', {
                url: "/blume/nach-name",
                views: {
                    "select": {templateUrl: "partials/blumen/name-selection.html"},
                    "content": {templateUrl: "partials/mohnblume.html"}
                }
            })
        ;
        $urlRouterProvider.otherwise("");
    })
;
