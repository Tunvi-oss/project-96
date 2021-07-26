var firebaseConfig = {
    apiKey: "AIzaSyBUO6Cqvi9ykXSDN-Ya71eSLvM1gURkin0",
    authDomain: "kwitter-77cfa.firebaseapp.com",
    databaseURL: "https://kwitter-77cfa-default-rtdb.firebaseio.com",
    projectId: "kwitter-77cfa",
    storageBucket: "kwitter-77cfa.appspot.com",
    messagingSenderId: "463759310359",
    appId: "1:463759310359:web:51bbad45c297372fcca652",
    measurementId: "G-MJX44JPW58"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() {

    msg  = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";   
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       
} }); }); }
getData();


