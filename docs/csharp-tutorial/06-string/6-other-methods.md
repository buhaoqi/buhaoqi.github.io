---
noteId: "7e9ee21079a211f096197f4ef3b2c3fb"
tags: []

---

## 三、字符串常用方法

```csharp
string text = " Hello, World! ";
```

| 方法                            | 功能                |
| ----------------------------- | ----------------- |
| `text.Length`                 | 获取长度（字符个数）        |
| `text.ToUpper()`              | 转大写               |
| `text.ToLower()`              | 转小写               |
| `text.Trim()`                 | 去除首尾空格            |
| `text.Contains("World")`      | 是否包含某子串           |
| `text.Replace("Hello", "Hi")` | 替换子串              |
| `text.Substring(0, 5)`        | 截取子串，从索引 0 开始，长度5 |

---

## **4. 总结**
| **方法**              | **用途**                          | **示例**                          |
|-----------------------|----------------------------------|----------------------------------|
| `int.Parse()`         | 字符串 → `int`（可能抛异常）     | `int.Parse("123")`               |
| `int.TryParse()`      | 安全转换字符串 → `int`           | `int.TryParse("abc", out num)`    |
| `int.MaxValue`        | 获取 `int` 最大值                | `int.MaxValue` → `2147483647`     |
| `int.MinValue`        | 获取 `int` 最小值                | `int.MinValue` → `-2147483648`    |
| `int.Equals()`        | 比较两个 `int` 是否相等          | `int.Equals(5, 5)` → `true`       |
| `ToString()`          | `int` → `string`                 | `42.ToString()` → `"42"`          |
| `CompareTo()`         | 比较两个 `int` 大小              | `5.CompareTo(10)` → `-1`          |
| `GetHashCode()`       | 获取哈希码                       | `100.GetHashCode()` → `100`       |

这些方法涵盖了 `int` 的常见操作，适用于数值计算、数据转换、比较等场景。 😊

## ✅ 总结

| 功能       | 方法                                     |
| -------- | -------------------------------------- |
| 拼接字符串    | `+`、`$""`、`string.Format()`            |
| 改大小写     | `ToUpper()`、`ToLower()`                |
| 删除空格     | `Trim()`                               |
| 查找/替换/截取 | `Contains()`、`Replace()`、`Substring()` |
| 转换数据类型   | `int.Parse()`、`ToString()`             |