// create variable in javascript
// tên biến có phân biệt chữ hoa và thường, chữ và số\

// variable declaration
// var fullName = 'Chau Thi Ngoc Quyen';
// var age = 26;

// Call the notification function
//Show each notification
// alert(fullName);
// alert(age);

// built-in function
/* 1. alert
    2. console
    3. confirm
    4. prompt
    5. set timeout
    6. set interval
 */

// console.log(fullName)

// confirm('confirm you are of age?')
// prompt('confirm you are of age?')

// setTimeout cho một cái hàm chạy sau bao nhiêu giây
// setTimeout(function () {
//     alert('Thong bao')

// }, 1000)
// cho một đoạn code chạy trong 1 khoảng thời gian mms
// for a piece of code to run for a period of time mms

// setInterval(function () {
//     console.log('Thong bao' + Math.random())

// }, 1000)
// ỉn ra dãy số random



// arithmetic operators
// var number = 6;
// var output = number++ * 2 + number-- * 2;



// console.log(output)


// if (a > 0 && b > 0) {
//     alert('Dung');
// }
// else {
//     alert('Sai')
// }

// Boolean
// var a = 1;
// var b = 2;
// var c = 3;

// var isSuccess = a > b;
// console.log(isSuccess)

// if (a < 0 || b < 0) {
//     console.log('Điều kiện đúng')
// }
// else {

//     console.log('Điều kiện sai')
// }

// var isSuccess = null;
// if (isSuccess) { console.log(isSuccess) }
// else {
//     console.log("false")
// }
// var id3 = Symbol('id')

// var id = Symbol('id2')
// console.log(id != id3)

// var myFunction = function () { alert('hu. chào nha'); }
// myFunction()

// var myObject = {
//     name: 'Quyen',
//     age: 18,
//     address: 'Hanoi',
//     myFunction() {

//     }
// }
// console.log('myObject', myObject)

// var myArray = [
//     'js',
//     'php',
//     'ruby'
// ];
// console.log(myArray)

// console.log(typeof a)



// var result = 'A' && null && 'B' && NaN;
// console.log(result)

// các cách tạo chuỗi
// var fullName = 'Quyen';
// var fullName1 = new String('Quyen');

// Working with strings
// var myName = '       Hoc JS tại JS cua JS F8       ';

// 1. length
// console.log(myName.length)
// console.log(myName)

// 2. Find index
// console.log(myName.indexOf('JS'));
// vị trí bắt đầu tìm kiếm là vị trí thứ 6
// console.log(myName.indexOf('JS', 6));
// vị trí cuối cùng có xuất hiện JS
// console.log(myName.lastIndexOf('JS'));
// Tìm kiếm phát hiện vị trí có chữ JS tìm thấy đầu tiên
// console.log(myName.search('JS'));

// 3. Cut String
// console.log(myName.slice(4, 6))
// cắt bát đầu từ vị trí thứ 4 đến vị trí thứ 6
// console.log(myName.slice(0))
// cắt ra nguyên chuỗi
// console.log(myName.slice(-2,))
// cắt ngược từ phải sang trái

// 4. Replace - ghi đè
// console.log(myName.replace('JS', 'Javascript'))
// thay thễ chữ phát hiện đầu tiên
// console.log(myName.replace(/JS/g, 'Javascript'))
// thay tất cả các chữ JS trong chuỗi thành chữ Javascript

// 5. Convert to upper case - chuyển tất cả các chữ có trong chuỗi thành chữ in hết
// console.log(myName.toUpperCase())

// 6. Convert to lower case - chuyển sang chữ thường
// console.log(myName.toLowerCase())
// console.log(myName.toLocaleLowerCase())
// console.log(myName.toLocaleUpperCase())

// 7. Trim - xử lí dữ liệu nhập vào của người dùng (vd: nhập thừa dấu cách ở đầu hoặc cuối câu)
// - loại bỏ khoảng trắng thừa ở hai đầu
// console.log(myName.trim())
// console.log(myName.trim().length)

// 8. Split -
// var languages = 'Javascript';
// console.log(languages.split(''))

