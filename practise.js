//------------------ HÀM TRONG JS--------------------

// - là một khối mã
// - làm một việc cụ thể

// loại hàm:
// - bult-in: đã có sẵn trong js
// - user-defined: do người dùng tự định nghĩa

// tính chất:
// - có thể nhận tham số
// - có thể trả về giá trị
// - không thực thi khi định nghĩa
// - chỉ thực thi khi được gọi

// declaration function:
// function sayHello() {
//     console.log('helllo')
// }
// sayHello();

// expression function:
// var sayYess = function sayHello() {
//     console.log('helllo hahahha')
// }
// console.log(sayYess())







//  -----------THAM SỐ TRONG HÀM----------------

// - là giá trị được truyền vào hàm
// 1. tham số:  là giá trị có thể truyền vào khi gọi tới 1 function
// function sayHello(name) {
//     console.log('hello ' + name);
// }
// sayHello('Hà Nội'); // gọi hàm với đối số là 'Hà Nội'

// 2. đối số: khi gọi hàm, ta có thể truyền vào các giá trị cụ thể, gọi là đối số

// kiểu dữ liệu của tham số:

// - kiểu dữ liệu nguyên thủy: string, number, boolean, null, undefined'
// - kiểu dữ liệu tham chiếu: object, array, function
// - kiểu dữ liệu phức hợp: object, array, function
// - kiểu dữ liệu không xác định: undefined
// - kiểu dữ liệu null: null
// - kiểu dữ liệu boolean: true, false
// - kiểu dữ liệu number: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// - kiểu dữ liệu string: 'hello', 'world', 'javascript', 'python', 'java'
// - kiểu dữ liệu array: [1, 2, 3, 4, 5], ['a', 'b', 'c']
// - kiểu dữ liệu object: {name: 'Hà Nội', age: 18, address: 'Hà Nội'}
// - kiểu dữ liệu function: function sayHello() { console.log('hello') }
// - kiểu dữ liệu symbol: Symbol('description')
// - kiểu dữ liệu bigint: 1234567890123456789012345678901234567890n
// - kiểu dữ liệu date: new Date()
// - kiểu dữ liệu regex: /abc/gi
// - kiểu dữ liệu map: new Map()
// - kiểu dữ liệu set: new Set()
// - kiểu dữ liệu promise: new Promise((resolve, reject) => { resolve('success') })
// - kiểu dữ liệu weakmap: new WeakMap()
// - kiểu dữ liệu weakset: new WeakSet()
// - kiểu dữ liệu arraybuffer: new ArrayBuffer(10)
// - kiểu dữ liệu typedarray: new Int8Array(10)
// - kiểu dữ liệu dataview: new DataView(new ArrayBuffer(10))
// - kiểu dữ liệu json: JSON.parse('{"name": "Hà Nội", "age": 18, "address": "Hà Nội"}')
// - kiểu dữ liệu function constructor: new Function('a', 'b', 'return a + b')
// - kiểu dữ liệu class: class Person { constructor(name, age) { this.name = name; this.age = age; } }
// - kiểu dữ liệu module: import { sayHello } from './module.js'
// - kiểu dữ liệu iterable: [1, 2, 3][Symbol.iterator]()
// - kiểu dữ liệu generator: function* generator() { yield 1; yield 2; yield 3; }
// - kiểu dữ liệu async function: async function sayHello() { return 'hello' }
// - kiểu dữ liệu async iterator: async function* asyncGenerator() { yield 1; yield 2; yield 3; }
// - kiểu dữ liệu async iterable: [1, 2, 3][Symbol.asyncIterator]()
// - kiểu dữ liệu async generator: async function* asyncGenerator() { yield 1; yield 2; yield 3; }
// - kiểu dữ liệu async function: async function sayHello() { return 'hello' }
// - kiểu dữ liệu async iterator: async function* asyncGenerator() { yield 1; yield 2; yield 3; }
// - kiểu dữ liệu async iterable: [1, 2, 3][Symbol.asyncIterator]()
// - kiểu dữ liệu async generator: async function* asyncGenerator() { yield 1; yield 2; yield 3; }
// - kiểu dữ liệu async function: async function sayHello() { return 'hello' }
// - kiểu dữ liệu async iterator: async function* asyncGenerator() { yield 1; yield 2; yield 3; }
// - kiểu dữ liệu async iterable: [1, 2, 3][Symbol.asyncIterator]()
// - kiểu dữ liệu async generator: async function* asyncGenerator() { yield 1; yield 2; yield 3; }
// - kiểu dữ liệu async function: async function sayHello() { return 'hello' }
// - kiểu dữ liệu async iterator: async function* asyncGenerator() { yield 1; yield 2; yield 3; }


// đối tượng arguments:
// - là một đối tượng có sẵn trong hàm
// - chứa tất cả các đối số được truyền vào hàm
// - có thể sử dụng để lấy tất cả các đối số được truyền vào hàm


// function idontno() {
//     var empty = '';
//     for (var bien of arguments) {
//         empty += `${bien} - `;

//     }
//     console.log(empty.slice(0, -3)); // loại bỏ dấu gạch ngang cuối cùng
// }
// idontno('Hà Nội', 'Hải Phòng', 'Đà Nẵng', 'TP Hồ Chí Minh');






// -----------------RETURN TRONG HÀM--------------------

// - là từ khóa dùng để trả về giá trị từ hàm
// - hàm thì pải có từ khóa return để trả về giá trị
// - nếu không có từ khóa return, hàm sẽ trả về undefined

//  biến số thành chuỗi

// function magicNumber(a, b, c, d) {
//     // return a.toString() + b.toString() + c.toString() + d.toString();
//     //return `${a}${b}${c}${d}`;
//     // return [a, b, c, d].join('');
//     // return String(a) + String(b) + String(c) + String(d);
//     // return `${String(a)}${String(b)}${String(c)}${String(d)}`;
//     // return a + '' + b + '' + c + '' + d; // ép kiểu sang chuỗi
// }
// var result = magicNumber(4, 7, 93, 2);
// console.log(result); // '1234'







