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

  //Create new train
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: firstTrain,
    frequency: trainFrequency
  }

  //Push new train to firebase
  database.ref("/trainList").push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);

  //Clear text after adding train
  $("#train-name").val("");
  $("#destination").val("");
  $("#first-train").val("");
  $("#frequency").val("");
});


//When a child is created create a snapshot of the added child
database.ref("/trainList").on("child_added", function(childSnapshot,prevChildKey){
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var firstTrain = childSnapshot.val().time;
  var trainFrequency = childSnapshot.val().frequency;

    //Console log for troubleshooting
    console.log(trainName);
    console.log(trainDestination);
    console.log(time);
    console.log(frequency);

  //First train time minus one year
  var convertedTime = moment(time, "HH:mm").subtract(1, "years");
  console.log(convertedTime);

  //Get the current time
  var currentTime = moment();
  //Console log current time to make sure it works
  console.log("Current time is " + moment(currentTime).format("HH:mm"));

//When a new child is added append the new train to the table
$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  firstTrain + "</td><td>");
});

