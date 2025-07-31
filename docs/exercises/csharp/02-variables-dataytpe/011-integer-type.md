---
noteId: "b7d771b0647011f0b3be856b16b937e6"
tags: []

---

1. **C# 中哪些整数类型是有符号的？它们的取值范围是什么？**  
2. **C# 中哪些整数类型是无符号的？它们的取值范围是什么？**  
3. **`int` 类型占用多少字节？它的最大值和最小值是什么？**  
4. **`byte` 和 `sbyte` 有什么区别？各自的应用场景是什么？**  
5. **`long` 和 `ulong` 的取值范围是多少？`long` 的字面量后缀是什么？**  


## 练习:选择整型（15道）

**1. 以下哪个类型可以存储 `-128` 到 `127` 的整数？**  
A) `byte`  
B) `sbyte`  
C) `short`  
D) `ushort`  

---

**2. 如果要存储 `0` 到 `255` 的无符号整数，应该使用哪个类型？**  
A) `byte`  
B) `sbyte`  
C) `short`  
D) `int`  

---

**3. 以下哪个类型可以存储 `-32,768` 到 `32,767` 的整数？**  
A) `byte`  
B) `short`  
C) `ushort`  
D) `int`  

---

**4. 如果要存储 `65,535`，应该使用哪个类型？**  
A) `short`  
B) `ushort`  
C) `int`  
D) `uint`   

---

**5. `int` 类型的最大值是多少？**  
A) `2,147,483,647`  
B) `4,294,967,295`  
C) `32,767`  
D) `65,535`   

---

**6. 以下哪个类型可以存储 `4,294,967,295`？**  
A) `int`  
B) `uint`  
C) `long`  
D) `ulong`   

---

**7. 如果要存储 `9,223,372,036,854,775,807`，应该使用哪个类型？**  
A) `int`  
B) `uint`  
C) `long`  
D) `ulong`   

---

**8. `ulong` 的最大值是多少？**  
A) `9,223,372,036,854,775,807`  
B) `18,446,744,073,709,551,615`  
C) `4,294,967,295`  
D) `2,147,483,647`  

---

**9. 以下哪个是合法的 `int` 变量定义，并使用了数字分隔符 `_`？**  
A) `int num = 1_000_000;`  
B) `int num = 1.000.000;`  
C) `int num = 1,000,000;`  
D) `int num = 1 000 000;`   

---

**10. 以下哪个代码会导致编译错误？**  
A) `byte num = 255;`  
B) `sbyte num = -128;`  
C) `ushort num = 65_535;`  
D) `short num = 32_768;`   

---

**11. 以下哪个类型可以存储 `-1`？**  
A) `byte`  
B) `ushort`  
C) `uint`  
D) `long`  

---

**12. 如果要存储 `10_000_000_000`（100亿），应该使用哪个类型？**  
A) `int`  
B) `uint`  
C) `long`  
D) `ulong`  

---

**13. 以下哪个是合法的 `long` 变量定义？**  
A) `long num = 9_223_372_036_854_775_807;`  
B) `long num = 9,223,372,036,854,775,807;`  
C) `long num = 9 223 372 036 854 775 807;`  
D) `long num = 9223372036854775807L;`  

---

**14. 以下哪个代码不会编译？**  
A) `uint num = 4_294_967_295;`  
B) `int num = 2_147_483_648;`  
C) `ulong num = 18_446_744_073_709_551_615;`  
D) `long num = -9_223_372_036_854_775_808;`  

---

**15. 如果要存储 `0` 到 `18,446,744,073,709,551,615` 的无符号整数，应该使用哪个类型？**  
A) `long`  
B) `ulong`  
C) `uint`  
D) `int`   

---
## 答案:选择整型

✅ 1**答案：B) `sbyte`**  
✅ 2**答案：A) `byte`**  
✅ 3**答案：B) `short`**  
✅ 4**答案：B) `ushort`**  
✅ 5**答案：A) `2,147,483,647`**  
✅ 6**答案：B) `uint`**  
✅ 7**答案：C) `long`**  
✅ 8**答案：B) `18,446,744,073,709,551,615`**  
✅ 9**答案：A) `int num = 1_000_000;`**  
✅ 10**答案：D) `short num = 32_768;`（`short` 的最大值是 `32,767`）**  
✅ 11**答案：D) `long`**  
✅ 12**答案：C) `long`**  
✅ 13**答案：D) `long num = 9223372036854775807L;`（`L` 后缀表示 `long`）**  
✅ 14**答案：B) `int num = 2_147_483_648;`（超出 `int` 最大值）**  
✅ 15**答案：B) `ulong`** 

