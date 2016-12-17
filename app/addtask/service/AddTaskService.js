 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Add task data service.
      */
     .factory('AddTaskDataService', AddTaskDataService)

     .factory('AddTaskClientDataService', AddTaskClientDataService)

     .factory('AddTaskPersistenceDataService', AddTaskPersistenceDataService);

     AddTaskDataService.$inject = [];

     function AddTaskDataService() {
         var addTaskDataService = {
            
         };

         return addTaskDataService;



         
     }

     AddTaskClientDataService.$inject = [];

     function AddTaskClientDataService() {
         var addTaskClientDataService = {
            
         };
         return addTaskClientDataService;

         
     }

     AddTaskPersistenceDataService.$inject = [];

     function AddTaskPersistenceDataService() {
         var addTaskPersistenceDataService = {
             
         };
         return addTaskPersistenceDataService;

     }
 })();