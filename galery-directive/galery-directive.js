angular.module('MyApp')
    .directive('galery', function ($timeout) {
        return {
            templateUrl: 'galery-directive/galery.html',
            scope: {
                category: '='
            },
            controller: function ($scope) {
                var categoryNodes = $scope.category.split('|');
                $scope.galeryTitle = categoryNodes[categoryNodes.length - 1];
                $scope.currentPage = 0;
                $scope.pageSize = 16;

                $scope.numberOfPages = function(){
                    return Math.ceil($scope.collection.length/$scope.pageSize);
                }
                $scope.initCb = function(){
                    $timeout(function(){
                        CB_Init();
                    });
                }

                $scope.collection = galeryManager.getItemsForCategory('fotografie/blumen/tulpe');
            },
            link: function (scope, el, attrs) {
                $timeout(function(){
                    CB_Init();
                });
                /*
                 var pager = new Ojay.Paginator('#thumbnails', {
                 width: '455px',
                 height: '450px',
                 direction: 'horizontal',
                 scrollTime: 0.8,
                 easing: 'easeOutStrong'
                 });
                 Ojay.History.manage(pager, 'gallery');
                 Ojay.History.initialize({asset: 'res/hello.html'});
                 pager.setup();
                 pager.addControls('after');
                 */
            }
        };

    })
    //We already have a limitTo filter built-in to angular,
    //let's make a startFrom filter
    .filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    });

;
