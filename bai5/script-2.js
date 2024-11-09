//5- 1 so ham built-in
// alert("xin chao cac ban!");

// var result = confirm("Ban da tren 18 tuoi?");
// console.log(result);

// var result = prompt("Nhap n = ");
// console.log(result);
// console.warn(result);
// console.error(result);



// setTimeout(function(){
//     console.log("a")
// },1000);

// setInterval(function(){
//     console.log("b")
// },1000);

// var b = setInterval(function(){
//          console.log("b")
//      },1000);
// setTimeout(function(){
//     clearInterval(b)
// },5000)

//type of

// var a = 10;
// var b = "Nội dung...";
// var c;
// var d = null;
// var e = true;
// console.log(typeof a); // number
// console.log(typeof b); // string
// console.log(typeof (a + b)); // string
// console.log(typeof c); // undefined
// console.log(typeof d); // object
// console.log(typeof e); // boolean
// console.log(typeof a == "number"); // true

// lam viec voi string

//length

// var fullName = `Le Van A`;
// 	console.log(fullName.length);


//7.2. indexOf()

// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.indexOf("Tôi")); // Trả về 10
// console.log(myString.indexOf("Hải")); // Trả về -1
// console.log(myString.indexOf("Nam")); // Trả về 18
// console.log(myString.indexOf("nam")); // Trả về -1
// console.log(myString.indexOf("Tôi", 11)); // Trả về 23

//7.3. lastIndexOf()

// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.lastIndexOf("Tôi", 24)); // Trả về 23
// console.log(myString.lastIndexOf("Tôi", 22)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 10)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 9)); // Trả về -1

//7.4. slice()

// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.slice(10, 21)); // Tôi tên Nam
// console.log(myString.slice(0)); // Lấy toàn bộ chuỗi
// console.log(myString.slice(0, 1)); // X (Lấy ký tự đầu tiên của chuỗi)
// console.log(myString.slice(-1)); // . (Lấy ký tự cuối cùng của chuỗi)
// console.log(myString); // Vẫn giữ nguyên chuỗi gốc

// 7.5. replace()

// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.replace("Tôi", "Mình"));
// console.log(myString.replace(/Tôi/g, "Mình"));

//7.6. toUpperCase() và toLowerCase()

// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());

// 7.7. trim()

// var myString = ` Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi. `;
// console.log(myString);
// console.log(myString.trim());

// 7.8. charAt()

    // var myString = `Đặng Phương Nam`;
    // console.log(myString.charAt()); // Lấy ký tự đầu tiên
    // console.log(myString.charAt(0)); // Lấy ký tự đầu tiên
    // console.log(myString.charAt(1)); // Lấy ký tự thứ 2
    // console.log(myString.charAt(myString.length - 1)); // Lấy ký tự cuối cùng

//7.9. split()

// var myString = `HTML5, CSS3, Javascript`;
// console.log(myString.split()); // Cả string là 1 phần tử
// console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
// console.log(myString.split(", ")); // Mỗi từ là 1 phần tử
// console.log(myString.split(", ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử

// var list = ["HTML5", "CSS3", "Javascript","noteJs"];
// 	console.log(list.splice(1 , 1, "Bootstrap 4", "ReactJS"));
// 	// Trả về: ["Javascript"]
// 	console.log(list);
// 	// Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS"]

// var list = ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"];
// 	console.log(list.slice(3)); // Trả về: ["Bootstrap 4", "ReactJS"]
// 	console.log(list.slice(1, 3)); // Trả về: ["CSS3", "Javascript"]
// 	console.log(list.slice(-4, -5)); // Trả về: ["Javascript", "Bootstrap 4"]
// 	console.log(list);
// 	// Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
