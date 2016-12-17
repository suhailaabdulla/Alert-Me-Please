(function() {
    'use strict';

    /**
     * Get Shared module.
     */
    angular.module(appName)

    /**
     * Add task data service.
     */
    .factory('ProfileDataService', ProfileDataService)

    .factory('ProfileClientDataService', ProfileClientDataService)

    .factory('ProfilePersistenceDataService', ProfilePersistenceDataService);

    ProfileDataService.$inject = ['ProfileClientDataService'];

    function ProfileDataService(ProfileClientDataService) {
        var profileDataService = {};
        return profileDataService;
           

    }

    ProfileClientDataService.$inject = [];

    function ProfileClientDataService() {
        var profileClientDataService = {
           
        };
        return profileClientDataService;

        


    }

    ProfilePersistenceDataService.$inject = [];

    function ProfilePersistenceDataService() {
        var newProfilePersistenceDataService = {};
        return ProfilePersistenceDataService;
    }
})();