---
# 这部分是关键！侧边栏显示名由这里决定
title: 2.7 for循环语句 # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 2.7 for循环语句 # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---

# Python for循环详解（河北对口升学考点版，足量示例）
> 考点核心：`for` 属于**遍历循环**，用来遍历可迭代对象（字符串、列表、range范围等）；依次取出里面每一个元素执行循环体；依靠**缩进**划分循环代码块，末尾带冒号`:`。
语法格式：
```python
for 变量 in 可迭代对象:
    循环体语句
```
> 常搭配：`range()` 函数（对口升学最高频！）

## 一、range() 函数先吃透（必考）
`range(起始,结束,步长)`
⚠️ 规则：**左闭右开，取不到结束数字**
- range(n)：0 ~ n-1，默认起始0、步长1
- range(a,b)：a ~ b-1，步长1
- range(a,b,step)：a开始，每次+step，不包含b

```python
# 示例1：range(5) → 0,1,2,3,4
for i in range(5):
    print(i)

# 示例2：range(2,7) → 2,3,4,5,6
for i in range(2,7):
    print(i)

# 示例3：range(1,10,2) 步长2，取奇数：1 3 5 7 9
for i in range(1,10,2):
    print(i)

# 示例4：负数步长，倒序
for i in range(10,0,-1):
    print(i)   # 10,9,8...1
```

## 二、基础for循环分类 + 大量示例
### 1. 遍历数字范围（考试最多，range）
示例1：输出1~10所有数字
```python
for i in range(1,11):
    print(i)
```
示例2：输出1~10的偶数
```python
for i in range(2,11,2):
    print(i)
```
示例3：求和 1+2+3+…+100
```python
s = 0
for i in range(1,101):
    s = s + i
print("总和",s)
```
示例4：求1~20所有奇数的和
```python
s = 0
for i in range(1,21,2):
    s += i
print(s)
```

### 2. 遍历字符串（逐个取出字符）
示例5：遍历字符串，逐个输出字符
```python
s = "python"
for ch in s:
    print(ch)
```
示例6：统计字符串里面字母o出现多少次
```python
count = 0
s = "hello python"
for ch in s:
    if ch == 'o':
        count = count + 1
print("o的个数：",count)
```

### 3. 遍历列表（中职考题常见）
示例7：遍历列表输出每一项
```python
lst = [10,20,30,40]
for x in lst:
    print(x)
```
示例8：求列表里面所有数字平均值
```python
lst = [85,92,78,90,66]
sum_s = 0
for score in lst:
    sum_s += score
avg = sum_s / len(lst)
print(avg)
```

## 三、循环配套关键字：break、continue（高频选择、简答、编程）
- `break`：**立刻终止整个for循环**，跳出循环，不再执行
- `continue`：**结束本次循环，直接进入下一次循环**，后面代码跳过

示例9：break，找到5就停止循环
```python
for i in range(1,10):
    if i == 5:
        break
    print(i)
# 输出：1 2 3 4
```
示例10：continue，遇到5跳过，继续后面
```python
for i in range(1,10):
    if i == 5:
        continue
    print(i)
# 输出1 2 3 4 6 7 8 9
```

## 四、for + else 结构（考点，容易忽略）
规则：**循环正常结束（没有被break打断），才执行else里面代码；break跳出循环，则else不执行**
示例11：for...else
```python
for i in range(1,6):
    print(i)
else:
    print("循环正常执行完毕，没有break")
```
示例12：带break，else不触发
```python
for i in range(1,6):
    if i ==3:
        break
    print(i)
else:
    print("这句话不会打印")
```

## 五、for循环嵌套（双重循环，打印图形、乘法表，编程大题！）
> 外层循环控制行数，内层循环控制每行输出内容
示例13：打印矩形（3行5列星号）
```python
for i in range(3):          # 3行
    for j in range(5):      # 每行5个*
        print("*",end="")
    print()                  # 一行结束换行
```
示例14：打印直角三角形
```python
for i in range(1,6):
    for j in range(i):
        print("*",end="")
    print()
```
示例15：九九乘法表（对口经典大题）
```python
for i in range(1,10):
    for j in range(1,i+1):
        print(f"{j}*{i}={i*j}",end="\t")
    print()
```

## 六、简答背诵版（直接背）
1. for循环是遍历循环，依次从可迭代对象取出元素，执行循环体。
2. range函数：range(start,stop,step)，生成整数序列，取不到stop。
3. break：终止整个循环；continue：跳过本次循环，进入下一轮。
4. for...else：循环正常结束（无break）才执行else代码。
5. 循环嵌套：一个循环里面包含另一个循环，内外层缩进区分。

## 七、配套简答题题干（加入题库）
1. 简述for循环的语法格式与执行流程。
2. 简述range()函数三个参数的含义，以及左闭右开规则。
3. break和continue在for循环中的作用有什么区别？
4. 简述for...else语句的执行特点。
5. 什么是循环嵌套？

## 八、易错题汇总
1. range(1,10) 只有1~9，不含10！
2. for后面in不能丢，末尾冒号不能丢，缩进必须统一
3. continue不是跳出循环，只是跳过当前这一轮
4. for适合**知道循环次数**场景；while适合不确定次数场景（后面讲while）

---
接下来你想要：
① while循环详解（同样足量示例），还是
② 本节for循环的检测试卷（填空10、单选10、多选3、判断10）？