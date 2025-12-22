---
noteId: "facfd500db4b11f0b2d6c1869acc64b1"
tags: []

---

## 第1部分：习题答案

### 项目一 算法与程序基础

**一、选择题**  

```
1. C 2. D 3. C 4. A 5. C 
6. D 7. C 8. A 9. A 10. C  
11. C 12. D 13. B 14. D 15. C 
16. C 17. D 18. B 19. D 20. A  
21. D 22. A 23. D 24. C 25. B 
26. D 27. A 28. C 29. D 30. A  
31. C 32. D 33. C 34. A 35. D  
```

**二、填空题**  
1. 规则、一系列运算  
2. 算法效率  
3. 时间、空间、时间复杂度、空间复杂度  
4. 确定性、可行性  
5. 规模  
6. 操作、控制结构  

**三、判断题**  
```
1. √ 2. √ 3. × 4. √ 5. √  
6. √ 7. √ 8. √ 9. √ 10. × 
11. √ 12. ×  13. × 14. × 15. ×   
```
---

### 项目二 C#概述

**一、选择题**  
```
1. C 2. D 3. C 4. D 5. D 
6. B 7. D 8. B 9. B 10. A  
11. D 12. B 13. B 14. C 15. A 
16. B 17. C 18. AD 19. B  
```
**二、判断题**  
```
1. √ 2. √ 3. √ 4. √  
```
**三、填空题**  
1. Main  
2. ReadLine  
3. void  
4. .cs  
5. 第一个输出RP后换行，第二个不换  
6. using  
7. 公共语言运行时  

**四、简答题**  
1. .NET是一个运行时平台，CLR是.NET框架的底层，C#是.NET的核心开发语言。  
2. 控制台方式用于在DOS状态下输出程序结果，执行效率较高；Windows应用程序用于开发窗体程序，功能强大但执行效率相对较低。  

---

### 项目三 C#的语言基础

**一、选择题** 
```
1. C 2. D 3. B 4. B 5. A 
6. D 7. A 8. B 9. C 10. C  
11. D 12. A 13. B 14. A 15. A 
16. C 17. B 18. B 19. C 20. B  
21. D 22. C 23. C 24. D 25. A 
26. C 27. A 28. D 29. B 30. A  
31. C 32. C 33. C 34. B 35. A 
36. C 37. D  
```

**二、填空题**  
1. 左  
2. const  
3. true, false  
4. float, double, decimal  
5. enum  
6. 装箱  
7. 简单类型、枚举类型、结构类型  
8. object  
9. (int) d  
10. 值类型、引用类型  

---

### 项目四 C#的控制结构

**一、选择题**  
```
1. C 2. D 3. C 4. B 5. D 
6. B 7. D 8. C 9. C 10. C  
11. A 12. B 13. B 14. A 15. C 
16. C 17. C 18. C 19. C 20. C  
21. D 22. D 23. B 24. C 25. C 
26. B  
```

**二、填空题**  
1. break  
2. 5  
3. `>=60`  
4. 135  
5. 7  
6. max = 2  
7. 未成年人  
8. for  
9. 0  
10. 结束本次循环，继续下一次循环  
11. for；do…while；while  
12. 第一个输出RP后换行，第二个不换  
13. default  
14. 7  
15. false  

三、判断题

```
1. ×  2. ×  3. √  4. ×  5. × 
6. √  7. ×  8. ×  9. ×  10. √ 
11. ×  12. √  13. ×  14. ×  15. × 
```

四、程序分析题

```
1. sum = 1 2. max = 2 3. 30 4. 25 5. ^
```

五、程序填空题

```
1. [1]mu1  2. [1]i*i 3. [1]k++ [2]k
```

**六、程序改错题**
1. 第9行改为：if(minu == 0)  
2. 第5行改为：int sum1 = 0;  
3. 第12行改为：Console.WriteLine(“最大值为{0},次大值为{1}”, max, max1);  
4. 第2行改为：for (i = 1; i <= 100; i = i + 2)  
5. 第6行改为：continue;  

**七、编程题**
1. 水仙花数程序：
```csharp
using System;
class Example1
{
    static void Main(string[] args)
    {
        int a, i, b, c, t;
        for (i = 100; i <= 999; i++)
        {
            t = i;
            a = t % 10; t = t / 10; b = t % 10; c = t / 10;
            if (i == a * a * a + b * b * b + c * c * c)
                Console.WriteLine("i={0}", i);
        }
        Console.ReadLine();
    }
}
```

2. 最大公约数程序：
```csharp
static void Main(string[] args)
{
    int m, n, i, j, max = 0;
    Console.WriteLine("请输入m的值: ");
    m = int.Parse(Console.ReadLine());
    Console.WriteLine("请输入n的值: ");
    n = int.Parse(Console.ReadLine());
    if (m < n) i = m; else i = n;
    for (j = i; j > 0; j--)
        if (m % j == 0 && n % j == 0)
        {
            max = j;
            break;
        }
    Console.WriteLine("最大公约数是: {0}", max);
    Console.ReadLine();
}
```

