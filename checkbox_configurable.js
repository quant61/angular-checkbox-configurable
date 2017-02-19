/**
 * based on deltreey/angular-multistagebox
 */
'use strict';

angular.module('checkboxConfigurable')
    .directive('checkboxConfigurable', function () {
    return {
        template: '<i class="{{ _getClass() }} clickable" ng-click="_updateStatus()"></i>',
        restrict: 'EA',
        scope: {
            ngModel: '=',
            // thank to http://stackoverflow.com/a/36209713
            updateStatus: '&?',
            getClass: '&?'
        },
        link: function (scope, element) {

            var bind = {
                $ngModel: scope.ngModel,
                $scope: scope,
                $element: element
            };

            if(!scope.getClass){ scope.getClass = getClassDefault;}
            if(!scope.updateStatus){ scope.updateStatus = updateStatusDefault;}

            // TODO: make better classes
            function getClassDefault(){
                return [
                    'fa fa-minus',
                    'fa fa-check',
                    'fa fa-ban',
                ][Number(scope.ngModel)];
            }

            function updateStatusDefault(){
                scope.ngModel++;
                scope.ngModel %= 3;
            }

            scope._getClass = function(){
                return scope.getClass(bind);
            };

            scope._updateStatus = function() {
                return scope.updateStatus(bind);
            };

        }
    };
});
