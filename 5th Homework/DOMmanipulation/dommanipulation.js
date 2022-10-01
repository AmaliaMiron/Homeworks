function actionForm() {


    var name = document.forms["complete"]["1sttext"].value;
    var email = document.forms["complete"]["2ndtext"].value;
    var subject =document.forms["complete"]["3rdtext"].value;

    if (name, email, subject == "") {

      var a = document.getElementById("name").setAttribute("style","border-color: red; border-radius:5px;" )
      var b = document.getElementById("email").setAttribute("style","border-color: red;border-radius:5px; ")
      var c = document.getElementById("subject").setAttribute("style","border-color: red;border-radius:5px;")

       
      
    } 
        else {  
             var display = document.getElementById("sendmessage") ; display.style.visibility = "initial";

            }
  }