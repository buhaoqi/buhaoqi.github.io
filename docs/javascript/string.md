---
noteId: "e1b08eb0499311f0a7615bdc7c14c635"
tags: []

---

108 字符串详解

作业





字符串是什么



字符串类型是什么



创建字符串的方法



创建字符串字面量的语法



字符串的特点





字符串用法1：查询字符串长度



用法2：连接字符串



用法3：比较字符串



用法4：查询索引



用法5：查询字符



用法6：查询字符编码



用法7：提取字符



字符串对象



包装对象

字符串是什么 定义 字符串就是使用引号括起来的字符序列。

字符串类型是什么





字符串就是string



string是一种数据类型，用于表示js程序中的文本。



string是一个不可修改的16位值的有序序列。



每个字符对应一个或多个16位存储单元。



string的长度表示字符编码的个数，并非字符的个数。

'张三'
'hello world'
​
'\uD83D\uDE00' //😀
'😀'.length // 2
​
'e\u0301' //'é'
'é'.length // 2
​
'\ud83d\udc99' //💙
'💙'.length  //  2

创建字符串的方法 方法一：创建字符串字面量

字符串字面量





字符串字面量指直接出现在程序中的字符串，而不是以变量形式出现的字符串。



字符串字面量是由单引号或双引号或反引号括起来的字符序列。

用法1：使用引号定界

'hello world'
"hello world"
`hello world`

用法2：引号嵌套规则 外单内双 单引号定界的字符串中可以包含双引号，不能包含单引号

'<div class="box"></div>' //正确。外单内双
'<div class='box'></div>' //错误。定界错误

外双内单：双引号定界的字符串中可以包含单引号，不能包含双引号

"<div class='box'></div>" //正确。外双内单
"<div class="box"></div>" //错误。定界错误

外反：反引号定界的字符串中可以包含单引号或双引号

`<div class='box'></div>` //正确
`<div class="box"></div>` //正确

用法3：转义符 - 即反斜线\。 反斜线在JavaScript中有着特殊用途。反斜线后加一个字符，该字符就不再表示该字符的字面意思了。

'It\'s true.' //正确。转义符后面的单引号不再表示字符串定界符
"<div class=\"box\"></div>" //正确。转义符后面的双引号不再表示字符串定界符

用法4：换行 使用单引号或双引号定界的字符串不能换行。

'滚滚长
江东逝水' //错误。单引号定界的字符串必须写在一行内
​
'滚滚长\
江东逝水' //正确。反斜线后面的行结束符(不可见符号)被转义，即行结束符不再表示行结束

使用反引号定界的字符串可以换行

let str = ''
str += `<ul>
  <li>列表项</li>
</ul>
`

用法5：模版字符串 使用反引号定界的字符串也被称为”模版字符串“。模版字符串可以包含js表达式。

let name = '张三';
console.log(`Hello ${ name }`) // 'hello 张三'

方法二：创建字符串对象

String对象用于表示和操作字符序列。

创建字符串对象

String对象可以通过String()构造函数创建。

const str = new String("hello world")
console.log(str) //返回 'hello world'
​

字符串的特点 特点1：字符串是不可变的

字符串是固定不变的，类似replace()和toUpperCase()的方法都返回新字符串，原字符串本身并没有发生改变。字符串相当于只读数组。

let arr = [1,2,3]
arr[1] = 5
console.log(arr) //数组元素可以修改
​
let str = '123'
str[1] = 5
console.log(str) //字符串元素不可以修改

特点2：字符串是有索引的





字符串的索引从0开始



第一个字符的位置是0



第二个字符的位置是1



最后一个字符的位置： str[str.length - 1]

特点3：字符串是有长度的

用法1：查询字符串长度





字符串的长度是指字符串中包含单个字符的个数。



空字符串的长度为0。



可使用length属性查询字符的长度。

var str = 'hello'
var len = str.length
console.log(len) //5

案例1





限制内容字数

用法2：连接字符串 方法1：使用加号操作符





如果将加号(+)运算符用于数字，表示两数相加；



如果将加号(+)运算符用于字符串，则表示字符串连接。