3. 最小公倍数程序：
```csharp
static void Main(string[] args)
{
    int m, n, i, j, min = 0;
    Console.WriteLine("请输入m的值: ");
    m = int.Parse(Console.ReadLine());
    Console.WriteLine("请输入n的值: ");
    n = int.Parse(Console.ReadLine());
    if (m > n) i = m; else i = n;
    for (j = i; ; j++)
        if (j % m == 0 && j % n == 0)
        {
            min = j;
            break;
        }
    Console.WriteLine("最小公倍数是: {0}", min);
    Console.ReadLine();
}
```

---
### 项目五 Windows应用程序开发

**一、选择题**  

```
1. A 2. D 3. C 4. D 5. A 
6. C 7. C 8. C 9. B 10. A  
11. A 12. A 13. D 14. B 15. C 
16. D 17. A 18. B 19. D 20. B  
```

**二、判断题**  
```
1. √ 2. × 3. √ 4. × 5. ×  
6. √ 7. × 8. √ 9. √ 10. √  
```

**三、填空题**  
1. 代码窗口  
2. 属性、方法、事件  
3. 500  
4. Visible  
5. Multiline  
6. 水平、垂直  
7. 毫秒、Tick  
8. ListBox1.Items[ListBox1.Items.count-1]  
9. RemoveAt  
10. 0  

**四、程序分析题**  
1. 111 444 333 222  
2. C#  
3. bag Pen  
4. 0 0 0 0 1  
5. 高一（2）班  
6. item CCC  
7. 湖北  
8. 爱好体育音乐  
9. 我来自上海  
10. ①345 ②12  

**五、程序填空题**  
1. [1] int n = 0; [2] n = 0;  
2. [1] listBox1.Items.Add(i)；[2] textBox1.Text = sum.ToString()  
3. [1] radioButton1_CheckedChanged；[2] textBox1.Font = new Font(zt, zh)  
4. [1] timer1.Enabled = false；[2] 100  

**六、程序改错题**  
1. 错误1：第6行 x = textBox1.Text; 改正：x = int.Parse(textBox1.Text)  
   错误2：第11行 textBox2.Text = x; 改正：textBox2.Text = x.ToString()  
2. 错误1：第3行 listBox1.Items.Add(s); 改正：listBox1.Items.AddRange(s)  
   错误2：第5行 listBox1.Items.Add(3,"计算机基础"); 改正：listBox1.Items.Insert(3,"计算机基础")  

---

### 项目六 数组

**一、选择题**  

```
1. A 2. D 3. A 4. B 5. D 
6. C 7. D 8. D 9. D 10. C  
11. B 12. B 13. A 14. C 15. C 
16. D 17. C 18. D  
```

**二、填空题**  
1. Array  
2. Length  
3. 10、7  
4. 0、3  
5. N  
6. 引用  
7. 321  
8. 2  
9. 39  
10. foreach  

**三、程序题**  

1. 输出结果：98 89 68 78 56  
2. 从数组x复制到数组y，数组y各元素值如下：1 3 2 6 7  
   排序后数组x各元素值：3 4 5 8 9  
3. 输出结果：  
   1 2 3  
   4 5 6 7 8  
   5 6  
4. [1] a[i+1] = a[j]；[2] a[i+1]  
5. [1] max < a[i]；[2] min = a[i]  
6. 第3行错误，应改为：for(int i = 0; i < myArray.Length; i++)  

---

### 项目七 C#面向对象基础

**一、选择题**  

```
1. C 2. D 3. D 4. B 5. B 
6. D 7. D 8. A 9. D 10. D  
```

**二、填空题**  
1. 类、类名  
2. 读写  
3. 实例成员  
4. 静态成员、实例成员  
5. 形参、实参  
6. 类  
7. set访问器  
8. value  
9. return  
10. MyClass()  
11. ref、out  
12. new  
13. class  
14. 类名 变量名 = new 类名()  
15. 引用  
16. public class student()  
17. 构造函数  

**三、判断题** 

1. √ 2. × 3. × 4. √ 5. √ 6. ×  

**四、程序分析题**  
1. 输出结果：  
   A  
   B  
2. 输出结果：使用Params参数!使用两个整型参数!使用Params参数!  
3. 输出结果：age = 31  

---

### 项目八 C#面向对象编程

**一、选择题**  

```
1. B 2. D 3. C 4. B 5. D 
6. B 7. D 8. A 9. C 10. B  
11. C 12. D 13. B 14. D 15. C 
16. D 17. D 18. A 19. B 20. A  
21. D 22. C 23. B 24. B 25. A 
26. B 27. A 28. A 29. A 30. C  
31. C 32. A 33. A 34. B 35. C 
36. D 37. D 38. B 39. A 40. C  
41. D 42. C 43. D 44. A 45. C 
46. B 47. B 48. D 49. B 50. B  
```

