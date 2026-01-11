---
noteId: "8545eda0eeb111f0a0d89171fe56da45"
tags: []

---

# 初学者掌握 C# Console.WriteLine() 的完整指南

## 一、Console.WriteLine() 是什么？🎯

**一句话理解**：`Console.WriteLine()` 是 C# 中向控制台输出信息并**换行**的方法，它是你学习编程的第一个好朋友！

```csharp
// 最简单的例子
Console.WriteLine("你好，世界！");
// 输出：你好，世界！
//       然后光标移动到下一行
```

---

## 二、基础用法（从零开始）📚

### **1. 输出普通文本**
```csharp
Console.WriteLine("我爱编程！");              // 输出字符串
Console.WriteLine(100);                     // 输出整数
Console.WriteLine(3.14);                    // 输出小数
Console.WriteLine(true);                    // 输出布尔值
```

### **2. 输出与 Write() 的区别**
```csharp
Console.Write("Hello");      // 输出不换行
Console.Write("World");      // 接着上一行输出
Console.WriteLine();         // 只是换行
Console.WriteLine("换行了"); // 输出并换行

// 输出结果：
// HelloWorld
// 换行了
```

---

## 三、变量输出（最重要的部分）🔑

### **1. 直接拼接（最简单）**
```csharp
string name = "小明";
int age = 20;
double score = 95.5;

Console.WriteLine("姓名：" + name);
Console.WriteLine("年龄：" + age + "岁");
Console.WriteLine("分数：" + score + "分");

// 或者写在一行
Console.WriteLine("姓名：" + name + "，年龄：" + age + "，分数：" + score);
```

### **2. 占位符格式化（最常用）**
```csharp
string name = "小红";
int age = 18;
double height = 1.65;

// 使用 {0}, {1}, {2} 作为占位符
Console.WriteLine("姓名：{0}，年龄：{1}，身高：{2}米", name, age, height);
// 输出：姓名：小红，年龄：18，身高：1.65米
```

**注意**：数字必须从 0 开始按顺序排列！

```csharp
// 可以重复使用
Console.WriteLine("{0}的年龄是{1}，{0}喜欢编程", name, age);
```

### **3. 字符串插值（C# 6.0+ 推荐）**
```csharp
string product = "苹果";
double price = 8.5;
int quantity = 3;

// 在字符串前加 $，用 {变量名} 直接插入
Console.WriteLine($"商品：{product}，单价：{price}元，数量：{quantity}个，总价：{price * quantity}元");
// 输出：商品：苹果，单价：8.5元，数量：3个，总价：25.5元
```

**三种方式对比**：
```csharp
string name = "张三";
int score = 98;

// 方式1：拼接（初学者友好）
Console.WriteLine(name + "的分数是" + score + "分");

// 方式2：占位符（传统方式）
Console.WriteLine("{0}的分数是{1}分", name, score);

// 方式3：插值（现代推荐）
Console.WriteLine($"{name}的分数是{score}分");
```

---

## 四、格式化输出（让输出更美观）✨

### **1. 数字格式化**
```csharp
double money = 1234.5678;

Console.WriteLine($"默认：{money}");           // 1234.5678
Console.WriteLine($"两位小数：{money:F2}");    // 1234.57
Console.WriteLine($"货币格式：{money:C}");     // ¥1,234.57（中文环境）
Console.WriteLine($"整数：{money:F0}");        // 1235（四舍五入）
Console.WriteLine($"科学计数：{money:E2}");    // 1.23E+003
```

### **2. 对齐和填充**
```csharp
string[] names = { "张三", "李四", "王五" };
int[] scores = { 95, 87, 92 };

Console.WriteLine("学生成绩表");
Console.WriteLine("=============");

// 正数右对齐，负数左对齐
Console.WriteLine($"{"姓名",-10}{"成绩",5}");  // -10表示左对齐占10个字符
Console.WriteLine($"{"---",-10}{"---",5}");

for (int i = 0; i < names.Length; i++)
{
    Console.WriteLine($"{names[i],-10}{scores[i],5}分");
}

// 输出：
// 姓名        成绩
// ---        ---
// 张三          95分
// 李四          87分
// 王五          92分
```

