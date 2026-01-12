---
noteId: "3a6f4f60ef7911f0b30487fa81af44a5"
tags: []

---

# C#枚举类型初学者完全指南

## 一、枚举是什么？生活中的比喻

### **简单比喻**
```csharp
// 就像一周的星期几
enum Weekday
{
    Monday,    // 周一
    Tuesday,   // 周二
    Wednesday, // 周三
    // ...
}

// 就像交通信号灯
enum TrafficLight
{
    Red,    // 红灯
    Yellow, // 黄灯
    Green   // 绿灯
}
```

### **枚举的核心价值**
- 给一组相关的常量起名字
- 让代码更易读，避免"魔法数字"
- 限制变量的取值范围

## 二、枚举的基本语法

### **1. 最简单的枚举定义**
```csharp
// 定义枚举
enum Direction
{
    Up,     // 默认值：0
    Down,   // 默认值：1
    Left,   // 默认值：2
    Right   // 默认值：3
}
```

### **2. 自定义枚举值**
```csharp
// 自定义数值
enum Month
{
    January = 1,   // 1月
    February = 2,  // 2月
    March = 3,     // 3月
    // ...
    December = 12  // 12月
}

// 部分自定义
enum StatusCode
{
    Success = 200,
    NotFound = 404,
    ServerError = 500,
    UnknownError // 默认501（前一个值+1）
}
```

### **3. 指定底层类型**
```csharp
// 默认是int，可以指定其他整数类型
enum SmallEnum : byte
{
    Zero = 0,
    One = 1,
    Max = 255  // byte的最大值
}
```

## 三、枚举的使用方法

### **基本使用示例**
```csharp
using System;

namespace EnumBasicDemo
{
    // 1. 定义枚举
    enum UserRole
    {
        Guest,      // 0 - 游客
        User,       // 1 - 普通用户
        Moderator,  // 2 - 版主
        Admin       // 3 - 管理员
    }
    
    class Program
    {
        static void Main()
        {
            // 2. 声明枚举变量
            UserRole myRole;
            
            // 3. 赋值
            myRole = UserRole.User;
            
            // 4. 使用
            Console.WriteLine($"我的角色：{myRole}");
            Console.WriteLine($"角色值：{(int)myRole}");
            
            // 5. 比较
            if (myRole == UserRole.User)
            {
                Console.WriteLine("你是普通用户");
            }
            
            // 6. 转换为字符串
            string roleString = myRole.ToString();
            Console.WriteLine($"字符串形式：{roleString}");
            
            // 7. 字符串转枚举
            string input = "Admin";
            UserRole parsedRole;
            if (Enum.TryParse(input, out parsedRole))
            {
                Console.WriteLine($"解析成功：{parsedRole}");
            }
            
            Console.ReadLine();
        }
    }
}
```

## 四、实战项目：简单应用

### **项目1：工作日计算器**
```csharp
using System;

namespace WorkdayCalculator
{
    // 定义工作日枚举
    enum Workday
    {
        Monday = 1,    // 周一
        Tuesday,       // 周二（自动为2）
        Wednesday,     // 周三
        Thursday,      // 周四
        Friday,        // 周五
        Saturday,      // 周六
        Sunday         // 周日
    }
    
    class Program
    {
        static void Main()
        {
            Console.WriteLine("=== 工作日计算器 ===");
            
            // 获取今天是星期几
            DayOfWeek today = DateTime.Today.DayOfWeek;
            Workday current = (Workday)((int)today + 1);
            
            Console.WriteLine($"今天是：{current}");
            
            // 判断是否是工作日
            if (current >= Workday.Monday && current <= Workday.Friday)
            {
                Console.WriteLine("今天是工作日");
                
                // 计算还有几天到周末
                int daysToWeekend = (int)Workday.Friday - (int)current;
                Console.WriteLine($"还有{daysToWeekend}天到周末");
            }
            else
            {
                Console.WriteLine("今天是休息日");
            }
            
            // 遍历所有工作日
            Console.WriteLine("\n所有工作日：");
            for (int i = (int)Workday.Monday; i <= (int)Workday.Friday; i++)
            {
                Console.WriteLine($"- {(Workday)i}");
            }
            
            Console.ReadLine();
        }
    }
}
```

