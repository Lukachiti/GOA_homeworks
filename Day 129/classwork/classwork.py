def alpha_seq(string):
    arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"
    ]
    ans = []
    final = ''
    for i in string:
        ans2 = ""
        for j in range(arr.index(i.lower()) + 1):
            if(j == 0):
                ans2 += i.upper()
            else:
                ans2 += i.lower()

        ans.append(ans2)
    ans.sort()
    for k in range(len(ans)):
        if(k == len(ans) - 1):
            final += ans[k]

        else:
            final += ans[k]
            final += ","

    return final