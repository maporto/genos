(function() {
  'use strict';

  angular
    .module('app.os')
    .controller('OsFeedController', OsFeedController);

  /* @ngInject */
  function OsFeedController($scope, $firebaseArray, firebase, $state, $stateParams) {
    var _self = this;
    _self.title = 'Os';
    _self.detalhesButtonTitle = 'VER DETALHES';
    var refOs = firebase.database().ref().child('os');
    $firebaseArray(refOs).$loaded().then(function(values) {_self.osList = values;});
  }
})();
