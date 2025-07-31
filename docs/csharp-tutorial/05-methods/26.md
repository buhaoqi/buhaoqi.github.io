---
noteId: "6d1b52a066e011f0ab62e3f747310bbc"
tags: []

---

## **开场**  可以后放

> 🎙️ “大家好！欢迎观看《C#初学者实例教程》的第26课《方法参数详解》。
> 
> 我是张杰。
> 
> 上节课我们学习了方法的基本结构，今天我们要深入探讨一个超级重要的主题 - **方法参数**！""参数就像方法的'食材'，决定了方法能'烹饪'出什么结果。掌握参数的使用，你的代码会变得更灵活强大！让我们开始吧！"




### **【第一部分：值类型参数】（0:30 - 3:00）**
（屏幕显示代码示例）
```csharp
void Increase(int number) {
    number++;
    Console.WriteLine($"方法内: {number}");
}

int a = 10;
Increase(a);
Console.WriteLine($"方法外: {a}");
```

👨‍💻 **讲师**：
"先看这个例子，我们定义了一个Increase方法，它接收一个int参数。注意看输出结果："
（运行代码，显示输出）
"方法内: 11"
"方法外: 10"

（动画演示内存变化）
"这是因为int是**值类型**，传递的是值的拷贝，原始变量不受影响！"

---

### **【第二部分：引用类型参数】（3:00 - 5:30）**
（切换新示例）
```csharp
class Person {
    public string Name;
}

void ChangeName(Person p) {
    p.Name = "张三";
}

var person = new Person { Name = "李四" };
ChangeName(person);
Console.WriteLine(person.Name); // 输出什么？
```

👨‍💻 **讲师**：
"现在看这个例子，Person是引用类型。运行后输出的是...没错，是'张三'！"
（动画展示堆栈内存）
"因为引用类型传递的是引用地址，方法内修改会影响原始对象！"

---

### **【第三部分：ref/out关键字】（5:30 - 8:00）**
（并排显示两个示例）
```csharp
// ref示例
void Swap(ref int x, ref int y) {
    int temp = x;
    x = y;
    y = temp;
}

// out示例
bool TryParse(string input, out int result) {
    return int.TryParse(input, out result);
}
```

👨‍💻 **讲师**：
"有时候我们需要改变原始值，这时就需要ref和out："
1. ref：双向传递，调用前必须初始化
2. out：只出不进，调用前可以不初始化
（演示调用代码）
"特别注意：out参数在方法内必须赋值！"

---

### **【第四部分：实战练习】（8:00 - 10:00）**
（任务提示动画）
👨‍💻 **讲师**：
"现在轮到你了！请尝试："
1. 写一个方法，使用ref交换两个字符串
2. 写一个TryDivide方法，用out返回除法结果

（等待5秒后展示答案）
```csharp
void SwapStrings(ref string s1, ref string s2) {
    string temp = s1;
    s1 = s2;
    s2 = temp;
}

bool TryDivide(int a, int b, out double result) {
    if(b == 0) {
        result = 0;
        return false;
    }
    result = (double)a / b;
    return true;
}
```

---

### **【结尾总结】（10:00 - 11:30）**
（画面回到讲师）
👨‍💻 **讲师**：
"今天我们深入学习了："
✓ 值类型和引用类型参数的区别
✓ ref和out关键字的使用场景
✓ 参数传递的内存原理

（动画提示）
"下节课我们会讲**方法重载**，记得订阅频道不要错过！"

（结束画面：课程二维码 + 背景音乐）
"我是[你的名字]，我们下期见！编程快乐！"

---

### **制作建议**：
1. 使用不同颜色标注值类型和引用类型
2. 内存示意图要简洁明了
3. 在ref/out部分加入警示音效强调重点
4. 练习环节留出3秒空白让观众思考

需要调整任何部分请告诉我！ 🚀