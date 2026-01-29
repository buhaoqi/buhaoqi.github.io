---
# 这部分是关键！侧边栏显示名由这里决定
title: 案例：索引的用法  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 案例：索引的用法  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---



## 一、教学目标（先给学生一个“为什么”）

在 MySQL 中，**索引（Index）就是用来加快查询速度的**。
👉 没索引：MySQL 一条一条扫表（全表扫描）
👉 有索引：像查字典，先定位再取数据

---

## 二、建表（无索引版本）

### 1️⃣ 创建数据库（可选）

```sql
CREATE DATABASE index_demo;
USE index_demo;
```

### 2️⃣ 创建学生表（先不加索引）

```sql
CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    age INT,
    score INT
);
```

📌 **说明给学生听：**

* `id` 是主键（**主键天然自带索引**）
* `name / age / score` 目前 **都没有索引**

---

## 三、填充测试数据（模拟“数据多了才慢”）

### 1️⃣ 插入一些示例数据

```sql
INSERT INTO student (name, age, score) VALUES
('张三', 18, 90),
('李四', 19, 85),
('王五', 18, 88),
('赵六', 20, 92);
```

📌 可以补一句：

> 数据少的时候，你**感觉不到索引的作用**，但写法是一样的。

---

## 四、没有索引时的查询（重点观察）

### 1️⃣ 普通查询

```sql
SELECT * FROM student WHERE name = '张三';
```

### 2️⃣ 查看执行计划（教学重点）

```sql
EXPLAIN SELECT * FROM student WHERE name = '张三';
```

你会看到类似结果：

```
type: ALL
key: NULL
```

📌 **给学生的解释口诀：**

* `type = ALL` → 全表扫描（一行一行找）
* `key = NULL` → 没用任何索引 ❌

---

## 五、创建索引（核心操作）

### 1️⃣ 给 `name` 字段创建索引

```sql
CREATE INDEX idx_name ON student(name);
```

📌 强调一句：

> 索引 ≈ 给字段建“目录”

---

## 六、再次查询（对比效果）

### 1️⃣ 同样的查询语句

```sql
SELECT * FROM student WHERE name = '张三';
```

### 2️⃣ 再看执行计划

```sql
EXPLAIN SELECT * FROM student WHERE name = '张三';
```

这时你会看到：

```
type: ref
key: idx_name
```

📌 **对比总结（黑板必写）**

| 项目   | 无索引     | 有索引      |
| ---- | ------- | -------- |
| 扫描方式 | ALL（全表） | ref（索引）  |
| key  | NULL    | idx_name |
| 查询效率 | 慢       | 快        |

---

## 七、再来一个“反面例子”（学生最容易踩坑）

### ❌ 对索引列使用函数

```sql
SELECT * FROM student WHERE LEFT(name, 1) = '张';
```

```sql
EXPLAIN SELECT * FROM student WHERE LEFT(name, 1) = '张';
```

📌 结果通常又变成：

```
type: ALL
key: NULL
```

**教学金句：**

> **索引列一旦被“加工”（函数、计算），索引就失效了**

---

## 八、查看当前表的索引

```sql
SHOW INDEX FROM student;
```

📌 让学生认识索引的名字、字段、唯一性

---

## 九、删除索引（补一个完整闭环）

```sql
DROP INDEX idx_name ON student;
```

---

## 十、一句话总结（考试 & 面试版）

> * 索引的作用：**提高查询速度**
> * 主键：**默认有索引**
> * 常用语句：
>
>   * `CREATE INDEX`
>   * `SHOW INDEX`
>   * `DROP INDEX`
> * 判断是否走索引：**EXPLAIN**

---

## 十一、课堂练习（直接能用）

**练习题：**

1. 给 `age` 字段创建索引
2. 查询 `age = 18` 的学生
3. 用 `EXPLAIN` 验证是否走索引

👉 学生只要会照着敲，就说明**索引入门成功了**

---

如果你愿意，我可以下一步帮你写：

* 🔹 **“教学版：索引失效的 5 种常见情况”**
* 🔹 **普通索引 vs 唯一索引 vs 联合索引（入门不劝退版）**
* 🔹 **一张“是否该建索引”的判断表**

你想接着往哪一层讲？
