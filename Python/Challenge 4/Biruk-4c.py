# Create an array of numbers in Python and write a function to find the highest number in the array.

nums = [6,12,8,4,36]

def highNum(lst):
    x = lst[0]
    for i in lst:
        if x<i:
            x=i
    return x

print(nums)
print("Highest num: " + str(highNum(nums)))