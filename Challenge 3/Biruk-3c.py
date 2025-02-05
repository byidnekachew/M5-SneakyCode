# Write a function in Python that accepts a string and returns the number of vowels in the string.

strn = input("Enter text: ").lower()

def vowels(text):
    x = 0
    for i in text:
        if i in ['a','e','i','o','u']:
            x+=1
    return x

print(vowels(strn))