(function() {
  'use strict';

  angular
    .module('app.reporte')
    .controller('ReporteController', ReporteController);

  /* @ngInject */
  function ReporteController() {
    var _self = this;
    _self.title = 'Reporte';
  }
})();
