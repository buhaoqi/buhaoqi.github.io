---
noteId: "39788f00f10811f0a08251b51a587dfd"
tags: []

---

题目一：给定三角形的三条边长 a、b、c，用海伦公式计算三角形的面积（假设给定的三条边能构成三角形）。

题目二：用控制台获取从键盘输入的半径，求圆面积。


```c#
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== 第1题：海伦公式计算三角形面积 ===");
        Console.Write("请输入边长 a: ");
        double a = Convert.ToDouble(Console.ReadLine());
        Console.Write("请输入边长 b: ");
        double b = Convert.ToDouble(Console.ReadLine());
        Console.Write("请输入边长 c: ");
        double c = Convert.ToDouble(Console.ReadLine());

        double s = (a + b + c) / 2;
        double areaTriangle = Math.Sqrt(s * (s - a) * (s - b) * (s - c));
        Console.WriteLine($"三角形面积为: {areaTriangle:F2}");
        
        Console.WriteLine("\n=== 第2题：计算圆面积 ===");
        Console.Write("请输入圆的半径: ");
        double radius = Convert.ToDouble(Console.ReadLine());
        double areaCircle = Math.PI * radius * radius;
        Console.WriteLine($"圆的面积为: {areaCircle:F2}");
        
        Console.ReadKey();
    }
}
```