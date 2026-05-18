def remove_duplicate(arr):
    i=0
    while i < len(arr):
        check = arr[i]
        for j in range(len(arr)-1,i,-1):
            if arr[j]==check:
                arr.pop(j)
        i+=1

    print("The final array is:",arr)

print("To remove duplicates")
arr=[2,1,3,1,2,4]
remove_duplicate(arr)