// this array is for keeping user data.
// if new user arrive use push method

var loginVar = [{
    fullName: "Jawad Bin Mobin Akib",
    userName: "jbmakib",
    passWord: "1234"
},
{
    fullName: "Nusrat Jahan Ananya",
    userName: "nusuananya",
    passWord: "1234"
}
];



/* get variables, localstorage, everything to make this code easier */

// get data from local storage
let loginVarObj = JSON.parse(localStorage.getItem("logged-in-users"));


// get those id(s) in a variable to use it later (login part)
var loginFormField = document.getElementById("loginForm");


// get those id(s) in a variable to use it later (sign in part)
var signUpFormField = document.getElementById("signUpForm");


// box field for output
var boxField = document.getElementById("box");

/* ready for work */



// show element
function show(element) {
    element.classList.remove("d-none");
}


// hide element
function hide(element) {
    element.classList.add("d-none");
};


// last login status and name
JSON.parse(localStorage.getItem("last-logged-in")).status = false;

let lastLoggedIn = JSON.parse(localStorage.getItem("last-logged-in"));
console.log(lastLoggedIn)


function lastLoggedInStatus() {
    if (lastLoggedIn.status == true) {
        window.location.href = "dashboard"
    } else {
        window.location.href
    }
}
lastLoggedInStatus();

// if login button is clicked this function will run.
function login(e) {
    e.preventDefault();

    // take the input field's value in variable to validate
    var usernameField = document.querySelector("#user").value;
    var pwdField = document.querySelector("#pwd").value;

    // remove class from box-field to show the output && add class to new login button to hide it.

    // update loginVar array.
    if (loginVarObj != null) {
        loginVar = loginVarObj;
    }

    // run a for loop to validate data from array.
    for (let i = 0; i < loginVar.length; i++) {
        if (usernameField == loginVar[i].userName && pwdField == loginVar[i].passWord) {

            // add class to login form and sign in button to hide it
            hide(loginFormField);
            show(boxField);


            // login true
            localStorage.setItem("last-logged-in", JSON.stringify({ user: loginVar[i].fullName, userID: loginVar[i].userName, password: loginVar[i].passWord, status: true }));

            window.location.href = "dashboard";

        } else if ((usernameField != "" && usernameField == loginVar[i].userName) && (pwdField != "" && pwdField != loginVar[i].passWord)) {
            window.alert("Password not matched");
            return;
        };

    };


    // check is the user exist
    function userExists(username) {
        return loginVar.some(function (el) {
            return el.userName === username;
        });
    };

    if (usernameField != "" && userExists(usernameField) == false) {
        window.alert("Username doesn't exist\nTry to sign up");
        return;
    }

    if (usernameField == "" || pwdField == "") {
        window.alert("Username or password can't be blank\nPlease enter valid information");
        return;
    };

}


// if "have an account" button is clicked this function will run.
function newLogIn() {

    // make the input field blank
    document.querySelector("#user").value = "";
    document.querySelector("#pwd").value = "";

    // class added to hide and removed to show.
    show(loginFormField);
    hide(signUpFormField);
    hide(boxField);
}


// if "new user? sign in now" button is clicked this function will run.
function newSignUp() {

    // make the sign in form's input field blank
    document.querySelector("#fullN").value = "";
    document.querySelector("#userSign").value = "";
    document.querySelector("#pwdSign").value = "";

    // added and removed class to hide and show element
    hide(loginFormField);
    show(signUpFormField);
    hide(boxField);
}


// if sign-in button is clicked this function will run.
function signUp(e) {
    e.preventDefault();

    // take the field values in variables
    var fullNameSign = document.querySelector("#fullN").value;
    var userName = document.querySelector("#userSign").value;
    var signpwd = document.querySelector("#pwdSign").value;

    // show alert if the input fields are blank
    if (fullNameSign == "" || userName == "" || signpwd == "") {
        window.alert("Fullname, username and password can't be blank\nPlease enter valid informations");
        return;
    }

    // update loginVar array.
    if (loginVarObj != null) {
        loginVar = loginVarObj;
    }

    // run a for loop to validate data
    for (i = 0; i < (loginVar.length); i++) {
        if (userName == loginVar[i].userName) {
            window.alert("this username is already taken");
            return;
        }
    }

    // push new user data to array.
    loginVar.push({
        fullName: fullNameSign,
        userName: userName,
        passWord: signpwd
    });

    // add to localstorage
    let loginVarStr = JSON.stringify(loginVar);
    localStorage.setItem("logged-in-users", loginVarStr);

    // add or remove class to hide or show element
    hide(signUpFormField);
    show(boxField);

    // add this into a variable.
    var fullName = loginVar[loginVar.length - 1].fullName;

    // login true

    localStorage.setItem("last-logged-in", JSON.stringify({ user: fullNameSign, userID: userName, password: signpwd, status: true }));

    window.location.href = "dashboard";
};


// if logout button is clicked this function will run.
/*
function logout() {

    // make the input field blank
    document.querySelector("#user").value = "";
    document.querySelector("#pwd").value = "";

    // add or remove class to hide or show the element.
    hide(boxField);
    show(loginFormField);

    // login false
    localStorage.setItem("last-logged-in", JSON.stringify({ user: "", userID: "", password: "", status: false }));
};
 */