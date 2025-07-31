---
noteId: "52bd790069ed11f0b0e305aa36a1e1ad"
tags: []

---

## 五、运算符优先级

关系运算符的优先级低于算术运算符，高于赋值运算符：

```csharp
int x = 5, y = 10, z = 15;
bool result = x + y > z * 2;  // 等同于 (x + y) > (z * 2)
Console.WriteLine(result);     // false
```