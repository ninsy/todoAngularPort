angular.module("todo", [
  'ui.router',
  'firebase',
  'todo.common'
])
  .constant('FIREBASE_URI', 'https://todoappninsy.firebaseio.com/')
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'app/login/login.tmpl.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
      .state('tasks', {
        url: "/tasks",
        templateUrl: 'app/tasks/tasks.tmpl.html',
        controller: 'TasksCtrl',
        controllerAs: 'ctrl',
        resolve: {
          'currentUser': ['Auth', function(Auth) {
            return Auth.$requireAuth();
          }]
        }
      });
    $urlRouterProvider.otherwise("/login");
  })
  .run(function( $rootScope, $state) {

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      event.preventDefault();
      if(error === 'AUTH_REQUIRED') {
        $state.go('login');
      }
    });
  });
