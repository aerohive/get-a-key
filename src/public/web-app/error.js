var error = angular.module('error', [
    'ngMaterial', 'ngSanitize', 'pascalprecht.translate'
]);

error
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.definePalette('ahBlue', colors)
            .theme('default')
            .primaryPalette("ahBlue", {
                'default': '600'
            })
            .accentPalette('ahBlue', {
                'default': '200' // by default use shade 400 from the pink palette for primary intentions
            });
    }).config(function ($translateProvider) {
        //$translateProvider.useMissingTranslationHandlerLog();
        $translateProvider
            .translations('en', en)
            .translations('fr', fr)
            .registerAvailableLanguageKeys(['en', 'fr'], {
                'en_*': 'en',
                'fr_*': 'fr'
            })
            .determinePreferredLanguage()
            .fallbackLanguage('en')
            .useSanitizeValueStrategy('sanitize');

    });

error.controller('ErrorCtrl', function ($scope, $translate) {
    $scope.translate = function (langKey) {
        $translate.use(langKey);
    };
    $scope.openMenu = function ($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

});
