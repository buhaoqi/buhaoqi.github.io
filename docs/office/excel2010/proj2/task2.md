---
noteId: "a7807580e2e411f0b182b5022acf9e32"
tags: []

---

## 本节知识点  
1. 函数的输入  
2. 常用函数介绍  

---

## 一、函数的输入  
### 1. 函数的定义
**定义**：函数是按照特定顺序对一些参数进行预定义的公式。  
**优点**：为了减少操作步骤，提高运算速度，可通过函数来简化公式的计算过程。

### 2. 函数的组成部分  
每个函数都包含三个部分：**函数名称、参数和小括号**，参数之间使用“，”隔开。

### 3. 函数的输入方式有几种  
函数的输入方式有两种：

- 直接插入：适合对函数用法比较熟悉的用户；
- "插入函数”对话框：适合对函数用法不熟悉的用户，通过对话框可以搜索并使用函数。

---

## 二、常用函数  
### 4. SUM函数的用法  
**用途**：计算各参数中所有数值的和。  
**语法**：`SUM(number1, [number2], …)`  
**参数**：  

- number1 必需。想要相加的第一个数值参数。  
- number2, … 可选。想要相加的2到255个数值参数。

```
A1 = "100元"  （文本）
=SUM(A1)      // 结果：0（忽略文本）
=A1           // 结果："100元"（返回文本）

A1 = TRUE
=SUM(A1)      // 结果：1（TRUE转为1）
=A1           // 结果：TRUE
```

### 5. SUMIF函数的用法  
**用途**：对满足条件的单元格求和。  
**语法**：`SUMIF(range, criteria, [sum_range])`  
**参数**：  

- range 必需。用于条件判断的单元格区域。  
- criteria 必需。用于确定对哪些单元格求和的条件。  
- sum_range 可选。要求和的实际单元格。




### 6. SUMIFS函数的用法  
**用途**：对区域中满足多个条件的单元格求和。  
**语法**：`SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], …)`  
**参数**：  

- sum_range 必需。对一个或多个单元格求和。  
- criteria_range1 必需。在其中计算关联条件的第一个区域。  
- criteria1 必需。条件的形式为数字、表达式、单元格引用或文本。

### 7. ABS函数  
**用途**：返回参数的绝对值。  
**语法**：`ABS(number)`  
**参数**：number 必需。需要计算其绝对值的实数。

### 8. AND函数  
**用途**：所有参数的计算结果为 TRUE 时，返回 TRUE；只要有一个为 FALSE，即返回 FALSE。  
**语法**：`AND(logical1, [logical2], …)`  
**参数**：logical1 必需。要检验的第一个条件。

### 9. OR函数  
**用途**：在其参数组中，只要有一个参数逻辑值为 TRUE，即返回 TRUE；所有参数的逻辑值为 FALSE，才返回 FALSE。  
**语法**：`OR(logical1, [logical2], …)`  
**参数**：Logical1 是必需的，后续的逻辑值是可选的。

### 10. NOT函数  
**用途**：对参数值求反。  
**语法**：`NOT(logical)`  
**参数**：logical 必需。一个可以计算为 TRUE 或 FALSE 的值。

### 11. XOR函数  
**用途**：对所有参数进行异或运算。两个逻辑值不同结果为 TRUE，相同为 FALSE。  
**语法**：`XOR(logical1, [logical2], …)`

### 12. IF函数  
**用途**：如果指定条件为 TRUE，返回一个值；为 FALSE，返回另一个值。  
**语法**：`IF(logical_test, [value_if_true], [value_if_false])`  
**参数**：logical_test 必需。计算结果可能为 TRUE 或 FALSE 的任意值或表达式。


### 14. YEAR函数  
**用途**：返回某日期对应的年份。  
**语法**：`YEAR(serial_number)`  
**参数**：serial_number 必需。为一个日期值。

