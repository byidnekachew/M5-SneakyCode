# Write a program in Python that checks if a number is positive, negative, or zero, and displays the appropriate message.

num = int(input("Enter a number: "))
if num == 0:
    print("Zero num")
elif num<0:
    print("Negative num")
else:
    print("Positive num")