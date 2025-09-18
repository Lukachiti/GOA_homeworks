def funk(word):
    new_word = ""
    for i in range(len(word) - 1, -1, -1):
        new_word = new_word + word[i]

    return new_word

print(funk("aklu"))

