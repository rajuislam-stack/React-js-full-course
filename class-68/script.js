//Problem Solving Part-01 //Problem solving from Lightoj oneline judge platform.


//Factorial 100 (Unsolved//This approch to solve this problem is not valid)

function factorial(input){
  let len = parseInt(input);
  let factorial = 1;
 for(let i = 2; i <= len; i++){
  factorial = factorial * i ;
 }


 let zeroCount = 0;
 let factorialLen = BigInt(factorial).toString();
  
 console.log(factorial)
 for(let i = 0; i < factorialLen.length; i++){
  if(factorialLen[i] == '0'){
    zeroCount = zeroCount + 1;
  }
  else{
    zeroCount = 0 ;
  }
 }

 return zeroCount ;
}


let x = factorial("7")

console.log(x)




//Factorial ( n! ) — Short Note 📝

// Factorial হলো ১ থেকে n পর্যন্ত সব ধনাত্মক পূর্ণসংখ্যার গুণফল।

// Formula: n! = n × (n−1) × ... × 2 × 1
// Special Case: 0! = 1
// Example: 5! = 5 × 4 × 3 × 2 × 1 = 120

//💡 মনে রাখার ট্রিক:
// "Factorial = ১ পর্যন্ত উল্টো দিকে সব সংখ্যাকে গুণ করা।" or Vice Versa

// উদাহরণ:

// 3! = 6
// 4! = 24
// 5! = 120