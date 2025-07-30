/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */
/*programming hero*/
console.log("Odd number");
let i=61, number=100,j=78,secondNumber=98;
for(i;i<=number;i++){
    if(i%2===1)
    {
        console.log("The odd number is=",i);
    }
}
console.log("Even number ");
for(j;j<=secondNumber;j++){
    if(j%2===0)
    {
        console.log("The even number is=",j);
    }
}