## 练习：创建整型（10道）

1.声明一个变量存储人的年龄（0-120）

2.使用数字分隔符声明变量 `population` 表示 7,800,000,000.

3.存储温度传感器读数（-50到150℃）

4.存储文件大小（最大16TB）

5.存储RGB颜色值（0-255）

6.存储商品库存数量（0-65,000）

7.存储银行账户余额（分单位，最大100亿元）

8.存储海拔高度（-10,000到+20,000米）

9.存储网站访问计数器（可能超过42亿）

10.存储方向角度（0-359度）

---
## 答案:创建整型
1.声明一个变量存储人的年龄（0-120）。
```csharp
byte age = 25;
Console.WriteLine("最适合数据类型：byte 或 int");
```

- 最适合数据类型：byte 或 int
- 原因：从内存占用和取值范围角度讲，byte类型最适合:1字节内存，无符号，范围0-255完全覆盖

2.使用数字分隔符声明变量 `population` 表示 7,800,000,000；
```csharp
ulong population = 7_800_000_000UL;
Console.WriteLine("最适合数据类型：long或者ulong");
```

- 最合适的数据类型：ulong 或 long
- 原因：需要表示约78亿（7,800,000,000），int最大21亿不够，uint最大42亿不够。考虑到人口数量是非负的，使用`ulong`更能表达无符号的特性。不过在实际开发中，`long`也经常被使用，因为它可以处理所有整数范围（正负），并且与很多API兼容。

3.存储温度传感器读数（-50到150℃）

```csharp
sbyte temperature = -5;
Console.WriteLine("最合适的数据类型：sbyte");
```

- 最合适的数据类型：sbyte
- 原因：1字节，有符号，范围-128到127完全覆盖

4.存储文件大小（最大16TB）
```csharp
ulong fileSize = 16UL * 1024 * 1024 * 1024 * 1024;
Console.WriteLine("最合适的数据类型：ulong");
```
16TB = 16 × 1024 × 1024 × 1024 × 1024 = 17,592,186,044,416 字节

- int（Int32）的最大值是 2,147,483,647（约 2GB），不够用。
- uint（UInt32）的最大值是 4,294,967,295（约 4GB），仍然不够。
- long（Int64）的最大值是 9,223,372,036,854,775,807（约 8EB），完全足够。
- ulong（UInt64）的最大值是 18,446,744,073,709,551,615（约 16EB），也完全足够。

推荐类型：ulong（无符号 64 位整数），因为文件大小不会为负数。

适用场景：存储文件、磁盘容量等大数值数据（最大支持 16EB）。

替代方案：long（有符号 64 位整数），如果后续计算可能涉及负数。

5.存储RGB颜色值（0-255）
```csharp
byte red = 255, green = 0, blue = 128;
Console.WriteLine("最合适的数据类型：byte");
```

- 最合适的数据类型：byte
- 原因：1字节无符号，完美匹配0-255范围


6.存储商品库存数量（0-65,000）
```csharp
ushort stockQuantity = 32_000;
Console.WriteLine("最合适的数据类型：ushort");
```

- 最合适的数据类型：ushort
- 原因：2字节无符号，范围0-65,535，比int节省内存

7.存储银行账户余额（分单位，最大100亿元）
```csharp
long balanceInCents = 1_000_000_000_000L;
Console.WriteLine("最合适的数据类型：long");
```

- 最合适的数据类型：long
- 原因：100亿=10,000,000,000元=1,000,000,000,000分，需要8字节


8.存储海拔高度（-10,000到+20,000米）
```csharp
short altitude = 8848; // 珠穆朗玛峰高度
Console.WriteLine("最合适的数据类型：short");
```

- 最合适的数据类型：short
- 原因：2字节有符号，范围-32,768到32,767完全覆盖


9.存储网站访问计数器（可能超过42亿）
```csharp
ulong visitCount = 5_000_000_000UL;
Console.WriteLine("最合适的数据类型：ulong");
```

- 最合适的数据类型：ulong
- 原因：需要处理极大无符号整数，最大18万亿亿


