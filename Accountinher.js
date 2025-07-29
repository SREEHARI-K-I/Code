class Account{
    constructor(holder,balance){
        this.holder=holder;
        this.balance=balance;
    }
    displaybalance(){
        console.log("The current balance of your account is: "+this.balance)
    }
    deposit(amount){
        if(amount > 0){
            this.balance+=amount;
            console.log("Your balance after deposit is: "+this.balance)
        }
        else{
            console.log("Your deposit should be greater than 0")
        }
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("Insufficient balance")
        }
        else{
            this.balance-=amount;
            console.log("Your balance after withdrawal is: "+this.balance)
        }
    }
}

class Savings extends Account{
    constructor(holder,balance,interest){
        super(holder,balance);
        this.interest=interest;
    }

    apply(){
        const inter=(this.balance*this.interest)/100;
        this.balance+=inter;
        console.log("The total amount after adding your interest rate is: "+this.balance)
    }
}

const ac=new Account("Sreehari",15000)
ac.displaybalance();
ac.deposit(3000);
ac.withdraw(1500);
const acc=new Savings("Sreehari",15000,5)
acc.apply();