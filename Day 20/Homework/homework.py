def even(nums):
    total = 0
    for number in nums:
        if number % 2 == 0:
            total += number
    return total





def reverse(s):
    reversed = ''
    for bruh in s:
        reversed = bruh + reversed
    return reversed



def factorial(x):
    if x == 0 or x == 1:
        return 1
    else:
        return x * factorial(x - 1)
    

def commons(listA, listB):
    common = []
    for item in listA:
        if item in listB and item not in common:
            common.append(item)
    return common




def count(s):
    vowels = 'aeiouAEIOU'
    count = 0
    for broo in s:
        if broo in vowels:
            count += 1
    return count



def sort(list):
    x = len(list)
    for i in range(x):
        for j in range(0, x-i-1):
            if list[j] > list[j+1]:
                list[j], list[j+1] = list[j+1], list[j]
    return list



