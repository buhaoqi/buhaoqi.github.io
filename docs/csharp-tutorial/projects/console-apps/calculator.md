---
noteId: "046e8e30810111f0ba79bd698e09cf23"
tags: []

---

## 项目1:控制台计算机

要求:创建一个能进行连续加减乘除运算的控制台计算器。

**功能：**

1.  欢迎界面。
2.  支持加法 (+), 减法 (-), 乘法 (*), 除法 (/)。
3.  处理除法除零错误。
4.  支持连续计算（询问用户是否继续）。
5.  用户输入错误时给出友好提示。

### 核心知识点

1.  **变量和数据类型**：我们使用 `double` 类型来存储数字，因为它可以表示小数，比 `int` 更适用于计算器。
2.  **输入输出**：`Console.ReadLine()` 获取用户输入（返回字符串），`Console.WriteLine()` 输出信息到屏幕。
3.  **类型转换**：`Convert.ToDouble(...)` 将用户输入的字符串转换为 `double` 数字类型，这是计算的关键。
4.  **流程控制**：
    *   `while` 循环：让程序可以一直运行，直到用户选择退出。
    *   `switch` 语句：根据不同的运算符 (`op`) 选择执行不同的代码块，比多个 `if-else` 更清晰。
    *   `if` 条件判断：用于检查除零错误和用户是否想继续。
5.  **异常处理 (try-catch)**：
    *   这是本项目最重要的概念之一！用户输入是不可靠的（可能会输入字母而不是数字）。
    *   `try` 块包含可能出错的代码。
    *   `catch (FormatException)` 专门捕获输入格式错误的异常。
    *   `catch (Exception ex)` 是一个“兜底”的捕获，可以处理所有其他未知异常。
    *   `finally` 块内的代码无论是否发生异常都会执行。
6.  **字符串插值 ($)**：`$"结果: {num1} {op} {num2} = {result}"` 是一种非常方便的拼接字符串的方式，`{}` 中的变量会被替换成它们的值。
7.  

---

### 代码实现 (Program.cs)

```csharp
using System;

namespace CalculatorApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // 显示欢迎信息
            Console.WriteLine("欢迎使用简易计算器！");
            Console.WriteLine("支持的操作： + (加), - (减), * (乘), / (除)");
            Console.WriteLine("------------------------------------------");

            // 使用一个布尔变量控制程序是否继续运行
            bool continueCalculating = true;

            while (continueCalculating)
            {
                try // 使用 try-catch 来捕获输入格式错误
                {
                    // 1. 获取第一个数字
                    Console.Write("请输入第一个数字: ");
                    double num1 = Convert.ToDouble(Console.ReadLine());

                    // 2. 获取运算符
                    Console.Write("请选择运算符 (+, -, *, /): ");
                    string op = Console.ReadLine();

                    // 3. 获取第二个数字
                    Console.Write("请输入第二个数字: ");
                    double num2 = Convert.ToDouble(Console.ReadLine());

                    // 4. 进行计算并显示结果
                    double result = 0;
                    bool validOperation = true; // 标记运算是否有效

                    // 使用 switch 语句根据不同的运算符执行不同的计算
                    switch (op)
                    {
                        case "+":
                            result = num1 + num2;
                            break;
                        case "-":
                            result = num1 - num2;
                            break;
                        case "*":
                            result = num1 * num2;
                            break;
                        case "/":
                            // 检查除数是否为零
                            if (num2 == 0)
                            {
                                // 除数为零是一种特殊的错误，单独处理
                                Console.WriteLine("错误：除数不能为零！");
                                validOperation = false;
                            }
                            else
                            {
                                result = num1 / num2;
                            }
                            break;
                        default:
                            // 如果用户输入的运算符不是 +, -, *, / 中的任何一个
                            Console.WriteLine("错误：无效的运算符！请使用 +, -, *, 或 /。");
                            validOperation = false;
                            break;
                    }

                    // 如果运算有效，才打印结果
                    if (validOperation)
                    {
                        Console.WriteLine($"结果: {num1} {op} {num2} = {result}");
                    }
                }
                catch (FormatException) // 捕获输入格式不对的异常（例如输入了字母）
                {
                    Console.WriteLine("错误：请输入有效的数字！");
                }
                catch (Exception ex) // 捕获其他未知异常
                {
                    Console.WriteLine($"发生意外错误: {ex.Message}");
                }
                finally
                {
                    // 无论是否出错，都执行下面的代码
                    Console.WriteLine("------------------------------------------");
                }

                // 5. 询问用户是否继续
                Console.Write("是否继续计算？(按 y 继续，按其他键退出): ");
                string userChoice = Console.ReadLine().ToLower(); // 转换为小写，方便判断

                if (userChoice != "y" && userChoice != "y")
                {
                    continueCalculating = false; // 如果用户不输入'y'，则改变循环条件，退出程序
                }
                Console.WriteLine(); // 打印一个空行让界面更清晰
            }

            // 告别信息
            Console.WriteLine("感谢使用计算器，再见！");
            // 防止控制台窗口立即关闭，等待用户按任意键
            Console.ReadKey();
        }
    }
}
```

---
### 进阶挑战

1.  **支持更多运算**：添加平方根 (`Math.Sqrt`)、指数运算 (`Math.Pow`) 等。
2.  **支持连续运算**：允许用户基于上一次的结果继续计算（例如，输入 `+ 5` 就在上一个结果上加5）。
3.  **计算历史**：用一个列表 (`List<string>`) 来记录每一次的计算过程，最后可以显示出来。
4.  **图形界面**：学完基础后，可以尝试用 Windows Forms 或 WPF 为这个计算器制作一个图形窗口界面。
