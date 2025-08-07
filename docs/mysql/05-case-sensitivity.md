---
noteId: "0799a41072d711f0ad982d3ab7f75a03"
tags: []

---

## 大小写敏感

数据库名和表名：建议小写

- windows、MAC系统：不区分大小写
- linux系统：区分大小写。

MySQL语句：任何平台都不区分大小写，但是但建议大写。


```mysql
CREATE DATABASE db1;
```

等价于

```mysql
create database db1;
```

## 命令分类

MySQL中的命令分为两大类：

- mysql客户端命令 (可以小写，末尾分号可加可不加)
- MySQL语句命令（建议大写）