import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
                
        const firebaseConfig = {
            apiKey: "AIzaSyDY5uYVsARq7DY2mnNOBIwabZB-KujJ7bg",
            authDomain: "authentication-951a5.firebaseapp.com",
            databaseURL: "https://authentication-951a5-default-rtdb.firebaseio.com",
            projectId: "authentication-951a5",
            storageBucket: "authentication-951a5.appspot.com",
            messagingSenderId: "618749548838",
            appId: "1:618749548838:web:f58ea9f63f89fca05209e7"
          };
        
          
          const app = initializeApp(firebaseConfig);
          
          const auth = firebase.auth()
          const dataBase = firebase.dataBase()
          
          function register () {
       
            const firstName = document.getElementById('firstName').value;    
            const lastName = document.getElementById('lastName').value;    
            const address = document.getElementById('address').value;    
            const cell = document.getElementById('cell').value;    
           const email = document.getElementById('email').value;
           const password = document.getElementById('password').value;
           const againPassword = document.getElementById('againPassword').value;
    

         if (validate_email(email)== false || validate_password(password) == false){
            alert("Email or Password is Out")
            return
    
         }

    

        auth.createUserWithEmailAndPassword(email, password)
        .then(function(){

    
            var database_ref = dataBase.ref()

    
            var user_data = {
                email : email,
                password : password,
                firstName: firstName,
                lastName: lastName,
                cell: cell,
                last_login: Date.now()           
                }
                database_ref.child("users/" + user.uid).set(user_data)

                alert("User Created")


        })
        .catch(function(error){
    
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })

         if (validate_field(firstName)== false || validate_field(lastName)== false || validate_field(cell)== false){
            alert("One or More Extra Fields is Outta Line")
            return
         
        }
    }

    
    function login () {
      
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
       
        if (validate_email(email)== false || validate_password(password) == false){
            alert("Email or Password is Out")
            return
            
         }

         auth.signInWithEmailPassword(email, password)
         .then(function() {
              var database_ref = dataBase.ref()
              var user_data = {
                  last_login: Date.now()           
                  }
                  database_ref.child("users/" + user.uid).update(user_data)
                  
                
                  alert("User Logged In")

         })
         .catch(function(error){
          
             var error_code = error.code
             var error_message = error.message
 
             alert(error_message)
         })
    }

        function validate_email(email){
           let  expression =  /^[^@]+@\w+(\.\w+)+\w$/.test(str);
            if (expression.test(email) == true) {
            
                return true
            } else{
               
                return false
            } 
        }
         
        function validate_password(password){
         
             if (password > 6) {
               
                 return false
             } else{
               
                 return true
             } 
         }

         function validate_field(field) {
            if (field == null){
                return false
            } if (field.length <= 0) {
                return false
            }else{
                return true
            }
         }
      
        window.location.href = "signup-success.html";
    });
});








