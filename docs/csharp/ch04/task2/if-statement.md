---
# 这部分是关键！侧边栏显示名由这里决定
title: 1.if语句  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 1.if语句  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 2  # 侧边栏中排在第1位
---

1.if语句


# C# 分支结构语句练习题（适合初学者）
作为老师，我为初学者设计了**3道 if 分支题**、**3道 switch 分支题**、**3道混合使用题**，所有题目均贴合初学者认知水平，逻辑清晰、覆盖核心知识点，且附带解题思路和参考代码，方便课堂讲解和学生练习。

## 一、if 分支语句练习题（3道经典）
if 分支重点考察**布尔条件判断**、**多条件组合（&&/||/!）**、**if-else/if-else if-else 结构**，题目从简单到复杂递进。

### 练习题1：成绩合格判断（基础 if-else）
#### 题目要求
1.  让用户从控制台输入一个考试分数（0-100之间的整数）。
2.  使用 if-else 语句判断：分数 ≥ 60 输出「成绩合格，恭喜！」，否则输出「成绩不合格，需补考！」。
3.  额外要求：若分数 > 100 或 < 0，输出「输入的分数无效，请输入0-100之间的整数！」。

#### 解题思路
- 先做「无效分数」的判断（边界值校验），再做「合格/不合格」的二元判断。
- 使用 `int.Parse()` 读取输入，核心结构为 `if-else if-else`（三层判断，适配无效值场景）。

#### 参考代码
```csharp
using System;

namespace IfExercise1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("请输入你的考试分数（0-100）：");
            int score = int.Parse(Console.ReadLine());

            if (score < 0 || score > 100)
            {
                Console.WriteLine("输入的分数无效，请输入0-100之间的整数！");
            }
            else if (score >= 60)
            {
                Console.WriteLine("成绩合格，恭喜！");
            }
            else
            {
                Console.WriteLine("成绩不合格，需补考！");
            }

            Console.ReadKey();
        }
    }
}
```

### 练习题2：成绩等级评定（进阶 if-else if-else）
#### 题目要求
1.  让用户输入一个有效分数（0-100），先校验分数有效性。
2.  按以下规则评定等级并输出：
    - 90 ≤ 分数 ≤ 100：优秀
    - 80 ≤ 分数 ＜ 90：良好
    - 70 ≤ 分数 ＜ 80：中等
    - 60 ≤ 分数 ＜ 70：及格
    - 0 ≤ 分数 ＜ 60：不及格
3.  输出格式示例：「你的分数是95，等级为：优秀」。

#### 解题思路
- 采用「从高到低」的条件判断顺序，避免逻辑冲突。
- 利用 `else if` 实现多分支互斥，每个分支对应一个等级区间。

#### 参考代码
```csharp
using System;

namespace IfExercise2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("请输入你的考试分数（0-100）：");
            int score = int.Parse(Console.ReadLine());
            string grade = "";

            if (score < 0 || score > 100)
            {
                Console.WriteLine("输入的分数无效，请输入0-100之间的整数！");
            }
            else if (score >= 90)
            {
                grade = "优秀";
            }
            else if (score >= 80)
            {
                grade = "良好";
            }
            else if (score >= 70)
            {
                grade = "中等";
            }
            else if (score >= 60)
            {
                grade = "及格";
            }
            else
            {
                grade = "不及格";
            }

            // 仅当分数有效时，输出等级结果
            if (score >= 0 && score <= 100)
            {
                Console.WriteLine($"你的分数是{score}，等级为：{grade}");
            }

            Console.ReadKey();
        }
    }
}
```

### 练习题3：闰年判断（复杂条件 if）
#### 题目要求
1.  让用户输入一个4位整数年份（如2024）。
2.  使用 if 语句判断该年份是否为闰年，输出「XXXX年是闰年」或「XXXX年不是闰年」。
3.  闰年判断规则（二者满足其一即可）：
    - 能被4整除，但不能被100整除。
    - 能被400整除。

#### 解题思路
- 核心是组合逻辑运算符 `&&` 和 `||`，表达闰年的两个判断条件。
- 先校验输入是否为4位年份（可选，提升题目完整性），再执行闰年判断。

#### 参考代码
```csharp
using System;

namespace IfExercise3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("请输入一个4位整数年份（如2024）：");
            int year = int.Parse(Console.ReadLine());

            // 先校验4位年份（1000-9999）
            if (year < 1000 || year > 9999)
            {
                Console.WriteLine("输入无效，请输入4位整数年份！");
            }
            else
            {
                // 闰年判断条件
                bool isLeapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);

                if (isLeapYear)
                {
                    Console.WriteLine($"{year}年是闰年");
                }
                else
                {
                    Console.WriteLine($"{year}年不是闰年");
                }
            }

            Console.ReadKey();
        }
    }
}
```

