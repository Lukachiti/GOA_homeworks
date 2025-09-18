def reverse_letter(st):
    ans = ""
    for i in st:
        if(i.isalpha()):
            ans = i + ans

    return ans