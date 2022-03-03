// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBi__8HvapgXAZBAt9pHNSZpSIYC8DPjNY",
  authDomain: "kwitter-630bd.firebaseapp.com",
  databaseURL: "https://kwitter-630bd-default-rtdb.firebaseio.com",
  projectId: "kwitter-630bd",
  storageBucket: "kwitter-630bd.appspot.com",
  messagingSenderId: "259829866362",
  appId: "1:259829866362:web:3532d8dc5feb6cc7d240c3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room_name"
    });
    localStorage.setItem("room_name",room_name);

    window.location="kwitter_page.html";
    
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name- "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";


}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}