### **项目2：简单游戏角色系统**
```csharp
using System;

namespace SimpleRPG
{
    // 1. 职业枚举
    enum CharacterClass
    {
        Warrior,    // 战士
        Mage,       // 法师
        Archer,     // 弓箭手
        Priest      // 牧师
    }
    
    // 2. 状态枚举
    enum CharacterStatus
    {
        Healthy,    // 健康
        Poisoned,   // 中毒
        Paralyzed,  // 麻痹
        Dead        // 死亡
    }
    
    class Program
    {
        static void Main()
        {
            Console.WriteLine("=== 角色创建系统 ===");
            
            // 创建角色
            CharacterClass playerClass = CharacterClass.Warrior;
            CharacterStatus playerStatus = CharacterStatus.Healthy;
            
            Console.WriteLine($"职业：{playerClass}");
            Console.WriteLine($"状态：{playerStatus}");
            
            // 显示职业特点
            Console.WriteLine("\n职业特点：");
            switch (playerClass)
            {
                case CharacterClass.Warrior:
                    Console.WriteLine("- 高生命值");
                    Console.WriteLine("- 近战攻击");
                    break;
                case CharacterClass.Mage:
                    Console.WriteLine("- 高魔法伤害");
                    Console.WriteLine("- 远程法术");
                    break;
                case CharacterClass.Archer:
                    Console.WriteLine("- 远程物理攻击");
                    Console.WriteLine("- 高命中率");
                    break;
                case CharacterClass.Priest:
                    Console.WriteLine("- 治疗能力");
                    Console.WriteLine("- 辅助法术");
                    break;
            }
            
            // 模拟战斗状态变化
            Console.WriteLine("\n=== 战斗模拟 ===");
            playerStatus = CharacterStatus.Poisoned;
            Console.WriteLine($"你被攻击了！状态：{playerStatus}");
            
            // 检查是否存活
            if (playerStatus != CharacterStatus.Dead)
            {
                Console.WriteLine("你还活着，继续战斗！");
            }
            
            // 显示所有职业选项
            Console.WriteLine("\n所有可选职业：");
            foreach (CharacterClass job in Enum.GetValues(typeof(CharacterClass)))
            {
                Console.WriteLine($"- {job} (代码值: {(int)job})");
            }
            
            Console.ReadLine();
        }
    }
}
```

## 五、枚举的高级特性

### **1. Flags特性（位标志）**
```csharp
using System;

namespace FlagsDemo
{
    // 添加[Flags]特性
    [Flags]
    enum Permissions
    {
        None     = 0,        // 0000
        Read     = 1 << 0,   // 0001
        Write    = 1 << 1,   // 0010
        Execute  = 1 << 2,   // 0100
        Delete   = 1 << 3,   // 1000
        
        // 组合权限
        ReadWrite = Read | Write,          // 0011
        All = Read | Write | Execute | Delete  // 1111
    }
    
    class Program
    {
        static void Main()
        {
            // 设置权限
            Permissions myPerms = Permissions.Read | Permissions.Write;
            
            Console.WriteLine($"我的权限：{myPerms}");
            Console.WriteLine($"权限值：{(int)myPerms}");
            
            // 检查权限
            if ((myPerms & Permissions.Read) == Permissions.Read)
            {
                Console.WriteLine("有读取权限");
            }
            
            if ((myPerms & Permissions.Execute) != Permissions.Execute)
            {
                Console.WriteLine("没有执行权限");
            }
            
            // 添加权限
            myPerms |= Permissions.Execute;
            Console.WriteLine($"添加执行权限后：{myPerms}");
            
            // 移除权限
            myPerms &= ~Permissions.Write;
            Console.WriteLine($"移除写权限后：{myPerms}");
        }
    }
}
```

