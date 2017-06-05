(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('CriarContaController', CriarContaController);

  /* @ngInject */
  function CriarContaController($state, $firebaseObject, $firebaseArray,
    logger, Auth, firebase, $firebaseAuth, LoginService) {
    var _self = this;
    _self.user = [];
    _self.title = 'Nova Conta';
    _self.criarConta = criarConta;

    function criarConta() {
      $firebaseAuth().$createUserWithEmailAndPassword(_self.user.usuario, _self.senha)
       .then(function(firebaseUser) {
         LoginService.logar(_self.user.usuario, _self.senha)
           .then(function(result) {
             var usuarioRef = firebase.database().ref('usuarios').child(firebaseUser.uid);
             $firebaseObject(usuarioRef).$loaded().then(function (value) {
               value.nome = _self.user.nome;
               value.email = _self.user.usuario;
               value.funcionario = false;
               value.$save();
             });
             logger.success('Conta Criada com Sucesso');
           }).catch(function(error) {
             trataErrosLogin(error);
           });
       }).catch(function(error) {
         trataErrosLogin(error);
       });
    }

    function trataErrosLogin(erro) {
      switch (erro.code) {
        case 'auth/user-not-found':
          return logger.error('Conta não Encontrada');
        case 'auth/invalid-email':
          return logger.warning('Email Inválido');
        case 'auth/invalid-password':
          return logger.warning('Senha Inválido');
        case 'auth/wrong-password':
          return logger.warning('Email e/ou Senha Incorreta');
      }
    }
  }
})();
