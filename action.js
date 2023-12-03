function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  function signUp(){
    let email = document.getElementById("email").value;
    // alert(email);
    let username = document.getElementById("username").value;
    // alert(username);
    let password = document.getElementById("password").value;
    alert(password);
    //clear content of div
    var clear = document.getElementById("del");
    clear.innerHTML = "";
    //add new div
    var signedUp = document.createElement("div");
    signedUp.className  = "info";
    signedUp.id = "change";
    signedUp.innerHTML = "Sign up successful";

    // document.body.appendChild(signedUp);
    del.appendChild(signedUp); 
    //new "Sign up successful" div is added as a child to the "del" div. 
    //This assumes that the "del" div is the one you want to replace the content of.

  }
  
