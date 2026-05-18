def cons_sum(arr):
    if not arr:
        return 0
    current_sum=arr[0]
    max_sum=arr[0]

    for i in range(1,len(arr)):
        current_sum=max(arr[i],current_sum+arr[i])

    if current_sum>max_sum:
        max_sum=current_sum
        print("Max sum is",max_sum)

print("Find Max consecutive sum in an array:")
arr=[1,-3,2,3,-1]
cons_sum(arr)