document.getElementById("btn").addEventListener("click", () => {
    const dateAndTime = new Date();
    const date = `${dateAndTime.getDate()}-${dateAndTime.getMonth() + 1}-${dateAndTime.getFullYear()}`;
    const time = `${dateAndTime.getHours()}:${dateAndTime.getMinutes()}:${dateAndTime.getSeconds()}`;
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td class="border px-8 py-4" id="show">${date}</td>
    <td class="border px-8 py-4" id="show2">${time}</td>
    <td class="border px-8 py-4">${'Deposit'}</td>
    <td class="border px-8 py-4">${50}</td>
    <td class="border px-8 py-4 text-red-300">This Section Will Be Updated Soon</td>
    `;
    document.getElementById("reciept-table").appendChild(tableRow);
});