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
            .state('fotografie|blume/nach-name', {
                url: "/:category/nach-name",
                views: {
                    "select": {templateUrl: "partials/subcategories.html"},
                    "content": {templateUrl: "partials/mohnblume.html"}
                }
            })
            .state('fotografie|blumen|tulpe', {
                url: "/fotografie|blumen|tulpe",
                views: {
                    "select": {templateUrl: "partials/subcategories.html"},
                    "content": {templateUrl: "partials/blumen/tulpe.html"}
                }
            })
            .state('album', {
                url: "/album/:category",
                views: {
                    "select": {templateUrl: "partials/subcategories.html"},
                    "content": {templateUrl: "partials/album.html"}
                }
            })
        ;
        $urlRouterProvider.otherwise("/");
    })
;