**二、填空题**  
1. 对象、类  
2. 属性、行为  
3. 初始化默认值  
4. static、const  
5. Object  
6. 委托  
7. 拆箱  
8. 类  
9. 读写  
10. 只写  
11. 抽象  
12. 接口  
13. 消息传递  
14. 多态  
15. 封装  
16. private  
17. 构造函数  
18. virtual  
19. abstract  
20. Readonly  
21. 接口  
22. value  
23. abstract  
24. return  
25. interface :  
26. 类  
27. 属性  
28. 封装  
29. public  
30. 方法名称  
31. 继承  
32. ReadLine  
33. internal  
34. 当前类、其子类  
35. 类  
36. private  
37. new  
38. sealed  
39. 基类  
40. base  

**三、判断题**  

```
1. √ 2. × 3. √ 4. × 5. √ 
6. × 7. √ 8. √ 9. √ 10. ×  
11. √ 12. √ 13. √ 14. √ 15. × 
16. √ 17. × 18. √ 19. × 20. √  
```
**四、程序分析题**  
1. 输出结果：你好，我是一名学生  
2. 输出结果：12.56  
3. 输出结果：35和55  
4. 输出结果：the sum is 4  

**五、程序填空题**  
1. [1] ref test  
2. [1] abstract；[2] override  

**六、程序改错题**  
1. 错误位置为 //4，应改为：Console.WriteLine(teacher.name);  
2. 错误位置为 //2，因为virtual方法必须在派生类中重写才可以使用，因此不能声明为private，可以将private修改为public、protected或者internal。  
3. 错误位置为 //1和 //2，因为接口中不能包含字段，删除即可。  

**七、编程题**

1. C#类继承习题：定义圆类和圆柱类

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication5
{
    class Program
    {
        static void Main(string[] args)
        {
            Cylinder cylinder = new Cylinder();
            cylinder.R = 10;
            cylinder.H = 20;
            cylinder.show();
            Console.Read();
        }
    }

    class Circle
    {
        private double r;
        
        public Circle()
        {
            R = 0;
        }
        
        public Circle(double r)
        {
            R = r;
        }
        
        public double R
        {
            set { r = value >= 0 ? value : 0; }
            get { return r; }
        }
        
        public double Area()
        {
            return Math.PI * r * r;
        }
        
        public virtual void show()
        {
            Console.WriteLine("圆的面积: {0}", Area());
        }
    }
    
    class Cylinder : Circle
    {
        private double h;
        
        public double H
        {
            set { h = value >= 0 ? value : 0; }
            get { return h; }
        }
        
        public double Volume()
        {
            return Area() * h;
        }
        
        public override void show()
        {
            base.show();
            Console.WriteLine("圆柱的体积: {0}", Volume());
        }
    }
}
```

2. 编程实现车类的继承及接口的功能

(1) 使用抽象类继承的方式

```csharp
using System;

// 抽象类vehicle
public abstract class vehicle
{
    public vehicle()
    {
        Console.WriteLine("无参数的构造函数");
    }
    
    public vehicle(int age)
    {
        Console.WriteLine("车龄是{0}", age);
    }
    
    public void run()
    {
        Console.WriteLine("车能够行驶");
    }
    
    public abstract void oil();
}

// 派生类car
public class car : vehicle
{
    public car() : base(3) { }
    
    new public void run()
    {
        Console.WriteLine("小汽车的速度可以达到100mile");
    }
    
    public override void oil()
    {
        Console.WriteLine("这辆车一次可以加10升油");
    }
}

// 主程序
class Program1
{
    static void Main(string[] args)
    {
        car redCar = new car();
        redCar.run();
        redCar.oil();
        Console.ReadLine();
    }
}
```

(2) 使用接口的方式

```csharp
using System;

// 接口Ivehicle
interface Ivehicle
{
    void run();
    void oil();
}

// 实现类car
public class car : Ivehicle
{
    public void run()
    {
        Console.WriteLine("小汽车的速度可以达到100mile");
    }
    
    public void oil()
    {
        Console.WriteLine("这辆车一次可以加10升油");
    }
}

// 主程序
class Program2
{
    static void Main(string[] args)
    {
        Ivehicle littleCar = new car();
        littleCar.run();
        littleCar.oil();
        Console.ReadLine();
    }
}
```

(3) 接口的完整实现代码

```csharp
using System;

// 接口定义
interface Ivehicle
{
    void run();
    void oil();
}

// 实现接口的car类
public class car : Ivehicle
{
    public void run()
    {
        Console.WriteLine("小汽车的速度可以达到100mile");
    }
    
    public void oil()
    {
        Console.WriteLine("这辆车一次可以加10升油");
    }
}

// 主程序
class Program
{
    static void Main(string[] args)
    {
        // 使用接口方式
        Ivehicle littleCar = new car();
        littleCar.run();
        littleCar.oil();
        Console.ReadLine();
    }
}
```

(4) 车类继承的完整实现代码

```csharp
using System;

// 抽象类vehicle
public abstract class vehicle
{
    public vehicle()
    {
        Console.WriteLine("无参数的构造函数");
    }
    
    public vehicle(int age)
    {
        Console.WriteLine("车龄是{0}", age);
    }
    
