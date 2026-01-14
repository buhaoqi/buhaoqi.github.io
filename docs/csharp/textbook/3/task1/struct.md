---
noteId: "3d6a2ac0ef7711f0b30487fa81af44a5"
tags: []

---

# 初学者掌握C#结构体完整指南

## 一、结构体是什么？简单比喻

### **日常生活中的比喻**
```csharp
// 结构体就像一个"数据包裹"
struct StudentCard      // 学生卡
{
    public string Name;     // 姓名
    public int Age;         // 年龄
    public string Class;    // 班级
}

// 类就像一个"复杂对象"
class StudentPerson      // 学生本人
{
    // 有很多属性和行为
}
```

### **最简理解**
- **结构体**：轻量级的数据容器（像小快递盒）
- **类**：功能完整的对象（像有办公桌的员工）

## 二、为什么要用结构体？

### **适合用结构体的场景**
```csharp
// ✅ 场景1：坐标点（数据小，使用频繁）
struct Point
{
    public int X, Y;
}

// ✅ 场景2：颜色值（固定格式）
struct Color
{
    public byte R, G, B;
}

// ✅ 场景3：简单配置项
struct Settings
{
    public bool IsSoundOn;
    public int Volume;
    public string Language;
}
```

### **不适合用结构体的场景**
```csharp
// ❌ 大对象（超过16字节）
struct BigData     // 不好的例子
{
    public string Name;      // 字符串是引用类型
    public string Address;
    public string Phone;
    public DateTime Birth;
    // 复制成本高！
}

// ❌ 需要频繁修改的对象
// ❌ 需要继承的对象
```

## 三、结构体的基本语法（从零开始）

### **第1步：声明结构体**
```csharp
// 最简单的结构体
public struct Point
{
    // 字段（数据成员）
    public int X;
    public int Y;
}
```

### **第2步：创建结构体变量**
```csharp
// 方法1：先声明，后赋值
Point p1;
p1.X = 10;
p1.Y = 20;

// 方法2：声明时初始化
Point p2 = new Point();  // X=0, Y=0（默认值）

// 方法3：使用构造函数
Point p3 = new Point(10, 20);
```

### **第3步：访问结构体字段**
```csharp
// 使用点号(.)访问
Console.WriteLine($"坐标：({p1.X}, {p1.Y})");

// 修改字段值
p1.X = 30;
p1.Y = 40;
```

## 四、完整的入门示例

```csharp
using System;

namespace StructTutorial
{
    // 定义一个学生结构体
    struct Student
    {
        // 1. 字段定义
        public string Name;
        public int Age;
        public double Score;
        
        // 2. 构造函数（可选）
        public Student(string name, int age, double score)
        {
            Name = name;
            Age = age;
            Score = score;
        }
        
        // 3. 方法（可选）
        public void PrintInfo()
        {
            Console.WriteLine($"姓名：{Name}，年龄：{Age}，成绩：{Score}");
        }
        
        // 4. 属性（可选）
        public string Level
        {
            get
            {
                if (Score >= 90) return "优秀";
                if (Score >= 80) return "良好";
                if (Score >= 60) return "及格";
                return "不及格";
            }
        }
    }
    
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== 结构体基础教程 ===");
            
            // 创建结构体变量的不同方式
            Console.WriteLine("\n1. 不同创建方式：");
            
            // 方式A：使用默认值
            Student s1 = new Student();
            s1.PrintInfo();  // 输出默认值
            
            // 方式B：逐个字段赋值
            Student s2;
            s2.Name = "张三";
            s2.Age = 18;
            s2.Score = 85.5;
            s2.PrintInfo();
            
            // 方式C：使用构造函数
            Student s3 = new Student("李四", 19, 92.0);
            s3.PrintInfo();
            
            // 访问属性和方法
            Console.WriteLine($"\n2. {s3.Name}的成绩等级：{s3.Level}");
            
            // 结构体是值类型（重要！）
            Console.WriteLine("\n3. 值类型演示：");
            Student s4 = s3;  // 创建副本
            s4.Name = "王五";  // 修改副本
            
            Console.WriteLine("s3的名字：" + s3.Name);  // 还是"李四"
            Console.WriteLine("s4的名字：" + s4.Name);  // 变成"王五"
            
            Console.ReadLine();
        }
    }
}
```

## 五、结构体 vs 类的关键区别（表格对比）

