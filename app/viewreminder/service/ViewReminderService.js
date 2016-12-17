 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('ViewReminderDataService', ViewReminderDataService)

     .factory('ViewReminderClientDataService', ViewReminderClientDataService)

     .factory('ViewReminderPersistenceDataService', ViewReminderPersistenceDataService);

     ViewReminderDataService.$inject = [];

     function ViewReminderDataService() {
         var viewReminderDataService = {
            
            
         };

         return viewReminderDataService;

     }

     ViewReminderClientDataService.$inject = [];

     function ViewReminderClientDataService() {
         var viewReminderClientDataService = {
           
           
         };
         return viewReminderClientDataService;

    

     }

     ViewReminderPersistenceDataService.$inject = [];

     function ViewReminderPersistenceDataService() {
         var viewReminderPersistenceDataService = {};
         return viewReminderPersistenceDataService;
     }
 })();