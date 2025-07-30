/***

Generate a multiplication table for number 9

 */


/*programming hero*/ 

let i=1, lastNum=10,multiplyBy=9,multiplication;
for(i;i<=lastNum;i++){
   
    multiplication=multiplyBy*i;
    console.log(multiplyBy,"*",i,"=",multiplication);
}