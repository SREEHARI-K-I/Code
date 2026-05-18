def missing_number(arr):
    n=len(arr)+1
    for i in range(1,n+1):
        if i not in arr:
            print("Missing number is:",i)

def formula_method(arr):
    n=len(arr)+1
    actual_sum=sum(arr)
    expected_sum=n*(n+1)/2
    missing=expected_sum-actual_sum
    print("The missing number is:",missing)

num=[1,2,3,5,6,7,9]
num1=[1,2,3,5]
missing_number(num)
formula_method(num1)