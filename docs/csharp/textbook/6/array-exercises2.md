---
noteId: "0591d630df4011f0b17dfdde7a89f764"
tags: []

---

## 练习1：
分别输入3个整数成绩，存储在数组scores中，输出平均值（精确到小数点后2位）

```c#
//定义变量
double average = 0;
int sum = 0;
//new一个长度为3的数组
int[] scores = new int[3];
//分别输入语数外三门成绩
Console.WriteLine("语文成绩");
scores[0] = int.Parse(Console.ReadLine());
Console.WriteLine("数学成绩");
scores[1] = int.Parse(Console.ReadLine());
Console.WriteLine("英语成绩");
scores[2] = int.Parse(Console.ReadLine());
//计算总分
foreach(int score in scores)
{
    sum += score;
}
//平均分= 总分/3 
//Math.Round(小数,保留位数)
average = Math.Round((double)sum / scores.Length,2); //(double)显式转换数据类型
Console.WriteLine(average);
```