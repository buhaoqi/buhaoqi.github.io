---
noteId: "29e0238073e711f0ac7f012540a4f7e6"
tags: []

---

小数类型(DECIMAL)

MySQL中的小数类型使用`DECIMAL()` 函数创建。Decimal在英语中的本意是“小数”。

用途

- DECIMAL()函数用于创建一个精确的小数类型。
- DECIMAL()适合存储精确数值，特别适合需要精确计算的场景，如财务数据、货币金额等。

基本语法

```sql
DECIMAL(M, D)
```

- **M**：表示总位数（1-65，不含小数点），总位数包含整数位数+小数位数。整数位数 = M - D
- **D**: 小数点后的位数(0-30)，且必须小于或等于M。

示例：创建表时定义DECIMAL列

```sql
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2),  -- 共10位，小数点后2位
    weight DECIMAL(8, 3)   -- 共8位，小数点后3位
);
```

示例：插入DECIMAL值

```sql
INSERT INTO products VALUES 
(1, 'Laptop', 999.99, 2.345),
(2, 'Phone', 599.50, 0.156);
```

浮点与定点数

| 类型           | 特点                     | 精度问题     | 应用场景             |
| -------------- | ------------------------ | ------------ | -------------------- |
| `FLOAT(M,D)`   | 单精度浮点，4字节        | 7位有效数字  | 科学测量数据         |
| `DOUBLE(M,D)`  | 双精度浮点，8字节        | 15位有效数字 | 高精度计算（非金融） |
| `DECIMAL(M,D)` | 定点数，M总位数，D小数位 | 精确计算     | 金额、财务数据       |

**底层原理**：

- `FLOAT/DOUBLE` 使用二进制浮点数（IEEE 754标准），存在舍入误差
- `DECIMAL` 以字符串形式存储，精确但计算代价更高

**示例**：

```sql
CREATE TABLE finance (
    amount DECIMAL(10,2) -- 最大存储99999999.99
);
```

