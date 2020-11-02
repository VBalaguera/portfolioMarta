//FIREBASE CONTACT FORM 


  // 3. Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC8etNQKdtnqqwetU6mmY8jOr0mqAg_f9w",
    authDomain: "portfoliomarta-ea37a.firebaseapp.com",
    databaseURL: "https://portfoliomarta-ea37a.firebaseio.com",
    projectId: "portfoliomarta-ea37a",
    storageBucket: "portfoliomarta-ea37a.appspot.com",
    messagingSenderId: "414728111063",
    appId: "1:414728111063:web:ff3f37043255ce99a54192"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//reference the collection ("messages")

var messagesRef = firebase.database().ref('messages'); 


//1. listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// 5. Submit form 
function submitForm(e){
    e.preventDefault(); 

    //get values 

    var name = getInputContent('name'); 
    var mail = getInputContent('mail'); 
    var message = getInputContent('message'); 

    /* console.log(name);  */
    // 6. Save message 
    saveMessage(name, mail, message); 
    // for now, it will send back this error message: PERMISSION_DENIED: Permission denied so rules have to set to read: auth != null and write: true 


    // 8. show alert: created div class="alert" 
    document.querySelector('.alert').style.display = 'block'; 
    // hide alert after 2.5 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none'; 
    }, 2500);

    // 9. clearing data after sending it
    document.getElementById('contactForm').reset(); 
}

console.log('test'); 

// 2. Function to get form values 
function getInputContent(id){
    return document.getElementById(id).value; 
}

// 4. saving messages to firebase
function saveMessage(name, mail, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        mail: mail,
        message: message 
    }); 
}