---
# 这部分是关键！侧边栏显示名由这里决定
title: 练习：窗体程序设计  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 练习：窗体程序设计  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 5  # 侧边栏中排在第1位
---

## 一、选择题（每题4分，共40分）

1. **窗体Name属性的作用是？**

A) 设置窗体的标题文字

B) 在代码中引用窗体的标识符

C) 设置窗体的显示名称

D) 设置窗体的图标

2. **哪个属性可以设置窗体的背景颜色？**

A) ForeColor

B) BackColor 

C) Color

D) BackgroundColor

3. **要使窗体在屏幕中央显示，应该设置哪个属性？**

A) StartPosition = FormStartPosition.CenterScreen

B) Location = CenterScreen

C) Position = Center

D) WindowState = FormStartPosition.Center

4. **窗体的Hide()方法的作用是？**
A) 关闭窗体
B) 最小化窗体
C) 隐藏窗体但仍在内存中
D) 销毁窗体

5. **当用户按下键盘上的键时，首先触发哪个事件？**
A) KeyPress
B) KeyDown
C) KeyUp
D) KeyRelease

6. **哪个事件在窗体加载完成后触发，适合进行初始化操作？**
A) FormClosing
B) FormClosed
C) Load
D) Resize

7. **要获取鼠标在窗体上的位置，应该使用哪个事件？**
A) MouseClick
B) MouseDown
C) MouseMove
D) MouseUp

8. **使用哪个方法可以打开一个新窗体？**
A) Open()
B) Show()
C) Display()
D) Run()

9. **窗体的Close()方法和Hide()方法的主要区别是？**
A) Close()隐藏窗体，Hide()关闭窗体
B) Close()关闭窗体可能退出程序，Hide()只隐藏窗体
C) 两个方法完全一样
D) Close()用于子窗体，Hide()用于主窗体

10. **哪个属性可以设置窗体的显示状态（正常、最大化、最小化）？**
A) Visible
B) ShowState
C) WindowState
D) DisplayMode

## 二、填空题（每题3分，共30分）

11. 在代码中设置窗体标题为"学生管理系统"的语句是：this.________ = "学生管理系统";

12. 设置窗体大小为800x600像素的语句是：this.Size = new ________(800, 600);

13. 当用户试图关闭窗体时触发的事件是________，窗体完全关闭后触发的事件是________。

14. 使窗体获得焦点并显示在最前面的方法是________。

15. 判断窗体是否可见的属性是________。

16. 设置窗体图标需要使用的属性是________。

17. 窗体调整大小时触发的事件是________。

18. 双击鼠标触发的事件是________。

19. 在Form1中打开Form2的代码是：Form2 f2 = new Form2(); f2.________();

20. 设置字体为"宋体"，大小为12的语句是：this.Font = new Font("________", 12);

## 三、判断题（每题2分，共20分）

21. （ ）窗体的Name属性可以在运行时修改。

22. （ ）使用Close()方法关闭主窗体会导致整个应用程序退出。

23. （ ）Visible属性为false时，窗体一定已经被销毁。

24. （ ）KeyDown、KeyPress、KeyUp事件的触发顺序是固定的。

25. （ ）MouseClick事件在MouseDown和MouseUp事件之后触发。

26. （ ）Refresh()方法可以重新绘制窗体和控件。

27. （ ）窗体的Height和Width属性只能设置，不能读取。

28. （ ）Dock属性用于设置控件在容器中的停靠位置。

29. （ ）ForeColor属性用于设置窗体上文本的颜色。

30. （ ）Load事件在窗体构造函数执行之前触发。

## 四、简答题（10分）

31. 简述在C#中创建一个窗体应用程序的基本步骤（从新建项目到显示窗体）。

---

## 五、操作题目

### 操作题1：窗体属性设置（20 分）

在窗体加载时完成以下设置：

1. 将窗体名称设置为 `MainForm`
2. 将窗体标题设置为：`学生信息管理系统`
3. 设置窗体宽度为 `800`，高度为 `500`
4. 设置窗体背景颜色为浅蓝色
5. 设置窗体前景颜色为深蓝色
6. 设置窗体字体为：宋体，12 号
7. 设置窗体启动状态为最大化|设置窗体启动位置为屏幕中央

### 操作题2：窗体显示/隐藏控制（10分）
**题目要求**：
1. 在窗体上添加两个按钮：btnShow和btnHide
2. 点击btnShow按钮时，显示窗体（如果隐藏）
3. 点击btnHide按钮时，隐藏窗体
4. 窗体隐藏后，在控制台输出"窗体已隐藏"

### 操作题3：窗体关闭确认（10分）
**题目要求**：
1. 处理窗体的FormClosing事件
2. 当用户尝试关闭窗体时，弹出确认对话框
3. 如果用户选择"是"，允许关闭窗体
4. 如果用户选择"否"，取消关闭操作

### 操作题4：键盘事件处理（10分）
**题目要求**：
1. 在窗体上添加一个Label控件lblKeyInfo
2. 处理窗体的KeyDown事件
3. 当按下键盘时，在lblKeyInfo中显示"按键按下："+按键名称
4. 处理窗体的KeyUp事件，显示"按键释放："+按键名称