    public void run()
    {
        Console.WriteLine("车能够行驶");
    }
    
    public abstract void oil();
}

// 派生类car
public class car : vehicle
{
    public car() : base(3) { }
    
    new public void run()
    {
        Console.WriteLine("小汽车的速度可以达到100mile");
    }
    
    public override void oil()
    {
        Console.WriteLine("这辆车一次可以加10升油");
    }
}

// 主程序
class Program
{
    static void Main(string[] args)
    {
        car redCar = new car();
        redCar.run();  // 调用car类的新方法
        ((vehicle)redCar).run();  // 调用基类方法
        redCar.oil();
        Console.ReadLine();
    }
}
```

---


### 项目九 C#常用类的属性和方法

**一、选择题**  

```
1. B 2. C 3. B 4. A 5. A 
6. A 7. B 8. D 9. A 10. A  
11. A 12. B 13. B 14. D 15. C 
16. B 17. D 18. A 19. D 20. C
```

**二、填空题**  
1. -2  
2. Math.Cos(70 * Math.PI / 180)  
3. 5.56  
4. True、False  
5. 1  
6. 6  
7. Random  
8. 0  
9. 10  
10. Year、Month、Day

**三、判断题**  
1. × 2. √ 3. √ 4. × 5. ×

---

### 项目十 C#文件操作

**一、填空题**  
1. WriteLine  
2. Exists  
3. Flush  
4. System.IO  
5. Create  
6. 获取文件扩展名  
7. TextWriter、TextReader  
8. 二进制文件、文本文件、顺序文件、随机文件  
9. Position  
10. ReadWrite  
11. StreamReader、StreamWriter、BinaryReader、BinaryWriter  
12. write、文本  
13. Seek  
14. FullName  
15. ReadLine

**二、选择题**  

```
1. A 2. D 3. B 4. A 5. D 
6. A 7. C 8. B 9. B 10. A  
11. C 12. D 13. B 14. C 15. D 
16. B 17. B 18. D 19. A 20. C
```
**三、判断题**  
```
1. × 2. √ 3. × 4. √ 5. √ 
6. √ 7. √ 8. × 9. √ 10. √
```
---

### 项目十一 C#图形操作

**一、单选题**  
```
1. A 2. C 3. D 4. B 5. D 
6. B 7. C 8. B 9. D 10. C
```
**二、判断题**  

```
1. × 2. × 3. √ 4. √ 5. × 
6. √ 7. √ 8. √ 9. √ 10. ×
```

**三、填空题**  
1. Draw、Fill  
2. DrawString、Drawing  
3. Graphics Device Interface  
4. Pen Mypen2 = new Pen(Color.Blue, 10)  
5. SolidBrush、HatchBrush、LinearGradientBrush、PathGradientBrush、TextureBrush  
6. DrawPolygon  
7. System.Drawing

---

### 项目十二 数据库应用

**一、选择题**  

```
1. B 2. B 3. C 4. D 5. A 
6. D 7. C 8. D 9. C 10. A
```
**二、填空题**  
1. open  
2. 与数据源建立连接  
3. ADO.NET  
4. Database  
5. ConnectionString

**三、程序填空题**  

1. [1] "server=服务器地址;user id=用户名;password=密码;database=数据库名称"

---

## 第2部分：实验答案
### 项目二 C#概述

**1. 程序填空题**

```csharp
Console.WriteLine("Welcome c#!");
```
### 项目三 C#的语言基础

**1. 程序改错题**

将 `num1 = num2 - num1;` 改为：
```csharp
num1 = num1 - num2;
```

**2. 程序填空题**

```csharp
(a + b + c) / 2;
```

**3. 程序填空题**

```csharp
const Parse
```
### 项目四 C#的控制结构

**1. 判断一个数是奇数还是偶数**

```csharp
static void Main(string[] args)
{
    int t = Convert.ToInt32(Console.ReadLine());
    if (t % 2 == 0)
        Console.WriteLine("输入的数是偶数");
    else
        Console.WriteLine("输入的数是奇数");
    Console.ReadLine();
}
```

**2. 使用for循环求1-100的奇数和**

```csharp
static void Main(string[] args)
{
    int i, sum = 0;
    for (i = 1; i <= 100; i += 2)
        sum += i;
    Console.WriteLine("1-100的奇数和为{0}", sum);
    Console.ReadLine();
}
```

**3. 使用while循环求1-100的奇数和**

```csharp
static void Main(string[] args)
{
    int i = 1, sum = 0;
    while (i <= 100)
    {
        sum += i;
        i += 2;
    }
    Console.WriteLine("1-100的奇数和为{0}", sum);
    Console.ReadLine();
}
```

**4. 使用do...while循环求1-100的奇数和**

```csharp
static void Main(string[] args)
{
    int i = 1, sum = 0;
    do
    {
        sum += i;
        i += 2;
    }
    while (i <= 100);
    Console.WriteLine("1-100的奇数和为{0}", sum);
    Console.ReadLine();
}
```

**5. 打印九九乘法表**

```csharp
static void Main(string[] args)
{
    for (int line = 1; line <= 9; line++)
    {
        for (int i = 1; i <= line; i++)
        {
            Console.Write(i.ToString() + "*" + line.ToString() + "=" + (i * line).ToString() + " ");
        }
        Console.WriteLine();
    }
    Console.ReadLine();
}
```
### 项目五 Windows应用程序开发

一、程序填空题

**1. 控制文本框只能输入数字**

```csharp
[1] e.KeyChar > '9' || e.KeyChar < '0'
[2] e.KeyChar = '\0'
```

**2. 向列表框中添加项**

```csharp
[1] s = textBox1.Text + s;
[2] listBox1.Items.Add(s);
```

**3. 设置文本框字体**

```csharp
[1] textBox1.SelectAll();
[2] zh = float.Parse(comboBox2.Text);
```

二、程序改错题

**1. 定时器和文本框移动问题**

错误1: 第4行 `timer1.Visible = false;`
改正1: `timer1.Enabled = false;`

错误2: 第7行 `textBox1.Left = a;`
改正2: `textBox1.Left += a;`

**2. 变量类型和布尔值问题**

错误1: 第1行 `int a = 10;`
改正1: `float a = 10;`

错误2: 第9行 `n = True;`
改正2: `n = false;`

三、编程题

1. 菜单控件编程

**① 界面设计：**
在Form1上添加一个MenuStrip控件，菜单添加两个标题名称"奖项等级"、"帮助"，"奖项等级"设置三个菜单项"一等奖"、"二等奖"、"三等奖"，再添加一个Label1，一个TextBox1。

**② 属性设置：**

| 控件名 | 属性 | 属性值 |
|--------|------|--------|
| Label1 | Text | 奖品: |
| TextBox1 | Text | 空 |

**③ 编写代码：**
```csharp
private void 二等奖ToolStripMenuItem_Click(object sender, EventArgs e)
{
    textBox1.Text = "冰箱一台";
}

