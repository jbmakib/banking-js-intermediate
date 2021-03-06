const lastLoggedInData = JSON.parse(localStorage.getItem("last-logged-in"));
const totalReceiptsFromServer = JSON.parse(localStorage.getItem("total-reciept"));
const savedTotalsToServer = JSON.parse(localStorage.getItem("saved-totals"));

if (lastLoggedInData === null) {
    localStorage.setItem("last-logged-in", JSON.stringify({ user: "", userID: "", password: "", status: "F1fis8x6fsPxptlbjmEFE6g9dxw1Qi0gHAc0ykhsEQE=" }));
};

if (JSON.parse(localStorage.getItem("last-logged-in")).status != "knvteHd+BZKZDQuvi9nDsS8IO+o4cr33/fgmPqCFAIY=") {
    window.location.href = "../";
};


let totalReceipts = [];
let savedTotal = [];


if (totalReceiptsFromServer !== null) {
    for (const reciept of totalReceiptsFromServer) {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
            <td class="border px-8 py-4" id="show">${reciept.date}</td>
            <td class="border px-8 py-4" id="show2">${reciept.time}</td>
            <td class="border px-8 py-4">${reciept.type}</td>
            <td class="border px-8 py-4">${reciept.amount}</td>
            <td class="border px-8 py-4 text-red-300">This Section Will Be Updated Soon</td>
        `;
        document.getElementById("reciept-table").appendChild(tableRow);
    };
    totalReceipts = totalReceiptsFromServer;
};

if (savedTotalsToServer !== null) {
    for (const totals of savedTotalsToServer) {
        document.getElementById("deposit-total").innerText = totals.deposited;
        document.getElementById("withdraw-total").innerText = totals.withdrawed;
        document.getElementById("balance-total").innerText = totals.total;
    };
};

// check the name of user
document.getElementById("fullName-dash").innerText = lastLoggedInData.user;
const userPass = lastLoggedInData.password;

// function for updating it self value
function selfTotal(totalField, inputFieldValue, type) {
    const previuosAmount = parseFloat(document.getElementById(totalField).innerText);
    const newSelfTotal = previuosAmount + inputFieldValue;
    document.getElementById(totalField).innerText = newSelfTotal;
    balanceTotalFunc();
    reciept(type, inputFieldValue);
    commandSaveTotals();
};

// update the total amount
function balanceTotalFunc() {
    const deposited = parseFloat(document.getElementById("deposit-total").innerText);
    const withdrawed = parseFloat(document.getElementById("withdraw-total").innerText);
    const total = deposited - withdrawed;
    document.getElementById("balance-total").innerText = total;
};

function reciept(type, amount) {
    const dateAndTime = new Date();
    const date = `${dateAndTime.getDate()}-${dateAndTime.getMonth() + 1}-${dateAndTime.getFullYear()}`;
    const time = `${dateAndTime.getHours()}:${dateAndTime.getMinutes()}:${dateAndTime.getSeconds()}`;
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td class="border px-8 py-4" id="show">${date}</td>
    <td class="border px-8 py-4" id="show2">${time}</td>
    <td class="border px-8 py-4">${type}</td>
    <td class="border px-8 py-4">${amount}</td>
    <td class="border px-8 py-4 text-red-300">This Section Will Be Updated Soon</td>
    `;
    document.getElementById("reciept-table").appendChild(tableRow);
    totalReceipts.push({ date: date, time: time, type: type, amount: amount });
    localStorage.setItem("total-reciept", JSON.stringify(totalReceipts));
};

function commandSaveTotals() {
    const deposited = parseFloat(document.getElementById("deposit-total").innerText);
    const withdrawed = parseFloat(document.getElementById("withdraw-total").innerText);
    const total = parseFloat(document.getElementById("balance-total").innerText);
    savedTotal[0] = { deposited: deposited, withdrawed: withdrawed, total: total };
    localStorage.setItem("saved-totals", JSON.stringify(savedTotal));
};

// deposit
document.getElementById('deposit-button').addEventListener("click", function (e) {
    e.preventDefault(); // stop loading

    // get the pass
    const inpPass = document.getElementById("deposit-password");

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

    const newDepositAmount = parseFloat(document.getElementById('deposit-input').value);
    if (newDepositAmount <= 0) {
        window.alert("You can't deposit less than or equal to taka zero");
    } else {
        selfTotal("deposit-total", newDepositAmount, "Deposit");
    };

    // clear input field
    document.getElementById('deposit-input').value = '';
    inpPass.value = "";
});

// withdraw
document.getElementById("withdraw-button").addEventListener("click", function (e) {
    e.preventDefault();

    // get the pass
    const inpPass = document.getElementById("withdraw-password");

    // return if the password or ammount is blank
    if (document.getElementById("withdraw-input").value == "" || inpPass.value == "") {
        window.alert("WithDraw Amount or Password can't be blank");
        return;
    };

    // return if the password not matched
    if (inpPass.value !== userPass) {
        window.alert("password not matched");
        return;
    }
    const newWithdrawAmount = parseFloat(document.getElementById("withdraw-input").value);

    // returns if previuos balane is smaller than withdraw.
    if (newWithdrawAmount <= 0 && newWithdrawAmount > parseFloat(document.getElementById("balance-total").innerText)) {
        window.alert("Please withdraw the amount between zero and the value what you have.");
        return;
    };

    // set withdraw total
    selfTotal("withdraw-total", newWithdrawAmount, "Withdraw");

    // clear input field
    document.getElementById("withdraw-input").value = '';
    inpPass.value = "";
});

function logout() {
    localStorage.setItem("last-logged-in", JSON.stringify({ user: "", userID: "", password: "", status: "F1fis8x6fsPxptlbjmEFE6g9dxw1Qi0gHAc0ykhsEQE=" }));
    window.location.href = "../";
};