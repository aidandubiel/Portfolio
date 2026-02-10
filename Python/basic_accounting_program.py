
# Accepts user input to determine how many times to run the loop.
#------------------------------------------------------------------------------------------------------------------------------------------------
debitAccounts = int(input("How many debit accounts do you have?: "))  #add error checking and input santization
creditAccounts = int(input("How many credit accounts do you have?: "))  #add error checking and input santization
#------------------------------------------------------------------------------------------------------------------------------------------------




# Instantiates the dictionary used to store account names and amounts and the variables for running total. 
#------------------------------------------------------------------------------------------------------------------------------------------------
debits = {}
credits = {}

totalDebits = 0
totalCredits = 0
#------------------------------------------------------------------------------------------------------------------------------------------------



# Loops for accepting account name and amount and keeping running total.
#------------------------------------------------------------------------------------------------------------------------------------------------
for i in range(0, debitAccounts):
    accountName = input("Name of debit account: ")
    accountAmount = float(input("Enter amount: ")) #add error checking and input santization
    debits[accountName] = accountAmount 
    totalDebits = totalDebits + debits[accountName]


for i in range(0, creditAccounts):
    accountName = input("Name of credit account: ")
    accountAmount = float(input("Enter amount: ")) #add error checking and input santization
    credits[accountName] = accountAmount
    totalCredits = totalCredits + credits[accountName]
#------------------------------------------------------------------------------------------------------------------------------------------------



# Display results. 
#------------------------------------------------------------------------------------------------------------------------------------------------
print("The total for all debits is: $",totalDebits)
print("The total for all credits is: $",totalCredits) #add functionality to check if the accounts balance
#------------------------------------------------------------------------------------------------------------------------------------------------
