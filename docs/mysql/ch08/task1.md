---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 索引  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 索引  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---


## 一、索引（Index）是什么

- 索引是数据的目录。
- 索引是快速定位数据行的技术。
- 所有数据都可以被索引，但效率不同。
- 索引是一种特殊的数据结构。

用一个生活类比：

> “查一本 1000 页的书里某个词。”

- 👉 索引 = 数据的“目录”（帮数据库快速找数据的目录）
- 👉 没索引：一页一页翻书
- 👉 有索引：先查目录，再直达页码



## 二、索引的分类
根据表列的特性，逻辑上将索引分为两类：

- 主键索引
- 辅助索引

### 主键索引

定义：主键索引是以表的主键字段创建的索引。也叫“聚簇索引“。

特点：

- 按主键排序
- 主键索引是唯一性索引
- 可以防止添加空值
- 一张表只能有一个聚簇索引

### 辅助索引
定义：辅助索引是除主键索引外的所有索引，又称「二级索引」。

分类：

- 普通索引：基本索引
- 唯一索引：索引值必须唯一，允许空值
- 全文索引：查找值，不比较值
- 空间索引：定义在空间数据类型上的索引

分类：

- 单列索引：在单个字段上创建索引
- 复合索引：在多个字段上创建一个索引

特点：

- 按字段的字典序排序


## 三、索引的语法

### 1.添加索引

```sql
CREATE [UNIQUE|FULLTEXT|SPATIAL] INDEX 索引名 ON 表名(字段名) [ASC|DESC];
```
- CREATE INDEX：创建普通索引
- 索引名：通常是`idx_表名_列名`
- 字段名：创建索引的列名
- UNIQUE：创建唯一索引
- FULLTEXT：创建全文索引
- SPATIAL：创建空间索引
- ASC｜DESC：升序、降序

```sql
-- 3. 创建辅助索引：手机号字段的唯一索引（二级索引）
CREATE UNIQUE INDEX idx_phone ON student(phone);
-- 1. 手动给age字段创建普通索引（适合高频查询的字段）
CREATE INDEX idx_student_age ON student(name);
```

* `idx_student_name`：索引名字（随便起，但要有意义）
* `student(name)`：给哪张表、哪一列建索引
* 强调：**索引是建在“列”上的**


```sql
-- 2. 先创建基础学生表（无索引）
CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- 主键自动创建主键索引
    name VARCHAR(20) NOT NULL,
    phone VARCHAR(11) UNIQUE,          -- 唯一约束自动创建唯一索引
    age INT
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

```


### 2.创建索引表

```sql
CREATE TABLE 表名(
  列名 数据类型 列属性,
  列名 数据类型 列属性,
  列名 数据类型 列属性,
  [UNIQUE|FULLTEXT|SPATIAL] INDEX|KEY 索引名 (字段名[（长度）] [ASC|DESC]) [VISIBLE|INVISIBLE]
);

```

- INDEX 和 KEY 完全等价：创建普通索引
- KEY

示例

```sql
-- 方式1：用 INDEX 关键字创建普通索引（idx_s_name）
CREATE TABLE IF NOT EXISTS student (
    s_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    s_name VARCHAR(20) NOT NULL,
    phone CHAR(11) NOT NULL,
    s_gender CHAR(2) NOT NULL,
    PRIMARY KEY (s_id), -- 这里的 KEY 是主键关键字，后续说明
    -- 用 INDEX 创建姓名普通索引
    INDEX idx_s_name (s_name ASC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 方式2：用 KEY 关键字创建普通索引（idx_s_name）
CREATE TABLE IF NOT EXISTS student (
    s_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    s_name VARCHAR(20) NOT NULL,
    phone CHAR(11) NOT NULL,
    s_gender CHAR(2) NOT NULL,
    PRIMARY KEY (s_id),
    -- 用 KEY 创建姓名普通索引，和上面 INDEX 效果完全一致
    KEY idx_s_name (s_name ASC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### 3.查看索引
```sql
SHOW INDEX FROM student;
```

搭配UNIQUE修饰符创建唯一索引时，两者也等价：

```sql
-- 方式1：UNIQUE + INDEX
UNIQUE INDEX idx_phone (phone);

