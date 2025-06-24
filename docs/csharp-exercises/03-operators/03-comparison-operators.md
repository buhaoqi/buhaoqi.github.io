---
noteId: "b0fe6c10460511f08a53dd9fb031ea51"
tags: []

---

# C# 关系运算符详解

关系运算符（也称为比较运算符）用于比较两个值之间的关系，并返回一个布尔值（`true` 或 `false`）。这些运算符在条件判断、循环控制等场景中非常有用。

## 一、基本关系运算符

C# 提供了以下关系运算符：

| 运算符 | 描述       | 示例         | 解释                  |
|--------|------------|--------------|-----------------------|
| `==`   | 等于       | `a == b`     | 判断a是否等于b        |
| `!=`   | 不等于     | `a != b`     | 判断a是否不等于b      |
| `>`    | 大于       | `a > b`      | 判断a是否大于b        |
| `<`    | 小于       | `a < b`      | 判断a是否小于b        |
| `>=`   | 大于或等于 | `a >= b`     | 判断a是否大于或等于b  |
| `<=`   | 小于或等于 | `a <= b`     | 判断a是否小于或等于b  |

### 示例代码

```csharp
int a = 10, b = 20;

Console.WriteLine(a == b);  // false
Console.WriteLine(a != b);  // true
Console.WriteLine(a > b);   // false
Console.WriteLine(a < b);   // true
Console.WriteLine(a >= b);  // false
Console.WriteLine(a <= b);  // true
```

## 二、运算符特性

1. **返回值类型**：所有关系运算符都返回 `bool` 类型（`true` 或 `false`）
2. **操作数类型**：
   - 可用于数值类型（`int`, `double`, `decimal` 等）
   - 可用于字符（`char`），比较的是 Unicode 码点
   - 可用于枚举类型
   - `==` 和 `!=` 还可用于引用类型（比较引用是否相同）

3. **浮点数比较的特殊性**：
   ```csharp
   double x = 0.1 + 0.2;
   Console.WriteLine(x == 0.3);  // false（浮点精度问题）
   // 正确做法
   Console.WriteLine(Math.Abs(x - 0.3) < 0.0001);  // true
   ```

## 三、引用类型的比较

对于引用类型（类、接口、数组等），`==` 和 `!=` 默认比较的是引用是否指向同一个对象：

```csharp
string s1 = "hello";
string s2 = "hello";
string s3 = s1;

Console.WriteLine(s1 == s2);   // true（字符串特殊处理）
Console.WriteLine(s1 == s3);   // true
Console.WriteLine(object.ReferenceEquals(s1, s2));  // 可能为false（字符串驻留）

object obj1 = new object();
object obj2 = new object();
Console.WriteLine(obj1 == obj2);  // false
```

注意：`string` 类型重载了 `==` 运算符，比较的是内容而非引用。

## 四、自定义类型的比较

可以为自定义类型重载关系运算符：

```csharp
public class Point
{
    public int X { get; set; }
    public int Y { get; set; }
    
    // 重载 == 运算符
    public static bool operator ==(Point p1, Point p2) 
        => p1.X == p2.X && p1.Y == p2.Y;
    
    public static bool operator !=(Point p1, Point p2) 
        => !(p1 == p2);
    
    // 通常还需要重写 Equals 和 GetHashCode
    public override bool Equals(object obj) 
        => obj is Point point && this == point;
    
    public override int GetHashCode() 
        => HashCode.Combine(X, Y);
}

// 使用
Point p1 = new Point { X = 1, Y = 2 };
Point p2 = new Point { X = 1, Y = 2 };
Console.WriteLine(p1 == p2);  // true
```

## 五、运算符优先级

关系运算符的优先级低于算术运算符，高于赋值运算符：

```csharp
int x = 5, y = 10, z = 15;
bool result = x + y > z * 2;  // 等同于 (x + y) > (z * 2)
Console.WriteLine(result);     // false
```

## 六、链式比较

C# 不支持像 Python 那样的链式比较（如 `1 < x < 10`），需要拆分为多个条件：

```csharp
int x = 5;
// 错误写法：bool valid = 1 < x < 10;
bool valid = 1 < x && x < 10;  // 正确写法
```

## 七、最佳实践

1. **浮点数比较**：使用容差比较而非直接 `==`
   ```csharp
   double a = 0.1 + 0.2;
   double b = 0.3;
   bool equal = Math.Abs(a - b) < 1e-9;
   ```

2. **字符串比较**：使用 `Equals` 方法进行区分大小写/文化的比较
   ```csharp
   string s1 = "Hello";
   string s2 = "hello";
   bool ignoreCase = s1.Equals(s2, StringComparison.OrdinalIgnoreCase);
   ```

3. **自定义类型**：重载 `==` 时也要重载 `!=` 和 `Equals`

4. **可空类型比较**：注意 `null` 值的处理
   ```csharp
   int? x = null;
   Console.WriteLine(x == null);  // true
   ```

## 八、性能考虑

1. 对于频繁比较的场景（如排序），考虑实现 `IComparable<T>` 接口
2. 避免在循环中重复计算比较表达式
3. 简单比较通常比方法调用（如 `Equals`）更快

关系运算符是C#中最基础也最常用的运算符之一，合理使用它们可以编写出清晰、高效的逻辑判断代码。