// ---------------POLYFILLING HÀM----------------
// là thuật ngữ dùng để chỉ đoạn code được dùng để cung cấp chức năng ( hoặc là công nghệ)
// của trình duyệt hiện tại cho cá trình duyệt cũ hơn
// - thường được sử dụng để hỗ trợ các tính năng mới của JavaScript




// ---------------OBJECT IN JS----------------

// - là một kiểu dữ liệu phức tạp
// - Dùng để lưu trữ thông tin của một đối tượng cụ thể

// var person = {
//     name: 'Hà Nội',
//     age: 18,
//     address: 'Hà Nội',

// }
// // thêm key mới vào object
// person['not-cua-toi'] = 'Tự hào VN'
// console.log(person['not-cua-toi']); // 'Tự hào VN'


// // tìm value của key qua biến
// var keyNew = 'age';
// console.log(person[keyNew]); // 18


// thêm key và value qua việc truyền biến vào object
// var note = 'Toi yeu VN'

// var person = {
//     name: 'Hà Nội',
//     age: 18,
//     address: 'Hà Nội',

//     [note]: 'Tự hào VN' // sử dụng biến làm key

// }

// // xóa key trong object
// delete person.age; // xóa key age trong object
// console.log(person)

// sử dụng hàm trong object

// var person = {
//     name: 'Hà Nội',
//     age: 18,
//     address: 'Hà Nội',

//     sayHello: function () {
//         console.log('hello ' + this.name); // this là từ khóa dùng để tham chiếu đến đối tượng hiện tại
//     }
// }

// console.log(person.sayHello()); // 'Hà Nội'







// ---------------OBJECT CONSTRUCTOR----------------

// - xây dựng một đối tượng mới từ một hàm
// - sử dụng từ khóa new để tạo một đối tượng mới
// - giống như bản thiết kế của một đối tượng
// - khi các đối tượng có cùng bản thiết kế thì chúng sẽ có cấu trúc giống nhau
// - String, Number, Array, Date,... chính là các object constructor
// - thuộc tính trong prototype trong Object constructor có thể gọi trực tiếp
// - prototype là một đối tượng được sử dụng để chia sẻ các thuộc tính và phương thức giữa các đối tượng



// function User(firstName, lastName, age) {
//     this.firstName = firstName; // this là từ khóa dùng để tham chiếu đến đối tượng hiện tại
//     this.lastName = lastName;
//     this.age = age;

//     // phương thức của đối tượng
//     this.sayHello = function () {
//         console.log('Hello ' + this.firstName + ' ' + this.lastName); // this được gọi ở đâu thì nó sẽ tham chiếu đến đối tượng ở đó
//     }
// }

// var student = new User('chau', 'nguyen', 18); // gọi hàm để tạo một đối tượng mới
// var author = new User('nguyen', 'chau', 25); // sử dụng từ khóa new để tạo một đối tượng mới

// //  thêm thuộc tính mới vào đối tượng
// student.note = 'Tôi yêu Việt Nam'; // thêm thuộc tính mới vào đối tượng
// author['title'] = ' chia sẻ kiến thức'; // thêm thuộc tính mới vào đối tượng

// console.log(student); // { firstName: 'chau', lastName: 'nguyen', age: 18, sayHello: [Function] }
// console.log(author.constructor === User); // { firstName: 'nguyen', lastName: 'chau', age: 25, sayHello: [Function] }
// // in ra hàm constructor của đối tượng
// // xem lại cấu trúc của đối tượng
// console.log(author);


// //  ví dụ về cơ cấu giải thưởng trong một cuộc thi
// var Prize = function (name, value) {
//     this.name = name;
//     this.value = value;
//     this.getInfo = function () {
//         return `Giải ${this.name} có giá trị là ${this.value} triệu đồng`;
//     }
// }

// var firstPrize = new Prize('Nhất', 100);
// var secondPrize = new Prize('Nhì', 50);

// console.log(secondPrize.getInfo()); // Giải Nhất có giá trị là 100 triệu đồng





// -------------OBJECT PROTOTYPE----------------

// - nguyên mẫu để tạo nên một đối tượng mới
// - nguyên liệu để tạo nên ngôi nhà mới


// // ví dụ thêm một thuộc tính mới vào prototype của đối tượng
// var Prize = function (name, value) {
//     this.name = name;
//     this.value = value;
//     this.getInfo = function () {
//         return ` ${this.note} Giải ${this.name} có giá trị là ${this.value} triệu đồng`;
//     }
// }

// // thêm một thuộc tính mới vào prototype của đối tượng Prize
// Prize.prototype.note = 'xin chúc mừng bạn đã nhận được giải thưởng - ';

// Prize.prototype.getNote = function () {
//     return this.note;
// }


// var firstPrize = new Prize('Nhất', 100);
// var secondPrize = new Prize('Nhì', 50);

// console.log(secondPrize.getNote())

// console.log(firstPrize.getInfo()); // Giải Nhất có giá trị là 100 triệu đồng







// -------------OBJECT DATE----------------

// - là một đối tượng trong JavaScript dùng để làm việc với ngày và giờ
// - có thể tạo một đối tượng Date mới bằng cách sử dụng từ khóa new

// var data = new Date(); //trả ra typeOf là đối tượng
// var data = Date();// trả ra typeOf là string

// console.log(data.getFullYear());// lấy ra năm

// var year = data.getFullYear();
// var month = data.getMonth() + 1; // getMonth(): trả về tháng (0-11), nên phải cộng thêm 1 để có tháng thực tế
// var day = data.getDate();

// // getHours(): trả về giờ, getMinutes(): trả về số phút, getSeconds(): in ra số giaay

// console.log(`${year}/${month}/${day}`)




//  =--------------CẤU TRÚC RẼ NHÁNH----------------

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



// ----------------RẼ NHÁNH VỚI SWITCH CASE----------------

// var date = 2;
// //tính từ case đúng và nó sẽ lọt vào tất cả các case còn lại trừ khi gặp break

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






// -----------------TOÁN TỬ 3 NGÔI----------------

// - là một toán tử rút gọn của if else
// - cú pháp: điều kiện ? giá trị nếu đúng : giá trị nếu sai

// vd với if-else

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


// // với toán tử 3 ngôi
// console.log(course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí');
// console.log(course.coin > 0 ? course.coin + ' Coins' : 'Miễn phí'); // rút gọn hơn nữa


