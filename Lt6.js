





let first = document.getElementById("name");
first.addEventListener("focusout", nameChecker);

function nameChecker() {
    let name = document.getElementById('name').value;
    let ftester = /\d/.test(name);
    
    if (ftester == true || name == "") {
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("name").style.borderWidth = "1px";
        document.getElementById("invf").style.display = "block";
        return false;
        
    }

    else {
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("name").style.borderWidth = "2px";
        document.getElementById("invf").style.display = "none";
        return true;
    }

    
}



let last = document.getElementById("lname");
last.addEventListener("focusout", lnameChecker);

function lnameChecker() {
    let lname = document.getElementById('lname').value;
    let ltester = /\d/.test(lname);
    
    if (ltester == true || lname == "") {
        document.getElementById("Lname").style.borderColor = "red";
        document.getElementById("Lname").style.borderWidth = "1px";
        document.getElementById("invl").style.display = "block";
        return false;
    }

    else {
        document.getElementById("lname").style.borderColor = "green";
        document.getElementById("lname").style.borderWidth = "2px";
        document.getElementById("invl").style.display = "none";
        return true;
        
    }

    
}



let mid = document.getElementById("midI");
mid.addEventListener("focusout", midIChecker);


function midIChecker() {
    let midI = document.getElementById('midI').value;
    let length = midI.length;
    let mtester = /\d/.test(midI);
    
    if (mtester == true || midI == "" || length > 1) {
        document.getElementById("midI").style.borderColor = "red";
        document.getElementById("midI").style.borderWidth = "1px";
        document.getElementById("invm").style.display = "block";
        return false;
    }

    else {
        document.getElementById("midI").style.borderColor = "green";
        document.getElementById("midI").style.borderWidth = "2px";
        document.getElementById("invm").style.display = "none";
        return true;
        
    }

    
}



let mail = document.getElementById("email");
mail.addEventListener("focusout", emailChecker);

function emailChecker(boolean) {
    let email = document.getElementById('email').value;
    let format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]+/; 
    let etester = format.test(email);
   
    if (etester == true || email.includes("@") == false) { 
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.borderWidth = "1px";
        document.getElementById("invalid").style.display = "block";
        return false;
        
    }

    else {
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("email").style.borderWidth = "2px";
        document.getElementById("invalid").style.display = "none";
        return true;
    }
}




function resetAll() {
    document.getElementById('email').value = "";
    document.getElementById('midI').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('name').value = "";

    document.getElementById("email").style.borderColor = "gray";
    document.getElementById("email").style.borderWidth = "1px";

    document.getElementById("midI").style.borderColor = "gray";
    document.getElementById("midI").style.borderWidth = "1px";

    document.getElementById("lname").style.borderColor = "gray";
    document.getElementById("lname").style.borderWidth = "1px";

    document.getElementById("name").style.borderColor = "gray";
    document.getElementById("name").style.borderWidth = "1px";

    document.getElementById("invalid").style.display = "none";
    document.getElementById("invl").style.display = "none";
    document.getElementById("invf").style.display = "none";
    document.getElementById("invm").style.display = "none";
    
}



function submitBtn() {
    nameChecker();
    lnameChecker();
    midIChecker();
    emailChecker();

    if (emailChecker() == true && midIChecker() == true 
    && lnameChecker() == true && nameChecker() == true) {
       alert('Signed Up! Successfully');
    }
    else {
       alert('There is an Invalid Input');
    }
}


let reset = document.getElementById("resBtn");
reset.onclick = function() {
    resetAll()
};

let submit = document.getElementById("subBtn");
submit.onclick = function() {
    submitBtn()
};