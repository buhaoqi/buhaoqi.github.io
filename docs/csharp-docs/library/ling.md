---
noteId: "df26d00050b911f0b69c3be6f8c40618"
tags: []

---

## .NET LINQ

在 C# 中，LINQ（Language Integrated Query，语言集成查询） 是 .NET 提供的一种强大功能，它允许你使用类似 SQL 的语法来查询数组、集合、数据库、XML 等数据源，让数据查询变得更加直观、简洁、类型安全。

LINQ 能做什么

- 查询数组、List、Dictionary 等集合；
- 查询数据库（配合 Entity Framework）；
- 查询 XML（使用 System.Xml.Linq）；
- 对集合进行过滤、排序、分组、统计等操作；
- 简化循环、条件判断、数据提取。

命名空间

先引入 `System.Linq`，才可以使用扩展方法，例如：

```csharp
using System.Linq;

int max = numbers.Max();
int min = numbers.Min();
int sum = numbers.Sum();
```