// nếu điều kiện đúng thì lấy ra giá trị là số coin
// var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
// console.log(result)

// var a = 1;
// var b = 2;
// var c = a > b ? 'Lớn hơn' : 'Bé hơn';
// console.log(c)







// -----------------VÒNG LẶP - LOOP----------------

// for, while, do while, for in, for of

// chi tiết về vòng lặp - for : lặp với số lần xác định trước
// chi tiết về vòng lặp - while : lặp với số lần không xác định trước
// chi tiết về vòng lặp - do while : lặp với số lần không xác định trước <nhưng ít nhất là 1 lần>
// chi tiết về vòng lặp - for in : lặp qua các thuộc tính của một đối tượng
// chi tiết về vòng lặp - for of : lặp qua các phần tử của một mảng hoặc một chuỗi




// -----------------VÒNG LẶP FOR----------------

// - là một vòng lặp lặp với số lần xác định trước
// - cú pháp: for (khởi tạo; điều kiện dừng; cập nhật) { // code cần lặp }

// in ra số từ 0 đến 1000

// for (var i = 0; i <= 1000; i++) {
//     console.log(i);
// }

// in ra số từ 1000 đến 0

// for (var i = 1000; i >= 0; i--) {
//     console.log(i);
// }


// for với mảng

// var courses = ['Javascript', 'PHP', 'Python', 'Java', 'C#', 'Ruby', 'Swift', 'Kotlin', 'Go', 'Rust'];
// arrayLength = courses.length; // lấy độ dài của mảng

// for (var i = 0; i < arrayLength; i++) {
//     console.log(courses[i]); // in ra từng phần tử của mảng
// }


// // for/in loop in object

// var person = {
//     name: 'Châu Nguyễn',
//     age: 18,
//     address: 'Hà Nội'
// }

// // mỗi lần chạy nó sẽ lấy cái key trong object và gán vào biến key trong vòng lặp
// for (var key in person) {
//     console.log(person[key]); // in ra giá trị của từng thuộc tính trong đối tượng
//     // muốn lấy ra giá trị của key cụ thể: console.log(person['name']); // in ra giá trị của thuộc tính name
// }

// // for/in loop in array
// var courses = ['Javascript', 'PHP', 'Python', 'Java', 'C#', 'Ruby', 'Swift', 'Kotlin', 'Go', 'Rust'];

// for (var course in courses) {
//     console.log(course); // in ra index của từng phần tử trong mảng
//     //  console.log(courses[course]); // in ra giá trị của từng phần tử trong mảng
// }


// //for/in loop in string
// var str = 'Hello World';
// for (var char in str) {
//     console.log(char); // in ra từng ký tự trong chuỗi
// }




// // for/of loop in object

// var person = {
//     name: 'Châu Nguyễn',
//     age: 18,
//     address: 'Hà Nội'
// }

// console.log(Object.keys(person)); // ['name', 'age', 'address']
// // đưa về một mảng các key của object

// for (var value of Object.keys(person)) {
//     console.log(person[value]); //console.log(value) sẽ báo lỗi vì person không phải là một iterable object
// }






// ---------------VÒNG LẶP WHILE----------------
// - là một vòng lặp lặp với số lần không xác định trước
// - cú pháp: while (điều kiện) { // code cần lặp }

// in ra số từ 0 đến 1000
// var i = 0;
// while (i <= 1000) {
//     console.log(i);
//     i++
// }


//  tạo mảng

// var courses = ['Javascript', 'PHP', 'Python', 'Java', 'C#', 'Ruby', 'Swift', 'Kotlin', 'Go', 'Rust'];
// var index = 0;
// while (index < courses.length) {
//     console.log(courses[index]); // in ra từng phần tử của mảng
//     index++;
// }





// ---------------VÒNG LẶP DO WHILE----------------
// - là một vòng lặp lặp với số lần không xác định trước nhưng ít nhất là 1 lần
// - cú pháp: do { // code cần lặp } while (điều kiện);

// in ra số từ 0 đến 1000
// var i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i <= 1000);


// //  tạo mảng
// var courses = ['Javascript', 'PHP', 'Python', 'Java', 'C#', 'Ruby', 'Swift', 'Kotlin', 'Go', 'Rust'];

// var index = 0;
// do {
//     console.log(courses[index]); // in ra từng phần tử của mảng
//     index++;
// }
// while (index < courses.length);



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



// ----------------------BREAK VÀ CONTINUE----------------------
// - break: dừng vòng lặp ngay lập tức
// - continue: bỏ qua vòng lặp hiện tại và tiếp tục vòng lặp tiếp theo
// - thường được sử dụng trong vòng lặp for, while, do while


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

// in ra các số từ 0 đến 100, nếu số đó là số lẻ thì bỏ qua

// for (var i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         continue; // nếu là số lẻ thì bỏ qua
//     }
//     console.log(i); // in ra số chẵn
// }







// -----------------VÒNG LẶP NESTED----------------

// - là vòng lặp lồng nhau

// var courses = [
//     ['Javascript', 'PHP', 'Python'],
//     ['Java', 'C#', 'Ruby'],
//     ['Swift', 'Kotlin', 'Go']
// ];

// // in ra từng phần tử của mảng 2 chiều
// for (var i = 0; i < courses.length; i++) {
//     for (var j = 0; j < courses[i].length; j++) {
//         console.log(courses[i][j]); // in ra từng phần tử của mảng 2 chiều
//     }
// }


// ----------------MỞ RỘNG VÒNG LẶP----------------

// for (var i = 100; i >= 0; i--) {
//     if (i % 5 !== 0) {
//         continue; // nếu không chia hết cho 5 thì bỏ qua
//     }
//     console.log(i); // in ra số chia hết cho 5
// }






// ----------------ARRAY METHODS----------------

// - là các phương thức được sử dụng để làm việc với mảng

// - forEach: lặp qua từng phần tử của mảng
// - map: tạo một mảng mới bằng cách áp dụng một hàm cho từng phần tử của mảng
// - filter: tạo một mảng mới bằng cách lọc các phần tử của mảng theo một điều kiện
// - reduce: giảm mảng về một giá trị duy nhất bằng cách áp dụng một hàm cho từng phần tử của mảng
// - find: tìm phần tử đầu tiên trong mảng
// - every: kiểm tra xem tất cả các phần tử trong
// - some: kiểm tra xem có ít nhất một phần tử trong mảng thỏa mã


// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 90
//     },
//     {
//         id: 2,
//         name: 'PHP',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Python',
//         coin: 300
//     },
//     {
//         id: 4,
//         name: 'Java',
//         coin: 400
//     },
//     {
//         id: 5,
//         name: 'C#',
//         coin: 0
//     }
// ];

// --------------1. forEach: duyệt qua từng phần tử của mảng
// courses.forEach(function (course, index) {
//     console.log(index, course.name); // in ra tên của từng khóa học
// });


// --------------2. every: kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn 1 điều kiện
//  chỉ cần 1 phần tử không đúng thì nó sẽ trả về false

// tất cả khóa học này có phải là free không?

// var isFree = courses.every(function (course, index) {
//     console.log(index)
//     return course.coin === 0; // nếu tất cả các khóa học đều miễn phí thì trả về true
// })

// console.log(isFree); // false, vì có khóa học không miễn phí

//  ứng dụng trong việc : kiểm tra xem ng học đã học xong hết chưa, nếu rồi thì chuyển sang phân bài tập



//-------------- 3. some: chỉ cần 1 phần tử đúng thì nó sẽ trả về true
// có khóa học nào miễn phí không?

// var isFree = courses.some(function (course, index) {
//     console.log(index);
//     return course.coin === 0; // nếu có khóa học miễn phí thì trả về true
// })

// console.log(isFree); // false, vì không có khóa học nào miễn phí



//------------- 4. find: tìm phần tử đầu tiên trong mảng thỏa

// tìm khóa học java

// var courseJava = courses.find(function (course, index) {
//     return course.name === 'Java'; // tìm khóa học có tên là Java)
// })

// console.log(courseJava); // { id: 4, name: 'Java', coin: 400 }

// //  ứng dụng cho chức năng tìm kiếm





// -------------5. filter: lọc các phần tử trong mảng theo một điều kiện

// tìm ra những khóa học miễn phí

// var freeCourses = courses.filter(function (course, index) {
//     return course.coin === 0;
// })
// console.log(freeCourses)




// 6. map: chỉnh sửa hoặc thay đổi element của một array, render ra view trên layout website


//  thêm từ 'khóa học' vào tên của từng khóa học
//  và thêm một thuộc tính là note: 'giá: ${coin}'

// var newCourse = courses.map(function (course, index, originArray) {
//     return {
//         id: course.id,
//         name: 'Khóa học ' + course.name,
//         //name: `khóa học: ${course.name}`
//         coin: course.coin,
//         note: `Giá: ${course.coin} coins`,
//         originArray: originArray
//     }
// })
// console.log(newCourse)



//  chỉ lấy ra tên của khóa học và bỏ vào một array
// return về mã html

// function listName(course, index) {
//     return `<h2> ${course.name}</h2>`


// }

// var result = courses.map(listName);
// console.log(result.join(' '))




// ------------6. reduce in array---------------------------

//  - nhận về giá trị duy nhất khi thực hiện tính toán trong 1 array

// vd: tính tổng số tiền nhận được khi học hết các khóa hộc này

// var i = 0
// var total = function (reslt, currentValue, currentIndex, originArray) {
//     //  i++;
//     return totalCoin = reslt + currentValue.coin;
//     // console.table({
//     //     'Lượt chạy 1: ': i,
//     //     'Biến lưu trữ: ': reslt,
//     //     'giá trị của khóa': currentValue.coin,
//     //     'Tích trữ được': totalCoin,

//     // })
//     // return totalCoin
// }
// var totalCourse = courses.reduce(total, 0) // 0 là giá trị ban đầu của biến lưu trữ  giống var i = 0
// console.log(totalCourse)




// --------------6. reduce() in array -- phần 2 -----------------



// var total = function (present, course, currentIndex, originArray) {

//     return present + course.coin
// }

// var resultCourse = courses.reduce(total, 0)
// console.log(resultCourse)

// -- giá trị khởi tạo là giá trị không bắt buộc
// - khi không có giá trị khởi tạo  ==> thì mặc định sẽ lấy phần tử đầu tiên của mảng làm giá trị khởi tạo
// - nên đặt lại giá trị khởi tạo có cùng kiểu dữ liệu với kết quả đầu ra mà mình mong muốn
// biến khởi tạo cũng là một biến lưu trữ:
// - đầu ra là number thì biến khởi tạo bằng 0
// - đầu ra là mảng thì biển khởi tạo là [] - mảng rỗng
// - đầu ra là object thì biến khởi là {} - một object rỗng

// var number = [12, 6, 8, 100]
// var tong = number.reduce(function (ii, num) {
//     return ii + num
// })
// console.log(tong)



// ---------------Flat - ' làm phẳng mảng từ Dept array - Mảng sâu------

//  đưa những phần tử nhỏ về cùng một mảng
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

// var result = depthArray.reduce(function (deptOut, deptItem) {
//     return deptOut.concat(deptItem)
// }, [])
// console.log(result)

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

// // có 2 topics và trong hai topics đó có 2 array => thì ta chấm vào cái tên mảng ở trong
// var listCourses = topics.reduce(function (course, topic) {
//     return course.concat(topic.courses);
// }, [])
// console.log(listCourses);

// var htmls = listCourses.map(function (course) {
//     return `<div>
//         <h2>${course.title}</h2>
//         <h2>${course.id}</h2>
//     </div>`
// })
// console.log(htmls.join(' '))






// ---------7.Phường thức includes - nẳm tròn đối tượng string và array--------

// console.log(Array.prototype.includes)

//------- với String:    kiểm tra xem có chữ kí tự hay chữ j đó không

// var test = 'hong biết nữa'
// console.log(test.includes('e', 2))
// (chữ muốn tìm, vt bắt đầu tìm)


// ---------với array:    kiểm tra xem có tồn tại phần tử cần tìm hogn

// var arr = [
//     'C',
//     'Java',
//     'Python'
// ]

