{
  class BankAccount {
    id: number;
    name: string;
    // it's a convention to start with ( _ ) in private property
    // private _balance: number; // private property only accessible in this class
    protected _balance: number; // protected property also available children class

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // getBalance(): number {
    //   return this._balance;
    // }

    // getter
    get balance() {
      return this._balance;
    }

    // setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    addDeposit(newBalance: number): number {
      return this._balance + newBalance;
    }

    withdrawBalance(balance: number): number {
      return this._balance - balance;
    }
  }

  const maxwell = new BankAccount(121, "Mr. Maxwell", 12000);
  const balance: number = maxwell.balance;
}
