---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务四 Random 类   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务四 Random 类   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  4  # 侧边栏中排在第1位
---

## 高考考点

掌握Random类的方法：

> Next、NextDouble；

## 前置说明
`Random`是C#中用于生成伪随机数的类，位于`System`命名空间下；
- 伪随机数：基于种子（Seed）生成，相同种子会生成相同序列的随机数；
- 推荐用法：创建**单个`Random`实例**复用（而非频繁新建），避免因系统时钟精度问题生成重复随机数；
- 所有示例需先引入`using System;`。



## 1. Next
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 生成指定范围内的非负整数随机数（支持无参、单参、双参三种重载）       |
| **语法**   | 1. `Random实例.Next()`（无参）；<br />2. `Random实例.Next(int maxValue)`（单参）；<br />3. `Random实例.Next(int minValue, int maxValue)`（双参） |
| **参数**   | - 无参：无；<br />- maxValue：随机数的**上限（不含）**，int类型，必须≥0；<br /> - minValue：随机数的**下限（含）**，int类型，必须≤maxValue； |
| **注意事项** | 1. 返回值为`int`类型，非负整数；<br />2. 无参重载：返回`0 ~ int.MaxValue`（2147483647）之间的随机数；<br />3. 单参重载：返回`0 ~ maxValue-1`之间的随机数（如`Next(10)`返回0~9）；<br />4. 双参重载：返回`minValue ~ maxValue-1`之间的随机数（如`Next(1, 10)`返回1~9）；<br />5. 参数异常：maxValue`<`0 或 minValue`>`maxValue 会抛`ArgumentOutOfRangeException`；<br />6. 避免频繁新建`Random`（如循环内`new Random()`），易生成重复值。 |

### 用法示例（Next）
```csharp
// 第一步：创建Random实例（推荐复用，不要频繁new）
Random random = new Random();

// 示例1：无参Next（0 ~ int.MaxValue 随机整数）
int randomNum1 = random.Next();
Console.WriteLine($"无参Next随机数：{randomNum1}"); // 输出：如156892345（随机值）

// 示例2：单参Next（0 ~ maxValue-1，如0~9）
int randomNum2 = random.Next(10); 
Console.WriteLine($"单参Next(10)随机数（0~9）：{randomNum2}"); // 输出：如5（随机值）

// 示例3：双参Next（minValue ~ maxValue-1，如1~100）
int randomNum3 = random.Next(1, 101); 
Console.WriteLine($"双参Next(1,101)随机数（1~100）：{randomNum3}"); // 输出：如78（随机值）

// 示例4：生成指定范围的随机数（如10~20）
int min = 10;
int max = 21; // 因为上限不含，所以要+1才能包含20
int randomNum4 = random.Next(min, max);
Console.WriteLine($"10~20的随机数：{randomNum4}"); // 输出：如15（随机值）

// 错误示例：参数异常（会抛错）
// int errorNum = random.Next(-5); // maxValue<0，抛ArgumentOutOfRangeException
// int errorNum2 = random.Next(10, 5); // minValue>maxValue，抛ArgumentOutOfRangeException
```

---

## 2. NextDouble
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 生成`0.0 ~ 1.0`之间的双精度浮点型（double）随机数（包含0.0，不含1.0） |
| **语法**   | `Random实例.NextDouble()`                                            |
| **参数**   | 无                                                                   |
| **注意事项** | 1. 返回值为`double`类型，范围`[0.0, 1.0)`（包含0.0，不包含1.0）；<br />2. 如需生成指定范围的浮点随机数（如1.0~10.0），可通过公式：`min + random.NextDouble() * (max - min)`；<br />3. 精度：double类型默认保留15~17位有效数字；<br />4. 同样需复用`Random`实例，避免重复值；<br />5. 不会返回1.0，若需包含上限，可结合`Next`或调整公式。 |

### 用法示例（NextDouble）
```csharp
// 复用之前创建的Random实例（也可重新创建，但推荐复用）
Random random = new Random();

// 示例1：基础用法（0.0 ~ 1.0 随机小数）
double randomDouble1 = random.NextDouble();
Console.WriteLine($"基础NextDouble随机数：{randomDouble1:F4}"); // 输出：如0.7892（保留4位小数）

// 示例2：生成指定范围的浮点随机数（如1.0 ~ 10.0）
double min = 1.0;
double max = 10.0;
double randomDouble2 = min + random.NextDouble() * (max - min);
Console.WriteLine($"1.0~10.0的随机小数：{randomDouble2:F2}"); // 输出：如5.67（保留2位小数）

// 示例3：生成指定精度的随机数（如0~100的保留1位小数的随机数）
double randomDouble3 = random.NextDouble() * 100;
// 保留1位小数（四舍五入）
double roundedNum = Math.Round(randomDouble3, 1);
Console.WriteLine($"0~100保留1位小数的随机数：{roundedNum}"); // 输出：如89.5（随机值）

// 示例4：生成负数范围的随机小数（如-5.0 ~ 5.0）
double minNeg = -5.0;
double maxNeg = 5.0;
double randomDouble4 = minNeg + random.NextDouble() * (maxNeg - minNeg);
Console.WriteLine($"-5.0~5.0的随机小数：{randomDouble4:F3}"); // 输出：如-2.345（随机值）
```