### **3. 更多格式化示例**
```csharp
int number = 255;

Console.WriteLine($"十进制：{number:D}");      // 255
Console.WriteLine($"十六进制：{number:X}");    // FF
Console.WriteLine($"二进制：{Convert.ToString(number, 2)}"); // 11111111

// 百分比
double rate = 0.856;
Console.WriteLine($"百分比：{rate:P1}");        // 85.6%

// 自定义数字格式
Console.WriteLine($"电话格式：{12345678900:###-####-####}"); // 123-4567-8900
```

---

## 五、特殊字符和转义序列 🔠

### **1. 常用转义字符**
```csharp
Console.WriteLine("第一行\n第二行");           // \n 换行
Console.WriteLine("制表符：\t文本对齐");       // \t 制表符（Tab）
Console.WriteLine("双引号：\"你好\"");        // \" 输出双引号
Console.WriteLine("反斜杠：C:\\Windows");     // \\ 输出反斜杠
Console.WriteLine("警告音：\a");              // \a 系统提示音

// 输出：
// 第一行
// 第二行
// 制表符：    文本对齐
// 双引号："你好"
// 反斜杠：C:\Windows
// （听到提示音）
```

### **2. 逐字字符串（@开头）**
```csharp
// 使用 @ 可以避免转义
Console.WriteLine(@"C:\Users\小明\Documents");
// 输出：C:\Users\小明\Documents

Console.WriteLine(@"第一行
第二行
第三行");
// 直接按格式输出多行

Console.WriteLine(@"""今天天气真好""");
// 输出："今天天气真好"
```

---

## 六、实际应用场景 🛠️

### **场景1：简单的计算器**
```csharp
Console.WriteLine("=== 简单计算器 ===");
Console.Write("请输入第一个数字：");
double num1 = Convert.ToDouble(Console.ReadLine());

Console.Write("请输入第二个数字：");
double num2 = Convert.ToDouble(Console.ReadLine());

Console.WriteLine($"\n计算结果：");
Console.WriteLine($"{num1} + {num2} = {num1 + num2}");
Console.WriteLine($"{num1} - {num2} = {num1 - num2}");
Console.WriteLine($"{num1} × {num2} = {num1 * num2}");
Console.WriteLine($"{num1} ÷ {num2} = {num1 / num2:F2}");  // 保留两位小数
```

### **场景2：学生信息卡**
```csharp
string studentName = "李小华";
int age = 19;
string major = "计算机科学";
double gpa = 3.75;
bool isScholarship = true;

Console.WriteLine("========= 学生信息卡 =========");
Console.WriteLine();
Console.WriteLine($"姓名：{studentName}");
Console.WriteLine($"年龄：{age}岁");
Console.WriteLine($"专业：{major}");
Console.WriteLine($"GPA：{gpa:F2}");
Console.WriteLine($"奖学金：{(isScholarship ? "是" : "否")}");
Console.WriteLine();
Console.WriteLine("==============================");
```

### **场景3：表格数据展示**
```csharp
// 简单的商品列表
Console.WriteLine("┌──────────┬─────────┬──────┐");
Console.WriteLine("│ 商品名称  │  单价   │ 库存 │");
Console.WriteLine("├──────────┼─────────┼──────┤");
Console.WriteLine($"│ {"苹果",-8} │ {"8.50",7} │ {"150",4} │");
Console.WriteLine($"│ {"香蕉",-8} │ {"5.20",7} │ {"200",4} │");
Console.WriteLine($"│ {"橙子",-8} │ {"6.80",7} │ {"120",4} │");
Console.WriteLine("└──────────┴─────────┴──────┘");
```

---

## 七、调试和查看变量值 🐞

### **1. 调试输出技巧**
```csharp
int x = 10;
int y = 20;
int result = x + y;

// 调试时查看变量值
Console.WriteLine($"调试信息：x={x}, y={y}, result={result}");

// 或者更详细的调试
Console.WriteLine("[DEBUG] 计算开始...");
Console.WriteLine($"[DEBUG] x 的值是：{x}");
Console.WriteLine($"[DEBUG] y 的值是：{y}");
Console.WriteLine($"[DEBUG] 计算结果：{result}");
Console.WriteLine("[DEBUG] 计算完成！");
```

