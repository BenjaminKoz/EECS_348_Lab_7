function change_paragraph() {
    var borderR = document.getElementById("borderR").value;
    var borderG = document.getElementById("borderG").value;
    var borderB = document.getElementById("borderB").value;
    var borderW = document.getElementById("borderW").value;
    var backR = document.getElementById("backR").value;
    var backG = document.getElementById("backG").value;
    var backB = document.getElementById("backB").value;
    var paragraph = document.getElementById("paragraph");
    
    paragraph.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
    paragraph.style.borderWidth = borderW;
    paragraph.style.backgroundColor = `rgb(${backR},${backG},${backB})`;
}

function check_passwords() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    
    if (password1.length < 8) {
        alert("Password 1 is too short. Please make sure it is at least 8 characters.");
        }
    else if (password2.length < 8) {
        alert("Password 2 is too short. Please make sure it is at least 8 characters.");
        }
    else if (password1 != password2) {
        alert("The entered passwords do not match.");
        }
    else {
        alert("You're all set!");
        }
}


    
