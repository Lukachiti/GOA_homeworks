def is_anagram(test, original):#შემოაქვს 2 ცვლადი
    if len(test) != len(original):#თუ ერთმანეთს არ ემთხვევა 
        return False# გამოვსა false

    joined = (test + original).lower() #შეერთება

    for char in joined:#ფორ ლუპი
        if joined.count(char) % 2 != 0:
            return False