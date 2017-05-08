(function() {
  'use strict';
  angular
    .module('app.login')
    .run(configureGuard);

  /* @ngInject */
  function configureGuard(LoginService, $transitions, $state) {
    $transitions.onBefore({
      to: function(state) {
        return !Array.isArray(state.ehRotaRaiz);
      }
    }, function(transition) {
      if (!LoginService.checarLogado()) {
        $state.go('login');
      }
    }, {
      priority: 1
    });
    $transitions.onBefore({
      to: 'login'
    }, function(transition) {
      return !LoginService.checarLogado();
    }, {
      priority: 1
    });
  }
})();
