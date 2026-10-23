---
# 这部分是关键！侧边栏显示名由这里决定
title: 3. 逻辑运算符 # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 3. 逻辑运算符  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---


## 四、逻辑运算符

逻辑运算符用于组合条件，尤其常用于 `if`、`elif` 和 `while` 语句。

Python 最常见的逻辑运算符有三个：

| 运算符 | 含义   | 规则                         |
| ------ | ------ | ---------------------------- |
| `and`  | 逻辑与 | 两个条件都成立，结果才成立   |
| `or`   | 逻辑或 | 至少一个条件成立，结果就成立 |
| `not`  | 逻辑非 | 将条件的真假反转             |

### 1. `and`：并且

例如，学生必须同时满足年龄和成绩要求才能参加活动：

```python
age = 20
score = 85
if age >= 18 and score >= 80:    
  print("符合参加条件")
else:    
  print("不符合参加条件")
```

`and` 要求两个条件都成立。

| 条件 A  | 条件 B  | A `and` B |
| ------- | ------- | --------- |
| `True`  | `True`  | `True`    |
| `True`  | `False` | `False`   |
| `False` | `True`  | `False`   |
| `False` | `False` | `False`   |

### 2. `or`：或者

例如，会员满足任意一项条件即可获得优惠：

```python
is_member = False
total = 300
if is_member or total >= 200:    
  print("可以享受优惠")
else:    
  print("不能享受优惠")
```

这里，因为购物金额达到 200 元，所以即使不是会员，也能享受优惠。

| 条件 A  | 条件 B  | A `or` B |
| ------- | ------- | -------- |
| `True`  | `True`  | `True`   |
| `True`  | `False` | `True`   |
| `False` | `True`  | `True`   |
| `False` | `False` | `False`  |

### 3. `not`：取反

```python
is_raining = False
if not is_raining:    
  print("可以考虑户外活动")
```

`not False` 的结果是 `True`，所以条件成立。

### 4. 综合使用三个逻辑运算符

```python
age = 20
score = 85
is_banned = False
if age >= 18 and score >= 60 and not is_banned:    
  print("允许参加考试")
else:    
  print("不允许参加考试")
```

这个条件可以读成：

年龄达到 18 岁，并且成绩达到 60 分，并且没有被禁考。

### 5. 逻辑运算符的短路特性

Python 的 `and` 和 `or` 有短路求值的特点：

- `and`：如果左侧已经为假，就不会再计算右侧。
- `or`：如果左侧已经为真，就不会再计算右侧。

例如：

```python
x = 0
if x != 0 and 10 / x > 1:    
  print("条件成立")
else:    
  print("条件不成立")
```

因为 `x != 0` 为假，Python 不会继续计算 `10 / x`，所以不会发生除以零错误。

这在编写安全的条件判断时非常有用。

补充： `and` 和 `or` 不一定返回 `True` 或 `False`，它们会返回最后实际求值的操作数。例如 `0 or 5` 的结果是 `5`。初学阶段可以先掌握条件判断中的用法。