10.存储方向角度（0-359度）
```csharp
byte directionAngle = 90; // 正东方向
Console.WriteLine("最合适的数据类型：byte");
```

- 最合适的数据类型：byte
- 原因：1字节无符号，范围0-255足够表示（360度可用0-359）


## 练习:除法截断专项(15道)
**题目 1：基础整数除法**
**代码**：
```csharp
int result = 7 / 2;
Console.WriteLine(result);
```
**问题**：输出结果是多少？为什么会这样？  

---

**题目 2：变量整数除法**
**代码**：
```csharp
int a = 10, b = 3;
int result = a / b;
Console.WriteLine(result);
```
**问题**：输出结果是多少？如何修正以得到 `3.333...`？  

---

**题目 3：整数除法与浮点数转换**
**代码**：
```csharp
double result = 10 / 3;
Console.WriteLine(result);
```
**问题**：输出是 `3.0` 还是 `3.333...`？为什么？  

---

**题目 4：`decimal` 的精确除法**
**代码**：
```csharp
decimal result = 10 / 3;
Console.WriteLine(result);
```
**问题**：输出是 `3` 还是 `3.333...`？如何修正？  

---

**题目 5：混合类型运算**
**代码**：
```csharp
int a = 5, b = 2;
double result = a / b;
Console.WriteLine(result);
```
**问题**：输出是 `2.0` 还是 `2.5`？如何修正？  

---

**题目 6：`Math` 方法修正**
**代码**：
```csharp
int a = 7, b = 2;
int result = a / b;
Console.WriteLine(result);
```
**问题**：如何用 `Math.Round` 或 `Math.Ceiling` 修正？  

---

**题目 7：`checked` 防止溢出**
**代码**：
```csharp
int a = int.MaxValue, b = 2;
int result = a / b;
Console.WriteLine(result);
```
**问题**：如果 `a + b` 可能溢出，如何安全计算？  

---

**题目 8：`float` 和 `double` 的区别**
**代码**：
```csharp
float result1 = 10f / 3;
double result2 = 10.0 / 3;
Console.WriteLine(result1 == result2);
```
**问题**：输出是 `True` 还是 `False`？为什么？  

---

**题目 9：`Parse` 与除法结合**
**代码**：
```csharp
string input = "5";
int b = 2;
double result = int.Parse(input) / b;
Console.WriteLine(result);
```
**问题**：输出是 `2.0` 还是 `2.5`？如何修正？  

---

**题目 10：`TryParse` 安全修正**
**代码**：
```csharp
string input = "abc";
int b = 2;
int a = int.Parse(input);  // 可能抛出异常
double result = a / b;
```
**问题**：如何安全地处理非数字输入？  
11.result 的值是多少？（注意数据类型）

```c#
double result = (20 - 3 * 4) / 2.0;
```
12.result 的值是多少？为什么？

```csharp
int a = 7;
int b = 2;
int result = a / b;
```

13.d 的值是多少？如何修正得到小数3.333？

```csharp
double d = 10 / 3;
```
14.m, n, p 的最终值分别是多少？

```csharp
int m = 8;
int n = --m * 3;
int p = n++ / 2;
```
15.result 的值是多少？

```c#
int result = 6 * 4 - 3 * 5 / 2;
```

---
## 答案:除法截断专项
**题目 1：基础整数除法**
**代码**：
```csharp
int result = 7 / 2;
Console.WriteLine(result);
```
**问题**：输出结果是多少？为什么会这样？  
**修正方法**：如何修改代码以得到 `3.5`？

✅ **答案**：
- **输出**：`3`（整数除法，小数部分被丢弃）
- **修正**：
  ```csharp
  double result = 7.0 / 2;  // 或 (double)7 / 2
  ```

---

**题目 2：变量整数除法**
**代码**：
```csharp
int a = 10, b = 3;
int result = a / b;
Console.WriteLine(result);
```
**问题**：输出结果是多少？如何修正以得到 `3.333...`？  
✅ **修正**：
```csharp
double result = (double)a / b;
```

---

**题目 3：整数除法与浮点数转换**
**代码**：
```csharp
double result = 10 / 3;
Console.WriteLine(result);
```
**问题**：输出是 `3.0` 还是 `3.333...`？为什么？  
✅ **答案**：
- **输出**：`3.0`（因为 `10 / 3` 先进行整数除法，再隐式转换为 `double`）  
- **修正**：
  ```csharp
  double result = 10.0 / 3;
  ```

