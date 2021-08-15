



// deposit
document.getElementById('deposit-button').addEventListener("click", function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
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
document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
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

function welcome(username, password, fullname) {
    document.getElementById("fullName-dash").innerText = fullname;
}