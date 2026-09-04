//Problem solving Part-02  // From lightOJ Platform

//Factorial 100 (solved);

function factorial (n){
  let ans = 0;
  while(n >= 5){
   ans = ans + parseInt(n / 5)
   n = parseInt( n / 5);
  }

  return ans;
}

let result = factorial(88)
console.log(result)



//Box 1 (Unsolved)

function input(n){
  let length = n;
  let str1 = ``;
  let margeStr = ``;

 while(n--){
  str1 = `${str1}*`
 }

 for(let i = 0; i < length; i++){
  margeStr = `${margeStr}${str1}\n`;
 }

 return margeStr;
}

let x = input(8);
console.log(x)



//Descending Number(Unsolved)

 function xy(){
  let line = ``;
  for(let i = 1000; i > 0; i-- ){
    line = `${line}${ i % 5 == 0 ? '\n':''} ${i}`
  }
  console.log(line)
 }


xy();


//Tomi Mia's Probability (Unsolved)

