---
# 这部分是关键！侧边栏显示名由这里决定
title: 2.8 while循环 # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 2.8 while循环 # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---
# Python while循环详解｜河北对口升学（足量示例，考点版）
> while 是**条件循环**：先判断条件，条件为 True 执行循环体；条件为 False，循环结束。
> 适用场景：**不知道一共循环多少次**，依靠条件决定什么时候停下。
> for循环：适合已知次数、遍历可迭代对象。
语法：
```python
while 条件表达式:
    循环体
```
⚠️ 硬性要求：
1. 行末尾必须写冒号 `:`
2. 循环体缩进对齐（4空格）
3. 循环体内一般要有**改变条件的语句**，否则变成死循环

---
## 一、基础示例
示例1：输出1～10
```python
i = 1
while i <= 10:
    print(i)
    i = i + 1   # 修改i，让条件最后不成立
```

示例2：计算 1+2+3+…+100 的和（对口升学经典编程）
```python
s = 0
i = 1
while i <= 100:
    s = s + i
    i += 1
print("总和 =", s)
```

示例3：输出1~20里面所有偶数
```python
i = 2
while i <= 20:
    print(i)
    i += 2
```

示例4：输出1~20里面所有奇数
```python
i = 1
while i <= 20:
    print(i)
    i += 2
```

示例5：求1~50所有奇数的和
```python
s = 0
i = 1
while i <= 50:
    s += i
    i += 2
print("奇数和：", s)
```

示例6：反复输入数字，直到输入0停止
```python
num = int(input("请输入数字，输入0结束："))
while num != 0:
    print("你输入的数字是：", num)
    num = int(input("请输入数字，输入0结束："))
print("循环结束")
```

---
## 二、死循环 while True（高频考点）
`while True` 条件永久为真，本身就是死循环，**必须配合 break 退出**
示例7：输入密码，密码正确就退出循环
```python
while True:
    pwd = input("请输入密码：")
    if pwd == "123456":
        print("密码正确！")
        break
    else:
        print("密码错误，请重新输入")
```

示例8：不断求和，输入-1结束累加
```python
total = 0
while True:
    n = int(input("请输入数字（输入-1结束）："))
    if n == -1:
        break
    total += n
print("累加总和：", total)
```

---
## 三、break 与 continue
- break：**立刻终止整个while循环，跳出循环**
- continue：**跳过本次循环剩下代码，直接回到while条件判断**，开启下一轮
> ⚠️ continue大坑：变量自增一定要写在continue前面，不然直接卡死死循环！

示例9：break，i等于6直接停止
```python
i = 1
while i <= 10:
    if i == 6:
        break
    print(i)
    i += 1
# 输出：1 2 3 4 5
```

示例10：continue，跳过数字5
```python
i = 0
while i <= 9:
    i += 1
    if i == 5:
        continue
    print(i)
# 输出：1 2 3 4 6 7 8 9 10
```
❌ 错误版本（死循环，不要写！）
```python
i = 1
while i <= 9:
    if i == 5:
        continue
    print(i)
    i += 1   # 遇到continue，这句永远跑不到
```

示例11：只打印3的倍数，其余跳过
```python
i = 1
while i <= 15:
    if i % 3 != 0:
        i += 1
        continue
    print(i)
    i += 1
```

---
## 四、while ... else 结构（选择、简答考点）
规则：
✅ 循环**正常结束（条件不成立退出，没有break）** → 执行else
❌ 循环被break打断退出 → else不执行

示例12：正常结束，执行else
```python
i = 1
while i <= 4:
    print(i)
    i += 1
else:
    print("循环正常跑完，没有break")
```

示例13：break打断，else不执行
```python
i = 1
while i <= 4:
    if i == 3:
        break
    print(i)
    i += 1
else:
    print("这句话不会输出")
```

示例14：用while+else判断是否找到目标数字
```python
i = 1
while i <= 10:
    if i == 7:
        print("找到7了")
        break
    i += 1
else:
    print("循环结束，没有找到7")
```

---
## 五、while嵌套循环（双重while，打印图形，编程大题）
外层循环控制**行数**，内层循环控制**一行输出多少内容**

示例15：打印直角三角形（4行）
```python
i = 1
while i <= 4:
    j = 1
    while j <= i:
        print("*", end="")
        j += 1
    print()
    i += 1
```
输出：
```
*
**
***
****
```

示例16：打印倒直角三角形
```python
i = 4
while i >= 1:
    j = 1
    while j <= i:
        print("*", end="")
        j += 1
    print()
    i -= 1
```

示例17：while实现九九乘法表
```python
i = 1
while i <= 9:
    j = 1
    while j <= i:
        print(f"{j}*{i}={i*j}", end="\t")
        j += 1
    print()
    i += 1
```

---
## 六、综合应用题示例（对口常考题型）
示例18：统计1~100里面能被7整除的数字个数
```python
count = 0
i = 1
while i <= 100:
    if i % 7 == 0:
        count += 1
    i += 1
print("个数：", count)
```

示例19：输入多个成绩，输入-1结束，求平均分
```python
sum_score = 0
cnt = 0
while True:
    s = int(input("输入成绩，-1结束："))
    if s == -1:
        break
    sum_score += s
    cnt += 1
if cnt > 0:
    avg = sum_score / cnt
    print("平均分：", avg)
else:
    print("没有输入成绩")
```

示例20：求阶乘 5! = 1*2*3*4*5
```python
n = 5
res = 1
i = 1
while i <= n:
    res *= i
    i += 1
print("5的阶乘：", res)
```

---
## 七、背诵简答素材
1. while循环称为条件循环，先判断条件，条件为True执行循环体，条件为False循环终止。
2. while循环中必须有修改条件变量的语句，防止死循环。
3. break：终止整个循环；continue：跳过本次循环剩余语句，回到条件判断。
4. while…else：循环正常结束（未被break中断）才执行else代码。
5. while适合循环次数不确定场景；for适合循环次数确定、遍历可迭代对象。

## 八、简答题干（直接加入题库）
1. 简述while循环语法格式与执行流程。
2. 什么是死循环？while循环如何避免死循环？
3. while循环中break和continue的作用是什么，区别是什么？
4. 简述while...else语句的执行特点。
5. 对比for循环和while循环各自适用场景。

## 九、易错点总结
1. while后面放**条件表达式**，不能直接写while i in range()（这是for写法）
2. 冒号、缩进是必考点，漏冒号、缩进不一致直接报错
3. continue容易造成死循环，自增变量要放在continue前面
4. while True本身不会停止，必须搭配break

如果你想要，我可以继续讲**列表list**，或者出一套while循环专项试卷（填空10、单选10、多选3、判断10）。