| 方面 | 结构体 (struct) | 类 (class) |
|------|----------------|-----------|
| **类型** | 值类型 | 引用类型 |
| **存储位置** | 栈（通常） | 堆 |
| **内存管理** | 自动（快速） | 垃圾回收（较慢） |
| **默认值** | 所有字段为0/null | null |
| **赋值操作** | 复制整个内容 | 复制引用 |
| **适合大小** | 小（≤16字节） | 大 |
| **适合场景** | 轻量数据对象 | 复杂对象 |

## 六、实践练习：分步学习项目

### **项目1：游戏角色位置系统**

```csharp
// 第1部分：基础结构体
struct GamePosition
{
    public int X;
    public int Y;
    
    public void Move(int deltaX, int deltaY)
    {
        X += deltaX;
        Y += deltaY;
    }
    
    public void ShowPosition()
    {
        Console.WriteLine($"当前位置：({X}, {Y})");
    }
}

// 第2部分：使用练习
class GameDemo
{
    static void Main()
    {
        GamePosition player = new GamePosition();
        
        // 初始位置
        player.ShowPosition();  // (0, 0)
        
        // 移动角色
        player.Move(5, 3);
        player.ShowPosition();  // (5, 3)
        
        // 创建副本
        GamePosition enemy = player;
        enemy.Move(-2, -1);
        
        // 观察值类型特性
        player.ShowPosition();   // 还是(5, 3)
        enemy.ShowPosition();    // (3, 2)
    }
}
```

### **项目2：RGB颜色混合器**

```csharp
struct RGBColor
{
    public byte Red;
    public byte Green;
    public byte Blue;
    
    // 创建颜色
    public RGBColor(byte r, byte g, byte b)
    {
        Red = r;
        Green = g;
        Blue = b;
    }
    
    // 混合颜色
    public RGBColor Mix(RGBColor other)
    {
        return new RGBColor(
            (byte)((Red + other.Red) / 2),
            (byte)((Green + other.Green) / 2),
            (byte)((Blue + other.Blue) / 2)
        );
    }
    
    // 显示颜色值
    public void Display()
    {
        Console.WriteLine($"RGB: ({Red}, {Green}, {Blue})");
        Console.WriteLine($"十六进制: #{Red:X2}{Green:X2}{Blue:X2}");
    }
}

class ColorDemo
{
    static void Main()
    {
        RGBColor red = new RGBColor(255, 0, 0);
        RGBColor blue = new RGBColor(0, 0, 255);
        
        Console.WriteLine("红色：");
        red.Display();
        
        Console.WriteLine("\n蓝色：");
        blue.Display();
        
        Console.WriteLine("\n混合后（紫色）：");
        RGBColor purple = red.Mix(blue);
        purple.Display();
    }
}
```

## 七、常见错误和解决方法

### **错误1：忘记初始化字段**
```csharp
struct Student
{
    public string Name;
    public int Age;
}

// ❌ 错误用法
Student s;
// Console.WriteLine(s.Name); // 编译错误！

// ✅ 正确用法
Student s1 = new Student();  // 使用默认构造函数
Student s2;
s2.Name = "测试";           // 先赋值再使用
```

### **错误2：不理解值类型复制**
```csharp
struct Point { public int X, Y; }

Point p1 = new Point { X = 10, Y = 20 };
Point p2 = p1;  // 复制所有数据

p2.X = 100;     // 只修改副本

Console.WriteLine(p1.X);  // 还是10
Console.WriteLine(p2.X);  // 100
```

### **错误3：结构体太大**
```csharp
// ❌ 不好的设计
struct BigStruct
{
    public int A, B, C, D, E, F, G, H;  // 32字节！
}

// ✅ 好的设计：使用类
class BigClass
{
    public int A, B, C, D, E, F, G, H;
}
```

## 八、学习路线图（4周计划）

### **第1周：基础认知**
- 理解值类型 vs 引用类型
- 学会声明简单结构体
- 练习字段访问和赋值

### **第2周：进阶特性**
- 学习结构体构造函数
- 掌握结构体中的方法
- 理解值类型复制特性

### **第3周：实际应用**
- 实现小项目（如坐标系统）
- 学习结构体数组
- 理解性能考虑

### **第4周：最佳实践**
- 知道何时用结构体/类
- 避免常见陷阱
- 阅读和编写实际代码

## 九、简单记忆口诀

