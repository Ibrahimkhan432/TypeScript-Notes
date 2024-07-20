// *TypeScript
//object
// type objType ={
//     id:Number,
//     name:String,
// }
// let a: objType[]=[
//     {id:1,name:"abc"},
// ]

// type objType={
//     id:number,
//     name:string,
// age?:20,                      //? means  optional
// status:"enable" | "disable",     
// };

// let a:objType[]=[
//     {id:1,name:"abc",status:"disable"},   //ststus will give suggestion

// ]

// interface objInterface {}  //interface means no need equal sign

// * connect two objects
// interface previousObj{
//     id:number,
//     name:string,
// }
// interface currentObj extends previousObj{
//     age:number,
//     }
//  let obj:currentObj={   // merge properties of both objects
//     id:1,
//     name:"abc",
// age:20,
//  }

 //*array function
//  let func=(a:number, b:number)=>{
//     return a+b;
//  }
//  console.log(func(2,4));

// let func =() : void =>{};  use string or anything

// let func =():string =>"";  use only string

// *nullish condition
// let a = "string";
//let b = a?a:"--";  //if a is null or undefined then it will give --
//let b = a??"--";  nullish syntax //if a is null or undefined then it will take default value