// 9. Get a character by index - lấy ra kí tự có vị trí tương ứng
//const myString2 = 'quyen ne';
// console.log(myString2.charAt(1))
// console.log(myString2[2])
// console.log(typeof myString2[10])


// Kiểu số (Number)
// 1. Tạo giá trị Number
// - các cách tạo:
// var age = 18;
// var PI = 300.222334555;

// giống kiểu khởi tạo một đối tượng
// var otherNumber = new Number(9);

// cách xem type
// console.log(typeof otherNumber)

// Check if value is NaN or not
// var result = 20 / 'sf';
// console.log(isNaN(result))

// làm việc với Number - to string - chuyển Number thành String
//console.log(age.toString())

// to Fixed - làm tròn số thập phân
//console.log(PI.toFixed()) //tương đương với 0
//console.log(PI.toFixed(2)) // làm tròn 2 chữ số thập phân


// Tạ0 Mảng - có thể chứa tất cả kiểu dữ liệu - typeOf là object
// var languages = [
//     'Javascript', 'PHP', 'C', 'Ruby', NaN, function () { }];
// console.log(typeof languages)

// có phải là mảng hong - đây là cách kiểu tra chính xác
// console.log(Array.isArray(languages))
// console.log(Array.isArray(new Array(1, 3, 5, 6)))

// cách 2 tạo mảng:
// var languages2 = new Array(
//     'Javascript', 'PHP', 'C', 'Ruby', NaN, function () { });
// console.log(languages2)

// Truy xuất mảng
// độ dài mảng
// console.log(languages.length)
// lấy giá trị theo chỉ mục
// console.log(languages[2])

//join - thay đổi dấu phấy mặc định khi dùng toSting chuyển mảng sang chuỗi
// console.log(languages.join('')) // phân cách bằng j thì điền vào trong dấu ''

// pop - xóa phần tử cuối mảng và trả về phần tử đã xóa
// console.log(languages.pop())

// Push - thêm 1 hoặc vài phần tử ở cuối mảng
// console.log(languages.push('Dart', 'Java'))
// console.log(languages)

// Shift - xóa đi phần tử ở đầu mảng và trả về phần tử đã xóa
// console.log(languages.shift()) // xóa hết thì giá trị trả về là undefined

// Unshift - một phần tử vào đầu mảng và trả về độ dài mới của mảng
// console.log(languages.unshift('Dart'))
// console.log(languages)

// Splicing - có thể xóa, cắt, chèn phần tử mới vào mảng
// truyền chỉ mục (vt bắt đầu, số lượng chữ muốn xóa)
// languages.splice(2, 2) - xóa

// languages.splice(2, 0, 'C++', 'Dart') //  vị rí sẽ chèn, có xóa không, chèn chữ j vào
// console.log(languages)

//concat - nối 2 array
// var languages1 = [
//     'English', 'Vietnam', 'Japan'
// ]
// console.log(languages.concat(languages1)) // chèn vào cuối


// Slicing - căt một vài element của mảng
// console.log(languages.slice(1,2 )) // (vị trí bắt đầu, vị trí cắt) - trả về phần tử đã cắt
// console.log(languages.slice(0)) - copy mảng
// console.log(languages.slice(1,)) // cắt đến hết mảng


// --------------------------HÀM TRONG JS -----------------------------------
// Hàm trong JS
//function writeLog(message) {
//   console.log(typeof message) // khi định nghĩa và nhắc tới thì gọi là tham số
// } // có thể xem kiểu dữ liệu của nó
// call function
//writeLog('Test message');//  khi gọi và truyền vào được gọi là đối số
//  trong đây có thể truyền vào tất cả các loại kiểu dữ liệu như sô, chuỗi, mảng

// truyền vào nhiều tham số trong 1 hàm
// function Test(msg1, msg2) {
//     console.log(msg1)
//     console.log(msg2)
// }
// Test('tehzhkj', 'hjsahfawh')

// function test() {
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString)
// }
// test('log1', 'log2', 'log4')


// return trong js
// var isConfirm = prompt('message');
// console.log(isConfirm)
// bật lên thông báo có chữ cancel và oke

