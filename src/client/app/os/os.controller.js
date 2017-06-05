(function() {
  'use strict';

  angular
    .module('app.os')
    .controller('OsController', OsController);

  /* @ngInject */
  function OsController($state, $stateParams, $firebaseObject, $firebaseArray, Auth, firebase, logger) {
    var _self = this;
    _self.title = 'Os';
    _self.visualizacao = $state.current.visualizacao;
    _self.salvar = salvar;
    _self.editar = editar;
    _self.edicao = false;
    _self.problema = [];
    _self.problema.cabecalho = [];
    init();

    function init() {
      var refCategorias = firebase.database().ref().child('categorias');
      $firebaseObject(refCategorias).$loaded().then(function(value) {_self.categoriaList = value;});
      var refStatus = firebase.database().ref().child('status');
      $firebaseObject(refStatus).$loaded().then(function(value) {_self.statusList = value;});
      var refSetores = firebase.database().ref().child('setores');
      $firebaseObject(refSetores).$loaded().then(function(value) {_self.setorList = value;});
      var refUser = firebase.database().ref('usuarios').child(Auth.$getAuth().uid);
      $firebaseObject(refUser).$loaded().then(function(value) {_self.problema.funcionario = value.nome;});
      if (_self.visualizacao) {
        initDetalhes();
      } else {
        initNovo();
      }
    }

    function initDetalhes() {
      var refOs = firebase.database().ref('os').child($stateParams.id);
      $firebaseObject(refOs).$loaded().then(function(value) {
        _self.problema = value;
      });
    }

    function editar() {
      _self.visualizacao = false;
      _self.edicao = true;
    }

    function initNovo() {
      var refOs = firebase.database().ref().child('os');
      _self.os = $firebaseArray(refOs);
      _self.problema.data = new Date().toString();
    }

    function salvar() {
      if (_self.edicao) {
        _self.problema.$save();
        logger.success('Os Alterada com Sucesso');
      } else {
        _self.os.$add(_self.problema);
        logger.success('Os Criada com Sucesso');
      }
      $state.go('os.feed');
    }
  }
})();