## 二、switch 分支语句练习题（3道经典）
switch 分支重点考察**值的精准匹配**、**case 穿透（break 的使用）**、**default 分支的作用**，题目适配初学者的常见应用场景。

### 练习题1：星期几查询（基础 switch-case）
#### 题目要求
1.  让用户输入一个1-7之间的整数。
2.  使用 switch-case 语句匹配，输出对应的星期几：
    - 1：星期一
    - 2：星期二
    - ...
    - 7：星期日
3.  若输入不是1-7的整数，输出「输入无效，请输入1-7之间的整数！」（使用 default 分支）。

#### 解题思路
- 每个 case 对应一个整数，匹配后输出对应结果，末尾添加 `break` 防止穿透。
- default 分支处理所有无效输入，保证逻辑完整性。

#### 参考代码
```csharp
using System;

namespace SwitchExercise1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("请输入1-7之间的整数（查询星期几）：");
            int dayNum = int.Parse(Console.ReadLine());

            switch (dayNum)
            {
                case 1:
                    Console.WriteLine("星期一");
                    break;
                case 2:
                    Console.WriteLine("星期二");
                    break;
                case 3:
                    Console.WriteLine("星期三");
                    break;
                case 4:
                    Console.WriteLine("星期四");
                    break;
                case 5:
                    Console.WriteLine("星期五");
                    break;
                case 6:
                    Console.WriteLine("星期六");
                    break;
                case 7:
                    Console.WriteLine("星期日");
                    break;
                default:
                    Console.WriteLine("输入无效，请输入1-7之间的整数！");
                    break;
            }

            Console.ReadKey();
        }
    }
}
```

### 练习题2：水果价格查询（进阶 switch-case，字符串匹配）
#### 题目要求
1.  让用户输入水果名称（苹果、香蕉、橙子、葡萄），不区分大小写。
2.  使用 switch-case 语句匹配，输出对应水果的单价：
    - 苹果：5.99 元/斤
    - 香蕉：3.59 元/斤
    - 橙子：4.99 元/斤
    - 葡萄：8.99 元/斤
3.  若输入的水果名称不在列表中，输出「暂无该水果的价格信息！」。

#### 解题思路
- C# 7.0 及以上支持字符串类型的 switch 匹配，满足题目需求。
- 使用 `ToLower()` 或 `ToUpper()` 统一输入格式，实现「不区分大小写」的匹配。
- 每个 case 对应一个水果名称，保证精准匹配。

#### 参考代码
```csharp
using System;

namespace SwitchExercise2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("请输入水果名称（苹果、香蕉、橙子、葡萄）：");
            string fruitName = Console.ReadLine().ToLower(); // 转为小写，统一匹配格式

            switch (fruitName)
            {
                case "苹果":
                case "pingguo": // 可选：支持拼音输入，提升友好性
                    Console.WriteLine("苹果：5.99 元/斤");
                    break;
                case "香蕉":
                case "xiangjiao":
                    Console.WriteLine("香蕉：3.59 元/斤");
                    break;
                case "橙子":
                case "chengzi":
                    Console.WriteLine("橙子：4.99 元/斤");
                    break;
                case "葡萄":
                case "putao":
                    Console.WriteLine("葡萄：8.99 元/斤");
                    break;
                default:
                    Console.WriteLine("暂无该水果的价格信息！");
                    break;
            }

            Console.ReadKey();
        }
    }
}
```

### 练习题3：月份天数查询（switch-case 穿透，简化逻辑）
#### 题目要求
1.  让用户输入一个1-12之间的整数（月份），再输入年份（可选，用于判断2月）。
2.  使用 switch-case 语句查询该月份的天数，规则：
    - 1、3、5、7、8、10、12月：31天
    - 4、6、9、11月：30天
    - 2月：平年28天，闰年29天（可复用之前的闰年判断逻辑）
3.  无效月份输出「输入无效，请输入1-12之间的整数！」。

#### 解题思路
- 利用 switch 「case 穿透」特性（不写 break），简化多个月份对应相同天数的逻辑。
- 2月单独处理，嵌套 if 语句判断闰年（为后续混合题做铺垫）。

#### 参考代码
```csharp
using System;

namespace SwitchExercise3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("请输入1-12之间的整数（月份）：");
            int month = int.Parse(Console.ReadLine());
            int days = 0;

            switch (month)
            {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    days = 31;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    days = 30;
                    break;
                case 2:
                    // 输入年份，判断闰年
                    Console.Write("请输入年份（4位整数）：");
                    int year = int.Parse(Console.ReadLine());
                    bool isLeapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
                    days = isLeapYear ? 29 : 28; // 三元运算符，简化 if-else
                    break;
                default:
                    Console.WriteLine("输入无效，请输入1-12之间的整数！");
                    return; // 终止程序，无需后续输出
            }

            Console.WriteLine($"{month}月有{days}天");
            Console.ReadKey();
        }
    }
}
```

