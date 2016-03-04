(function(){
    "use strict";

    angular.module('app.directives').directive('createPostForm', createPostFormDefinition);

    function createPostFormDefinition() {

        var directive = {
          restrict: 'EA',
          templateUrl: './views/directives/create_post_form/create_post_form.html',
          controller: 'CreatePostFormController',
          controllerAs: 'vm',
          scope: {},
          bindToController: true
        };

    return directive;
    }
})();