// //  kiểm tra xem mảng này có java hong nha
// console.log(arr.includes('Java', 1));
// (chữ muốn tìm, vt bắt đầu tìm)







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

// gọi hàm trong 1 hàm khác

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

// // tự định nghĩa cho một array prototype cho object constructor của nó
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




// -----------mở rộng về array empty element-----






//  tự làm ra một array prototype cho constructor của nó

// --- forEach()

// Array.prototype.forEach2 = function (callback) {
//     var outputc = [], arrayLength = this.length
//     for (var i = 0; i < arrayLength; i++) {
//         var result = callback(this[i], i);
//         console.log('result', result);
//     }
//     return outputc.push(result)

// }

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]

// var test = courses.forEach2(function (course) {
//     return course
// })


// courses.length = 10;  // var courses = neww Array(10)
// console.log(courses)
// lenght: không phải lúc nào cũng tượng trưng cho số lượng phần tử
// số lượng phần tử thực sự là 3 và 7 empty (rỗng)

// for (var i in courses) {
//     console.log(courses[i])
// }

// courses.push('Quyen')
// courses.pop(1)
// console.log(courses)

//duyệt qua 10 lần






// --------làm lại định nghĩa prototype cho forEach3()
//  - khi định nghĩa ra một phương thức mới cho constructor array
//  - for/in không chỉ duyệt qua những element hiện hữu trong array mà còn
//  duyệt qua luôn cả element trong proto

// Array.prototype.forEach3 = function (callBack) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callBack(this[index], index, this);
//         }
//         // kiểm tra xem index có nằm trong phần tử index gần nhất hay không: là nằm ở ngoài (những element thực), không nằm tỏng proto
//         // hàm hasOwnProperty
//     }

// }

// // courses được khởi tạo từ array constructor, nên được kế thừa những phường thức định nghĩa sẵn
// //tại sao array lại goi được những phương thức này: vì nó được
// // vì array constructor đã được định nghĩa trong prototype sẵn những phương thức này rồi
// var courses = new Array(10)
// // [
// //     'Javascript',
// //     'PHP',
// //     'Ruby'
// // ]

// courses.push('hài hước')
// // forEach() không chạy theo length chỉ chạy theo số phần tử thực sự có trong mảng
// //  nếu phương thức nào chỉ chạy theo số phần tử có thực thì sử dụng
// //  for/in loop
// // - nếu phương thức nào chạy theo số length thì nên dùng for loop

// courses.forEach3(function (course, index, array) {
//     return console.log(course, index, array)
// })


// console.log(Array.prototype) // xem các prototype ()









// ------------------ định nghĩa một prototype cho filter------------

// filter không có lọc qua array trống

// định nghĩa một prototype mới giống như filter
// Array.prototype.filter2 = function (callback) {
//     var output = []
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this)
//             if (result) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;

// }


// var courses =  // kiểm tra xem filter có lọc qua array trống không
//     [
//         {
//             name: 'Python',
//             coin: 780
//         },
//         {
//             name: 'PHP',
//             coin: 80
//         },
//         {
//             name: 'Ruby',
//             coin: 0
//         },
//         {
//             name: 'Java',
//             coin: 0
//         }
//     ]


// // lọc những khóa học miễn phí // search - value type and reference types ==> tham trị và tham chiếu

// var freeCourses = courses.filter2(function (course, index, array) {
//     // console.log(course, index, array)
//     return course.coin > 0;

// })
// console.log(freeCourses)






// --------làm lại phương thức some2 - tạo một prototype mới cho array constructor


// Array.prototype.some2 = function (callback) {
//     for (var ind in this) {
//         if (this.hasOwnProperty(ind)) {

//             if (callback(this[ind], ind, this)) {
//                 return true;
//             }
//         }
//     }
//     return false
// }

// //  không chạy qua array rỗng
// var courses =
//     [
//         {
//             name: 'Python',
//             coin: 780,
//             isFinish: false
//         },
//         {
//             name: 'PHP',
//             coin: 80,
//             isFinish: false,
//         },
//         {
//             name: 'Ruby',
//             coin: 1,
//             isFinish: false
//         },
//         {
//             name: 'Java',
//             coin: 300,
//             isFinish: false
//         }
//     ]

// //  vd kt xem ng này đã học được ít nhất một khóa học chưa
// var isfreeAllCourse = courses.some2(function (course, ind, array) {
//     // console.log(course)
//     return course.isFinish === true
// })

// console.log(isfreeAllCourse)







// -------------làm lại phương thức every()-------------

// Array.prototype.every2 = function (callback) {

//     var output = true
//     for (var ind in this) {
//         if (this.hasOwnProperty(ind)) {
//             var result = callback(this[ind], ind, this);
//             if (!result) {
//                 output = false;
//                 break;
//             }


//         }
//     }
//     return output

// }



// //  không chạy qua array rỗng
// var courses =
//     [
//         {
//             name: 'Python',
//             coin: 780,
//             isFinish: false
//         },
//         {
//             name: 'PHP',
//             coin: 80,
//             isFinish: true,
//         },
//         {
//             name: 'Ruby',
//             coin: 1,
//             isFinish: false
//         },
//         {
//             name: 'Java',
//             coin: 300,
//             isFinish: false
//         }
//     ]



// //  vd kt xem ng này đã học hết tất cả  khóa học chưa
// var isfreeAllCourse = courses.every2(function (course, ind, array) {
//     // console.log(course)
//     return course.coin > 90
// })

// console.log(isfreeAllCourse)








// --------------ĐỆ QUY TRONG JS - recursive function------------


//var arr = ['a', 'b', 'c', 'd', 'c', 'd']

// // set()  => trả về những đối tượng duy nhất
// console.log([...new Set(arr)])
// // cấu trúc chuyển set() object sang mảng : [...new Set(arr)]  ===> ... là bỏ đi dấu chứa bên ngoài là {}





//  - đệ quy là hàm gọi lại chính nó
// - js có những ngăn kéo để chứa những job để nó thực thi, và  những ngăn kéo đó là hữu hạn
//  - khi vượt quá ngăn kéo, bị tràn và lỗi

// 1. xác được điểm dừng
// 2. Logic handle => tạo ra điểm dừng





