let lastLoggedInData = JSON.parse(localStorage.getItem("last-logged-in"));
console.log(lastLoggedInData)
if (lastLoggedInData.status == false) {
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
        window.alert("Please Enter Valid Deposit Amount");
        return;
    }

    // return if the password not matched
    if (inpPass.value !== userPass) {
        window.alert("password not matched");
        return;
    }
    const newDepositAmount = parseFloat(depositInput.value);


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
});

// withdraw
document.getElementById("withdraw-button").addEventListener("click", function (e) {
    e.preventDefault();


    // get the pass
    const inpPass = document.getElementById("deposit-password");
    // get the amount withdrawed
    const withdrawInput = document.getElementById("withdraw-input");

    // return if the password or ammount is blank
    if (depositInput.value == "" && inpPass.value == "") {
        window.alert("Deposit Amount and Password can't be blank");
        return;
    } else if (depositInput.value == "") {
        window.alert("Please Enter Valid Deposit Amount");
        return;
    } else if (inpPass.value == "") {
        window.alert("Please Enter Valid Deposit Amount");
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
    withdrawTotal.innerText = newWithdrawTotal;


    // update account balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear input field
    withdrawInput.value = '';
});


function logout() {
    localStorage.setItem("last-logged-in", JSON.stringify({ user: "", userID: "", password: "", status: false }));
    window.location.href = "../";
};