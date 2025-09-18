def count_letters_and_digits(s):
    sum = 0
    for i in s:
        if(i.isalpha() or i.isnumeric()):
            sum = sum + 1
    return sum

def calculator(x, y, op):

    if(op == '+'):
        return x + y
    elif(op == '-'):
        return x - y
    elif(op == ''):
        return x y
    elif(op == '/'):
        return x / y
    else:
        return "unknown value"
    

    def reverse_words(text):
    ans = ''
    text2 = text.split(' ')
    for i in range(len(text2)):
        if(i != 0):
            ans = ans + " " + text2[i][::-1]
        else:
            ans = ans + text2[i][::-1]

    return ans