### **2. 枚举的扩展方法**
```csharp
using System;

namespace EnumExtensions
{
    enum TemperatureLevel
    {
        Freezing,    // 冰冻
        Cold,        // 寒冷
        Mild,        // 温和
        Warm,        // 温暖
        Hot          // 炎热
    }
    
    // 扩展方法
    static class TemperatureExtensions
    {
        public static string GetDescription(this TemperatureLevel level)
        {
            return level switch
            {
                TemperatureLevel.Freezing => "低于0°C，需要穿羽绒服",
                TemperatureLevel.Cold => "0-10°C，需要穿外套",
                TemperatureLevel.Mild => "10-20°C，适宜的温度",
                TemperatureLevel.Warm => "20-30°C，可以穿短袖",
                TemperatureLevel.Hot => "高于30°C，注意防暑",
                _ => "未知温度等级"
            };
        }
        
        public static TemperatureLevel FromCelsius(int celsius)
        {
            return celsius switch
            {
                < 0 => TemperatureLevel.Freezing,
                < 10 => TemperatureLevel.Cold,
                < 20 => TemperatureLevel.Mild,
                < 30 => TemperatureLevel.Warm,
                _ => TemperatureLevel.Hot
            };
        }
    }
    
    class Program
    {
        static void Main()
        {
            TemperatureLevel today = TemperatureLevel.FromCelsius(25);
            Console.WriteLine($"今天温度等级：{today}");
            Console.WriteLine($"描述：{today.GetDescription()}");
            
            // 测试所有等级
            Console.WriteLine("\n所有温度等级描述：");
            foreach (TemperatureLevel level in Enum.GetValues(typeof(TemperatureLevel)))
            {
                Console.WriteLine($"{level}: {level.GetDescription()}");
            }
        }
    }
}
```

## 六、练习题

### **练习题1：交通信号灯系统**
**要求**：
1. 定义一个交通信号灯枚举 `TrafficLight`，包含 Red、Yellow、Green
2. 编写一个方法模拟信号灯变化
3. 根据当前信号灯显示相应的行动指示

**示例输出**：
```
当前信号灯：Red
指示：停止

当前信号灯：Green  
指示：通行

当前信号灯：Yellow
指示：准备停止
```

### **练习题2：学生成绩等级**
**要求**：
1. 定义成绩等级枚举 `Grade`：A(90-100)、B(80-89)、C(70-79)、D(60-69)、F(<60)
2. 编写方法根据分数返回等级
3. 统计一组学生的等级分布

**示例输出**：
```
学生成绩：
张三: 85分 -> B
李四: 92分 -> A
王五: 78分 -> C

等级分布：
A: 1人
B: 1人  
C: 1人
D: 0人
F: 0人
```

### **练习题3：文件权限管理系统**
**要求**：
1. 使用 `[Flags]` 特性定义文件权限枚举
2. 包含：Read、Write、Execute、Delete 权限
3. 实现用户权限管理功能
4. 可以添加、移除、检查权限

**示例输出**：
```
用户初始权限：Read, Write
添加Execute权限后：Read, Write, Execute
移除Write权限后：Read, Execute
检查权限：有Read权限，无Delete权限
```

### **练习题4：订单状态跟踪**
**要求**：
1. 定义订单状态枚举：Pending、Paid、Shipped、Delivered、Cancelled
2. 编写订单状态转换规则
3. 模拟订单状态变化流程

**示例输出**：
```
订单创建：状态 = Pending
收到付款：状态 = Paid
发货：状态 = Shipped
送达：状态 = Delivered

无效操作：无法从Delivered变回Shipped
```

## 七、学习要点总结

### **必须掌握的基础**
1. **定义枚举**：`enum 名称 { 成员1, 成员2, ... }`
2. **使用枚举**：`枚举类型 变量名 = 枚举类型.成员;`
3. **比较枚举**：`if (变量 == 枚举类型.成员)`
4. **转换操作**：
   - 转数字：`(int)枚举变量`
   - 转字符串：`枚举变量.ToString()`
   - 字符串转枚举：`Enum.Parse()`

