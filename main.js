// Write a JavaScript program that creates a class called "BankAccount" 
// with properties for account number and balance. 
// Include methods to deposit and withdraw money from the account.
// Create some instances of the "BankAccount" class, deposit some money, 
// and withdraw a portion of it.

class BankAccount{
	constructor(number,balance){
		this.number=number;
		this.balance=balance;
	}
	deposit(d){
		let dep=this.balance+d;
		console.log(`deposit ${dep}`);
	}
	withdraw(w){
		let withdr=this.balance-w;
		console.log(`withdraw ${withdr}`)
	}
}
let account=new BankAccount(11922,500)

account.deposit(100)
account.withdraw(200)