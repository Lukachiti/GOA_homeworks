def sums(massive):
    sum1 = []
    for k in range(len(massive)):
        sum = 0
        for i in range(len(massive[k])):
            sum += massive[k][i]
        sum1.append(sum)
    print(sum1)
sums([[6, 3,], 
[4, 6], 
[7, 3]])                
        
            
            
  
            
