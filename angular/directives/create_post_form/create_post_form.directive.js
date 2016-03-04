(function(){
    "use strict";

    angular.module('app.controllers').controller('CreatePostFormController', CreatePostFormController);

    function CreatePostFormController(Restangular, ToastService){
        this.submit = function() {
        	var data = {
        		name: this.name,
        		topic:this.topic
        	};

        	Restangular.all('posts').post(data).than(function(response){
        		ToastService.show('Post added successfully')
        	})

    	}

}
})();
