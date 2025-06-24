---
noteId: "d42487b0460511f08a53dd9fb031ea51"
tags: []

---

## 数组是什么？

数组(Array)是一组相同类型值的有序集合。

特点：

1. 同类型：每个值的数据类型必须相同。值的类型可以是整型、浮点型、字符串型、布尔型、字符型等。
2. 有序性：数组中的每个值都有固定位置。第一个元素的下标是0，第2个元素的下标是1，依次类推，最后一个数组元素的下标是数组长度-1。
3. 固定性：数组的长度是固定的。一旦创建，长度不能更改，你不能添加或删除数组元素。

## 相关术语

- 元素：数组的每一个值被称为“元素”。
- 下标：数组的每一个值的位置使用一个整数表示，称为“下标”。

## 创建数组

### 数组初始化法

定义：声明数组时直接初始化(赋值)

创建整型数组（int, long, short, byte ）：

```csharp
int[] arrNum = {1, 2, 3, 4, 5};
```
语法结构说明

- int[]
- arrNum
- `=` :
- 花括号包裹
- 逗号分隔多个值。(注意：最后一个值后面不需要逗号)

创建浮点数类型的数组（float, double）：

```csharp
double[] grades = {90.5, 87.0, 100.0};
```
创建字符类型的数组（char）：

```csharp
char[] letters = {'A', 'B', 'C'};
```
创建字符串类型的数组（string）：

```csharp
string[] names = {"Alice", "Bob", "Charlie"};
```

创建布尔值类型的数组（bool）：

```csharp
bool[] flags = {true, false, true};
```
### new关键字法
定义：声明数组类型并指定长度。

语法
```C#
int[] 数组名 = new int[length]; //创建长度为length的空数组
数组名[index] = 值1; //修改数组元素
数组名[index] = 值2; 
```

- `new` : 用于创建类的实例
- `new int[]` 创建`int[]`类的实例
- `int[]`：具体的整型数组类，继承自System.Array
- `length`:指定数组的长度。

示例

```c#
int[] numbers = new int[5];
numbers[0] = 1;
numbers[2] = 2;
```

数组类型关系图

```c#
System.Object
    ↑
System.Array (抽象类)
    ↑
System.Int32[] (具体数组类型)
    ↑
int[] (C# 别名)
```

## 课堂练习

1. 声明一个字符型数组，存储：abcd
2. 声明一个整型数组，存储：123
3. 声明一个字符串数组，存储：张三、李四、王二
4. 声明一个浮点数组，存储：9.99，5.8，12.6
5. 声明一个布尔数组，存储：True False True

## 访问数组元素的语法

通过下标访问数组元素。

语法
```c#
数组名[下标];
```
示例
```csharp
int[] nums = {10, 20, 30};

Console.WriteLine(nums[0]); // 输出10
Console.WriteLine(nums[2]); // 输出30
```
## 修改数组元素的语法
语法
```c#
数组名[下标] = 新值;
```
示例
```c#
int[] nums = {10, 20, 30};
nums[1] = 40;
Console.WriteLine(nums[1]); // 输出40
```
## 获取数组长度

语法

```c#
数组名.Length; //返回数组长度
```
示例
```csharp
int[] nums = {1, 2, 3, 4, 5};
Console.WriteLine(nums.Length); // 输出 5
```
## 遍历数组

定义：逐个访问数组中的每一个元素。

方法1: for循环遍历


方法2：foreach方法遍历

语法（`foreach` 遍历）

```csharp
foreach (类型 变量名 in 集合)
{
    // 使用变量名访问当前元素，执行操作
}
```
`foreach` 会依次访问集合中的每个元素，直到遍历完所有元素。


示例

```csharp
int[] numbers = {1, 2, 3};
foreach (int num in numbers)
{
    Console.WriteLine(num);
}
```

输出：

```
1
2
3
```

注意

* `foreach` 循环中，**不能修改集合元素的值**（元素是只读的）。
* 适合读取集合元素，避免使用传统 `for` 循环时的索引错误。

方法3：插值字符串遍历

---
## 常见操作小结：

| 操作       | 示例                    |
| ---------- | ----------------------- |
| 声明数组   | `int[] a;`              |
| 创建数组   | `int[] a = new int[3];` |
| 初始化数组 | `int[] a = {1, 2, 3};`  |
| 获取长度   | `a.Length`              |
| 访问元素   | `a[0]`                  |
| 修改元素   | `a[1] = 100;`           |
| 遍历数组   | `for` / `foreach`       |

## 数组常见错误（要避免）

| 错误                             | 示例                    |
| -------------------------------- | ----------------------- |
| 越界访问数组                     | `a[5]`（如果长度是 5）  |
| 忘记初始化数组                   | `int[] a; a[0] = 1;`    |
| 不同类型放入数组（类型必须一致） | `int[] a = {1, "abc"};` |

---


## 变量str.split()

用途：使用分隔符将指定字符串转为数组

语法

```c#
字符串.split(分隔符)
```

示例

```#
string st = "100 100 80";
str.split(' '); //["100","100","80"]
```



## 对象string.join()

用途：用于把数组元素连接成一个字符串。

语法

```c#
string.Join(连接符,数组)
```

示例

```c#
string[] arrStr = {"C#","IS","AWESOME"};
string str = string.Join('-',arrStr);
Console.WriteLine(str);
```









```c#
for(int i = 0;i<5;i++){
    
}
foreach:发起循环，告诉编译器我要做foreach循环
foreach遍历：使用foreach方法逐个访问数组的每一个元素。
foreach(string student in students){
    
}

```

## str.split() (分割字符串)

用途