// function plus(a, b) {
//     return a + b;
// }
// var result = plus(3, 8);
// console.log(result)

// viết một hàm ngẫu nhiên

// function showMe() {
//     alert('Have a good day');
// }

// showMe();

// Polyfill

// if (!String.prototype.includes){
//     String.prototype.includes = function(search, start){
//         'use strict';
//     }
//     // kiểm tra tính hợp lệ
//     if (search instanceof RegExp){
//         throw TypeError('first argument must not be a RegExp');
//     }
//     if (start === undefined){ start = 0}
//     return  this.AbortController.indexOf(search, start) !== -1;
// }

//  Object trong Js

// var keyEmail = 'email'

// var myIfo = {
//     name: 'Quyen',
//     age: 18,
//     address: 'HCM, Vn',
//     'full-name': 'cờ tờ nờ quờ',
//     [keyEmail]: 'ngocquy@gmail.com',
//     getName: function () {
//         return this.name; //this là myIfo
//     }
// }
// console.log(myIfo.getName())
// myIfo.email = 'ngocquy@gmail.com';
// thêm một key-value vào object ở cuối
// myIfo['so-thich'] = 'an sau rieng';
// console.log(myIfo['so-thich']);

// var myKey = 'name'

// lấy key ra
// console.log(myIfo.name);

//console.log(myIfo[myKey]) // gọi thông qua biến ở ngoài

// xóa key-value
// delete myIfo.age
// console.log(myIfo)


// Object contructor

// đối tượng tạo bởi thuộc tính này sẽ có thuộc tính
// firsName bằng với tham số firstName được truyền vào khi khởi tạo đối tượng

//var User = function()
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// cách khởi tạo một đối tượng
// var author = new User('Quyen', 'Chau', 'Avatar');
// var user = new User('Vu', 'Nguyen', 'Avatar');





// thêm một thuộc tính cho object constructor này //sẽ được nhìn thấy trong proto
// User.prototype.className = 'F8';
// User.prototype.getClassName = function () {
//     return this.className;
// }
// console.log(author.getClassName())
// console.log(user)


// trả về mô tả - oject constructor
//console.log(author.constructor)
// so sánh xem có phải User không
//console.log(author.constructor === User)

// thêm một thuộc tính trong object constructor
// author.title = 'Chia sẽ dạo tại F8';
// user.comment = 'Tuyệt quá ad ơi';
// console.log(author.getName())
// console.log(user.getName())

// thực hành tạo một object constructor
// var Object = function (order, objectName) {
//     this.order = order;
//     this.objectName = objectName;
//     this.getFullName = function () {
//         return `${this.order} ${this.objectName}`
//     }

// }

// var Math = new Object(1, 'Toán');
// var Physical = new Object(2, 'Vật Lý');

// Physical.note = 'Môn vật Lý';

// console.log(Physical.getFullName())


// date object in js

//var data = new Date(); //trả ra typeOf là đối tượng
//var data = Date();// trả ra typeOf là string
// console.log(data.getFullYear());// lấy ra năm

// var year = data.getFullYear();
// var month = data.getMonth() + 1;
// var day = data.getDate();

// getHours(): trả về giờ, getMinutes(): trả về số phút, getSeconds(): in ra số giaay

//console.log(`${year}/ ${month}/ ${day}`)




//  cấu trúc rẽ nhánh

// var date = 0;
// if (date === 2) {
//     console.log('Home nay la thu 2');
// }
// else if (date === 3) {
//     console.log('Home nay la thu 3');
// }
// else if (date === 4) {
//     console.log('Home nay la thu 4');
// }
// else {
//     console.log('Khong biet :((')
// }


// cấu trúc rẽ nhanh switch

//var date = 10;
// tính từ case đúng và nó sẽ lọt vào tất cả các case còn lại trừ khi gặp break

// switch (date) {
//     case 2:// sd toán tử ===
//         console.log('homnay là thứ 2');
//         break;

//     case 3:
//         console.log('homnay là thứ 3');
//         break;

//     case 4:
//         console.log('homnay là thứ 4');
//         break;
//     default:
//         console.log('không biết')
// }


// toán tử 3 ngôi(ternary operator)

