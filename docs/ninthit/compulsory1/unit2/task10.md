---
# 这部分是关键！侧边栏显示名由这里决定
title: 2.5 变量与常量 # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 2.5 变量与常量  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---

## 知识点

### 1. 什么是变量
变量可以理解为“给数据贴标签”。  
例如：

```python
score = 100
```

意思是：把 `100` 赋值给 `score`，以后用 `score` 就能找到 `100`。

讲解话术：  
“变量像贴了名字的盒子，盒子里放数据。名字就是变量名，数据就是值。”

### 2. 赋值语句
格式：

```python
变量名 = 值
```

注意：
- `=` 是赋值，不是“等于”。
- 读作：把右边的值赋给左边的变量。
- 等于判断用 `==`。

示例：

```python
age = 18
name = "小明"
height = 1.75
is_student = True
```

### 3. 变量命名规则
必须遵守：
1. 只能包含字母、数字、下划线。
2. 不能以数字开头。
3. 区分大小写，`Age` 和 `age` 是两个变量。
4. 不能使用 Python 关键字，如 `if`、`else`、`for`、`while`、`class`、`def`、`True`、`False`、`None`。
5. 不能有空格、连字符。

推荐：
- 见名知义：`student_name`、`score`、`age`
- 小写字母 + 下划线：`my_age`
- 中文变量名合法，但不推荐。

正反例：

```python
name1 = "对"
my_name = "对"
_score = "对"

1name = "错"
my-name = "错"
class = "错"
```

### 4. 使用变量
定义后可以输出、计算：

```python
name = "小明"
age = 18
print(name)
print("年龄：", age)
print(age + 1)
```

### 5. 变量可以重新赋值
变量后面的值会覆盖前面的值。

```python
x = 10
print(x)   # 10
x = 20
print(x)   # 20
```

也可以改变类型：

```python
x = 10
x = "hello"
print(x)
```

这说明 Python 是动态类型语言，变量类型由当前值决定。

### 6. 常见数据类型与 type()
初学者先掌握 4 种：

| 类型 | 含义 | 示例 |
|---|---|---|
| int | 整数 | 10, -3 |
| float | 小数 | 3.14, 1.0 |
| str | 字符串 | "Python" |
| bool | 布尔值 | True, False |

用 `type()` 查看类型：

```python
age = 18
print(type(age))   # <class 'int'>
```

### 7. input() 与类型转换
`input()` 得到的永远是字符串。

```python
name = input("请输入姓名：")
print("你好，", name)
```

如果要数字运算，必须转换：

```python
age = int(input("请输入年龄："))
print("明年你", age + 1, "岁")
```

常见转换：
- `int("123")` → 123
- `float("3.14")` → 3.14
- `str(100)` → "100"

错误示例：

```python
age = input("年龄：")
print(age + 1)   # 报错，因为 age 是字符串
```

### 8. 多个变量赋值与交换
同时赋值：

```python
a, b, c = 1, 2, 3
```

相同值：

```python
a = b = 0
```

交换两个变量：

```python
a = 10
b = 20
a, b = b, a
print(a, b)   # 20 10
```

### 9. 常见错误
1. 变量未定义就使用：`NameError`
2. 数字开头：`1name = 1`
3. 使用关键字：`class = 1`
4. 字符串和数字相加：`"1" + 2`
5. `input()` 后不转换就运算
6. 大小写混用：`Age` 和 `age` 不同
7. 把 `=` 当成 `==`

---


## 三、课堂示例代码

```python
# 个人信息卡
name = "小明"
age = 18
height = 1.75
is_student = True

print("姓名：", name)
print("年龄：", age)
print("身高：", height)
print("是学生吗：", is_student)

# 输入版
name = input("请输入姓名：")
age = int(input("请输入年龄："))
print("你好，", name, "明年你", age + 1, "岁")
```

---

## 四、课堂互动与练习

**1. 判断变量名是否合法**
`1name`、`name1`、`my_name`、`my-name`、`class`、`_score`、`姓名`

答案：  
合法：`name1`、`my_name`、`_score`、`姓名`（不推荐中文）  
不合法：`1name`、`my-name`、`class`

**2. 预测输出**
```python
x = 10
y = x
x = 20
print(y)
```
答案：`10`

**3. 改错**
```python
age = input("年龄：")
print(age + 1)
```
改正：
```python
age = int(input("年龄："))
print(age + 1)
```

**4. 小任务**
输入两个数字，输出它们的和。

```python
a = int(input("第一个数："))
b = int(input("第二个数："))
print("和：", a + b)
```

---


## 五、课后作业

1. 定义 3 个变量：姓名、年龄、身高，输出自我介绍。
2. 输入两个数字，输出它们的和。
3. 定义两个变量并交换它们的值。
4. 找出 5 个错误变量名并改正。
5. 输入长方形长和宽，输出面积。

---


## DEEPSEEK作业

### Python变量入门测试

姓名：________ 班级：________ 得分：________  
时间：45分钟 满分：100  
计分：单选2分×20＝40；填空3分×10＝30；代码3分×10＝30  
说明：学生版可不打印最后“参考答案”。



### 一、单选题（每题2分，共40分）【ABCD同行】

