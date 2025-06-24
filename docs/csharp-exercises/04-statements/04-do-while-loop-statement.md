---
noteId: "c6f2b5904f2311f0adaee17699ef0195"
tags: []

---

### 2. 用户输入验证

```csharp
string input;
do
{
    Console.Write("请输入yes或no: ");
    input = Console.ReadLine().ToLower();
} while (input != "yes" && input != "no");
```


## do-while 循环

**语法结构：**
```csharp
do
{
    // 循环体
} while (条件表达式);
```

**特点：**
- 先执行一次循环体再判断条件
- 至少执行一次循环
- 结尾有分号

**示例：**
```csharp
int num;
do
{
    Console.Write("请输入一个正数：");
    num = int.Parse(Console.ReadLine());
} while (num <= 0);
```

## 六、循环选择指南

| 循环类型 | 适用场景 | 特点 |
|---------|---------|------|
| for | 已知循环次数 | 灵活控制初始化、条件和迭代 |
| while | 条件驱动循环 | 可能一次都不执行 |
| do-while | 至少执行一次 | 先执行后判断 |
| foreach | 集合遍历 | 简洁安全，只读访问 |


C# 提供了丰富的循环结构满足不同编程需求：
1. **for** - 精确控制循环次数
2. **while** - 条件驱动循环
3. **do-while** - 确保至少执行一次
4. **foreach** - 安全遍历集合

4. **合理使用 do-while**：当需要至少执行一次循环体时

合理选择循环类型并结合控制语句（break/continue）可以编写出高效、清晰的循环代码。在性能敏感场景下，注意循环优化技巧，如减少边界计算、避免重复对象创建等。