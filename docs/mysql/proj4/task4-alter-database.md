---
title: 任务四 修改数据库
description: 数据库原理与应用技术《MySQL》项目四 MySQL数据库管理 任务四 修改数据库知识点总结。掌握使用ALTER DATABASE语句和Navicat管理工具修改数据库字符集和校对规则的方法，理解修改数据库的注意事项。
keywords: [MySQL, ALTER DATABASE, 修改数据库, 字符集修改, 校对规则修改, SHOW VARIABLES, Navicat编辑数据库, utf8mb4, 对口升学]
sidebar_label: 任务四 修改数据库
sidebar_position: 4
slug: /mysql/proj4/task4-alter-database
tags: [MySQL, 项目四, 任务四, 对口升学]
---

## 知识点

### 1.修改数据库的语法格式是什么？

答：修改数据库参数使用ALTER命令，语法格式为：
```
ALTER {DATABASE|SCHEMA} [<数据库名>]
    [[DEFAULT] CHARACTER SET [=] <字符集名>]
    [[DEFAULT] COLLATE [=] <排序规则名>]
```

语法说明：
（1）`<数据库名>`：指定要修改的数据库。可以省略，表示修改当前（默认）数据库。
（2）CHARACTER SET和COLLATE的功能与CREATE DATABASE语句中相同。
（3）此语句不能实现修改数据库名。
（4）使用ALTER命令时，用户必须具有对数据库进行修改的权限。

### 2.修改数据库时可以修改哪些内容？不能修改哪些内容？

答：可以修改的内容：数据库的字符集（CHARACTER SET）和校对规则（COLLATE）。

不能修改的内容：数据库名称。ALTER DATABASE语句不能实现修改数据库名。在Navicat的"编辑数据库"对话框中，数据库名称显示为灰色，也说明不能通过此方法修改数据库名称。

### 3.如何修改数据库的字符集和校对规则？

答：使用ALTER DATABASE语句。例如将数据库db_student的字符集改为utf8mb4，校对规则改为utf8mb4_general_ci：
```sql
ALTER DATABASE db_student
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_general_ci;
```
执行后显示"Query OK, 1 row affected"表示修改成功。

### 4.只修改字符集不指定校对规则时会怎样？

答：如果只修改字符集不指定校对规则，系统会自动更新数据库的校对规则为该字符集对应的默认校对规则。例如将数据库db_shop的字符集修改为gbk但不指定校对规则，系统自动将校对规则更新为gbk_chinese_ci。

### 5.只修改校对规则不指定字符集时会怎样？

答：如果只修改校对规则不指定字符集，系统会自动更新数据库的字符集为该校对规则对应的字符集。例如将数据库db_financial的校对规则修改为utf8_general_ci但不指定字符集，系统自动将字符集更新为utf8。

### 6.如何查看数据库的字符集和校对规则？

答：可以使用以下命令查看：
（1）查看当前库的校对规则：`SHOW VARIABLES LIKE 'collation%'`
（2）查看当前库的字符集：`SHOW VARIABLES LIKE 'character_set_database'`

查看前需要先用USE语句选择要查看的数据库为当前数据库。

### 7.如何使用Navicat修改数据库？

答：（1）打开Navicat控制台，双击展开连接对象。
（2）在要修改的数据库对象上右击鼠标，选择快捷菜单中的"编辑数据库"命令。
（3）在弹出的"编辑数据库"对话框中，修改"字符集"和"排序规则"。
（4）单击"确定"按钮完成修改。

注意：对话框中数据库名称显示为灰色，说明只能修改字符集和排序规则，不能修改数据库名称。

### 8.在Navicat中如何使用SQL语句修改数据库？

答：（1）双击Navicat控制台中的连接对象。
（2）单击工具栏"新建查询"按钮。
（3）在"无标题-查询"选项卡中输入ALTER DATABASE语句，例如：
```sql
ALTER DATABASE db_student
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_general_ci;
```
（4）选中并单击"运行已选择的"按钮，执行后"消息"栏显示OK标记说明修改成功。

### 9.为什么在实际开发中不建议随意修改数据库？

答：在实际软件开发中，由于数据库中包含大量数据，修改数据库（特别是修改字符集）的成本很高，可能导致数据不一致或乱码等问题。因此不建议随意对数据库进行修改。这要求开发人员在前期做好需求分析和系统设计，提前选择合适的字符集和校对规则，避免后期频繁修改。