private void 三等奖ToolStripMenuItem_Click(object sender, EventArgs e)
{
    textBox1.Text = "手机一部";
}
```

2. 上下文菜单编程

**① 界面设计：**
在窗体Form2中添加一个contextMenuStrip控件，设置三个菜单项分别为"选择了第一项"、"选择了第二项"、"选择了第三项"，再添加一个TextBox1。

**② 属性设置：**

| 控件名 | 属性 | 属性值 |
|--------|------|--------|
| Form | contextMenuStrip | contextMenuStrip1 |
| TextBox1 | Text | 空 |

**③ 编写代码：**
```csharp
private void 选择了第一项ToolStripMenuItem_Click(object sender, EventArgs e)
{
    textBox1.Text = "选择了第一项";
}

private void 选择了第二项ToolStripMenuItem_Click(object sender, EventArgs e)
{
    textBox1.Text = "选择了第二项";
}

private void 选择了第三项ToolStripMenuItem_Click(object sender, EventArgs e)
{
    textBox1.Text = "选择了第三项";
}
```

3. 课程选择系统

**① 界面设计：**
应用程序中添加两个窗体Form1、Form2。
- Form1中：添加4个标签控件、2个文本框、7个复选框控件和2个命令按钮控件
- Form2中：添加4个单选按钮控件和1个命令按钮控件

**② 属性设置：**

Form1中控件的属性

| 控件名 | 属性 | 属性值 | 控件名 | 属性 | 属性值 |
|--------|------|--------|--------|------|--------|
| Form1 | Text | 课程 | CheckBox1 | Text | 语言文学 |
| Label1 | Text | 课程选择 | CheckBox2 | Text | 高等数学 |
| | Font | 楷体、四号、粗体 | CheckBox3 | Text | 大学英语 |
| Label2 | Text | 姓名: | CheckBox4 | Text | 马克思主义思想 |
| Label3 | Text | 专业: | CheckBox5 | Text | C#语言 |
| Label4 | Text | 课程: | CheckBox6 | Text | MySQL |
| Button1 | Text | 选修 | CheckBox7 | Text | 体育 |
| Button2 | Text | 确定 | | | |

Form2中控件的属性

| 控件名 | 属性 | 属性值 | 控件名 | 属性 | 属性值 |
|--------|------|--------|--------|------|--------|
| Form2 | Text | 体育课 | RadioButton3 | Text | 篮球 |
| RadioButton1 | Text | 游泳 | RadioButton4 | Text | 排球 |
| RadioButton2 | Text | 健美操 | Button1 | Text | 确定 |

**③ 编写代码：**

Form1代码：

```csharp
public static string ty;

private void button1_Click(object sender, EventArgs e)
{
    if (checkBox7.Checked)
    {
        Form2 frm2 = new Form2();
        frm2.Show();
    }
}

