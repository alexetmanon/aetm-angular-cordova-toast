(function () {
    'use strict';

    /**
     * Dependencies :
     * - https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin
     */
    angular
        .module('aetm-toast', [])
        .factory('aetmToastService', ['$window', function ($window) {
            return {
                show: function (message, duration) {
                    duration = duration || 'short';

                    $window.plugins.toast.showWithOptions({
                        message: message,
                        duration: duration,
                        position: 'bottom',
                        styling: {
                            opacity: 1,
                            cornerRadius: 2,
                            backgroundColor: '#323232',
                        }
                    });
                },
                showError: function (message, duration) {
                    duration = duration || 'short';

                    $window.plugins.toast.showWithOptions({
                        message: message,
                        duration: duration,
                        position: 'bottom',
                        styling: {
                            opacity: 1,
                            cornerRadius: 2,
                            backgroundColor: '#f1486b',
                        }
                    });
                }
            };
        }]);
})();