### **进阶技巧**
1. 使用 `[Flags]` 处理组合选项
2. 为枚举添加扩展方法
3. 使用 `switch` 语句处理不同枚举值
4. 遍历所有枚举值：`Enum.GetValues()`

### **最佳实践**
1. 为枚举成员起有意义的名称
2. 考虑是否需要自定义数值
3. 使用枚举代替魔法数字
4. 添加XML注释说明枚举用途

## 八、常见问题解答

**Q1：枚举和常量有什么区别？**
```csharp
// 常量 - 分散，没有关联性
const int STATUS_PENDING = 0;
const int STATUS_PAID = 1;

// 枚举 - 组织在一起，类型安全
enum OrderStatus { Pending, Paid }
```

**Q2：什么时候应该用枚举？**
- 一组有限的、固定的选项
- 需要类型安全的常量
- 代码可读性很重要时

**Q3：枚举可以存储字符串吗？**
不可以，枚举底层必须是整数类型（byte, sbyte, short, ushort, int, uint, long, ulong）。

**Q4：如何获取枚举的所有值？**
```csharp
foreach (var value in Enum.GetValues(typeof(MyEnum)))
{
    Console.WriteLine(value);
}
```

## 九、学习路线建议

### **第1周：基础掌握**
1. 学习枚举的基本语法
2. 完成练习题1和2
3. 理解枚举与常量的区别

### **第2周：实际应用**
1. 在项目中实际使用枚举
2. 学习Flags特性的使用
3. 完成练习题3

### **第3周：进阶特性**
1. 学习枚举的扩展方法
2. 理解枚举的性能特性
3. 完成练习题4

### **第4周：最佳实践**
1. 阅读开源项目中的枚举使用
2. 总结枚举的最佳实践
3. 在自己的项目中应用枚举

记住：**枚举让代码更清晰、更安全**。从简单的状态管理开始，逐步应用到更复杂的场景中！


## C#枚举类型练习题答案

## 练习题1答案：交通信号灯系统

```csharp
using System;

namespace TrafficLightSystem
{
    // 1. 定义交通信号灯枚举
    enum TrafficLight
    {
        Red,    // 红灯
        Yellow, // 黄灯
        Green   // 绿灯
    }
    
    class Program
    {
        static void Main()
        {
            Console.WriteLine("=== 交通信号灯系统 ===");
            
            // 2. 模拟信号灯变化
            TrafficLight currentLight = TrafficLight.Red;
            
            // 循环显示所有信号灯状态
            foreach (TrafficLight light in Enum.GetValues(typeof(TrafficLight)))
            {
                currentLight = light;
                ShowTrafficInfo(currentLight);
            }
            
            Console.WriteLine("\n=== 完整信号灯循环 ===");
            
            // 模拟完整的信号灯循环
            TrafficLight[] lightSequence = { 
                TrafficLight.Red, 
                TrafficLight.Green, 
                TrafficLight.Yellow, 
                TrafficLight.Red 
            };
            
            foreach (TrafficLight light in lightSequence)
            {
                ShowTrafficInfo(light);
                Console.WriteLine("--- 等待3秒 ---\n");
                // System.Threading.Thread.Sleep(3000); // 实际使用时可以取消注释
            }
            
            Console.ReadLine();
        }
        
        // 3. 根据信号灯显示行动指示
        static void ShowTrafficInfo(TrafficLight light)
        {
            Console.WriteLine($"当前信号灯：{light}");
            
            switch (light)
            {
                case TrafficLight.Red:
                    Console.WriteLine("指示：停止");
                    Console.WriteLine("提示：请停车等待");
                    break;
                    
                case TrafficLight.Yellow:
                    Console.WriteLine("指示：准备停止");
                    Console.WriteLine("提示：减速，准备停车");
                    break;
                    
                case TrafficLight.Green:
                    Console.WriteLine("指示：通行");
                    Console.WriteLine("提示：可以安全通过");
                    break;
            }
            
            Console.WriteLine(); // 空行
        }
    }
}
```

