(function() {
  'use strict';

  var core = angular.module('app.core');

  var config = {
    appErrorPrefix: '[genos Error] ',
    appTitle: 'genos'
  };

  core.value('config', config);

  core.config(configure);
  core.run(initializeFirebase);

  configure.$inject = ['$logProvider', 'routerHelperProvider'];
  /* @ngInject */
  function configure($logProvider, routerHelperProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    routerHelperProvider.configure({
      docTitle: config.appTitle + ': '
    });
  }

  /* @ngInject */
  core.factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
      return $firebaseAuth();
    }
  ]);

  /* @ngInject */
  function initializeFirebase(firebase) {
    var config = {
      apiKey: "AIzaSyAci2TU5dZ0PjJnBQUWq1TcRlhWMQSAq4E",
      authDomain: "genos-9a17f.firebaseapp.com",
      databaseURL: "https://genos-9a17f.firebaseio.com",
      projectId: "genos-9a17f",
      storageBucket: "genos-9a17f.appspot.com",
      messagingSenderId: "951959192002"
    };
    firebase.initializeApp(config);
  }

})();
