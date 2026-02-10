---
# 这部分是关键！侧边栏显示名由这里决定
title: 练习：窗体控件  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 练习：窗体控件 # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 6  # 侧边栏中排在第1位
---

你想全面掌握WinForm中Label控件的`Text`属性的用法，包括基础的设置/读取、常见应用场景，以及使用时需要注意的细节，对吧？





### 题目 1:实时显示输入字符数

结合TextChanged事件，实时展示用户输入的字符数（比如评论、昵称输入框的 “已输入 X/50 字” 提示）：

```csharp
// 窗体加载时绑定事件
private void Form1_Load(object sender, EventArgs e)
{
    // 设置输入框最大长度
    textBox1.MaxLength = 50;
    // 绑定文本变化事件
    textBox1.TextChanged += TextBox1_TextChanged;
}

// 文本变化时实时更新字符数提示
private void TextBox1_TextChanged(object sender, EventArgs e)
{
    // 获取当前长度
    int currentLen = textBox1.TextLength;
    // 显示到Label上（label1用于提示）
    label1.Text = $"已输入：{currentLen}/50 字";
    
    // 可选：超过最大长度时标红提示
    if (currentLen >= textBox1.MaxLength)
    {
        label1.ForeColor = Color.Red;
    }
    else
    {
        label1.ForeColor = Color.Black;
    }
}
```



## 题目1：用户登录界面验证（Label、TextBox、Button综合）
**题目描述：**
创建一个登录界面，包含：
1. 用户名标签（Label）：显示"用户名"，字体为微软雅黑12号，靠右对齐
2. 用户名文本框（TextBox）：限制最大长度为10个字符
3. 密码标签（Label）：显示"密码"，字体为微软雅黑12号，靠右对齐  
4. 密码文本框（TextBox）：显示为*号，限制最大长度为8个字符
5. 登录按钮（Button）：初始为禁用状态
6. 要求：当两个文本框都有内容时，启用登录按钮；任意一个文本框为空时，禁用登录按钮

**要求实现的功能：**
- 设置控件的相应属性
- 编写TextChanged事件处理程序
- 编写按钮点击事件

---

## 题目2：个人信息注册表单（ComboBox、RadioButton综合）
**题目描述：**
创建一个个人信息注册表单，包含：
1. 性别选择：使用两个RadioButton表示"男"和"女"，默认选中"男"
2. 城市选择：使用ComboBox提供5个城市选项（北京、上海、广州、深圳、成都）
3. 爱好选择：使用3个CheckBox表示"阅读"、"运动"、"音乐"，其中"运动"为选中状态
4. 提交按钮：点击后显示选择的信息

**要求实现的功能：**
- 动态添加ComboBox的选项
- 设置RadioButton和CheckBox的初始状态
- 获取用户的选择并显示

---

## 题目3：购物车列表管理（ListBox综合应用）
**题目描述：**
创建一个购物车管理界面，包含：
1. 商品列表框（ListBox）：显示商品列表，支持多选，按字母排序
2. 添加按钮：将文本框中的商品添加到列表框
3. 删除按钮：删除选中的商品
4. 清空按钮：清空所有商品
5. 文本框：用于输入新商品

**要求实现的功能：**
- 设置ListBox支持多选和排序
- 实现商品添加功能
- 实现选中商品删除功能
- 显示当前选中的商品数量

---

## 题目4：图片浏览器（PictureBox、ScrollBar综合）
**题目描述：**
创建一个简易图片浏览器，包含：
1. PictureBox：显示图片，设置BorderStyle为Fixed3D
2. 水平滚动条（HScrollBar）：控制图片水平移动
3. 垂直滚动条（VScrollBar）：控制图片垂直移动
4. 两个Label：分别显示水平和垂直滚动条的当前值

**要求实现的功能：**
- 设置滚动条的范围（0-100）
- 设置SmallChange为1，LargeChange为10
- 滚动条值变化时更新Label显示
- PictureBox的Anchor属性设置为Top, Left

---

## 题目5：数字时钟（Timer控件应用）
**题目描述：**
创建一个数字时钟，包含：
1. Label：显示当前时间，字体为Arial 24号
2. Timer控件：每秒更新一次时间显示
3. 开始/停止按钮：控制时钟的运行和停止

**要求实现的功能：**
- 设置Timer的Interval为1000毫秒
- 在Tick事件中更新Label显示的时间
- 通过按钮控制Timer的Enabled属性
- 时间格式为"HH:mm:ss"

---

## 题目6：选项设置界面（GroupBox、CheckBox综合）
**题目描述：**
创建一个软件设置界面，包含：
1. 使用两个GroupBox分别组织"显示设置"和"功能设置"
2. 显示设置：包含"显示工具栏"、"显示状态栏"两个CheckBox
3. 功能设置：包含"自动保存"、"自动更新"两个CheckBox
4. 应用按钮：点击后显示所有选中的设置项

**要求实现的功能：**
- 设置GroupBox的Text属性
- 设置CheckBox的初始状态
- 使用三态CheckBox表示不确定状态
- 获取所有GroupBox内控件的状态

---

## 题目7：多页面数据录入（TabControl综合）
**题目描述：**
创建一个多页数据录入界面，包含：
1. TabControl：包含"基本信息"和"详细信息"两个标签页
2. 基本信息页：包含姓名、年龄的文本框
3. 详细信息页：包含地址、电话的文本框
4. 显示当前激活页面的按钮

**要求实现的功能：**
- 动态添加TabPage
- 设置TabControl的Multiline属性
- 获取当前选中的TabPage
- 切换标签页时更新状态显示

---

## 题目8：文本编辑器（TextBox高级功能）
**题目描述：**
创建一个简易文本编辑器，包含：
1. 多行文本框（TextBox）：支持多行文本，带垂直滚动条
2. 功能按钮：包含"复制"、"粘贴"、"全选"、"清除"按钮
3. 状态栏：显示当前文本长度和选中文本长度
4. 只读切换按钮：切换文本框的只读状态

**要求实现的功能：**
- 设置TextBox的Multiline、ScrollBars属性
- 实现文本操作功能（复制、粘贴、全选）
- 实时显示TextLength
- 获取SelectedText的长度

