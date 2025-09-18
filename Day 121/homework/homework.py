def no_space(x):
    ans = ''
    for i in x:
        if(i != " "):
            ans += i
    
    return ans

def abbrev_name(name):
    return name.split(" ")[0][0].capitalize() + "." + name.split(" ")[1][0].capitalize()

def double_integer(i):
    return i*2