-- 方式2：UNIQUE + KEY
UNIQUE KEY idx_phone (phone);
```

示例: KEY用于定义主键索引

```sql
-- 必须用 PRIMARY KEY，不能用 PRIMARY INDEX（语法报错）
PRIMARY KEY (s_id)
```


### 4.修改索引

```sql
ALTER  TABLE 表名
ADD [UNIQUE|FULLTEXT|SPATIAL] [INDEX|KEY] 索引名 (字段名[（长度）] [ASC|DESC]);
```

- ADD : 想表中添加索引

### 5.删除索引的语法
```sql
-- 4. 删除索引（如需）
DROP INDEX idx_student_age ON student;
```

### 5.使用索引的语法

使用索引（学生最容易误解的点）

❌ 错误理解：

> “建了索引，要在 SQL 里写 idx_xxx 才能用”

✅ 正确理解：

> **索引是自动使用的**

```sql
SELECT * FROM student WHERE name = '张三';
```

- 👉 数据库自己决定用不用索引
- 👉 程序员**不用管**

1. 不建索引查询
2. 建索引后查询
3. 用 `EXPLAIN` 对比

```sql
EXPLAIN SELECT * FROM student WHERE name = '张三';
```


## 三、示例数据

```sql
-- 1. 建表：s_id 作为主键（自动创建主键索引），phone 创建唯一辅助索引 idx_phone
CREATE TABLE IF NOT EXISTS student (
    s_id INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '学生唯一主键ID（主键索引）',
    s_name VARCHAR(20) NOT NULL COMMENT '学生姓名',
    phone CHAR(11) NOT NULL COMMENT '手机号（辅助索引）',
    s_gender CHAR(2) NOT NULL COMMENT '性别',
    PRIMARY KEY (s_id) -- 显式定义主键，InnoDB自动创建「主键索引（聚簇索引）」
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='学生表（用于索引示例）';

-- 2. 插入3条测试数据
INSERT INTO student (s_name, phone, s_gender) VALUES
('王浩', '13812345678', '男'),
('李思雨', '13987654321', '女'),
('张宇航', '13700009999', '男');
```
## 四、创建索引示例

### 1.创建普通索引

```sql
CREATE INDEX idx_age ON student(age);
```

### 2.创建唯一索引

```sql
CREATE UNIQUE INDEX idx_phone ON student(phone);
```

---
### 3.创建全文索引

```sql
CREATE FULLTEST INDEX idx_phone ON student(phone);
```

---

### 4.创建主键索引（自动）

```sql
PRIMARY KEY (id)
```

👉 不用手动建
👉 **每个表只有一个**

---

### 5.创建复合索引

```sql
CREATE INDEX idx_name_age ON student(name, age);
```

> **联合索引遵循“最左前缀原则”**

---

## 五、删除索引示例

创建索引之后，对数据的添加、修改、删除等操作会使索引出现碎片，影响数据查询性能。为了提高查询效率，数据库管理员需要定期对索引进行相应的维护，其中包括删除和修改索引。


### 1. 使用`ALTER TABLE`语句删除索引
【语法格式】
```sql
ALTER TABLE 表名 DROP INDEX 索引名;
```

示例：删除`Speciality`表上名为`SY_Spename`的索引。

```sql
ALTER TABLE Speciality DROP INDEX SY_Spename;
```
查看`Speciality`表上的索引信息

```sql
SHOW INDEX FROM Speciality;
```

### 2. 使用`DROP INDEX`语句删除索引
【语法格式】
```sql
DROP INDEX 索引名 ON 表名;
```

示例：删除`student`表上名为`SY_FT_Speciality`的索引。

```sql
DROP INDEX SY_FT_Speciality ON student;
```

注意：

删除表中的列时，会删除与该列相关的索引信息。若待删除的列为索引的组成部分，则该列也会从索引中删除。若组成索引的所有列都被删除，则整个索引将被删除。


## 六、注意事项

### 1.索引列不能参与运算

```sql
SELECT * FROM student WHERE age + 1 = 20;
```

👉 **索引失效**

原因：

> **索引列参与运算，数据库没法用目录查**

### 2.索引列不能参与模糊查询

```sql
WHERE name LIKE '%三'
```

👉 前面有 `%`，索引失效

### 3.什么时候适合建索引 ✅

| 场景              | 原因     |
| --------------- | ------ |
| `WHERE` 条件中的列   | 快速定位   |
| `JOIN` 关联字段     | 提升连接速度 |
| 经常排序 `ORDER BY` | 减少排序   |
| 经常分组 `GROUP BY` | 提高分组效率 |


### 4.什么时候不适合建索引 ❌

| 场景      | 原因     |
| ------- | ------ |
| 表数据很少   | 全表扫描更快 |
| 经常更新的列  | 维护成本高  |
| 重复值很多的列 | 索引效果差  |

结论：

> **索引不是越多越好。**

## 七、索引的工作原理

以最常见的 **InnoDB + B+Tree 索引**为例：

### 1️⃣ 没有索引（全表扫描）

```text
SELECT * FROM student WHERE id = 10086;
```

数据库做的事：

* 从第一行开始
* 一行一行比
* 直到找到，或扫完整张表

👉 **O(n)**，数据一多就慢。

---

### 2️⃣ 有索引（走索引树）

```text
id 上有索引
```

数据库做的事：

* 从 B+Tree 的**根节点**开始
* 根据大小关系向下查找
* 很快定位到对应叶子节点
* 通过指针找到数据行

👉 **O(log n)**，速度提升巨大。

---

## 八、索引里存了什么？

索引**不是**简单存“字段值”。

以 **InnoDB 主键索引**为例：

* 索引节点中存的是：

  * **键值（列值）**
  * **指向数据的定位信息**

### 两种常见情况：

* **聚簇索引（主键）**：
  👉 叶子节点 **就是整行数据**
* **二级索引**：
  👉 叶子节点存 **索引列值 + 主键值**

