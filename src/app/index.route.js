export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('animate', {
      url: '/animate',
      template: '<div>TEST' +
      '<div><a ui-sref="home">GO BACK HOME</a></div>' +
      '</div>'
    })
  ;

  $urlRouterProvider.otherwise('/');
}