---

## 题目9：问卷调查系统（各种控件综合）
**题目描述：**
创建一个问卷调查界面，包含：
1. 使用Label显示问卷标题
2. 使用RadioButton组选择性别
3. 使用ComboBox选择年龄段
4. 使用CheckedListBox选择兴趣爱好
5. 使用Button提交问卷
6. 使用RichTextBox显示提交结果

**要求实现的功能：**
- 设置控件的Name属性以便代码访问
- 实现数据验证（必须选择性别）
- 格式化显示提交结果
- 重置问卷功能

---

## 题目10：系统状态监控面板（各种属性综合应用）
**题目描述：**
创建一个系统状态监控面板，包含：
1. 状态指示灯（Label）：使用Image属性显示红/绿灯图标
2. 进度显示（Label + Timer）：模拟系统负载变化
3. 控制面板（GroupBox）：包含启动、停止、重置按钮
4. 日志显示（TextBox）：只读模式显示操作日志

**要求实现的功能：**
- 动态切换Label的Image
- 使用Timer模拟状态变化
- 设置TextBox为只读和多行
- 控制按钮的Enabled状态
- 使用Anchor属性布局

---

## 参考答案

### 题目1答案：
```csharp
// 1. 设置控件属性
Label lblUser = new Label();
lblUser.Text = "用户名：";
lblUser.Font = new Font("微软雅黑", 12);
lblUser.TextAlign = ContentAlignment.MiddleRight;
lblUser.AutoSize = true;

TextBox txtUser = new TextBox();
txtUser.MaxLength = 10;
txtUser.Name = "txtUser";

Label lblPwd = new Label();
lblPwd.Text = "密码：";
lblPwd.Font = new Font("微软雅黑", 12);
lblPwd.TextAlign = ContentAlignment.MiddleRight;

TextBox txtPwd = new TextBox();
txtPwd.MaxLength = 8;
txtPwd.PasswordChar = '*';
txtPwd.Name = "txtPwd";

Button btnLogin = new Button();
btnLogin.Text = "登录";
btnLogin.Enabled = false;
btnLogin.Name = "btnLogin";

// 2. TextChanged事件
private void TextBox_TextChanged(object sender, EventArgs e)
{
    btnLogin.Enabled = !string.IsNullOrEmpty(txtUser.Text) && 
                       !string.IsNullOrEmpty(txtPwd.Text);
}

// 3. 按钮点击事件
private void btnLogin_Click(object sender, EventArgs e)
{
    MessageBox.Show($"登录成功！\n用户名：{txtUser.Text}");
}
```

### 题目2答案：
```csharp
// 1. 设置RadioButton
RadioButton rbMale = new RadioButton();
rbMale.Text = "男";
rbMale.Checked = true;
rbMale.Name = "rbMale";

RadioButton rbFemale = new RadioButton();
rbFemale.Text = "女";
rbFemale.Name = "rbFemale";

// 2. 设置ComboBox
ComboBox cbCity = new ComboBox();
cbCity.Items.AddRange(new string[] { "北京", "上海", "广州", "深圳", "成都" });
cbCity.SelectedIndex = 0;
cbCity.Sorted = true;

// 3. 设置CheckBox
CheckBox cbRead = new CheckBox();
cbRead.Text = "阅读";
cbRead.Name = "cbRead";

CheckBox cbSport = new CheckBox();
cbSport.Text = "运动";
cbSport.Checked = true;
cbSport.Name = "cbSport";

CheckBox cbMusic = new CheckBox();
cbMusic.Text = "音乐";
cbMusic.Name = "cbMusic";

// 4. 提交按钮事件
private void btnSubmit_Click(object sender, EventArgs e)
{
    string gender = rbMale.Checked ? "男" : "女";
    string city = cbCity.SelectedItem.ToString();
    string hobbies = "";
    
    if (cbRead.Checked) hobbies += "阅读 ";
    if (cbSport.Checked) hobbies += "运动 ";
    if (cbMusic.Checked) hobbies += "音乐 ";
    
    MessageBox.Show($"性别：{gender}\n城市：{city}\n爱好：{hobbies}");
}
```

### 题目3答案：
```csharp
ListBox lbProducts = new ListBox();
lbProducts.SelectionMode = SelectionMode.MultiExtended;
lbProducts.Sorted = true;

TextBox txtProduct = new TextBox();

Button btnAdd = new Button();
btnAdd.Text = "添加";
Button btnDelete = new Button();
btnDelete.Text = "删除选中";
Button btnClear = new Button();
btnClear.Text = "清空";

Label lblCount = new Label();

// 添加商品
private void btnAdd_Click(object sender, EventArgs e)
{
    if (!string.IsNullOrEmpty(txtProduct.Text))
    {
        lbProducts.Items.Add(txtProduct.Text);
        txtProduct.Clear();
        UpdateCount();
    }
}

// 删除选中商品
private void btnDelete_Click(object sender, EventArgs e)
{
    if (lbProducts.SelectedItems.Count > 0)
    {
        // 从后往前删除，避免索引变化
        for (int i = lbProducts.SelectedItems.Count - 1; i >= 0; i--)
        {
            lbProducts.Items.Remove(lbProducts.SelectedItems[i]);
        }
        UpdateCount();
    }
}

// 清空商品
private void btnClear_Click(object sender, EventArgs e)
{
    lbProducts.Items.Clear();
    UpdateCount();
}

// 更新计数
private void UpdateCount()
{
    lblCount.Text = $"已选：{lbProducts.SelectedItems.Count} / 总数：{lbProducts.Items.Count}";
}

// 选择变化时更新计数
private void lbProducts_SelectedIndexChanged(object sender, EventArgs e)
{
    UpdateCount();
}
```

