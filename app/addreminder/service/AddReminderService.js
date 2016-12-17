 (function() {
    'use strict';

    /**
     * Get Shared module.
     */
    angular.module(appName)

    /**
     * Add task data service.
     */
    .factory('AddReminderDataService', AddReminderDataService)

    .factory('AddReminderClientDataService', AddReminderClientDataService)

    .factory('AddReminderPersistenceDataService', AddReminderPersistenceDataService);

    AddReminderDataService.$inject = [];

    function AddReminderDataService() {
        var addReminderDataService = {
            
        };

        return addReminderDataService;


       
    }

    AddReminderClientDataService.$inject = [];

    function AddReminderClientDataService() {
        var addReminderClientDataService = {
           
        };
        return addReminderClientDataService;

        


        
    }

    AddReminderPersistenceDataService.$inject = [];

    function AddReminderPersistenceDataService() {
        var addReminderPersistenceDataService = {};

        return addReminderPersistenceDataService;

       
    }
})();