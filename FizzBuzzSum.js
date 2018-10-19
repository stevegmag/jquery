/*
for each value upto and including 1000...
print the number and fizz if the number is divisible by 3
print the number and buzz if the number is divisible by 5
print the number and Fizz if the number is divisible by both 3 and 5
*/

let sum = 0;
for(var i = 1; i<=1000; i++ ) {
  let three = i%3;
  let five = i%5;
  if (three == 0 && five == 0) {
    console.log( i + ' :: fizzbuzz' );
  }
  else if (three == 0 && five != 0) {
    sum += i;
    console.log( i + ' :: fizz' );
  }
  else if (three != 0 && five == 0) {
    sum += i;    
    console.log( i + ' :: buzz' );
  }
}
console.log( "FizzBuzzSum:: "+sum ); 



//  sum all values upto and including 1000 that are divisible by either 3 or 5
let sum = 0;                                                                                                                                  
for(let i = 1; i <= 1000; i++) {                                                                                                              
   if((i % 3 == 0) || (i % 5 == 0)) {                                                                                                        
       sum += i;                                                                                                                             
   }                                                                                                                                         
}                                                                                                                                             
console.log('sum', sum);