// var course = {
//     name: 'Javascript',
//     coin: 90
// }

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`)
// }
// else {
//     console.log('Miễn phí')
// }

// nếu điều kiện đúng thì lấy ra giá trị là số coin
// var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
// console.log(result)

// var a = 1;
// var b = 2;
// var c = a > b ? 'Lớn hơn' : 'Bé hơn';
// console.log(c)



// For loop
// in ra dãy số tăng dần từ 1 đến 1 nghìn

// var myArray = [
//     'Javascript',
//     'PHP',
//     'Dart',
//     'java',
//     'Ruby'
// ]
// var arrayLength = myArray.length;

// for (var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i]);
// }

//for/in loop

// var myInfo = {
//     name: 'Quyen',
//     age: 18,
//     address: 'HCM city'
// }

// lấy value của keyn- console.log(myInfo[key])
// for (var key in myInfo) {
//     console.log(key) // lấy ra key của object
// }

// for (var key1 in myArray) {
//     console.log(key1)
// }

// var myString = 'tui' + 'Ten' + 'la' + 'Quyen';
// // console.log(myString[0]) -lấy ra từng chữ cái trong chuỗi
// console.log(myString)
// for (var i in myString) {
//     console.log(myString[i])
// }



// var myArray = [
//     'Javascript',
//     'PHP',
//     'Dart',
//     'java',
//     'Ruby'
// ]
// var myInfo = {
//     name: 'Quyen',
//     age: 18,
//     address: 'HCM city'
// }

// var myString5 = 'javascript'

// For/of loop - in ra value của mảng
// for (var value of myArray) {
//     console.log(value)
// }
// console.log(Object.keys(myInfo)) // trả về mảng các key dưới dạng mảng
// console.log(Object.values(myInfo)) // trả về các value dưới dạng mảng

// for (var value of Object.values(myInfo)) {
//     console.log(value)
// }




// While loop -lặp qua một array
// in ra dãy từ 1 đến 1000

// var i = -1;
// var length = myArray.length
// while (i < length) {
//     i++;
//     console.log(myArray[i]);

// }


// Do/while loop - kiểm tra điều kiện từ lần lặp thứ 2 trở đi
// in ra một dãy số tăng dần từ 1 đến 10
// ví dụ chức năng nạp thẻ cào - nếu mạng bị lỗi thì thử lại 3 lần,
//  nếu nó vẫn bị lỗi thì kết thúc

// var i = 0;
// var isSuccess = false;

// do {
//     i++;
//     console.log('Nạp thẻ lần' + i);

//     if (false) {
//         //thành công
//         isSuccess = true;

//     }
// }
// while (!isSuccess && i <= 3) // không thành công thì chạy






//  Sử dụng Break và Continue trong vòng lặp
// break là bỏ qua vòng lặp
// Continue là để bỏ qua một vài lần lặp của vòng lặp

// for (var i = 0; i < 10; i++) {
//     console.log(i);
//     if (i >= 5) {
//         break;
//     }
// }
// loại bỏ số lẻ
// for (var i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i)
// }



// Vòng lặp lồng nhau (Nested loop)
//truy xuất vào phần tử của mảng con và in ra chúng - output dãy số 123456
// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// for (var i = 0; i < myArray.length; i++) {
//     for (var j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]); // lấy mảng con của i sau khi duyệt qua
//     }

// }




//  Ví dụ mở rộng về loop
// in ra dãy số từ 100 về 1

// for (var i = 100; i > 0; i--) { // i > 0 là điều kiện chạy
//     console.log(i);
// }

// for (var i = 0; i < 100; i += 5) {
//     console.log(i)
// }

// for (var i = 100; i >= 0; i -= 5) {
//     console.log(i)
// }



// ----------------MỘT SỐ PHƯƠNG THỨC CỦA ARRAY--------------------------

// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 200
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 500
//     },
//     {
//         id: 5,
//         name: 'Python',
//         coin: 10
//     }

// ]
// Một số phương thức cơ bản về arry

// forEach() -  duyệt qua từng phần tử của mảng

// courses.forEach(function (course, index) {// hàm được truyền vào dưới dạng tham sô được gọi là call back
//     console.log(index, course)
// })
// in ra từng phần tử của mảng


// every() - kt tất cả phần tử trong mảng phải thõa mãn một điều kiện gì đó

// kiểm tra tất cả phần tử trong mãn có phải là khóa học miễn phí hay không
//  có giá trị trả về là kiểu Boolean
// var isFree = courses.every(function (course, index) {
//     return course.coin === 0;
// })
//     ;
// console.log(isFree);
//  mỗi lần lặp thì nó sẽ gọi lại cái hàm isFree ở trên
//  trong hàm: truyền vào từng phần tử
//  kiểm tra lần lượt các phần tử trong mảng từ trên xuống dưới
// trong thực tế: dùng để kiểm tra các bài học, nếu học xong bài này mới được qua bài khác



// Some() - chỉ cần 1 phần tử trog mảng thỏa mãn điều kiện thì trả về đúng và ngừng vòng lặp

// var isFree = courses.some(function (course, index) {
//     return course.coin === 0;
// });
// console.log(isFree)


// find()  - Tìm kiếm và trả về giá trị tìm kiếm (luôn trả về một đối tượng)

// var course = courses.find(function (course, index) {
//     return course.name === 'Ruby';
// })
// console.log(course);


// Filter - tìm và trả về các phần tử thỏa mãn yêu cầu

// var course = courses.filter(function (course, index) {
//     return course.coin === 0;
// })
// console.log(course);
//  tìm số điện thoại trong danh bạ và số điện thoại




// map - chỉnh sửa và thay đổi element của một array

//  thêm chữ khóa học trước mỗi name trong element và
//  bổ sung thêm một trường là coinText có giá trị bằng chữ của coin

// function courseHandler(course, index, originArray) {
//     // console.log(course);
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coinText: `Gia: ${course.coin}`,
//         index: index,
//         originArray: originArray
//         // originArray: courses - tương đương với nhau
//     };
// }
// originArray - array mà bạn sử dụng phương thức map (là cái mảng gốc của chúng ta)

//  lấy ra tất cả tên của các khóa học qua một mảng mới
// function courseHandler(course, index) {
//     return course.name;
// }

// return lại thẻ html
// function courseHandler(course, index) {
//     return `<h2>${course.name}</h2>`
// }

// var newCourses = courses.map(courseHandler);
// console.log(newCourses) // nếu nối nhau bằng chuỗi rỗng thì nó sẽ tạo ra chuỗi





// reduce() - nhận về giá trị duy nhất
// VD: muốn nhận về giá trị tổng số tiền của coin của tất cả khóa học

// cách 1: với vòng lặp
// var totalCoin = 0; // biến lưu trữ

// for (var course of courses) {
//     totalCoin += course.coin;

// }
// console.log(totalCoin)


// cách 2 sử dụng reduce()

// var i = 0

// function coinHandler(accumulator, currentValue)//currentIndex, originArray) // accumulator = 0 (biến lưu trữ); current (giá trị hiện tại), currentIndex chỉ mục của current hiện tại; originArray: array gốc
// //          (biến lưu trữ , giá trị hiện tại, vị trí hiện tại của currentValue)
// {
//     // var total = accumulator + currentValue.coin;
// i++;
// console.table({
//     'lượt chạy: ': i,
//     'Biến lưu trữ: ': accumulator,
//     'Giá khóa học: ': currentValue.coin,
//     'Tích trữ được: ': total,

// }
// )
// console.log(currentValue)
//     return accumulator + currentValue.coin;

// };

// var totalCoin = courses.reduce(coinHandler, 0) // (function(), giá trị khởi tạo của biến lưu trữ) - initial value (khởi tạo) - là giá trị không bắt buộc

// console.log(totalCoin)


// Reduce() - phần hai

// var i = 0;
// var totalCoin = courses.reduce(function (total, course) {
//     i++;
//     console.log(i, total)
//     return total + course.coin

// }, 0) // khi không có giá trị khởi tạo, thì mặc định giá trị ban đầu sẽ là phần tử đầu tiên của mảng

// console.log(totalCoin)
// kq muốn nhận kiểu giá trị nào thì biến khởi tạo phải tạo cùng kiểu dữ liệu với kq


// vd

// var numbers = [100, 200, 220, 480];
// var plusNumber = numbers.reduce(function (plus, number) {
//     return plus + number
// }, 0)
// console.log(plusNumber)



// Flat - ' làm phẳng mảng từ Dept array - Mảng sâu
//  đưa những phần tử nhỏ về cùng một mảng
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

// // ví dụ
// var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
//     return flatOutput.concat(depthItem)
// }, [])
// console.log(flatArray)
// // nếu không đặt giá trị khởi tạo thì nó sẽ lấy 1 làm giá trị khởi tạo
// // mà 1 là kiểu sô, nhưng output ta muốn là một mảng nên ở đây ta phải đặt giá trị khởi tạo là một mảng rỗng


// // bài tập 2: lấy ra các khóa học và đưa vào một mảng mới

// var topics = [
//     {
//         topic: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS",
//             },
//             {
//                 id: 2,
//                 title: "Javascript",
//             },

//         ]

//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "PHP",
//             },
//             {
//                 id: 2,
//                 title: "NodeJS",
//             },

//         ]

//     },

// ]

// var flatCourses = topics.reduce(function (course, topics) {
//     return course.concat(topics.courses)

// }, [])
// console.log(flatCourses)


// // dùng map để render qua html
// var htmls = flatCourses.map(function (course) {
//     return `
//     <div>
//         <h2>${course.title}</h2>
//         <p>ID: ${course.id}</p>

