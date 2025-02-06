# Write a program in Python that calculates the factorial of a given number using a loop.

num = int(input("Enter a num: "))
x = 1
for i in range(x,(num+1)):
    x*=i

print(str(num) + "! = " + str(x))