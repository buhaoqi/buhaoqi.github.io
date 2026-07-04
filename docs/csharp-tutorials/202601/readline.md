


例 9.2 请编写程序，从控制台接收用户输入的昵称，并输出欢迎信息。

首先，这道题的目标是输出欢迎信息，但用户输入什么昵称，值是不确定的。

我们可以先声明一个 nickName 变量，不赋值，先把解题的基本结构写出来。

```csharp
string nickName;
Console.WriteLine("欢迎你!" + nickName);
```

因为没赋值，编译器立刻爆红。我们需要赋值，在变量声明语句的下一行输入：
```csharp
string nickName;
nickName = Console.ReadLine();
Console.WriteLine("欢迎你!" + nickName);
```
通过`Console.ReadLine()`方法，可以获取到用户在控制台中输入的内容,

拿到用户输入的内容后，再赋值给 nickName。

不过，还需要输出一个提示语：提示用户输入昵称，在赋值语句的前面添加一行代码：
```csharp
string nickName;
Console.WriteLine("请输入昵称:");
nickName = Console.ReadLine();
Console.WriteLine("欢迎你!" + nickName);
```

点击运行，输入“奇奇“，输入完之后，记得敲下回车。

这样，带有昵称的欢迎信息就显示出来了。