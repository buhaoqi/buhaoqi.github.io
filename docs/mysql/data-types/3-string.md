---
noteId: "3744f0f073e711f0ac7f012540a4f7e6"
tags: []

---

字符串(ENUM)

用途：`ENUM ()`用于表示字符串值列表。它允许你从预定义的值列表中选择一个值。

语法

```sql
ENUM('值1', '值2', '值3', ...)
```

参数：值是一个字符串，必须用引号包裹。

示例

```sql
CREATE TABLE users (
    gender ENUM("男","女"),
    week ENUM("星期一","星期二","星期三"),
    cup ENUM("大杯","中杯","小杯"),
    order ENUM("待支付","支付完成","待收货","已完成")
);
```

应用场景：适合存储长度变化的字符串，比如: 用户名、电子邮箱地址等

> ENUM() 创建字符串数据类型（字符串值列表）
>
> 1. enumurate 翻译为”枚举“。
> 2. ”举"就是列举
> 3. ”枚“的本意是“树干”
> 4. ”枚“作量词的意思是：”个”
> 5. ”枚“作副词的意思是：“逐个”
> 6. “枚举”的意思是：逐个列举，但是每次只能取一个。简单说就是：多选一
字符串(VARCHAR)

用途：`VARCHAR()`用于表示长度变化的字符串。

语法

```sql
VARCHAR(n)
```

参数：n表示一个整数，用于规定字符串的最大长度。

示例

```sql
CREATE TABLE users (
    user_name VARCHAR(20),
    email VARCHAR(255) NOT NULL
);
```

应用场景：适合存储长度变化的字符串，比如: 用户名、电子邮箱地址等

1. 短字符串

| 类型         | 最大长度  | 存储方式        | 特点                       | 应用场景               |
| ------------ | --------- | --------------- | -------------------------- | ---------------------- |
| `CHAR(N)`    | 255字符   | 固定长度        | 尾部空格自动去除           | 固定长度数据（如MD5）  |
| `VARCHAR(N)` | 65535字节 | 变长 + 长度前缀 | 节省空间，但更新可能碎片化 | 用户名、地址等变长数据 |

**性能对比**：

- `CHAR(10)` vs `VARCHAR(10)` 存储"abc"：
  - CHAR占用10字节（补空格）
  - VARCHAR占用3字节 + 1字节长度前缀

---

2. 长文本与二进制

| 类型         | 最大长度       | 特点                              |
| ------------ | -------------- | --------------------------------- |
| `TEXT`       | 64KB (L+2字节) | 纯文本，字符集相关                |
| `MEDIUMTEXT` | 16MB           | 长文章、JSON字符串（MySQL 5.7前） |
| `LONGTEXT`   | 4GB            | 超长文本                          |
| `BLOB`       | 同TEXT系列     | 存储二进制数据（如图片、文件）    |

**注意事项**：

- TEXT/BLOB字段会使用外部存储，避免`SELECT *`全量读取
- 大字段建议拆分到独立表（优化查询性能）


## 1.查询字节长度

length()

用途：查询字符的字节长度。

语法

```sql
LENGTH(string)
```

参数

- string：必需。字符串

返回值：整数或NUll

- 整数：表示字符串的长度
- 0：查询失败

示例

```sql
SELECT LENGTH("SQL Tutorial") AS LengthOfString;
```

字符集

- gbk：使用2个字节存储一个汉字
- unicode：使用3个字节存储一个汉字


## 2.大小写转换

upper()

用途：将英文字符串转为全大写

语法

```sql
UPPER(英文文本)
```

参数

- 英文文本：必需

示例

```sql
SELECT UPPER('Hello'); -- 输出 'HELLO'
SELECT UCASE('mysql'); -- 输出 'MYSQL'
```

LOWER()
用途：将英文字符串转为全小写。

语法

```sql
lower(英文文本)
```

参数

- 英文文本：必须

示例  

```sql
SELECT LOWER('Hello WORLD');  -- 输出：hello world
SELECT LOWER('ÄÖÜ');         -- 输出：äöü（支持多语言字符）
```

使用场景

```sql
-- 插入数据时统一存储小写
INSERT INTO users (username) VALUES (LOWER('Admin123'));

-- 查找忽略大小写的用户名
SELECT * FROM users WHERE LOWER(username) = LOWER('admin');

-- 将标题转为小写格式
SELECT LOWER(title) AS lowercase_title FROM articles;

-- 批量更新邮箱为小写
UPDATE employees 
SET email = LOWER(email) 
WHERE email REGEXP '[A-Z]';  -- 仅处理含大写字母的记录
```

