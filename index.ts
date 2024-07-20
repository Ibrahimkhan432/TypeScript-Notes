// function
// const  add = () =>{
// or
// function add(a:number,b:number){  //assign type number
//     return a+b
// }
// console.log(add(2,4));

// let string = "value"
// string = 2              //typescript himself give error without define type of string

// let nanValue:number = NaN
// console.log(nanValue);

// *boolean
// let isStarted:boolean = true;
// let isEmpty:boolean=false;

// function chekNumber(a:number){
//   a%2===0?console.log("number is Even"):console.log("number is Odd");
//     ;
// }
// console.log(
//  chekNumber(2));

// *any
// let randomValue:any = 3;   //any means no type restriction (can redecalerd numer value into string )
// randomValue = "string"

// function greet(name:string, id:number){
//     console.log(`welcome ${name} and your id is ${id}`);
// }
//  greet("ibrahim",178064);

//*arrow Ts function
//  const greet = (name:string, id:number):string => {
//     return `welcome ${name} and your id is ${id}`;
// }
// const greetArg = greet("ibrahim",17806);
// console.log(greetArg);

// const palindrome= (palind:string):boolean  => {
// let palinValue = palind.split("").reverse().join("");
// return palinValue === palind
// }
// console.log(palindrome("010"));

//*Array
//  let arr1:number[] = [1,2,3,4,5];

//  let arr2:string[] = ["a","b","c"]

//  let arr3:string[]  = new Array("a","b","c");

//  let arr4:string[] =Array.of("a","b","c")
// console.log(arr4[1]);

// let arr5 = [ true,false,true]
// console.log(arr5);

let myObj = {
    fName: "ibrahim",
    lName: "Khan"
}

let {fName,lName} = myObj
fName = "ibrahim2"
console.log(
    fName
);
