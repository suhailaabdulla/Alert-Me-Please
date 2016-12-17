 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('ViewTaskDataService', ViewTaskDataService)

     .factory('ViewTaskClientDataService', ViewTaskClientDataService)

     .factory('ViewTaskPersistenceDataService', ViewTaskPersistenceDataService);

     ViewTaskDataService.$inject = [];

     function ViewTaskDataService() {
         var viewTaskDataService = {
             
            
         };

         return viewTaskDataService;

       
     }

     ViewTaskClientDataService.$inject = [];

     function ViewTaskClientDataService() {
         var viewTaskClientDataService = {
             
           
         };
         return viewTaskClientDataService;

        
         

     }

     ViewTaskPersistenceDataService.$inject = [];

     function ViewTaskPersistenceDataService() {
         var viewTaskPersistenceDataService = {};
         return viewTaskPersistenceDataService;
     }
 })();