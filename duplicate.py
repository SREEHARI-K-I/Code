def duplicate_element(arr):
    n=len(arr)
    for i in range(n):
        dup=arr[i]
        for j in range(i+1,n):
            if arr[j]==dup:
                print("Duplicate element is:", arr[j])
                break

print("To find duplicate elements in a list")
arr=[1,2,3,4,1,2]
duplicate_element(arr)