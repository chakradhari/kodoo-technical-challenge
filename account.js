const accountTypeChecker = (accountBalanceHistory) => {
    let result = false;
    let amountArray = [];
  
    for(let month of accountBalanceHistory) {
      amountArray.push(month.account.balance.amount)
    }
  
    let difference = amountArray[1] - amountArray[0]
    for(let i=0; i<amountArray.length-1; i++) {
      if(amountArray[i]+difference !== amountArray[i+1]) {
        result = true
      }
    }
  
    return result ? "A" : "B";
  };
  
module.exports = accountTypeChecker;