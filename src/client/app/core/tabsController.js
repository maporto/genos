(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('TabsController', TabsController);

  /* @ngInject */
  function TabsController($transitions, $rootScope) {
    var _self = this;
    _self.mostrarTabs = false;
    $transitions.onSuccess({}, function (transition) {
      _self.mostrarTabs = !transition['_targetState']['_definition']['ehRotaRaiz'];
    });
  }
})();
