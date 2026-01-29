---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 实体完整性  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 实体完整性  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---

## 一、实体相关概念

### 实体的概念

- 在数据库中，实体是的一种概念。
- 实体是对现实世界中客观存在的事物的抽象表示。
- 每个实体对应一张表或多张表。
- 实体的属性对应表中字段
- 实体的实例对应表中的一条记录。

### 元组的概念

元组对应数据表中的一条记录，在二维表中，元组也被称为“行“。

`现实世界的实体实例` → `数据库中的一个元组（一行记录）` → `由多个字段的属性值组成`

以 `user` 表为例：

| user_id（主键） | username | phone       |
|-----------------|----------|-------------|
| 1               | 张三     | 13800138000 |
| 2               | 李四     | 13900139000 |

这个表中有 **2 个元组**：
- 第一个元组：`(1, 张三, 13800138000)` → 对应“用户张三”这个实体实例的一行记录
- 第二个元组：`(2, 李四, 13900139000)` → 对应“用户李四”这个实体实例的一行记录

### 字段的概念

- 字段就是列名。
- 字段是实体的属性。
- 字段必须设置数据类型，也可以设置约束。


## 二、实体完整性的概念

实体完整性是指表中的每一行（元组）作为一个实体实例，必须具备 “唯一可识别、非空” 的属性。可以准确对应现实中的一个实体实例，不会出现 “身份不明” 或 “身份重复” 的问题。

实体完整性规则要求要求表中每一行都必须有唯一的标识符且不可为空，即：

1. 主键不能取空值
2. 主键必须具有唯一性



## 三、实体完整性的实现

### （一）定义主键约束

主键约束是指在表中定义一个主键来唯一确定表中每行数据的标识符。

#### 1.定义表级主键约束的语法

```sql
CREATE TABLE 表名(
    字段1 数据类型,
    字段2 数据类型,
    ...,
    PRIMARY KEY (约束列[,约束列])
)
```
说明：

- 单字段主键：最常用，用一个字段作为主键（比如用户ID、订单ID）；
- 复合主键：用多个字段组合作为主键（仅适用于“单个字段无法唯一标识行”的场景）。


**示例1：单字段主键（最常用）**

创建 `user` 表时，给 `user_id` 字段添加主键约束：
```sql
CREATE TABLE `user` (
  `user_id` INT NOT NULL AUTO_INCREMENT COMMENT '用户ID（主键）',
  `username` VARCHAR(50) NOT NULL COMMENT '姓名',
  `phone` VARCHAR(11) COMMENT '手机号',
  -- 定义主键约束：指定user_id为主键
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```
- 效果1：插入 `user_id=NULL` 的记录 → 报错（违反非空性）；
- 效果2：插入 `user_id=1` 的记录后，再插入 `user_id=1` → 报错（违反唯一性）；
- `AUTO_INCREMENT` 是主键常用的自增属性，让数据库自动生成唯一的主键值（无需手动赋值）。

**示例2：复合主键**

比如订单详情表（`order_item`），单个 `order_id`（订单ID）或 `product_id`（商品ID）都无法唯一标识行（一个订单可包含多个商品），需组合作为主键：
```sql
CREATE TABLE `order_item` (
  `order_id` INT NOT NULL COMMENT '订单ID',
  `product_id` INT NOT NULL COMMENT '商品ID',
  `quantity` INT NOT NULL COMMENT '购买数量',
  `price` DECIMAL(10,2) NOT NULL COMMENT '商品单价',
  -- 复合主键约束：order_id + product_id 组合唯一
  PRIMARY KEY (`order_id`, `product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```
- 效果：允许 `order_id=1` 搭配 `product_id=1`、`order_id=1` 搭配 `product_id=2`，但不允许 `order_id=1`+`product_id=1` 重复出现。

---

#### 2.定义列级主键约束的语法

```sql
CREATE TABLE 表名(
    字段1 数据类型 PRIMARY KEY NOT NULL AUTO_INCREMENT,
    字段2 数据类型,
)
```
--- 

#### 3.添加主键约束

示例：给已有表添加主键约束

如果建表时没定义主键，可通过 `ALTER TABLE` 补充：
```sql
-- 给user表添加主键约束（假设之前没定义）
ALTER TABLE `user` ADD PRIMARY KEY (`user_id`);
```

示例：添加复合主键

```sql
ALTER TABLE `user` ADD PRIMARY KEY (`字段 1`,`字段 2`);
```
---

#### 4.删除主键约束

示例：删除已有表的主键约束

```sql
-- 删除已有表的主键约束
ALTER TABLE `user` DROP PRIMARY KEY;

```

### （二）定义唯一约束

由于一张表中只能有一个主键，但是对于某些字段，例如身份证号这样的字段，肯定也是唯一的，我们又不能将其设置为主键（身份证字段属于有意义的字段），那么怎么保证它的唯一性呢？这就是唯一约束。

唯一约束是为表中的某一列添加唯一约束。唯一约束与主键类似，用于保证列中所有数据各不相同。唯一约束可以保证记录的唯一性，任何两行都不能有相同的列值；唯一约束的字段可以为空值，但该列中空值只能出现一次；而且一个表中可以为多个列设置唯一约束。



#### 1.定义表级唯一约束

```sql
CREATE TABLE 表名（
  列名1 数据类型,
  列名2 数据类型,
  列名3 数据类型,
  [CONSTRAINT <约束名>] UNIQUE KEY（约束列）
） 
```
---

#### 2.定义列级唯一约束

**示例：** 创建数据表`STUDENT_2`，共包含`stuid`，`name`，`idcard`三个字段，并将`idcard`字段设置为唯一约束。
```sql
CREATE TABLE STUDENT_2(
  stuid int,
  name varchar(20),
  idcard varchar(30) UNIQUE KEY
)
```

示例：给数据表`student`中的`Stuid`字段和`Stuname`字段添加唯一约束。
```sql
ALTER TABLE student ADD UNIQUE KEY (Stuid,Stuname)
```

---

#### 3.添加唯一约束
```sql
ALTER TABLE 表名[CONSTRAINT <约束名>] ADD 约束名 UNIQUE KEY(约束列)
```

示例

```sql
ALTER TABLE student ADD UNIQUE KEY (Stuid)
```

--- 

#### 4.删除唯一约束

```sql
ALTER TABLE 表名 [CONSTRAINT <约束名>] DROP INDEX UNIQUE(约束列)
```

---

#### 5.约束名的设置

在设置约束的时候可以给所添加的约束取名字，以唯一约束为例，我们可以对比看看有无约束名字的语法格式的区别。

示例：没有设置约束名字时语法格式

```sql
CREATE TABLE STU(id int,name VARCHAR(20),phone VARCHAR(20) UNIQUE)
```
这条语句只是确定了`phone`列设置为了唯一约束，但并没有起约束名。


示例：带约束名的设置语法

```sql
ALTER TABLE STU ADD CONSTRAINT PG UNIQUE (phone)
```
此时设置`phone`为唯一约束，并取名为`PG`。

---

## 四、总结
1. 主键必须满足两大硬性规则：非空性（NOT NULL）、唯一性（UNIQUE）
2. **主键的形式**：分单字段主键（常用）和复合主键（特殊场景），一张表仅能有一个主键；
3. **核心作用**：确保表中每行数据（实体实例）都有唯一、不缺失的标识，避免“身份不明”或“身份重复”的问题。
4. 主键字段会自动建索引