### **2. 复杂对象输出**
```csharp
// 对于数组或列表
int[] numbers = { 1, 2, 3, 4, 5 };

// 错误方式：直接输出数组
Console.WriteLine(numbers);  // 输出：System.Int32[]（没用！）

// 正确方式1：用循环
Console.Write("数组内容：");
foreach (int num in numbers)
{
    Console.Write(num + " ");
}
Console.WriteLine();  // 换行

// 正确方式2：用 string.Join
Console.WriteLine($"数组内容：{string.Join(", ", numbers)}");
// 输出：数组内容：1, 2, 3, 4, 5
```

---

## 八、常见错误和注意事项 ⚠️

### **错误1：忘记加 $ 符号**
```csharp
string name = "小明";
// 错误写法：
Console.WriteLine("{name}你好！");  // 直接输出 {name}你好！

// 正确写法：
Console.WriteLine($"{name}你好！"); // 输出：小明你好！
```

### **错误2：占位符顺序错误**
```csharp
// 错误写法：顺序不对应
Console.WriteLine("{1}的年龄是{0}岁", 20, "小明");
// 输出：小明的年龄是20岁（虽然能运行，但容易混乱）

// 正确写法：按顺序
Console.WriteLine("{0}的年龄是{1}岁", "小明", 20);
```

### **错误3：类型不匹配**
```csharp
// 错误写法：格式符与类型不匹配
int number = 100;
Console.WriteLine($"{number:C}");  // 可以运行，但可能不是预期效果

// 应该根据需要选择合适的格式
Console.WriteLine($"{number:N0}");  // 100（千位分隔）
```

---

## 九、练习题目 📝

### **练习1：个人信息输出**
```csharp
// 任务：创建你的个人信息卡
string myName = "你的名字";
int myAge = 你的年龄;
string myHobby = "你的爱好";

// 在这里写代码，输出格式：
// ===== 我的信息卡 =====
// 姓名：XXX
// 年龄：XX岁
// 爱好：XXX
// ====================
```

### **练习2：简单购物车**
```csharp
// 任务：计算购物车总价
string item1 = "牛奶";
double price1 = 12.5;
int quantity1 = 2;

string item2 = "面包";
double price2 = 8.0;
int quantity2 = 3;

// 计算并输出购物清单和总价
```

### **练习3：成绩转换器**
```csharp
// 任务：输入分数，输出等级
// 90-100：优秀
// 80-89：良好
// 70-79：中等
// 60-69：及格
// 60以下：不及格

Console.Write("请输入分数：");
int score = Convert.ToInt32(Console.ReadLine());

// 在这里写代码，输出分数和对应等级
```

---

## 十、快速查阅手册 📋

### **常用格式说明符**
| 格式符 | 说明 | 示例 | 输出 |
|--------|------|------|------|
| `{变量}` | 字符串插值 | `$"值：{x}"` | 值：10 |
| `{0}` | 占位符 | `"{0} + {1}"` | 10 + 20 |
| `:C` | 货币格式 | `$"{100:C}"` | ¥100.00 |
| `:F2` | 两位小数 | `$"{3.1415:F2}"` | 3.14 |
| `:P1` | 百分比1位小数 | `$"{0.85:P1}"` | 85.0% |
| `:N0` | 千位分隔无小数 | `$"{1000:N0}"` | 1,000 |
| `:D5` | 5位十进制 | `$"{25:D5}"` | 00025 |
| `:X` | 十六进制 | `$"{255:X}"` | FF |

### **对齐和填充**
```csharp
Console.WriteLine($"{"左对齐",-10}文本");  // 左对齐，占10字符
Console.WriteLine($"{"右对齐",10}文本");   // 右对齐，占10字符
Console.WriteLine($"{123,10:D}");          // 右对齐，十进制格式
```

---

## 总结：初学者学习路径 🚀

1. **第一周**：掌握 `Console.WriteLine("文本")` 和变量拼接
2. **第二周**：学会用占位符 `{0}` 和插值 `$"{变量}"`
3. **第三周**：练习格式化输出 `:F2`、`:C` 等
4. **第四周**：实际项目应用，制作小工具

**记住这个万能模板**：
```csharp
Console.WriteLine($"{变量1} 的 {变量2} 是 {变量3:F2}");  // 大部分情况够用了！
```

