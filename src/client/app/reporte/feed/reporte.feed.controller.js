(function() {
  'use strict';

  angular
    .module('app.reporte')
    .controller('ReporteFeedController', ReporteFeedController);

  /* @ngInject */
  function ReporteFeedController() {
    var _self = this;
    _self.title = 'Reportes';
    _self.detalhesButtonTitle = 'VER DETALHES';
  }
})();
