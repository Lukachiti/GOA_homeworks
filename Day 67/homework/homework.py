def digital_root(n):
    answer = 0
    nn = 0
    n = str(n).split('')
    for i in n:
        nn = nn + int(i)
    nn = str(nn).split('')
    for j in nn:
        answer = answer + int(j)
    return answer
        
print(digital_root(16))