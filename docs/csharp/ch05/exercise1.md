---
# 这部分是关键！侧边栏显示名由这里决定
title: 练习：窗体  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 练习：窗体  # 显式指定侧边栏显示名（优先级最高）
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
7. **控制按钮**：隐藏「最大化」按钮，只保留「最小化」和「关闭」按钮。
8. **边界**：设置窗体为**固定大小**，不允许用户拖拽改变窗体尺寸。
9.**窗口区**：设置窗体的背景颜色为浅蓝色（LightBlue），并在窗口区添加一个`Label`标签，显示「这是我的窗口区」，标签字体大小为14，加粗。
10. 设置窗体启动位置为屏幕中央

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
public Form1()
{
    InitializeComponent();
    
    // 在Load事件之前设置这些属性
    this.Text = "我的专属窗体";
    this.MaximizeBox = false;
    this.MinimizeBox = true;
    this.FormBorderStyle = FormBorderStyle.FixedSingle;
    this.BackColor = Color.LightBlue;
    this.Width = 400;
    this.Height = 400;
    this.StartPosition = FormStartPosition.CenterScreen; // ✅ 在这里设置
}

private void Form1_Load(object sender, EventArgs e)
{
    // 只处理需要在窗体加载时执行的代码
    TextBox textBox1 = new TextBox();
    this.Controls.Add(textBox1);
    textBox1.PasswordChar = '*';
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



|方法|说明|考点|
|---|---|---|
|窗体名.Active()|激活窗体|是|
|窗体名.Show()|显示窗体|是|
|窗体名.Hide()|隐藏窗体|是|
|窗体名.Close()|关闭窗体|是|
|窗体名.Refresh()|刷新窗体|是|

下面我将通过一个简单的案例来演示这些基础方法。我们将创建两个窗体：主窗体（MainForm）和子窗体（ChildForm），通过按钮来演示各个方法。

## 项目结构：
- MainForm：主窗体，包含各种操作的按钮
- ChildForm：子窗体，用于演示窗体操作

---

## 步骤1：创建项目并添加窗体

### 1. 创建新的Windows窗体应用项目

### 2. 添加第二个窗体
在解决方案资源管理器中：
1. 右键项目 → 添加 → 窗体
2. 命名为 `ChildForm.cs`

---

## 步骤2：设计主窗体（MainForm）

### MainForm 代码：

```csharp
using System;
using System.Drawing;
using System.Windows.Forms;

namespace WindowsFormsAppDemo
{
    public partial class MainForm : Form
    {
        // 声明子窗体变量
        private ChildForm childForm;
        
        public MainForm()
        {
            InitializeComponent();
            InitializeChildForm();
            SetupControls();
        }
        
        private void InitializeChildForm()
        {
            // 创建子窗体实例
            childForm = new ChildForm();
            childForm.Text = "子窗体 - 操作方法演示";
            
            // 设置子窗体位置（相对于主窗体）
            childForm.StartPosition = FormStartPosition.Manual;
            childForm.Location = new Point(this.Location.X + this.Width + 10, this.Location.Y);
        }
        
        private void SetupControls()
        {
            // 设置主窗体属性
            this.Text = "主窗体 - C#窗体方法演示";
            this.Size = new Size(600, 400);
            this.StartPosition = FormStartPosition.CenterScreen;
            
            // 创建按钮
            Button btnShow = CreateButton("显示窗体", 20, 20);
            Button btnHide = CreateButton("隐藏窗体", 20, 70);
            Button btnActivate = CreateButton("激活窗体", 20, 120);
            Button btnRefresh = CreateButton("刷新窗体", 20, 170);
            Button btnClose = CreateButton("关闭窗体", 20, 220);
            Button btnToggle = CreateButton("切换显示状态", 20, 270);
            
            // 创建状态标签
            Label lblStatus = new Label();
            lblStatus.Text = "状态：子窗体未显示";
            lblStatus.Location = new Point(200, 20);
            lblStatus.Size = new Size(300, 25);
            lblStatus.Name = "lblStatus";
            this.Controls.Add(lblStatus);
            
            // 创建信息文本框
            TextBox txtInfo = new TextBox();
            txtInfo.Multiline = true;
            txtInfo.ScrollBars = ScrollBars.Vertical;
            txtInfo.Location = new Point(200, 50);
            txtInfo.Size = new Size(350, 250);
            txtInfo.ReadOnly = true;
            txtInfo.Name = "txtInfo";
            this.Controls.Add(txtInfo);
            
            // 添加按钮事件
            btnShow.Click += BtnShow_Click;
            btnHide.Click += BtnHide_Click;
            btnActivate.Click += BtnActivate_Click;
            btnRefresh.Click += BtnRefresh_Click;
            btnClose.Click += BtnClose_Click;
            btnToggle.Click += BtnToggle_Click;
        }
        
        private Button CreateButton(string text, int x, int y)
        {
            Button button = new Button();
            button.Text = text;
            button.Location = new Point(x, y);
            button.Size = new Size(150, 40);
            this.Controls.Add(button);
            return button;
        }
        
        private void UpdateStatus(string message)
        {
            // 更新状态标签
            Control lblStatus = this.Controls["lblStatus"];
            if (lblStatus != null)
            {
                lblStatus.Text = $"状态：{message}";
            }
            
            // 在信息框中添加日志
            Control txtInfo = this.Controls["txtInfo"];
            if (txtInfo != null)
            {
                TextBox textBox = txtInfo as TextBox;
                textBox.AppendText($"[{DateTime.Now:HH:mm:ss}] {message}\r\n");
                textBox.ScrollToCaret(); // 滚动到底部
            }
        }
        
        // ===================== 按钮事件处理 =====================
        
        // 1. 显示窗体
        private void BtnShow_Click(object sender, EventArgs e)
        {
            if (!childForm.Visible)
            {
                childForm.Show();
                UpdateStatus("子窗体已显示");
                
                // 设置子窗体位置
                childForm.Location = new Point(this.Location.X + this.Width + 10, this.Location.Y);
            }
            else
            {
                UpdateStatus("子窗体已经显示，无需重复操作");
            }
        }
        
        // 2. 隐藏窗体
        private void BtnHide_Click(object sender, EventArgs e)
        {
            if (childForm.Visible)
            {
                childForm.Hide();
                UpdateStatus("子窗体已隐藏");
            }
            else
            {
                UpdateStatus("子窗体已经隐藏，无需重复操作");
            }
        }
        
        // 3. 激活窗体
        private void BtnActivate_Click(object sender, EventArgs e)
        {
            if (childForm.Visible)
            {
                childForm.Activate();
                UpdateStatus("已激活子窗体");
                
                // 演示激活效果：改变子窗体标题
                childForm.Text = "子窗体 - 已激活 (点击主窗体我会失去焦点)";
            }
            else
            {
                UpdateStatus("无法激活，子窗体未显示");
            }
        }
        
        // 4. 刷新窗体
        private void BtnRefresh_Click(object sender, EventArgs e)
        {
            if (childForm.Visible)
            {
                childForm.Refresh();
                UpdateStatus("已刷新子窗体");
                
                // 演示刷新效果：在子窗体上绘制随机颜色
                childForm.UpdateRandomColor();
            }
            else
            {
                UpdateStatus("无法刷新，子窗体未显示");
            }
        }
        
        // 5. 关闭窗体
        private void BtnClose_Click(object sender, EventArgs e)
        {
            if (!childForm.IsDisposed && childForm.Visible)
            {
                childForm.Close();
                UpdateStatus("子窗体已关闭");
                
                // 重新创建窗体实例
                InitializeChildForm();
            }
            else
            {
                UpdateStatus("子窗体未显示或已关闭");
            }
        }
        
        // 6. 切换显示状态
        private void BtnToggle_Click(object sender, EventArgs e)
        {
            if (childForm.Visible)
            {
                childForm.Hide();
                UpdateStatus("已隐藏子窗体（切换）");
            }
            else
            {
                childForm.Show();
                childForm.Location = new Point(this.Location.X + this.Width + 10, this.Location.Y);
                UpdateStatus("已显示子窗体（切换）");
            }
        }
    }
}
```

---

## 步骤3：设计子窗体（ChildForm）

### ChildForm 代码：

```csharp
using System;
using System.Drawing;
using System.Windows.Forms;

namespace WindowsFormsAppDemo
{
    public partial class ChildForm : Form
    {
        // 用于演示刷新的颜色变量
        private Color currentColor = Color.LightBlue;
        private Random random = new Random();
        
        public ChildForm()
        {
            InitializeComponent();
            SetupChildForm();
        }
        
        private void SetupChildForm()
        {
            // 设置窗体属性
            this.Text = "子窗体";
            this.Size = new Size(300, 300);
            this.BackColor = currentColor;
            
            // 添加标签说明
            Label lblInfo = new Label();
            lblInfo.Text = "这是一个演示窗体\r\n\r\n操作方法：\r\n1. Show() - 显示\r\n2. Hide() - 隐藏\r\n3. Activate() - 激活\r\n4. Refresh() - 刷新\r\n5. Close() - 关闭";
            lblInfo.Location = new Point(20, 20);
            lblInfo.Size = new Size(250, 150);
            lblInfo.Font = new Font("微软雅黑", 10);
            this.Controls.Add(lblInfo);
            
            // 添加时间显示标签
            Label lblTime = new Label();
            lblTime.Name = "lblTime";
            lblTime.Location = new Point(20, 180);
            lblTime.Size = new Size(250, 30);
            lblTime.Font = new Font("微软雅黑", 10, FontStyle.Bold);
            this.Controls.Add(lblTime);
            
            // 添加一个按钮演示焦点
            Button btnTest = new Button();
            btnTest.Text = "测试按钮（点击我获得焦点）";
            btnTest.Location = new Point(20, 220);
            btnTest.Size = new Size(240, 30);
            btnTest.Click += BtnTest_Click;
            this.Controls.Add(btnTest);
            
            // 启动定时器更新时间
            Timer timer = new Timer();
            timer.Interval = 1000; // 1秒
            timer.Tick += Timer_Tick;
            timer.Start();
        }
        
        // 定时器事件，更新时间显示
        private void Timer_Tick(object sender, EventArgs e)
        {
            Control lblTime = this.Controls["lblTime"];
            if (lblTime != null)
            {
                lblTime.Text = $"当前时间：{DateTime.Now:HH:mm:ss}";
            }
        }
        
        // 测试按钮点击事件
        private void BtnTest_Click(object sender, EventArgs e)
        {
            MessageBox.Show("按钮被点击！\n现在子窗体拥有焦点。", "提示", 
                MessageBoxButtons.OK, MessageBoxIcon.Information);
        }
        
        // 用于演示刷新的方法：随机改变背景色
        public void UpdateRandomColor()
        {
            // 生成随机颜色
            Color[] colors = {
                Color.LightBlue,
                Color.LightGreen,
                Color.LightPink,
                Color.LightYellow,
                Color.LightGray,
                Color.LightCyan
            };
            
            currentColor = colors[random.Next(colors.Length)];
            this.BackColor = currentColor;
            
            // 在标题栏显示颜色信息
            this.Text = $"子窗体 - 背景色: {currentColor.Name}";
        }
        
        // 重写OnPaint方法，自定义绘制
        protected override void OnPaint(PaintEventArgs e)
        {
            base.OnPaint(e);
            
            // 在窗体上绘制一些图形
            using (Pen pen = new Pen(Color.Red, 3))
            {
                // 绘制一个矩形边框
                e.Graphics.DrawRectangle(pen, 10, 10, this.Width - 30, this.Height - 50);
                
                // 绘制文本
            }
        }
        
        // 窗体激活事件
        protected override void OnActivated(EventArgs e)
        {
            base.OnActivated(e);
            this.BackColor = Color.FromArgb(200, 255, 200); // 激活时变为浅绿色
        }
        
        // 窗体失去焦点事件
        protected override void OnDeactivate(EventArgs e)
        {
            base.OnDeactivate(e);
            this.BackColor = currentColor; // 恢复原颜色
            this.Text = "子窗体 - 失去焦点";
        }
        
        // 窗体关闭事件
        protected override void OnFormClosing(FormClosingEventArgs e)
        {
            // 可以在这里添加关闭前的确认
            DialogResult result = MessageBox.Show("确定要关闭窗体吗？", "确认", 
                MessageBoxButtons.YesNo, MessageBoxIcon.Question);
            
            if (result == DialogResult.No)
            {
                e.Cancel = true; // 取消关闭
            }
        }
    }
}
```

---

## 步骤4：修改Program.cs

```csharp
using System;
using System.Windows.Forms;

namespace WindowsFormsAppDemo
{
    static class Program
    {
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new MainForm());
        }
    }
}
```

---

## 步骤5：运行演示

### 操作方法：

1. **显示窗体 (Show())**
   - 点击"显示窗体"按钮，子窗体会显示出来
   - 如果窗体已经显示，会有提示信息

2. **隐藏窗体 (Hide())**
   - 点击"隐藏窗体"按钮，子窗体会隐藏
   - 窗体仍在内存中，只是不可见

3. **激活窗体 (Activate())**
   - 点击"激活窗体"按钮，子窗体会获得焦点
   - 标题栏会变亮，窗体提到最前面
   - 点击主窗体，子窗体会失去焦点

4. **刷新窗体 (Refresh())**
   - 点击"刷新窗体"按钮，子窗体会重新绘制
   - 背景色会随机改变，演示刷新效果

5. **关闭窗体 (Close())**
   - 点击"关闭窗体"按钮，子窗体完全关闭
   - 需要重新创建实例才能再次显示

6. **切换显示状态**
   - 点击"切换显示状态"按钮，会在显示和隐藏之间切换

---

## 方法详细说明：

| 方法 | 作用 | 重要特性 | 使用场景 |
|------|------|----------|----------|
| **Show()** | 显示窗体 | 1. 使窗体可见 2. 非阻塞方法 3. 可多次调用 | 显示对话框、子窗口、设置窗口等 |
| **Hide()** | 隐藏窗体 | 1. 使窗体不可见但仍在内存 2. 不释放资源 3. 可再次显示 | 临时隐藏窗口、后台运行 |
| **Activate()** | 激活窗体 | 1. 使窗体获得焦点 2. 提到最前面 3. 触发Activated事件 | 通知用户、响应提醒 |
| **Refresh()** | 刷新窗体 | 1. 强制重绘窗体 2. 立即更新显示 3. 触发Paint事件 | 数据更新后刷新显示 |
| **Close()** | 关闭窗体 | 1. 释放窗体资源 2. 触发FormClosing事件 3. 需要重新创建实例 | 结束窗体使用、释放资源 |

---

## 初学者注意事项：

1. **Show() vs ShowDialog()**
   ```csharp
   // Show() - 非模态窗体，不阻塞主窗体
   childForm.Show();
   
   // ShowDialog() - 模态窗体，阻塞主窗体直到关闭
   childForm.ShowDialog();
   ```

2. **Close() 与 Dispose() 的区别**
   - `Close()`：关闭窗体，可以取消（通过FormClosing事件）
   - `Dispose()`：释放所有资源，不可取消

3. **窗体生命周期**
   ```
   创建实例 → Show() → [可能多次 Hide()/Show()] → Close() → 重新创建
   ```

4. **线程安全**
   ```csharp
   // 错误：从其他线程访问窗体控件
   // 正确：使用Invoke
   if (childForm.InvokeRequired)
   {
       childForm.Invoke(new Action(() => 
       {
           childForm.Refresh();
       }));
   }
   ```

---

## 扩展练习建议：

1. 添加一个按钮，使用 `ShowDialog()` 方法显示模态窗体
2. 在子窗体中添加一个进度条，演示 `Refresh()` 的实时更新效果
3. 实现窗体间的数据传递
4. 尝试使用窗体的 `Opacity` 属性实现淡入淡出效果

这个案例涵盖了窗体操作的基础方法，通过实际操作你可以更好地理解这些方法的作用和区别。每个按钮都有明确的效果演示，帮助初学者直观地理解窗体操作。