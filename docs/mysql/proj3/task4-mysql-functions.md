---
title: 任务四 MySQL函数
description: 数据库原理与应用技术《MySQL》项目三 MySQL基础知识 任务四 MySQL函数知识点总结。掌握MySQL聚合函数、数学函数、字符串函数、日期和时间函数、系统信息函数和条件控制函数的格式、功能及使用方法，学会灵活运用函数提高数据库管理效率。
keywords: [MySQL, MySQL函数, 聚合函数, COUNT, SUM, AVG, MAX, MIN, 数学函数, ABS, ROUND, 字符串函数, CONCAT, SUBSTRING, 日期函数, NOW, CURDATE, 系统信息函数, IF, IFNULL, 对口升学]
sidebar_label: 任务四 MySQL函数
sidebar_position: 4
slug: /mysql/proj3/task4-mysql-functions
tags: [MySQL, 项目三, 任务四, 对口升学]
---

## 知识点

### 1.MySQL函数按功能分为哪几类？

答：MySQL提供的系统函数从功能上主要分为6类：
（1）聚合函数：用于SELECT语句中，对一组数据求出一个值，如COUNT、SUM、AVG、MAX、MIN。
（2）数学函数：主要用来处理数值数据的运算，如ABS、ROUND、SQRT、CEIL、FLOOR、RAND等。
（3）字符串函数：主要用来处理字符串数据，如UPPER、LOWER、LEFT、RIGHT、SUBSTRING、CONCAT、TRIM等。
（4）日期和时间函数：用来处理日期和时间数据，如NOW、CURDATE、YEAR、MONTH、DAY等。
（5）系统信息函数：用来查询MySQL的系统信息，如VERSION、DATABASE、USER等。
（6）条件控制函数：用于条件判断，如IF、IFNULL。

### 2.常用的聚合函数有哪些？它们的功能是什么？

答：（1）COUNT(*|[DISTINCT] expr)：返回检索出来的非NULL值的行的数目。参数为"*"时返回满足条件的行数目（不管列值是否包含NULL）；与DISTINCT配合使用表示先去掉重复值再统计个数。
（2）SUM([DISTINCT] expr)：返回expr列的总和。
（3）AVG([DISTINCT] expr)：返回expr列的平均值。
（4）MAX([DISTINCT] expr)：返回expr列的最大值。
（5）MIN([DISTINCT] expr)：返回expr列的最小值。

说明：除COUNT(*)外，聚合函数的结果值只根据选定数据行中非NULL的值进行计算，NULL值将被忽略。

### 3.常用的数学函数有哪些？它们的功能是什么？

答：（1）SIGN(n)：符号函数，正数返回1，负数返回-1，0返回0。
（2）ABS(n)：绝对值函数。
（3）SQRT(n)：平方根函数（n为非负数，负数返回NULL）。
（4）MOD(n1,n2)：返回n1除以n2的余数。
（5）CEIL(n)或CEILING(n)：向上取整，返回大于等于n的最小整数。
（6）FLOOR(n)：向下取整，返回小于等于n的最大整数。
（7）RAND()：返回[0,1)之间的随机数。
（8）RAND(n)：返回[0,1)之间的随机数，n值不变则每次返回相同随机数。
（9）ROUND(n)：将n四舍五入取整。
（10）ROUND(n1,n2)：将n1四舍五入保留n2位小数。
（11）FORMAT(n1,n2)：将n1四舍五入保留n2位小数，并格式化为以逗号分隔的数字序列，结果以字符串返回。
（12）TRUNCATE(n1,n2)：将n1保留n2位小数，直接截断不四舍五入。
（13）POW(n1,n2)或POWER(n1,n2)：返回n1的n2次方。
（14）EXP(n)：返回e的n次方。
（15）LOG(n)：返回自然对数Ln。
（16）LOG10(n)：返回常用对数Log10。
（17）PI()：返回圆周率3.141593。
（18）GREATEST(x1,x2,…):返回列表中的最大值。
（19）LEAST(x1,x2,…):返回列表中的最小值。

### 4.ROUND、FORMAT和TRUNCATE函数有什么区别？

答：（1）ROUND(n1,n2)和FORMAT(n1,n2)都是四舍五入保留n2位小数。区别是FORMAT会将结果格式化为以逗号分隔的数字序列（如1,234,568.613），且结果以字符串形式返回。
（2）TRUNCATE(n1,n2)是直接截断保留n2位小数，不进行四舍五入。
（3）当n2为负数时，ROUND按四舍五入在整数位进行舍入，TRUNCATE在整数位进行截断，FORMAT按四舍五入在整数位进行舍入并格式化。

### 5.常用的字符串函数有哪些？它们的功能是什么？

答：（1）UPPER(c)或UCASE(c)：将字符串c的所有字母变成大写。
（2）LOWER(c)或LCASE(c)：将字符串c的所有字母变成小写。
（3）LEFT(c,n)：返回字符串c的前n个字符。
（4）RIGHT(c,n)：返回字符串c的后n个字符。
（5）SUBSTRING(c,n1,n2)或MID(c,n1,n2)：获取从字符串c第n1个位置开始的长度为n2的子串。
（6）LTRIM(c)：删除字符串c的前导空格。
（7）RTRIM(c)：删除字符串c的尾部空格。
（8）TRIM(c)：删除字符串c前导和尾部的空格。
（9）REVERSE(c)：将字符串c的顺序反过来。
（10）CONCAT(c1,c2,…)：将多个字符串合并为一个，任何一个参数为NULL则结果返回NULL。
（11）CONCAT_WS(x,c1,c2,…)：使用连接符x来连接每个字符串。
（12）CHAR_LENGTH(c)：返回字符串c的字符数，一个汉字算一个字符。
（13）LENGTH(c)：返回字符串c的字节长度，gbk中一个汉字占2字节，utf8中占3字节。
（14）REPLACE(c,c1,c2)：用c2替换c中的c1。
（15）INSERT(c,n1,n2,c2)：用c2替换c中从第n1个位置开始的长度为n2的字符串。
（16）REPEAT(c,n)：将字符串c重复n次。
（17）SPACE(n)：返回n个空格。
（18）STRCMP(c1,c2)：比较字符串大小，c1`>`c2返回1，c1=c2返回0，c1`<`c2返回-1。

