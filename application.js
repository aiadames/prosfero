// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
var firebaseConfig = {
    apiKey: "AIzaSyCQvNFLiPhhX06gKfnEEXjPngYPTrC7o34",
    authDomain: "prosfero-tech.firebaseapp.com",
    databaseURL: "https://prosfero-tech.firebaseio.com",
    projectId: "prosfero-tech",
    storageBucket: "prosfero-tech.appspot.com",
    messagingSenderId: "848332702195",
    appId: "1:848332702195:web:776d4481a88f03f55c5286"
};

// Initialize your Firebase app
firebase.initializeApp(firebaseConfig);

// Reference to the recommendations object in your Firebase database
var commissions = firebase.database().ref("commissions");

// Save a new recommendation to the database, using the input in the form
var submitCommission = function () {

  // Get input values from each of the form elements
  var name = $("#artistName").val();
  var donation = $("#donationAmount").val();
  var note = $("#artistNote").val();

  // Push a new recommendation to the database using those values
  commissions.push({
    "artist": name,
    "donationAmount": donation,
    "link": note
  });
};




// Reference to the recommendations object in your Firebase database
var arts = firebase.database().ref("artists");

// Save a new recommendation to the database, using the input in the form
var submitArtist = function () {

  // Get input values from each of the form elements
  var name = $("#artistName").val();
  var link = $("#artistLink").val();
  var email = $("#artistEmail").val();
  var donationrequired = $("#donationRequired").val();
  var amedium = $("input[name='artistMedium']:checked").val();
  var acharity = $("input[name='artistCharity']:checked").val();

  // Push a new recommendation to the database using those values
  arts.push({
    "artistName": name,
    "artistLink": link,
    "artistEmail": email,
    "donationRequired": donationrequired,
    "artistMedium": amedium,
    "artistCharity": acharity
  });
};



// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#commissionForm").submit(submitCommission);
  $("#artistForm").submit(submitArtist);

});