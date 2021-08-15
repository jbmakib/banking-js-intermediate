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


// deposit
document.getElementById('deposit-button').addEventListener("click", function (e) {
    e.preventDefault(); // stop loading

    // get the pass
    const inpPass = document.getElementById("deposit-password");
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');

    // return if the password or ammount is blank
    if (depositInput.value == "" && inpPass.value == "") {
        window.alert("Deposit Amount and Password can't be blank");
        return;
    } else if (depositInput.value == "") {
        window.alert("Please Enter Valid Deposit Amount");
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
    const newDepositAmount = parseFloat(depositInput.value);
    if (newDepositAmount <= 0) {
        window.alert("You can't deposit less than or equal to taka zero");
        return;
    }


    // update deposit total
    const depositTotal = document.getElementById("deposit-total");
    const previuosDepositAmount = parseFloat(depositTotal.innerText);
    const newDepositTotal = previuosDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;


    // update account balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
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

    // set withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previuosWithdrawTotal = parseFloat(withdrawTotal.innerText);

    const newWithdrawTotal = previuosWithdrawTotal + newWithdrawAmount;


    // update account balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    // returns if previuos balane is smaller than withdraw.
    if (newWithdrawAmount <= 0) {
        window.alert("You can;t withdraw less than or equal to taka zero");
        return;
    } else if (newWithdrawAmount > previousBalanceTotal) {
        window.alert("You can't withdraw more amount than you have");
        return;
    }

    withdrawTotal.innerText = newWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear input field
    withdrawInput.value = '';
    inpPass.value = "";
});


function logout() {
    localStorage.setItem("last-logged-in", JSON.stringify({ user: "", userID: "", password: "", status: "F1fis8x6fsPxptlbjmEFE6g9dxw1Qi0gHAc0ykhsEQE=" }));
    window.location.href = "../";
};