def find_short(s):
    words = s.split(" ")
    lengthes = []
    
    for word in words:
        lengthes.append(len(word))
    
    return min(lengthes)


def sum_two_smallest_numbers(numbers):
    numbers.sort()
    
    return numbers[0] + numbers[1]


def remove_smallest(numbers):
    if len(numbers) == 0:
        return []
    
    copy_numbers = numbers.copy()
    min_number = min(numbers)
    copy_numbers.remove(min_number)
    
    return copy_numbers

def stray(arr):
    for num in arr:
        if arr.count(num) == 1:
            return num


def sort_by_length(arr):
    return sorted(arr, key=len)
   