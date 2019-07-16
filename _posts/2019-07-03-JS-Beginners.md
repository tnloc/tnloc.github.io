---
layout: post
title: "Ghi chú: Javascript for Beginner"
comments: true
description: "Ghi chú: Javascript for Beginner, JS căn bản"
keywords: "JS"
author: Tanloc
---
[Video Source](https://youtu.be/PkZNo7MFNFg)  
[Javascript Playground](https://scrimba.com/c/cy6KrVTZ)
# Line comment
```js
// in-line comment
/*
    this is multi-line comment
*/
```
# Datatype and variable:
Data:  
unidentified, null, booleean,string, symbol, number, and object
variable:  
```js
var myName = "Loc"

myName = 21

let ourName = "Js learner"

const pi = 3.14
```

Biến - khai báo vào gán giá trị:
```js
var a;      //Khai báo nhưng chưa gán giá trị
var b = 2;  //Khai báo và gán giá trị.

a = 7;
b = a;
```

Đặt tên biến:  
Lưu ý:  
    - Tên biến phân biệt chữ thường và chữ HOA.

# Cộng - trừ - nhân - chia
```js
var result = 1 + 1;
var result = 1 - 1;
var result = 1 * 1;
var result = 1 / 1;
```

Tăng giảm giá trị:
```js
var a = 1;
a++; //tăng lên 1 đơn vị
a--; //giảm xuống 1 đơn vị
```

Tìm số dư:
```js
var remainder;
remainder = 11 % 3; // 2
```

Tăng chính nó:
```js 
var a = 10;
//ta có thể tăng bằng cách:
a = a + 6;// -> a = 16
//hoặc 
a += 6; // -> a = 16

//->> Tương tự với các phép toán khác
```

# Kí tự đặc biệt
Để dùng kí tự đặc biệt phân biệt với code ta dùng dấu  ```/```

```js
var myStr = "I am a \"double quoted\" string inside \"double quotes\" ";
    //Kết quả: "I am a ' double quoted 'string inside' double quotes' "
//hoặc
var myStr = '<a href="http://github.com">Link </a>';
    //Kết quả: "<a href='http://github.com'>Link </a>"
```

|code| output       |
|---|---            |
|\\'| single quote  |
|\\"| double quote  |
|\n| backsplash     |
|\r| cariage return |
|\t| tab            |
|\b| backspace      |
|\f| form feed      |

# Chuỗi
Nối 2 chuỗi (string):
```js
var myStr = "Chuỗi 1 " + "Chuỗi 2";
    //Kết quả: "Chuỗi 1 Chuỗi 2"

var myName = "Loc";
var Hello =  "Xin chào! Tên mình là " + myName +". Bạn tên gì?";
    //Kết quả: "Xin chào! Tên mình là Loc. Bạn tên gì?
```

Đếm độ dài chuỗi:
```js
var myName = "Loc";
myName.length;
    //Kết quả: 3
```

Lấy kí tự của chuỗi thông qua vị trí:  
    - Lưu ý: Javascript đếm từ 0;
```js
var myName = "Loc";

//Ví dụ: lấy kí tự đầu của myName
console.log(myname[0]);
//Ví dụ: lấy kí tự thứ 2 của myName
console.log(myname[1]);
    //Kết quả: "o"
//Ví dụ: lấy kí tự cuối cùng.
var lastchar = myName.[myName.length-1];
```

Thay đổi chuỗi:  
    - Lưu ý:
```js
//ví dụ 1: Không được
var myStr = "Jello world!";
myStr[0] = "H";
    //->> Lỗi
//ví dụ 2:
var myStr = "Jello world!";
myStr = "Hello world";
    //->> Không lỗi
```

# Function
Function tổng quát:  
```js
function tên_function(biến1, biến2, biến_..., biến_n){
    // Code xử lý
    return //kết quả, biến...
}
```

Anonymous function:  
```js

```

Arrow function:  
(Hàm rút gọn)
```js

```

# Array
Mảng 1 chiều:
```js
var arr = [];
arr = [1,2,3,"dog","cat"];
```

Mảng 2 chiều:
```js
var arr = [[1,2],["dog","cat"]];
```

Truy xuất dữ liệu:  
```js
tên_mảng[vị_trí];
```

```js
var arr = [1,2,3,"dog","cat"];
console.log(arr[1]);
    //Kết quả: 2
var arr2 = [[1,2],["dog","cat"]];
console.log(arr[1][1]);
    //Kết quả: cat
```

Thêm giá trị vào cuối mảng:
```js
var arr = [["Dog",12],["Cat",19]];
arr.push(["Fish",21]);
    //Kết quả: [["Dog",12],["Cat",19],["Fish",21]]
```

Pop - Lấy (xóa) giá trị cuối ra khỏi mảng:  
```js
var arr = [["Dog",12],["Cat",19],["Fish",21]];
console.log(arr.pop());
    //Kết quả: [["Dog",12],["Cat",19]]
```

Shift - Lấy (xóa) giá trị đầu ra khỏi mảng:  
```js
var arr = [["Dog",12],["Cat",19],["Fish",21]];
console.log(arr.shift());
    //Kết quả: [["Cat",19],["Fish",21]]

arr.unshift(["Bird",3])
    //Kết quả: [["Bird",3],["Cat",19],["Fish",21]]
```

# Scope - Global variale, Local variable

```js
var outerWear = "T-shirt";

function myOutfit(){
    var outerWear = "Sweater";
    return outerWear;
}

console.log(myOutfit());
// >Sweater
console.log(outerWear);
// >T-shirt
```

# Function không trả về dữ liệu
```js
var sum = 0;
function addThree(){
    sum = sum +3;
}

function addFive(){
    sum = sum +5;
}

addFive();
console.log(sum);
// Bây giờ sum = 5
console.log(addThree());
// trả về null vì function không trả về gì cả undefined
console.log(sum);
// Bây giờ sum = 8 vì dòng lệnh trước nó gọi function addThree.
//Tuy không trả về giá trị nào nhưng nó đã thay đổi giá trị của sum
```

# Function có trả về dữ liệu
```js
var changed = 0 ;
function change(num){
    return (num+5)/3;
}

changed = change(10);

var processed =0;
function processArg(num){
    return  (num+3)/5;    
}

processed = processArg(7);

console.log(changed);
//Kết quả: 5
console.log(processed);
//Kết quả: 2
```

# Next in line
```js
function nextInLine(arr,item){
    arr.push(item);
    return item;
}

var testArr = [1,2,3,4,5];

console.log("Before: "+JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: "+JSON.stringify(testArr));
```

# Giá trị Boolean
```js
 // Bổ sung ví dụ sau
```

# So sánh - Equality và Strict Equality
```js
function test(val){
    if (val == 7 ){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(7));
// Equal
console.log(testStrict("7"));
// Equal
```
```js
function testStrict(val){
    if (val === 7 ){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(7));
// Equal
console.log(testStrict("7"));
// Not Equal
```
Tương tự, để so sánh không bằng, ta dùng ***!===*** hoặc ***!==***  
Ngoài ra còn có các toán tử khác như:  

|Kí hiệu    | ý nghĩa   |
|---        |---        |
|<          | bé hơn    |
|>          | lớn hơn   |
|<=  , <==  | bé hơn hoặc bằng  |
|>=  , >==  | lớn hơn hoặc bằng |
|!          | phủ định          |
|&&         | và                |
|\|\|       | hoặc              |

# Mệnh đề If - Else - Else if
```js
function orderBySize(val){
    if (val <= 3){
        return "Nhỏ";
    } else if (val <= 5){
        return "Vừa";
    } else if (val <= 10)
        return "Lớn";
    else return "Siêu lớn";
}

console.log(orderBySize());
console.log(orderBySize(15));
console.log(orderBySize(9));
console.log(orderBySize(4));
console.log(orderBySize(1));
// Siêu lớn
// Siêu lớn
// Lớn
// Vừa
// Nhỏ
```

# Switch case
```js
function caseInSwitch(val){
    var answer ="";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        case "X":
            return "lecture X";
            break;
        case "Y":
            return "lecture Y";
            break;
        case "Z":
            return "lecture Z";
            break;
        default:
            answer = "hmmmm...";
            break;
    }
    return answer;
}
console.log(caseInSwitch(3));
```
Lưu ý:  
- Nếu case không có ***break;*** thì khi hết case được chọn, chương trình sẽ tự động chuyển qua case kế tiếp, đến hết các case còn lại hoặc khi nào gặp ***break***.
- Trường hợp ***default*** là khi không có case nào phù hợp thì ***default*** sẽ chạy.

# Object
```js
var myDog = {
    "name" : "Lulu", //dạng chuỗi
    "legs" : 4, //dạng số
    "tails" : 1,
    "friends": ["everything!"] //hoặc dạng mảng
}
```

Truy cập các Properties (thuộc tính) của object:  
* Dot notation - dùng dấu chấm:
```js
var name = myDog.name; //Lulu
```
* Bracket notation - dùng dấu ngoặc vuông:
```js
var name = myDog['name']; //Lulu
var legs = myDog["leg"]; //4
```
Cập nhật các giá trị của Object:  
```js
myDog.name = "Happy Lulu";
//Happy Lulu
```
Thêm một property (thuộc tính) vào Object:  
```js
myDog['bark'] = 'woof!';

// Bây giờ Object myDog sẽ là:
var myDog = {
    "name" : "Lulu",  
    "legs" : 4,  
    "tails" : 1,  
    "friends": ["everything!"],
    "bark" : "woof!"  
}
```

Xóa một thuộc tính khỏi Object:
```js
delete myDog.bark;

//Bấy giờ Object myDog sẽ là:
var myDog = {
    "name" : "Lulu",  
    "legs" : 4,  
    "tails" : 1,  
    "friends": ["everything!"],
    "bark" : "woof!"  
}
```

Để kiểm tra Object có property nào đó hay không, ta dùng ***.hasOwnProperty(*** tên thuộc tính ***)*** .  
Giá trị trả về sẽ là ***True*** hoặc ***False*** .
```js
console.log(myDog.hasOwnProperty("name"));
// True
console.log(myDog.hasOwnProperty("wings"));
// False
```

# Nested Object
```js
var myStorage = {
    "car": {
        "inside":{
            "glove box" : "maps",
            "passenger seat" : "crumbs"
        },
        "outside":{
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);
// maps
// complex object
```

# Nested Array
```js
var myPlants = [
    {
        type: "flower",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);
// pine;
```

# Vòng lặp For
```js

```
# Vòng lặp While
```js

```

# Vòng lặp Do While
```js

```