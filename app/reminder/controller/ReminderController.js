(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('ReminderController', Reminder);

    Reminder.$inject = [];

    function Reminder() {
    
    }

})();