(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('TabsController', TabsController);

  /* @ngInject */
  function TabsController($scope, $transitions, $location) {
    var _self = this;
    _self.mostrarTabs = false;
    _self.selectedIndex = 1;
    $transitions.onSuccess({}, function(transition) {
      _self.mostrarTabs = !transition['_targetState']['_definition']['ehRotaRaiz'];
    });
  }
})();