### 操作题5：鼠标事件跟踪（10分）
**题目要求**：
1. 在窗体上添加一个Label控件lblMousePos
2. 处理窗体的MouseMove事件
3. 当鼠标在窗体上移动时，在lblMousePos中实时显示鼠标坐标
4. 格式："鼠标位置：X=xxx, Y=yyy"

### 操作题6：窗体加载初始化（10分）
**题目要求**：
1. 处理窗体的Load事件
2. 在窗体加载时，设置窗体图标为系统默认图标
3. 设置窗体字体为"微软雅黑"，大小12
4. 在窗体标题后添加当前日期

### 操作题7：窗体大小变化响应（10分）
**题目要求**：
1. 在窗体上添加一个Label控件lblSizeInfo
2. 处理窗体的Resize事件
3. 当窗体大小改变时，在lblSizeInfo中显示当前窗体尺寸
4. 格式："窗体尺寸：宽=xxx, 高=yyy"

### 操作题8：鼠标点击响应（10分）
**题目要求**：
1. 处理窗体的MouseClick事件
2. 当在窗体上单击鼠标时，根据点击位置不同执行不同操作：
   - 点击左半部分：背景色变为浅绿色
   - 点击右半部分：背景色变为浅黄色

### 操作题9：多窗体调用（10分）
**题目要求**：
1. 添加一个新窗体Form2
2. 在主窗体Form1上添加按钮btnOpenForm2
3. 点击btnOpenForm2时，打开Form2
4. Form2上有一个按钮，点击可以关闭自身

### 操作题10：窗体状态控制（10分）
**题目要求**：
1. 在窗体上添加三个按钮：btnNormal、btnMaximize、btnMinimize
2. btnNormal按钮：设置窗体为正常状态
3. btnMaximize按钮：最大化窗体
4. btnMinimize按钮：最小化窗体
5. 添加一个按钮btnRefresh，点击时刷新窗体

## **参考答案**

### 一、选择题
1. B  2. B  3. A  4. C  5. B  
6. C  7. C  8. B  9. B  10. C

### 二、填空题
11. Text  
12. Size  
13. FormClosing, FormClosed  
14. Activate()  
15. Visible  
16. Icon  
17. Resize  
18. MouseDoubleClick  
19. Show()  
20. 宋体

### 三、判断题
21. ×（Name属性在运行时不能修改）  
22. √  
23. ×（Visible为false只是隐藏，不一定销毁）  
24. √（KeyDown → KeyPress → KeyUp）  
25. √  
26. √  
27. ×（可以读取和设置）  
28. √  
29. √  
30. ×（Load事件在构造函数执行之后，窗体显示之前触发）

### 四、简答题
31. 基本步骤：
   1. 打开Visual Studio，选择"新建项目"
   2. 选择"Windows窗体应用"模板
   3. 设置项目名称和位置
   4. 系统自动创建Form1窗体和Program.cs文件
   5. 在Form1设计器中可以拖放控件
   6. 在Form1.cs中编写事件处理代码
   7. 在Program.cs的Main方法中，使用Application.Run(new Form1())启动窗体
   8. 按F5运行程序，显示窗体

### 五、操作题

操作题1参考代码：

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // Name
    this.Name = "MainForm";

    // 标题
    this.Text = "学生信息管理系统";

    // 大小
    this.Width = 800;
    this.Height = 500;
    // 或
    // this.Size = new Size(800, 500);

    // 字体
    this.Font = new Font("宋体", 12);

    // 背景色 / 前景色
    this.BackColor = Color.LightBlue;
    this.ForeColor = Color.DarkBlue;

    // 窗体状态
    this.WindowState = FormWindowState.Maximized;
    // this.StartPosition = FormStartPosition.CenterScreen;

    // 键盘事件必须
    this.KeyPreview = true;
}
```


操作题2参考代码：
```csharp
private void btnShow_Click(object sender, EventArgs e)
{
    this.Show();
}

private void btnHide_Click(object sender, EventArgs e)
{
    this.Hide();
    Console.WriteLine("窗体已隐藏");
}
```


操作题3参考代码：
```csharp
private void Form1_FormClosing(object sender, FormClosingEventArgs e)
{
    DialogResult result = MessageBox.Show("确定要关闭吗？", 
        "确认关闭", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
    
    if (result == DialogResult.No)
    {
        e.Cancel = true;  // 取消关闭
    }
}
```

操作题4参考代码：
```csharp
private void Form1_KeyDown(object sender, KeyEventArgs e)
{
    lblKeyInfo.Text = "按键按下：" + e.KeyCode.ToString();
}

private void Form1_KeyUp(object sender, KeyEventArgs e)
{
    lblKeyInfo.Text = "按键释放：" + e.KeyCode.ToString();
}
```

操作题5参考代码：
```csharp
private void Form1_MouseMove(object sender, MouseEventArgs e)
{
    lblMousePos.Text = $"鼠标位置：X={e.X}, Y={e.Y}";
}
```