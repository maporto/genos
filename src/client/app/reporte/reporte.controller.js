(function() {
  'use strict';

  angular
    .module('app.reporte')
    .controller('ReporteController', ReporteController);

  /* @ngInject */
  function ReporteController($state, $stateParams, $firebaseObject, $firebaseArray, Auth, firebase) {
    var _self = this;
    _self.title = 'Reporte';
    _self.visualizacao = $state.current.visualizacao;
    _self.salvar = salvar;
    _self.edicao = false;
    _self.problema = [];
    _self.permiteGerar = false;
    _self.gerarOs = gerarOs;
    init();

    function init() {
      var refCategorias = firebase.database().ref().child('categorias');
      $firebaseObject(refCategorias).$loaded().then(function(value) {_self.categoriaList = value;});
      var refStatus = firebase.database().ref().child('status');
      $firebaseObject(refStatus).$loaded().then(function(value) {_self.statusList = value;});
      var refSetores = firebase.database().ref().child('setores');
      $firebaseObject(refSetores).$loaded().then(function(value) {_self.setorList = value;});
      var refUser = firebase.database().ref('usr_funcionario').child(Auth.$getAuth().uid);
      $firebaseObject(refUser).$loaded().then(function(value) {_self.problema.funcionario = value.nome;});
      if (_self.visualizacao) {
        initDetalhes();
      } else {
        initNovo();
      }
    }

    function initDetalhes() {
      var refReporte = firebase.database().ref('reporte').child($stateParams.id);
      $firebaseObject(refReporte).$loaded().then(function(value) {
        _self.problema = value;
      });
      if (Auth.$getAuth().email === 'marcos@marcos.com') {
        _self.permiteGerar = true;
      }
    }

    function initNovo() {
      var refReporte = firebase.database().ref().child('reporte');
      _self.reporte = $firebaseArray(refReporte);
      _self.problema.data = new Date().toString();
    }

    function salvar() {
      _self.reporte.$add(_self.problema);
      $state.go('reporte.feed');
    }

    function gerarOs() {
      var refOs = firebase.database().ref().child('os');
      _self.os = $firebaseArray(refOs);
      _self.os.$add(_self.problema);
      $state.go('os.feed');
    }
  }
})();
