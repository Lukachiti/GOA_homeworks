list = ["A", "B", "C", "D", "T"]
print(list[2])
print(list[4])
#------------------------------------------------------
bum = int(input("Enter the num:"))
nums = []
for i in range(bum):
    num = int(input("Enter number:"))
    if i % 2 == 0:
        nums.append(num)
print(nums)
#------------------------------------------------------
listo = []
for n in range(10):
    number = int(input("Enter num:"))
    listo.append(number * 2)
print(listo)
#------------------------------------------------------
bum = int(input("Enter the num:"))
nums = []
for i in range(bum):
    num = int(input("Enter number:"))
    nums.append(num)
nums.reverse()
print(nums)



    
