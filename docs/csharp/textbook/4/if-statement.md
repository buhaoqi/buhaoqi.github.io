---
noteId: "1ed7ac80e3fc11f09203f302f54e558c"
tags: []

---

## if的简写

当if语句的代码块内只有一条语句时，可省略花括号

```c#
if (i == 5) break;
```


## 练习题


### 温度判断(基础)
```
输入一个温度值，如果高于30度输出"炎热"，低于10度输出"寒冷"，否则输出"舒适"
```

### 奇偶判断(交互)

```
输入一个整数，判断并输出是奇数还是偶数
```

### 成绩等级(else if)
```
输入成绩（0-100），输出等级：90+为A，80-89为B，70-79为C，60-69为D，低于60为F
```

### 登录验证(交互)
```
预设用户名"admin"，密码"123456"。输入用户名密码，验证正确输出"登录成功"，否则输出"登录失败"
```

### 正负零判断(交互)
```
输入一个数字，输出它是正数、负数还是零
```

### 查询星期几(交互)
```
查询星期几的英语单词,用户输入数字1，显示英语单词monday
```
参考代码:

```c#
Console.WriteLine("欢迎查询星期几的英语单词");
Console.WriteLine("==========================");
Console.Write("请输入1-7之间的一个数字：");
string num = Console.ReadLine();

if( num == "1") Console.WriteLine("星期一：Monday");
else if (num == "2") Console.WriteLine("星期二：Tuesday");
else if (num == "3") Console.WriteLine("星期三：Wednesday");
else if (num == "4") Console.WriteLine("星期四：Thursday");
else if (num == "5") Console.WriteLine("星期五：Fridayday");
else if (num == "6") Console.WriteLine("星期六:Saturday");
else if (num == "7") Console.WriteLine("星期日:Sunday");
else  Console.WriteLine("非法输入");
Console.WriteLine("========结束=========");
```

### 闰年判断(经典) 
```
输入年份，判断是否为闰年（能被4整除但不能被100整除，或能被400整除）
```

### 三角形判断(交互)

```
输入三个边长，判断是否能构成三角形（任意两边之和大于第三边）
```

### 最大数查找(经典)
```
输入三个不同的整数，找出并输出最大值
```

### 字符类型识别(交互)
```
输入一个字符，判断它是大写字母、小写字母、数字还是特殊字符
```

###  月份天数(日期时间)
```
输入月份（1-12），输出该月天数（2月按28天计算）
```

### # 逻辑运算符应用

###  优惠折扣  
    购物金额≥1000打9折，≥500打95折，否则不打折。输入金额计算实付金额

###  BMI健康评估  
    输入身高(m)和体重(kg)，计算BMI值：  
    BMI < 18.5 → "过轻"  
    18.5 ≤ BMI < 24 → "正常"  
    24 ≤ BMI < 28 → "过重"  
    BMI ≥ 28 → "肥胖"

###  二次方程根判断  
    输入二次方程系数a,b,c，根据判别式输出：  
    两个实根/一个实根/无实根（不考虑复数解）

###  三角形类型  
    输入三角形三个边长，判断类型：等边、等腰、直角、普通或不能构成三角形

###  时间有效性  
    输入时、分、秒，判断是否是有效时间（时0-23，分0-59，秒0-59）

---

### # 综合应用

###  成绩评语  
    输入成绩和出勤率（0-100%），规则：  

    - 成绩≥60且出勤≥80% → "通过"  
    - 成绩≥60但出勤<80% → "补考"  
    - 成绩<60 → "重修"

###  快递运费  
    输入重量(kg)和距离(km)：  

    - ≤1kg且≤100km：10元  

    - ≤1kg但>100km：15元  

    - >1kg：首重10元 + 续重5元/kg（不足1kg按1kg算）

###  日期合法性  
    输入年、月、日，判断日期是否有效（考虑闰年和平年二月）

###  个人所得税  
    输入月收入，按阶梯计算个税：  

    - ≤5000：免税  

    - 5001-8000：3%  

    - 8001-17000：10%  

    - >17000：20%

###  游戏角色状态  
    角色有生命值(HP)、魔法值(MP)、状态(正常/中毒/冰冻)：  

    - HP≤0 → "死亡"  
    - 中毒且HP<20 → "危险"  
    - 冰冻且MP<10 → "无法施法"  
    - 其他情况 → "可战斗"

---

### 部分题目参考代码

#### 1. 温度判断

```csharp
Console.Write("输入温度：");
double temp = double.Parse(Console.ReadLine());

if (temp > 30) Console.WriteLine("炎热");
else if (temp < 10) Console.WriteLine("寒冷");
else Console.WriteLine("舒适");
```

#### 6. 闰年判断

```csharp
Console.Write("输入年份：");
int year = int.Parse(Console.ReadLine());

bool isLeap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
Console.WriteLine(isLeap ? "闰年" : "平年");
```

#### 11. 优惠折扣

```csharp
Console.Write("输入金额：");
double amount = double.Parse(Console.ReadLine());
double final = amount;

if (amount >= 1000) final *= 0.9;
else if (amount >= 500) final *= 0.95;

Console.WriteLine($"实付金额：{final:C}");
```

#### 16. 成绩评语

```csharp
Console.Write("输入成绩：");
int score = int.Parse(Console.ReadLine());
Console.Write("输入出勤率(%)：");
int attendance = int.Parse(Console.ReadLine());

if (score >= 60) 
{
    Console.WriteLine(attendance >= 80 ? "通过" : "补考");
}
else 
{
    Console.WriteLine("重修");
}
```

#### 20. 游戏角色状态

```csharp
Console.Write("输入HP：");
int hp = int.Parse(Console.ReadLine());
Console.Write("输入MP：");
int mp = int.Parse(Console.ReadLine());
Console.Write("输入状态(0-正常 1-中毒 2-冰冻)：");
int status = int.Parse(Console.ReadLine());

if (hp <= 0) 
{
    Console.WriteLine("死亡");
}
else if (status == 1 && hp < 20) 
{
    Console.WriteLine("危险");
}
else if (status == 2 && mp < 10) 
{
    Console.WriteLine("无法施法");
}
else 
{
    Console.WriteLine("可战斗");
}
```

