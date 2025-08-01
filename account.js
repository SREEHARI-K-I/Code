class Bankaccount{
    constructor(accno,balance){
        this.accno=accno;
        this.balance=balance;
    }
    deposit(amount){
        if(amount>0){
            this.balance+=amount;
            console.log("Your current balance is: "+this.balance)
        }
    }
    withdraw(amount){
        try{
            if(amount>this.balance){
                throw new Error("Insufficient balance");
            }
            else{
                this.balance-=amount;
                console.log("Your current balance is: "+this.balance)
            }
        }
        catch(err){
            console.log("Error occured:",err.message)
        }
    }
}

class Savings extends Bankaccount{
    withdraw(amount){
        try{
           if (amount > this.balance) {
            throw new Error("Insufficient balance");
        } else if ((this.balance - amount) < 500) {
            throw new Error("Minimum balance of ₹500 required");
        } else {
            this.balance -= amount;
            console.log("Withdrawal successful. Current balance: ₹" + this.balance);
        }
        }
        catch(err){
            console.log("Error Occured:",err.message)
        }
    }
}

const b=new Savings(12983,10000);
b.deposit(1500);
b.withdraw(11100);