---
title: 任务一 创建数据库
description: 数据库原理与应用技术《MySQL》项目四 MySQL数据库管理 任务一 创建数据库知识点总结。掌握使用CREATE DATABASE语句和Navicat管理工具创建数据库的方法，理解字符集和校对规则的概念与选择。
keywords: [MySQL, CREATE DATABASE, 创建数据库, 字符集, 校对规则, CHARACTER SET, COLLATE, IF NOT EXISTS, Navicat, utf8mb4, gbk, 对口升学]
sidebar_label: 任务一 创建数据库
sidebar_position: 1
slug: /mysql/proj4/task1-create-database
tags: [MySQL, 项目四, 任务一, 对口升学]
---

## 知识点

### 1.什么是创建数据库？创建数据库的语法格式是什么？

答：创建数据库就是在数据库系统中划分一块存储数据的空间，用于存放数据库中的数据对象。MySQL中创建数据库的基本语法格式为：

```
CREATE {DATABASE|SCHEMA} [IF NOT EXISTS] <数据库名>
    [[DEFAULT] CHARACTER SET [=] <字符集名>]
    [[DEFAULT] COLLATE [=] <排序规则名>]
```

其中DATABASE和SCHEMA功能一样，都是创建数据库。大括号"{}"表示必选项，中括号"[]"表示可选项，竖线"|"表示任选其中一项。

### 2.数据库名命名时需要遵循哪些规则？

答：（1）可以是字母、数字、下划线（_）和"$"组成的任意字符串，但不能以纯数字命名。例如：db_order1、$db_order2是合法的，而1122、db\\order5是非法的。
（2）不能与其他数据库重名，并且在Windows系统下不区分大小写。例如：若已创建db_shop，就不可以再创建db_SHOP或DB_SHOP。
（3）不能使用MySQL关键字作为数据库名。如CREATE、ALTER、DROP、SELECT、FOR、LIKE等都是关键字，如果作为数据库名系统会报错。一般习惯使用具有实际意义的名字，如学生管理系统命名为db_student。

### 3.IF NOT EXISTS选项的作用是什么？

答：如果已经存在某个数据库，再创建一个同名的数据库且没有指定IF NOT EXISTS时，系统会报错（ERROR 1007: Can't create database; database exists）。在创建数据库时添加IF NOT EXISTS，表示指定的数据库不存在时执行创建操作，否则忽略本次操作。即使创建不成功，系统也不报错，只给出警告信息。建议在书写CREATE DATABASE命令时不要省略IF NOT EXISTS。

### 4.什么是字符集？MySQL常见的字符集有哪些？

答：字符集（Character Set，Charset）即字符的编码规则。MySQL支持几乎所有的常见字符集，还可以在同一台服务器、同一个数据库，甚至同一个表的不同字段指定不同的字符集。常见字符集包括：

| 字符集 | 单字符最大长度 | 说明 |
|--------|-------------|------|
| ASCII | 7 bit | 早期西文编码，最多128个西文字符，不支持汉字 |
| Latin1 | 1字节 | 支持西欧字符、希腊字符等 |
| gb2312 | 2字节 | 早期汉字编码标准 |
| gbk | 2字节 | gb2312的扩展，支持简繁中文、日文、韩文等 |
| utf8 | 3字节 | 世界上大部分国家的文字 |
| utf8mb4 | 4字节 | 支持中文和表情包、emoji表情 |

支持的语言越多，单字符占用的存储空间越大。如果使用英文字符较多且不需要表情包，建议使用utf8以节省空间。MySQL 5.7默认字符集为latin1，MySQL 8.0默认字符集为utf8mb4。

### 5.什么是校对规则？校对规则的命名规则是什么？

答：校对规则（Collation）是在同一个字符集内字符之间的比较规则。一个字符集可能有一个或多个校对规则。

校对集的名称由"_"分隔的3部分组成：开头是对应的字符集，中间是国家名或general，结尾是ci、cs或bin。其中：
- _ci表示不区分大小写（case insensitive）
- _cs表示区分大小写（case sensitive）
- _bin表示以二进制方式比较

例如：校对规则"utf8_general_ci"下，字符"m"和"M"是一样的。

### 6.DEFAULT CHARACTER SET和DEFAULT COLLATE选项的作用是什么？

答：（1）DEFAULT CHARACTER SET：为创建的数据库指定字符集。以该数据库创建的表的字符集会默认为数据库的字符集，表中各字段的字符集也会默认为数据库的字符集。若仅指定字符集不指定校对规则，表示使用该字符集默认的校对规则。

（2）DEFAULT COLLATE：为创建的数据库指定校对规则。若仅指定校对规则不指定字符集，表示使用该校对规则对应的字符集。

### 7.创建数据库后系统会生成什么文件？

答：创建数据库后，系统自动在MySQL缺省安装路径（如C:\\ProgramData\\MySQL\\MySQL Server 5.7\\Data）下创建一个与数据库名相同的文件夹，其中包含一个名称为db.opt的文件，用于存储缺省字符集和缺省字符集的校对规则等。例如用记事本打开db.opt文件，可能显示：
```
Default-character-set=latin1
Default-collation=latin1_swedish_ci
```
表示该数据库的默认字符集为latin1，校对规则为latin1_swedish_ci。

### 8.如何查看系统可用的字符集和校对规则？

答：（1）查看系统可用的字符集：使用命令 `SHOW CHARACTER SET` 或 `SHOW CHARSET`。
（2）查看MySQL服务器默认使用的字符集：使用命令 `SHOW VARIABLES LIKE 'character%'`。
（3）查看系统可用的校对规则：使用命令 `SHOW COLLATION`。
（4）查看特定字符集的匹配规则：如 `SHOW COLLATION LIKE 'utf8%'` 查看utf8相关字符集的校对规则。

### 9.如何使用Navicat创建数据库？

答：（1）打开Navicat控制台。
（2）双击连接对象（或右击选择"打开连接"），展开查看数据库列表。
（3）右击连接对象（或右击任意数据库），在快捷菜单中选择"新建数据库"。
（4）在弹出的"新建数据库"对话框中，指定"数据库名"、"字符集"和"排序规则"。
（5）单击"确定"按钮完成创建。

### 10.在Navicat中如何使用SQL语句创建数据库？

答：（1）双击Navicat中的连接对象，连接MySQL数据库服务器。
（2）单击Navicat工具栏"查询"按钮。
（3）单击"新建查询"按钮，生成一个"无标题-查询"选项卡。
（4）在查询选项卡中输入CREATE DATABASE语句，选中并单击"运行已选择的"按钮，执行成功后"消息"栏显示"OK"标记。
（5）按"F5"键刷新，可在数据库列表中查看新建的数据库。

### 11.创建数据库时如何同时指定字符集和校对规则？

答：在CREATE DATABASE语句中使用DEFAULT CHARACTER SET和DEFAULT COLLATE子句同时指定。例如：

```sql
CREATE DATABASE db_shop
    DEFAULT CHARACTER SET gb2312
    DEFAULT COLLATE gb2312_chinese_ci;
```

如果只指定字符集不指定校对规则，系统会自动使用该字符集默认的校对规则；如果只指定校对规则不指定字符集，系统会自动使用该校对规则对应的字符集。
