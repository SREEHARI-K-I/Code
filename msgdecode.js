var r=require("readline-sync")
count=0
str=r.question("Enter a string: ")
str1=str.match(/[a-zA-z]/g)
console.log("Extracted string is: "+str1)
str=str1.join("")
str2=str.toUpperCase()
console.log(str2)
char=str2.split("").reverse()
console.log(char)
for(i=0;i<char.length;i++){
    if("AaEeIiOoUu".includes(char[i])){
        count++
    }
}
console.log("The number of vowels in string is: "+count)