## 三、if 和 switch 混合使用练习题（3道经典）
混合题重点考察**两种分支结构的合理选型**：复杂条件（区间、多逻辑组合）用 if，多值精准匹配用 switch，实现「优势互补」。

### 练习题1：商品折扣计算（混合基础）
#### 题目要求
1.  让用户输入「商品类型」（家电、服装、食品）和「购买金额」。
2.  不同商品类型对应不同基础折扣，使用 switch 匹配商品类型：
    - 家电：9折（原价 × 0.9）
    - 服装：85折（原价 × 0.85）
    - 食品：无折扣（原价 × 1.0）
3.  额外优惠（使用 if 判断，叠加在基础折扣上）：
    - 购买金额 ≥ 1000 元，再打95折（折后价 × 0.95）
    - 购买金额 ≥ 2000 元，再打9折（折后价 × 0.9）
4.  输出最终应付金额，格式示例：「你购买的家电，原价1500元，最终应付金额：1215.00元」。

#### 解题思路
- 先用 switch 匹配商品类型，计算基础折扣价（精准值匹配，适合 switch）。
- 再用 if-else if 判断购买金额区间，叠加额外优惠（区间判断，适合 if）。
- 优先使用 `decimal` 类型存储金额，避免浮点精度丢失。

#### 参考代码
```csharp
using System;

namespace MixExercise1
{
    class Program
    {
        static void Main(string[] args)
        {
            // 步骤1：输入数据
            Console.Write("请输入商品类型（家电、服装、食品）：");
            string goodsType = Console.ReadLine().ToLower();
            Console.Write("请输入购买金额（元）：");
            decimal originalPrice = decimal.Parse(Console.ReadLine());

            // 步骤2：switch 匹配商品类型，计算基础折扣价
            decimal baseDiscountPrice = 0;
            switch (goodsType)
            {
                case "家电":
                    baseDiscountPrice = originalPrice * 0.9m;
                    break;
                case "服装":
                    baseDiscountPrice = originalPrice * 0.85m;
                    break;
                case "食品":
                    baseDiscountPrice = originalPrice * 1.0m;
                    break;
                default:
                    Console.WriteLine("输入的商品类型无效！");
                    return;
            }

            // 步骤3：if 判断金额区间，叠加额外优惠
            decimal finalPrice = 0;
            if (originalPrice >= 2000)
            {
                finalPrice = baseDiscountPrice * 0.9m;
            }
            else if (originalPrice >= 1000)
            {
                finalPrice = baseDiscountPrice * 0.95m;
            }
            else
            {
                finalPrice = baseDiscountPrice;
            }

            // 步骤4：输出结果
            Console.WriteLine($"你购买的{goodsType}，原价{originalPrice:F2}元，最终应付金额：{finalPrice:F2}元");
            Console.ReadKey();
        }
    }
}
```

### 练习题2：学生综合素质评定（混合进阶）
#### 题目要求
1.  输入学生的「语文成绩」和「数学成绩」（均为0-100），先校验成绩有效性。
2.  计算两门成绩的平均分，使用 if 判断平均分等级（基础等级）：
    - 平均分 ≥ 90：优秀
    - 80 ≤ 平均分 ＜ 90：良好
    - 70 ≤ 平均分 ＜ 80：中等
    - 60 ≤ 平均分 ＜ 70：及格
    - 平均分 ＜ 60：不及格
3.  额外加分项（使用 switch 匹配，对应等级加分，提升最终评级）：
    - 若学生获得「三好学生」：优秀+（直接输出），良好→优秀，中等→良好，及格/不及格→及格
    - 若学生获得「优秀班干部」：优秀→优秀，良好+（直接输出），中等→良好，及格/不及格→及格
    - 无荣誉：保持原等级不变
4.  输出最终评定结果，示例：「你的平均分是92，基础等级优秀，获得三好学生，最终评定：优秀+」。

#### 解题思路
- 先用 if 做区间判断（平均分等级），适合复杂的区间逻辑。
- 再用 switch 做荣誉值的精准匹配，适合多值对应的加分规则。
- 定义两个字符串变量存储「基础等级」和「最终等级」，简化逻辑处理。

