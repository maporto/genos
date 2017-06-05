(function() {
  'use strict';

  angular
    .module('app.reporte')
    .run(appRun);

  appRun.$inject = ['routerHelper', 'Auth'];
  /* @ngInject */
  function appRun(routerHelper, Auth) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'reporte',
      config: {
        abstract: true,
        url: '/reporte',
      }
    }, {
      state: 'reporte.feed',
      config: {
        controller: 'ReporteFeedController',
        controllerAs: 'feed',
        templateUrl: 'app/reporte/feed/reporte.feed.html',
        title: 'Feed Reporte',
        url: '/feed',
      }
    }, {
      state: 'reporte.novo',
      config: {
        controller: 'ReporteController',
        controllerAs: 'reporte',
        templateUrl: 'app/reporte/reporte.html',
        title: 'Nova Reporte',
        url: '/novo',
        visualizacao: false
      }
    }, {
      state: 'reporte.detalhes',
      config: {
        controller: 'ReporteController',
        controllerAs: 'reporte',
        templateUrl: 'app/reporte/reporte.html',
        title: 'Detalhes Reporte',
        url: '/detalhes/:id',
        visualizacao: true
      }
    }];
  }
})();
