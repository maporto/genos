(function() {
  'use strict';

  angular
    .module('app.os')
    .controller('OsController', OsController);

  /* @ngInject */
  function OsController($state, $stateParams, $firebaseObject, $firebaseArray) {
    var _self = this;
    _self.title = 'Os';
    _self.visualizacao = $state.current.visualizacao;
    _self.salvar = salvar;
    if(_self.visualizacao) {
      initDetalhes();
    } else {
      initNovo();
    }

    function initDetalhes(){
      var refOs = firebase.database().ref('os').child($stateParams.id);
      $firebaseObject(refOs).$loaded().then(function(value) {_self.problema = value;});
    }

    function initNovo(){
      var refOs = firebase.database().ref().child('os');
      _self.os = $firebaseArray(refOs);
    }

    function salvar() {
      _self.os.$add(_self.problema);
      $state.go('os.feed');
    }
  }
})();