#### 参考代码
```csharp
using System;

namespace MixExercise2
{
    class Program
    {
        static void Main(string[] args)
        {
            // 步骤1：输入并校验成绩
            Console.Write("请输入语文成绩（0-100）：");
            int chinese = int.Parse(Console.ReadLine());
            Console.Write("请输入数学成绩（0-100）：");
            int math = int.Parse(Console.ReadLine());

            if ((chinese < 0 || chinese > 100) || (math < 0 || math > 100))
            {
                Console.WriteLine("成绩输入无效，请输入0-100之间的整数！");
                return;
            }

            // 步骤2：if 判断平均分，得到基础等级
            int average = (chinese + math) / 2;
            string baseLevel = "";
            if (average >= 90)
            {
                baseLevel = "优秀";
            }
            else if (average >= 80)
            {
                baseLevel = "良好";
            }
            else if (average >= 70)
            {
                baseLevel = "中等";
            }
            else if (average >= 60)
            {
                baseLevel = "及格";
            }
            else
            {
                baseLevel = "不及格";
            }

            // 步骤3：输入荣誉称号，switch 匹配加分
            Console.Write("请输入学生荣誉称号（三好学生/优秀班干部/无）：");
            string honor = Console.ReadLine().ToLower();
            string finalLevel = baseLevel;

            switch (honor)
            {
                case "三好学生":
                    switch (baseLevel)
                    {
                        case "优秀":
                            finalLevel = "优秀+";
                            break;
                        case "良好":
                            finalLevel = "优秀";
                            break;
                        case "中等":
                            finalLevel = "良好";
                            break;
                        default: // 及格/不及格
                            finalLevel = "及格";
                            break;
                    }
                    break;
                case "优秀班干部":
                    switch (baseLevel)
                    {
                        case "良好":
                            finalLevel = "良好+";
                            break;
                        case "中等":
                            finalLevel = "良好";
                            break;
                        default: // 优秀/及格/不及格
                            finalLevel = baseLevel;
                            break;
                    }
                    break;
                case "无":
                    finalLevel = baseLevel;
                    break;
                default:
                    Console.WriteLine("荣誉称号输入无效！");
                    return;
            }

            // 步骤4：输出结果
            Console.WriteLine($"你的平均分是{average}，基础等级{baseLevel}，获得{honor}，最终评定：{finalLevel}");
            Console.ReadKey();
        }
    }
}
```

### 练习题3：简易计算器（混合综合）
#### 题目要求
1.  实现一个简易控制台计算器，支持「加、减、乘、除」四种运算。
2.  输入步骤：先输入第一个数字 → 输入运算符（+、-、*、/）→ 输入第二个数字。
3.  分支逻辑处理：
    - 用 switch 匹配运算符，执行对应运算（精准值匹配，适合 switch）。
    - 用 if 判断特殊情况（除法中第二个数字不能为0，输出「除数不能为0！」）。
    - 校验运算符有效性，无效运算符输出「不支持该运算，请输入+、-、*、/中的一种」。
4.  输出运算结果，格式示例：「10 + 5 = 15」。

#### 解题思路
- 这是经典的混合场景：运算符的「精准匹配」用 switch，除法的「特殊条件判断」用 if。
- 先校验输入的数字有效性（可选），再处理运算符，最后执行运算，保证逻辑严谨。
- 除法使用 `double` 类型，避免整数除法的精度丢失。

#### 参考代码
```csharp
using System;

namespace MixExercise3
{
    class Program
    {
        static void Main(string[] args)
        {
            // 步骤1：输入数据
            Console.Write("请输入第一个数字：");
            double num1 = double.Parse(Console.ReadLine());

            Console.Write("请输入运算符（+、-、*、/）：");
            string op = Console.ReadLine();

            Console.Write("请输入第二个数字：");
            double num2 = double.Parse(Console.ReadLine());

            // 步骤2：混合分支处理运算
            double result = 0;
            bool isInvalid = false;

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
                    // if 判断除数不能为0
                    if (num2 == 0)
                    {
                        Console.WriteLine("除数不能为0！");
                        isInvalid = true;
                        break;
                    }
                    result = num1 / num2;
                    break;
                default:
                    Console.WriteLine("不支持该运算，请输入+、-、*、/中的一种");
                    isInvalid = true;
                    break;
            }

            // 步骤3：输出结果（仅当运算有效时）
            if (!isInvalid)
            {
                Console.WriteLine($"{num1} {op} {num2} = {result}");
            }

            Console.ReadKey();
        }
    }
}
```

## 四、教学补充建议
1.  **做题顺序**：让学生先完成 if 题，再完成 switch 题，最后做混合题，循序渐进。
2.  **重点强调**：混合题的核心是「合理选型」，而非强行混合，让学生理解「什么场景用什么分支」。
3.  **拓展提示**：可让学生优化题目（如添加 `TryParse()` 安全转换、增加更多分支场景），提升动手能力。
4.  **易错点提醒**：if 的条件括号、switch 的 break、除法的0值判断，是初学者高频出错点，需重点讲解。