## 3.删除空格

rtrim()

用途：删除字符串尾随空格。

语法

```sql
RTRIM(string)
```

参数

- string：必须，要删除空格的字符串

示例

```sql
SELECT RTRIM("SQL Tutorial     ") AS RightTrimmedString;
```

## 4.反转字符

reverse()

用途：反转字符串字符顺序。

语法

```sql
REVERSE(string)
```

参数

- string：必须，要反转顺序的字符串

示例

```sql
SELECT REVERSE("SQL Tutorial");
```


## 5.自定义排序

field()

用途：返回值列表中值的索引位置。

注意：如果在值列表中找不到指定的值，则此函数将返回0。如果值为null，则此函数将返回0。

语法

```sql
FIELD(value, val1, val2, val3, ...)
```

参数

- value：必须，要查的值
- val1：值列表

示例

```sql
SELECT FIELD("q", "s", "q", "l");-- 输出 2
```

## 6.提取字符串

left()

用途：从左起截取-指定长度字符

语法

```sql
LEFT(str, length)
```

参数

- str：必需，指定提取的字符串
- length：必需。要提取的字符数。如果此参数大于字符串中的字符数，则此功能将返回全部字符串

示例：  

```sql
SELECT LEFT('ABCDE', 3); -- 输出 'ABC'
```

right()

substring()
用途：从指定位置截取字符串

语法

```sql
SUBSTRING(str, start, [length])
```

参数

- str：必需，要截取的字符串。
- start ：必需的。开始位置。可以是正数或负数。如果是正数，则此函数从字符串的开头提取。如果是负数，则此函数从字符串的末端提取
- [length]：可选。要提取的字符数。如果省略，将返回整个字符串（从开始位置）

示例

```sql
SELECT SUBSTRING('Hello World', 7);    -- 输出 'World'
SELECT SUBSTRING('Hello World', 7, 3); -- 输出 'Wor'
```

## 7.查询字符位置

locate()
用途：返回子字符串首次出现的位置（可指定起始点）。如果在原始字符串中找不到子字符串，则此功能返回0。大小写不敏感。

注意：如果在值列表中找不到指定的值，则此函数将返回0。如果值为null，则此函数将返回0。

语法

```sql
LOCATE(子字符串, 主字符串, [start])
```

参数

- substring：必需的。子字符串

- string：必需的。主字符串

- [start]: 可选。搜索的开始位置。位置1默认

示例

```sql
SELECT LOCATE("3", "W3Schools.com") AS MatchPosition;
SELECT LOCATE("com", "W3Schools.com", 3) AS MatchPosition;
SELECT LOCATE('lo', 'Hello'); -- 输出 4（从第1位开始找）
SELECT LOCATE('o', 'Hello', 5); -- 输出 5
```

1. 默认从第1个字符开始搜索

```sql
SELECT LOCATE('o', 'Hello World! Welcome to MySQL.');
-- 结果：5（第一个 'o' 的位置）
```

2. 指定从第6个字符开始搜索

```sql
SELECT LOCATE('o', 'Hello World! Welcome to MySQL.', 6);
-- 结果：8（从第6个字符开始后的第一个 'o' 的位置）
```

3. 子字符串不存在时返回0

```sql
SELECT LOCATE('Python', 'Hello World! Welcome to MySQL.', 1);
-- 结果：0（未找到）
```

4. 指定起始位置超过字符串长度

```sql
SELECT LOCATE('o', 'Hello World! Welcome to MySQL.', 30);
-- 结果：0（字符串总长度小于30）
```

---

 **关键特性**

| **场景**                  | **结果** | **说明**                            |
| ------------------------- | -------- | ----------------------------------- |
| `start` 是正整数且有效    | 位置值   | 返回从 `start` 位置后的首次匹配位置 |
| `start` 是0或负数         | 0        | 无效参数，直接返回0                 |
| `start` 超出字符串长度    | 0        | 搜索范围超出实际内容                |
| 子字符串为空字符串 (`''`) | 1        | 空字符串在任何位置都被认为存在      |

---

position()

用途：返回字符串中第一次出现的位置。如果在原始字符串中找不到子字符串，则此功能返回0。


语法

```sql
POSITION(子字符串 IN 主字符串)
```