### 15. MONTH函数  
**用途**：返回日期中的月份（1-12）。  
**语法**：`MONTH(serial_number)`  
**参数**：serial_number 必需。为一个日期值。

### 16. DAY函数  
**用途**：返回日期中的天数（1-31）。  
**语法**：`DAY(serial_number)`  
**参数**：serial_number 必需。为一个日期值。

### 17. TODAY函数  
**用途**：返回当前日期。  
**语法**：`TODAY()`

### 18. NOW函数  
**用途**：返回当前日期和时间。  
**语法**：`NOW()`

### 19. DATE函数  
**用途**：返回表示特定日期的连续序列号。  
**语法**：`DATE(year, month, day)`  
**参数**：year、month、day 均为必需参数。

### 20. LEFT函数  
**用途**：返回文本字符串中第一个或前几个字符。  
**语法**：`LEFT(text, [num_chars])`  
**参数**：text 必需。包含要提取字符的文本字符串。

### 21. LEFTB函数  
**用途**：基于字节数返回文本字符串中的第一个或前几个字符。  
**语法**：`LEFTB(text, [num_bytes])`  
**参数**：text 必需。包含要提取字符的文本字符串。

### 22. RIGHT函数  
**用途**：返回文本字符串中最后一个或多个字符。  
**语法**：`RIGHT(text, [num_chars])`  
**参数**：text 必需。包含要提取字符的文本字符串。

### 23. RIGHTB函数  
**用途**：根据字节数返回文本字符串中最后一个或多个字符。  
**语法**：`RIGHTB(text, [num_bytes])`  
**参数**：text 必需。包含要提取字符的文本字符串。

### 24. MID函数  
**用途**：返回文本字符串中从指定位置开始的特定数目的字符。  
**语法**：`MID(text, start_num, num_chars)`  
**参数**：text、start_num、num_chars 均为必需。

### 25. MIDB函数  
**用途**：根据字节数返回文本字符串中从指定位置开始的特定数目的字符。  
**语法**：`MIDB(text, start_num, num_bytes)`  
**参数**：text、start_num、num_bytes 均为必需。

### 26. LEN函数  
**用途**：返回文本字符串中的字符数。  
**语法**：`LEN(text)`  
**参数**：text 必需。

### 27. LENB函数  
**用途**：返回文本字符串中用于代表字符的字节数。  
**语法**：`LENB(text)`  
**参数**：text 必需。

### 28. TEXT函数  
**用途**：将数值转换为按指定数字格式表示的文本。  
**语法**：`TEXT(value, format_text)`  
**参数**：value 和 format_text 均为必需。

### 29. REPLACE函数  
**用途**：使用其他文本字符串替换某文本字符串中的部分文本。  
**语法**：`REPLACE(old_text, start_num, num_chars, new_text)`  
**参数**：old_text、start_num、num_chars、new_text 均为必需。

### 30. REPLACEB函数  
**用途**：根据字节数替换文本字符串中的部分文本。  
**语法**：`REPLACEB(old_text, start_num, num_bytes, new_text)`  
**参数**：old_text、start_num、num_bytes、new_text 均为必需。

### 31. SUBSTITUTE函数  
**用途**：在文本字符串中用 new_text 替代 old_text。  
**语法**：`SUBSTITUTE(text, old_text, new_text, [instance_num])`  
**参数**：text、old_text、new_text 均为必需。

### 32. UPPER函数  
**用途**：将文本字符串中的所有小写字母转换成大写字母。  
**语法**：`UPPER(text)`  
**参数**：text 必需。

### 33. LOWER函数  
**用途**：将一个文本字符串中的所有大写字母转换为小写字母。  
**语法**：`LOWER(text)`  
**参数**：text 必需。

### 34. TRIM函数  
**用途**：除了单词之间的单个空格外，清除文本中所有的空格。在从其他应用程序中获取带有不规则空格的文本时，可以使用函数 TRIM。  
**语法**：`TRIM(text)`  
**参数**：text 必需。需要删除其中空格的文本。

