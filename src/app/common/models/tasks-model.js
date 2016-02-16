angular.module("todo.common")
  .service('TasksModel', function($http, $q, UserModel, FIREBASE_URI) {

       var service = this;

       function extract(result) {
         return result.data;
       }

       function getUrl() {
         return FIREBASE_URI + 'users/' + UserModel.getCurrentUser() + "/tasks.json";
       }

       function getSpecificUrl(taskId) {
         return FIREBASE_URI + "users/" + UserModel.getCurrentUser() + "/tasks/" + taskId + ".json";
       }

       service.getTasks = function() {
         return $http.get(getUrl()).then(extract);
       }

       service.create = function(task) {
         return $http.post(getUrl(), task).then(extract);
       }

       service.update = function(task, taskId) {
         return $http.put(getSpecificUrl(taskId), task).then(extract);
       }

       service.delete = function(taskId) {
         return $http.delete(getSpecificUrl(taskId)).then(extract);
       }
  })
