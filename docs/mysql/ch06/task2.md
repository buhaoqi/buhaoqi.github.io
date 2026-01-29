---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 参照完整性  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 参照完整性  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 2  # 侧边栏中排在第1位
---



## 一、参照完整性的概念

**参照完整性**是指：
> **在关系数据库中，子表（从表）的外键字段，必须参照父表（主表）的主键（或唯一键）字段来取值。**

通俗理解

* **子表不能乱认“爹”**
* **有外键，就必须找得到对应的主表记录。不可出现找不到或找到多个的情况。**

否则数据库就会“关系断裂”。

核心一句话：
**“不能引用一个不存在的数据或只能引用一个存在的唯一数据。”**


## 二、示例：引用中的参照完整性

主表：学生表 `student`

| student_id | name |
| ---------- | ---- |
| 1          | 张三   |
| 2          | 李四   |

从表：成绩表 `score`

| id | student_id | score |
| -- | ---------- | ----- |
| 1  | 1          | 90    |

这里：

* **外键**：`score.student_id` 
* **主键**： `student.student_id` 

合法情况 ✅

```text
score.student_id = 1   （student 表中存在）
```

非法情况 ❌

```text
score.student_id = 5   （student 表中不存在）
```

👉 这就**违反了参照完整性**。

## 三、示例：“删除”场景中的参照完整性

如果 **student 表中有 student_id = 1**，
而 **score 表中还有 student_id = 1 的记录**：

* ❌ 直接删除 student 里的这条记录
* 否则成绩表就会变成“孤儿数据”

👉 **参照完整性约束会阻止这种操作，或要求你指定规则**


## 四、参照完整性的实现

> **参照完整性 = 外键约束（FOREIGN KEY）**


### （一）表级外键语法

```sql
CONSTRAINT 外键名
FOREIGN KEY (从表列)
REFERENCES 主表(主键列)
```

示例

```sql
CREATE TABLE enrollment (
  student_id INT,
  course_id INT,
  CONSTRAINT fk_enroll_student
    FOREIGN KEY (student_id)
    REFERENCES student(student_id)
);
```

要点

* `student_id`：从表外键列
* `student(student_id)`：被参照表及主键
* `fk_enroll_student`：外键约束名（可省略）

---

### （二）列级外键语法

```sql
student_id INT
REFERENCES student(student_id)
```

特点：

* 写在列定义后
* **不便于写级联规则**
* 实际教学中 **不推荐**

---

## 五、带参照动作的完整语法

### 标准结构

```sql
CONSTRAINT 外键名
FOREIGN KEY (列名)
REFERENCES 主表(列名)
ON DELETE 行为
ON UPDATE 行为
```

---

### 常见参照行为

| 行为                       | 含义         |
| ------------------------ | ---------- |
| `RESTRICT` / `NO ACTION` | 禁止删除/修改    |
| `CASCADE`                | 级联删除/更新    |
| `SET NULL`               | 外键置空       |
| `SET DEFAULT`            | 置为默认值（较少用） |

---

### 示例：级联删除

```sql
CONSTRAINT fk_enroll_student
FOREIGN KEY (student_id)
REFERENCES student(student_id)
ON DELETE CASCADE
```

示例：

> 删除学生 → 自动删除选课记录

---

## 六、复合外键

```sql
FOREIGN KEY (student_id, course_id)
REFERENCES enrollment(student_id, course_id)
```

📌 说明：

* 外键列数
* 必须与被参照主键/唯一键列数一致

---

## 七、后期添加外键（ALTER TABLE）

```sql
ALTER TABLE enrollment
ADD CONSTRAINT fk_enroll_course
FOREIGN KEY (course_id)
REFERENCES course(course_id);
```

---

## 八、删除外键约束

```sql
ALTER TABLE enrollment
DROP FOREIGN KEY fk_enroll_course;
```

注意：

* 删除的是 **外键名**
* 不是列名

---

## 九、参照完整性语法总结

> **参照完整性通过外键约束实现，其基本语法为：
> FOREIGN KEY(从表列) REFERENCES 主表(主键列)，
> 并可通过 ON DELETE、ON UPDATE 指定参照动作。**


