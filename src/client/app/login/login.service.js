(function() {
  'use strict';

  angular
    .module('app.login')
    .service('LoginService', LoginService);


  /* @ngInject */
  function LoginService($firebaseAuth, logger, $state, Auth) {
    var _self = this;
    var data = new Date();
    var auth = new $firebaseAuth();
    _self.logar = logar;
    _self.checarLogado = checarLogado;
    _self.deslogar = deslogar;

    function logar(user) {
      auth.$signInWithEmailAndPassword(user.usuario, user.senha)
        .then(function(result) {
          $state.go('os.feed');
        }).catch(function(error) {
          trataErrosLogin(error);
        });
    }

    function trataErrosLogin(erro) {
      switch (erro.code) {
        case "auth/user-not-found":
          return logger.error('Conta não Encontrada', data);
        case "auth/invalid-email":
          return logger.warning('Email Inválido', data)
      }
    }

    function checarLogado() {
      return Auth.$waitForSignIn();
    }

    function deslogar() {
      Auth.$signOut();
    }
  }
})();
