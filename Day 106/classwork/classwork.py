def camel_case(s):
    res = ""
    for i in range(len(s)):
        if(i == 0 and s[i] != " "):
            res = res + s[i].capitalize()
        elif(s[i - 1] == " "):
            res = res + s[i].capitalize()
        elif(s[i] != " "):
            res = res + s[i]

    return res