方法2：string.concat() concat() 方法将字符串参数连接到调用字符串并返回一个新字符串。

const str1 = 'Hello';
const str2 = 'World';
​
console.log(str1.concat(' ', str2));
// expected output: "Hello World"
​
console.log(str2.concat(', ', str1));
// expected output: "World, Hello"
​

语法

concat(str1)
concat(str1, str2)
concat(str1, str2, /* …, */ strN)
​

用法3: 比较字符串 在JS中，字符串是可以比较的，但是只能使用大于、小于操作符比较。

const str1 = 'a'
const str2 = 'b'
if( str1 > str2){
    console.log(`${str1}大于${str2}`)
} else if(str2 > str1){
    console.log(`${str2}大于${str1}`)
} else {
    console.log(`${str1}等于${str2}`)
}
​

用法4: 查询索引 string.indexOf() indexOf() 方法返回指定字符串在调用字符串中第一次出现的位置。





如果未找到，则返回-1。



对大小写敏感



不能使用正则表达式

语法

indexOf(searchString)
indexOf(searchString, start)
​





searchString: 要搜索的子字符串



start: 搜索的开始位置。默认是0

string.lastIndexOf() Returns the index (position) of the last occurrence of a value in a string

string.search() 返回指定值或正则表达式匹配到的字符串的索引。

用法5: 查询字符 string.charAt() Returns the character at a specified index (position) string.charCodeAt() Returns the Unicode of the character at a specified index。

案例





找出字符串中所有的数字



QQ登录检测

用法6：查询字符编码 string.fromCharCode() 返回Unicode编码对应的字符。 案例





告白加密

用法7：提取字符 方法1：String.prototype.slice() 定义：返回提取的字符串。（slice方法也可操作数组)

语法：

slice(indexStart)
slice(indexStart, indexEnd)

参数：





indexStart: 提取的起始/包含位置(包含该位置的字符)。可以是负值。含头



indexEnd : 可选。提取的结束/排除位置(不包含该位置的字符)。可以是负值。不含尾

返回值: 提取的子字符串。

示例：

const str = '0123456789';
​
/*****没有值*****/
//start=0 end=str.length-1
console.log(str.slice()); // "hello"
console.log(str.substring()); // "hello"
​
/*****一个值*****/ 
//end=str.length-1
console.log(str.slice(2)); //"llo"
console.log(str.substring(2)); //"llo"
//if start == nagative, end = str.length-1
console.log(str.slice(-2));// "lo"
console.log(str.substring(-2));// "Hello"
//if start >= str.length 则返回空字符串
console.log(str.slice(5)); //""
console.log(str.substring(5)); //""
//if start == undefined ||NaN||null start = 0
console.log(str.slice(undefined)); // "hello"
console.log(str.substring(undefined)); // "hello"
console.log(str.slice(NaN)); // "hello"
console.log(str.substring(NaN)); // "hello"
console.log(str.slice(null)); // "hello"
console.log(str.substring(null)); // "hello"
​
/*****两个值*****/
//正值
console.log(str.slice(2, 4));//"ll"
console.log(str.substring(2, 4));//"ll"
//负值
console.log(str.slice(-4, -2)); // "el"
console.log(str.substring(-4, -2)); // ""
//if end <= start 则返回空字符串
console.log(str.slice(4, 2));//""
console.log(str.substring(4, 2));//"ll"
console.log(str.slice(-2, -4));//""
console.log(str.substring(-2, -4));//""

案例2





截取粘贴的文本



驼峰转换

substr() Extracts a number of characters from a string, from a start index (position)

String.prototype.substring() substring()方法返回提取的字符串。

语法

substring(indexStart)
substring(indexStart, indexEnd)





indexstart:提取字符串的起始(包含)位置,不可以是负值。含头



indexend: 提取字符串的结束(排除)位置，不可以是负值。不含尾

返回值：新字符

示例：

