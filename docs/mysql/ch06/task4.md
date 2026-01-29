---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务四 完整性约束的实现  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务四 完整性约束的实现  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 4  # 侧边栏中排在第1位
---

列级约束和表级约束是 MySQL 中创建完整性约束的两种语法形式，核心区别在于「书写位置」「作用范围」和「支持的约束类型」，最终目的都是保证数据完整性。


- **“列级约束”**：也叫“内联约束”，不使用 `CONSTRAINT` 关键字添加约束的语法名称，
- **“表级约束”**：也叫“外联约束”，使用 `CONSTRAINT` 关键字的约束语法（大多写在所有字段定义之后） 。


## 一、列级约束
### 1. 核心语法
列级约束直接跟随**单个字段定义之后**，无需 `CONSTRAINT` 关键字，语法格式极简：
```sql
CREATE TABLE 表名 (
    字段名1 数据类型 列级约束类型1 [列级约束类型2],
    字段名2 数据类型 列级约束类型,
    -- 其他字段依次定义（无额外独立约束子句）
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
```
支持的核心约束类型：`PRIMARY KEY`（主键）、`NOT NULL`（非空）、`UNIQUE`（唯一）。

### 2. 简单示例（可直接运行）
创建一张学生表，用列级约束实现「主键唯一自增、姓名非空、手机号唯一」：
```sql
-- 列级约束简单示例
CREATE TABLE student_col (
    -- 列级约束：主键（唯一非空）+ 自增属性（非约束，仅辅助赋值）
    id INT AUTO_INCREMENT PRIMARY KEY,
    -- 列级约束：非空（必须填写姓名）
    name VARCHAR(20) NOT NULL,
    -- 列级约束：唯一（手机号不能重复，允许不填）
    phone VARCHAR(11) UNIQUE
);
```

### 3.列级约束详解

不使用 `CONSTRAINT`

- **定义**：直接跟在**单个字段的定义后面**（与字段绑定在一起书写），无需使用 `CONSTRAINT` 关键字，也无法主动给约束显式命名（数据库会自动生成一个默认的系统名称，比如 `MySQL` 中会生成 `PRIMARY`、`sys_xxxx` 这类名称）。
- **特点**：只能作用于**当前这个字段**，无法作用于多个字段（比如无法用列级约束定义“联合主键”“多列联合唯一约束”）。
- **支持的约束类型**：不同数据库略有差异，常见支持 `PRIMARY KEY`、`NOT NULL`、`UNIQUE`、`CHECK`，部分数据库（如 MySQL）也支持 `FOREIGN KEY` 作为列级约束。
- **示例（列级约束，无 `CONSTRAINT`）**
```sql
CREATE TABLE student (
    id INT PRIMARY KEY,  -- 列级约束：主键约束，仅作用于id列
    name VARCHAR(20) NOT NULL,  -- 列级约束：非空约束，仅作用于name列
    phone VARCHAR(11) UNIQUE  -- 列级约束：唯一约束，仅作用于phone列
);
```
这里的 `PRIMARY KEY`、`NOT NULL`、`UNIQUE` 都是列级约束语法，没有使用 `CONSTRAINT`，也是你之前提到的“不使用 constraint 添加约束”的场景。


#### 示例说明
- 所有约束都直接跟在对应字段后，语法简洁，无需额外书写其他内容。
- 仅能作用于当前字段，无法实现「姓名+课程」这类多字段联合约束。

## 二、表级约束
### 1. 核心语法
表级约束在**所有字段定义完成后**，单独作为子句书写，支持 `CONSTRAINT` 自定义约束名，语法格式：
```sql
CREATE TABLE 表名 (
    -- 第一步：先定义所有字段（非空约束只能用列级写法）
    字段名1 数据类型 [字段附加属性],
    字段名2 数据类型 [字段附加属性],
    -- 第二步：单独书写表级约束，多个约束用逗号分隔
    [CONSTRAINT 自定义约束名] 约束类型 (作用字段1 [, 作用字段2]),
    [CONSTRAINT 自定义约束名] 约束类型 (作用字段)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
```
支持的核心约束类型：`PRIMARY KEY`（主键）、`UNIQUE`（唯一，支持联合）、`FOREIGN KEY`（外键）。

### 2. 简单示例（可直接运行）
分两个小示例，分别展示「单字段表级约束」和「多字段联合表级约束」（表级核心优势）。

