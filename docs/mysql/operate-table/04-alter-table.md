---
noteId: "b97e8360481311f0a6929b02b627d898"
tags: []

---
```sql
-- 修改表名
ALTER TABLE 旧表名 RENAME TO 新表名;

-- 修改列名
ALTER TABLE 表名 RENAME COLUMN 旧列名 TO 新表名; 

-- 添加列
ALTER TABLE 表名
  ADD COLUMN 列1 数据类型 [约束条件] [FIRST|AFTER 已存在列],
  ADD COLUMN 列2 数据类型 [约束条件] [FIRST|AFTER 已存在列];

-- 添加唯一约束
ALTER TABLE 表名 ADD CONSTRAINT 约束名 UNIQUE (列名);
ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);  

-- 删除列
ALTER TABLE 表名 
  DROP COLUMN 列1, 
  DROP COLUMN 列2;
  
-- 删除主键约束
ALTER TABLE 表名 DROP PRIMARY KEY;

-- 删除外键约束
ALTER TABLE 表名 DROP FOREIGN KEY 外键名;

-- 删除唯一约束
ALTER TABLE 表名 DROP INDEX 索引名;
ALTER TABLE users DROP INDEX unique_email;

-- 调整列序
ALTER TABLE 表名
	MODIFY COLUMN 列1 数据类型 AFTER 目标列,
	MODIFY COLUMN 列2 数据类型 AFTER 目标列;

-- 调整列到首位
ALTER TABLE 表名
	MODIFY COLUMN 列1 数据类型 FIRST;

-- 修改列定义（表名除外）
ALTER TABLE 表名 MODIFY COLUMN 列名 新数据类型 [约束条件];

-- 修改列定义
ALTER TABLE 表名 CHANGE COLUMN 旧列名 新列名 新数据类型 [约束条件];

-- 添加非空约束
ALTER TABLE 表名 MODIFY COLUMN 列名 数据类型 NOT NULL;
ALTER TABLE users MODIFY email VARCHAR(255) NOT NULL;

-- 将非空约束改为允许空值
ALTER TABLE 表名 MODIFY COLUMN 列名 数据类型 NULL;
ALTER TABLE users MODIFY email VARCHAR(255) NULL;

-- 删除非空约束
ALTER TABLE 表名 MODIFY COLUMN 列名 数据类型 NULL;
ALTER TABLE users MODIFY email VARCHAR(255) NULL; 

-- 添加自增主键约束
ALTER TABLE 表名 
MODIFY 列名 数据类型 AUTO_INCREMENT PRIMARY KEY;
ALTER TABLE users 
MODIFY id INT AUTO_INCREMENT PRIMARY KEY;

-- 修改默认值
ALTER TABLE 表名 
MODIFY 列名 数据类型 DEFAULT 默认值;
-- 示例
ALTER TABLE products 
MODIFY price DECIMAL(10,2) DEFAULT 0.00;

-- 添加或修改默认值
ALTER TABLE 表 
ALTER COLUMN 列名 SET DEFAULT 默认值;
-- 示例
ALTER TABLE orders 
ALTER COLUMN status SET DEFAULT 'active';

-- 删除默认值
ALTER TABLE 表名 
ALTER COLUMN 列名 DROP DEFAULT;
-- 示例
ALTER TABLE users 
ALTER COLUMN phone DROP DEFAULT;

```


## 4.ALTER TABLE

ALTER TABLE是修改表结构的**语句（Statement）**。它是修改表结构的所有操作的核心指令。

语法

```sql
ALTER TABLE 表名 ADD COLUMN 列名 数据类型 [约束条件] [位置参数];
ALTER TABLE 表名 ADD COLUMN 列名 数据类型 [约束条件] [AFTER 目标列 | FIRST];
ALTER TABLE 表名 DROP COLUMN 列名;
ALTER TABLE 表名 MODIFY COLUMN 列名 数据类型 [位置参数]
```

- ALTER TABLE 是**主句**，是修改表结构的所有操作的核心指令。
- ADD COLUMN是**子句**，指定操作是添加列。
- DROP COLUMN是**子句**，指定操作是删除列。
- MODIFY COLUMN是**子句**，指定操作是修改列定义（表名除外）。

## 5.添加列到指定位置

在添加列的同时，可以通过AFTER和FIRST关键词指定新列的位置。AFTER和FIRST不属于约束条件

语法

```sql
ALTER TABLE student ADD COLUMN 列定义 [位置];
```

- `AFTER  目标列`：把新列添加到目标列的后面

- `FIRST`：把新列添加到首位 

## 6.调整列序

语法

```sql
ALTER TABLE student MODIFY COLUMN 列名 数据类型 AFTER 目标列名;
```

语法

```sql
ALTER TABLE student MODIFY COLUMN 列名 数据类型 FIRST;
```

## 练习1：修改学生表 - 增删列

要求：先为student表添加四个新列chinese、math、english、computer，然后再把他们删掉

步骤1：添加一个新列chinese

```sql
ALTER TABLE student
  ADD COLUMN 列定义;
```

步骤2: 添加三个新列 math、english、computer

```sql
ALTER TABLE student
  ADD COLUMN 列定义,
  ADD COLUMN 列定义,
  ADD COLUMN 列定义;
```

步骤3: 删除四个新列：chinese、math、english、computer

```sql
ALTER TABLE student
  DROP COLUMN 列名,
  DROP COLUMN 列名,
  DROP COLUMN 列名,
  DROP COLUMN 列名;
```

## 练习2：修改学生表 - 指定列序

要求：在student表中添加四个新列chinese、math、english、computer，注意新列的位置

1: 把chinese列添加到id前

2: 把math列添加到id后

3: 把english列添加到age前

4: 把computer添加到age后

## 练习3：修改学生表 - 列排序

要求：在student表中

把chinese math english computer 改为 computer  english math chinese