private void button2_Click(object sender, EventArgs e)
{
    string s = "";
    if (textBox1.Text != "")
        s = textBox1.Text;
    if (textBox2.Text != "")
        s += "\n专业: " + textBox2.Text;
    s += "\n选择课程为: ";
    if (checkBox1.Checked)
        s += checkBox1.Text + " ";
    if (checkBox2.Checked)
        s += checkBox2.Text + " ";
    if (checkBox3.Checked)
        s += checkBox3.Text + " ";
    if (checkBox4.Checked)
        s += checkBox4.Text + " ";
    if (checkBox5.Checked)
        s += checkBox5.Text + " ";
    if (checkBox6.Checked)
        s += checkBox6.Text + " ";
    if (checkBox7.Checked)
        s += ty;
    MessageBox.Show(s);
}
```

Form2代码：

```csharp
string s;

private void button1_Click(object sender, EventArgs e)
{
    if (radioButton1.Checked)
        s = radioButton1.Text;
    if (radioButton2.Checked)
        s = radioButton2.Text;
    if (radioButton3.Checked)
        s = radioButton3.Text;
    if (radioButton4.Checked)
        s = radioButton4.Text;
    Form1.ty = s;
    this.Hide();
}
```

4. 统计英文字母频率

**① 界面设计：**
在窗体Form1上添加2个标签控件，2个文本框控件，1个命令按钮控件。

**② 属性设置：**

| 控件名 | 属性 | 属性值 | 控件名 | 属性 | 属性值 |
|--------|------|--------|--------|------|--------|
| Form1 | Text | 统计 | TextBox2 | Text | 空 |
| TextBox1 | Text | 空 | Button1 | Multiline | True |
| | Multiline | True | Label2 | Text | 统计 |
| Label1 | Text | 请输入英文文章 | | Text | 统计结果 |

**③ 编写代码：**
```csharp
private void button1_Click(object sender, EventArgs e)
{
    int[] a = new int[26];
    string m;
    string n = "";
    char x;
    for (int i = 0; i <= 25; i++)
    { 
        a[i] = 0; 
    }
    for (int j = 1; j <= textBox1.TextLength - 1; j++)
    {
        m = textBox1.Text.Substring(j, 1).ToUpper();
        x = Convert.ToChar(m);
        if (x >= 'A' && x <= 'Z')
        { 
            a[(int)x - 64] += 1; 
        }
    }
    for (int i = 0; i <= 25; i++)
    {
        if (a[i] != 0)
        { 
            n += Convert.ToChar(i + 64) + "=" + a[i] + " "; 
        }
    }
    textBox2.Text = n;
}
```

5. 登录系统

**① 界面设计：**
应用程序中添加两个窗体Form1和Form2。
- Form1：添加2个Label控件，2个TextBox控件，2个Button控件。
- Form2：添加1个TextBox控件，1个checkBox控件，1个Button控件。

**② 属性设置：**

Form1中控件的属性

| 控件名 | 属性 | 属性值 | 控件名 | 属性 | 属性值 |
|--------|------|--------|--------|------|--------|
| Form1 | Text | 登录 | TextBox1 | Text | 空 |
| Label1 | Text | 账号: | TextBox2 | Text | 空 |
| Label2 | Text | 密码: | | PasswordChar | * |
| Button1 | Text | 确定 | Button2 | Text | 退出 |

Form2中控件的属性

| 控件名 | 属性 | 属性值 | 控件名 | 属性 | 属性值 |
|--------|------|--------|--------|------|--------|
| Form2 | Text | 协议 | TextBox1 | Text | 协议内容 |
| Button1 | Text | 确定 | | Multiline | True |
| | Enabled | False | | | |
| checkBox1 | Text | 同意协议 | | | |

**③ 编写代码：**

Form1代码：

```csharp
private void button2_Click(object sender, EventArgs e)
{
    this.Close();
}

private void button1_Click(object sender, EventArgs e)
{
    Form2 f = new Form2();
    f.ShowDialog();
}

private void textBox2_KeyPress(object sender, KeyPressEventArgs e)
{
    if (e.KeyChar > '9' || e.KeyChar < '0')
        e.KeyChar = '\0';
}
```

Form2代码：

```csharp
private void button1_Click(object sender, EventArgs e)
{
    MessageBox.Show("完成登录！");
}

private void checkBox1_CheckedChanged(object sender, EventArgs e)
{
    if (checkBox1.Checked == true)
        button1.Enabled = true;
    else
        button1.Enabled = false;
}
```

6. 计时器应用

**① 界面设计：**
在窗体Form1中添加1个时钟控件，1个列表框控件，1个复选框控件和1个命令按钮控件。

**② 属性设置：**

| 控件名 | 属性 | 属性值 | 控件名 | 属性 | 属性值 |
|--------|------|--------|--------|------|--------|
| Form1 | Text | 计时 | Button1 | Text | 退出 |
| checkBox1 | Text | 时钟开/关 | Timer1 | Interval | 1000 |

**③ 编写代码：**
```csharp
private void checkBox1_CheckedChanged(object sender, EventArgs e)
{
    if (checkBox1.Checked)
        timer1.Enabled = true;
    else
        timer1.Enabled = false;
}

