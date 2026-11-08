---
title: 任务二 查看数据库
description: 数据库原理与应用技术《MySQL》项目四 MySQL数据库管理 任务二 查看数据库知识点总结。掌握使用SHOW DATABASES和SHOW CREATE DATABASE语句查看数据库列表和数据库详细信息的方法，了解MySQL系统数据库的作用。
keywords: [MySQL, SHOW DATABASES, SHOW CREATE DATABASE, 查看数据库, 系统数据库, information_schema, performance_schema, mysql, sys, LIKE模糊查询, Navicat, 对口升学]
sidebar_label: 任务二 查看数据库
sidebar_position: 2
slug: /mysql/proj4/task2-show-database
tags: [MySQL, 项目四, 任务二, 对口升学]
---

## 知识点

### 1.查看数据库有哪两种语法格式？

答：（1）查看当前用户权限范围内所能查看到的所有数据库名称：
```
SHOW {DATABASES|SCHEMAS}
```

（2）查看创建的指定数据库信息（包括创建语句和字符集）：
```
SHOW CREATE DATABASE <数据库名>
```

### 2.SHOW DATABASES命令的执行结果是什么？

答：执行SHOW DATABASES命令后，会显示当前MySQL服务器下的所有数据库列表。例如：
```
mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| db_student         |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
```
其中用户创建的数据库（如db_student）称为用户数据库，其他4个是MySQL安装时自动创建的，称为系统数据库。

### 3.MySQL有哪些系统数据库？各自的作用是什么？

答：（1）mysql：数据库服务器的核心数据库，主要负责存储数据库的用户、权限设置、关键字等MySQL服务器自己需要使用的控制和管理信息，如用户访问权限等。
（2）information_schema：信息数据库，是MySQL服务器的数据字典，保存关于MySQL服务器所维护的其他所有数据库和数据表的信息，如数据库名、数据表、表字段的数据类型与访问权限等。
（3）performance_schema：MySQL服务器的性能字典，主要用于收集数据库服务器性能参数，保存全局变量等的设置，其存储引擎会监视MySQL服务的事件。
（4）sys：系统数据库，通过它可快速了解系统的数据信息，包括存储过程、自定义函数等，用户可利用该数据库进行测试工作。

注意：系统数据库存放了重要信息，不能随意删除和修改，否则易导致MySQL数据库系统不能正常工作。

### 4.如何查看指定数据库的创建信息和字符集？

答：使用 `SHOW CREATE DATABASE <数据库名>` 命令。例如：
```
mysql> SHOW CREATE DATABASE db_student;
```
执行结果显示创建该数据库的SQL语句以及默认字符集。例如输出结果中的Create Database列显示：`CREATE DATABASE \`db_student\` /*!40100 DEFAULT CHARACTER SET latin1 */`，表示该数据库的默认字符集为latin1。

### 5.如何在众多数据库中进行模糊查询筛选？

答：可以使用LIKE通配符进行模糊查询。例如筛选以db_开头的数据库：
```
SHOW DATABASES LIKE 'db_%';
```
其中LIKE是模糊查询，%为通配符，表示零个或多个不确定个数的字符。

### 6.如何使用Navicat查看数据库？

答：（1）打开Navicat控制台。
（2）双击连接对象（或右击选择"打开连接"），即可展开查看MySQL数据库服务器中的数据库列表，相当于执行SHOW DATABASES语句。

在Navicat控制台中也可以使用SHOW语句查看数据库列表和指定数据库信息：单击工具栏"新建查询"按钮，在查询选项卡中输入SHOW DATABASES或SHOW CREATE DATABASE语句，选中并运行即可。

### 7.用户数据库和系统数据库有什么区别？

答：用户数据库是由用户根据实际需求手动创建的数据库（如db_student、db_shop等），用于存储特定应用的数据。系统数据库是MySQL安装时自动创建的数据库（包括mysql、information_schema、performance_schema、sys），用于存储MySQL服务器自身运行所需的管理信息、数据字典、性能参数等。系统数据库不能随意删除和修改，否则会导致MySQL系统不能正常工作。