一句话对比

* **实体完整性**：这一行是谁？（主键）
* **参照完整性**：你引用的是谁？（外键）
* **用户自定义完整性**：你合不合理？（业务规则）

---


## 附：引用空值

参照完整性不能引用一个不存在的数据”这句话不等于不能引用null 值。

### 先明确参照完整性的核心规则
参照完整性（通过外键约束实现）的核心逻辑可简化为：
```
从表外键值 → 要么匹配主表参照字段（主键/唯一索引）的存在值，要么为 NULL（若外键允许 NULL）
```
“引用不存在的数据”指的是：外键字段填写了一个**主表参照字段中完全没有的值**（而非 `NULL`），这是参照完整性明确禁止的；而 `NULL` 是“无引用”，不是“引用不存在的东西”，二者有本质区别。

### 分场景验证这句话的正确性
#### 场景 1：外键字段填写具体值 → 不能引用不存在的数据（这句话完全正确）
如果外键字段有具体的非 `NULL` 值，该值必须在主表的参照字段（主键/唯一索引）中存在，否则数据库会直接拒绝插入/更新操作，这是参照完整性的核心约束。

实操示例（可直接运行）

```sql
-- 1. 主表（课程表）：course_id 是主键（唯一且非空）
CREATE TABLE course (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

-- 2. 从表（学生表）：外键 course_id 参照主表 course_id
CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    course_id INT,
    CONSTRAINT fk_student_course FOREIGN KEY (course_id) REFERENCES course(course_id)
) ENGINE = InnoDB;

-- 3. 主表插入一条数据（course_id=1）
INSERT INTO course (course_name) VALUES ('MySQL 基础');

-- 4. 外键引用存在的数据（course_id=1）→ 执行成功（符合参照完整性）
INSERT INTO student (name, course_id) VALUES ('张三', 1);

-- 5. 外键引用不存在的数据（course_id=99）→ 报错（违反参照完整性）
INSERT INTO student (name, course_id) VALUES ('李四', 99);
```
❌ 报错信息：`ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails (...)`  
这直接验证了“外键不能引用不存在的数据”——数据库会强制拦截这类操作，确保参照完整性。

#### 场景 2：外键字段取值为 `NULL`（且允许 `NULL`）→ 并非“引用不存在的数据”（这句话不适用）
`NULL` 在数据库中表示“无值/无关联关系”，而非“引用了一个不存在的值”。此时从表记录与主表无任何关联，自然不存在“引用不存在数据”的问题，也完全符合参照完整性。

实操示例

接上面的表结构，执行以下语句：
```sql
-- 外键取值为 NULL（表示“未选课，无关联”）→ 执行成功
INSERT INTO student (name, course_id) VALUES ('王五', NULL);
```
✅ 执行结果：插入成功，无任何报错。  
原因是：`NULL` 不是“引用了不存在的 course_id”，而是“没有引用任何 course_id”，因此不违反“不能引用不存在数据”的逻辑（因为根本没有“引用”行为）。

---

### 关键补充：容易混淆的两个点
1. **`NULL` ≠ 不存在的数据**：
   - “引用不存在的数据”是“有具体值但主表没有”（如 course_id=99）；
   - `NULL` 是“无值”，没有“引用”动作，二者本质不同。
2. **引擎限制**：
   只有 `InnoDB` 引擎会强制校验参照完整性，若使用 `MyISAM` 引擎，即使外键引用不存在的数据，数据库也不会报错（但外键约束实际失效，这是引擎特性，并非参照完整性规则本身的问题）。

---

### 总结
1. 核心结论：“参照完整性不能引用一个不存在的数据”这句话**整体正确**，但需注意例外——外键取 `NULL`（允许 NULL 时）是“无引用”，而非“引用不存在的数据”，因此不违反规则；
2. 关键边界：只要外键字段有具体的非 `NULL` 值，就必须引用主表中存在的数据，否则违反参照完整性；
3. 实操要点：`InnoDB` 引擎会强制拦截“引用不存在数据”的操作，这是保障数据一致性的核心机制。





