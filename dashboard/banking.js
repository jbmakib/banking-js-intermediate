let lastLoggedInData = JSON.parse(localStorage.getItem("last-logged-in"));

if (lastLoggedInData === null) {
    localStorage.setItem("last-logged-in", JSON.stringify({ user: "", userID: "", password: "", status: "F1fis8x6fsPxptlbjmEFE6g9dxw1Qi0gHAc0ykhsEQE=" }));
};

if (JSON.parse(localStorage.getItem("last-logged-in")).status != "knvteHd+BZKZDQuvi9nDsS8IO+o4cr33/fgmPqCFAIY=") {
    window.location.href = "../";
};

// check the name of user
document.getElementById("fullName-dash").innerText = lastLoggedInData.user;
const userPass = lastLoggedInData.password;

// function for updating it self value
function selfTotal(totalField, inputFieldValue) {
    const previuosAmount = parseFloat(document.getElementById(totalField).innerText);
    const newSelfTotal = previuosAmount + inputFieldValue;
    document.getElementById(totalField).innerText = newSelfTotal;
};

// update the total amount
function balanceTotalFunc() {
    const deposited = parseFloat(document.getElementById("deposit-total").innerText);
    const withdrawed = parseFloat(document.getElementById("withdraw-total").innerText);
    const total = deposited - withdrawed;
    document.getElementById("balance-total").innerText = total;
}

// deposit
document.getElementById('deposit-button').addEventListener("click", function (e) {
    e.preventDefault(); // stop loading

    // get the pass
    const inpPass = document.getElementById("deposit-password");
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');

    // return if the password or ammount is blank
    if (document.getElementById('deposit-input').value == "" || inpPass.value == "") {
        window.alert("Deposit Amount or Password can't be blank");
        return;
    };

    // return if the password not matched
    if (inpPass.value !== userPass) {
        window.alert("password not matched");
        return;
    };

    const newDepositAmount = parseFloat(depositInput.value);
    if (newDepositAmount <= 0) {
        window.alert("You can't deposit less than or equal to taka zero");
        return;
    }


    // update deposit total
    selfTotal("deposit-total", newDepositAmount);
    balanceTotalFunc();

    // clear input field
    depositInput.value = '';
    inpPass.value = "";
});

// withdraw
document.getElementById("withdraw-button").addEventListener("click", function (e) {
    e.preventDefault();


    // get the pass
    const inpPass = document.getElementById("withdraw-password");
    // get the amount withdrawed
    const withdrawInput = document.getElementById("withdraw-input");

    // return if the password or ammount is blank
    if (withdrawInput.value == "" && inpPass.value == "") {
        window.alert("WithDraw Amount and Password can't be blank");
        return;
    } else if (withdrawInput.value == "") {
        window.alert("Please Enter Valid Withdraw Amount");
        return;
    } else if (inpPass.value == "") {
        window.alert("Password can't be blank");
        return;
    }

    // return if the password not matched
    if (inpPass.value !== userPass) {
        window.alert("password not matched");
        return;
    }
    const newWithdrawAmount = parseFloat(withdrawInput.value);
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    // returns if previuos balane is smaller than withdraw.
    if (newWithdrawAmount <= 0 && newWithdrawAmount > previousBalanceTotal) {
        window.alert("Please withdraw the amount between zero and the value what you have.");
        return;
    };


    // set withdraw total
    selfTotal("withdraw-total", newWithdrawAmount);
    balanceTotalFunc();

    // clear input field
    withdrawInput.value = '';
    inpPass.value = "";
});


function logout() {
    localStorage.setItem("last-logged-in", JSON.stringify({ user: "", userID: "", password: "", status: "F1fis8x6fsPxptlbjmEFE6g9dxw1Qi0gHAc0ykhsEQE=" }));
    window.location.href = "../";
};