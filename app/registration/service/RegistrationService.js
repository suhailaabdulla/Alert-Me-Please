 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('RegistrationDataService', RegistrationDataService)

     .factory('RegistrationClientDataService', RegistrationClientDataService)

     .factory('RegistrationPersistenceDataService', RegistrationPersistenceDataService);

     RegistrationDataService.$inject = [];

     function RegistrationDataService() {
         var registrationDataService = {
             
         };

         return registrationDataService;

     }

     RegistrationClientDataService.$inject = [];

     function RegistrationClientDataService() {
         var registrationClientDataService = {
         };
         return registrationClientDataService;

     }

     RegistrationPersistenceDataService.$inject = [];

     function RegistrationPersistenceDataService() {
         var registrationPersistenceDataService = {};
         return registrationPersistenceDataService;
     }
 })();