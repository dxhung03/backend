//1. scope
    //toan cuc
// var a = 10;
// function test (){
//     console.log(a);
// }
// test();

//cuc bo

// vd1
// function test(){
//     var a = 10;
//     console.log(a);
// }
// test();
// console.log(a);
//vd2
// function test1(){
//     var a =10;
//     function test2(){
//         var b=20;
//         console.log(a);
//     }
//     test2();
// }
// test1();

// 2.1
// var co tinh hoisting
// console.log(a);
// var a ="hello word";

// let const ko co tinh hoisting
// console.log(a);
// let a =10;

// 2.3

//declaration function co tinh hoisting
// test();
// function test(){
//     console.log("ok");
// }

// expression arrow function ko co tinh hoisting
// test();
// var test = function(){
//     console.log("ok");
// }

// 3.1
// console.log(this);

//3.2
// const button = document.querySelector("#button");

// button.addEventListener("click", function(){
//     console.log(this)
// })

//3.3
// var inforUser = {
//     fullname : "Do Xuan Hung",
//     email : "dohung0708@gmail.com",
//     phone : "0312312313",
//     getPhone : function (){
//         // console.log(this)
//         console.log(inforUser.phone)
//         console.log(this.phone)
//     }
// }

// inforUser.getPhone();

//3.4

