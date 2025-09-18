function funn() {
    if(document.getElementById("emal").value == "" || document.getElementById("passwod").value == "" || document.getElementById("nae").value == "" || document.getElementById("nae").value == "" || document.getElementById("surnae").value == "" || document.getElementById("check").checked == false){alert("Fill all forms!")}
    else {
        
        console.log("Email - " + document.getElementById("emal").value)
        console.log("Password - " + document.getElementById("passwod").value)
        console.log("Name - " + document.getElementById("nae").value)
        console.log("Surname - " + document.getElementById("surnae").value)
    }
}