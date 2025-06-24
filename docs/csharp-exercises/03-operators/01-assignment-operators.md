---
noteId: "a7899dd0471311f09587312c12376354"
tags: []

---

## 交换变量值（临时变量）
```csharp

```

4.x 的最终值是多少？

```csharp
int x = 20;
x /= 4;    
x += 3;    
x *= 2;    
```

1.答案

```csharp
int a = 5, b = 10;
a = a + b; // a=15
b = a - b; // b=5
a = a - b; // a=10
```