//     </div>
//     `;

// })
// console.log(htmls.join('')) // ngăng cách bởi dấu cách





// ------------PHƯƠNG THỨC INCLUDES METHODS-------------------------------

//  phương thức tồn tại sẵn trong prototype của array và string

// console.log(String.prototype.includes) // trả về một function
// console.log(Array.prototype.includes) // trả về một function

// ví dụ với string
// var title = 'Responsive web design';
// console.log(title.includes('web',)) // kiểm tra xem từ đó có trong chuỗi hay không ==> trả về true /false
// ('từ muốn tìm kiếm', vị trí bắt đầu tìm kiếm)


// ví dụ với array
// var courses = ['Javascript', 'PHP', 'Ruby']

// console.log(courses.includes('Javascript')) // tìm xem trong mảng có chữ js hong
// //  giống như trong chuỗi





// -------------- MATH OBJECT (Không phải là một object constructor)-------------------------------------

// - Math.PI   === trả về số PI
// - Math.round()  === làm tròn số
// - Math.abs()  === trả về giá tị tuyệt đối
// - Math.ceil()  === chỉ làm tròn trên vd: 4.2 -> 5
// - Math.floor()  === chỉ làm tròn dưới vd: 4.8 -> 4
// - Math.random()  ==== trả về dãy số thập phân nhỏ hơn 1 ngẫu nhiên
// - Math.min()  === lấy ra con số nhỏ nhất
// - Math.max() === lấy ra con số lớn nhất


