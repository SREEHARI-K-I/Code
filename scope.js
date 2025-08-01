let global="123";
function test(){
  if(true){
    let a=20;
    const b=30;
    var c=40;
  }
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(global);;
console.log(c);