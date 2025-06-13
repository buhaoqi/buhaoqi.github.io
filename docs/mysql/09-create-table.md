---
noteId: "8841af70481311f0a6929b02b627d898"
tags: []

---

## 创建表语法

```sql
CREATE TABLE 表名 (
	  列名1 数据类型 [约束条件],
    列名2 数据类型 [约束条件],
    列名3 数据类型 [约束条件]
);
```

# MySQL 复制表的命令

在 MySQL 中，有几种方法可以复制表的结构和数据：

## 1. 复制表结构及数据（完整复制）

```sql
CREATE TABLE new_table LIKE original_table;
INSERT INTO new_table SELECT * FROM original_table;
```

或者使用单条命令：

```sql
CREATE TABLE new_table AS SELECT * FROM original_table;
```

## 2. 仅复制表结构（不包含数据）

```sql
CREATE TABLE new_table LIKE original_table;
```

## 3. 复制部分数据

```sql
CREATE TABLE new_table AS 
SELECT column1, column2 
FROM original_table 
WHERE condition;
```

## 4. 复制到已存在的表

```sql
INSERT INTO existing_table 
SELECT * FROM original_table;
```

## 5. 跨数据库复制

```sql
CREATE TABLE database2.new_table LIKE database1.original_table;
INSERT INTO database2.new_table SELECT * FROM database1.original_table;
```

## 注意事项

1. 使用 `LIKE` 会复制原表的结构（包括索引、约束等），但不会复制数据
2. 使用 `AS SELECT` 会复制数据，但不会复制索引、自增属性等
3. 对于大型表，复制操作可能会消耗较多资源和时间
4. 复制操作不会复制外键约束，需要手动添加

## 示例

```sql
-- 完整复制employees表到employees_backup
CREATE TABLE employees_backup LIKE employees;
INSERT INTO employees_backup SELECT * FROM employees;

-- 仅复制部分数据和列
CREATE TABLE managers AS 
SELECT id, name, department 
FROM employees 
WHERE position = 'manager';
```

如果需要完全相同的表结构（包括所有约束和索引），推荐先使用 `LIKE` 创建表结构，再使用 `INSERT INTO...SELECT` 复制数据。