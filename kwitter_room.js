
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

 var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
      console.log("Room Name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># "+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name "
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
        window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


