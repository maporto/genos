(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  /* @ngInject */
  function LoginController($state, $firebaseObject, LoginService, logger, Auth, firebase) {
    var _self = this;
    _self.user = [];
    _self.title = 'Login';
    _self.logar = logar;
    function logar() {
      LoginService.logar(_self.user.usuario, _self.user.senha)
        .then(function(result) {
          var refUser = firebase.database().ref('usuarios').child(Auth.$getAuth().uid);
          $firebaseObject(refUser).$loaded().then(function(value) {
            Auth.$getAuth().funcionario = value.funcionario;
            logger.success('Bem Vindo ' + value.nome);
            if (Auth.$getAuth().funcionario) {
              $state.go('os.feed');
            } else {
              $state.go('reporte.feed');
            }
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
