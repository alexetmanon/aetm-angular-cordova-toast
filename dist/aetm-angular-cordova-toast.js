(function () {
    'use strict';

    /**
     * Dependencies :
     * - https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin
     */
    angular
    .module('aetm-toast', [])
    .provider('aetmToastService', function () {
        var self = this,

            // global config
            defaultConfig = {
                duration: 'short',
                position: 'bottom',
                styling: {
                    opacity: 1,
                    cornerRadius: 2,
                    backgroundColor: '#323232',
                }
            },

            // extend global config
            errorDefaultConfig = angular.merge({}, defaultConfig, {
                styling: {
                    backgroundColor: '#f1486b',
                }
            });

        /**
         * Extends default config.
         * @param  Object config
         * @return this
         */
        self.config = function (config) {
            angular.merge(defaultConfig, config);

            // also update error config has it is dependent of default config
            angular.merge(errorDefaultConfig, defaultConfig, errorDefaultConfig);

            return self;
        };

        /**
         * Extends default error config.
         * @param  Object config
         * @return this
         */
        self.errorConfig = function (config) {
            angular.merge(errorDefaultConfig, defaultConfig, config);

            return self;
        };

        // Factory
        self.$get = ['$window', function ($window) {
            return {
                /**
                 *
                 * @param String message
                 * @param [Integer] duration
                 */
                show: function (message, duration) {
                    duration = duration || defaultConfig.duration;

                    $window.plugins.toast.showWithOptions({
                        message: message,
                        duration: duration,
                        position: defaultConfig.position,
                        styling: defaultConfig.styling
                    });
                },

                /**
                 *
                 * @param String message
                 * @param [Integer] duration
                 */
                showError: function (message, duration) {
                    duration = duration || duration || errorDefaultConfig.duration;

                    $window.plugins.toast.showWithOptions({
                        message: message,
                        duration: duration,
                        position: errorDefaultConfig.position,
                        styling: errorDefaultConfig.styling
                    });
                }
            };
        }];
    });
})();