#### 示例 1：单字段表级约束（与列级功能一致）
创建学生表，用表级约束实现「主键唯一、手机号唯一」，自定义约束名方便后续管理：
```sql
-- 表级约束（单字段）简单示例
CREATE TABLE student_tab_single (
    id INT AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,  -- 非空只能用列级约束
    phone VARCHAR(11),
    -- 表级约束：自定义主键名
    CONSTRAINT pk_student_id PRIMARY KEY (id),
    -- 表级约束：自定义唯一约束名（手机号）
    CONSTRAINT uk_student_phone UNIQUE (phone)
);
```

#### 示例 2：多字段联合表级约束（列级无法实现）
创建学生选课表，用表级约束实现「同一学生不能重复选同一门课」（姓名+课程联合唯一）：
```sql
-- 先创建课程表（用于关联，可选）
CREATE TABLE course (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL
);

-- 表级约束（多字段联合）核心示例
CREATE TABLE student_tab_union (
    id INT AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    course_id INT,
    -- 表级约束：联合唯一（核心优势，列级无法实现）
    CONSTRAINT uk_name_course UNIQUE (name, course_id),
    -- 表级约束：外键（关联课程表，保证选课ID合法）
    CONSTRAINT fk_student_course FOREIGN KEY (course_id) REFERENCES course (course_id)
);
```
#### 示例说明
- 联合约束 `uk_name_course` 是表级的核心价值，通过逗号分隔多个字段，实现组合唯一。
- 自定义约束名（`pk_`/`uk_`/`fk_` 前缀），后续删除/修改约束时可直接引用，无需查询系统默认名。



### 3.表级约束详解

通常使用 `CONSTRAINT`

- **定义**：不跟在单个字段后面，而是在**所有字段定义完成之后**，单独作为一个子句书写，通常会使用 `CONSTRAINT` 关键字显式命名约束（也可以省略 `CONSTRAINT` 关键字让数据库自动命名，但失去了自定义名称的意义，很少这样做）。
- **特点**：可以作用于**单个字段**，也可以作用于**多个字段**（支持联合约束，这是列级约束做不到的核心优势）。
- **示例（表级约束，使用 `CONSTRAINT`）**
```sql
CREATE TABLE student (
    id INT,
    name VARCHAR(20),
    course_id INT,
    -- 表级约束：单字段主键（与列级主键功能一致，只是书写位置不同）
    CONSTRAINT pk_student_id PRIMARY KEY(id),
    -- 表级约束：多字段联合唯一（列级约束无法实现）
    CONSTRAINT uk_student_name_course UNIQUE(name, course_id),
    -- 表级约束：外键约束
    CONSTRAINT fk_student_course FOREIGN KEY(course_id) REFERENCES course(id)
);
```
这里的 `CONSTRAINT pk_student_id ...` 就是完整的表级约束语法（也是你之前提到的“约束定义子句”），核心解决了列级约束无法处理多字段联合约束的问题。

---

## 三、总结
MySQL 支持的列级约束类型

支持以下 4 种约束（`FOREIGN KEY` 列级支持但不推荐，`CHECK` 语法支持但早期版本功能未完全落地）：
1. `PRIMARY KEY`：主键约束（唯一标识，非空）
2. `NOT NULL`：非空约束（字段值不能为 `NULL`）
3. `UNIQUE`：唯一约束（字段值唯一，可允许 `NULL`，且允许多个 `NULL`）
4. `CHECK`：检查约束（MySQL 8.0.16+ 才部分支持，之前版本仅语法通过，不实际生效）
5. `FOREIGN KEY`：外键约束（语法支持，但列级书写无法指定复杂关联规则，且依赖 InnoDB 引擎，不推荐）

> 注意：`NOT NULL` 约束**仅支持列级写法**，MySQL 中没有表级的非空约束语法，这是硬性规定。

MySQL 支持的表级约束类型
支持以下 4 种约束（`NOT NULL` 不支持，`CHECK` 同样 8.0.16+ 部分生效）：
1. `PRIMARY KEY`：主键约束（支持单字段主键、多字段联合主键）
2. `UNIQUE`：唯一约束（支持单字段唯一、多字段联合唯一）
3. `FOREIGN KEY`：外键约束（推荐表级书写，支持完整关联规则，依赖 InnoDB 引擎）
4. `CHECK`：检查约束（8.0.16+ 部分支持，支持多字段关联检查）

