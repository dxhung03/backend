// ● DOM document: Để chứa toàn bộ các phần tử HTML.
// ● DOM element: Để lấy ra các thẻ HTML.
// ● DOM HTML: Để thay đổi nội dung và thuộc tính của các thẻ HTML.
// ● DOM CSS: Để thay đổi CSS của thẻ HTML.
// ● DOM Event: Để gán các sự kiện vào các thẻ HTML.
// ● DOM Listener: Để lắng nghe các sự kiện tác động lên thẻ HTML.
// ● DOM Navigation: Thể hiện mối quan hệ cha - con của các thẻ HTML.
// ● DOM Nodes: Để thao tác với HTML thông qua đối tượng (Object).

// const h2_01 = document.getElementById("h2-01");
// console.log(h2_01)

//2.2

// const listH2 = document.getElementsByTagName("h2");
// console.log(listH2)
// for (const h2 of listH2){
//     console.log(h2)
// }

// 2.3

// const listInfo  = document.getElementsByClassName("title");
// console.log(listInfo);
// for (const title of listInfo){
//     console.log(title);
// }

// 2.4

// const title = document.querySelector(".title");
// console.log(title);

// const tagA = document.querySelector("#menu li a");
// console.log(tagA)

// 2.5

// const listTagA = document.querySelectorAll("#menu li a");
// console.log(listTagA);
// 3.1

// const innerHtmlH2_01 = document.querySelector("#h2-01").innerHTML;
// const innerTextH2_01 = document.querySelector("#h2-01").innerText;

// console.log(innerHtmlH2_01)
// console.log(innerTextH2_01)

// document.querySelector("#h2-01").innerHTML = "test"
//3.2

// const test = document.querySelector("#h2-02").getAttribute("class");
// console.log(test)

// document.querySelector("#h2-01").setAttribute("class","test-2")

// setTimeout(() => {
//     const test = document.querySelector("#ads-1").setAttribute("class", "ads");
// }, 3000);


// 4
// const test = document.querySelector("#h2-02");
// test.style.fontSize = "60px";
// test.style.color = "blue";