```
结构体，值类型，栈上存，复制快
字段多，不要用，16内，效率高
小数据，频繁用，坐标点，最适合
改副本，原不变，要记牢，值特性
```

## 十、下一步学习建议

掌握了结构体基础后，可以学习：
1. **结构体与类的混合使用**
2. **结构体实现接口**
3. **readonly struct**（C# 7.2+）
4. **ref struct**（栈上分配）
5. **结构体在游戏开发中的应用**

记住：**从简单开始，多做练习**。结构体是C#中一个相对简单的概念，通过实际编码很快就能掌握！



## 结构体变量练习题

## 练习题1：图书管理系统基础

**题目描述**：
创建一个表示图书的结构体 `Book`，包含以下字段：
- `bookId` (int): 图书编号
- `title` (string): 图书标题
- `author` (string): 作者
- `price` (double): 价格
- `isBorrowed` (bool): 是否借出

要求：
1. 声明结构体 `Book`
2. 定义两个图书变量 `book1` 和 `book2`
3. 分别给这两个变量赋值（数据自拟）
4. 输出两本图书的详细信息
5. 比较两本书的价格，输出价格更高的图书标题

**示例输出**：
```
图书1信息：
编号：001，标题：《C#编程入门》，作者：张三，价格：45.8，状态：未借出

图书2信息：
编号：002，标题：《数据结构与算法》，作者：李四，价格：68.5，状态：已借出

价格更高的图书是：《数据结构与算法》
```

## 练习题2：学生成绩统计

**题目描述**：
设计一个学生成绩结构体 `StudentScore`，包含：
- `studentId` (string): 学号
- `name` (string): 姓名
- `chinese` (int): 语文成绩 (0-100)
- `math` (int): 数学成绩 (0-100)
- `english` (int): 英语成绩 (0-100)

要求：
1. 声明结构体 `StudentScore`
2. 在结构体中添加一个方法 `GetAverageScore()` 用于计算平均分
3. 添加一个方法 `GetTotalScore()` 用于计算总分
4. 添加一个方法 `GetGradeLevel()` 根据平均分返回等级（90+为A，80-89为B，70-79为C，60-69为D，60以下为E）
5. 创建3个学生的成绩变量
6. 输出每个学生的详细信息、总分、平均分和等级
7. 找出平均分最高的学生并输出其姓名

**示例输出**：
```
学生成绩信息：
学号：2022001，姓名：王明，语文：85，数学：92，英语：78
总分：255，平均分：85.0，等级：B

学号：2022002，姓名：李华，语文：76，数学：88，英语：95
总分：259，平均分：86.3，等级：B

学号：2022003，姓名：张伟，语文：92，数学：96，英语：90
总分：278，平均分：92.7，等级：A

平均分最高的学生是：张伟
```

## 练习题3：几何图形计算

**题目描述**：
创建几何图形相关的结构体：

1. `Point` 点结构体
   - `x` (double): x坐标
   - `y` (double): y坐标

2. `Rectangle` 矩形结构体
   - `topLeft` (Point): 左上角点
   - `width` (double): 宽度
   - `height` (double): 高度

3. `Circle` 圆形结构体
   - `center` (Point): 圆心
   - `radius` (double): 半径

要求：
1. 声明以上三个结构体
2. 为 `Rectangle` 添加方法：`GetArea()` 计算面积，`GetPerimeter()` 计算周长
3. 为 `Circle` 添加方法：`GetArea()` 计算面积，`GetCircumference()` 计算周长
4. 为 `Rectangle` 添加方法：`ContainsPoint(Point p)` 判断点是否在矩形内
5. 创建以下图形：
   - 矩形：左上角(0,0)，宽=10，高=5
   - 圆形：圆心(5,5)，半径=3
   - 点：(3,2)
6. 输出：
   - 矩形和圆形的面积、周长
   - 点(3,2)是否在矩形内
   - 矩形和圆形的面积比较

**示例输出**：
```
几何图形信息：
矩形：左上角(0,0)，宽度=10，高度=5
面积：50.00，周长：30.00

圆形：圆心(5,5)，半径=3
面积：28.27，周长：18.85

点(3,2)是否在矩形内：是

面积比较：
矩形面积大于圆形面积：是
```

## 附加挑战题：简单库存管理系统

