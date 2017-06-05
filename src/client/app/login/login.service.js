(function() {
  'use strict';

  angular
    .module('app.login')
    .service('LoginService', LoginService);

  /* @ngInject */
  function LoginService($firebaseAuth, $firebaseObject, $state) {
    var _self = this;
    _self.logar = logar;
    _self.checarLogado = checarLogado;
    _self.deslogar = deslogar;

    function logar(usuario, senha) {
      return $firebaseAuth().$signInWithEmailAndPassword(usuario, senha);
    }

    function checarLogado() {
      return $firebaseAuth().$waitForSignIn();
    }

    function deslogar() {
      $firebaseAuth().$signOut();
    }
  }
})();