参数

- substring：必需的。在字符串中搜索的子字符串
- string：必需的。将要搜索的原始字符串

示例

```sql
SELECT POSITION("3" IN "W3Schools.com") AS MatchPosition;
SELECT POSITION('@' IN 'user@example.com'); -- 输出 5
```


instr() 
用途：instr（）函数返回另一个字符串中首次出现字符串的位置。不区分大小写

语法

```sql
INSTR(主字符串, 子字符串)
```

参数

- stinrg1：必需的。主字符串
- sting2：必需的。子字符串。如果找不到字符串2，此功能返回0

示例

```sql
SELECT INSTR('Hello', 'el'); -- 输出 2
```


## 8.**关键区别与适用场景**  

| **函数**         | **特点**                     | **典型应用场景**                 |
| ---------------- | ---------------------------- | -------------------------------- |
| `UPPER/UCASE`    | 统一数据格式                 | 用户输入标准化、不区分大小写查询 |
| `LEFT/SUBSTRING` | 精准提取部分数据             | 截取编码、日期、关键词           |
| `REVERSE`        | 反转字符顺序                 | 生成镜像文本、特殊加密逻辑       |
| `FIELD`          | 自定义排序优先级             | 业务规则排序（如状态顺序）       |
| `LOCATE/INSTR`   | 子串位置查找（参数顺序不同） | 解析邮箱、URL、关键词定位        |



## 9.**常见应用**  

1. **组合使用**：  

   ```sql
   -- 提取邮箱用户名（@前的部分）
   SELECT SUBSTRING(email, 1, LOCATE('@', email)-1) FROM users;
   ```

2. **处理空值**：  

   ```sql
   -- 安全截取（避免空值报错）
   SELECT SUBSTRING(COALESCE(column, ''), 1, 5) FROM table;
   ```

3. **动态排序**：  

   ```sql
   -- 按自定义部门顺序排序
   SELECT * FROM employees
   ORDER BY FIELD(department, '开发部', '市场部', '财务部');
   ```



## 练习:字符串函数查询

1. 将邮箱名转换为全大写显示**
2. 提取员工编号的前缀字母（如D001中的D）
3. 从身份证号中提取出生年份（第7-10位）
4. 查找邮箱地址中@符号的位置
5. 去除职位字段右侧的空格（假设存在空格）
6. 反转显示员工姓名
7. 按自定义顺序排序部门（开发部 > 市场部 > 财务部）
8. 检查身份证号最后一位是否是字母X
9. 提取省份名称的前3个字符
10. 从邮箱中提取域名（@后的部分）
11. 将城市名称转换为全大写并反转显示
12. 显示员工编号的后3位数字（如D001中的001）
13. 计算身份证号的长度是否为18位
14. 查找员工姓名中第一个空格的位置
15. 按薪资降序排列，但优先显示开发部员工
16. 将员工姓名格式化为“名-姓”（假设姓名为“张伟”格式）
17. 检查邮箱是否以“.com”结尾
18. 提取身份证号的最后4位（掩码处理用）
19. 显示员工入职日期的年份平方值
20. 查找姓名中包含“强”字的员工
21. 按省份名称的倒序排列记录
22. 将薪资格式化为千分位（如12345.67 → 12,345.67）
23. 计算员工编号的数字部分（如D001 → 1）
24. 显示邮箱用户名部分（@前的部分）
25. 按城市名称的第2个字符排序
26. 将性别字段转换为大写字母缩写（男→M，女→F）
27. 检查身份证号第17位是否为奇数（判断性别）
28. 组合显示省份和城市（格式：广东-深圳）
29. 按邮箱域名的长度排序
30. 统计各部门名称的字符长度





## 参考答案

1.箱名转换为全大写显示

```sql
SELECT UPPER(em_name) AS uppercase_name FROM employees;
```

2. 提取员工编号的前缀字母（如D001中的D）

```sql
SELECT LEFT(em_id, 1) AS prefix FROM employees;
```

3. 从身份证号中提取出生年份（第7-10位）

```sql
SELECT SUBSTRING(id_card, 7, 4) AS birth_year FROM employees;
```

4. 查找邮箱地址中@符号的位置

```sql
SELECT LOCATE('@', email) AS at_position FROM employees;
-- 或
SELECT POSITION('@' IN email) AS at_position FROM employees;
-- 或
SELECT INSTR(email, '@') AS at_position FROM employees;
```

