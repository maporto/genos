(function() {
  'use strict';

  angular
    .module('app')
    .controller('ToolbarController', ToolbarController);

  /* @ngInject */
  function ToolbarController(LoginService) {
    var _self = this;
    _self.mostrar = false;
    LoginService.checarLogado().then(function(resp) {
      if (resp !== null) {
        _self.mostrar = true;
      }
    });
  }
})();
