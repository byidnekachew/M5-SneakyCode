# Write a program in Python that stores student names and their grades in a dictionary, and prints each student's name and grade.

gradeLst = {
    'John' : 98,
    'Abby' : 56,
    'Stacey' : 73,
    'James' : 84
}

for i in gradeLst:
    print(i + ": " + str(gradeLst[i]))