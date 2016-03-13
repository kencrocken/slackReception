function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
        abstract: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
    })
    .state('home.landing', {
        url: '/',
        templateUrl: 'app/main/landing.html',
    })
    .state('home.visiting', {
        url: '/visiting',
        templateUrl: 'app/main/visiting.html'//,
        // controller: 'VisitingController',
        // controllerAs: 'visit'
    })
    .state('home.delivery', {
        url: '/delivery',
        templateUrl: 'app/main/delivery.html',
        controller: 'DeliveryController',
        controllerAs: 'delivery'
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
