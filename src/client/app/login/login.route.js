(function() {
  'use strict';

  angular
    .module('app.login')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'login',
        config: {
          url: '/login',
          templateUrl: 'app/login/login.html',
          controller: 'LoginController',
          controllerAs: 'login',
          title: 'Login',
          ehRotaRaiz: true,
        }
      }, {
        state: 'criarConta',
        config: {
          url: '/criar',
          templateUrl: 'app/login/criar-conta.html',
          controller: 'CriarContaController',
          controllerAs: 'conta',
          title: 'Criar Conta',
          ehRotaRaiz: true,
        }
      },
    ];
  }
})();