### 35. COUNT函数  
**用途**：COUNT 函数计算包含数字的单元格以及参数列表中数字的个数。  
**语法**：`COUNT(value1, [value2], …)`  
**参数**：  
- value1 必需。要计算其中数字的个数的第一个项、单元格引用或区域。  
- value2, … 可选。要计算其中数字的个数的其他项、单元格引用或区域。

### 36. COUNTIF函数  
**用途**：COUNTIF 函数对区域中满足单个指定条件的单元格进行计数。  
**语法**：`COUNTIF(range, criteria)`  
**参数**：  

- range 必需。要对其进行计数的一个或多个单元格，其中包括数字或名称、数组或包含数字的引用。  
- criteria 必需。用于定义将对哪些单元格进行计数的数字、表达式、单元格引用或文本字符串。

### 37. COUNTIFS函数  
**用途**：将条件应用于跨多个区域的单元格，计算多个区域中满足给定条件的单元格的个数。  
**语法**：`COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2]…)`  
**参数**：  

- criteria_range1 必需。在其中计算关联条件的第一个区域。  
- criteria1 必需。条件的形式为数字、表达式、单元格引用或文本。  
- criteria_range2, criteria2, … 可选。附加的区域及其关联条件。

### 38. RANK函数  
**用途**：返回一个数字在数字列表中的排位。  
**语法**：`RANK(number, ref, [order])`  
**参数**：  

- number 必需。需要找到排位的数字。  
- ref 必需。数字列表数组或对数字列表的引用。  
- order 可选。一数字，指明数字排位的方式。如果 order 为 0 或省略，降序排列；不为零，升序排列。

### 39. RANK.EQ函数  
**用途**：与 RANK 函数用法一致，返回一个数字在数字列表中的排位。  
**语法**：`RANK.EQ(number, ref, [order])`  
**参数**：同 RANK 函数。

### 40. RANK.AVG函数  
**用途**：返回一个数字在数字列表中的排位，数字的排位是其大小与列表中其他值的比值，如果多个值具有相同的排位，则将返回平均排位。  
**语法**：`RANK.AVG(number, ref, [order])`  
**参数**：同 RANK 函数。

### 41. AVERAGE函数  
**用途**：返回参数的平均值（算术平均值）。  
**语法**：`AVERAGE(number1, [number2], …)`  
**参数**：  

- number1 必需。要计算平均值的第一个数字、单元格引用或单元格区域。  
- number2, … 可选。要计算平均值的其他数字、单元格引用或单元格区域。

### 42. AVERAGEIF函数  
**用途**：返回某个区域内满足给定条件的所有单元格的平均值（算术平均值）。  
**语法**：`AVERAGEIF(range, criteria, [average_range])`  
**参数**：  
- range 必需。要计算平均值的一个或多个单元格。  
- criteria 必需。数字、表达式、单元格引用或文本形式的条件。  
- average_range 可选。要计算平均值的实际单元格集。

### 43. AVERAGEIFS函数  
**用途**：返回满足多重条件的所有单元格的平均值（算术平均值）。  
**语法**：`AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2, criteria2], …)`  
**参数**：  

- average_range 必需。要计算平均值的一个或多个单元格。  
- criteria_range1 必需。在其中计算关联条件的第一个区域。  
- criteria1 必需。条件的形式为数字、表达式、单元格引用或文本。

### 44. MAX函数  
**用途**：返回一组值中的最大值。  
**语法**：`MAX(number1, [number2], …)`  
**参数**：  

- number1 必需。后续数值是可选的。这些是要从中找出最大值的 1 到 255 个数字参数。

### 45. MIN函数  
**用途**：返回一组值中的最小值。  
**语法**：`MIN(number1, [number2], …)`  
**参数**：  

- number1 必需。后续数值是可选的。这些是要从中找出最小值的 1 到 255 个数字参数。



