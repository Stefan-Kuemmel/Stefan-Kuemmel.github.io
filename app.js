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
            .state('category/nach-name', {
                url: "/:category/nach-name",
                views: {
                    "select": {
                        templateUrl: "partials/select-subcategory.html",
                        controller: function($scope, $state){
                            $scope.category = $state.params.category;
                            $scope.galeries = galeryManager.getGaleriesForCategory($scope.category);
                        }
                    },
                    "content": {templateUrl: "partials/mohnblume.html"}
                }
            })
            .state('category/nach-farbe', {
                url: "/:category/colors",
                views: {
                    "select": {
                        templateUrl: "partials/select-color.html",
                        controller: function($scope, $state){
                            $scope.category = $state.params.category;
                            $scope.colors = galeryManager.getColorsForCategory($scope.category);
                        }
                    },
                    "content": {templateUrl: "partials/mohnblume.html"}
                }
            })
            .state('album', {
                url: "/album/:category/:title",
                views: {
                    "select": {
                        templateUrl: "partials/select-subcategory.html",
                        controller: function($scope, $state){
                            $scope.category = $state.params.category;
                            $scope.galeries = galeryManager.getGaleriesForCategory($scope.category);
                        }
                    },
                    "content": {
                        templateUrl: "partials/album.html",
                        controller: function($scope, $state){
                            $scope.albumCategory = $state.params.category;
                        }
                    }
                },
            })
            .state('albumColor', {
                url: "/album/:category/colors/:color",
                views: {
                    "select": {
                        templateUrl: "partials/select-subcategory.html",
                        controller: function($scope, $state){
                            $scope.category = $state.params.category;
                            $scope.galeries = galeryManager.getGaleriesForCategory($scope.category);
                        }
                    },
                    "content": {
                        templateUrl: "partials/album.html",
                        controller: function($scope, $state){
                            $scope.albumCategory = $state.params.category;
                        }
                    }
                },
            })
        ;
        $urlRouterProvider.otherwise("/");
    })
;
