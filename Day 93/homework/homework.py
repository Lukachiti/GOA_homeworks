greet = lambda name : "hello " + name
greet("Luka")

listn = [1,3,5,6,7,10,15,21,25.5,30,101,105]

list1 = list(map(lambda x : x * 2, listn))

list2 = list(map(lambda y : y % 5 == 0, listn))

setn = {"Goa", "Novatori", "Stem", 123, True, 1, False, 0}
#ar gamoitans 1s da 0s imito ro true == 1 da false == 0