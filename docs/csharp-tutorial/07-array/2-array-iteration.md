---
noteId: "a05bd5d062ae11f0a138bb2f2278db69"
tags: []

---
## **开场**  
“大家好！欢迎观看《C#初学者实例教程》的第50课《遍历数组》。
我是村长。

本期视频的知识点有四个：

1. 什么是数组遍历？
2. 为什么要遍历数组？
3. 如何用 for 循环遍历数组（带索引）
4. 如何用 foreach 循环遍历数组（只读，简洁）
5. 两种遍历方式的对比与适用场景
6. 实战小例子：打印数组、求和、找最大值等

---

## 遍历数组是什么？

**遍历数组，简单来说，就是逐个访问数组中的每一个元素。**

它强调的不是访问数组中的某一个元素，而是从头到尾依次访问数组中的每一个元素。

比如要遍历下面这个整型数组，把数组中的5个数字逐个输出到控制台中。

```c#
int[] numbers = { 1, 2, 3, 4, 5 };
```
通常有两种方法：

- 一种是使用索引遍历，也就是使用for循环遍历。
- 另一种是不使用索引遍历，也就是foreach法。


## For循环遍历

使用**`for` 循环** 遍历数组，是最传统，也是最灵活的一种方式。你可以这样写：

```csharp linenums="1"
for(int i = 0; i < 5; i++){ //因为数组的长度是5，所以i<5; 但是这样就把数组的长度写死了。更常见的做法是，我们可以通过scores.Length动态获取数组的长度；
    Console.WriteLine(numbers[i]); //然后使用Console.WriteLine，借助索引，把每个元素输出到控制台，最后运行一下。
} 
```

这样，就完成了一次最基本的数组遍历。


## foreach循环遍历

foreach循环一种更简洁的遍历方式。它的最大特点是：不需要借助索引。语法如下

```c#
foreach (数据类型 迭代变量 in 数组)
{
    // 循环体：对每个元素要做的事情
}
```

- foreach关键字用于发起循环
- 使用数据类型声明一个变量，这个变量就是迭代变量。在每次循环中，它会依次对应数组的每个元素。也就是说你不需要关心索引，迭代变量能帮你直接拿到每一个**数组元素**。
- in表示从后面的数组中依次取出一个元素
- 花括号内，就是我们在遍历过程中要做的事情


接下来，我们使用foreach循环重写上面的案例
```c#
foreach(int n in numbers ){
    Console.WriteLine(n);
}
```

- 使用foreach发起循环
- 在小括号内，声明一个int类型的变量,我命名它为n，变量n就是迭代变量。
- in后面填写数组名称numbers
- 在循环体内，直接打印迭代变量n就可以了

点击运行，可以看到两次遍历的结果是一样的。


## +1输出


那什么时候使用for循环？什么时候使用foreach循环呢？


请看下面这个案例

foreach遍历

```c#
foreach(int n in numbers){
    n += 1;//迭代变量是一个只读变量，它只能用来读取数组元素，不能用来修改。
    Console.WriteLine(n);
}

```

for循环变量

```c#
for(int i = 0; i < numbers.Length; i++)
{
    numbers[i] += 1;
    Console.WriteLine(numbers[i]); 
}
```
记住两点：

1. 如果你的遍历中需要使用索引，就选择for循环遍历。（使用for循环遍历的最大特点是：借助索引。）
2. 相反，如果你的遍历中不使用索引，首选foreach循环，因为它的语法更简洁。


## 格式化输出

为什么要遍历数组？简单说，因为我们想在遍历的过程中“做点事情”。比如这里有一个存储数学分数的数组

```c#
double[] mathScores = {85,96,88,55,100};
```

我希望按照下面这样的格式打印每个元素。

```
第1个学生的数学成绩是85。
```

因为需要用到索引，所以，我使用for循环来遍历：

```c#
for(int i = 0; i < mathScores.Length; i++) 
{
    Console.WriteLine("第{0}个学生的数学成绩是{1}。", i + 1, mathScores[i]);
}
```

## 数学计算

除了格式化输出之外，我们还可以在遍历过程中，进行数学计算。比如，计算这五名同学的数学平均分

```c#
double sum = 0;
foreach(double score in mathScores){
    sum += score;
}
Console.WriteLine(sum / mathScores.Length);
```

## 最值判断

找出分数最高的同学

```c#
double maxValue = mathScores[0];
int index = 0;
for(int i = 0; i < mathScores.Length; i++){
    if(mathScores[i] > maxValue ){
        maxValue = mathScores[i];
        index = i;
    }
        
}
Console.WriteLine("第{0}名的同学的分数最高：{1}分",index + 1,maxValue);
```

要找最小值？只需要把 `>` 改成 `<`。

## 查找某个值是否存在

比如：查找数组中是否有 99。

```csharp
int[] nums = { 1, 3, 5, 7 };
bool found = false;

foreach (int n in nums)
{
    if (n == 99)
    {
        found = true;
        break;
    }
}
Console.WriteLine(found ? "找到了！" : "没找到！");
```

## 找出所有大于10的元素

```csharp
int[] nums = { 5, 12, 8, 20, 3 };

foreach (int n in nums)
{
    if (n > 10)
    {
        Console.WriteLine(n);
    }
}
```

---

## 总结

🎙️
好了，今天的 C# 遍历数组教程就到这里！
我们学习了如何用 `for` 和 `foreach` 遍历数组，掌握了数组操作的基础技能。

- 打印每个元素
- 计算所有数字的总和、平均值
- 查找最大值或最小值
- 对每个元素进行修改、判断、格式化等操作

---

## 结束语

本节课就到这里，这里是不好奇编程，我是张杰。
如果这个视频对你有帮助，别忘了点赞、收藏、关注，感谢观看，我们下期再见！

下节预告：《》

慢慢学，一点点进步就很好！