// function loop(start, end, calllback) {
//     if (start <= end) {
//         calllback(start)
//         return loop(start + 1, end, calllback)
//     }

// }

// var arr = ['Javascript', 'PH', 'Ruby']

// loop(0, arr.length - 1, function (index) {
//     console.log('index', arr[index])
// })


// a --> loop --> CPU
// a --> loop --> RAM

//  functional programing:



// ----bài toán tìm giai thừa trong đệ quy

// function giaiThua(numb) {
//     var result = 1;
//     for (var i = numb; i > 0; i--) {
//         result = result * i
//     }
//     return result

// }
// var out = giaiThua(3);
// console.log(out)



// giải với đệ quy thì sao?

// function giaiThua(numb) {
//     if (numb > 0) {
//         return numb * giaiThua(numb - 1);
//     }
//     return 1;
// }
// console.log(giaiThua(3))













// -----------------------------HTML DOM-------------------

// DOM là document Object Model - mô hình tài liệu được thể hiện dưới dạng đối tượng
// khi trang web được tải thì trình duyệt sẽ tạo ra một DOM of page

// - khi gõ URL vào ô tìm kiếm và bấm enter để truy cập thì trình duyệt nhận được
//  một chuỗi html, và dựa theo những quy chuẩn đã được cài đặt sẵn trong trình duyệt
//  dựa vào những quy chuẩn đó và dịch từ chuỗi html sang DOM

// trình duyệt sẽ dựa vào quy chuẩn của tổ chức W3c(World Wide Web Consortium) - quy chuẩn của web trên thế giới
//  đưa ra những quy chuẩn cho người làm web phải tuân theo

// khi có những quy chuẩn này, thì khi thiết kế ra những trình duyệt sẽ có những cái core ở bên trong
//  và dựa vào cái core ngta sẽ phân tích ra và dịch ra tạo thành DOM

//  khi mà trang web tải xong, trình duyệt sẽ nhận được đoạn chuỗi code html
//  và dựa vào quy chuẩn, trình duyệt sẽ tạo ra mô hình dạng cây

// - DOM có 3 thành phần (element) - Attribute - Text
// - mỗi tag là một element
// - attribute : thuộc tính nằm trong thẻ tag, class, id, ..
// - text là chữ


// mỗi ô hình vuông là một node



//  sử dụng js
// - có thể truy cập và html dom và thay đổi các element, attribute, text

// tính chất:
// - có thể thay đổi cả website

//  - DOM là một tổ chức tiêu chuẩn W3C
//  - DOM định nghĩa những tiêu chuẩn để có thể truy cập vào tài liệu

// - W3C có 3 tiêu chuẩn khác nhau về DOM
//      + Core DOM  - mô hình tiêu chuẩn cho tất cả loại tài liệu
// vd: word, excel, pdf vẫn là những tài liệu
//      + XML DOM:
//      + HTML DOM:

//=====>  bản thân những phần mềm đó phải tuân theo quy chuẩn w3c để hiểu được cấu trúc
//  của cấu trúc tài liệu excel bao gồm những thành phần gì, tìa liệu pdf gồm những thành phần gì
//  từ đó, nó có thể chỉnh sửa

//  HTML DOm phải dựa theo CORE DOM  để định nghĩa ra những tiêu chuẩn cho những thành phần trên web


//  sử dụng DOM có thể lấy, cính sửa, thay đổi, xóa, thêm vào html element












// -------------PHÂN BIỆT HTML DOM VÀ LẬP TRÌNH JAVASCRIPT--------

// - HTML DOM - là quy chuẩn của W3C  đưa ra

// vd như document.get.... => js cung cấp bộ công cụ để chọc/ cung cấp vào những cấu trúc của html dom

// js có thể chạy ở brower | sever (NodeJS)
// brower: html -> DOM -> DOM API thuộc về web api/ chỉ tồn tại trên môi trường web, trình duyệt
// (applicatio programing interface) - một ứng dụng mở ra những con đường cho ứng dụng khác nhìn thấy và giao tiếp được

// web api, lấy vị trí, nhận thông báo hay không (bắn về thông báo)

//  trên server chỉ mở và lưu trữ trang web của chúng ta thôi

// js chạy trên brower lại có DOM vì trên brower có web api, và web api sẽ cũng cấp DOM









// ----------DOM Document object----------------

// - là đại diện cho cả website
//      + khi trình duyệt bắt đầu đọc được tất cả các mã html
//  nó sẽ tạo ra 1 DOM, khi đó nó sẽ lưu hết vào trong Document object model


//  document object model đã được tích hợp sẵn trong web api

// document.write('jhkjhj'); // ghi chữ lên DOM, trong thẻ body (sau phần tử cuối cùng của thẻ body)
// console.log(document) => xem cái j là document










// ----------- LẤY ELEMENT TRONG DOM ----------------------

// get element qua: id, class, tag, CSS selector, html colection


// ------lấy qua id
//var headingNode = document.getElementById('test');

// console.log({
//     element: headingNode
// }) // xuất hiện trong console như một object



// -----lấy qua class
//  +trả về html colection, tính chất gống mảng và có thể sử dụng vòng lặp for or while
//  + HTML collection không có phương thức như mảng
// var headingNode = document.getElementsByClassName('test2');
// console.log(headingNode)




// ---lấy qua tag name  ==> trả về html collection
// var headingNode = document.getElementsByTagName('h1');
// console.log(headingNode)

// var testne = document.getElementsByTagName('p')
// console.log(testne)






// -----------get qua CSS selectorALL ==> trả về nodeList
// var result = document.querySelector('.container .heading2')
// console.log(result)





// // ----------gọi qua html seclection

// // trả về tất cả các form
// console.log(document.forms);
// console.log(document.forms['form-1']); // lấy form qua id của form

// console.log(document.forms.testForm);// có thể truyền thẳng như vầy, nếu đặt tên đúng cú pháp



// // trả về tất cả thẻ a có att là name
// console.log(document.anchors)







//-----------MỞ RỘNG CHO GET ELEMENT--------


// var listItemNote = document.querySelector('.box-1')
// console.log(listItemNote);

// // lấy ra con của ListItemNote
// console.log(listItemNote.querySelectorAll('li'));
// console.log(listItemNote.querySelectorAll('p'));









