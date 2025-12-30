---
noteId: "1ed7ac80e3fc11f09203f302f54e558c"
tags: []

---

## if的简写

当if语句的代码块内只有一条语句时，可省略花括号

```c#
if (i == 5) break;
```


## 练习题

### 1.查询星期几

题目：写一个程序，查询星期几的英语单词

要求：用户输入数字1，显示英语单词monday

```c#
Console.WriteLine("欢迎查询星期几的英语单词");
Console.WriteLine("==========================");
Console.Write("请输入1-7之间的一个数字：");
string num = Console.ReadLine();

if( num == "1") Console.WriteLine("星期一：Monday");
else if (num == "2") Console.WriteLine("星期二：Tuesday");
else if (num == "3") Console.WriteLine("星期三：Wednesday");
else if (num == "4") Console.WriteLine("星期四：Thursday");
else if (num == "5") Console.WriteLine("星期五：Fridayday");
else if (num == "6") Console.WriteLine("星期六:Saturday");
else if (num == "7") Console.WriteLine("星期日:Sunday");
else  Console.WriteLine("非法输入");
Console.WriteLine("========结束=========");
```

