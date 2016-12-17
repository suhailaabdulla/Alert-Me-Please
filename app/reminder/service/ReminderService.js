(function() {
    'use strict';

    /**
     * Get Shared module.
     */
    angular.module(appName)

    /**
     * Add task data service.
     */
    .factory('ReminderDataService', ReminderDataService)

    .factory('ReminderClientDataService', ReminderClientDataService)

    .factory('ReminderPersistenceDataService', ReminderPersistenceDataService);

    ReminderDataService.$inject = [];

    function ReminderDataService() {
        var reminderDataService = {
           
        };
        return reminderDataService;


    }

    ReminderClientDataService.$inject = [];

    function ReminderClientDataService() {
        var reminderClientDataService = {
          
        };
        return reminderClientDataService;

      


    }

    ReminderPersistenceDataService.$inject = [];

    function ReminderPersistenceDataService() {
        var newReminderPersistenceDataService = {
            
        };
        return newReminderPersistenceDataService;

       
    }
})();