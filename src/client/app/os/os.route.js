(function() {
  'use strict';

  angular
    .module('app.os')
    .run(appRun);

  appRun.$inject = ['routerHelper', 'Auth'];
  /* @ngInject */
  function appRun(routerHelper, Auth) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'os',
      config: {
        abstract: true,
        url: '/os',
      }
    }, {
      state: 'os.feed',
      config: {
        controller: 'OsFeedController',
        controllerAs: 'feed',
        templateUrl: 'app/os/feed/os.feed.html',
        title: 'Feed Os',
        url: '/feed',
      }
    }, {
      state: 'os.novo',
      config: {
        controller: 'OsController',
        controllerAs: 'os',
        templateUrl: 'app/os/os.html',
        title: 'Nova OS',
        url: '/novo',
        visualizacao: false
      }
    }, {
      state: 'os.detalhes',
      config: {
        controller: 'OsController',
        controllerAs: 'os',
        templateUrl: 'app/os/os.html',
        title: 'Detalhes OS',
        url: '/detalhes/:id',
        visualizacao: true
      }
    }];
  }
})();