**输出结果：**
```
=== 交通信号灯系统 ===
当前信号灯：Red
指示：停止
提示：请停车等待

当前信号灯：Yellow
指示：准备停止
提示：减速，准备停车

当前信号灯：Green
指示：通行
提示：可以安全通过

=== 完整信号灯循环 ===
当前信号灯：Red
指示：停止
提示：请停车等待
--- 等待3秒 ---

当前信号灯：Green
指示：通行
提示：可以安全通过
--- 等待3秒 ---

当前信号灯：Yellow
指示：准备停止
提示：减速，准备停车
--- 等待3秒 ---

当前信号灯：Red
指示：停止
提示：请停车等待
--- 等待3秒 ---
```

## 练习题2答案：学生成绩等级

```csharp
using System;

namespace StudentGradeSystem
{
    // 1. 定义成绩等级枚举
    enum Grade
    {
        A,  // 90-100
        B,  // 80-89
        C,  // 70-79
        D,  // 60-69
        F   // 0-59
    }
    
    // 学生结构体
    struct Student
    {
        public string Name;
        public int Score;
        public Grade GradeLevel;
    }
    
    class Program
    {
        static void Main()
        {
            Console.WriteLine("=== 学生成绩等级系统 ===");
            
            // 创建学生数组
            Student[] students = new Student[5];
            
            // 学生数据
            students[0].Name = "张三";
            students[0].Score = 85;
            
            students[1].Name = "李四";
            students[1].Score = 92;
            
            students[2].Name = "王五";
            students[2].Score = 78;
            
            students[3].Name = "赵六";
            students[3].Score = 45;
            
            students[4].Name = "孙七";
            students[4].Score = 67;
            
            // 2. 计算每个学生的等级
            Console.WriteLine("\n学生成绩：");
            foreach (var student in students)
            {
                Grade grade = GetGradeFromScore(student.Score);
                Console.WriteLine($"{student.Name}: {student.Score}分 -> {grade}");
            }
            
            // 3. 统计等级分布
            Console.WriteLine("\n等级分布：");
            CountGrades(students);
            
            // 显示等级标准
            Console.WriteLine("\n等级标准：");
            Console.WriteLine("A: 90-100分");
            Console.WriteLine("B: 80-89分");
            Console.WriteLine("C: 70-79分");
            Console.WriteLine("D: 60-69分");
            Console.WriteLine("F: 0-59分");
            
            Console.ReadLine();
        }
        
        // 根据分数返回等级
        static Grade GetGradeFromScore(int score)
        {
            if (score >= 90) return Grade.A;
            if (score >= 80) return Grade.B;
            if (score >= 70) return Grade.C;
            if (score >= 60) return Grade.D;
            return Grade.F;
        }
        
        // 统计各等级人数
        static void CountGrades(Student[] students)
        {
            // 初始化计数器
            int countA = 0, countB = 0, countC = 0, countD = 0, countF = 0;
            
            // 统计
            foreach (var student in students)
            {
                Grade grade = GetGradeFromScore(student.Score);
                switch (grade)
                {
                    case Grade.A: countA++; break;
                    case Grade.B: countB++; break;
                    case Grade.C: countC++; break;
                    case Grade.D: countD++; break;
                    case Grade.F: countF++; break;
                }
            }
            
            // 显示结果
            Console.WriteLine($"A: {countA}人");
            Console.WriteLine($"B: {countB}人");
            Console.WriteLine($"C: {countC}人");
            Console.WriteLine($"D: {countD}人");
            Console.WriteLine($"F: {countF}人");
            
            // 找出人数最多的等级
            Console.WriteLine("\n人数最多的等级：");
            int maxCount = Math.Max(Math.Max(Math.Max(countA, countB), Math.Max(countC, countD)), countF);
            
            if (countA == maxCount) Console.Write("A ");
            if (countB == maxCount) Console.Write("B ");
            if (countC == maxCount) Console.Write("C ");
            if (countD == maxCount) Console.Write("D ");
            if (countF == maxCount) Console.Write("F ");
            Console.WriteLine($"(共{maxCount}人)");
        }
    }
}
```