private void button1_Click(object sender, EventArgs e)
{
    this.Close();
}

private void timer1_Tick(object sender, EventArgs e)
{
    listBox1.Items.Add(DateTime.Now.ToLongTimeString().ToString());
}
```

### 项目六 数组

1. 数组初始化与访问
   
```csharp
int[] numbers = new int[] { 1, 2, 3, 4, 5 };
foreach (int num in numbers)
{
    Console.Write(num + " ");
}
// 输出结果：1 2 3 4 5
```

2. 数组操作：计算平均值

```csharp
static void Main(string[] args)
{
    Console.Write("请输入数组大小：");
    int n = int.Parse(Console.ReadLine());
    int[] array = new int[n];
    int sum = 0;
    
    for (int i = 0; i < n; i++)
    {
        Console.Write("请输入第" + (i + 1) + "个数字：");
        array[i] = int.Parse(Console.ReadLine());
        sum += array[i];
    }
    
    double average = (double)sum / n;
    Console.WriteLine("平均值为" + average);
}
```

3. 数组搜索与修改

```csharp
public class Program
{
    private static int Search(int[] nums, int target)
    {
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] == target)
            {
                return i;
            }
        }
        return -1;
    }
    
    public static void Main(string[] args)
    {
        int[] array = {43, 69, 11, 72, 28, 21, 56, 80, 48, 94, 32, 8};
        
        Console.WriteLine("请输入要查找的数：");
        int num = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine(Search(array, num));
        Console.ReadKey();
    }
}
```

4. 数组排序

```csharp
int[] numbers = new int[] { 4, 2, 7, 1, 9 };
Array.Sort(numbers);
foreach (int num in numbers)
{
    Console.Write(num + " ");
}
// 输出结果: 1 2 4 7 9
```

5. 多维数组：主对角线元素之和

```csharp
int[,] matrix = new int[,] { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

int diagonalSum = 0;
for (int i = 0; i < matrix.GetLength(0); i++)
{
    diagonalSum += matrix[i, i];
}

Console.WriteLine("主对角线元素之和为：" + diagonalSum);
```

6. 数组逆序存放

```csharp
static void Main(string[] args)
{
    // 把由10个元素组成的一维数组逆序存放再输出
    int[] nums1 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    
    for (int i = 0; i < nums1.Length / 2; i++) // 交换次数为长度的一半
    {
        int temp = nums1[i]; // 临时存储，方便交换元素
        nums1[i] = nums1[nums1.Length - 1 - i];
        nums1[nums1.Length - 1 - i] = temp;
    }
    
    for (int i = 0; i < nums1.Length; i++) // 输出数组的元素
    {
        Console.WriteLine(nums1[i]);
    }
}
```

7. 冒泡排序

```csharp
static void Main(string[] args)
{
    int[] nums = {9, 1, 7, 6, 22, 4, 3}; // 数组初始化
    
    for (int i = 0; i < nums.Length - 1; i++)
    {
        for (int j = 0; j < nums.Length - 1 - i; j++) // 优化：每次减少比较次数
        {
            if (nums[j] > nums[j + 1]) // 交换位置
            {
                int temp = nums[j + 1]; // 声明一个变量临时存储方便交换
                nums[j + 1] = nums[j];
                nums[j] = temp;
            }
        }
    }
    
    for (int i = 0; i < nums.Length; i++) // 输出数组
    {
        Console.Write(nums[i] + " ");
    }
}
// 输出结果: 1 3 4 6 7 9 22
```

### 项目八 C#面向对象编程

一、程序填空题

1. `[1] return x + y + z;`
2. `[1] base(speed)` `[2] override void move()`

二、编程题

1. 模拟进销存管理系统显示进货信息
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo
{
    class Goods
    {
        public string TradeCode { get; set; } // 定义商品编号
        public string FullName { get; set; }  // 定义商品名称
    }
    
    class JHInfo : Goods
    {
        public string JHID { get; set; } // 定义进货编号
        
        public void showInfo() // 输出进货信息
        {
            Console.WriteLine("进货编号: {0} \n商品编号: {1} \n商品名称: {2}", JHID, TradeCode, FullName);
        }
    }
    
    class Program
    {
        static void Main(string[] args)
        {
            JHInfo jh = new JHInfo();    // 创建JHInfo对象
            jh.TradeCode = "T100001";    // 设置基类中的TradeCode属性
            jh.FullName = "笔记本电脑";   // 设置基类中的FullName属性
            jh.JHID = "JH00001";         // 设置JHID属性
            jh.showInfo();               // 输出信息
            Console.ReadLine();
        }
    }
}
```

**程序运行结果为：**
```
进货编号：JH00001
商品编号：T100001
商品名称：笔记本电脑
```

2. 定义一个销售类，继承自Goods类，并输出销售信息
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo
{
    class Goods
    {
        public string TradeCode { get; set; } // 定义商品编号
        public string FullName { get; set; }  // 定义商品名称
    }
    
    class Sale : Goods
    {
        public string SID { get; set; } // 定义销售编号
        
        public void ShowInfo() // 输出销售信息
        {
            Console.WriteLine("销售编号: {0}, 商品编号: {1}, 商品名称: {2}", SID, TradeCode, FullName);
        }
    }
    
    class Program
    {
        static void Main(string[] args)
        {
            Sale sale = new Sale();          // 创建Sale对象
            sale.TradeCode = "T100001";      // 设置基类中的TradeCode属性
            sale.FullName = "笔记本电脑";     // 设置基类中的FullName属性
            sale.SID = "XS00001";            // 设置SID属性
            sale.ShowInfo();                 // 输出信息
            Console.ReadLine();
        }
    }
}
```

**输出结果：**
```
销售编号：XS00001，商品编号：T100001，商品名称：笔记本电脑
```

3. 使用继承表现pad和computer的关系
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo
{
    class Computer
    {
        // 父类：电脑
        public string screen = "液晶显示屏"; // 属性：屏幕
        
        public void Startup()
        {   // 方法：开机
            Console.WriteLine("电脑正在开机，请等待...");
        }
    }
    
    class Pad : Computer
    {
        // 子类：平板电脑
        public string battery = "5000毫安电池"; // 平板电脑的属性：电池
        
        static void Main(string[] args)
        {
            Computer pc = new Computer(); // 创建电脑类对象
            Console.WriteLine("computer的屏幕是: " + pc.screen);
            pc.Startup(); // 电脑类对象调用开机方法
            
            Pad ipad = new Pad(); // 创建平板电脑类对象
            Console.WriteLine("pad的屏幕是: " + ipad.screen);   // 平板电脑类对象使用父类属性
            Console.WriteLine("pad的电池是: " + ipad.battery); // 平板电脑类对象使用自己的属性
            ipad.Startup(); // 平板电脑类对象使用父类方法
            Console.ReadLine();
        }
    }
}
```

**运行结果为：**
```
computer的屏幕是：液晶显示屏
电脑正在开机，请等待...
pad的屏幕是：液晶显示屏
pad的电池是：5000毫安电池
电脑正在开机，请等待...
```

三、程序改错题

1. 构造方法写在了主方法内部，应该将第15行的大括号写在第6行和第7行之间
2. 错误行：第12行 `private string ID` 改为：`public string ID`
3. 错误行：第32行 `myclass.name = "TM2";` 改为：`myclass.Name = "TM2"`
   
   方法的返回值为int类型，但是在方法体中并没有返回任何类型的数据，可以在定义的result下一行添加：`return result;`
4. 第14行发生错误，因为定义的Add方法中有3个int参数，而这里只传了2个参数，可以将下面代码修改为：`int result = program.Add(3, 5, 6);` 这里的6可以是任何int型数据。

---

### 项目九 C#常用类的属性和方法

一、程序填空题

1. `[1] (1 + w) * h / 2.0`
   `[2] Convert.ToString(area);`
2. `[1] ToUpper`
   `[2] Join`
3. `[1] 0, a.IndexOf('.')`
   `[2] a.IndexOf('.')`

---

### 项目十 C#文件操作

一、程序分析题

1. 从"D:\test.txt"下读入一行文本，然后判断读入的字符串的首字符是字母、数字或是其它字符。
2. 98

二、程序填空题

1. `[1] c:\ReadMe.txt`、`[2] FileStream`、`[3] writer`、`[4] Flush()`、`[5] Close()`
2. `[1] c:\ReadMe.txt`、`[2] FileStream`、`[3] fs`、`[4] reader`、`[5] Close()`
3. (1)

| 控件对象（Name） | 属性名 | 属性值 |
|------------------|--------|--------|
| label1 | Text | 源文件夹绝对路径 |
| Label2 | Text | 目标文件夹绝对路径 |
| ButtonBox1 | Text | 复制文件 |
| Form1 | Text | 成批复制文件 |

---

## 第3部分：模拟试卷

###  基础模拟1
![C#技能实训模拟试卷](images/233.jpg)
![C#技能实训模拟试卷](images/234.jpg)
![C#技能实训模拟试卷](images/235.jpg)
###  基础模拟2
![C#技能实训模拟试卷](images/236.jpg)
![C#技能实训模拟试卷](images/237.jpg)
![C#技能实训模拟试卷](images/238.jpg)
![C#技能实训模拟试卷](images/239.jpg)
###  进阶模拟1
![C#技能实训模拟试卷](images/240.jpg)
![C#技能实训模拟试卷](images/241.jpg)
![C#技能实训模拟试卷](images/242.jpg)
###  进阶模拟2
![C#技能实训模拟试卷](images/243.jpg)
![C#技能实训模拟试卷](images/244.jpg)
![C#技能实训模拟试卷](images/245.jpg)
###  进阶模拟3
![C#技能实训模拟试卷](images/246.jpg)
![C#技能实训模拟试卷](images/247.jpg)
![C#技能实训模拟试卷](images/248.jpg)
![C#技能实训模拟试卷](images/249.jpg)
![C#技能实训模拟试卷](images/250.jpg)

