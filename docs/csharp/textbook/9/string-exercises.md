---
noteId: "e0754c50df4011f0b17dfdde7a89f764"
tags: []

---

## 字符串方法练习(str.split())
练习1：一次性输入3个整数成绩，存储在数组scores中，输出平均值（精确到小数点后2位）

```csharp
//定义变量
double average = 0;
int sum = 0;
//new一个长度为3的数组
//输入一行，包括语数外三门成绩
Console.WriteLine("输入语数外三门成绩，空格隔开");
string str = Console.ReadLine();
//将str转数组
string[] scores = str.Split(' ');
for (int i=0; i<scores.Length; i++)
{
    sum += int.Parse(scores[i]);
}
average = Math.Round((double)sum / scores.Length,2); //(double)显式转换数据类型
Console.WriteLine(average);
```

练习2：声明一个整数数组，包含 5 个元素并初始化为 {1, 2, 3, 4, 5}，打印所有元素。

方法1：string.Join()

```c#
int[] arrInt = {1,2,3,4,5};
string result = string.Join(" ", arrInt);
Console.WriteLine(result);
```

方法2：foreach

```c#
int[] arrInt = {1,2,3,4,5};
string result = '';
foreach(int num in arrInt){
    result = result + string.Parse(num);
}
Console.WriteLine(result);
```

方法3：

```c#

```
方法4：

```c#

```