**最重要的建议**：多写多练！打开 Visual Studio，创建控制台应用，把上面的每个例子都亲手输入一遍，运行看看效果。遇到问题就修改，这是学习编程最快的方法！ 💪



## 答案

# 练习题答案与详细解析

## 练习1：个人信息输出

### **基础答案**
```csharp
string myName = "张三";
int myAge = 18;
string myHobby = "篮球";

Console.WriteLine("===== 我的信息卡 =====");
Console.WriteLine($"姓名：{myName}");
Console.WriteLine($"年龄：{myAge}岁");
Console.WriteLine($"爱好：{myHobby}");
Console.WriteLine("=====================");
```

### **进阶答案（更多美化）**
```csharp
string myName = "李思思";
int myAge = 20;
string myHobby = "编程、阅读、音乐";
string myMajor = "计算机科学";
string mySchool = "清华大学";

Console.WriteLine("╔══════════════════════════════╗");
Console.WriteLine("║        个 人 信 息 卡        ║");
Console.WriteLine("╠══════════════════════════════╣");
Console.WriteLine($"║  姓  名：{myName,-20}  ║");
Console.WriteLine($"║  年  龄：{myAge}岁{-19}  ║");
Console.WriteLine($"║  专  业：{myMajor,-20}  ║");
Console.WriteLine($"║  学  校：{mySchool,-20}  ║");
Console.WriteLine($"║  爱  好：{myHobby,-20}  ║");
Console.WriteLine("╚══════════════════════════════╝");

// 或者使用表格形式
Console.WriteLine("\n另一种形式：");
Console.WriteLine("┌──────────┬────────────────────────┐");
Console.WriteLine($"│ {"姓名",-8} │ {myName,-22} │");
Console.WriteLine($"│ {"年龄",-8} │ {myAge + "岁",-22} │");
Console.WriteLine($"│ {"专业",-8} │ {myMajor,-22} │");
Console.WriteLine($"│ {"爱好",-8} │ {myHobby,-22} │");
Console.WriteLine("└──────────┴────────────────────────┘");
```

### **带输入功能的答案**
```csharp
// 让用户输入自己的信息
Console.WriteLine("请输入你的个人信息：");
Console.Write("姓名：");
string name = Console.ReadLine();

Console.Write("年龄：");
int age = Convert.ToInt32(Console.ReadLine());

Console.Write("爱好：");
string hobby = Console.ReadLine();

Console.WriteLine("\n正在生成信息卡...\n");

// 使用不同的颜色输出
Console.ForegroundColor = ConsoleColor.Cyan;
Console.WriteLine("════════════════════════════");
Console.WriteLine("         个人信息卡         ");
Console.WriteLine("════════════════════════════");
Console.ResetColor();

Console.ForegroundColor = ConsoleColor.Yellow;
Console.WriteLine($" 姓名：{name}");
Console.WriteLine($" 年龄：{age}岁");
Console.WriteLine($" 爱好：{hobby}");
Console.ResetColor();

Console.ForegroundColor = ConsoleColor.Cyan;
Console.WriteLine("════════════════════════════");
Console.ResetColor();
```

---

## 练习2：简单购物车

### **基础答案**
```csharp
string item1 = "牛奶";
double price1 = 12.5;
int quantity1 = 2;

string item2 = "面包";
double price2 = 8.0;
int quantity2 = 3;

// 计算小计和总计
double subtotal1 = price1 * quantity1;
double subtotal2 = price2 * quantity2;
double total = subtotal1 + subtotal2;

Console.WriteLine("=== 购物清单 ===");
Console.WriteLine($"商品：{item1}");
Console.WriteLine($"单价：{price1:C} × {quantity1} = {subtotal1:C}");
Console.WriteLine();
Console.WriteLine($"商品：{item2}");
Console.WriteLine($"单价：{price2:C} × {quantity2} = {subtotal2:C}");
Console.WriteLine();
Console.WriteLine($"总计：{total:C}");
```