**输出结果：**
```
=== 学生成绩等级系统 ===

学生成绩：
张三: 85分 -> B
李四: 92分 -> A
王五: 78分 -> C
赵六: 45分 -> F
孙七: 67分 -> D

等级分布：
A: 1人
B: 1人
C: 1人
D: 1人
F: 1人

人数最多的等级：
A B C D F (共1人)

等级标准：
A: 90-100分
B: 80-89分
C: 70-79分
D: 60-69分
F: 0-59分
```

## 练习题3答案：文件权限管理系统

```csharp
using System;

namespace FilePermissionSystem
{
    // 1. 使用[Flags]特性定义文件权限枚举
    [Flags]
    enum FilePermission
    {
        None = 0,           // 0000 无权限
        Read = 1 << 0,      // 0001 读权限
        Write = 1 << 1,     // 0010 写权限
        Execute = 1 << 2,   // 0100 执行权限
        Delete = 1 << 3,    // 1000 删除权限
        
        // 常用组合权限
        ReadWrite = Read | Write,            // 0011
        ReadExecute = Read | Execute,        // 0101
        FullControl = Read | Write | Execute | Delete  // 1111
    }
    
    class Program
    {
        static void Main()
        {
            Console.WriteLine("=== 文件权限管理系统 ===");
            
            // 2. 初始权限
            FilePermission userPermissions = FilePermission.Read | FilePermission.Write;
            Console.WriteLine($"用户初始权限：{userPermissions}");
            Console.WriteLine($"权限值：{(int)userPermissions} (二进制: {Convert.ToString((int)userPermissions, 2).PadLeft(4, '0')})");
            
            // 3. 添加权限
            Console.WriteLine("\n--- 添加Execute权限 ---");
            userPermissions = AddPermission(userPermissions, FilePermission.Execute);
            Console.WriteLine($"添加后权限：{userPermissions}");
            
            // 4. 移除权限
            Console.WriteLine("\n--- 移除Write权限 ---");
            userPermissions = RemovePermission(userPermissions, FilePermission.Write);
            Console.WriteLine($"移除后权限：{userPermissions}");
            
            // 5. 检查权限
            Console.WriteLine("\n--- 权限检查 ---");
            CheckPermission(userPermissions, FilePermission.Read, "Read");
            CheckPermission(userPermissions, FilePermission.Write, "Write");
            CheckPermission(userPermissions, FilePermission.Execute, "Execute");
            CheckPermission(userPermissions, FilePermission.Delete, "Delete");
            
            // 6. 设置常用权限组合
            Console.WriteLine("\n--- 权限组合示例 ---");
            
            FilePermission adminPerms = FilePermission.FullControl;
            Console.WriteLine($"管理员权限：{adminPerms}");
            
            FilePermission guestPerms = FilePermission.Read;
            Console.WriteLine($"游客权限：{guestPerms}");
            
            FilePermission editorPerms = FilePermission.ReadWrite;
            Console.WriteLine($"编辑者权限：{editorPerms}");
            
            // 7. 权限转换演示
            Console.WriteLine("\n--- 权限数值转换 ---");
            int permissionValue = 5; // 0101 = Read + Execute
            FilePermission fromValue = (FilePermission)permissionValue;
            Console.WriteLine($"数值{permissionValue}对应的权限：{fromValue}");
            
            Console.ReadLine();
        }
        
        // 添加权限
        static FilePermission AddPermission(FilePermission current, FilePermission permissionToAdd)
        {
            return current | permissionToAdd;
        }
        
        // 移除权限
        static FilePermission RemovePermission(FilePermission current, FilePermission permissionToRemove)
        {
            return current & ~permissionToRemove;
        }
        
        // 检查权限
        static void CheckPermission(FilePermission current, FilePermission permissionToCheck, string permissionName)
        {
            bool hasPermission = (current & permissionToCheck) == permissionToCheck;
            Console.WriteLine($"{permissionName}权限：{(hasPermission ? "有" : "无")}");
        }
        
        // 显示权限详情
        static void ShowPermissionDetails(FilePermission permissions)
        {
            Console.WriteLine($"\n权限详情：");
            Console.WriteLine($"Read: {((permissions & FilePermission.Read) == FilePermission.Read ? "✓" : "✗")}");
            Console.WriteLine($"Write: {((permissions & FilePermission.Write) == FilePermission.Write ? "✓" : "✗")}");
            Console.WriteLine($"Execute: {((permissions & FilePermission.Execute) == FilePermission.Execute ? "✓" : "✗")}");
            Console.WriteLine($"Delete: {((permissions & FilePermission.Delete) == FilePermission.Delete ? "✓" : "✗")}");
        }
    }
}
```