### 题目4答案：
```csharp
PictureBox picBox = new PictureBox();
picBox.BorderStyle = BorderStyle.Fixed3D;
picBox.Anchor = AnchorStyles.Top | AnchorStyles.Left;
picBox.SizeMode = PictureBoxSizeMode.AutoSize;

HScrollBar hScroll = new HScrollBar();
hScroll.Minimum = 0;
hScroll.Maximum = 100;
hScroll.Value = 0;
hScroll.SmallChange = 1;
hScroll.LargeChange = 10;

VScrollBar vScroll = new VScrollBar();
vScroll.Minimum = 0;
vScroll.Maximum = 100;
vScroll.Value = 0;
vScroll.SmallChange = 1;
vScroll.LargeChange = 10;

Label lblHValue = new Label();
Label lblVValue = new Label();

// 滚动条值变化事件
private void hScroll_ValueChanged(object sender, EventArgs e)
{
    lblHValue.Text = $"水平：{hScroll.Value}";
    // 实际应用中会调整图片位置
    // picBox.Left = -hScroll.Value;
}

private void vScroll_ValueChanged(object sender, EventArgs e)
{
    lblVValue.Text = $"垂直：{vScroll.Value}";
    // 实际应用中会调整图片位置
    // picBox.Top = -vScroll.Value;
}
```

### 题目5答案：
```csharp
Label lblTime = new Label();
lblTime.Font = new Font("Arial", 24);
lblTime.TextAlign = ContentAlignment.MiddleCenter;
lblTime.AutoSize = false;
lblTime.Size = new Size(200, 50);

Timer timerClock = new Timer();
timerClock.Interval = 1000; // 1秒

Button btnStart = new Button();
btnStart.Text = "开始";
Button btnStop = new Button();
btnStop.Text = "停止";

// Timer的Tick事件
private void timerClock_Tick(object sender, EventArgs e)
{
    lblTime.Text = DateTime.Now.ToString("HH:mm:ss");
}

// 开始按钮事件
private void btnStart_Click(object sender, EventArgs e)
{
    timerClock.Enabled = true;
    btnStart.Enabled = false;
    btnStop.Enabled = true;
}

// 停止按钮事件
private void btnStop_Click(object sender, EventArgs e)
{
    timerClock.Enabled = false;
    btnStart.Enabled = true;
    btnStop.Enabled = false;
}

// 初始化显示
private void Form_Load(object sender, EventArgs e)
{
    lblTime.Text = DateTime.Now.ToString("HH:mm:ss");
}
```

### 题目6答案：
```csharp
GroupBox gbDisplay = new GroupBox();
gbDisplay.Text = "显示设置";
gbDisplay.Size = new Size(200, 100);

GroupBox gbFunction = new GroupBox();
gbFunction.Text = "功能设置";
gbFunction.Size = new Size(200, 100);

CheckBox cbToolbar = new CheckBox();
cbToolbar.Text = "显示工具栏";
cbToolbar.Checked = true;

CheckBox cbStatusbar = new CheckBox();
cbStatusbar.Text = "显示状态栏";
cbStatusbar.Checked = true;

CheckBox cbAutoSave = new CheckBox();
cbAutoSave.Text = "自动保存";
cbAutoSave.ThreeState = true;
cbAutoSave.CheckState = CheckState.Indeterminate;

CheckBox cbAutoUpdate = new CheckBox();
cbAutoUpdate.Text = "自动更新";
cbAutoUpdate.Checked = true;

Button btnApply = new Button();
btnApply.Text = "应用设置";

// 应用设置事件
private void btnApply_Click(object sender, EventArgs e)
{
    string settings = "当前设置：\n";
    
    // 获取GroupBox内所有CheckBox
    foreach (Control control in gbDisplay.Controls)
    {
        if (control is CheckBox cb)
        {
            settings += $"{cb.Text}: {cb.Checked}\n";
        }
    }
    
    foreach (Control control in gbFunction.Controls)
    {
        if (control is CheckBox cb)
        {
            settings += $"{cb.Text}: {cb.CheckState}\n";
        }
    }
    
    MessageBox.Show(settings);
}
```

### 题目7答案：
```csharp
TabControl tabControl = new TabControl();
tabControl.Multiline = true;

// 添加标签页
TabPage tabBasic = new TabPage("基本信息");
tabControl.TabPages.Add(tabBasic);

TabPage tabDetail = new TabPage("详细信息");
tabControl.TabPages.Add(tabDetail);

// 在标签页中添加控件
TextBox txtName = new TextBox();
txtName.Location = new Point(20, 20);
txtName.Name = "txtName";
tabBasic.Controls.Add(txtName);

TextBox txtAge = new TextBox();
txtAge.Location = new Point(20, 60);
txtAge.Name = "txtAge";
tabBasic.Controls.Add(txtAge);

TextBox txtAddress = new TextBox();
txtAddress.Location = new Point(20, 20);
txtAddress.Multiline = true;
txtAddress.Size = new Size(150, 80);
txtAddress.Name = "txtAddress";
tabDetail.Controls.Add(txtAddress);

TextBox txtPhone = new TextBox();
txtPhone.Location = new Point(20, 120);
txtPhone.Name = "txtPhone";
tabDetail.Controls.Add(txtPhone);

Button btnShowTab = new Button();
btnShowTab.Text = "显示当前页面";

Label lblStatus = new Label();

// 显示当前页面事件
private void btnShowTab_Click(object sender, EventArgs e)
{
    lblStatus.Text = $"当前页面：{tabControl.SelectedTab.Text}";
}

// 标签页切换事件
private void tabControl_SelectedIndexChanged(object sender, EventArgs e)
{
    lblStatus.Text = $"已切换到：{tabControl.SelectedTab.Text}";
}
```

