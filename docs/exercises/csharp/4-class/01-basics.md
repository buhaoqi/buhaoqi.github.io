---
noteId: "8e67e4a05c5e11f0a4330bfeb80f6ca2"
tags: []

---

以下是20道基于C#类的基本概念的应用题，涵盖字段、方法、属性、构造函数、静态成员等核心知识点：

1. **矩形面积计算**  
   创建一个`Rectangle`类，包含`Width`和`Height`字段。添加方法`CalculateArea()`返回矩形面积。实例化后计算宽5高3的矩形面积。

2. **学生信息验证**  
   创建`Student`类，包含`Name`(字符串)和`Grade`(整型)属性。在`set`访问器中验证：姓名非空、成绩在0-100之间，否则抛出异常。

3. **静态计数器**  
   设计`Car`类，包含静态字段`TotalCars`统计实例化数量。每次构造函数调用时计数器自增。创建3辆车后验证`TotalCars`值。

4. **方法重载实践**  
   在`Calculator`类中创建两个`Add`方法：一个接受两个整数，另一个接受三个整数。分别计算`Add(2,3)`和`Add(1,2,3)`的结果。

5. **引用类型参数**  
   创建`ValueSwapper`类，包含方法`Swap(ref int a, ref int b)`交换两个整数的值。调用该方法交换变量`x=5, y=10`后验证结果。

6. **构造函数链式调用**  
   为`Book`类创建：无参构造函数（设置默认书名）、单参构造函数（接收书名）和双参构造函数（接收书名和页数）。使用`this`实现构造函数链。

7. **只读属性应用**  
   设计`Circle`类，包含只读属性`Circumference`（周长）和`Area`（面积），在构造函数中根据半径初始化这些属性。计算半径为3的圆周长。

8. **自动属性实践**  
   用自动属性实现`Person`类：`Name`(可读写), `BirthYear`(只读)。在构造函数中初始化这两个属性。计算1990年出生的人在2025年的年龄。

9. **常量字段使用**  
   创建`Physics`类，包含常量`Gravity`(重力加速度=9.8)。添加方法`CalculateFallTime(double height)`计算物体从指定高度自由落体的时间（忽略空气阻力）。

10. **对象交互实践**  
    设计`BankAccount`类（含`Balance`属性）和`ATM`类。在`ATM`中实现`Withdraw(BankAccount account, decimal amount)`方法，从账户扣款并返回新余额。

11. **静态方法应用**  
    创建`StringUtility`静态类，包含静态方法`Reverse(string input)`返回反转字符串。调用`Reverse("hello")`验证结果是否为"olleh"。

12. **属性访问控制**  
    在`Temperature`类中创建`_celsius`私有字段，通过`Celsius`和`Fahrenheit`属性实现摄氏/华氏温度转换（公式：F = C×9/5 + 32）。

13. **索引器实践**  
    为`Week`类创建字符串索引器，通过索引0-6返回对应的星期名称（如[0]返回"Monday"）。验证`week[2]`是否输出"Wednesday"。

14. **部分类拆分**  
    将`Project`类拆分为两个部分文件：`Project.cs`包含`ProjectId`属性，`ProjectMethods.cs`包含`SaveToDatabase()`方法。在Main中调用完整类。

15. **对象初始化器**  
    使用对象初始化器语法创建`Product`对象：不调用构造函数直接初始化`Name="Laptop", Price=1200, Category="Electronics"`属性。

16. **可选参数方法**  
    在`Logger`类中创建`Log(string message, bool addTimestamp = true)`方法。当`addTimestamp`为true时在消息前添加时间戳。测试两种调用方式。

17. **命名参数调用**  
    创建`Appointment`类的`Schedule()`方法，接受`date`, `time`, `location`参数。使用命名参数调用：`Schedule(time: "14:00", location: "Room 101", date: "2025-07-10")`。

18. **方法参数修饰符**  
    实现`MathOperations`类：  
    - `Square(in int num)`：使用`in`参数计算平方  
    - `ResetToZero(out int num)`：使用`out`参数重置变量  
    分别测试两个方法。

19. **静态构造函数**  
    创建`Config`类，包含静态字段`ServerIP`。在静态构造函数中从配置文件读取IP值。访问`ServerIP`前验证静态构造是否触发。

20. **综合应用**  
    设计`Library`类：  
    - 私有字段`_books`（书籍列表）  
    - 方法`AddBook(string title)`  
    - 只读属性`BookCount`  
    - 索引器通过索引获取书名  
    测试添加三本书后输出总数和第二本书名。

每个题目均聚焦具体知识点，建议先独立实现再参考示例代码。通过实例化对象、调用方法/属性、验证输出结果来测试实现正确性。