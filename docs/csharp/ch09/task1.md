---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 Math 类   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 Math 类   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---

## 说明
`Math`类是`System`命名空间下的静态类，所有方法/属性均为**静态**，调用格式为`Math.方法名(参数)`，无需实例化。以下所有示例均需先引入`using System;`。

---

## 1. Math.Abs
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 计算数值的绝对值（非负数）                                           |
| **语法**   | `Math.Abs(数值)`                                                     |
| **参数**   | 支持 int、long、float、double、decimal 等数值类型                     |
| **注意事项** | 1. 对正数直接返回自身；<br />2. `decimal.MinValue`取绝对值会抛出溢出异常（无对应正数）。 |

**示例**
```csharp
// 输出：5、3.14、2
Console.WriteLine(Math.Abs(-5));     
Console.WriteLine(Math.Abs(-3.14));  
Console.WriteLine(Math.Abs(2));      
``` 

---

## 2. Math.Pow
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 计算指定数的指定次幂（x的y次方）                                     |
| **语法**   | `Math.Pow(double x, double y)`                                       |
| **参数**   | - x：底数（double类型）；<br />- y：指数（double类型）                 |
| **注意事项** | 1. 返回值为double类型，需按需转换（如转int）；<br />2. 负数底数+非整数指数会返回NaN（非数字）；<br />3. 0的负数次幂返回正无穷（Infinity）。 |

**示例** 
```csharp
// 输出：8（2³）、16（4²）、0.25（2⁻²）
Console.WriteLine(Math.Pow(2, 3));   
Console.WriteLine(Math.Pow(4, 2));   
Console.WriteLine(Math.Pow(2, -2));  
```
---

## 3. Math.Sqrt
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 计算指定数的平方根（非负）                                           |
| **语法**   | `Math.Sqrt(double x)`                                                |
| **参数**   | x：非负double类型数值（负数返回NaN）                                 |
| **注意事项** | 1. 仅支持非负数，负数入参返回`double.NaN`；<br />2. 返回值为double类型，如需整数平方根需额外处理（如`(int)Math.Sqrt(10)`得到3）。 |

**示例**

```csharp
// 输出：3、2.0、0
Console.WriteLine(Math.Sqrt(9));     
Console.WriteLine(Math.Sqrt(4));     
Console.WriteLine(Math.Sqrt(0));     
```

---

## 4. Math.Round
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 对数值进行四舍五入（默认四舍六入五成双，可指定小数位数/舍入规则）     |
| **语法**   | 1. `Math.Round(double x)`（取整）；<br />2. `Math.Round(double x, int digits)`（保留digits位小数）；<br />3. `Math.Round(double x, int digits, MidpointRounding mode)`（指定舍入规则） |
| **参数**   | - x：待舍入的double/decimal；<br />- digits：保留的小数位数（≥0）；<br />- mode：舍入规则（如`MidpointRounding.AwayFromZero`为传统四舍五入） |
| **注意事项** | 1. 默认规则（`MidpointRounding.ToEven`）：中间值（如3.5）舍入到最近偶数；<br />2. digits超出数值精度时，返回原数；<br />3. 支持decimal类型（精度更高，推荐财务计算）。 |

**示例** 

```csharp
// 默认规则（四舍六入五成双）：输出3、4、2.3
Console.WriteLine(Math.Round(3.4));             
Console.WriteLine(Math.Round(3.5));             
Console.WriteLine(Math.Round(2.345, 2));       

// 传统四舍五入：输出4、2.35
Console.WriteLine(Math.Round(3.5, MidpointRounding.AwayFromZero));
Console.WriteLine(Math.Round(2.345, 2, MidpointRounding.AwayFromZero));
```

---

## 5. Math.Ceiling（Ceil）
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 向上取整（返回大于等于指定数的最小整数）                             |
| **语法**   | `Math.Ceiling(double x)` / `Math.Ceiling(decimal x)`                 |
| **参数**   | x：double/decimal类型数值                                           |
| **注意事项** | 1. 返回值为double/decimal类型（如`Math.Ceiling(3.1)`返回4.0）；<br />2. 整数入参直接返回自身；<br />3. 区别于Round：仅向上取整，无舍入规则。 |

**示例** 

```csharp
// 输出：4、3、-2、2.4
Console.WriteLine(Math.Ceiling(3.1));          
Console.WriteLine(Math.Ceiling(3.0));          
Console.WriteLine(Math.Ceiling(-2.9));         
Console.WriteLine(Math.Ceiling(2.34));         
```
---

## 6. Math.Floor
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 向下取整（返回小于等于指定数的最大整数）                             |
| **语法**   | `Math.Floor(double x)` / `Math.Floor(decimal x)`                     |
| **参数**   | x：double/decimal类型数值                                           |
| **注意事项** | 1. 返回值为double/decimal类型；<br />2. 负数向下取整易踩坑：如`Math.Floor(-2.1)`返回-3（而非-2）；<br />3. 与Ceiling互为反向操作。 |

**示例** 
```csharp
// 输出：3、3、-3、2.0
Console.WriteLine(Math.Floor(3.9));           
Console.WriteLine(Math.Floor(3.0));           
Console.WriteLine(Math.Floor(-2.1));          
Console.WriteLine(Math.Floor(2.99));          
```

---

## 7. Math.Exp
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 计算自然常数e的指定次幂（eˣ）                                       |
| **语法**   | `Math.Exp(double x)`                                                |
| **参数**   | x：指数（double类型）                                               |
| **注意事项** | 1. 返回值为double类型；<br />2. 超大指数（如1000）返回正无穷（Infinity）；<br />3. 是Math.Log的逆运算（`Math.Log(Math.Exp(x)) = x`）。 |

**示例** 

