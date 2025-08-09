---
noteId: "f6bb1ce0481b11f0a6929b02b627d898"
tags: []

---

## 方法1: 使用MySQL自带的命令行工具

打开后直接输入密码即可登录

语法

```mysql
mysql -u root -p123456
```

提示：当你看到
```
Welcome to the MySQL monitor
```
的时候，就表示登录成功。

## 方法2：使用cmd命令行工具登录

```mysql
# 第一步：进入bin目录
cd C:\Program Files\MySQL\MySQL Server 8.4\bin
# 第二步：输入登录指令
mysql -u root -p123456
```



## 退出MySQL
语法

```sql
exit
```

或
```mql
quit
```

## 练习1:登录退出

要求：

1. 使用CMD命令行工具登录mysql
2. 登录成功后，再退出mysql
3. 反复操作三次。

参考答案

```sql
cd C:\Program Files\MySQL\MySQL Server 8.4\bin
mysql -u root -p123456
```