## 总结（核心关键点）
1. **实例复用**：`Random`需创建单个实例复用，避免循环内`new Random()`（系统时钟精度问题导致重复随机数）；
2. **范围规则**：
   - `Next`：所有重载的**上限均不含**，需生成`a~b`（包含b）的整数，需写`Next(a, b+1)`；
   - `NextDouble`：固定返回`[0.0, 1.0)`，指定范围需用公式`min + NextDouble() * (max - min)`；
3. **异常处理**：`Next`的参数需满足`maxValue≥0`、`minValue≤maxValue`，否则抛参数越界异常；
4. **精度控制**：浮点随机数的精度可通过`Math.Round`调整，满足业务对小数位数的要求。

----

## 一、Random类是什么？
在 C# 中，`Random` 类是一个专门用于**生成伪随机数(整数、小数)**的工具。对于初学者来说，可以将它想象成一个“随机发牌员”。

## 二、Random 类的特点

### 1. 伪随机

它是 .NET 框架提供的一个类，位于 `System` 命名空间下。之所以叫“伪随机”，是因为它是通过特定的数学算法根据一个“种子（Seed）（默认用系统时钟）”计算出来的。相同种子会生成完全相同的随机数。

### 2.实例类
是实例类（需先创建对象才能用），而非静态类，且**推荐复用同一个实例**（频繁新建会导致随机数重复）。

## 三、基本语法

在使用 `Random` 之前，你必须先创建它的**实例（对象）**。

```csharp
// 第一步：引入命名空间（默认已包含，新手可忽略）
using System;

// 第二步：创建Random实例（核心！推荐只创建一次）
Random random = new Random();

// 第三步：调用方法生成随机数（常用Next/NextDouble）
int intRandom = random.Next();       // 生成整数随机数
double doubleRandom = random.NextDouble(); // 生成小数随机数

```

| 构造函数 | 语法 | 说明 |
|----------|------|------|
| 无参构造 | `new Random()` | 最常用，自动以系统当前时间为种子，生成不同的随机数序列 |
| 带种子构造 | `new Random(int seed)` | 手动指定种子值，**相同种子生成完全相同的随机数**（用于测试/复现场景） |



## 四、核心方法

这是最常用的三个招式，涵盖了 90% 的开发需求：

| 方法 | 语法示例 | 说明 |
| --- | --- | --- |
| **`Next()`** | `rd.Next()` | 返回一个非负的任意整数。 |
| **`Next(max)`** | `rd.Next(10)` | 返回一个 **0 到 9** 之间的整数（不包含 10）。 |
| **`Next(min, max)`** | `rd.Next(1, 101)` | 返回一个 **1 到 100** 之间的整数（包含 1，不包含 101）。 |
| **`NextDouble()`** | `rd.NextDouble()` | 返回一个 **0.0 到 1.0** 之间的随机小数。 |


| 方法 | 语法 | 用途 | 核心规则 |
|------|------|------|----------|
| Next（无参） | `random.Next()` | 生成 `0 ~ int.MaxValue`（约21亿）的整数 | 非负、上限不含 |
| Next（单参） | `random.Next(int maxValue)` | 生成 `0 ~ maxValue-1` 的整数 | 上限maxValue不含（如Next(10)→0~9） |
| Next（双参） | `random.Next(int min, int max)` | 生成 `min ~ max-1` 的整数 | 下限含、上限不含（如Next(1,10)→1~9） |
| NextDouble | `random.NextDouble()` | 生成 `0.0 ~ 1.0` 的小数 | 包含0.0、不含1.0 |


## 五、练习

### 案例 A：模拟掷骰子（生成指定范围整数）

```csharp
Random rd = new Random();
int dice = rd.Next(1, 7); // 生成 1, 2, 3, 4, 5, 6
Console.WriteLine($"你掷出了：{dice}");

```

### 案例 B：随机获取数组中的元素

这是 `Random` 最实用的场景之一。

```csharp
string[] students = { "张三", "李四", "王五", "赵六" };
Random rd = new Random();

// 随机生成一个索引（0 到 数组长度-1）
int index = rd.Next(students.Length); 

Console.WriteLine($"今天值日的是：{students[index]}");

```



## 六、“避坑”指南

**不要在循环内部创建 `Random` 对象！**

