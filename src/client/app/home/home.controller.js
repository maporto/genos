(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  /* @ngInject */
  function HomeController() {
    var _self = this;
    _self.title = 'Home';
  }
})();
