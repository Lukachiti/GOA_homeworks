def return_longest_str(strs):
    longest_str = strs[0]
    
    for str in strs:
        if len(str) > len(longest_str):
            longest_str = str
    return longest_str

strs = ["luka", "nika", "giorgi", "saba"]
print(return_longest_str(strs)) 


def split_nums(nums):
    result = []
    for num in nums:
        if num % 2 == 0:
            
            result.append(num * num)
        else:
            
            result.append(num * 2)
    
    return result


nums = [1, 2, 3, 4, 5, 6, 7, 8]
print(split_nums(nums))  

def return_even_numbers(numbers):
    even_numbers = []

    for number in numbers:
        if number % 2 == 0:
            even_numbers.append(number)
    
    return even_numbers

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
print(return_even_numbers(numbers))


    
    
    
    
 
      
        
        
    
   



