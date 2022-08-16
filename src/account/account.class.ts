export class Account {
  constructor(
    protected account_number: string,
    protected agency: string,
    private balance: number
  ) {}

  public deposit(value: number): void {
    this.balance += value;
  }

  public withdraw(value: number): void {
    this.balance -= value;
  };
}
