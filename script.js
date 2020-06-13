// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCQvNFLiPhhX06gKfnEEXjPngYPTrC7o34",
    authDomain: "prosfero-tech.firebaseapp.com",
    databaseURL: "https://prosfero-tech.firebaseio.com",
    projectId: "prosfero-tech",
    storageBucket: "prosfero-tech.appspot.com",
    messagingSenderId: "848332702195",
    appId: "1:848332702195:web:776d4481a88f03f55c5286"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var recommendations = myFirebase.child("recommendations");
recommendations.push({
    "title": "The danger of a single story",
    "presenter": "Chimamanda Ngozi Adichie",
    "link": "https://www.ted.com/talks/chimamanda_adichie_the_danger_of_a_single_story"
});