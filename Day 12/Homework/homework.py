print("enter your age:")
age = input()
if age > 18 and age < 30:
    print("u are welcome")
elif age < 18 or age > 30:
    print("get out")
elif age < 0:
    print("not funny")