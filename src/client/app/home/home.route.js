(function() {
  'use strict';

  angular
    .module('app.home')
    .run(appRun);

  appRun.$inject = ['routerHelper', 'Auth'];
  /* @ngInject */
  function appRun(routerHelper, Auth) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'home',
      config: {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'LoginController',
        controllerAs: 'home',
        title: 'Home'
      }
    }];
  }
})();
