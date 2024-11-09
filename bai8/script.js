// console.log(window)

// const inforuser = {
//     name : "Le Van A",
//     render : () =>{
//         console.log("OK");
//     }
// };

// inforuser.render();

//  console.log(window);
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// 2.3 window.Open()

// const openTab = () =>{
//     window.open("https://sinhvien.uneti.edu.vn/dashboard.html",
//         "_blank",
//         "width = 1200, height =600 , left = 100, top =50");
// };

// 2.4 window.close()
// var  tab;   
// const openTab = () =>{
//     tab = window.open(
//         "https://sinhvien.uneti.edu.vn/dashboard.html",
//         "_blank",
//         "width = 1200, height =600 , left = 100, top =50");
// };

// const closeTab = () =>{
//     tab.close();
// };

// 3. bom screen
// console.log(window);
// console.log(screen.height);
// console.log(screen.width);

//4.1 boom location

// console.log(location);

//4.2 reload

// const reloadPage = ()=>{
//     location.reload();
// };

// setInterval(() => {
//     location.reload();
// }, 3000);

//4.3

//http://127.0.0.1:5500/bai8/index.html?search=test123#abc

// console.log(location);

// 5.1 boom history

// console.log(history);
// history.back();

// const goBack = ()=>{
//     history.back();
// };

// 6. boom navigator

// console.log(navigator);

// 7, 8 popup
// console.log(window)

//9 cookies
// tao cookie
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + "; " + expires;
//     }

// const fullname = prompt("Nhap ten cua ban");
// console.log(fullname);

// setCookie("fullname", fullname, 3);

// document.cookie = `fullname=${fullname}` ;

// lay cookie
// const cookie = document.cookie;
// console.log(cookie)

// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(";");
//     for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == " ") {
//     c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//     return c.substring(name.length, c.length);
//     }
//     }
//     return "";
//     }

// const fullname = getCookie("email");
// console.log(fullname);

// xoa cookie

// function deleteCookie(cname) {
//     document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
//     }

// deleteCookie("phone");

