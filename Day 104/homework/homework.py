def solve(a,b):
    res = ''
    for i in a:
        if(i not in b):
            res = res + i
    for j in b:
        if(j not in a):
            res = res + j  
            
    return res

def largest_sum(s):
    res = []
    ss = s.split("0")
    for i in ss:
        sum = 0
        for j in i:
            sum = sum + int(j)
        res.append(sum)
    return max(res)
            

def comes_after(st, l): 
    ans = ""
    for i in range(len(st)):
        if(st[i] == l.upper() and i != len(st) or st[i] == l.lower() and i != len(st)):
            if(st[i + 1].isalpha()):
                ans = ans + st[i + 1]
    return ans
            