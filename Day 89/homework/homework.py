def string_cutting(str, From, To):
    return str[From:To]

x = "Hello World"

print(x[2:6:1])
#       ^ ^ ^
#პირველი - საიდან დაიწყოს
#მეორე -  სადამდე
#მესამე - ყოველი მერამდენე რიცხვი მოგვცეს

def reverse_words(text):
    ans = ''
    text2 = text.split(' ')
    for i in range(len(text2)):
        if(i != 0):
            ans = ans + " " + text2[i][::-1]
        else:
            ans = ans + text2[i][::-1]

    return ans

