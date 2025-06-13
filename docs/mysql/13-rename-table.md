---
noteId: "d5853020482911f0a6929b02b627d898"
tags: []

---

# MySQL 重命名表的语法

在 MySQL 中重命名表有以下几种方法：

## 1. 基本 RENAME TABLE 语法

```sql
RENAME TABLE old_table_name TO new_table_name;
```

## 2. 重命名多个表

```sql
RENAME TABLE 
    old_table1 TO new_table1,
    old_table2 TO new_table2,
    old_table3 TO new_table3;
```

## 3. 使用 ALTER TABLE 语法

```sql
ALTER TABLE old_table_name RENAME TO new_table_name;
```

## 4. 跨数据库重命名表

```sql
RENAME TABLE 
    current_db.old_table_name TO new_db.new_table_name;
```

## 注意事项

1. 需要具有原表的 ALTER 和 DROP 权限，以及新表的 CREATE 和 INSERT 权限
2. 重命名表会自动更新与该表相关的视图、存储过程、触发器等的引用
3. 如果表有外键约束，重命名操作可能会失败或需要特殊处理
4. 重命名操作是原子性的，要么全部成功，要么全部失败
5. 在事务中可以使用 RENAME TABLE 命令

## 示例

```sql
-- 单个表重命名
RENAME TABLE employees TO staff;

-- 多个表重命名
RENAME TABLE
    temp_users TO users,
    temp_orders TO orders;

-- 使用ALTER TABLE
ALTER TABLE products RENAME TO items;

-- 跨数据库移动并重命名
RENAME TABLE 
    old_db.customers TO new_db.clients;
```

## 与复制表的区别

重命名表是直接更改表的名称而不创建新表，而复制表会创建一个新表并保留原表。