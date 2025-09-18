def split(string):
    list = string.split()
    Splits = []
    for i in list:
        Splits.append(i)
        print(Splits)

split("sup bro how u doing")



def sum_of_multiples(number):
   sum = 0
   for i in range(number):
    if i % 3 == 0 or i % 5 == 0 :
        sum += i
    print(sum)


sum_of_multiples(4)

#def lets_try():
    #oglist = ['sup', 'brooo']
    #print(sum(oglist))
    
    #lets_try()