**输出结果：**
```
=== 文件权限管理系统 ===
用户初始权限：Read, Write
权限值：3 (二进制: 0011)

--- 添加Execute权限 ---
添加后权限：Read, Write, Execute

--- 移除Write权限 ---
移除后权限：Read, Execute

--- 权限检查 ---
Read权限：有
Write权限：无
Execute权限：有
Delete权限：无

--- 权限组合示例 ---
管理员权限：Read, Write, Execute, Delete
游客权限：Read
编辑者权限：Read, Write

--- 权限数值转换 ---
数值5对应的权限：Read, Execute
```

## 练习题4答案：订单状态跟踪

```csharp
using System;
using System.Collections.Generic;

namespace OrderStatusSystem
{
    // 1. 定义订单状态枚举
    enum OrderStatus
    {
        Pending,    // 待处理
        Paid,       // 已付款
        Shipped,    // 已发货
        Delivered,  // 已送达
        Cancelled   // 已取消
    }
    
    class Order
    {
        public int OrderId { get; set; }
        public string CustomerName { get; set; }
        public OrderStatus Status { get; private set; }
        public List<string> StatusHistory { get; private set; }
        
        public Order(int id, string customer)
        {
            OrderId = id;
            CustomerName = customer;
            Status = OrderStatus.Pending;
            StatusHistory = new List<string>();
            AddToHistory("订单创建");
        }
        
        // 2. 订单状态转换
        public bool ChangeStatus(OrderStatus newStatus)
        {
            // 检查状态转换是否有效
            if (CanChangeTo(newStatus))
            {
                string oldStatus = Status.ToString();
                Status = newStatus;
                AddToHistory($"从 {oldStatus} 变为 {newStatus}");
                return true;
            }
            else
            {
                Console.WriteLine($"错误：无法从 {Status} 变为 {newStatus}");
                return false;
            }
        }
        
        // 检查状态转换规则
        private bool CanChangeTo(OrderStatus newStatus)
        {
            // 已取消的订单不能改变状态
            if (Status == OrderStatus.Cancelled)
                return false;
                
            // 已送达的订单不能退回之前状态
            if (Status == OrderStatus.Delivered && newStatus != OrderStatus.Delivered)
                return false;
                
            // 一般允许向前推进状态
            return true;
        }
        
        // 快捷方法
        public bool Pay() => ChangeStatus(OrderStatus.Paid);
        public bool Ship() => ChangeStatus(OrderStatus.Shipped);
        public bool Deliver() => ChangeStatus(OrderStatus.Delivered);
        public bool Cancel() => ChangeStatus(OrderStatus.Cancelled);
        
        private void AddToHistory(string description)
        {
            string entry = $"[{DateTime.Now:HH:mm:ss}] {description} - 状态: {Status}";
            StatusHistory.Add(entry);
        }
        
        public void DisplayInfo()
        {
            Console.WriteLine($"\n订单 #{OrderId}");
            Console.WriteLine($"客户: {CustomerName}");
            Console.WriteLine($"当前状态: {Status}");
            Console.WriteLine("状态历史:");
            foreach (var entry in StatusHistory)
            {
                Console.WriteLine($"  {entry}");
            }
        }
    }
    
    class Program
    {
        static void Main()
        {
            Console.WriteLine("=== 订单状态跟踪系统 ===");
            
            // 创建订单
            Order order = new Order(1001, "张三");
            order.DisplayInfo();
            
            // 3. 模拟订单状态变化流程
            Console.WriteLine("\n=== 订单处理流程 ===");
            
            // 正常流程
            Console.WriteLine("\n1. 正常流程:");
            order.Pay();
            order.Ship();
            order.Deliver();
            order.DisplayInfo();
            
            // 尝试无效操作
            Console.WriteLine("\n2. 尝试无效操作:");
            bool canRevert = order.ChangeStatus(OrderStatus.Shipped);
            Console.WriteLine($"能否退回Shipped状态: {canRevert}");
            
            // 创建新订单测试取消流程
            Console.WriteLine("\n3. 取消流程测试:");
            Order order2 = new Order(1002, "李四");
            order2.Pay();
            order2.Cancel();
            order2.DisplayInfo();
            
            // 尝试修改已取消的订单
            Console.WriteLine("\n4. 尝试修改已取消的订单:");
            bool canModify = order2.Ship();
            Console.WriteLine($"能否发货已取消的订单: {canModify}");
            
            // 显示所有可能的状态
            Console.WriteLine("\n=== 所有订单状态 ===");
            foreach (OrderStatus status in Enum.GetValues(typeof(OrderStatus)))
            {
                Console.WriteLine($"- {status} (值: {(int)status})");
            }
            
            // 状态转换图示例
            Console.WriteLine("\n=== 状态转换规则 ===");
            Console.WriteLine("允许转换:");
            Console.WriteLine("Pending → Paid, Cancelled");
            Console.WriteLine("Paid → Shipped, Cancelled");
            Console.WriteLine("Shipped → Delivered");
            Console.WriteLine("Delivered → (无，最终状态)");
            Console.WriteLine("Cancelled → (无，最终状态)");
            
            Console.ReadLine();
        }
    }
}
```

