password = input("password:")
password2 = input("password confirm:")
if password == password2:
    print("password saved")
else:
    print('passwords dont match')

num = int(input("first num:"))
num2 = int(input("second num:"))
print(num + num2)
print(num - num2)
print(num * num2)
print(num / num2)

num3 = int(input("number"))
if num3 > 5 and num3 <= 10:
    print("True")
else:
    print("False")