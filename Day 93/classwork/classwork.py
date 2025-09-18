from functools import reduce 

number = lambda num : num % 2
print(number(8))

my_setto = {7, "sth", True, 1}
print(my_setto)

dictii = {"name": "luka", 
          "lastname":"chiti",
          "age": 14}
print(dictii)

list1 = [1, 2, 3, 4, 5]
list2 = list(map(lambda x : x * 2, list1))


list3 = list(filter(lambda y : y % 3 == 0, list1))

list69 = list(map(lambda x : x + 10, list1))

list4 = list(filter(lambda i : i % 2 == 1, list1))

list5 = list(reduce(lambda x, y : x + y, list1))s
