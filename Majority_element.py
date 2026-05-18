def majority_element(arr,n):
    freq={}
    for num in arr:
        if num in freq:
            freq[num]+=1
        else:
            freq[num]=1
    if freq[num]>n/2:
        print("Majority element is:",num)

print("To find majority element")
n=int(input("Enter the number of elements:"))
arr=list(map(int,input("Enter the array:").split()))
majority_element(arr,n)