//1.1

//vd 1
// function tong(a,b){
//     return a+b;
// }
// var ketqua = tong(20,30);
// console.log(ketqua);

// 1.2 Declaration function (Hàm định nghĩa)
// function tong(){
//     let tong =0 ;
//     for (const item of arguments) {
//         tong +=item;
//     }
//     return tong;
// }
// var ketqua = tong(20,30,20,25);
// console.log(ketqua);
// 1.3Expression function (Hàm biểu thức)
// var tong = function (){
//     let tong =0 ;
//     for (const item of arguments) {
//         tong +=item;
//     }
//     return tong;
// }
// var ketqua = tong(20,30,20,25);
// console.log(ketqua);

// 1.3Arrow function (Hàm mũi tên)
// var tong = (...arguments)=>{
//     let tong =0 ;
//     for (const item of arguments) {
//         tong +=item;
//     }
//     return tong;
// }
// var ketqua = tong(30,40,50,60,70);
// return(ketqua)

//vd 1.3

// var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const tongsochan = ()=>{
//     let tong = 0 ;
//     for(let i = 0; i<mang.length; i++){
//         if(mang[i]%2==0){
//             tong+=mang[i];
//         }    
//     }
//     return tong;
// }
// const kq = tongsochan(mang);
// console.log(kq)

// vd 1.4
// const bt = (n)=>{
//     let kq =0;
//     for(let i=1; i<=n; i++){
//         kq +=i/n;
//     }
//     return kq;
// }
// let n;
// do{
//     n = parseInt(prompt("Nhap n :"));
//     if(n<=0){
//         console.log("vui long nhap so lon hon 0");
//     }else{
//         const kq = bt(n);
//         console.log(kq);
//     }
// }while(n<=0)

// 2
// const a =10;

// try {
//     console.log("a = "+a);
// } catch (error) {
//     console.log(error);
// }finally{
//     console.log("luon chay vao day")
// }

// 3

// var infouser = {
//     name : "nguyen van a"
// }
// infouser.phone = "0312312321";

// console.log(infouser)

// 4.1 foreach()

// const number = [1,2,3,4,5,6,7,8,9,10];

// let sum = 0;
// number.forEach((item, index, arrayorg)=>{
//     sum += item;
    
    
// });
// console.log(sum);

// number.forEach((item, index)=>{
//     number[index] = item + 1;
// })

// console.log(number);

// 4.2 every()

const monhoc =[
    {
        ten : "toan",
        diem : 8.6
    },
    {
        ten : "van",
        diem : 9.2
    },
    {
        ten : "ly",
        diem : 10
    },
    {
        ten : "hoa",
        diem : 4
    }
];

// const hsgioi = monhoc.every((item) => {
//     return item.diem >=8;
// });
// console.log(hsgioi);

// if(hsgioi ==true){
//     console.log("Day la hoc sinh gioi");
// }else{
//     console.log("Day ko phai hoc sinh gioi");
// }

// 4.3 some()
// const olailop = monhoc.some((item) => {
//     return item.diem <=4;
// });
// console.log(olailop);

// if(olailop ==true){
//     console.log("O lai lop");
// }else{
//     console.log("Khong o lai lop");
// }

//4.4 find()

// const ktra = monhoc.find((item) =>{
//     return item.ten == "hoa";
// });
// console.log(ktra)

//4.5 filter()

// const ktra = monhoc.filter((item) =>{
//     return item.ten == "hoa";

// });
// console.log(ktra)

//4.6 map
// console.log(monhoc);

// const mhocmoi = monhoc.map((item) =>{
//     return item.diem;
// });
// console.log(mhocmoi)

// so sanh foreach voi map

// console.log(monhoc);

// monhoc.forEach((item, index) => {
//     monhoc[index] = item.ten;
// });
// console.log(monhoc)

// 4.8 reduce()

// const number = [1,2,3,4];

// const sum = number.reduce((total, item) => {
//     console.log(total);
//     console.log(item);
//     console.log("-------");
//     // return total+=item;
// });

// console.log(sum)