class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = 0.02
        self.balance = 0

    def deposit(self, amount):
        self.balance += amount
        return self
    

    def withdraw(self, amount):
      self.balance -= amount
      return self  
    

    def display_account_info(self):
        print(f"{self.balance} dollars in the bank")
        return self
    

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * 0.02
        return self



class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)

    def display_user_balance(self):
        print(f"{self.name} has {self.account.balance()} dollars in the bank")
        

    def make_withdrawal(self, amount):
        self.account.withdrawal(50)
        print(self.account.balance)

    def make_deposit(self, amount):
        self.account.deposit(100)
        print(self.account.balance)

# jason = User("Jason Jolly", "blah@python.com")
# tom = User("Tommy Tom", "blahasa@python.com")
# will = User("Willson Wil", "blah111@python.com")

# jason.make_deposit(100).make_deposit(100).make_deposit(100).make_withdrawal(100).display_user_balance()

# tom.make_deposit(100).make_deposit(100).make_withdrawal(50).make_withdrawal(50).display_user_balance()

# will.make_deposit(500).make_withdrawal(100).make_withdrawal(100).make_withdrawal(100).display_user_balance()