**输出结果：**
```
=== 订单状态跟踪系统 ===

订单 #1001
客户: 张三
当前状态: Pending
状态历史:
  [14:30:25] 订单创建 - 状态: Pending

=== 订单处理流程 ===

1. 正常流程:
订单 #1001
客户: 张三
当前状态: Delivered
状态历史:
  [14:30:25] 订单创建 - 状态: Pending
  [14:30:25] 从 Pending 变为 Paid - 状态: Paid
  [14:30:25] 从 Paid 变为 Shipped - 状态: Shipped
  [14:30:25] 从 Shipped 变为 Delivered - 状态: Delivered

2. 尝试无效操作:
错误：无法从 Delivered 变为 Shipped
能否退回Shipped状态: False

3. 取消流程测试:
订单 #1002
客户: 李四
当前状态: Cancelled
状态历史:
  [14:30:25] 订单创建 - 状态: Pending
  [14:30:25] 从 Pending 变为 Paid - 状态: Paid
  [14:30:25] 从 Paid 变为 Cancelled - 状态: Cancelled

4. 尝试修改已取消的订单:
错误：无法从 Cancelled 变为 Shipped
能否发货已取消的订单: False

=== 所有订单状态 ===
- Pending (值: 0)
- Paid (值: 1)
- Shipped (值: 2)
- Delivered (值: 3)
- Cancelled (值: 4)

=== 状态转换规则 ===
允许转换:
Pending → Paid, Cancelled
Paid → Shipped, Cancelled
Shipped → Delivered
Delivered → (无，最终状态)
Cancelled → (无，最终状态)
```

## 运行说明

1. **编译运行**：
   ```bash
   csc 文件名.cs
   文件名.exe
   ```

2. **代码结构**：
   - 每个练习题都是完整的控制台应用
   - 包含了枚举的定义和使用
   - 有详细的注释说明

3. **学习建议**：
   - 先自己尝试编写，再对照答案
   - 修改参数和逻辑，观察变化
   - 将代码应用到实际项目中

4. **扩展练习**：
   - 为练习题1添加倒计时功能
   - 为练习题2添加成绩排序功能
   - 为练习题3添加权限组管理
   - 为练习题4添加订单搜索功能