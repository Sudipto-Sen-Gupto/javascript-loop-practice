/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

let firstNum=1,lastNum=200;
while(firstNum<=lastNum){
    if(firstNum===100){
        firstNum++; break;
       
    }
    firstNum++;
    console.log(firstNum);
    
}