### **表格形式的进阶答案**
```csharp
string item1 = "牛奶";
double price1 = 12.5;
int quantity1 = 2;

string item2 = "面包";
double price2 = 8.0;
int quantity2 = 3;

string item3 = "鸡蛋";
double price3 = 15.0;
int quantity3 = 1;

// 计算
double subtotal1 = Math.Round(price1 * quantity1, 2);
double subtotal2 = Math.Round(price2 * quantity2, 2);
double subtotal3 = Math.Round(price3 * quantity3, 2);
double total = Math.Round(subtotal1 + subtotal2 + subtotal3, 2);

// 精美表格输出
Console.WriteLine("╔══════════════════════════════════════════╗");
Console.WriteLine("║              超 市 购 物 单              ║");
Console.WriteLine("╠══════════════╦══════╦══════╦════════════╣");
Console.WriteLine("║    商品名称   ║ 单价 ║ 数量 ║    小计    ║");
Console.WriteLine("╠══════════════╬══════╬══════╬════════════╣");
Console.WriteLine($"║ {item1,-12} ║ {price1,5:C} ║ {quantity1,4} ║ {subtotal1,10:C} ║");
Console.WriteLine($"║ {item2,-12} ║ {price2,5:C} ║ {quantity2,4} ║ {subtotal2,10:C} ║");
Console.WriteLine($"║ {item3,-12} ║ {price3,5:C} ║ {quantity3,4} ║ {subtotal3,10:C} ║");
Console.WriteLine("╠══════════════╩══════╩══════╩════════════╣");
Console.WriteLine($"║         总计：{total,25:C} ║");
Console.WriteLine("╚══════════════════════════════════════════╝");

// 或者使用简单表格
Console.WriteLine("\n另一种形式：");
Console.WriteLine("┌────────────┬────────┬────────┬──────────┐");
Console.WriteLine("│ 商品名称    │ 单价   │ 数量   │ 小计     │");
Console.WriteLine("├────────────┼────────┼────────┼──────────┤");
Console.WriteLine($"│ {item1,-10} │ {price1,6:C} │ {quantity1,6} │ {subtotal1,8:C} │");
Console.WriteLine($"│ {item2,-10} │ {price2,6:C} │ {quantity2,6} │ {subtotal2,8:C} │");
Console.WriteLine($"│ {item3,-10} │ {price3,6:C} │ {quantity3,6} │ {subtotal3,8:C} │");
Console.WriteLine("├────────────┼────────┼────────┼──────────┤");
Console.WriteLine($"│ {"总计",-10} │ {"",6} │ {"",6} │ {total,8:C} │");
Console.WriteLine("└────────────┴────────┴────────┴──────────┘");
```

### **带用户输入的动态购物车**
```csharp
Console.WriteLine("=== 动态购物车系统 ===\n");

// 使用数组存储多个商品
string[] itemNames = new string[3];
double[] prices = new double[3];
int[] quantities = new int[3];
double[] subtotals = new double[3];

double grandTotal = 0;

// 输入商品信息
for (int i = 0; i < 3; i++)
{
    Console.WriteLine($"请输入第{i + 1}件商品信息：");
    
    Console.Write("商品名称：");
    itemNames[i] = Console.ReadLine();
    
    Console.Write("单价：");
    prices[i] = Convert.ToDouble(Console.ReadLine());
    
    Console.Write("数量：");
    quantities[i] = Convert.ToInt32(Console.ReadLine());
    
    subtotals[i] = prices[i] * quantities[i];
    grandTotal += subtotals[i];
    
    Console.WriteLine(); // 空行
}

// 输出购物车
Console.WriteLine("\n=== 您的购物车 ===");
Console.WriteLine("{0,-15} {1,10} {2,10} {3,15}", "商品名称", "单价", "数量", "小计");
Console.WriteLine(new string('-', 50));

for (int i = 0; i < 3; i++)
{
    Console.WriteLine("{0,-15} {1,10:C} {2,10} {3,15:C}", 
                     itemNames[i], prices[i], quantities[i], subtotals[i]);
}

Console.WriteLine(new string('=', 50));
Console.WriteLine("{0,-15} {1,10} {2,10} {3,15:C}", "总计", "", "", grandTotal);

// 添加优惠计算
double discount = 0;
if (grandTotal > 100)
{
    discount = grandTotal * 0.1; // 9折优惠
    double finalTotal = grandTotal - discount;
    
    Console.WriteLine("\n优惠信息：");
    Console.WriteLine($"消费满100元享9折优惠");
    Console.WriteLine($"原价：{grandTotal:C}");
    Console.WriteLine($"优惠：-{discount:C}");
    Console.WriteLine($"实付：{finalTotal:C}");
}
```

