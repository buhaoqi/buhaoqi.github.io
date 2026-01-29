---
# 这部分是关键！侧边栏显示名由这里决定
title: 概述  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 概述  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 0  # 侧边栏中排在第1位
---


## 一、列属性

在 `CREATE TABLE` 中，每一列的定义，本质包含三部分：

```text
列名 + 数据类型 + 列属性
```

在“列属性”中，有些是：

* **用来限制数据合法性的** 👉 属于完整性控制
* **用来描述存储或默认行为的** 👉 不直接限制合法性

因此，通常可以将列属性分为：

约束属性：用来限制数据合法性的， 约束属性管‘能不能存’，常见约束属性：

| 属性            | 说明   | 对应完整性   |
| ------------- | ---- | ------- |
| `PRIMARY KEY` | 主键   | 实体完整性   |
| `FOREIGN KEY` | 外键   | 参照完整性   |
| `UNIQUE`      | 唯一   | 实体/用户定义 |
| `NOT NULL`    | 非空   | 用户定义    |
| `CHECK`       | 条件检查 | 用户定义    |

📌 特点：

* **限制“能不能存”**
* 违反就会 **报错、拒绝写入**


描述属性：用来描述存储或默认行为的。描述属性管‘怎么存’。常见非约束属性

| 属性                    | 说明   |
| --------------------- | ---- |
| `DEFAULT`             | 默认值  |
| `AUTO_INCREMENT`      | 自动增长 |
| `COMMENT`             | 列注释  |
| `VISIBLE / INVISIBLE` | 是否可见 |
| `CHARACTER SET`       | 字符集  |
| `COLLATE`             | 排序规则 |

📌 特点：

* **不直接否定数据是否合法**
* 更多是 **“怎么存、怎么显示”**




例如：

```sql
CREATE TABLE student (
  id INT PRIMARY KEY AUTO_INCREMENT,   -- 约束 + 非约束
  name VARCHAR(20) NOT NULL,            -- 约束
  gender CHAR(1) CHECK (gender IN ('男','女')), -- 约束
  age INT DEFAULT 18,                   -- 非约束
  phone VARCHAR(20) UNIQUE,             -- 约束
  remark VARCHAR(100) COMMENT '备注'    -- 非约束
);
```

## 二、完整性的含义

定义：MySQL 数据库的完整性，指保障数据库中数据准确有效的一系列规则与机制。**不该出现的数据进不来，已经存在的数据不能被随便破坏。** 比如说：


- 主键必须唯一、且非空
- 外键必须引用存在的、唯一的值。
- 数据必须符合业务规则和逻辑。




## 三、如果没有完整性约束

创建三个表，列不带任何属性，也就是不添加任何约束是很危险的，比如：

学生表（student）

```sql
CREATE TABLE student (
  student_id INT,
  name VARCHAR(20),
  age INT
);
```

课程表( course)

```sql
CREATE TABLE course (
  course_id INT,
  course_name VARCHAR(30)
);
```



选课表(enrollment)

```sql
CREATE TABLE enrollment (
  student_id INT,
  course_id INT,
  score INT
);
```
---

填充数据

```sql
INSERT INTO student VALUES
(1, '张三', 20),
(1, '李四', -5),     -- 学号重复，年龄非法
(NULL, '王五', 18);  -- 主键为空

INSERT INTO course VALUES
(101, '数据库'),
(102, '操作系统');

INSERT INTO enrollment VALUES
(1, 101, 95),
(2, 999, 88);        -- 不存在的课程
```

请问：

* 这些数据 **合理吗？**
* 数据库 **有没有阻止？**

- 👉 答案：**没有**
- 👉 怎么办：**添加数据库完整性约束**

---

## 四、数据完整性的分类

数据完整性包括：

| 类型          | 关注点            |
| ----------- | -------------- |
| 实体完整性       | 行是否唯一（主键）      |
| 参照完整性       | 表之间关系是否正确（外键）  |
| **用户定义完整性** | **数据是否符合业务规则** |