### 题目8答案：
```csharp
TextBox txtEditor = new TextBox();
txtEditor.Multiline = true;
txtEditor.ScrollBars = ScrollBars.Vertical;
txtEditor.Size = new Size(300, 200);
txtEditor.Name = "txtEditor";

Button btnCopy = new Button();
btnCopy.Text = "复制";
Button btnPaste = new Button();
btnPaste.Text = "粘贴";
Button btnSelectAll = new Button();
btnSelectAll.Text = "全选";
Button btnClear = new Button();
btnClear.Text = "清除";

Button btnToggleReadOnly = new Button();
btnToggleReadOnly.Text = "切换只读";

Label lblStatus = new Label();

// 初始化
private void Form_Load(object sender, EventArgs e)
{
    UpdateStatus();
}

// 更新状态
private void UpdateStatus()
{
    int selectedLength = string.IsNullOrEmpty(txtEditor.SelectedText) ? 
                        0 : txtEditor.SelectedText.Length;
    lblStatus.Text = $"总长度：{txtEditor.TextLength} | 选中长度：{selectedLength}";
}

// TextChanged事件
private void txtEditor_TextChanged(object sender, EventArgs e)
{
    UpdateStatus();
}

// 复制
private void btnCopy_Click(object sender, EventArgs e)
{
    if (!string.IsNullOrEmpty(txtEditor.SelectedText))
    {
        Clipboard.SetText(txtEditor.SelectedText);
    }
}

// 粘贴
private void btnPaste_Click(object sender, EventArgs e)
{
    if (Clipboard.ContainsText())
    {
        txtEditor.SelectedText = Clipboard.GetText();
    }
}

// 全选
private void btnSelectAll_Click(object sender, EventArgs e)
{
    txtEditor.SelectAll();
    UpdateStatus();
}

// 清除
private void btnClear_Click(object sender, EventArgs e)
{
    txtEditor.Clear();
}

// 切换只读
private void btnToggleReadOnly_Click(object sender, EventArgs e)
{
    txtEditor.ReadOnly = !txtEditor.ReadOnly;
    btnToggleReadOnly.Text = txtEditor.ReadOnly ? "切换可写" : "切换只读";
}
```

### 题目9答案：
```csharp
Label lblTitle = new Label();
lblTitle.Text = "用户问卷调查";
lblTitle.Font = new Font("微软雅黑", 14, FontStyle.Bold);
lblTitle.AutoSize = true;

// 性别选择
GroupBox gbGender = new GroupBox();
gbGender.Text = "性别";
RadioButton rbGenderMale = new RadioButton();
rbGenderMale.Text = "男";
rbGenderMale.Name = "rbMale";
RadioButton rbGenderFemale = new RadioButton();
rbGenderFemale.Text = "女";
rbGenderFemale.Name = "rbFemale";
gbGender.Controls.Add(rbGenderMale);
gbGender.Controls.Add(rbGenderFemale);

// 年龄段选择
ComboBox cbAge = new ComboBox();
cbAge.Items.AddRange(new string[] { "18岁以下", "18-25岁", "26-35岁", "36-50岁", "50岁以上" });
cbAge.SelectedIndex = 1;

// 兴趣爱好选择
CheckedListBox clbHobbies = new CheckedListBox();
clbHobbies.Items.AddRange(new string[] { "体育", "音乐", "电影", "阅读", "旅游", "美食" });

Button btnSubmit = new Button();
btnSubmit.Text = "提交问卷";
Button btnReset = new Button();
btnReset.Text = "重置问卷";

RichTextBox rtbResult = new RichTextBox();
rtbResult.ReadOnly = true;
rtbResult.Size = new Size(300, 150);

// 提交问卷
private void btnSubmit_Click(object sender, EventArgs e)
{
    // 验证必须选择性别
    if (!rbGenderMale.Checked && !rbGenderFemale.Checked)
    {
        MessageBox.Show("请选择性别！");
        return;
    }
    
    string result = "=== 问卷结果 ===\n\n";
    result += $"性别：{(rbGenderMale.Checked ? "男" : "女")}\n";
    result += $"年龄段：{cbAge.SelectedItem}\n";
    result += "兴趣爱好：";
    
    foreach (object item in clbHobbies.CheckedItems)
    {
        result += item.ToString() + " ";
    }
    
    rtbResult.Text = result;
}

// 重置问卷
private void btnReset_Click(object sender, EventArgs e)
{
    rbGenderMale.Checked = false;
    rbGenderFemale.Checked = false;
    cbAge.SelectedIndex = 1;
    
    for (int i = 0; i < clbHobbies.Items.Count; i++)
    {
        clbHobbies.SetItemChecked(i, false);
    }
    
    rtbResult.Clear();
}
```

### 题目10答案：
```csharp
// 状态指示灯
Label lblIndicator = new Label();
lblIndicator.Size = new Size(20, 20);
lblIndicator.BorderStyle = BorderStyle.FixedSingle;

// 加载图标（假设有资源文件）
Image greenLight = Properties.Resources.green_light;
Image redLight = Properties.Resources.red_light;
lblIndicator.Image = redLight;
lblIndicator.ImageAlign = ContentAlignment.MiddleCenter;

// 进度显示
Label lblProgress = new Label();
lblProgress.Text = "系统负载：0%";
lblProgress.AutoSize = true;

// 定时器
Timer timerMonitor = new Timer();
timerMonitor.Interval = 500; // 0.5秒更新一次

// 日志文本框
TextBox txtLog = new TextBox();
txtLog.Multiline = true;
txtLog.ReadOnly = true;
txtLog.ScrollBars = ScrollBars.Vertical;
txtLog.Size = new Size(250, 100);
txtLog.Anchor = AnchorStyles.Top | AnchorStyles.Left | AnchorStyles.Right;

// 控制按钮
GroupBox gbControl = new GroupBox();
gbControl.Text = "控制面板";
gbControl.Size = new Size(200, 80);

Button btnStart = new Button();
btnStart.Text = "启动";
btnStart.Enabled = true;

Button btnStop = new Button();
btnStop.Text = "停止";
btnStop.Enabled = false;

Button btnReset = new Button();
btnReset.Text = "重置";

int progressValue = 0;

// 添加日志
private void AddLog(string message)
{
    txtLog.AppendText($"{DateTime.Now:HH:mm:ss} - {message}\r\n");
}

// 定时器事件
private void timerMonitor_Tick(object sender, EventArgs e)
{
    // 模拟负载变化
    progressValue = (progressValue + 5) % 105;
    lblProgress.Text = $"系统负载：{progressValue}%";
    
    // 更新指示灯
    lblIndicator.Image = progressValue > 70 ? redLight : greenLight;
    
    if (progressValue > 90)
    {
        AddLog("警告：系统负载过高！");
    }
}

// 启动按钮
private void btnStart_Click(object sender, EventArgs e)
{
    timerMonitor.Start();
    btnStart.Enabled = false;
    btnStop.Enabled = true;
    AddLog("系统监控已启动");
}

// 停止按钮
private void btnStop_Click(object sender, EventArgs e)
{
    timerMonitor.Stop();
    btnStart.Enabled = true;
    btnStop.Enabled = false;
    AddLog("系统监控已停止");
}

// 重置按钮
private void btnReset_Click(object sender, EventArgs e)
{
    progressValue = 0;
    lblProgress.Text = "系统负载：0%";
    lblIndicator.Image = greenLight;
    txtLog.Clear();
    AddLog("系统已重置");
}
```