// - Math.PI   === trả về số PI
// console.log(Math.PI)

// // - Math.round()  === làm tròn số
// console.log(Math.round(3.9999))

// // - Math.abs()  === trả về giá tị tuyệt đối
// console.log(Math.abs(-4))  // biến số âm thành só dương

// // - Math.ceil()  === chỉ làm tròn trên vd: 4.2 -> 5
// console.log(Math.ceil(4.2))

// // - Math.floor()  === chỉ làm tròn dưới vd: 4.8 -> 4
// console.log(Math.floor(3.9))

// // - Math.random()  ==== trả về dãy số thập phân nhỏ hơn 1 ngẫu nhiên
// console.log(Math.random())
// //  dùng để đặt tên ngẫu nhiên, tạo dãy số ngẫu nhiên trong khoảng cho trước
// //  Tạo dãy số ngẫu nhiên từ 0 - 10
// console.log(Math.floor(Math.random() * 10))
// //  tạo phần thưởng ngẫu nhiên
// var random = Math.floor(Math.random() * 100)
// // var bonus = [
// //     '10 coin',
// //     '20 coin',
// //     '30 coin',
// //     '50 coin'
// // ]
// // console.log(bonus[random])
// if (random < 50) {
//     console.log('Cường hóa thành công');
// }


