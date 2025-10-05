const logBox = document.getElementById("log-box")
const acctInput = document.getElementById("acct-input")
const cashInput = document.getElementById("cash-input")

let acctVal = Number(acctInput.value)
let cashVal = Number(cashInput.value)
let entryCount = 1

function logActivity(msg){
  logBox.value += "\n" + msg
}

function updateBalance(){
  const newAcct = Number(acctInput.value)
  const newCash = Number(cashInput.value)

  if (newAcct < 0 || newCash < 0 || isNaN(newAcct) || isNaN(newCash)) {
    logActivity("⚠️ Invalid balance input")
    return
  }

  acctVal = newAcct
  cashVal = newCash
  entryCount++
  logActivity(`${entryCount}) Account: ${acctVal} | Cash: ${cashVal}`)
}

function processTrans(){
  const type = document.getElementById("trans-type").value
  const amt = Number(document.getElementById("trans-amt").value)

  if (amt <= 0 || isNaN(amt)) {
    logActivity("Invalid amount")
    return
  }

  if (type === "in") {
    if (amt > cashVal) {
      logActivity(" Deposit failed: not enough cash")
      return
    }
    cashVal -= amt
    acctVal += amt
  } else {
    if (amt > acctVal) {
      logActivity(" Withdraw failed: not enough account balance")
      return
    }
    cashVal += amt
    acctVal -= amt
  }

  acctInput.value = acctVal
  cashInput.value = cashVal

  entryCount++
  logActivity(`${entryCount}) Account: ${acctVal} | Cash: ${cashVal}`)
}
