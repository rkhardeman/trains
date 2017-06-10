  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAg-mHpp0NcixlO7rueYsNRkX1JYy_O8yg",
    authDomain: "trains-e4be0.firebaseapp.com",
    databaseURL: "https://trains-e4be0.firebaseio.com",
    projectId: "trains-e4be0",
    storageBucket: "trains-e4be0.appspot.com",
    messagingSenderId: "449626427673"
  };
  firebase.initializeApp(config);

  //Create a variable to reference the database
  var database = firebase.database();
  //All trains will be stored in firebase in this directory
  var train = database.ref("/trainsList")

  //create var for initial values
  var name = "";
  var destination = "";
  var time = 0;
  var frequency = 00;

  