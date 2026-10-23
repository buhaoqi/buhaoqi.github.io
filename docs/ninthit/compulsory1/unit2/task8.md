---
# 这部分是关键！侧边栏显示名由这里决定
title: 5. 成员运算符 # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 5. 成员运算符  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---


## 五、成员运算符

成员运算符用于判断一个值是否存在于某个容器中，常见于字符串、列表、元组、集合和字典。

| 运算符   | 含义         |
| -------- | ------------ |
| `in`     | 存在于其中   |
| `not in` | 不存在于其中 |

### 1. 判断字符串中是否包含某段文字

```python
text = "Python 入门教程"
print("Python" in text)      # True
print("Java" in text)        # False
print("Java" not in text)    # True
```

### 2. 判断列表中是否存在某个元素

```python
scores = [70, 85, 92, 60]
if 85 in scores:    
  print("找到了 85 分")
```

### 3. 判断用户名是否在允许名单中

```
allowed_users = ["村长", "奇奇", "小明"]username = "奇奇"if username in allowed_users:    print("允许登录")else:    print("用户不存在")
```

### 4. `in` 在字典中的特殊规则

对于字典，`in` 默认检查的是键（key），不是值（value）。

```
student = {    "name": "小明",    "age": 18}print("name" in student)  # Trueprint("小明" in student) # False
```

如果要检查字典中是否存在某个值，需要使用：

```
print("小明" in student.values())  # True
```

## 六、身份运算符

身份运算符有两个：

- `is`：判断两个变量是否指向同一个对象。
- `is not`：判断两个变量是否没有指向同一个对象。

这是初学者容易和 `==` 混淆的地方。

### 1. `==` 和 `is` 的区别

```
a = [1, 2, 3]b = [1, 2, 3]print(a == b)  # Trueprint(a is b)  # False
```

为什么？

- `a == b`：比较两个列表的内容是否相等。内容相同，所以为 `True`。
- `a is b`：比较两个变量是否指向同一个对象。这里创建了两个独立的列表，所以为 `False`。

再看一个例子：

```
a = [1, 2, 3]b = aprint(a == b)  # Trueprint(a is b)  # True
```

因为 `b = a` 让 `b` 指向了 `a` 所指向的同一个列表对象。

### 2. `is` 最常见的用途：判断 `None`

```
result = Noneif result is None:    print("暂时没有结果")
```

判断是否为 `None` 时，推荐使用 `is None` 或 `is not None`。

记忆口诀：

- `==`：看内容是否相等。
- `is`：看是不是同一个对象。

初学者不需要用 `is` 来比较整数、字符串等普通数据的值。