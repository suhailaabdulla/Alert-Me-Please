(function() {
    'use strict';

    /**
     * Get Shared module.
     */
    angular.module(appName)

    /**
     * Add task data service.
     */
    .factory('TaskDataService', TaskDataService)

    .factory('TaskClientDataService', TaskClientDataService)

    .factory('TaskPersistenceDataService', TaskPersistenceDataService);

    TaskDataService.$inject = [];

    function TaskDataService() {
        var taskDataService = {

        };
        return taskDataService;
    }

    TaskClientDataService.$inject = [];

    function TaskClientDataService() {
        var taskClientDataService = {};
        return taskClientDataService;

    }

    TaskPersistenceDataService.$inject = [];

    function TaskPersistenceDataService() {
        var newTaskPersistenceDataService = {};
        return newTaskPersistenceDataService;
    }
})();