// // --------------------Phần 3 element ----------------


// // có thể dùm vòng lặp

// var boxList = document.querySelectorAll('.box-1 li')
// console.log(boxList)
// for (var i = 0; i < boxList.length; i++) {
//     console.log(boxList[i])
// }





// các thẻ trả về html colection:  img, form, a


// nó sẽ ghi ở vị trí mà ta đặt file js
//document.write('hfsjhsj')













// // -------------------LẤY RA NODE ATTRIBUTE VÀ NODE TEXT------------

// var header = document.querySelector('h1');

// // //  thêm thuộc tính vào h1 theo cách gọi là seter
// header.title = 'Heading'
// // // chỉ có khi js được thực thi

// header.className = 'color'

// // thêm attribute với những attribute không hợp lệ
// header.setAttribute('href', 'headering')


// // cách get ra được value của attribute
// console.log(header.getAttribute('class'))


// // gọi ra thuộc tính bằng cách trực tiếp
// console.log(header.title)












// ------------THUỘC TÍNH INNERTEXT VÀ TEXTCONTENT--------------------

// // - có thể lấy ra và sử đổi nội dung của textNode //getter: lấy ra được nội dung của text; setter: thay đổi nd của thuộc tính

// var result = document.querySelector('.heading')


// //  lấy ra nội dung của class="heading" / có thể thay đổi thành textContent
// result.innerText = 'New heading'


// -- innerText: lẩy ra tất cả các Text trong thẻ và bỏ qua các tag bên trong, trả lại giống như những gì bạn nhìn thấy
//  + Bị ảnh hưởng bởi thuộc tính display = none
// - textContent: cũng lấy ra tất cả các Text và bỏ qua các tag bên trong, nhưng nó sẽ giữ nguyên khoảng cách thực của các chữ
//  + không bị ảnh hưởng bởi thuộc tính display = none
//  + hiển thj kể cả nội dung của thẻ style và script được coi là nội dung trong element Node


//  ===> đã là nội dung trong element Node  thì là textNode


//  + innerTexr chỉ tồn tại trong element Node
//  + textContent tồn tại cả trong textNode và element Node, nên có thể từ













// ----------THÊM MỘT ELEMENT VÀO TRONG MỘT ELEMENT-------------------

// - innerHTML, outerHTML là hai thuộc tính của element nOde
// + innerHTML: dùng để thêm thuộc tính, text, element
// + outerHTML: dùng để lấy hết tất cả những gì trong thẻ gọi nó, kể cả thẻ cha


// var ele = document.querySelector('.box-1')

// // ghi đè lên cả thẻ cha lun, tức là mất class= "box-1"
// ele.outerHTML = '<span>Test</span>'

// console.log(ele.innerHTML) // lấy ra nội dung trước khi outerHTML hoạt động
// //  tức là lấy ra những gì trogn bộ nhớ trước chứ không lấy ra nội dung thực
















// --------------NODE PROPERTIES----------------------

// var test = document.querySelector('.box-1')
// console.log(test.attributes)










// // -------------DOM STYLE----------------------

// var testStyle = document.querySelector('.box');


// // - khi in ra ta sẽ nhận được đối tượng là CSSstyleDeclaration
// //       + đây là đối tượng của js trong web API. nó đã định nghĩa sẵn cho một elememt node
// // - lấy ra những value của css inline or là xét css inline cho element


// //  - ví dụ trong css thông thường, ta sẽ viết: background-position
// //  ==> nhưng ở trong đây ta viết theo kiểu: backgroundPosition --> được gọi là camlcase (giống như bứu lạc đà nhấp nhô)
// console.log(testStyle)
// // - bản thân mỗi style là một object
// // testStyle.style.width = '100px';
// // testStyle.style.height = '100px';
// // testStyle.style.backgroundColor = 'red';


// //  assign() : là gán
// // - đối số thứ nhất là object, đối số thứ hai là một object muốn được hợp nhất
// Object.assign(testStyle.style, {
//     width: '100px',
//     height: '200px',
//     backgroundColor: 'green'
// })
// // --> xét ra css inline


// // - lấy ra giá trị của thuộc tính css inline của nó
// console.log(testStyle.style.width)














// // ------------CLASSLIST PROPERTIES--------------------------

// // - thuộc tính của element node

// // + add: thêm class vào element
// // + contains: kiểm tra một class có nằm trong elememt hay không
// // + remove: xóa bỏ một class
// // + toggle: nếu đang có 1 class đó trong element thì nó sẽ xóa class đó,
// // còn nếu không có class đó thì nó sẽ tự động thêm vào trong element

// //  có thể biết số class trong một element
// // - value là trả về giá trị dạng chuỗi của attribute class

// // -proto sẽ chứa những đối tượn và thuộc tính

// var testClassList = document.querySelector('.box')

// //  length: dùng để kiểm tra xem số lượng class có như mong muốn hay không
// // [0]: truyền chỉ mục vào để lấy phần tử ra
// //  value là trả chuỗi nằm trong attribute class

// testClassList.classList.add('red', 'pink')
// testClassList.classList.remove('red')
// console.log(testClassList.classList.contains('red'))
// // dùng để kiểm tra trạng thái open --> đóng - mở của một menu


// setInterval(() => {
//     testClassList.classList.toggle('red');
// }, 3000)
// //  tạo chữ nhấp nháy màu liên tục
// //  bấm vào mở menu, bấm vào đống menu

















// -----------------------DOM EVENT---------------

// - Những hành vi, sự kiện diễn ra của trình duyệt hoặc của người dùng
// vd: bôi đen chữ, click chuột, lăn chuột lên xuống --> hành vi tương tác lên website
// vd: tải trang web, đang tải trang web, tải xong trang web


// 1.  Attribute events: cách lắng nghe sự kiện diễn ra, những hành vi của người dùng
// 2. Assign event using the element node: gán sự kiện, sử dụng element node


// - event: click, resize trong dom event trên w2school
// - khi sử dụng sự kiện thì thêm "On" vào phía trước


// vd: khi click vào heading thì sẽ in ra dãy số ở dưới console.log() ngẫu nhiên




// // -----gán event


