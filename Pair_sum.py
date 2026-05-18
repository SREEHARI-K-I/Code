def pair_sum(arr,sum):
    n=len(arr)
    found=False
    for i in range(0,n):
        n1=arr[i]
        for j in range(i+1,n):
            if arr[j]+n1==sum:
                print("The target sum obtaining pair is:",n1,arr[j])
                found=True
                break

    if not found:
        print("There is no target sum pair")

arr=[1,3,4,7,8]
print("Program to find pair from list which makes target sum: ")
sum=int(input("Enter the target sum: "))
pair_sum(arr,sum)
