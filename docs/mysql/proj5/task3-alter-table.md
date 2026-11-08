---
title: 任务三 修改数据表结构
description: 数据库原理与应用技术《MySQL》项目五 MySQL数据表管理 任务三 修改数据表结构知识点总结。掌握使用ALTER TABLE语句和Navicat管理工具修改数据表结构的方法，包括添加字段、修改字段类型、删除字段、重命名表等操作。
keywords: [MySQL, ALTER TABLE, ADD, MODIFY, CHANGE, DROP, RENAME, 修改表结构, 添加字段, 删除字段, Navicat设计表, 对口升学]
sidebar_label: 任务三 修改数据表结构
sidebar_position: 3
slug: /mysql/proj5/task3-alter-table
tags: [MySQL, 项目五, 任务三, 对口升学]
---

## 知识点

### 1.修改数据表结构使用什么语句？语法格式是什么？

答：修改表结构使用ALTER TABLE语句，语法格式为：
```
ALTER TABLE <表名>
    ADD 字段名 数据类型 [属性][索引][FIRST | AFTER 字段名] |
    MODIFY 字段名 数据类型 [属性][索引] |
    CHANGE 字段名 新字段名 数据类型 [属性][索引] |
    DROP 字段名 |
    AUTO_INCREMENT=N |
    RENAME [AS|TO] 新表名 |
    ENGINE=更改后的存储引擎名称 |
    CHARSET=更改后的字符集名称 |
    COLLATE=更改后的校验规则名称
```

### 2.ALTER TABLE语句中各子句的作用是什么？

答：（1）ADD：添加一个新的字段。如果没有指定FIRST或AFTER，则在表的列尾添加；指定FIRST则在列头添加；指定AFTER 字段名则在该字段后面添加。
（2）MODIFY：更改指定字段的数据类型等属性，但不改变字段名。
（3）CHANGE：更改指定字段的数据类型等属性，同时可以更改字段名。
（4）DROP：删除指定的字段。
（5）AUTO_INCREMENT=N：设置AUTO_INCREMENT的初始值。
（6）RENAME AS|TO：给数据表重新命名。
（7）ENGINE：修改表的存储引擎。
（8）CHARSET：修改表的字符集。
（9）COLLATE：修改表的校验规则。

### 3.MODIFY和CHANGE有什么区别？

答：MODIFY用于更改指定字段的数据类型等属性，但不能更改字段名。CHANGE也可以更改字段的数据类型等属性，同时还可以更改字段名为新的名称。也就是说，CHANGE比MODIFY多了一个更改字段名的功能。

### 4.如何添加新字段？可以指定位置吗？

答：使用ALTER TABLE的ADD子句添加新字段。格式为：
```
ALTER TABLE <表名> ADD 字段名 数据类型 [属性][FIRST | AFTER 字段名]
```
如果没有指定FIRST或AFTER，新字段添加在表的列尾。指定FIRST则在列头添加，指定AFTER 字段名则在指定字段后面添加。

例如：在学生表student中Stusex字段后面添加出生日期字段：
```sql
ALTER TABLE student ADD Birthday DATE AFTER Stusex;
```

### 5.如何修改字段的数据类型？

答：使用ALTER TABLE的MODIFY子句。例如将学生表student中Stuname的长度修改为VARCHAR(20)：
```sql
ALTER TABLE student MODIFY Stuname VARCHAR(20);
```

### 6.如何使用ALTER TABLE重命名表？

答：使用ALTER TABLE的RENAME子句。例如将学生表student改名为studentbak：
```sql
ALTER TABLE student RENAME TO studentbak;
```

### 7.如何使用Navicat修改数据表结构？

答：（1）在Navicat中双击展开连接对象，双击打开数据库。
（2）在数据表列表中要修改的表上右击鼠标，选择"设计表"命令（或单击工具栏上的"设计表"按钮），打开表结构设计窗口。
（3）在该窗口中可以添加字段、插入字段、删除字段，可以修改字段的名称、数据类型、数据长度、是否允许为空值等。
（4）修改完成后，单击工具栏上的"保存"按钮即可。

### 8.修改表结构主要包括哪些操作？

答：修改表结构主要包括以下操作：
（1）添加新的字段（ADD）。
（2）修改原有字段的数据类型和属性（MODIFY）。
（3）更改原有字段的名称和数据类型（CHANGE）。
（4）删除原有的字段（DROP）。
（5）重命名表（RENAME）。
（6）修改存储引擎（ENGINE）。
（7）修改字符集（CHARSET）和校验规则（COLLATE）。