---

## 练习3：成绩转换器

### **基础答案（使用if-else）**
```csharp
Console.Write("请输入分数（0-100）：");
int score = Convert.ToInt32(Console.ReadLine());

string grade; // 等级
string colorCode; // 颜色标记

if (score >= 90 && score <= 100)
{
    grade = "优秀";
    colorCode = "★"; // 用星星表示优秀
    Console.ForegroundColor = ConsoleColor.Green;
}
else if (score >= 80)
{
    grade = "良好";
    colorCode = "☆";
    Console.ForegroundColor = ConsoleColor.Cyan;
}
else if (score >= 70)
{
    grade = "中等";
    colorCode = "✓";
    Console.ForegroundColor = ConsoleColor.Yellow;
}
else if (score >= 60)
{
    grade = "及格";
    colorCode = "○";
    Console.ForegroundColor = ConsoleColor.Magenta;
}
else if (score >= 0 && score < 60)
{
    grade = "不及格";
    colorCode = "✗";
    Console.ForegroundColor = ConsoleColor.Red;
}
else
{
    grade = "无效分数";
    colorCode = "?";
    Console.ForegroundColor = ConsoleColor.Gray;
}

// 输出结果
Console.WriteLine($"\n{colorCode} 分数：{score}分");
Console.WriteLine($"{colorCode} 等级：{grade}");
Console.ResetColor();
```

### **进阶答案（使用switch表达式）**
```csharp
Console.Write("请输入分数（0-100）：");
int score = Convert.ToInt32(Console.ReadLine());

// 数据验证
if (score < 0 || score > 100)
{
    Console.ForegroundColor = ConsoleColor.Red;
    Console.WriteLine("错误：分数必须在0-100之间！");
    Console.ResetColor();
    return;
}

// 使用switch表达式（C# 8.0+）
string grade = score switch
{
    >= 90 and <= 100 => "优秀",
    >= 80 => "良好",
    >= 70 => "中等",
    >= 60 => "及格",
    _ => "不及格"  // 默认情况
};

// 使用字典存储等级对应的颜色和符号
var gradeInfo = new Dictionary<string, (ConsoleColor color, string symbol, string comment)>
{
    ["优秀"] = (ConsoleColor.Green, "★★★★★", "太棒了！继续保持！"),
    ["良好"] = (ConsoleColor.Cyan, "★★★★☆", "做得不错！"),
    ["中等"] = (ConsoleColor.Yellow, "★★★☆☆", "还有提升空间"),
    ["及格"] = (ConsoleColor.Magenta, "★★☆☆☆", "刚刚达标，加油！"),
    ["不及格"] = (ConsoleColor.Red, "★☆☆☆☆", "需要加倍努力")
};

// 获取等级对应的信息
var (color, symbol, comment) = gradeInfo[grade];

// 精美输出
Console.WriteLine();
Console.WriteLine("╔══════════════════════════════════╗");
Console.WriteLine("║         成 绩 报 告 单          ║");
Console.WriteLine("╠══════════════════════════════════╣");

Console.ForegroundColor = color;
Console.WriteLine($"║  分 数：{score,3}分{"",20}║");
Console.WriteLine($"║  等 级：{grade,-4}{symbol,-10}{"",12}║");
Console.WriteLine($"║  评 语：{comment,-24}║");
Console.ResetColor();

Console.WriteLine("╚══════════════════════════════════╝");

// 附加信息
Console.WriteLine("\n等级标准说明：");
Console.WriteLine("┌──────┬────────┬─────────────────┐");
Console.WriteLine("│ 等级 │  分数  │      标准       │");
Console.WriteLine("├──────┼────────┼─────────────────┤");
Console.WriteLine($"│ {"优秀",-4} │ 90-100 │ {gradeInfo["优秀"].symbol,-15} │");
Console.WriteLine($"│ {"良好",-4} │ 80-89  │ {gradeInfo["良好"].symbol,-15} │");
Console.WriteLine($"│ {"中等",-4} │ 70-79  │ {gradeInfo["中等"].symbol,-15} │");
Console.WriteLine($"│ {"及格",-4} │ 60-69  │ {gradeInfo["及格"].symbol,-15} │");
Console.WriteLine($"│ {"不及格",-4} │ 0-59   │ {gradeInfo["不及格"].symbol,-15} │");
Console.WriteLine("└──────┴────────┴─────────────────┘");
```