**题目描述**：
创建一个商品库存结构体 `Product`，包含：
- `productId` (int): 商品编号
- `name` (string): 商品名称
- `category` (string): 商品类别
- `unitPrice` (decimal): 单价
- `quantity` (int): 库存数量
- `reorderLevel` (int): 补货阈值（库存低于此值需要补货）

要求：
1. 声明结构体 `Product`
2. 添加方法：`GetTotalValue()` 计算商品总价值（单价×数量）
3. 添加方法：`NeedsReorder()` 判断是否需要补货
4. 添加方法：`Sell(int amount)` 销售商品（减少库存，库存不足时提示）
5. 添加方法：`Restock(int amount)` 补货商品（增加库存）
6. 创建3个商品实例
7. 模拟销售和补货操作
8. 输出所有商品信息，并列出需要补货的商品

**示例操作流程**：
```
初始状态：
商品1：鼠标，库存50，单价89.9
商品2：键盘，库存20，单价199.0
商品3：显示器，库存5，单价1599.0

操作：
1. 销售20个鼠标
2. 销售25个键盘（库存不足，只销售20个）
3. 给显示器补货10个

输出：
当前库存状态：
鼠标：库存30，总价值2697.0，需要补货：否
键盘：库存0，总价值0.0，需要补货：是
显示器：库存15，总价值23985.0，需要补货：否

需要补货的商品：键盘
```

这些练习题从基础到进阶，涵盖了结构体的声明、字段定义、方法添加、实例创建和使用等各个方面，适合初学者循序渐进地掌握结构体的用法。


## 结构体变量练习题答案

## 练习题1答案：图书管理系统基础

```csharp
using System;

namespace StructExercise1
{
    class Program
    {
        // 1. 声明结构体 Book
        struct Book
        {
            public int bookId;
            public string title;
            public string author;
            public double price;
            public bool isBorrowed;
        }
        
        static void Main(string[] args)
        {
            // 2. 定义两个图书变量
            Book book1;
            Book book2;
            
            // 3. 分别给这两个变量赋值
            book1.bookId = 001;
            book1.title = "《C#编程入门》";
            book1.author = "张三";
            book1.price = 45.8;
            book1.isBorrowed = false;
            
            book2.bookId = 002;
            book2.title = "《数据结构与算法》";
            book2.author = "李四";
            book2.price = 68.5;
            book2.isBorrowed = true;
            
            // 4. 输出两本图书的详细信息
            Console.WriteLine("图书1信息：");
            Console.WriteLine($"编号：{book1.bookId:D3}，标题：{book1.title}，作者：{book1.author}，价格：{book1.price}，状态：{(book1.isBorrowed ? "已借出" : "未借出")}");
            
            Console.WriteLine("\n图书2信息：");
            Console.WriteLine($"编号：{book2.bookId:D3}，标题：{book2.title}，作者：{book2.author}，价格：{book2.price}，状态：{(book2.isBorrowed ? "已借出" : "未借出")}");
            
            // 5. 比较两本书的价格，输出价格更高的图书标题
            Console.WriteLine("\n价格更高的图书是：");
            if (book1.price > book2.price)
            {
                Console.WriteLine(book1.title);
            }
            else if (book2.price > book1.price)
            {
                Console.WriteLine(book2.title);
            }
            else
            {
                Console.WriteLine("两本书价格相同");
            }
            
            Console.ReadLine();
        }
    }
}
```

## 练习题2答案：学生成绩统计

