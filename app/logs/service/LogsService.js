(function() {
    'use strict';

    /**
     * Get Shared module.
     */
    angular.module(appName)

    /**
     * logs data service.
     */
    .factory('LogsDataService', LogsDataService)

    .factory('LogsClientDataService', LogsClientDataService)

    .factory('LogsPersistenceDataService', LogsPersistenceDataService);

    LogsDataService.$inject = [];

    function LogsDataService() {
        var logsDataService = {
            tasksClicked: tasksClicked,
            reminderClicked: reminderClicked
        };

        return logsDataService;

       

    }

    LogsClientDataService.$inject = [];

    function LogsClientDataService() {
        var logsClientDataService = {
            
        };
        return logsClientDataService;

       
    }

    LogsPersistenceDataService.$inject = [];

    function LogsPersistenceDataService() {
        var logsPersistenceDataService = {
            
        };
        return logsPersistenceDataService;

    }
})();