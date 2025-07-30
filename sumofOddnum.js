
/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
let i=91,number1=129,j=51,number2=85,sum=0,sum2=0;

for(i;i<=number1;i++){
    if(i%2===1){
        sum=sum+i;
        console.log("Result=",sum);
    }
}
console.log("sum of even number");
for(j;j<=number2;j++){
    if(j%2===0){
        sum2=sum2+j;
        console.log("Result=",sum2);
    }
}