// // - Math.min()  === lấy ra con số nhỏ nhất
// console.log(Math.min(-100, 9, 3, 3, 5, 1, 0))

// // - Math.max() === lấy ra con số lớn nhất
// console.log(Math.max(-100, 9, 3, 3, 5, 1, 0))





// -----------CALLBACK - gọi lại -----------------------
//  - Là hàm (function) được truyền qua đối số
// - khi gọi hàm khác

//  1. Là hàm
//  2. Được truyền qua đối số

// function myFunction(para) {
//     //  kiểm tra nó có phải function không
//     if (typeof para === 'function') {
//         para('Xinh đẹp')
//     }


// }


// function myCallBack(value) {
//     console.log('QUyen', value)
// }
// myFunction(myCallBack)


// -------CALLBACK - PHẦN 2---------------
// 1. là hàm
// 2. truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)


// flow callback: mỗi lần gọi hàm thì sẽ gọi lại hàm callback
// tiếp theo sẽ lọc qua vòng for, mỗi lẫn lọc qua sẽ gọi lại hàm callback
//  nó sẽ nhận về giá trị của phần tử hiện tại và chỉ mục của nó
// lấy vào kết quả và push vào cái mảng trống được khai báo ban đầu
//  sau đó return lại mảng đó

// // tự định nghĩa cho một prototype cho object constructor
// Array.prototype.map2 = function (callback) {
//     var output = [], arrayLength = this.length;
//     for (var i = 0; i < arrayLength; ++i) // this là mảng đang gọi hàm này
//     {
//         var result = callback(this[i], i);
//         console.log('result', result);
//         output.push(result);
//     }
//     return output;
// }



// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]


// var htmls = courses.map2(function (course, index) {
//     return `<h2>${course}</h2>`;

// });
// console.log(htmls.join('')); // nối các phần tử trong mảng thành một chuỗi
// //  nếu không nối thì nó sẽ trả về một mảng các thẻ h2


// // --------------CALLBACK - PHẦN 3----------------
// //  bài tập : chọn một hàm/methods : forEach, map, filter, reduce, find, some, every
// // //  tự định nghĩa lại hàm đó và sử dụng callback
// //  tự định nghĩa lại hàm forEach

// Array.prototype.forEach2 = function (callback) {
//     for (var i = 0; i < this.length; i++) {
//         callback(this[i], i);
//     }
// }
// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]
// courses.forEach2(function (course, index) {
//     console.log(index, course);
// });


// // tự định nghĩa lại hàm filter
// Array.prototype.filter2 = function (callback) {
//     var output = [];
//     for (var i = 0; i < this.length; i++) {
//         if (callback(this[i], i)) {
//             output.push(this[i]);
//         }
//     }
//     return output;
// }
// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 200
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 500
//     },
//     {
//         id: 5,
//         name: 'Python',
//         coin: 10
//     }
// ]
// var freeCourses = courses.filter2(function (course, index) {
//     return course.coin === 0;
// });
// console.log(freeCourses);

// // tự định nghĩa lại hàm find
// Array.prototype.find2 = function (callback) {
//     for (var i = 0; i < this.length; i++) {
//         if (callback(this[i], i)) {
//             return this[i];
//         }
//     }
// }
// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 200
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 500
//     },
//     {
//         id: 5,
//         name: 'Python',
//         coin: 10
//     }
// ]
// var course = courses.find2(function (course, index) {
//     return course.name === 'Ruby';
// });
// console.log(course);

// // tự định nghĩa lại hàm some
// Array.prototype.some2 = function (callback) {
//     for (var i = 0; i < this.length; i++) {
//         if (callback(this[i], i)) {
//             return true;
//         }
//     }
//     return false;
// }
// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 200
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 500
//     },
//     {
//         id: 5,
//         name: 'Python',
//         coin: 10
//     }
// ]
// var isFree = courses.some2(function (course, index) {
//     return course.coin === 0;
// });
// console.log(isFree); // true nếu có ít nhất một phần tử




















