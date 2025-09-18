#first code
def string_clean(s):
    result = ""
    for i in s:
        if not i.isdigit():
            result += i
    
    return result

#second code
def _if(bool, func1, func2):
    if bool:
        func1()
    else:
        func2()

#third code
def even_or_odd(num):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"
    
#fourth code
def whatday(num):
    if num == 1:
        return "Sunday"
    elif num == 2:
        return "Monday"
    elif num == 3:
        return "Tuesday"
    elif num == 4:
        return "Wednesday"
    elif num == 5:
        return "Thursday"
    elif num == 6:
        return "Friday"
    elif num == 7:
        return "Saturday"
    else:
        return "Wrong, please enter a number between 1 and 7"
    
#fifth code 
def problem(a):
    if isinstance(a, (int, float)):
        return a * 50 + 6
    else:
        return "Error"
    
    
    

