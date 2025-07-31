---
noteId: "ec73449066e011f0ab62e3f747310bbc"
tags: []

---

# **C#方法教学视频口播稿脚本**

## **第5课：静态方法与实例方法**

**视频时长**：10-12分钟

---

### **【开场】（0:00 - 0:30）**
（画面：讲师出镜 + 动态课程标题）
👨‍💻 **讲师**：
"大家好！欢迎来到《C#方法完全指南》第5课！我是[你的名字]。今天我们要解决一个让很多初学者困惑的问题 - **什么时候该用静态方法？什么时候该用实例方法？**"

（切换动画：静态vs实例对比图）
"这就像选择使用计算器APP还是手持计算器，各有各的适用场景！让我们一起来搞清楚它们的区别和最佳实践吧！"

---

### **【第一部分：实例方法基础】（0:30 - 2:30）**
（屏幕显示代码示例）
```csharp
class ShoppingCart {
    private List<string> items = new List<string>();
    
    // 实例方法
    public void AddItem(string item) {
        items.Add(item);
        Console.WriteLine($"已添加: {item}");
    }
}
```

👨‍💻 **讲师**：
"这是我们熟悉的实例方法，它的特点："
1. 属于类的实例（对象）
2. 可以访问实例字段（如items）
3. 通过对象调用：`cart.AddItem("苹果")`

（动画演示内存结构）
"每个实例方法都隐含一个`this`参数，指向当前对象！"

---

### **【第二部分：静态方法揭秘】（2:30 - 4:30）**
（切换代码示例）
```csharp
class MathHelper {
    // 静态方法
    public static double CalculateCircleArea(double radius) {
        return Math.PI * radius * radius;
    }
}
```

👨‍💻 **讲师**：
"静态方法则完全不同："
✓ 使用`static`关键字修饰
✓ 属于类本身，而非实例
✓ 通过类名直接调用：`MathHelper.CalculateCircleArea(5)`
✓ 不能访问实例成员（因为没有this）

（错误示例动画）
```csharp
public static void PrintItems() {
    Console.WriteLine(items); // 错误！无法访问实例字段
}
```

---

### **【第三部分：使用场景对比】（4:30 - 7:00）**
（左右分屏对比）

| 实例方法 | 静态方法 |
|---------|---------|
| 操作对象状态 | 工具类方法 |
| 需要访问实例数据 | 无状态操作 |
| 面向对象设计 | 实用工具函数 |

👨‍💻 **讲师**：
"什么时候用哪种？记住这个原则："
1. 需要访问或修改对象状态 → 实例方法
2. 独立于任何对象 → 静态方法
3. 常用工具函数（如Math类）→ 静态方法

（现实类比）
"就像商店收银机："
- 实例方法：每个收银员自己的结账操作
- 静态方法：商店的统一折扣计算规则

---

### **【第四部分：高级话题】（7:00 - 9:00）**
（代码示例）
```csharp
class Logger {
    private static int logCount = 0; // 静态字段
    
    public static void Log(string message) {
        Console.WriteLine($"[{DateTime.Now}] {message}");
        logCount++; // 可以访问静态成员
    }
    
    public static int GetLogCount() => logCount;
}
```

👨‍💻 **讲师**：
"静态方法可以："
✓ 访问其他静态成员
✓ 用于实现单例模式
✓ 作为扩展方法的载体

（注意事项动画）
"但要避免过度使用静态方法，否则会导致："
1. 代码难以测试
2. 状态管理混乱
3. 破坏面向对象特性

---

### **【实战练习】（9:00 - 10:30）**
（任务提示动画）
"现在来练练手吧！"
1. 创建Student类，包含实例方法RecordGrade()
2. 创建GradeCalculator类，包含静态方法CalculateGPA()
3. 思考为什么这样设计？

（等待5秒后展示答案）
```csharp
class Student {
    private List<double> grades = new List<double>();
    
    public void RecordGrade(double grade) {
        grades.Add(grade);
    }
}

class GradeCalculator {
    public static double CalculateGPA(IEnumerable<double> grades) {
        return grades.Average();
    }
}
```

---

### **【结尾总结】（10:30 - 12:00）**
（画面回到讲师）
👨‍💻 **讲师**：
"今天我们搞清楚了："
✓ 实例方法与对象状态的关系
✓ 静态方法的特性和使用场景
✓ 两者之间的设计选择考量
✓ 静态成员的访问规则

（动画提示）
"下节课我们将学习**方法参数进阶**，包括可选参数和命名参数！"

（结束画面：课程二维码 + 订阅按钮）
"我是[你的名字]，如果觉得有收获，请点赞支持！有任何问题欢迎在评论区留言，我们下期再见！"

---

### **制作建议**：
1. 使用不同颜色区分静态和实例方法
2. 内存结构部分使用动画演示
3. 对比表格用左右分屏展示
4. 错误示例使用"⚠️"图标警示
5. 练习环节加入思考倒计时音效

需要调整任何部分请告诉我！ 🎥