### 6.CHAR_LENGTH和LENGTH函数有什么区别？

答：CHAR_LENGTH(c)返回字符串c的字符数，不论西文、空格还是中文字符，都按一个字符统计。LENGTH(c)返回字符串c的字节长度，一个字符在不同字符集所占的字节长度不同。例如字符串'hello 你好'，CHAR_LENGTH返回8（5个西文字符+空格+2个汉字=8个字符），而在gbk字符集下LENGTH返回10（西文和空格各1字节，每个汉字2字节，共5+1+2×2=10字节）。

### 7.SUBSTRING函数的用法有哪些？

答：SUBSTRING(c,n1,n2)获取从字符串c第n1个位置开始的长度为n2的子串。如果省略n2，即SUBSTRING(c,n1)，则获取从第n1个位置开始到字符串末尾的所有字符。如果n2大于从n1位置开始剩余的字符数，则返回从n1开始到末尾的所有字符。MID函数与SUBSTRING功能相同。

### 8.常用的日期和时间函数有哪些？

答：（1）CURDATE()或CURRENT_DATE()：返回当前日期。
（2）CURTIME()或CURRENT_TIME()：返回当前时间。
（3）NOW()或CURRENT_TIMESTAMP()或SYSDATE()或LOCALTIME()或LOCALTIMESTAMP()：返回当前日期和时间。
（4）DATE(d)：返回日期或日期时间表达式中的日期值。
（5）TIME(t)：返回日期时间表达式中的时间值。
（6）YEAR(d)：返回日期d中的年份值。
（7）MONTH(d)：返回日期d中的月份值（1~12）。
（8）DAY(d)：返回日期d中的日期值（1~31）。
（9）MONTHNAME(d)：返回日期d对应的月份英文全称。
（10）DAYNAME(d)：返回日期d对应的星期英文全称。
（11）DAYOFYEAR(d)：返回日期d是本年的第几天。
（12）DAYOFWEEK(d)：返回日期d是本星期的第几天（1~7，星期日是第1天）。
（13）WEEK(d) / WEEKOFYEAR(d)：返回日期d是本年的第几周（1~53）。
（14）QUARTER(d)：返回日期d是本年的第几个季度（1~4）。
（15）HOUR(t) / MINUTE(t) / SECOND(t)：返回时间中的小时、分钟、秒钟值。
（16）ADDDATE(d,n)：返回日期d加上n天后的日期。
（17）SUBDATE(d,n)：返回日期d减去n天后的日期。
（18）DATEDIFF(d1,d2)：计算日期d1与d2之间相差的天数。

### 9.DATETIME类型和TIMESTAMP类型有什么区别？在实际应用中如何选择？

答：DATETIME占8字节，取值范围'1000-01-01 00:00:00'~'9999-12-31 23:59:59'，不支持时区，使用方便但不便于计算。TIMESTAMP占4字节，取值范围'1970-01-01 00:00:01 UTC'~'2038-01-19 03:14:07 UTC'，支持时区。

在实际项目开发中，DATETIME类型取值范围最大、使用方便，用得较多。但存储注册时间、商品发布时间等字段时，不建议使用DATETIME类型，而是使用TIMESTAMP时间戳类型。出生日期、退休日期等可以定义为DATE类型，出生年、入职年、毕业年等可以定义为YEAR类型。

### 10.常用的系统信息函数有哪些？

答：（1）VERSION()：返回MySQL版本号。
（2）DATABASE()或SCHEMA()：返回当前数据库名。
（3）USER()或SYSTEM_USER()或SESSION_USER()或CURRENT_USER()：返回当前登录的用户名。
（4）CHARSET(c)：返回字符串c的字符集。
（5）COLLATION(c)：返回字符串c的字符排列方式。
（6）CONNECTION_ID()：返回当前客户连接服务器的次数。
（7）LAST_INSERT_ID：返回最近生成的AUTO_INCREMENT值。

### 11.IF函数和IFNULL函数的格式和功能是什么？

答：（1）IF(expr,x1,x2)：条件判断函数，如果表达式expr成立，返回x1的值，否则返回x2的值。例如：IF('A'`<`'a','yes','no')返回'no'。

（2）IFNULL(x1,x2)：条件判断函数，如果表达式x1不为空（不为NULL），返回x1的值，否则返回x2的值。例如：IFNULL(NULL,'NULL4')返回'NULL4'，IFNULL(0,'NULL3')返回0（因为0不为NULL）。

### 12.如何在指定区间[min,max)内生成随机整数？

答：使用表达式 FLOOR(min+RAND()*(max-min)) 可以获取[min,max)范围内的随机整数。例如：FLOOR(1+RAND()*(100-1)) 生成1到100（不包括100）之间的随机整数，每次执行结果都不同。若要获得相同的随机数，可以使用RAND(n)，只要参数n的值固定，每次产生的随机数也固定。
