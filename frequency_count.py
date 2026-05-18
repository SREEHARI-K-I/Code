def frequency(arr):
    freq={}
    for i in arr:
        if i in freq:
            freq[i]+=1
        else:
            freq[i]=1
    return freq

n=int(input("Enter the number of elements: "))
arr=list(map(int,input("Enter the elements: ").split()))
result_dict=frequency(arr)

print("Element frequencies:")
for element,count in result_dict.items():
    print(f"{element}: {count}")