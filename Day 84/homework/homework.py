def find_multiples(integer, limit):
    returnn = []
    for i in range(limit + 1):
        if(i % integer == 0 and i != 0):
            returnn.append(i)
            
    return returnn

def count_positives_sum_negatives(arr):
    sth = [0, 0]
    for i in arr:
        if(i > 0):
            sth[0] = sth[0] + 1
        elif(i < 0):
            sth[1] = sth[1] + i
        
    return sth