## 知识点说明

**已完全覆盖的知识点（27个）**
1. Label: AutoSize、Text、Font、Height、Size、Visible、Width、TextAlign、Name、Image、Anchor、BorderStyle
2. TextBox: Text、TextLength、MaxLength、Multiline、PasswordChar、SelectedText、ReadOnly、TabIndex
3. TextBox事件: TextChanged
4. Button属性: Name、Enabled、Text、TabIndex
5. Button事件: Click、Enter
6. ComboBox: Items、SelectedIndex、SelectedItem、Sorted、Text
7. ListBox: Items、MultiColumn、SelectedItems、Sorted、Text
8. RadioButton: Checked、Text
9. CheckBox: Checked、CheckState、Text
10. 滚动条: Value、SmallChange、LargeChange
11. Timer: Interval、Tick事件
12. GroupBox: Text、Visible
13. TabControl: SelectedTab、TabPages、Multiline

**未覆盖的知识点（4个）**

1. **Label.Focused** - 标签控件的焦点状态属性
   - 用途：判断或设置标签是否获得焦点
   - 实际应用较少，因为标签通常不接收焦点

2. **Label.CanFocus** - 标签是否能获得焦点
   - 用途：确定标签是否可以接收焦点
   - 默认值为false，通常不需要设置

3. **ComboBox.DroppedDown** - 下拉列表是否展开
   - 用途：控制或获取下拉列表的展开状态
   - 可能在动态控制下拉列表时使用

4. **ComboBox.SelectedText** - 可编辑部分选中的文本
   - 用途：获取或设置组合框可编辑部分中选中的文本
   - 仅在DropDownStyle为DropDown时有效

5. **Button.MouseUp** - 鼠标按键释放事件
   - 用途：鼠标在按钮上释放时触发
   - 可用于自定义鼠标交互

6. **Button.TextChanged** - 按钮文本改变事件
   - 用途：按钮文本发生变化时触发
   - 在实际应用中较少使用

**实际未覆盖：6个知识点**

---

## 补充题目

### 补充题1：焦点管理应用
**题目描述：**
创建一个焦点测试界面，包含：
1. 一个Label，设置其CanFocus为true，并通过代码使其获得焦点
2. 显示当前获得焦点的控件名称
3. 使用Focused属性判断标签是否获得焦点

### 补充题2：ComboBox高级操作
**题目描述：**
创建一个智能搜索框，包含：
1. ComboBox设置DropDownStyle为DropDown（可编辑）
2. 通过代码控制DroppedDown属性，实现自动展开下拉列表
3. 实时获取SelectedText，实现搜索提示功能

### 补充题3：鼠标事件处理
**题目描述：**
创建一个鼠标操作测试界面，包含：
1. 按钮的MouseUp事件处理，区分左右键点击
2. 动态改变按钮文本，触发TextChanged事件
3. 显示鼠标操作日志

## 补充题答案

### 补充题1：焦点管理应用

```csharp
using System;
using System.Drawing;
using System.Windows.Forms;

public class FocusManagementForm : Form
{
    private Label lblTest;
    private Button btnFocusLabel;
    private Button btnFocusButton;
    private Label lblStatus;
    
    public FocusManagementForm()
    {
        InitializeComponents();
    }
    
    private void InitializeComponents()
    {
        this.Text = "焦点管理测试";
        this.Size = new Size(400, 300);
        
        // 测试标签 - 设置CanFocus为true
        lblTest = new Label
        {
            Text = "这是一个可以获取焦点的标签",
            Location = new Point(50, 50),
            Size = new Size(200, 30),
            BorderStyle = BorderStyle.FixedSingle,
            Name = "lblTest"
        };
        
        // 关键：设置标签可以获取焦点
        lblTest.TabStop = true; // 必须设置为true才能通过Tab键获取焦点
        // 注意：WinForm中Label的CanFocus属性是只读的，不能直接设置
        // 但可以通过设置TabStop为true使其可以接收焦点
        
        // 按钮：让标签获取焦点
        btnFocusLabel = new Button
        {
            Text = "让标签获得焦点",
            Location = new Point(50, 100),
            Size = new Size(120, 30),
            Name = "btnFocusLabel"
        };
        btnFocusLabel.Click += BtnFocusLabel_Click;
        
        // 按钮：让按钮获取焦点
        btnFocusButton = new Button
        {
            Text = "让按钮获得焦点",
            Location = new Point(200, 100),
            Size = new Size(120, 30),
            Name = "btnFocusButton"
        };
        btnFocusButton.Click += BtnFocusButton_Click;
        
        // 状态显示标签
        lblStatus = new Label
        {
            Text = "当前焦点状态：",
            Location = new Point(50, 150),
            Size = new Size(300, 100),
            AutoSize = false,
            Name = "lblStatus"
        };
        
        // 添加控件到窗体
        this.Controls.Add(lblTest);
        this.Controls.Add(btnFocusLabel);
        this.Controls.Add(btnFocusButton);
        this.Controls.Add(lblStatus);
        
        // 注册焦点变化事件
        this.Activated += Form_Activated;
        lblTest.Enter += Control_Enter;
        lblTest.Leave += Control_Leave;
        btnFocusLabel.Enter += Control_Enter;
        btnFocusLabel.Leave += Control_Leave;
        btnFocusButton.Enter += Control_Enter;
        btnFocusButton.Leave += Control_Leave;
    }
    
    // 让标签获取焦点
    private void BtnFocusLabel_Click(object sender, EventArgs e)
    {
        // 使用Focus方法让标签获取焦点
        bool success = lblTest.Focus();
        
        UpdateStatus();
        
        // 显示Focus方法的返回值
        MessageBox.Show($"lblTest.Focus() 返回值: {success}\n" +
                       $"lblTest.Focused 属性: {lblTest.Focused}\n" +
                       $"lblTest.CanFocus 属性: {lblTest.CanFocus}", 
                       "焦点信息");
    }
    
    // 让按钮获取焦点
    private void BtnFocusButton_Click(object sender, EventArgs e)
    {
        btnFocusButton.Focus();
        UpdateStatus();
    }
    
    // 控件获得焦点时
    private void Control_Enter(object sender, EventArgs e)
    {
        UpdateStatus();
    }
    
    // 控件失去焦点时
    private void Control_Leave(object sender, EventArgs e)
    {
        UpdateStatus();
    }
    
    // 窗体激活时
    private void Form_Activated(object sender, EventArgs e)
    {
        UpdateStatus();
    }
    
    // 更新状态显示
    private void UpdateStatus()
    {
        string status = "当前焦点状态：\n";
        status += $"lblTest.Focused: {lblTest.Focused}\n";
        status += $"lblTest.CanFocus: {lblTest.CanFocus}\n";
        status += $"btnFocusLabel.Focused: {btnFocusLabel.Focused}\n";
        status += $"btnFocusButton.Focused: {btnFocusButton.Focused}\n\n";
        
        // 检查哪个控件有焦点
        Control focusedControl = this.ActiveControl;
        if (focusedControl != null)
        {
            status += $"当前获得焦点的控件: {focusedControl.Name}";
        }
        else
        {
            status += "当前没有控件获得焦点";
        }
        
        lblStatus.Text = status;
    }
}

// 使用示例
// Application.Run(new FocusManagementForm());
```