### **批量处理多个成绩**
```csharp
Console.WriteLine("=== 批量成绩转换器 ===\n");
Console.Write("请输入要处理的学生人数：");
int studentCount = Convert.ToInt32(Console.ReadLine());

// 使用数组存储多个学生成绩
int[] scores = new int[studentCount];
string[] grades = new string[studentCount];
int[] gradeCounts = new int[5]; // 统计各等级人数

// 输入成绩
for (int i = 0; i < studentCount; i++)
{
    Console.Write($"请输入第{i + 1}个学生的分数：");
    scores[i] = Convert.ToInt32(Console.ReadLine());
    
    // 转换等级
    if (scores[i] >= 90) 
    { 
        grades[i] = "优秀"; 
        gradeCounts[0]++; 
    }
    else if (scores[i] >= 80) 
    { 
        grades[i] = "良好"; 
        gradeCounts[1]++; 
    }
    else if (scores[i] >= 70) 
    { 
        grades[i] = "中等"; 
        gradeCounts[2]++; 
    }
    else if (scores[i] >= 60) 
    { 
        grades[i] = "及格"; 
        gradeCounts[3]++; 
    }
    else 
    { 
        grades[i] = "不及格"; 
        gradeCounts[4]++; 
    }
}

// 输出成绩单
Console.WriteLine("\n══════════════════════════════════════");
Console.WriteLine("          学生成绩汇总表");
Console.WriteLine("══════════════════════════════════════");

Console.WriteLine("{0,-8} {1,-8} {2,-8} {3,-15}", "序号", "学号", "分数", "等级");
Console.WriteLine(new string('─', 40));

for (int i = 0; i < studentCount; i++)
{
    // 根据等级设置颜色
    switch (grades[i])
    {
        case "优秀": Console.ForegroundColor = ConsoleColor.Green; break;
        case "良好": Console.ForegroundColor = ConsoleColor.Cyan; break;
        case "中等": Console.ForegroundColor = ConsoleColor.Yellow; break;
        case "及格": Console.ForegroundColor = ConsoleColor.Magenta; break;
        case "不及格": Console.ForegroundColor = ConsoleColor.Red; break;
    }
    
    Console.WriteLine("{0,-8} {1,-8} {2,-8} {3,-15}", 
                     i + 1, 
                     $"S{1000 + i}", 
                     scores[i], 
                     grades[i]);
    Console.ResetColor();
}

// 统计信息
Console.WriteLine("\n══════════════════════════════════════");
Console.WriteLine("            成绩分布统计");
Console.WriteLine("══════════════════════════════════════");

string[] gradeNames = { "优秀", "良好", "中等", "及格", "不及格" };
int totalStudents = studentCount;

for (int i = 0; i < 5; i++)
{
    int count = gradeCounts[i];
    double percentage = (double)count / totalStudents * 100;
    
    // 创建进度条
    int barLength = (int)(percentage / 5); // 每5%一个字符
    string progressBar = new string('█', barLength).PadRight(20);
    
    Console.WriteLine($"{gradeNames[i],-6}：{count,3}人 ({percentage,5:F1}%) {progressBar}");
}

// 计算平均分
double average = scores.Average();
Console.WriteLine($"\n平均分：{average:F1}");
Console.WriteLine($"最高分：{scores.Max()}");
Console.WriteLine($"最低分：{scores.Min()}");

// 评级
string classLevel = average switch
{
    >= 85 => "优秀班级",
    >= 75 => "良好班级",
    >= 65 => "中等班级",
    >= 60 => "及格班级",
    _ => "需要改进班级"
};

Console.WriteLine($"班级评级：{classLevel}");
```

---

## 额外练习：综合应用示例

