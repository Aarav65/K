var firebaseConfig = {
    apiKey: "AIzaSyA8-mvcWcnlkHLoZw1_4lFouAhSiFH0Ric",
    authDomain: "doon-faqs-kvkt.firebaseapp.com",
    databaseURL: "https://doon-faqs-kvkt-default-rtdb.firebaseio.com",
    projectId: "doon-faqs-kvkt",
    storageBucket: "doon-faqs-kvkt.appspot.com",
    messagingSenderId: "58332771169",
    appId: "1:58332771169:web:ef8fce4e1189f702accb20",
    measurementId: "G-7FWSPLE4YF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
