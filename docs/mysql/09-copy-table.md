---
noteId: "86c7144049fe11f0a7615bdc7c14c635"
tags: []

---


在 MySQL 中，有几种方法可以复制表的结构和数据：


## 复制表结构（不包含数据）

```sql
CREATE TABLE new_table LIKE original_table;
```

## 复制表数据

```sql
INSERT INTO new_table SELECT * FROM original_table;
```

## 同时复制表结构和数据

```sql
CREATE TABLE new_table AS SELECT * FROM original_table;
```


## 复制部分数据

```sql
CREATE TABLE new_table AS 
SELECT column1, column2 
FROM original_table 
WHERE condition;
```

## 复制到已存在的表

```sql
INSERT INTO existing_table 
SELECT * FROM original_table;
```

## 跨数据库复制

```sql
CREATE TABLE database2.new_table LIKE database1.original_table;
INSERT INTO database2.new_table SELECT * FROM database1.original_table;
```

## 注意事项

1. 使用 `LIKE` 会复制原表的结构（包括索引、约束等），但不会复制数据
2. 使用 `AS SELECT` 会复制数据，但不会复制索引、自增属性等
3. 对于大型表，复制操作可能会消耗较多资源和时间
4. 复制操作不会复制外键约束，需要手动添加
