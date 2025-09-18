arr = [1, 2, 3, 4, 5, 6, 6, 6, 7]
newarr = list(map(lambda i : i * 2, arr))
print(newarr)

arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
newarr2 = list(filter(lambda x : x % 2 == 1, arr2))
print(newarr2)

arr3 = ["asd", "ads", "gtdrd", "drgrdg", "fyjfy", "drtgdrg", "drgd"]
newarr3 = list(map(lambda z : z.upper(), arr3))
print(newarr3)

arr4 = ["sgfsefe", "sfesef", "sef", "hh", "fthft", "dgdfgy", "rgsr"]
newarr4 = list(filter(lambda y : len(y) > 5,  arr4))
print(newarr4)


obj = {
    "name": "luka",
    "age": 14
}
obj2 = {
    "name": "nika",
    "age": 17
}
obj3 = {
    "name": "nugzara",
    "age": 69
}

arr5 = [obj["age"], obj2["age"], obj3["age"]]
newarr5 = sorted(arr5)
print(newarr5)
 

