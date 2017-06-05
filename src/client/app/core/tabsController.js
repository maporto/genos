(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('TabsController', TabsController);

  /* @ngInject */
  function TabsController($scope, $transitions, $location, Auth, $firebaseObject) {
    var _self = this;
    _self.mostrarTabs = false;
    _self.carregando = false;
    $transitions.onSuccess({}, function(transition) {
      _self.mostrarTabs = !transition['_targetState']['_definition']['ehRotaRaiz'];
      var refUser = firebase.database().ref('usr_funcionario').child(Auth.$getAuth().uid);
      $firebaseObject(refUser).$loaded().then(function(value) {
        _self.carregando = true;
        _self.funcionario = value.funcionario;
      });
    });
  }
})();