---

**题目 4：`decimal` 的精确除法**
**代码**：
```csharp
decimal result = 10 / 3;
Console.WriteLine(result);
```
**问题**：输出是 `3` 还是 `3.333...`？如何修正？  
✅ **修正**：
```csharp
decimal result = 10m / 3m;  // 必须加 'm' 后缀
```

---

**题目 5：混合类型运算**
**代码**：
```csharp
int a = 5, b = 2;
double result = a / b;
Console.WriteLine(result);
```
**问题**：输出是 `2.0` 还是 `2.5`？如何修正？  
✅ **修正**：
```csharp
double result = (double)a / b;
```

---

**题目 6：`Math` 方法修正**
**代码**：
```csharp
int a = 7, b = 2;
int result = a / b;
Console.WriteLine(result);
```
**问题**：如何用 `Math.Round` 或 `Math.Ceiling` 修正？  
✅ **修正**：
```csharp
double result = Math.Round((double)a / b, 1);  // 四舍五入保留 1 位小数
```

---

**题目 7：`checked` 防止溢出**
**代码**：
```csharp
int a = int.MaxValue, b = 2;
int result = a / b;
Console.WriteLine(result);
```
**问题**：如果 `a + b` 可能溢出，如何安全计算？  
✅ **修正**：
```csharp
checked {
    int result = a / b;  // 如果溢出会抛出异常
}
```

---

**题目 8：`float` 和 `double` 的区别**
**代码**：
```csharp
float result1 = 10f / 3;
double result2 = 10.0 / 3;
Console.WriteLine(result1 == result2);
```
**问题**：输出是 `True` 还是 `False`？为什么？  
✅ **答案**：
- **输出**：`False`（`float` 精度较低，`double` 更精确）

---

**题目 9：`Parse` 与除法结合**
**代码**：
```csharp
string input = "5";
int b = 2;
double result = int.Parse(input) / b;
Console.WriteLine(result);
```
**问题**：输出是 `2.0` 还是 `2.5`？如何修正？  
✅ **修正**：
```csharp
double result = double.Parse(input) / b;
```

---

**题目 10：`TryParse` 安全修正**
**代码**：
```csharp
string input = "abc";
int b = 2;
int a = int.Parse(input);  // 可能抛出异常
double result = a / b;
```
**问题**：如何安全地处理非数字输入？  
✅ **修正**：
```csharp
if (int.TryParse(input, out int a)) {
    double result = (double)a / b;
} else {
    Console.WriteLine("输入无效！");
}
```
11.result 的值是多少？（注意数据类型）

```c#
double result = (20 - 3 * 4) / 2.0;
```
12.result 的值是多少？为什么？

```csharp
int a = 7;
int b = 2;
int result = a / b;
```

13.d 的值是多少？如何修正得到小数3.333？

```csharp
double d = 10 / 3;
```
14.m, n, p 的最终值分别是多少？

```csharp
int m = 8;
int n = --m * 3;
int p = n++ / 2;
```
15.result 的值是多少？

```c#
int result = 6 * 4 - 3 * 5 / 2;
```

11.

```csharp
//3*4=12 → 20-12=8 → 8/2.0=4.0（用2.0触发浮点除法）
result=4.0;
```
12.
```csharp
//整数除法截断小数 → 7/2=3.5 → 截断为3 
result=3;
```  
   
13.
```csharp
//整数除法 `10/3=3` → 转double得3.0 
d=3.0;
//修正：double d = 10.0 / 3;（至少一个操作数为浮点）
```
14.
```csharp
m=7, n=22, p=10;
/*
--m：m先减为7 → `7*3=21`（n=21）  
n++：先用n=21 → `21/2=10`（整数除法，p=10） → n自增为22  

修正：实际n在p计算后自增，所以最终n=22？但题目中是n++ / 2，p计算后n会自增，所以最终n=22？但解析写n=23？有矛盾，应修正为：  
修正解析：  
第一行后：m=7  
第二行：`--m` 使m=7，计算得 n=7*3=21  
第三行：`n++` 使用n的当前值21，计算 p=21/2=10（整数除法），然后n自增为22  
最终值：m=7, n=22, p=10
*/
```

15.
```csharp
//`6*4=24` → `3*5=15` → `15/2=7`（整数除法） → `24-7=19`  
//同优先级从左到右，但乘除高于加减
result=19;
```