```csharp
using System;

namespace StructExercise2
{
    class Program
    {
        // 1. 声明结构体 StudentScore
        struct StudentScore
        {
            public string studentId;
            public string name;
            public int chinese;
            public int math;
            public int english;
            
            // 2. 计算平均分的方法
            public double GetAverageScore()
            {
                return (chinese + math + english) / 3.0;
            }
            
            // 3. 计算总分的方法
            public int GetTotalScore()
            {
                return chinese + math + english;
            }
            
            // 4. 根据平均分返回等级
            public char GetGradeLevel()
            {
                double average = GetAverageScore();
                if (average >= 90) return 'A';
                if (average >= 80) return 'B';
                if (average >= 70) return 'C';
                if (average >= 60) return 'D';
                return 'E';
            }
        }
        
        static void Main(string[] args)
        {
            // 5. 创建3个学生的成绩变量
            StudentScore student1;
            student1.studentId = "2022001";
            student1.name = "王明";
            student1.chinese = 85;
            student1.math = 92;
            student1.english = 78;
            
            StudentScore student2;
            student2.studentId = "2022002";
            student2.name = "李华";
            student2.chinese = 76;
            student2.math = 88;
            student2.english = 95;
            
            StudentScore student3;
            student3.studentId = "2022003";
            student3.name = "张伟";
            student3.chinese = 92;
            student3.math = 96;
            student3.english = 90;
            
            // 6. 输出每个学生的详细信息
            Console.WriteLine("学生成绩信息：");
            
            PrintStudentInfo(student1);
            PrintStudentInfo(student2);
            PrintStudentInfo(student3);
            
            // 7. 找出平均分最高的学生
            double avg1 = student1.GetAverageScore();
            double avg2 = student2.GetAverageScore();
            double avg3 = student3.GetAverageScore();
            
            Console.WriteLine("\n平均分最高的学生是：");
            if (avg1 >= avg2 && avg1 >= avg3)
            {
                Console.WriteLine(student1.name);
            }
            else if (avg2 >= avg1 && avg2 >= avg3)
            {
                Console.WriteLine(student2.name);
            }
            else
            {
                Console.WriteLine(student3.name);
            }
            
            Console.ReadLine();
        }
        
        // 辅助方法：打印学生信息
        static void PrintStudentInfo(StudentScore student)
        {
            Console.WriteLine($"\n学号：{student.studentId}，姓名：{student.name}，语文：{student.chinese}，数学：{student.math}，英语：{student.english}");
            Console.WriteLine($"总分：{student.GetTotalScore()}，平均分：{student.GetAverageScore():F1}，等级：{student.GetGradeLevel()}");
        }
    }
}
```

## 练习题3答案：几何图形计算

```csharp
using System;

namespace StructExercise3
{
    class Program
    {
        // 1. Point 点结构体
        struct Point
        {
            public double x;
            public double y;
        }
        
        // 2. Rectangle 矩形结构体
        struct Rectangle
        {
            public Point topLeft;
            public double width;
            public double height;
            
            // 计算面积
            public double GetArea()
            {
                return width * height;
            }
            
            // 计算周长
            public double GetPerimeter()
            {
                return 2 * (width + height);
            }
            
            // 判断点是否在矩形内
            public bool ContainsPoint(Point p)
            {
                return p.x >= topLeft.x && 
                       p.x <= topLeft.x + width &&
                       p.y >= topLeft.y && 
                       p.y <= topLeft.y + height;
            }
        }
        
        // 3. Circle 圆形结构体
        struct Circle
        {
            public Point center;
            public double radius;
            
            // 计算面积
            public double GetArea()
            {
                return Math.PI * radius * radius;
            }
            
            // 计算周长
            public double GetCircumference()
            {
                return 2 * Math.PI * radius;
            }
        }
        
        static void Main(string[] args)
        {
            // 5. 创建图形
            Rectangle rect;
            rect.topLeft.x = 0;
            rect.topLeft.y = 0;
            rect.width = 10;
            rect.height = 5;
            
            Circle circle;
            circle.center.x = 5;
            circle.center.y = 5;
            circle.radius = 3;
            
            Point testPoint;
            testPoint.x = 3;
            testPoint.y = 2;
            
            // 6. 输出信息
            Console.WriteLine("几何图形信息：");
            
            Console.WriteLine($"\n矩形：左上角({rect.topLeft.x},{rect.topLeft.y})，宽度={rect.width}，高度={rect.height}");
            Console.WriteLine($"面积：{rect.GetArea():F2}，周长：{rect.GetPerimeter():F2}");
            
            Console.WriteLine($"\n圆形：圆心({circle.center.x},{circle.center.y})，半径={circle.radius}");
            Console.WriteLine($"面积：{circle.GetArea():F2}，周长：{circle.GetCircumference():F2}");
            
            Console.WriteLine($"\n点({testPoint.x},{testPoint.y})是否在矩形内：{(rect.ContainsPoint(testPoint) ? "是" : "否")}");
            
            // 比较面积
            double rectArea = rect.GetArea();
            double circleArea = circle.GetArea();
            Console.WriteLine($"\n面积比较：");
            Console.WriteLine($"矩形面积大于圆形面积：{(rectArea > circleArea ? "是" : "否")}");
            Console.WriteLine($"矩形面积：{rectArea:F2}，圆形面积：{circleArea:F2}，差值：{Math.Abs(rectArea - circleArea):F2}");
            
            Console.ReadLine();
        }
    }
}
```

