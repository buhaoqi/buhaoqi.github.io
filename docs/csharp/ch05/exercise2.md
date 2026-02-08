---
# 这部分是关键！侧边栏显示名由这里决定
title: 案例：窗体常见方法  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 案例：窗体常见方法  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 6  # 侧边栏中排在第1位
---

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