```csharp
// 输出：2.71828...（e¹）、1（e⁰）、7.38905...（e²）
Console.WriteLine(Math.Exp(1));              
Console.WriteLine(Math.Exp(0));              
Console.WriteLine(Math.Exp(2));              
```

---

## 8. Math.Log
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 计算对数（默认自然对数ln(x)，可指定底数）                             |
| **语法**   | 1. `Math.Log(double x)`（自然对数ln(x)）；<br />2. `Math.Log(double x, double base)`（指定底数的对数） |
| **参数**   | - x：正数double类型（≤0返回NaN）；<br />- base：对数底数（正数且≠1）    |
| **注意事项** | 1. 仅支持正数入参，0/负数返回NaN；<br />2. 计算常用对数（以10为底）也可用`Math.Log10(x)`，精度更高；<br />3. 计算以2为底的对数也可用`Math.Log2(x)`（.NET Core 2.1+）。 |

**示例** 

```csharp
// 输出：0（ln1）、2.30258...（log₁₀100）、3（log₂8）
Console.WriteLine(Math.Log(1));             
Console.WriteLine(Math.Log(100, 10));       
Console.WriteLine(Math.Log(8, 2));          
```

---

## 9. Math.Max
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 取两个/多个数值中的最大值                                           |
| **语法**   | 1. `Math.Max(数值1, 数值2)`（两数比较）；<br />2. `Math.Max(new[] { 数值1, 数值2, ... })`（多数比较，.NET 6+） |
| **参数**   | 支持int、long、float、double、decimal等，两数需同类型                 |
| **注意事项** | 1. 两数类型必须一致（如不能直接比较int和double，需先转换）；<br />2. 多数比较需传入数组，且数组不能为空；<br />3. 支持nullables类型（如`int?`，null视为最小值）。 |

**示例** 

```csharp
// 输出：5、3.14、9
Console.WriteLine(Math.Max(3, 5));          
Console.WriteLine(Math.Max(2.5, 3.14));     
Console.WriteLine(Math.Max(new[] { 1, 9, 5, 3 })); 
```

---

## 10. Math.Min
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 取两个/多个数值中的最小值                                           |
| **语法**   | 1. `Math.Min(数值1, 数值2)`（两数比较）；<br />2. `Math.Min(new[] { 数值1, 数值2, ... })`（多数比较，.NET 6+） |
| **参数**   | 支持int、long、float、double、decimal等，两数需同类型                 |
| **注意事项** | 1. 与Math.Max规则一致，类型需匹配；<br />2. 多数比较数组不能为空；<br />3. 负数比较：`Math.Min(-5, -3)`返回-5。 |

**示例** 

```csharp
// 输出：3、2.5、1
Console.WriteLine(Math.Min(3, 5));          
Console.WriteLine(Math.Min(2.5, 3.14));     
Console.WriteLine(Math.Min(new[] { 1, 9, 5, 3 })); 
```

---

## 11. Math.Sign
| 项         | 说明                                                                 |
|------------|----------------------------------------------------------------------|
| **用途**   | 判断数值的符号（返回-1/0/1，分别表示负/零/正）                       |
| **语法**   | `Math.Sign(数值)`                                                     |
| **参数**   | 支持int、long、float、double、decimal等数值类型                       |
| **注意事项** | 1. 仅返回-1/0/1三个值，无其他结果；<br />2. 0的任意形式（0、0.0）均返回0；<br />3. 可用于快速判断数值正负。 |

**示例** 

```csharp
// 输出：1、-1、0、1
Console.WriteLine(Math.Sign(5));            
Console.WriteLine(Math.Sign(-3.14));        
Console.WriteLine(Math.Sign(0));            
Console.WriteLine(Math.Sign(0.0001));       
```

---

## 12. Math.Sin / Math.Cos
| 项         | Math.Sin                          | Math.Cos                          |
|------------|-----------------------------------|-----------------------------------|
| **用途**   | 计算指定角度的正弦值              | 计算指定角度的余弦值              |
| **语法**   | `Math.Sin(double angle)`          | `Math.Cos(double angle)`          |
| **参数**   | angle：以**弧度**为单位的角度（double） | angle：以**弧度**为单位的角度（double） |
| **注意事项** | 1. 入参是**弧度**，不是角度！角度转弧度公式：`弧度 = 角度 × π / 180`；<br />2. 返回值范围：[-1, 1]；<br />3. 特殊值：Sin(0)=0，Cos(0)=1，Sin(π/2)=1，Cos(π/2)=0。 |

**示例** 

```csharp
// 弧度转换：π/2=90°，π=180°
double pi = Math.PI;
// 输出：1（sin90°）、0（cos90°）、-1（cos180°）
Console.WriteLine(Math.Sin(pi / 2));     
Console.WriteLine(Math.Cos(pi / 2));     
Console.WriteLine(Math.Cos(pi));         
// 角度转弧度：30° → 30 * π / 180
Console.WriteLine(Math.Sin(30 * pi / 180)); // 输出0.5（sin30°）
```

---

## 总结（核心关键点）
1. **类型匹配**：Math类方法参数/返回值多为double，需注意int/decimal的转换（如decimal推荐用`Math.Round(decimal x)`）；
2. **易错点**：
   - Round默认非传统四舍五入，财务场景需指定`MidpointRounding.AwayFromZero`；
   - Sin/Cos入参是弧度，需先转换角度；
   - Floor处理负数时会“向下”取更小值（如-2.1→-3）；
3. **性能/精度**：
   - decimal类型方法（如`Math.Round(decimal)`）精度更高，适合金额计算；
   - 超大/超小数值可能返回Infinity/NaN，需提前校验。

如果需要，我可以补充这些方法的**综合实战示例**（如计算三角形边长、财务金额舍入、三角函数应用），让你更直观地掌握用法。