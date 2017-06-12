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

//Store trains in firebase
var trainRef = database.ref("/trainsList")

//create var for initial values
var name = "";
var destination = "";
var time = 0;
var frequency = 00;


//when clicking submit a new train will be created and stored in firebase
$("#submitTrain").on("click", function(){
  event.preventDefault();
  var trainName = $("#train-name").val().trim();
  var trainDestination =$("#destination").val().trim();
  var firstTrain =$("#first-train").val().trim();
  var trainFrequency = $("#frequency").val().trim();

  //create new train
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: firstTrain,
    frequency: trainFrequency
  }

  //push new train to firebase
  database.ref("/trainList").push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);

  //clear text after adding train
  $("#train-name").val("");
  $("#destination").val("");
  $("#first-train").val("");
  $("#frequency").val("");
});


//when a child is created create a snapshot of the added child
database.ref("/trainList").on("child_added", function(childSnapshot,prevChildKey){
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var firstTrain = childSnapshot.val().time;
  var trainFrequency = childSnapshot.val().frequency;

    //console log for troubleshooting
    console.log(trainName);
    console.log(trainDestination);
    console.log(time);
    console.log(frequency);
})

