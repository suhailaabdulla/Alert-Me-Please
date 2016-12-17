(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('LogsController', Logs);

    Logs.$inject = [];

    function Logs() {

    }
})();