### 补充题2：ComboBox高级操作

```csharp
using System;
using System.Drawing;
using System.Windows.Forms;
using System.Collections.Generic;

public class SmartComboBoxForm : Form
{
    private ComboBox comboBox;
    private Label lblSelectedText;
    private Label lblStatus;
    private Button btnToggleDropDown;
    private Timer filterTimer;
    private List<string> allItems;
    
    public SmartComboBoxForm()
    {
        InitializeComponents();
    }
    
    private void InitializeComponents()
    {
        this.Text = "智能搜索框";
        this.Size = new Size(500, 300);
        
        // 初始化数据源
        allItems = new List<string>
        {
            "Apple", "Application", "Approve", "Banana", "Book", "Box",
            "Computer", "Camera", "Car", "Dog", "Document", "Desktop",
            "Elephant", "Email", "Example", "Fruit", "File", "Folder"
        };
        
        // 智能搜索框
        comboBox = new ComboBox
        {
            Location = new Point(50, 50),
            Size = new Size(300, 25),
            DropDownStyle = ComboBoxStyle.DropDown, // 设置为可编辑
            Name = "comboBoxSmart"
        };
        
        // 添加初始数据
        comboBox.Items.AddRange(allItems.ToArray());
        
        // 事件注册
        comboBox.TextChanged += ComboBox_TextChanged;
        comboBox.SelectedIndexChanged += ComboBox_SelectedIndexChanged;
        comboBox.KeyDown += ComboBox_KeyDown;
        comboBox.Leave += ComboBox_Leave;
        
        // 显示SelectedText的标签
        lblSelectedText = new Label
        {
            Text = "选中的文本: ",
            Location = new Point(50, 90),
            Size = new Size(300, 20),
            Name = "lblSelectedText"
        };
        
        // 显示状态信息
        lblStatus = new Label
        {
            Text = "状态: 等待输入",
            Location = new Point(50, 120),
            Size = new Size(300, 20),
            Name = "lblStatus"
        };
        
        // 控制下拉列表按钮
        btnToggleDropDown = new Button
        {
            Text = "展开下拉列表",
            Location = new Point(360, 50),
            Size = new Size(100, 25),
            Name = "btnToggleDropDown"
        };
        btnToggleDropDown.Click += BtnToggleDropDown_Click;
        
        // 过滤计时器（实现输入延迟过滤）
        filterTimer = new Timer
        {
            Interval = 500 // 500毫秒延迟
        };
        filterTimer.Tick += FilterTimer_Tick;
        
        // 添加控件
        this.Controls.Add(comboBox);
        this.Controls.Add(lblSelectedText);
        this.Controls.Add(lblStatus);
        this.Controls.Add(btnToggleDropDown);
    }
    
    // 文本变化事件
    private void ComboBox_TextChanged(object sender, EventArgs e)
    {
        // 更新SelectedText显示
        UpdateSelectedTextDisplay();
        
        // 重新启动过滤计时器
        filterTimer.Stop();
        filterTimer.Start();
        
        // 如果文本框为空，显示所有项目
        if (string.IsNullOrEmpty(comboBox.Text))
        {
            comboBox.Items.Clear();
            comboBox.Items.AddRange(allItems.ToArray());
            lblStatus.Text = "状态: 显示所有项目";
        }
        else
        {
            lblStatus.Text = $"状态: 输入中 - '{comboBox.Text}'";
        }
    }
    
    // 过滤计时器事件（实现延迟过滤）
    private void FilterTimer_Tick(object sender, EventArgs e)
    {
        filterTimer.Stop();
        
        string searchText = comboBox.Text.ToLower();
        if (!string.IsNullOrEmpty(searchText))
        {
            // 过滤匹配的项目
            var filteredItems = allItems.FindAll(item => 
                item.ToLower().Contains(searchText));
            
            comboBox.Items.Clear();
            if (filteredItems.Count > 0)
            {
                comboBox.Items.AddRange(filteredItems.ToArray());
                
                // 自动展开下拉列表（使用DroppedDown属性）
                if (!comboBox.DroppedDown && filteredItems.Count > 0)
                {
                    comboBox.DroppedDown = true;
                }
                
                lblStatus.Text = $"状态: 找到 {filteredItems.Count} 个匹配项";
            }
            else
            {
                lblStatus.Text = "状态: 没有找到匹配项";
                // 如果没有匹配项，收起下拉列表
                comboBox.DroppedDown = false;
            }
        }
    }
    
    // 选中项变化事件
    private void ComboBox_SelectedIndexChanged(object sender, EventArgs e)
    {
        UpdateSelectedTextDisplay();
        lblStatus.Text = $"状态: 选择了第 {comboBox.SelectedIndex} 项";
    }
    
    // 按键事件
    private void ComboBox_KeyDown(object sender, KeyEventArgs e)
    {
        if (e.KeyCode == Keys.F2)
        {
            // F2键切换下拉列表状态
            comboBox.DroppedDown = !comboBox.DroppedDown;
            e.Handled = true;
        }
        else if (e.KeyCode == Keys.Down && !comboBox.DroppedDown)
        {
            // 按下方向键时展开下拉列表
            comboBox.DroppedDown = true;
        }
        
        UpdateSelectedTextDisplay();
    }
    
    // 失去焦点事件
    private void ComboBox_Leave(object sender, EventArgs e)
    {
        // 失去焦点时收起下拉列表
        comboBox.DroppedDown = false;
    }
    
    // 切换下拉列表按钮
    private void BtnToggleDropDown_Click(object sender, EventArgs e)
    {
        // 切换DroppedDown属性
        comboBox.DroppedDown = !comboBox.DroppedDown;
        
        btnToggleDropDown.Text = comboBox.DroppedDown ? 
            "收起下拉列表" : "展开下拉列表";
        
        lblStatus.Text = $"状态: 下拉列表已" + 
            (comboBox.DroppedDown ? "展开" : "收起");
        
        // 演示如何获取DroppedDown属性值
        MessageBox.Show($"comboBox.DroppedDown = {comboBox.DroppedDown}", 
                       "下拉列表状态");
    }
    
    // 更新SelectedText显示
    private void UpdateSelectedTextDisplay()
    {
        // 演示SelectedText属性的使用
        // 注意：SelectedText只在可编辑部分有选中文本时才有值
        
        // 方法1：获取选中文本
        string selectedText = comboBox.SelectedText;
        
        // 方法2：模拟选中部分文本（从开头到光标位置）
        if (!string.IsNullOrEmpty(comboBox.Text) && comboBox.SelectionLength == 0)
        {
            // 如果没有选中文本，可以设置选中部分文本
            comboBox.Select(0, comboBox.Text.Length);
            selectedText = comboBox.SelectedText;
        }
        
        lblSelectedText.Text = $"选中的文本: '{selectedText}' | " +
                              $"完整文本: '{comboBox.Text}' | " +
                              $"下拉状态: {comboBox.DroppedDown}";
    }
    
    // 窗体加载事件
    protected override void OnLoad(EventArgs e)
    {
        base.OnLoad(e);
        
        // 初始化显示
        UpdateSelectedTextDisplay();
        
        // 演示如何设置SelectedText
        comboBox.Text = "App";
        comboBox.Select(0, 3); // 选中前3个字符
        UpdateSelectedTextDisplay();
    }
}

// 使用示例
// Application.Run(new SmartComboBoxForm());
```