const str = '0123456789';
​
/*****没有值*****/
//start=0 end=str.length-1
console.log(str.slice()); // "hello"
console.log(str.substring()); // "hello"
​
/*****一个值*****/ 
//end=str.length-1
console.log(str.slice(2)); //"llo"
console.log(str.substring(2)); //"llo"
//if start == nagative, end = 0
console.log(str.slice(-2));// "lo"
console.log(str.substring(-2));// "Hello"
//if start >= str.length 则返回空字符串
console.log(str.slice(5)); //""
console.log(str.substring(5)); //""
//if start == undefined ||NaN||null start = 0
console.log(str.slice(undefined)); // "hello"
console.log(str.substring(undefined)); // "hello"
console.log(str.slice(NaN)); // "hello"
console.log(str.substring(NaN)); // "hello"
console.log(str.slice(null)); // "hello"
console.log(str.substring(null)); // "hello"
​
/*****两个值*****/
//正值
console.log(str.slice(2, 4));//"ll"
console.log(str.substring(2, 4));//"ll"
//负值
console.log(str.slice(-4, -2)); // "el"
console.log(str.substring(-4, -2)); // ""
//if end <= start 则交换start和end
console.log(str.slice(4, 2));//""
console.log(str.substring(4, 2));//"ll"
console.log(str.slice(-2, -4));//""
console.log(str.substring(-2, -4));//""

检测字符串 includes() 返回字符串是否包含指定值 endsWith() 检测字符串是否以指定值结尾 startsWith() 检测字符串是否以指定字符开头。

案例





替换字符 检索字符串 match() 在字符串中搜索值或正则表达式，并返回匹配项。 repeat() 返回具有多个字符串副本的新字符串。 replace() 返回指定值或正则表达式替换后的字符串。

字符串转数组 String.prototype.split() split()方法通过分隔符把字符串分隔为一个数组。

语法

split()
split(separator)
split(separator, limit)
​





separator: 分隔符，即分隔字符的模式。分隔符可以是：





字符串



RegExp



limit: (可选) 指定返回数组的长度。非负整数。





如果是0，则返回空数组。

示例：

const str = 'hello world'
​
const arr1 = str.split()
console.log(arr1)//['hello world']
​
const arr2 = str.split('')
console.log(arr2) //['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
​
const arr3 = str.split(' ')
console.log(arr3) //['hello', 'world']
​
const arr4 = str.split('o')
console.log(arr4) //['hell', ' w', 'rld']
​
const arr5 = str.split('l')
console.log(arr5) //['he', '', 'o wor', 'd']





大小写转换 toLowerCase() 返回转换为小写字母的字符串。 toUpperCase() 返回转换为大写字母的字符串。 案例





驼峰转换

toLocaleLowerCase() 返回转换为本地语言的小写字母的字符串。 toLocaleUpperCase() 返回转换为本地语言的大写字母的字符串。

去空白 trim() Returns a string with removed whitespaces trimEnd() Returns a string with removed whitespaces from the end trimStart() Returns a string with removed whitespaces from the start

valueOf() 用于把字符串对象转换成字符串直接量。 toString() 返回字符串直接量或字符串对象。

包装对象 包装对象是指存取字符串的属性时创建的临时对象，被称为包装对象。

思考：字符串既然不是对象，为什么它会有属性和方法呢？

var str = 'hello'
var len = str.length
console.log(len) // 返回5

原因：只要引用了字符串str的属性，JavaScript就会将字符串值通过调用new String(str)的方式临时转换成对象，这个对象就是包装对象，它继承了字符串的方法，并用来处理属性的引用，一旦属性引用结束，包装对象就会被立刻销毁。

思考：可以为包装对象的属性赋值吗？

var str1 = 'hello world'
console.log(typeof str1) //string
console.log(str1.length) //调用包装对象读取str1的length属性，随即销毁
str1.attr = 100//试图为包装对象的属性赋值，则会忽略这个操作
console.log(str1.attr) // 返回undefined
​
var str2 = new String("hello world")
console.log(typeof str2) //object
str2.attr = 200
console.log(str2.attr) // 返回200
​



109 数据类型

JavaScript的数据类型分为两大类：





原始数据类型：不可改变的(静态)数据类型。





数值



字符串



布尔型



undefined



null



对象类型：可以改变的(动态)数据类型。





普通对象



数组



函数



Date



RegExp



等



