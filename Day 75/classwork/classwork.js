let bank_account = {
    amount: 50,
    
}

function see_amount(){
    console.log(bank_account.amount)

}

function add(num){
    bank_account.amount = bank_account.amount + num
}

function cash(amount){
    if(bank_account.amount >! amount){console.log("u broke lil bro")}

    else{bank_account.amount = bank_account.amount - amount}
    
}