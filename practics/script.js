"use strict";
// const sum=function(a,b){
//     return a+b;
// }
// console.log(sum(3,5));

// const sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(3,5));

// function test() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);        
//     }   
// }
// test(1,2,3,4,5)

// const test=()=> {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);        
//     }   
// }
// test(1,2,3,4,5)

// function test() {
//     console.log(this);
// }

// const getSum=()=>{
//     console.log(this);
// }

// test();
// getSum();

// let stu={
//     name:"Ilham",
//     surname:"Abasli",
//     age:20,
//     fullName:()=>{
//         console.log(this);
//     },
//     fullData:function(){
//         console.log(this.name+"-"+this.surname+"-"+this.age);
//     }
// }
// stu.fullData();
// stu.fullName();

 
// function showResult(num1,num2) {
//     let str="Your result:";
//     let res=sum(num1,num2);
//     console.log(str+""+res);
// }
// function sum(a,b){
//     return a+b;
// }
// showResult(3,7)

// function showNums(firstNum){
//     console.log(firstNum);
//     let nextNum=firstNum-1;
//     if (nextNum>0) {
//         showNums(nextNum);
//     }
// }
// showNums(5)


// function getFactorial(num){
//     let nextNum=num-1;
//     if (num===0 || num==1) {
//         return 1;
//     }
//     return num*getFactorial(nextNum);
// }
// console.log(getFactorial(5));


// function sumNums(arr,callback){
//     let sum=0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum+=item;
//         }
//     }
//     return sum;
// }

// function sumEvenNums(arr) {
//     let sum=0;
//     for (const item of arr) {
//         if (item%2==0) {
//             sum+=item;
//         }
//     }
//     return sum;
// }

let nums=[1,2,3,4,5,6]
// console.log(sumOddNums(nums));
// console.log(sumEvenNums(nums)); 


// function sumOdd(n){
//     return n%2==1;    
// }

// function sumEven(n){
//     return n%2==0;    
// }

// function sumNums(arr,callback){
//     let sum=0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum+=item;
//         }
//     }
//     return sum;
// }

// console.log(sumNums(nums,sumOdd));

// let result=nums.filter(m=>m>3);
// console.log(result);

//  function test(n){
//     return n>3;
//  }