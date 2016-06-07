var newApp = angular.module('myApp', [ 'ngRoute','ng-bootstrap-datepicker' ]);

newApp.config(function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/product', {
            templateUrl : 'App/Product/View/product.html',
            controller : 'ProductCtrl'
        })
        .when('/Register', {
            templateUrl: 'App/RegisterNow/View/RegisterNow.html',
            controller : 'RegisterCtrl'
        })
        .when('/BecomeACoach', {
            templateUrl : 'App/BecomeACoach/View/BecomeACoach.html',
            controller : 'BecomeACoachCtrl'
        })
        .when('/analytics', {
            templateUrl : 'partials/analytics.html',
            controller : 'analyticsCtrl'
        })
        .when('/catagories', {
            templateUrl : 'partials/categories.html',
            controller : 'categoriesCtrl'

        }).when('/AdminLogin', {
        templateUrl : 'partials/login.html',
        controller : 'AdminloginCtrl'

    }).when('/Logout', {
        templateUrl : 'partials/AdminLogin.html',
        controller : 'AdminlogoutCtrl'

    }).when('/dashboard', {
        templateUrl : 'partials/OrganizationDashboard.html',
        controller : 'BreadCrumbCtrl'

    }).otherwise({
        redirectTo : '/product'
    });
    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
});

