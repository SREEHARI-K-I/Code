var r=require("readline-sync")
count=0
str=r.question("Input a string without spaces or special characters ")
function nonrepeatchar(str){
    let charCount={}
    for(i=0;i<str.length;i++){
      let char=str[i]
      if(charCount[char]){
        charCount[char]++
      }
      else{
        charCount[char]=1
      }
    }
    for(let char in charCount){
        if(charCount[char]==1){
            count++
        }
    }
    console.log("Number of nonrepeating characters: "+count)
}
nonrepeatchar(str)