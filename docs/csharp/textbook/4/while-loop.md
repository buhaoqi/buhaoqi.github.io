---
noteId: "b71861d0e3f011f09203f302f54e558c"
tags: []

---


## 一、while循环是什么
while循环就是只要条件成立就执行，也就是“重复执行未知次数“。

注：for循环是重复执行指定次数。



## 二、while循环语法

```csharp
while (条件表达式)
{
    // 条件为 true，就重复执行这些代码
}
```

示例

```csharp
int i = 1;
while (i <= 5)
{
    Console.WriteLine("第 " + i + " 次问好");
    i++;
}
```

`while` 循环适合“**次数不确定，但有条件**”的场景。

---

## 三、练习题

### 1.登录密码验证

```csharp
string password = "";

while (password != "123456") 
{
    Console.Write("请输入密码：");
    password = Console.ReadLine();

    if (password != "123456")
    {
        Console.WriteLine("错误！请重试。");
    }
}

Console.WriteLine("登录成功！");
```




### 2.查询星期几

```c#
Console.WriteLine("欢迎查询星期几的英语单词");
Console.WriteLine("==========================");
bool toBeContinue = true;
while (toBeContinue)
{
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
}
```