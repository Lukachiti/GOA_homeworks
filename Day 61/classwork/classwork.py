#def func(str):
   #reversed = ""
    #for i in range(len(str) - 1, -1, 1):
       # reversed.append(str[i])
    #if(reversed == str):
        #print("true")

#func("sts")

def square_sum(numbers):
    sum = 0
    
    for i in range(0, len(numbers)):
        sum = sum + numbers[i] * numbers[i]

    print(sum)
square_sum([1, 2, 3, 4])