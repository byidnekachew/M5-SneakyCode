# Write a function in Python that checks if a number is even or odd.

usrNum = int(input("Enter num: "))

def oddEven(num):
    if num%2==0:
        return "Even"
    else:
        return "Odd"
    
print(oddEven(usrNum))