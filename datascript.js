user = localStorage.getItem("student");

const firebaseConfig = {
apiKey: "AIzaSyCsjPIiAS-iYIZgd6BzfqeZZoeGbbQYHxQ",
  authDomain: "historico-de-texto.firebaseapp.com",
  databaseURL: "https://historico-de-texto-default-rtdb.firebaseio.com",
  projectId: "historico-de-texto",
  storageBucket: "historico-de-texto.firebasestorage.app",
  messagingSenderId: "312597574215",
  appId: "1:312597574215:web:39ae7d100dc9c229ebb762"
};
firebase.initializeApp(firebaseConfig);

function login(){
  user = document.getElementById("student").value;
  localStorage.setItem("student",user);
  document.getElementById("user").style.visibility = "hidden";
}