* **错误做法：**
```csharp
for(int i = 0; i < 5; i++) {
    Random rd = new Random(); // 每次循环都新建，会导致生成的数字可能一模一样
    Console.WriteLine(rd.Next(1, 100));
}

```

* **正确做法：**
在循环**外面**创建一次对象，在循环**里面**调用方法。
```csharp
Random rd = new Random(); // 只创建一次
for(int i = 0; i < 5; i++) {
    Console.WriteLine(rd.Next(1, 100));
}

```

1. **实例只建一次**：无论循环还是多次调用，都复用同一个`Random`实例，避免重复随机数；
2. **范围别写错**：`Next`的上限永远“不含”，要生成`a~b`（包含b）的整数，必须写`Next(a, b+1)`；
3. **种子的坑**：手动指定种子（如`new Random(100)`）时，每次运行程序生成的随机数序列都一样，仅用于测试，日常开发用无参构造即可。

## 七、掌握Random类的3个步骤
### 步骤1：先掌握“正确创建实例”
新手最容易错的是**循环内频繁新建Random实例**，导致生成重复随机数，一定要记住：**创建1个实例，复用它**！
```csharp
// 错误示例（循环内new，随机数大概率重复）
for (int i = 0; i < 3; i++)
{
    Random wrongRandom = new Random(); // 频繁新建
    Console.WriteLine(wrongRandom.Next(10)); // 输出可能全是同一个数，如5、5、5
}

// 正确示例（先创建实例，再复用）
Random rightRandom = new Random(); // 只创建1次
for (int i = 0; i < 3; i++)
{
    Console.WriteLine(rightRandom.Next(10)); // 输出随机数，如3、8、1
}
```

### 步骤2：掌握2个核心方法的基础用法
从“固定范围随机数”开始练，先熟整数，再练小数：
#### 示例1：生成指定范围的整数（新手最常用）
```csharp
Random rnd = new Random();

// 1. 生成1~10的随机整数（包含10，所以上限写11）
int num1 = rnd.Next(1, 11); 
Console.WriteLine($"1~10的随机数：{num1}"); // 如7

// 2. 生成0~99的随机整数（单参写法）
int num2 = rnd.Next(100);
Console.WriteLine($"0~99的随机数：{num2}"); // 如45

// 3. 生成100~200的随机整数
int num3 = rnd.Next(100, 201);
Console.WriteLine($"100~200的随机数：{num3}"); // 如156
```

#### 示例2：生成指定范围的小数
`NextDouble`默认只生成0.0~1.0，需用公式 `最小值 + NextDouble() * (最大值 - 最小值)` 扩展范围：
```csharp
Random rnd = new Random();

// 1. 生成0.0~10.0的随机小数
double d1 = rnd.NextDouble() * 10;
Console.WriteLine($"0.0~10.0的随机小数：{d1:F2}"); // 保留2位小数，如6.89

// 2. 生成5.0~15.0的随机小数
double min = 5.0;
double max = 15.0;
double d2 = min + rnd.NextDouble() * (max - min);
Console.WriteLine($"5.0~15.0的随机小数：{d2:F1}"); // 保留1位小数，如9.2

// 3. 生成-5.0~5.0的随机小数（负数范围）
double d3 = -5.0 + rnd.NextDouble() * 10;
Console.WriteLine($"-5.0~5.0的随机小数：{d3:F3}"); // 如-2.345
```

### 步骤3：结合实际场景练手（巩固用法）
新手可以做2个简单小案例，快速理解Random的实际用途：
##### 案例1：模拟抽奖（1~100随机抽1个幸运数字）
```csharp
Random lottery = new Random();
int luckyNum = lottery.Next(1, 101); // 1~100
Console.WriteLine($"恭喜你抽到幸运数字：{luckyNum}");
```

#### 案例2：随机生成验证码（6位数字）
```csharp
Random codeRnd = new Random();
string verifyCode = "";
// 循环6次，每次生成0~9的数字，拼接成验证码
for (int i = 0; i < 6; i++)
{
    verifyCode += codeRnd.Next(10);
}
Console.WriteLine($"随机验证码：{verifyCode}"); // 如859274
```

## 八、总结

掌握 `Random` 的秘诀只有两步：

1. 在代码顶部 `new` 一个对象。
2. 记住 `Next(min, max)` 是**左闭右开**的（包含最小值，不包含最大值）。

其他

1. **Random类核心**：生成伪随机数的实例类，需先创建对象再调用方法；
2. **核心语法**：`new Random()` 创建实例 → 调用`Next()`（整数）/`NextDouble()`（小数）；
3. **新手掌握路径**：先学会“正确创建实例” → 练熟“指定范围随机数” → 结合小场景巩固；
4. **关键避坑**：复用实例、注意`Next`的上限不含规则。