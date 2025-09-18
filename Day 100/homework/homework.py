def even_or_odd(s):
    od = 0
    ev = 0
    for i in s:
        if(int(i) % 2 == 0):
            ev = ev + int(i)
        else:
            od = od + int(i)
    if(od > ev):
        return 'Odd is greater than Even'
    elif(ev > od):
        return 'Even is greater than Odd'
    else:
        return 'Even and Odd are the same'
    

def solution(text, ending):
    lenin = len(ending)
    ans = ""
    for i in range(len(text) - lenin, len(text), 1):
        ans = ans + text[i]
        
    if(ans == ending):
        return True
    else:
        return False
        
    
def elevator_distance(array):
    pas = 0
    for i in range(len(array) - 1):
        if(array[i] > array[i + 1]):
            pas = pas + (array[i] - array[i + 1]);
        else:
            pas = pas + (array[i + 1] - array[i])
            
    return pas
            
    
    