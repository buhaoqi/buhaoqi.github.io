---
# 这部分是关键！侧边栏显示名由这里决定
title: 2.9 函数是什么 # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 2.9 函数是什么 # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---

## 语法格式
```python
def 函数名(参数列表):
    函数体
    [return 返回值]
```
规则：
1. `def` 是定义函数关键字，不能改
2. 函数命名：字母、数字、下划线，不能数字开头，见名知意
3. 括号不能丢，多个参数逗号隔开；无参数括号保留
4. 末尾必须加冒号 `:`
5. 函数体全部缩进（4空格）
6. return：用来返回结果，同时结束函数；没有return，默认返回`None`

> 一句话流程：先def定义函数（只是声明，代码不执行），再写**函数调用**才会运行里面代码。
> 调用格式：`函数名(实参)`

---

## 一、无参数、无返回值函数（最简单）
示例1：打印问候语
```python
# 定义
def say_hello():
    print("你好，对口升学！")
    print("加油备考")

# 调用
say_hello()
say_hello()   # 可以多次调用
```

示例2：打印分割线
```python
def print_line():
    print("-" * 30)

print_line()
print("函数测试")
print_line()
```

## 二、有参数、无返回值函数
参数：定义时写的叫**形参**；调用传进去的叫**实参**。
示例3：传入名字，个性化问候
```python
def greet(name):
    print(f"你好 {name}！")

greet("张三")
greet("李四")
```

示例4：打印n个星号
```python
def print_star(n):
    print("*" * n)

print_star(5)
print_star(10)
```

示例5：两个参数，输出加法式子
```python
def add_show(a, b):
    print(f"{a} + {b} = {a+b}")

add_show(3,5)
add_show(10,20)
```

## 三、有参数、有返回值（考试最高频！return）
return 把计算结果交给调用处，函数结束。
示例6：求两数之和
```python
def add(a,b):
    res = a + b
    return res

# 调用，接收返回值
s = add(4,6)
print(s)
print(add(12,8))
```

示例7：求两个数最大值
```python
def get_max(x,y):
    if x > y:
        return x
    else:
        return y

m = get_max(9,15)
print("最大值：", m)
```

示例8：判断一个数是否是偶数，返回布尔值
```python
def is_even(num):
    if num % 2 == 0:
        return True
    else:
        return False

print(is_even(6))
print(is_even(7))
```

示例9：计算1~n累加和
```python
def sum_n(n):
    s = 0
    i = 1
    while i <= n:
        s += i
        i += 1
    return s

print(sum_n(100))
print(sum_n(10))
```

示例10：求阶乘
```python
def fact(n):
    result = 1
    for i in range(1, n+1):
        result *= i
    return result

print(fact(5))
print(fact(4))
```

> ⚠️ 重点：return之后的代码不会执行！
示例11：return提前结束函数
```python
def test():
    print("第一句")
    return
    print("这句永远不执行")

test()
```

## 四、参数的几种形式（考点）
### 4.1 位置参数（按顺序一一对应，最常用）
```python
def info(name, age):
    print(f"姓名：{name}，年龄：{age}")

info("小明", 17)
```

### 4.2 关键字参数（调用时指定参数名，顺序可以乱）
```python
info(age=18, name="小红")
```

### 4.3 默认参数（定义时给形参写默认值，不传就用默认）
示例12：默认参数
```python
def greet(name, msg="早上好"):
    print(name, msg)

greet("老王")
greet("小李", "晚上好")
```

## 五、函数的文档字符串（docstring，选择填空）
函数开头三引号，写函数说明，`help()`可以查看
示例13
```python
def add(a,b):
    """接收两个数字，返回二者之和
    参数a：数字1
    参数b：数字2
    返回：a+b的结果
    """
    return a+b

help(add)
```

## 六、局部变量 和 全局变量（高频选择、判断、简答）
- **局部变量**：在函数内部定义，只能在函数里面使用，函数结束自动销毁
- **全局变量**：函数外面定义，整个文件都可以访问

示例14：局部变量
```python
def func():
    a = 10   # 局部变量
    print(a)

func()
# print(a)   # 报错，外面访问不到
```

示例15：全局变量读取
```python
num = 100    #全局变量
def func():
    print(num)  # 可以读取全局变量

func()
```

示例16：global关键字，函数内部修改全局变量（必考）
```python
count = 0
def add_count():
    global count
    count += 1

add_count()
print(count)
add_count()
print(count)
```
> 考点：不加global，函数内是新建同名局部变量，不会修改外面全局变量。

## 七、函数嵌套（函数里面定义函数，了解）
```python
def outer():
    print("外层函数")
    def inner():
        print("内层函数")
    inner()

outer()
```

## 八、函数调用流程综合例题（对口编程题风格）
示例17：写函数判断成绩等级
```python
def get_level(score):
    if score >=90:
        return "优秀"
    elif score >=80:
        return "良好"
    elif score >=60:
        return "及格"
    else:
        return "不及格"

s = int(input("输入分数："))
res = get_level(s)
print(res)
```

示例18：多个返回值（本质是返回元组）
```python
def calc(a,b):
    he = a+b
    cha = a-b
    return he, cha

sum1, sub1 = calc(10,3)
print(sum1, sub1)
```

## 九、简答背诵内容（直接背）
1. 函数作用：封装一段可以重复调用的代码，实现代码复用，简化程序。
2. def关键字用于定义自定义函数；函数不调用，内部代码不会执行。
3. 形参：定义函数时括号里的变量；实参：调用函数时传入的数据。
4. return作用：把结果返回给调用处，同时终止函数运行；无return返回None。
5. 局部变量：函数内部创建，仅函数内有效；全局变量：函数外部创建，全局可见。
6. global关键字：声明在函数内部要修改外部的全局变量。

## 十、简答题题干（加入题库）
1. Python自定义函数使用哪个关键字定义？函数的作用是什么？
2. 什么是形参？什么是实参？
3. return语句在函数中的作用是什么？
4. 简述局部变量和全局变量的区别。
5. 如果想要在函数内部修改全局变量，需要用什么关键字？

## 十一、易错题汇总
1. 定义函数只是声明，**必须调用才执行**
2. 冒号、缩进不能丢
3. 区分：有return才能拿到返回值，无return打印不出结果
4. 不加global，函数里赋值同名变量，会新建局部变量，不改全局
5. 参数个数要匹配（位置参数数量不匹配直接报错）
