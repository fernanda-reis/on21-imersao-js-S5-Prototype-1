//prototype = objeto nativo q vem em toda função. podemos adicionar métodos e atributos a ele.

function Account(number, agency, amount) {
  //criando account a partir do prototype
  const account = Object.create(Account.prototype);
  account.number = number;
  account.agency = agency;
  account.amount = amount;
  return account;
}

//adicionando métodos ao prototype para que o objeto criado a partir dele possa usar
Account.prototype.credit = function credit(amount) {
  const newAmount = this.amount + amount;
  this.amount = newAmount;
  console.log(`The new amount is ${this.amount}`);
};

Account.prototype.debit = function debit(amount) {
  const newAmount = this.amount - amount;
  this.amount = newAmount;
  console.log(`The new amount is ${this.amount}`);
};

Account.prototype.transferTo = function transferTo(account, transferedAmount) {
  if (this.amount >= transferedAmount) {
    account.amount = account.amount + transferedAmount;
    this.amount = this.amount - transferedAmount;
    console.log(`The new amount is ${this.amount}`);
  } else throw "ERROR: The amount is insufficient.";
};

//testando
const account1 = Account(333, 10, 45);
const account2 = Account(334, 10, 10);

account1.credit(30); //75
account1.debit(20); //55
account1.transferTo(account2, 5); //50
account1.transferTo(account2, 55); //ERROR: The amount is insufficient.
