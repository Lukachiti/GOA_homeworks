def bonus_time(salary, bonus):
    if(bonus):
        return "$" + str(salary * 10)
    else:
        return "$" + str(salary)
    

def number(lines):
    arr=[]
    for i in range(lines):
        str_var = str(i) + ': ' + str(lines[i]) 
        arr.append(str_var)
    return arr
