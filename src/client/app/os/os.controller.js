(function() {
  'use strict';

  angular
    .module('app.os')
    .controller('OsController', OsController);

  /* @ngInject */
  function OsController() {
    var _self = this;
    _self.title = 'Os';
  }
})();
