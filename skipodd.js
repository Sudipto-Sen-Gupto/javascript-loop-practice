/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

let i=1, numbers=40;
while(i<=numbers){
    if(i%2===1){
        i++;
          continue;
          
    }
    console.log(i);
    i++;
}