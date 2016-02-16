angular.module("todo.common")
  .factory("Auth", function($firebaseAuth, FIREBASE_URI) {

    var ref = new Firebase(FIREBASE_URI);
    return $firebaseAuth(ref);
  })
