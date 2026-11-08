---
title: 任务一 触发器概述与创建
description: 数据库原理与应用技术《MySQL》项目九 数据库编程 任务一 触发器概述与创建知识点总结。涵盖触发器的概念与作用、优缺点、使用原则、触发器四要素与6种类型、CREATE TRIGGER语法、BEFORE/AFTER触发时机、NEW/OLD关键字、BEGIN...END复合语句等核心知识点。
keywords: [MySQL, 触发器, CREATE TRIGGER, BEFORE, AFTER, INSERT触发器, UPDATE触发器, DELETE触发器, NEW, OLD, 触发器四要素, 对口升学]
sidebar_label: 任务一 触发器概述与创建
sidebar_position: 1
slug: /mysql/proj9/task1-trigger-overview-create
tags: [MySQL, 项目九, 任务一, 对口升学]
---

## 知识点

### 1. 什么是触发器？触发器的基本原理是什么？

答：触发器（TRIGGER）是提供给程序员和数据分析员来保证数据完整性的一种方法，它是与表事件相关的特殊的存储过程。触发器的执行不是由程序调用，而是由事件来触发的，例如当对一个表进行操作（INSERT、DELETE、UPDATE）时就会激活它执行。触发器是与MySQL数据表有关的数据库对象，在满足定义条件时触发，并执行触发器中定义的语句集合，这种特性可以应用在数据库端确保数据的完整性。

### 2. 触发器有哪些作用？

答：触发器的作用包括：
- 可在写入数据表前，强制检验或转换数据
- 触发器发生错误时，异动的结果会被撤销
- 部分数据库管理系统可以针对数据定义语言（DDL）使用触发器，称为DDL触发器
- 可依照特定的情况，替换异动的指令（INSTEAD OF）

### 3. 触发器的优点有哪些？

答：触发器的优点包括：
- **自动执行**：触发器在对表的数据作了任何修改之后立即被激活
- **级联更新**：触发器可以通过数据库中的相关表进行层叠更改，比直接把代码写在前台更安全合理
- **强化约束**：触发器可以引用其他表中的列，能够实现比CHECK约束更为复杂的约束
- **跟踪变化**：触发器可以阻止数据库中未经许可的指定更新和变化
- **强制业务逻辑**：触发器可用于执行管理任务，并强制影响数据库的复杂业务规则

### 4. 触发器的缺点有哪些？

答：触发器的缺点包括：
- 如果触发频率高，占用内存，降低数据访问速度
- 相对不灵活，一旦触发马上执行，不能排除特殊情况
- 过度使用也会造成数据库的维护困难

### 5. 触发器的使用原则是什么？

答：触发器的使用原则包括：
- 触发器只能针对表级别的事件，不能针对行级别的事件
- 触发器不能嵌套使用
- 触发器的执行语句必须是原子性的，即不能包含多个SQL语句
- 触发器的执行语句不能对触发器所针对的表进行修改操作，否则会导致死循环
- 触发器的执行效率较低，应该尽量避免过多使用触发器

### 6. 触发器的创建语法四要素是什么？

答：触发器创建语法四要素：
- **触发地点（TABLE）**：触发器对哪个表起作用
- **触发事件（INSERT/UPDATE/DELETE）**：在对表执行什么操作时触发
- **触发时间（AFTER/BEFORE）**：在表执行相应操作前还是操作后触发
- **触发器程序体（BEGIN…END）**：触发后执行的动作

### 7. 每个表最多支持多少种触发器？

答：每个表的每个事件每次只允许一个触发器，因此每个表最多支持6种触发器：
- BEFORE INSERT、BEFORE UPDATE、BEFORE DELETE
- AFTER INSERT、AFTER UPDATE、AFTER DELETE

单一触发器不能与多个事件或多个表关联。

### 8. CREATE TRIGGER语句的语法格式是什么？

答：CREATE TRIGGER语句的语法格式：

```sql
CREATE TRIGGER <触发器名> <BEFORE | AFTER>
<INSERT | UPDATE | DELETE>
ON <表名> FOR EACH ROW
<触发器主体>
```

参数说明：
- 触发器名在当前数据库中必须唯一
- INSERT/UPDATE/DELETE为触发事件，指定激活触发器的语句种类
- BEFORE和AFTER指定触发时刻，BEFORE在激活语句之前触发，AFTER在之后触发
- 表名必须是永久性表，不能与临时表或视图关联
- FOR EACH ROW表示行级触发，对受影响的每一行都激活触发器
- 触发器主体包含要执行的MySQL语句，多条语句使用BEGIN…END

### 9. BEFORE和AFTER触发时机的区别是什么？如何选择？

答：
- **BEFORE**：在激活触发器的语句执行之前触发。适用于需要验证新数据是否满足条件的场景
- **AFTER**：在激活触发器的语句执行之后触发。适用于需要在语句执行完成后进行级联操作的场景

例如，插入前验证年龄使用BEFORE INSERT；更新学号后同步更新关联表使用AFTER UPDATE。

### 10. NEW和OLD关键字的作用是什么？

答：在触发器中，NEW和OLD关键字用于引用触发事件影响的行数据：
- **NEW**：在INSERT和UPDATE触发器中，表示新插入或更新后的行数据。可以通过 `NEW.字段名` 访问新值
- **OLD**：在UPDATE和DELETE触发器中，表示更新前或删除前的原始行数据。可以通过 `OLD.字段名` 访问旧值

例如：`IF NEW.Stuage > 20 THEN SET NEW.Stuage = 20; END IF;` 在插入前检查并修改新记录的年龄值。

### 11. FOR EACH ROW的作用是什么？

答：FOR EACH ROW表示行级触发，对于受触发事件影响的每一行都要激活触发器的动作。例如，使用INSERT语句向某个表中插入多行数据时，触发器会对每一行数据的插入都执行相应的触发器动作。这是MySQL触发器的标准设置，MySQL目前只支持行级触发器。

### 12. 如何创建BEFORE INSERT触发器？请举例说明。

答：创建BEFORE INSERT触发器示例，在student表上创建触发器，要求插入的学生记录年龄必须小于20岁，如果年龄大于20岁则在插入前修改为20：

```sql
CREATE TRIGGER stu_beforeinsert BEFORE INSERT ON student
FOR EACH ROW
BEGIN
    IF NEW.Stuage > 20 THEN
        SET NEW.Stuage = 20;
    END IF;
END;
```

其中 `NEW.Stuage` 表示student表中新增记录的Stuage值。插入年龄为22和21的学生时，触发器自动将年龄改为20。

### 13. 如何创建AFTER UPDATE触发器实现级联更新？

答：创建AFTER UPDATE触发器示例，当student表的StuID更新时，同步更新score表中的StuID：

```sql
CREATE TRIGGER stu_afterupdate AFTER UPDATE
ON student FOR EACH ROW
BEGIN
    UPDATE score SET StuID = NEW.StuID;
END;
```

创建后，修改student表中学号时，score表中对应的学号也会自动更新，实现级联更新效果。

### 14. 触发器主体中使用BEGIN...END的作用是什么？

答：当触发器主体需要执行多条SQL语句时，使用BEGIN…END复合语句结构将多条语句包裹起来。格式：

```sql
BEGIN
    SQL语句1;
    SQL语句2;
    ...
END;
```

BEGIN…END中的语句按顺序执行，可以使用IF条件判断、变量赋值等流程控制语句，实现复杂的触发器逻辑。