### **学生管理系统（简化版）**
```csharp
Console.WriteLine("=== 学生成绩管理系统 ===\n");

// 使用List存储多个学生
var students = new List<(string name, int chinese, int math, int english)>();

// 添加示例数据
students.Add(("张三", 85, 90, 88));
students.Add(("李四", 92, 87, 95));
students.Add(("王五", 78, 82, 76));
students.Add(("赵六", 65, 70, 68));

// 计算总分和平均分
Console.WriteLine("┌──────┬──────┬──────┬──────┬──────┬──────┐");
Console.WriteLine("│ 姓名  │ 语文 │ 数学 │ 英语 │ 总分 │ 平均分│");
Console.WriteLine("├──────┼──────┼──────┼──────┼──────┼──────┤");

foreach (var student in students)
{
    int total = student.chinese + student.math + student.english;
    double average = total / 3.0;
    
    // 根据平均分设置颜色
    if (average >= 90) Console.ForegroundColor = ConsoleColor.Green;
    else if (average >= 80) Console.ForegroundColor = ConsoleColor.Cyan;
    else if (average >= 70) Console.ForegroundColor = ConsoleColor.Yellow;
    else if (average >= 60) Console.ForegroundColor = ConsoleColor.Magenta;
    else Console.ForegroundColor = ConsoleColor.Red;
    
    Console.WriteLine($"│ {student.name,-4} │ {student.chinese,4} │ {student.math,4} │ {student.english,4} │ {total,4} │ {average,6:F1}│");
    Console.ResetColor();
}

Console.WriteLine("└──────┴──────┴──────┴──────┴──────┴──────┘");

// 班级统计
int classChineseTotal = students.Sum(s => s.chinese);
int classMathTotal = students.Sum(s => s.math);
int classEnglishTotal = students.Sum(s => s.english);
int classTotal = classChineseTotal + classMathTotal + classEnglishTotal;
double classAverage = classTotal / (students.Count * 3.0);

Console.WriteLine("\n班级统计：");
Console.WriteLine($"语文平均分：{classChineseTotal / (double)students.Count:F1}");
Console.WriteLine($"数学平均分：{classMathTotal / (double)students.Count:F1}");
Console.WriteLine($"英语平均分：{classEnglishTotal / (double)students.Count:F1}");
Console.WriteLine($"总平均分：{classAverage:F1}");
```

---

## 关键学习点总结 🎓

### **1. 字符串插值的应用**
```csharp
// 这是最常用的写法
Console.WriteLine($"{变量名} 的 {另一个变量}");
```

### **2. 格式化输出技巧**
```csharp
// 数字格式化
Console.WriteLine($"{数字:F2}"); // 两位小数
Console.WriteLine($"{数字:C}");  // 货币格式
Console.WriteLine($"{数字:P1}"); // 百分比

// 对齐输出
Console.WriteLine($"{文本,-10}"); // 左对齐，占10字符
Console.WriteLine($"{文本,10}");  // 右对齐，占10字符
```

### **3. 特殊字符的使用**
```csharp
Console.WriteLine("第一行\n第二行");      // 换行
Console.WriteLine("制表符\t文本");       // Tab对齐
Console.WriteLine(@"C:\Users\Name");    // 避免转义
```

### **4. 颜色和美化**
```csharp
Console.ForegroundColor = ConsoleColor.Green;
Console.WriteLine("绿色文本");
Console.ResetColor(); // 重置颜色
```

### **5. 表格输出技巧**
```csharp
// 使用Unicode字符创建表格边框
Console.WriteLine("┌──────┬──────┐");
Console.WriteLine("│ 姓名 │ 成绩 │");
Console.WriteLine("├──────┼──────┤");
Console.WriteLine($"│ {name,-4} │ {score,4} │");
Console.WriteLine("└──────┴──────┘");
```

## 建议的练习顺序：
1. 先运行基础答案，理解基本概念
2. 尝试修改其中的数据，看看输出变化
3. 阅读进阶答案，学习更多技巧
4. 自己创作新的输出格式
5. 尝试把多个练习结合起来，比如创建一个完整的"学生成绩管理系统"

记住：**多动手写代码是最好的学习方法！** 每个例子都亲手输入一遍，运行看看效果，然后修改尝试。💻✨