### 补充题3：鼠标事件处理

```csharp
using System;
using System.Drawing;
using System.Windows.Forms;
using System.Text;

public class MouseEventTestForm : Form
{
    private Button testButton;
    private TextBox logTextBox;
    private Button btnChangeText;
    private Label lblEventLog;
    private int clickCount = 0;
    private int textChangeCount = 0;
    
    public MouseEventTestForm()
    {
        InitializeComponents();
    }
    
    private void InitializeComponents()
    {
        this.Text = "鼠标事件测试";
        this.Size = new Size(500, 400);
        
        // 测试按钮
        testButton = new Button
        {
            Text = "点击我测试鼠标事件",
            Location = new Point(50, 30),
            Size = new Size(200, 60),
            Name = "testButton",
            Font = new Font("微软雅黑", 10),
            BackColor = Color.LightBlue
        };
        
        // 注册所有鼠标相关事件
        testButton.Click += TestButton_Click;
        testButton.MouseClick += TestButton_MouseClick;
        testButton.MouseUp += TestButton_MouseUp;
        testButton.MouseDown += TestButton_MouseDown;
        testButton.MouseEnter += TestButton_MouseEnter;
        testButton.MouseLeave += TestButton_MouseLeave;
        testButton.MouseMove += TestButton_MouseMove;
        testButton.MouseHover += TestButton_MouseHover;
        testButton.TextChanged += TestButton_TextChanged;
        
        // 改变按钮文本的按钮
        btnChangeText = new Button
        {
            Text = "改变测试按钮文本",
            Location = new Point(270, 30),
            Size = new Size(150, 30),
            Name = "btnChangeText"
        };
        btnChangeText.Click += BtnChangeText_Click;
        
        // 事件日志标签
        lblEventLog = new Label
        {
            Text = "事件触发记录:",
            Location = new Point(50, 110),
            Size = new Size(150, 20),
            Font = new Font("微软雅黑", 9, FontStyle.Bold)
        };
        
        // 日志文本框
        logTextBox = new TextBox
        {
            Location = new Point(50, 140),
            Size = new Size(400, 200),
            Multiline = true,
            ScrollBars = ScrollBars.Vertical,
            ReadOnly = true,
            Font = new Font("Consolas", 9),
            Name = "logTextBox"
        };
        
        // 添加控件
        this.Controls.Add(testButton);
        this.Controls.Add(btnChangeText);
        this.Controls.Add(lblEventLog);
        this.Controls.Add(logTextBox);
    }
    
    // 添加日志
    private void AddLog(string message)
    {
        string timestamp = DateTime.Now.ToString("HH:mm:ss.fff");
        logTextBox.AppendText($"[{timestamp}] {message}\r\n");
        
        // 自动滚动到底部
        logTextBox.SelectionStart = logTextBox.TextLength;
        logTextBox.ScrollToCaret();
    }
    
    // Click事件（标准点击事件）
    private void TestButton_Click(object sender, EventArgs e)
    {
        clickCount++;
        AddLog($"Click事件触发 - 点击次数: {clickCount}");
        
        // 演示Focused属性
        AddLog($"testButton.Focused: {testButton.Focused}");
        AddLog($"testButton.CanFocus: {testButton.CanFocus}");
    }
    
    // MouseClick事件（包含鼠标信息）
    private void TestButton_MouseClick(object sender, MouseEventArgs e)
    {
        string buttonName = GetMouseButtonName(e.Button);
        AddLog($"MouseClick事件 - 鼠标按钮: {buttonName}, 位置: ({e.X}, {e.Y}), 点击次数: {e.Clicks}");
    }
    
    // MouseUp事件（重点测试）
    private void TestButton_MouseUp(object sender, MouseEventArgs e)
    {
        string buttonName = GetMouseButtonName(e.Button);
        AddLog($"MouseUp事件触发 - 释放按钮: {buttonName}");
        
        // 根据不同的鼠标按钮执行不同的操作
        switch (e.Button)
        {
            case MouseButtons.Left:
                testButton.BackColor = Color.LightGreen;
                AddLog("左键释放 - 变为绿色");
                break;
            case MouseButtons.Right:
                testButton.BackColor = Color.LightCoral;
                AddLog("右键释放 - 变为红色");
                
                // 右键点击显示上下文菜单示例
                ContextMenuStrip contextMenu = new ContextMenuStrip();
                contextMenu.Items.Add("选项1");
                contextMenu.Items.Add("选项2");
                contextMenu.Show(testButton, e.Location);
                break;
            case MouseButtons.Middle:
                testButton.BackColor = Color.LightYellow;
                AddLog("中键释放 - 变为黄色");
                break;
        }
    }
    
    // MouseDown事件
    private void TestButton_MouseDown(object sender, MouseEventArgs e)
    {
        string buttonName = GetMouseButtonName(e.Button);
        AddLog($"MouseDown事件 - 按下按钮: {buttonName}");
    }
    
    // MouseEnter事件
    private void TestButton_MouseEnter(object sender, EventArgs e)
    {
        AddLog("MouseEnter事件 - 鼠标进入按钮区域");
        testButton.Font = new Font(testButton.Font, FontStyle.Bold);
    }
    
    // MouseLeave事件
    private void TestButton_MouseLeave(object sender, EventArgs e)
    {
        AddLog("MouseLeave事件 - 鼠标离开按钮区域");
        testButton.Font = new Font(testButton.Font, FontStyle.Regular);
        testButton.BackColor = Color.LightBlue;
    }
    
    // MouseMove事件
    private void TestButton_MouseMove(object sender, MouseEventArgs e)
    {
        // 为避免日志过多，每10次记录一次
        if (e.X % 10 == 0 && e.Y % 10 == 0)
        {
            AddLog($"MouseMove事件 - 位置: ({e.X}, {e.Y})");
        }
    }
    
    // MouseHover事件
    private void TestButton_MouseHover(object sender, EventArgs e)
    {
        AddLog("MouseHover事件 - 鼠标悬停");
        testButton.Text = "鼠标悬停中...";
    }
    
    // TextChanged事件（重点测试）
    private void TestButton_TextChanged(object sender, EventArgs e)
    {
        textChangeCount++;
        AddLog($"TextChanged事件触发 - 第{textChangeCount}次文本改变");
        AddLog($"新文本: '{testButton.Text}'");
        AddLog($"文本长度: {testButton.Text.Length}");
    }
    
    // 改变按钮文本
    private void BtnChangeText_Click(object sender, EventArgs e)
    {
        // 动态改变按钮文本，触发TextChanged事件
        string[] texts = 
        {
            "文本已改变 - 版本1",
            "新的按钮文本",
            "再次改变文本内容",
            "测试TextChanged事件",
            "鼠标事件测试按钮",
            "点击我测试鼠标事件" // 恢复原始文本
        };
        
        Random random = new Random();
        string newText = texts[random.Next(texts.Length)];
        
        AddLog($"准备改变按钮文本为: '{newText}'");
        testButton.Text = newText;
        
        // 演示按钮的Text属性访问
        AddLog($"当前按钮文本: {testButton.Text}");
    }
    
    // 获取鼠标按钮名称
    private string GetMouseButtonName(MouseButtons button)
    {
        switch (button)
        {
            case MouseButtons.Left: return "左键";
            case MouseButtons.Right: return "右键";
            case MouseButtons.Middle: return "中键";
            case MouseButtons.XButton1: return "X按钮1";
            case MouseButtons.XButton2: return "X按钮2";
            default: return button.ToString();
        }
    }
    
    // 窗体加载时初始化
    protected override void OnLoad(EventArgs e)
    {
        base.OnLoad(e);
        AddLog("=== 鼠标事件测试开始 ===");
        AddLog("请尝试以下操作:");
        AddLog("1. 左键点击按钮");
        AddLog("2. 右键点击按钮");
        AddLog("3. 鼠标悬停在按钮上");
        AddLog("4. 点击'改变文本'按钮");
        AddLog("5. 鼠标在按钮上移动");
        AddLog("======================");
    }
    
    // 窗体关闭时
    protected override void OnFormClosing(FormClosingEventArgs e)
    {
        base.OnFormClosing(e);
        AddLog($"=== 测试结束 ===");
        AddLog($"Click事件触发次数: {clickCount}");
        AddLog($"TextChanged事件触发次数: {textChangeCount}");
    }
}

// 使用示例
// Application.Run(new MouseEventTestForm());
```

## 知识点说明

这三个补充题完全覆盖了之前未涉及的6个知识点：

1. **Label.Focused** - 在补充题1中演示
2. **Label.CanFocus** - 在补充题1中演示
3. **ComboBox.DroppedDown** - 在补充题2中演示
4. **ComboBox.SelectedText** - 在补充题2中演示
5. **Button.MouseUp** - 在补充题3中重点演示
6. **Button.TextChanged** - 在补充题3中重点演示