5. 去除职位字段右侧的空格（假设存在空格）

```sql
SELECT RTRIM(job) AS trimmed_job FROM employees;
```

6. 反转显示员工姓名

```sql
SELECT REVERSE(em_name) AS reversed_name FROM employees;
```

7. 按自定义顺序排序部门（开发部 > 市场部 > 财务部）

```sql
SELECT * FROM employees
ORDER BY FIELD(department, '开发部', '市场部', '财务部', '人力部', '设计部', '行政部', '后勤部');
```

8. 检查身份证号最后一位是否是字母X

```sql
SELECT id_card, 
       IF(RIGHT(id_card, 1) = 'X', '是', '否') AS is_last_x
FROM employees;
```

9. 提取省份名称的前1个字符

```sql
SELECT LEFT(province, 3) AS province_short FROM employees;
```

10. 从邮箱中提取域名（@后的部分）

```sql
SELECT SUBSTRING(email, LOCATE('@', email) + 1) AS domain FROM employees;
```

11. 将城市名称转换为全大写并反转显示

```sql
SELECT REVERSE(UCASE(city)) AS reversed_uppercase_city FROM employees;
```

12. 显示员工编号的后3位数字（如D001中的001）

```sql
SELECT SUBSTRING(em_id, 2, 3) AS number_part FROM employees;
```

13. 计算身份证号的长度是否为18位

```sql
SELECT id_card, 
       IF(LENGTH(id_card) = 18, '有效', '无效') AS validity
FROM employees;
```

14. 查找员工姓名中第一个空格的位置

```sql
SELECT em_name, LOCATE(' ', em_name) AS space_position FROM employees;
```

15. 按薪资降序排列，但优先显示开发部员工

```sql
SELECT * FROM employees
ORDER BY FIELD(department, '开发部') DESC, salary DESC;
```

16. 将员工姓名格式化为“名-姓”（假设姓名为“张伟”格式）

```sql
SELECT CONCAT(SUBSTRING(em_name, 2), '-', LEFT(em_name, 1)) AS formatted_name 
FROM employees;
```

17. 检查邮箱是否以“.com”结尾

```sql
SELECT email, 
       IF(SUBSTRING(email, -4) = '.com', '是', '否') AS is_com 
FROM employees;
```

18. 提取身份证号的最后4位（掩码处理用）

```sql
SELECT RIGHT(id_card, 4) AS last_four_digits FROM employees;
```

19. 显示员工入职日期的年份平方值

```sql
SELECT YEAR(hiredate) AS hire_year, 
       POW(YEAR(hiredate), 2) AS year_squared 
FROM employees;
```

20. 查找姓名中包含“强”字的员工

```sql
SELECT * FROM employees
WHERE LOCATE('强', em_name) > 0;
```

21. 按省份名称的倒序排列记录

```sql
SELECT * FROM employees
ORDER BY REVERSE(province);
```

22. 将薪资格式化为千分位（如12345.67 → 12,345.67）

```sql
SELECT FORMAT(salary, 2) AS formatted_salary FROM employees;
```

23. 计算员工编号的数字部分（如D001 → 1）

```sql
SELECT SUBSTRING(em_id, 2) AS numeric_part FROM employees;
```

24. 显示邮箱用户名部分（@前的部分）

```sql
SELECT SUBSTRING(email, 1, LOCATE('@', email)-1) AS username FROM employees;
```

25. 按城市名称的第2个字符排序

```sql
SELECT * FROM employees
ORDER BY SUBSTRING(city, 2, 1);
```

26. 将性别字段转换为大写字母缩写（男→M，女→F）

```sql
SELECT UPPER(LEFT(gender, 1)) AS gender_code FROM employees;
```

27. 检查身份证号第17位是否为奇数（判断性别）

```sql
SELECT id_card,
       IF(SUBSTRING(id_card, 17, 1) % 2 = 1, '男', '女') AS gender_check
FROM employees;
```

28. 组合显示省份和城市（格式：广东-深圳）

```sql
SELECT CONCAT(province, '-', city) AS location FROM employees;
```

29. 按邮箱域名的长度排序

```sql
SELECT email,
       LENGTH(SUBSTRING(email, LOCATE('@', email)+1)) AS domain_length
FROM employees
ORDER BY domain_length;
```

30. 统计各部门名称的字符长度

```sql
SELECT department, LENGTH(department) AS dept_name_length 
FROM employees
GROUP BY department;
```