// // click vào chữ nào sẽ hiện thị element đang lắng nghe event
// var h1Elements = document.querySelectorAll('h1')


// for (var i = 0; i < h1Elements.length; i++) {
//     h1Elements[i].onclick = function (e) {
//         console.log(e.target)
//     }
// }

// vì hành vi click diễn ra sau khi vòng for chạy và i sau khi chạy là 3
// --> nên nếu log ra h1[i] thì sẽ bị lỗi











//  ------------DOM EVENTS EXAMPLE--------------

// 1. Input / select
// 2. Key up / down


// - lấy ra value của thẻ input text
// - lấy ra tình trạng có đang check hay không
// - đang selection option nào


// 1.

// var inputa;

// var inputTextElement = document.querySelector('input[type="text"]')
// inputTextElement.oninput = function (e) {
//     inputa = e.target.value

//     // .target là lấy ra được element node
//     // .value là lấy được giá trị của thẻ input

// }

// //  onchange sẽ chạy khi click ngoài, nhấn enter
// // và nó sẽ gọi lại khi có value khác với value trước đó

// // còn nếu muốn gõ đến đâu thì sẽ lấy value đến đ thì đổi onchane thành oninput



// var inputText = document.querySelector('input[type="text"')

// inputText.onkeyup = function (e) {
//     //console.log(e.which)

//     switch (e.which) {
//         case (17  86):
//             console.log('copy')
//             break
//     }
// }



// // lắng nghe ở đối tượng document
// document.onkeydown = function (e) {
//     switch (e.which) {
//         case 27:
//             console.log('hello')
//             break
//     }
// }




//2.


// var inputCheckElement = document.querySelector('input[type="checkbox"]');
// inputCheckElement.onchange = function (e) {
//     console.log(e.target.checked);
//     // .cheked : kiểm tra xem đã được check chưa
// }





// //3.
// var inputCheckElement = document.querySelector('select');
// inputCheckElement.onchange = function (e) {
//     console.log(e.target.value);
//     // .value : lấy ra value của value attribute
// }








// // // ----------key up / down-----------------

// var inputTest = document.querySelector('input[type="text"]')

// inputTest.onkeyup = function (e) {
//     console.log(e.which)
//     switch (e.which) {
//         case 27:
//             console.log('Exit');
//             break
//     }

// }

// onkeyup: khi nhất phím lên thì lưu lại
// onkeydown: chỉ cần nhấn phím xuống thì đã lưu lại
// onkeypress: chỉ cần nhấn giữ là đã chạy và lưu

// ====> keyboard event : dùng trong trường hợp sử dụng phím để thoát khỏi màn hình
//  hay dùng phím để điều khiển để tùy chọn vào option mình muốn





// ------lắng nghe ở đối tượng document

//   console.log(e.which)  == XEM NÚT TRONG BÀN PHÍM LÀ SỐ MẤY
//   ===> DÙNG ĐIỀU CÓ THỂ ĐIỀU KHIỂN NÚT TRÊN BÀN PHÍM VỚI NHỮNG TÙY CHỌN TRÊN TRÌNH DUYỆT


// document.onkeydown = function (e) {
//     console.log(e.which)
//     switch (e.which) {
//         case 27:
//             console.log('Exit')
//             break
//         case 17:
//             console.log('Copy')
//     }

// }















// --------------DOM EVENTS----------------

// 1. preventDefault - loại bỏ hành vị mặc định trên trình duyệt trên một thẻ html

// 2. stopPropagation - loại bỏ sự kiện nổi bật






// 1. preventDefault
//  - với thẻ a: hành vi mặc định sẽ là dẫn link tới trang web

// vd: nếu link f8.edu.vn thì mới thực hiện dẫn link tới

//  .anchors or links: lấy ra những thẻ a có name
// .startsWith: trong es6: có nghĩa là kiểm tra chuỗi của chúng ta có bắt đầu bằng cái chuỗi j đó không
// var linkss = document.links
// for (var i = 0; i < linkss.length; i++) {
//     linkss[i].onclick = function (e) {
//         if (!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault()// khi href không chứa chuỗi này thì sẽ ngắn chặn hành vi mặc định
//         }

//     }
// }
// console.log(linkss)









// // ví dụ 2 về ngăn chặn hành vi mặc định
// var ulElem = document.querySelector('ul')
// ulElem.onmousedown = function (e) {
//     e.preventDefault()
// }
// ulElem.onclick = function (e) {
//     console.log(e.target)

// }














// //2. ngăn chặn hành vi nổi bọt - stopPropagation


// document.querySelector('div').onclick = function (e) {
//     console.log('div')
// }

// document.querySelector('button').onclick = function (e) {
//     e.stopPropagation()
//     console.log('click me')
// }












// -------------------EVENT LISTENER-----------------

// 1. Event listener
// 2. JSON
// 3. fetch
// 4. DOM clocation
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10. Performance


// - Xử lí nhiều việc khi 1 event xảy ra
// - lắng nghe / hủy bỏ lắng nghe trên element



// var testBtn = document.querySelector('button')
// console.log(testBtn)

// testBtn.onclick = function (e) {
//     console.log('hello')
//     console.log('hi')
//     alert('Guys')
// }



// - làm thế nào để lắng nghe một sự kiện khi sử dụng event listener

// + để hủy bỏ lắng nghe thì gắn lại cho nó 1 function rỗng





// -------------addEventListener:--------------------------

// + có thể add event nhiều lần => có thể lắng nghe nhiều lần
// + được gọi theo thứ tự được add vào
// + hủy bỏ lắng nghe thì gọi:

// var btn = document.querySelector('button')

// //  hai đối số chính là (eventName, function(callback) )
// // + eventName: vd onclick = > click

// function test() {
//     console.log('viec1')
// }
// function test2() {
//     console.log('viec 2')
// }

// btn.addEventListener('click', test)
// btn.addEventListener('click', test2)

// // (eventName, FunctionName muốn gỡ bỏ)
// setTimeout(function () {
//     btn.removeEventListener('click', test)
// }, 3000)













// -------------------THỰC HÀNH-------------------------------

// ------------- FORM VALIDATION-------------------------

// - xử lí form
//  + kiểm tra những dữ liệu người dùng nhập vào






