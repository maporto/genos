(function() {
  'use strict';

  angular
    .module('app.reporte')
    .controller('ReporteFeedController', ReporteFeedController);

  /* @ngInject */
  function ReporteFeedController($firebaseArray, firebase, $state, $stateParams) {
    var _self = this;
    _self.title = 'Reportes';
    _self.carregando = true;
    _self.detalhesButtonTitle = 'VER DETALHES';
    var refReportes = firebase.database().ref().child('reporte');
    $firebaseArray(refReportes).$loaded().then(function(values) {
      _self.reporteList = values;
      _self.carregando = false;
    });
  }
})();
