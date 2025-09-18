list = [1, 2, 3]
max = "?"
list[0] = int(input("enter first number:"))
list[1] = int(input("enter second number:"))
list[2] = int(input("enter third number:"))

if (list[0] > list[1] and list[0] > list[2]):
    max = list[0]
elif (list[1] > list[0] and list[1] > list[2]):
    max = list[1]
elif (list[2] > list[1] and list[2] > list[0]):
    max = list[2]
print("Max = ")
print(max)
 

list = [1, 2, 3]
min = "?"
list[0] = int(input("enter first number:"))
list[1] = int(input("enter second number:"))
list[2] = int(input("enter third number:"))

if (list[0] < list[1] and list[0] < list[2]):
    min = list[0]
elif (list[1] < list[0] and list[1] < list[2]):
    min = list[1]
elif (list[2] < list[1] and list[2] < list[0]):
    min = list[2]
print("Min = ")
print(min)

ints = [1, 2, 3, 4]
strs = ['l', 'u', 'k', 'a']
lists = [ints[0], strs[0], ints[1], strs[1], ints[2], strs[2], ints[3], strs[3]]
print(lists) 

list69 = ['luka', 13, 'gio', 12]
integers = [0]
strings = [0]
if (list69[0] > 0 or list69[0] < 0):
    integers[0] = list69[0]
else:
    strings[0] = list69[0]

if (list69[1] > 0 or list69[1] < 0):
    integers[1] = list69[1]
else:
    strings[1] = list69[1]

if (list69[2] > 0 or list69[2] < 0):
    integers[2] = list69[2]
else:
    strings[2] = list69[2]

if (list69[3] > 0 or list69[3] < 0):
    integers[3] = list69[3]
else:
    strings[3] = list69[3]
print(integers)
print(strings)



 