用于将字符串按指定的分隔符分割成一个字符串数组。

语法

```c#
string[] result = 字符串.Split('单字符分隔符');
```

示例

```csharp
string csv = "apple,banana,cherry";
string[] fruits = csv.Split(','); // ["apple", "banana", "cherry"]
```

## string.Join( ) (连接字)

用途

用于将字符串数组按指定的分隔符连接成一个新的字符串。

语法

```c#
string.Join("字符串分隔符", 字符串数组);
```

示例

```csharp
string[] words = { "C#", "is", "awesome" };
string sentence = string.Join(" ", words); // "C# is awesome"
```

## `Array.Sort()` 

用途：

`Array.Sort()`用于排序数组。包括：

- 正序排
- 倒序排
- 整体排序
- 局部排序

`Array.Sort()`是一个静态方法，属于 `System.Array` 类。它可以对基本类型数组（如 `int[]`、`double[]`、`string[]`）进行默认排序，也支持自定义排序规则。

基本语法

```csharp
Array.Sort(array); //默认升序排序
Array.Sort(array, comparer); //使用自定义比较器
Array.Sort(array, start, length) //局部排序
```

* `array`：要排序的一维数组。

排序整数数组

对整数数组元素直接进行比较大小后排序，默认使用升序排序（从小到大）。

```csharp
int[] numbers = { 5, 2, 8, 3, 1 };
Array.Sort(numbers);

foreach (int num in numbers)
{
    Console.Write(num + " ");  // 输出：1 2 3 5 8
}
```

排序英文字符串数组

字符串:按字典序排序

>字典序”是一种按照字典排列顺序进行比较的方法，主要应用于字符串的排序。你可以理解成：字典序就是按照我们查字典的方式比较字符串的大小，也就是一个一个字符地从左到右依次比较。

字符串排序规则：

- 从左到右逐个字符比较；
- 一旦遇到不同的字符，就看它们的 Unicode 编码 大小，谁小谁在前；
- 如果前面的字符都一样，短的字符串更小。

```c#
string[] words = { "apple", "banana", "app", "orange", "apply" };
Array.Sort(words);

foreach (string word in words)
{
    Console.Write(word);  // 输出：app apple apply banana orange
}
```

排序中文字符串数组

```c#
string[] arrStr = { "中国", "北京", "北海","安徽" };
Array.Sort(arrStr);
Console.WriteLine(arrStr[2]);//北京
```

结果

```c#
"安徽","北海","北京", "中国"
```

降序排序

```csharp
int[] arr = { 4, 2, 9, 1 };
Array.Sort(arr, (a, b) => b.CompareTo(a));  // 降序排序

foreach (var item in arr)
{
    Console.Write(item + " "); // 输出：9 4 2 1
}
```

区间排序

```csharp
int[] arr = { 3, 9, 2, 7, 6 };
Array.Sort(arr, 1, 3);  // 只对索引 1~3（9,2,7）排序

foreach (int num in arr)
{
    Console.Write(num + " "); // 输出：3 2 7 9 6
}
```

## `Array.Reverse()` 

用途：反转数组元素顺序。

语法

```c#
Array.Reverse(array, [index], [length]);
```

示例: 反转整个数组顺序

```csharp
int[] numbers = { 4, 2, 7, 1, 3 };
Array.Reverse(numbers);
// 结果：{7, 4, 3, 2, 1}
```

示例：反转区间顺序
```csharp
int[] numbers = { 4, 2, 7, 1, 3 };

// 反转索引从 2 开始，长度为 3 的子数组：7, 1, 3
Array.Reverse(numbers, 2, 3);

foreach (int num in numbers)
{
    Console.Write(num + " ");
}
// 结果：{4 2 3 1 7 }
```

------

## `Array.IndexOf()` 

用途：查找元素第一次出现的索引

```csharp
int[] numbers = { 4, 2, 7, 1, 3 };
int index = Array.IndexOf(numbers, 3);
// 返回值：2（假设原数组是 {4, 2, 7, 1, 3}）
```

- 若不存在，返回 `-1`。
- 可以指定搜索起始位置和范围。

------

## `Array.LastIndexOf()` 

用途：查找元素最后一次出现的索引

```csharp
int[] numbers = { 4, 2, 7, 1, 3 };
int lastIndex = Array.LastIndexOf(numbers, 3);
```

- 与 `IndexOf` 类似，但从尾部查找。

------

## `Array.Exists()` 

用途：判断是否存在某元素满足条件

```csharp
bool hasEven = Array.Exists(numbers, x => x % 2 == 0);
// 检查是否有偶数
```

------

## `Array.Find()`|`Array.FindAll()` 

用途：查找第一个 / 所有符合条件的元素

```csharp
int firstEven = Array.Find(numbers, x => x % 2 == 0);
int[] evens = Array.FindAll(numbers, x => x % 2 == 0);
```

------

## `Array.TrueForAll()` 

用途：判断是否全部满足某条件

```csharp
bool allPositive = Array.TrueForAll(numbers, x => x > 0);
```

------

## 总结

| 方法名             | 功能说明                 |
| ------------------ | ------------------------ |
| `Sort`             | 排序                     |
| `Reverse`          | 反转                     |
| `IndexOf`          | 查找元素位置（第一次）   |
| `LastIndexOf`      | 查找元素位置（最后一次） |
| `Exists`           | 是否存在满足条件的元素   |
| `Find` / `FindAll` | 查找元素                 |
| `TrueForAll`       | 所有元素是否满足某条件   |



Sort、Reverse、IndexOf、LastIndexOf、Exists、Find 、 FindAll、TrueForAll  

