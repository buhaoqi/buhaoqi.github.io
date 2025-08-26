---
noteId: "5a6e0ab0713211f094570bd1d4a0c87e"
tags: []

---

## **开场**  
“大家好！欢迎观看《C#初学者入门教程》的第17课《字符串转数值》。

本期视频的知识点有四个：

---

**视频口播稿脚本：《C#中的字符串转数值——Convert类实战》**  

**（开场动画：C# logo浮现）**  
**主讲人**（面对镜头，手势引导）：  
"在日常开发中，字符串转数值是高频操作！上节课我们学了Parse和TryParse，今天我要教你更强大的工具——**Convert类**！它能智能处理各种转换场景，甚至自动处理null值！让我们开始吧！"  

---

### **1. Convert类核心优势**  
**（镜头切换：对比代码）**  
"先看这个例子，如果用Parse处理用户输入："  
```csharp
string input = null;
int num = int.Parse(input);  // 直接崩溃！
```

"但用Convert类："  
```csharp
string input = null;
int num = Convert.ToInt32(input);  // 返回0，不报错！
```  
**（镜头特写：键盘快速键入Convert）**  
"看到没？Convert类自带安全缓冲！它还能自动处理空白字符串、布尔值甚至进制转换！"  

---

### **2. 基础类型转换演示**  
**（屏幕分屏：左侧代码/右侧输出）**  
"现在我们用Convert类复现经典数值转换："  

```csharp
// 原始数值示例（参考视频描述）
int age = -23;
long bigNumber = -900000000L;
double negative = -55.2D;
float precision = 5.000001F;
decimal money = 14.99M;

// 用Convert反向操作（字符串→数值）
Console.WriteLine(Convert.ToInt32("-23"));          // int
Console.WriteLine(Convert.ToInt64("-900000000"));  // long
Console.WriteLine(Convert.ToDouble("-55.2"));      // double
Console.WriteLine(Convert.ToSingle("5.000001"));   // float
Console.WriteLine(Convert.ToDecimal("14.99"));     // decimal
```  

**（动画强调：后缀字母与方法的对应关系）**  
"注意后缀字母和方法的关联：  
- `M` → `ToDecimal()`  
- `F` → `ToSingle()`  
- `L` → `ToInt64()`  
这样记忆超方便！"  

---

### **3. 高级实战技巧**  
**（镜头切换：错误处理场景）**  
"遇到非法输入怎么办？Convert比Parse更宽容！"  

```csharp
// 场景1：布尔值转换
Console.WriteLine(Convert.ToInt32("true"));  // 输出1

// 场景2：进制转换
Console.WriteLine(Convert.ToInt32("1010", 2));  // 二进制转十进制，输出10

// 场景3：科学计数法
Console.WriteLine(Convert.ToDouble("1.23E+2"));  // 输出123
```  

**（红框警示动画）**  
"但要注意！转换失败时Convert会抛异常，建议配合try-catch使用："  
```csharp
try {
    Convert.ToInt32("ABC");
} catch (FormatException) {
    Console.WriteLine("不是有效数字！");
}
```  

---

### **4. 综合应用：商品计价系统**  
**（全屏代码演示）**  
"来看一个实战案例——用Convert构建健壮的计价系统："  

```csharp
Console.Write("输入单价：");
string priceInput = Console.ReadLine();

Console.Write("输入数量：");
string quantityInput = Console.ReadLine();

try {
    decimal price = Convert.ToDecimal(priceInput);
    int quantity = Convert.ToInt32(quantityInput);
    Console.WriteLine($"总价：{price * quantity:C}");
} catch {
    Console.WriteLine("输入格式错误！");
}
```  

**（镜头回到主讲人）**  
"看到没？Convert让代码更简洁，还能统一处理各种异常！"  

---

### **5. 终极对比总结**  
**（动态表格动画）**  
| 场景                | Parse           | Convert         |  
|---------------------|-----------------|-----------------|  
| 处理null            | ❌ 崩溃         | ✅ 返回0/default|  
| 布尔值转换          | ❌ 不支持       | ✅ 自动转0/1    |  
| 进制转换            | ❌ 不支持       | ✅ 支持2/8/16进制|  
| 异常控制            | 必须用TryParse  | 需try-catch     |  

**（结尾号召）**  
"现在你掌握Convert类的精髓了吧？下次遇到字符串转换，记得优先考虑它！如果觉得有帮助，一键三连支持我们，下期带你玩转类型转换的隐藏技巧！"  

**（背景音乐渐强，画面缩放到C# logo）**  

---

**制作备注**：  
1. 关键代码用Typewriter特效逐行显示  
2. "崩溃"场景配碎裂音效，"成功"场景配叮咚音效  
3. 主讲人演示时使用Visual Studio深色主题+大字体