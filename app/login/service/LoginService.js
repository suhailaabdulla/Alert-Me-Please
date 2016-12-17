 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('LoginDataService', LoginDataService)

     .factory('LoginClientDataService', LoginClientDataService)

     .factory('LoginPersistenceDataService', LoginPersistenceDataService);

     LoginDataService.$inject = [];

     function LoginDataService() {
         var loginDataService = {
            
         };

         return loginDataService;

         
     }

     LoginClientDataService.$inject = [];

     function LoginClientDataService() {
         var loginClientDataService = {
            
         };
         return loginClientDataService;

     }

     LoginPersistenceDataService.$inject = [];

     function LoginPersistenceDataService() {
         var loginPersistenceDataService = {};
         return loginPersistenceDataService;
     }
 })();