1. 变量主要作用：
A. 让程序运行更快 B. 给数据起名字，方便存储和使用 C. 自动打印数据 D. 判断条件真假（ ）
2. 下面赋值语句正确的是：
A. 10 = x B. x = 10 C. x == 10 D. x => 10（ ）
3. 下列变量名合法的是：
A. 1name B. my-name C. _score D. class（ ）
4. 下列变量名不合法的是：
A. name1 B. my_name C. class D. _age（ ）
5. 代码 `x = 5; x = 8; print(x)` 输出：
A. 5 B. 8 C. 13 D. 报错（ ）
6. 代码 `x = 10; y = x; x = 20; print(y)` 输出：
A. 10 B. 20 C. 30 D. 报错（ ）
7. `type(3.14)` 的结果是：
A. `<class 'int'>` B. `<class 'float'>` C. `<class 'str'>` D. `<class 'bool'>`（ ）
8. `type("100")` 的结果是：
A. int B. float C. str D. bool（ ）
9. `type(True)` 的结果是：
A. int B. float C. str D. bool（ ）
10. `input()` 函数返回的数据类型是：
A. int B. float C. str D. bool（ ）
11. 要从键盘输入一个整数，正确的是：
A. `age = input()` B. `age = int(input())` C. `age = float(input())` D. `age = str(input())`（ ）
12. 代码 `print("1" + 2)` 的结果是：
A. 3 B. 12 C. "12" D. 报错（ ）
13. 代码 `print("5" + "3")` 输出：A. 8 B. 53 C. 5+3 D. 报错（ ）
14. 代码 `a, b = 1, 2; print(a, b)` 输出：
A. 1,2 B. 1 2 C. 12 D. 报错（ ）
15. 代码 `a = 1; b = 2; a, b = b, a; print(a, b)` 输出：
A. 1 2 B. 2 1 C. 1 1 D. 2 2（ ）
16. 代码 `Age = 18; print(age)` 的结果是：
A. 18 B. age C. 报错 NameError D. 0（ ）
17. 下列哪个是 Python 关键字，不能用作变量名：
A. if B. score C. name D. age（ ）
18. 代码 `x = "10"; y = int(x); print(y + 5)` 输出：
A. 105 B. 15 C. "105" D. 报错（ ）
19. 代码 `x = 3; x = x + 1; print(x)` 输出：
A. 3 B. 4 C. 31 D. 报错（ ）
20. 代码 `print(type(5))` 输出：
A. `<class 'int'>` B. `<class 'float'>` C. `<class 'str'>` D. `<class 'bool'>`（ ）

---

### 二、填空题（每题3分，共30分）

1. 给变量赋值使用的符号是 ______。
2. 判断两个值是否相等使用的符号是 ______。
3. 变量名只能包含字母、数字和 ______。
4. 变量名不能以 ______ 开头。
5. 要把字符串 "3.14" 转换成小数，应写：______("3.14")。
6. `input()` 返回的数据类型是 ______。
7. 将字符串 `"25"` 转换为整数的代码是 ______("25")。
8. 执行 `a, b = 1, 2` 后，a 的值是 ______，b 的值是 ______。
9. 交换 x 和 y 的值，可以写：`x, y = ______, ______`。
10. 代码 `x = 5; x = "abc"; print(x)` 输出 ______。

---

### 三、代码题（每题3分，共30分）

1. 定义变量 `name` 为 `"小明"`，`age` 为 `18`，输出：姓名：小明 年龄：18
2. 输入姓名，输出：你好，xxx
3. 输入年龄，输出明年年龄。
4. 输入两个整数，输出它们的和。
5. 定义 `length = 5`，`width = 3`，输出面积。
6. 定义 `a = 10`，`b = 20`，交换后输出 a 和 b。
7. 输入半径，输出圆面积（π 取 3.14）。
8. 输入三个整数，输出平均值。
9. 已知 `x = "100"`，将其转换为整数并加 1 后输出。
10. 改正下面代码：`age = input("年龄："); print(age + 1)`

---

### 参考答案

#### 一、单选题答案

1B 2B 3C 4C 5B 6A 7B 8C 9A 10C 11B 12D 13B 14B 15B 16C 17A 18B 19B 20B

#### 二、填空题答案

1. `=`  
2. `==`  
3. 下划线  
4. 数字  
5. float 
6. 字符串（str）  
7. `int`  
8. 1；2  
9. `y`；`x`  
10. `abc`

#### 三、代码题答案

1. `name = "小明"; age = 18; print("姓名：", name, "年龄：", age)`
2. `name = input("请输入姓名："); print("你好，", name)`
3. `age = int(input("请输入年龄：")); print("明年你", age + 1, "岁")`
4. `a = int(input("第一个数：")); b = int(input("第二个数：")); print("和：", a + b)`
5. `length = 5; width = 3; print("面积：", length * width)`
6. `a = 10; b = 20; a, b = b, a; print(a, b)`
7. `r = float(input("请输入半径：")); print("面积：", 3.14 * r * r)`
8. `a = int(input("第一个数：")); b = int(input("第二个数：")); c = int(input("第三个数：")); print("平均值：", (a + b + c) / 3)`
9. `x = "100"; y = int(x); print(y + 1)`
10. `age = int(input("年龄：")); print(age + 1)`



