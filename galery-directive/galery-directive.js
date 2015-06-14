angular.module('MyApp')
    .directive('galery', function () {
        return {
            templateUrl: 'galery-directive/galery.html',
            scope: {
                category: '='
            },
            controller: function ($scope) {
                $scope.galeryTitle = $scope.category;
            },
            link: function (scope, el, attrs) {
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
;
