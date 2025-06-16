---
noteId: "b1c0fb40499311f0a7615bdc7c14c635"
tags: []

---

作业

1. 布尔值是什么

2. 布尔值什么时候出现

3. 非布尔值转换为假值的有哪几个？

4. 逻辑运算符有哪几个

5. 请说明逻辑与运算符的工作原理

6. 请说明逻辑非运算符的工作原理

7. null是什么

8. 什么时候出现null

9. undeinfed是什么

10. 什么时候出现undefined

11. null == undefined返回ture还是false

## 布尔值是什么

布尔值是一种原始数据类型。

布尔值只有两个值：true 和 flase

布尔值表示真或假、开或关、是或否、1或0

用途：布尔值经常用于逻辑运算

布尔： boolean （人名）

## 布尔值什么时候出现

1. 做值的比较的时候出现

```js

 1 == 0 //

 'hello' == null

```

2. 条件表达式中出现

```js

if(100){

  console.log('真')

}

```

## 布尔值的转换

记住一句话：**任何值都可以转为布尔值**

六个假值

- NaN

- ''

- undefined

- null

- 0

- -0

真值

- 6个假值以外的值都可以转为真值

- 空对象

- 空数组

- Infinity

- '    '

## 逻辑运算符

定义：逻辑运算符用于控制程序结构。逻辑运算符有三个：

- 逻辑与(&&)：与运算

- 逻辑或(||)：或运算

- 逻辑非(!)：非运算、取反运算

&&逻辑与运算符

定义：

- 逻辑与运算符是一个二元运算符

- 当且仅当两个操作数都为真时，与运算的结构才是真，任何一个操作数为假，那么与运算的结果就是假。

- 与运算就是找false，有一个false就返回false

```js

//布尔值的与运算

        console.log(true && true) //true

        console.log(true && false) //false

        console.log(false && true) //false

        console.log(false && false) //false

        //与运算属于短路型运算

        //true && alert('hello world1')//弹

        //false && alert('hello world2') //不弹

        //非布尔值的与运算:先把操作值转为布尔值，再运算，返回原值

        console.log( 1 && 'hello') //'hello'

        console.log( 'hello' &&  1) //1

        

        console.log( 1 && NaN ) //NaN

        console.log( NaN && 1) //NaN

        console.log( NaN && 0 ) //NaN

        console.log( 0 && NaN ) // 0

        console.log( '' && abc)

        //a 报错 b空 cfalse

        console.log( 'abc' && abc)//报错

```

||逻辑或运算符

定义：

- 逻辑或运算符是一个二元运算符

- 什么时候返回真：任何一个操作的值是真，那么或运算的结果就是真

- 什么时候返回假：两个数都是假，它才会返回假。

- 或运算就是找true，有一个true就返回true

- 或运算也属于短路运算

```js

console.log( true || false )

        console.log( false || true )

        console.log( true || true)

        console.log( false || false)

        true || alert('hello world1')//不弹

        //false || alert('hello world2') //弹

        console.log(1 || 'hello') // 1

        console.log('hello' || 1) // 'hello'

        console.log( null || 'hello')//hello

```

！逻辑非运算符

逻辑非运算符用于操作一个数，一元运算符。用于对操作的值进行取反.

如果操作的值为假，非运算的结果就是真

如果操作的值为真，非运算的结果就是假

```js

let b1 = true//1.布尔值属于原始数据类型。地址：0001

        //2. 原始数据类型是不可修改的数据类型。

        //!b1//相当于重新开辟了一块内存空间，重新创建了一个新值false 地址：0002

        b1 = !b1

        console.log(b1)

        let b2 = 10 

        //b2 = !b2 //先通过调用Boolean()把10转换成布尔值true,再取反

        b2 = !!b2

        console.log(b2, typeof b2)

```

## null是什么

- null是一种原始数据类型

- null是一种特殊的对象，表示”不存在“、”空”、“没有对象“（typeof null 的返回值是'object'。）

- 这种不存在指程序级的不存在，意味意料之中、正常。

- null是一个关键字

## 什么时候出现null

- 未获取到元素

- 定义变量 预定义一个null的空值

# 12月20日 undefined

## undefined是什么

- undefined是js语法中预定义的全局常量

- undefined也表示值的不存在。

- 这种不存在指系统级的不存在，意味着出乎意料、不正常。

## 什么时候出现

- 变量未初始化

- 属性不存在 访问car.abc是不存在的属性 

- 数组元素不存在 [ 'a', 'hello', ,100]

- 函数的默认返回值

- 函数的形参

## null和undefined的关系

- null == undefined  // true

- null === undefined //false

- null和undefined都没有方法和属性