## 附加挑战题答案：简单库存管理系统

```csharp
using System;

namespace StructChallenge
{
    class Program
    {
        // 1. 声明结构体 Product
        struct Product
        {
            public int productId;
            public string name;
            public string category;
            public decimal unitPrice;
            public int quantity;
            public int reorderLevel;
            
            // 2. 计算商品总价值
            public decimal GetTotalValue()
            {
                return unitPrice * quantity;
            }
            
            // 3. 判断是否需要补货
            public bool NeedsReorder()
            {
                return quantity <= reorderLevel;
            }
            
            // 4. 销售商品
            public int Sell(int amount)
            {
                if (amount <= quantity)
                {
                    quantity -= amount;
                    Console.WriteLine($"成功销售 {amount} 个{name}");
                    return amount;
                }
                else
                {
                    int soldAmount = quantity;
                    Console.WriteLine($"库存不足！{name} 只有 {quantity} 个，已全部销售");
                    quantity = 0;
                    return soldAmount;
                }
            }
            
            // 5. 补货商品
            public void Restock(int amount)
            {
                if (amount > 0)
                {
                    quantity += amount;
                    Console.WriteLine($"成功补货 {amount} 个{name}，当前库存：{quantity}");
                }
            }
            
            // 显示商品信息
            public void DisplayInfo()
            {
                string status = NeedsReorder() ? "是" : "否";
                Console.WriteLine($"{name}：库存{quantity}，单价{unitPrice:F1}，总价值{GetTotalValue():F1}，需要补货：{status}");
            }
        }
        
        static void Main(string[] args)
        {
            Console.WriteLine("初始状态：");
            
            // 6. 创建3个商品实例
            Product product1;
            product1.productId = 1001;
            product1.name = "鼠标";
            product1.category = "外设";
            product1.unitPrice = 89.9m;
            product1.quantity = 50;
            product1.reorderLevel = 20;
            
            Product product2;
            product2.productId = 1002;
            product2.name = "键盘";
            product2.category = "外设";
            product2.unitPrice = 199.0m;
            product2.quantity = 20;
            product2.reorderLevel = 10;
            
            Product product3;
            product3.productId = 1003;
            product3.name = "显示器";
            product3.category = "显示设备";
            product3.unitPrice = 1599.0m;
            product3.quantity = 5;
            product3.reorderLevel = 3;
            
            // 显示初始信息
            product1.DisplayInfo();
            product2.DisplayInfo();
            product3.DisplayInfo();
            
            Console.WriteLine("\n操作记录：");
            
            // 7. 模拟销售和补货操作
            product1.Sell(20);     // 销售20个鼠标
            product2.Sell(25);     // 尝试销售25个键盘（库存不足）
            product3.Restock(10);  // 给显示器补货10个
            
            Console.WriteLine("\n当前库存状态：");
            product1.DisplayInfo();
            product2.DisplayInfo();
            product3.DisplayInfo();
            
            // 8. 列出需要补货的商品
            Console.WriteLine("\n需要补货的商品：");
            if (product1.NeedsReorder())
                Console.WriteLine(product1.name);
            if (product2.NeedsReorder())
                Console.WriteLine(product2.name);
            if (product3.NeedsReorder())
                Console.WriteLine(product3.name);
            
            // 如果没有需要补货的商品
            if (!product1.NeedsReorder() && !product2.NeedsReorder() && !product3.NeedsReorder())
            {
                Console.WriteLine("暂无需要补货的商品");
            }
            
            Console.ReadLine();
        }
    }
}
```

## 代码使用说明：

1. **运行方法**：
   - 将每个练习的代码分别保存为 `.cs` 文件
   - 使用命令行编译：`csc 文件名.cs`
   - 运行编译后的程序：`文件名.exe`

2. **代码结构说明**：
   - 每个练习都包含完整的命名空间和类定义
   - 结构体定义在类内部（也可以是外部）
   - Main 方法中是具体的测试代码

3. **关键知识点**：
   - 结构体的声明和定义
   - 结构体字段的访问和赋值
   - 结构体中方法的定义
   - 结构体变量的使用和比较

4. **扩展建议**：
   - 可以尝试修改字段类型
   - 可以添加更多方法
   - 可以尝试将结构体数组化处理多个数据
   - 可以尝试使用结构体作为方法参数和返回值