(function() {
  'use strict';

  angular
    .module('app.os')
    .controller('OsFeedController', OsFeedController);

  /* @ngInject */
  function OsFeedController() {
    var _self = this;
    _self.title = 'Os';
  }
})();
