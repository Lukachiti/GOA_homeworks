def pluralize(word):
    wordd = ""
    vowels = ["a", "e", "i", "o", "u"]
    if(word.endswith("s") or word.endswith("x") or word.endswith("z") or word.endswith("ch") or word.endswith("sh")):
        return word + "es"
    elif(word.endswith("y") and word[-2] not in vowels):
        for i in range(len(word) - 1):
            wordd += word[i]
        return wordd + "ies"
    else:
        return word + "s"
    

    
def largest_power(N):
    for i in range(1000):
        if(pow(3, i) < N and pow(3, i + 1) >= N):
            return i