let count = 1;
let cashbalance = 0;
let = accountbalance = 0;

function change() {
    cashbalance = Number(document.getElementById("cashbalance").value)
    accountbalance = Number(document.getElementById("accountbalance").value)
    addLog("Balance Set.")
}
function addLog(message = '') {
    const log = document.getElementById("log");
    const entry = `${count} | ${message} | Account: ${accountbalance}, Cash: ${cashbalance}`;
    log.innerText += entry + '\n';
    count++;
}

function proceed() {
    const operation = document.getElementById("operation").value
    let amount = Number(document.getElementById("amount").value)
    if (operation === "deposit"){
        if (amount <= cashbalance) {
            cashbalance = cashbalance - amount
            accountbalance = accountbalance + amount
            addLog(`Successfully Deposited ${amount}`)
        }
        else{
            addLog("Not enough cash to deposit.")
        }
    }
    else if(operation === "withdraw"){
        if (amount <= accountbalance) {
            cashbalance = cashbalance + amount
            accountbalance = accountbalance - amount
            addLog(`Successfully Withdrawed ${amount}`)
        }
        else{
            addLog("Not enough cash to withdraw.")
        }
    }
}