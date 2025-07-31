---
noteId: "077e74d0686c11f0b38abb3f8df447a5"
tags: []

---


## **Exception** [ɪkˈsepʃn]  
**中文**：异常  
**短语**：  
- Throw an exception (抛出异常)  
- Handle exceptions (异常处理)  
**场景**：  
```python
try:
    file = open("data.txt", "r")
except FileNotFoundError as e:  # Catch exception
    print("Error:", e)
finally:
    print("Cleanup done")
```

## Encapsulation [ɪnˌkæpsjʊˈleɪʃən]

中文：封装

短语：

Data hiding (数据隐藏)

Access modifiers (访问修饰符)
场景：

```c# linenums="1"
public class BankAccount  // 银行账户类
{
    private decimal _balance;  // 私有字段：封装余额数据

    // 公开方法：封装存款逻辑
    public void Deposit(decimal amount)
    {
        if (amount > 0)
            _balance += amount;  // 内部修改私有字段
    }

    // 属性：封装余额访问
    public decimal Balance 
    {
        get => _balance;  // 只允许读取
        private set => _balance = value;  // 仅类内部可修改
    }
}

// 使用
var account = new BankAccount();
account.Deposit(100);          // ✅ 通过方法访问
Console.WriteLine(account.Balance); // ✅ 通过属性访问
// account.Balance = 1000;     // ❌ 编译错误（外部无法直接修改）
```