---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 窗体设计  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 窗体设计  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 2  # 侧边栏中排在第1位
---
高考考点

- 掌握窗体的概念、属性、方法、事件；
- 掌握C#窗体的创建和使用方法；
- 掌握窗体的属性：Name、Height、Width、Visible、WindowState、Dock、Font、BackColor、ForeColor、Icon、Size；
- 掌握窗体的常用方法：Activate、Close、Refresh、Show、Hide；
- 掌握窗体的事件：FormClosed、FormClosing、KeyDown、KeyPress、KeyUp、 Load、MouseClick、MouseDoubleClick、MouseDown、MouseMove、MouseUp、Resize、GiveFeedback
- 了解多窗体间的调用的功能实现方法；

## 一、窗体的概念

1.窗体是图形化界面

- 窗体是用户与计算机交互的图形化界面
- 窗体是组成窗体应用程序的基本单元。
- 窗体可以存放各种控件
- C#中通过窗体设计器设计窗体。

2.窗体是一个类
> 窗体是一种容器类对象。
>
> 窗体使用 System.Windows.Forms 命名控件定义 Form 类
>
> 每实例化一个窗体类，就产生一个窗体。

3.窗体是一个特殊类
窗体类是一个特殊的类，它继承自预定义的窗体基类，并与Windows操作系统底层图形API进行了深度绑定，从而拥有了创建和管理图形界面的能力。

窗体类的继承链
```csharp
System.Object                         // 所有类的基类
    └── System.MarshalByRefObject     // 支持远程调用
        └── System.ComponentModel.Component  // 组件基类
            └── System.Windows.Forms.Control  // 所有控件的基类
                └── System.Windows.Forms.ScrollableControl  // 可滚动的控件
                    └── System.Windows.Forms.ContainerControl  // 容器控件
                        └── System.Windows.Forms.Form  // 窗体类基类
                            └── YourForm : Form        // 你的窗体类
```
4.窗体由以下四部分组成：

- 标题栏
- 控制按钮
- 边界
- 窗口区

## 二、创建窗体

### 1. **自动创建窗体项目**
在 VS 中，创建一个窗体应用项目，系统会自动生成一个空白窗体，名称为“Form1“。

```csharp
// VS自动生成的Form1基本结构
public partial class Form1 : Form
{
    public Form1()
    {
        InitializeComponent(); // 初始化组件
    }
}
```
**特点**：
- 自动继承自`Form`类
- 包含`InitializeComponent()`方法
- 使用partial类将设计与代码分离

### 2. **手动创建窗体类**
```csharp
// 1. 继承Form基类
public class MyForm : Form
{
    // 2. 添加控件
    private Button myButton;
    
    public MyForm()
    {
        // 3. 设置窗体属性
        this.Text = "我的窗体";
        this.Size = new Size(400, 300);
        
        // 4. 创建和添加控件
        myButton = new Button();
        myButton.Text = "点击";
        myButton.Location = new Point(100, 100);
        this.Controls.Add(myButton);
    }
}
```

### 2.添加窗体
方法1：**通过VS设计器添加**
1. 右键项目 → 添加 → 新建项
2. 选择"Windows 窗体" → 输入名称(如：Form2.cs)

方法2：**代码方式添加**
```csharp
// 在代码中动态创建
public void CreateFormDynamically()
{
    Form dynamicForm = new Form();
    dynamicForm.Text = "动态创建的窗体";
    dynamicForm.Show();
}
```

方法3：**添加现有窗体**
1. 右键项目 → 添加 → 现有项
2. 选择.cs和.Designer.cs文件（都要选）
3. 修改命名空间使其与当前项目一致
### 3.删除窗体

方法1：**从项目中删除**
```
1. 在解决方案资源管理器中右键要删除的窗体
2. 选择"删除"
3. 删除后需要手动清理引用该窗体的代码
```

方法2：**代码中安全删除检查清单**
```csharp
// 删除窗体前检查：
// 1. 检查是否有其他窗体调用此窗体
// 2. 检查Program.cs中的启动窗体设置
// 3. 检查资源文件中的引用
```

方法3：**条件性移除**
```csharp
// 如果不确定是否删除，可以先注释相关代码
// Form2 form2 = new Form2(); // 待删除
// form2.Show();
```

注意：删除窗体后，清理所有引用


### 4.设置启动窗体
方法1：**修改Program.cs（推荐）**
```csharp
static class Program
{
    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.SetCompatibleTextRenderingDefault(false);
        
        // 设置启动窗体为Form2
        Application.Run(new Form2()); // 修改这里的窗体实例
    }
}
```

方法2：**项目属性设置**
```
1. 右键项目 → 属性
2. 选择"应用程序"标签
3. 在"启动窗体"下拉框中选择需要的窗体
```
方法3：**动态设置启动窗体**
```csharp
static void Main()
{
    // 根据条件选择启动窗体
    Form startupForm;
    
    if (CheckConfig() == "Admin")
        startupForm = new AdminForm();
    else
        startupForm = new UserForm();
    
    Application.Run(startupForm);
}
```
### 5.多窗体间的调用

```csharp
private void button1_Click(object sender, EventArgs e)
{
    // Form1中调用Form2
    // 方式1：显示后不等待（非模态）
    Form2 form2 = new Form2();
    form2.Show();


    // 方式2：显示并等待（模态）
    Form2 form2 = new Form2();
    DialogResult result = form2.ShowDialog();
    if (result == DialogResult.OK)
    {
        // 处理返回结果
    }
}
```

### 6.注意事项

| 操作 | 关键点 | 注意事项 |
|------|--------|----------|
| **创建窗体** | 继承Form类，InitializeComponent | 不要删除InitializeComponent调用 |
| **添加窗体** | 保持.cs和.Designer.cs配对 | 修改命名空间与项目一致 |
| **删除窗体** | 清理所有引用 | 检查Program.cs启动设置 |
| **设置启动** | 修改Program.cs或项目属性 | 确保窗体类存在且可访问 |
| **窗体调用** | Show()非模态，ShowDialog()模态 | 模态窗体使用后及时释放资源 |



## 二、窗体属性是什么
窗体属性是对窗体特征的描述。

- 属性用于定义窗体的外观样式、尺寸大小、功能状态、显示内容等静态特征。
- 属性不用写复杂逻辑，只需通过设计器可视化设置或代码赋值，就能改变窗体或控件的表现形式。

## 三、常见的窗体属性
### 1.设计属性

|属性|说明|考点|
|---|---|---|
|Name|指定窗体名称|是|

### 2.布局属性

|属性|说明|考点|
|---|---|---|
|Location|获取或设置窗体左上角在桌面上的位置。默认值:坐标原点(0,0) 单位：像素||
|Size|获取或设置窗体的大小|是|
|Height|获取或设置窗体的高度|是|
|Width|获取或设置窗体的宽度|是|
|StartPosition|获取或设置执行时窗体的起始位置||
|WindowState|获取或设置窗体的窗口状态。①Normal②Maximized③Minimized|是|
|Dock|获取或设置子窗体在父窗体中停靠的位置和方式||

### 3.窗口样式属性
|属性|说明|考点|
|---|---|---|
|ControlBox|设置窗体的标题栏中是否显示“控制“按钮||
|HelpButton|设置是否在窗体的标题栏中显示“帮助“按钮||
|Icon|设置窗体标题栏中的图标|是|
|MaximizeBox|设置是否在窗体的标题栏中显示最大化按钮||
|MinimizeBox|设置是否在窗体的标题栏中显示最小化按钮||
|ShowIcon|设置是否在窗体的标题栏中显示图标||

### 4.外观属性
|属性|说明|考点|
|---|---|---|
|BackColor|设置窗体的背景色|是|
|BackGroundImage|设置窗体的背景图片||
|Font|设置窗体中显示文字的字体相关属性|是|
|FontColor|设置窗体的前景色|是|
|FormBorderStyle|设置窗体的边框样式||
|Text|窗体标题栏中的标题内容||

### 5.行为属性
|属性|说明|考点|
|---|---|---|
|Enabled|是否可以对用户交换做出响应||
|visible|是否显示窗体||

### 6.Font属性
|属性|说明|考点|
|---|---|---|
|Name|字体名称||
|Size|字体大小，单位：Unit 属性指定||
|Unit|度量单位||
|Bold|是否为粗体||
|Italic|是否为斜体||
|Strikeout|是否有贯穿字体的横线||
|Underline|是否有下划线||

## 四、窗体属性示例

1. 界面设计：创建一个 Windows 窗体应用程序，生成一个窗体 Form1。
2. 属性设置：在“属性”窗口中设置 Form1 的属性。

| 属性名         | 属性值          |
|----------------|-----------------|
| Text           | 窗体实例        |
| Size           | (750, 400)      |
|Font|楷体|
|FontColor|blue|
|BackColor|pink|
| Icon | [favicon.ico](./images/favicon.ico)      |
|WindowState||

## 五、窗体方法是什么
方法是窗体预设的功能(动作)。
- 方法是一段封装好的功能代码.
- 方法通过`对象.方法名()`的语法调用，窗体会立刻执行对应的动作（比如关闭窗体、清空文本、添加列表项）。

## 六、常见窗体方法
|方法|说明|考点|
|---|---|---|
|窗体名.Activate()|激活窗体|是|
|窗体名.Show()|显示窗体|是|
|窗体名.Hide()|隐藏窗体（窗体不可见，但仍在内存中）|是|
|窗体名.Close()|关闭窗体（窗体被销毁，从内存中移除）|是|
|窗体名.Refresh()|刷新窗体|是|

## 七、窗体方法示例

激活窗体、显示窗体、隐藏窗体、关闭窗体、刷新窗体


```csharp
// 刷新窗体
private void button2_Click(object sender, EventArgs e)
{
    this.Refresh();
}
// 隐藏窗体
private void button3_Click(object sender, EventArgs e)
{
    this.Hide();
}
// 关闭窗体
private void button4_Click(object sender, EventArgs e)
{
    this.Close();
}
// 显示子窗体
private void button1_Click(object sender, EventArgs e)
{
    Form2 form2 = new Form2();
    form2.Show();
}
// 激活子窗体
private void button1_Click(object sender, EventArgs e)
{
    Form2 form2 = new Form2();
    form2.Activate();
}

// 激活子窗体

public partial class Form1 : Form
{
    private Form2 form2 = null;

    private void button1_Click(object sender, EventArgs e)
    {
        if(form2 == null || form2.IsDisposed)
        {
            form2 = new Form2();
            form2.Show();
            MessageBox.Show("Form2 is created and shown.");
        }
        else if(Form.ActiveForm != form2)
        {
            form2.Activate();
        }
    }
}

// 两个按钮控制子窗体显示和隐藏
public partial class Form1 : Form
{
    private Form2 form2 = null;

    private void button1_Click(object sender, EventArgs e)
    {
        // IsDisposed 是一个只读属性，返回布尔值
        // true：窗体已被销毁/释放 false：窗体未被销毁，仍可使用
        if(form2 == null || form2.IsDisposed)
        {
            form2 = new Form2();
        }
        form2.Show();
    }
    private void button5_Click(object sender, EventArgs e)
    {
        if(form2 != null && !form2.IsDisposed)
        {
            form2.Hide();
        }
    }
}
```

## 八、事件是什么
事件就是系统通知，是C#窗体应用程序中的一种消息通知机制。
- 事件就是一些特定的名字，表示“某件事情“发生，比如：Click、Load、FormClosed、KeyDown 等
- 事件不是技术名词，不是 C#语法


## 九、事件的四个核心要素
### 1.常见的窗体事件

| 事件名称 | 触发时机 | 高考考点 |
|---------|---------|---------|
| **FormClosed** | 窗体**已经关闭后**触发 | 是 |
| **FormClosing** | 窗体**正在关闭时**触发（关闭前） | 是|
| **KeyDown** | **按下**键盘键时触发（包含所有按键） |是|
| **KeyPress** | **按下**字符键时触发（仅字符键） |是|
| **KeyUp** | **释放**键盘键时触发 |是|
| **Load** | 窗体**第一次显示前**触发 |是|
| **MouseClick** | **完成一次鼠标点击**时触发（按下+释放） | 是|
| **MouseDoubleClick** | **完成一次鼠标双击**时触发 |是|
| **MouseDown** | **按下**鼠标键时触发 | 是|
| **MouseMove** | **移动**鼠标时触发（在控件范围内） | 是|
| **MouseUp** | **释放**鼠标键时触发 | 是|
| **Resize** | 窗体**大小改变时**触发 | 是|
| **GiveFeedback** | 进行**拖拽操作时连续触发**（OLE拖拽） |是|

**记忆要点**：
- **FormClosing** vs **FormClosed**：Closing可以取消，Closed已结束
- **KeyDown** vs **KeyPress**：Down接收所有键，Press只接收字符键
- **MouseClick** vs **MouseDoubleClick**：双击会先触发一次单击
- **MouseDown** vs **MouseUp** vs **MouseClick**：Down（按下）→ Up（释放）→ Click（完整点击）

### 2.事件发布者
- 事件在哪个类中定义，那个类就是事件发布者。
- 事件发布者就是事件的拥有者。
- 事件发布者的两大职责：定义事件和发布通知

```csharp
public class Button  // Button是Click事件的发布者
{
    // 看！在这里用event关键字定义事件
    public event EventHandler Click;  // ← Button是发布者
    
    // 只有Button类内部可以触发这个事件
    protected virtual void OnClick()
    {
        Click?.Invoke(this, EventArgs.Empty);  // 只有Button类能调用这个事件
    }
}
```

- 所有的窗体事件都是.NET框架Form 类提前定义好的。
- 所有的控件事件都是.NET框架控件类提前定义好的。

### 3.事件订阅者

#### 概念
事件订阅者就是“事件关心者“，它负责接收事件通知并调用事件处理方法。”
#### 订阅语法
```csharp
// Form1.cs 文件（你自己编写的代码文件）
public partial class Form1 : Form
{
    private Button button1;  // 声明按钮
    
    public Form1()
    {
        InitializeComponent();  // 先初始化设计器生成的控件
        
        // 方式1：在构造函数中手动订阅事件
        // 语法：事件源.事件名 += 处理方法;
        //+=的含义：把Button1_Click方法添加到Click事件调用列表中"
        button1.Click += Button1_Click;
        
    }
    
    // 事件处理方法
    private void Button1_Click(object sender, EventArgs e)
    {
        // 当button1被点击时，这个方法会被自动调用
        MessageBox.Show("按钮被点击了！");
    }
}
```

### 4.事件处理方法

事件处理方法就是：当事件发生时执行的代码单元。

注意：执行事件处理方法的前提是，必须提前订阅事件。

```csharp
// 形象理解：事件就像"通知"或"警报"
// 用户操作 → 触发事件 → 执行代码

// 生活比喻：
// 门铃响了（事件发生）→ 你去开门（事件处理）
// 手机来电（事件发生）→ 你接电话（事件处理）
```

### 5.测试
```csharp
// 1. 事件是什么
// 2. 事件发布者是什么
// 3. 事件订阅者是什么
// 4. 事件处理方法

Button button1;               // 事件主体
button1.Click                // 事件
private void button1_Click() // 事件处理程序
```

## 十、事件订阅的方法
事件绑定就是为窗体或控件绑定事件处理程序。可通过“可视化绑定“实现。

可视化绑定会自动生成**规范的事件处理函数名**（`控件名_事件名`）

### 方法1：双击控件绑定默认事件
每个控件都有一个“默认核心事件”，双击控件就能一键绑定这个事件，自动生成处理函数。

**常见控件的默认核心事件（高考高频）**：
- 按钮（Button）：Click（单击事件）
- 文本框（TextBox）：TextChanged（内容变化事件）
- 窗体（Form）：Load（加载事件）
- 组合框（ComboBox）：SelectedIndexChanged（选中项变化事件）
- 时钟（Timer）：Tick（定时触发事件）

**实操步骤（以绑定textBox1的TextChanged事件为例）**：

1. 打开窗体设计器（双击`Form1.cs`，看到可视化的窗体界面）；
2. 找到窗体上的`textBox1`控件，用鼠标**左键双击**它；
3. VS会自动跳转到代码编辑页面，生成如下规范的事件处理函数（同时自动完成底层绑定，无需手动操作）：
   ```csharp
   private void textBox1_TextChanged(object sender, EventArgs e)
   {
       // 这里写事件触发后要执行的逻辑（比如统计输入长度）
       // 示例：lblLength.Text = $"长度：{textBox1.TextLength}";
   }
   ```
4. 在函数内编写你需要的逻辑即可。

### 方法2：属性面板绑定指定事件

如果要绑定的不是控件的默认事件，就用属性面板绑定非默认事件。覆盖剩余20%场景。

如窗体的FormClosing、文本框的KeyPress、按钮的DoubleClick

**实操步骤（以绑定窗体的FormClosing事件为例）**：
1. 打开窗体设计器，点击窗体的空白区域（确保选中的是窗体，而非某个控件）；
2. 按`F4`键打开「属性面板」（如果已经打开可忽略）；
3. 点击属性面板顶部的**闪电图标**（事件图标，这是切换“属性/事件”的关键）；
4. 在事件列表中，找到你要绑定的事件名（比如`FormClosing`），点击该事件名右侧的输入框，**左键双击**；
   ![事件面板示意图](./images/Form_Closing.png)
5. VS会自动生成规范的处理函数：
   ```csharp
   private void Form1_FormClosing(object sender, FormClosingEventArgs e)
   {
       // 示例：关闭前弹出确认框
       if (MessageBox.Show("确定退出？", "提示", MessageBoxButtons.YesNo) == DialogResult.No)
       {
           e.Cancel = true; // 取消关闭
       }
   }
   ```

**拓展：绑定到已有函数**
如果多个控件要触发同一个逻辑（比如两个按钮都执行“关闭窗体”），可以在事件输入框中**下拉选择已有的函数**（比如`btnClose_Click`），无需重复写代码。


### 高考实操避坑点
1. 双击控件绑定默认事件，属性面板（闪电图标）绑定指定事件，规范且无错；
2. 可视化绑定会自动生成`控件名_事件名`格式的函数，这是高考评分的规范要求，不要修改；
3. 事件函数的**参数必须匹配**（比如FormClosing事件的参数是`FormClosingEventArgs e`，不是`EventArgs e`），VS自动生成的参数是正确的，不要手动改。


## 十、Load事件

### 一、Load事件用途
在看示例前，先明确Load事件的两个关键（高考必考）：
1. **触发时机**：窗体启动后 → 界面加载完成 → 但**尚未显示给用户**时触发（窗体生命周期的第一个事件）；
2. **核心用途**：做**初始化操作**。避免界面显示后再初始化导致的“闪屏”或用户看到初始默认值。 如：
    - 设置窗体/控件属性
    - 添加列表项
    - 加载本地数据
    - 初始化变量等

### 二、示例：Load 事件处理函数

选中窗体后，双击没有任何控件的空白处（不是双击控件），VS 会直接自动生成 Load 事件的处理函数，同时完成绑定：

```csharp
// 双击窗体空白处，VS自动生成的Load事件处理函数（绑定已同步完成）
private void Form1_Load(object sender, EventArgs e)
{
    // 这里写业务逻辑即可，比如窗体初始化、控件属性预设
    // this，99.9% 都指向「当前运行的这个窗体实例」
    //this出现在"哪个类的代码大括号{}内」，就指向「这个类的当前运行实例 "
    this.Text = "Hello World";
}

```

### 三、高考实操避坑点
1. **不要漏写`InitializeComponent();`**：窗体构造函数中必须保留这行代码，否则控件无法初始化，Load事件也会失效；
2. **Load事件中不要做耗时操作**（如访问网络）：会导致窗体启动卡顿，耗时操作需用多线程（高考不考）；
3. **控件命名规范**：Load事件中操作的控件（如`txtName`），Name属性要符合高考规范（txt开头、cbo开头），不要用默认的`textBox1`。

### 四、总结
1. 窗体Load事件的核心是**窗体启动时的初始化操作**，触发在窗体显示前，是高考实操中最常用的窗体事件；
2. 典型用法包括：设置窗体/控件属性、添加下拉列表项、初始化时钟/全局变量、加载本地数据；
3. 示例中的代码完全符合高考规范，可直接套用在“信息登记、倒计时、选项初始化”等实操场景中。


## 十一、FormClosed｜FormClosing事件

### 1.两个事件的区别

#### FormClosing：窗体即将关闭时触发
- 可以取消关闭操作（e.Cancel = true）
- 适合做确认提示、保存未保存的数据等
- 参数类型：FormClosingEventArgs
#### FormClosed：窗体已经关闭后触发
- 关闭操作已经完成，无法取消
- 适合做清理资源、记录日志等后续操作
- 参数类型：FormClosedEventArgs

### 2.基本示例
```csharp
private void Form1_FormClosing(object sender, FormClosingEventArgs e)
{
    MessageBox.Show("窗体即将关闭");
}

private void Form1_FormClosed(object sender, FormClosedEventArgs e)
{
    // 此时 Form1 已经关闭（不再是活动窗口）
    MessageBox.Show("窗体已关闭");
    // 但由于 MessageBox 是模态对话框，它会阻止代码继续执行
    // 并且自动成为新的活动窗口
}
```
### 3.进阶示例

```csharp
// FormClosing 事件处理程序
private void Form1_FormClosing(object sender, FormClosingEventArgs e)
{
    // 可以询问用户是否确认关闭
    DialogResult result = MessageBox.Show("确定关闭？", "确定", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
    if (result == DialogResult.No)
    {
        e.Cancel = true; // 取消关闭操作
    }
}

// FormClosed 事件处理程序
private void Form1_FormClosed(object sender, FormClosedEventArgs e)
{
    MessageBox.Show("窗体已关闭");
}
```

## 十二、KeyDown|KeyPress|KeyUp

### 1.**三个事件的关键区别：**

| 事件 | 触发时机 | 能检测的键 | 典型用途 |
|------|----------|----------|------------|
| **KeyDown** | 按下键时立即触发 | 所有键（包括功能键） | 检测特殊键、组合键、游戏控制 |
| **KeyPress** | 按下**字符键**时触发 | 字符键（A-Z, 0-9, 符号） | 字符输入处理、输入验证 |
| **KeyUp** | 释放键时触发 | 所有键 | 按键释放后的操作 |

### 2.示例:Windows 窗体按键事件

```csharp
// KeyDown 事件：按下键时触发
private void Form1_KeyDown(object sender, KeyEventArgs e)
{
    label1.Text = $"按下了键：{e.KeyCode.ToString()} 键码: {e.KeyValue}";
    if(e.Control && e.KeyCode == Keys.S)
    {
        MessageBox.Show("检测到 Ctrl + S 组合键被按下！");
    }
}
// KeyPress 事件：按下字符键时触发
private void Form1_KeyPress(object sender, KeyPressEventArgs e)
{
    label2.Text = "KeyPress事件触发";
}
// KeyUp 事件：释放键时触发
private void Form1_KeyUp(object sender, KeyEventArgs e)
{
    label3.Text = "KeyUp事件触发";
}

```

## 十三、MouseClick|MouseDoubleClick

- MouseClick：完成一次鼠标点击时触发（按下+释放）
- MouseDoubleClick：完成一次鼠标双击时触发

```csharp
private void Form1_MouseClick(object sender, MouseEventArgs e)
{
    //e.Location : 事件对象.单击位置的坐标
    label1.Text = $"鼠标单击事件，单击位置坐标: {e.Location}";
}

private void Form1_MouseDoubleClick(object sender, MouseEventArgs e)
{
    label2.Text = $"鼠标双击事件，双击位置坐标: {e.Location}";
}
```

## 十四、MouseDown|MouseMove|MouseUp

- MouseDown：按下鼠标键时触发
- MouseMove：移动鼠标时触发（在控件范围内）
- MouseUp：释放鼠标键时触发

```csharp
private void Form1_MouseDown(object sender, MouseEventArgs e)
{
    //e.X : 事件对象.光标的x坐标
    label1.Text = $"MouseDown事件触发。光标位置：({e.X}, {e.Y})";
}

private void Form1_MouseMove(object sender, MouseEventArgs e)
{
    label2.Text = $"MouseMove事件触发。光标位置：({e.X}, {e.Y})";
}

private void Form1_MouseUp(object sender, MouseEventArgs e)
{
    label3.Text = $"MouseUp事件触发。光标位置：({e.X}, {e.Y})";
}
```

## 十五、Resize

Resize 事件：窗体大小改变时触发。

```csharp
private void Form1_Resize(object sender, EventArgs e)
{
    label4.Text = $"窗体大小改变。新大小：({this.Width}, {this.Height})";
}
```

## 十六、GiveFeedback

GiveFeedback是拖放操作专属事件，触发时机：当调用DoDragDrop()启动拖放后，拖放过程中会持续触发该事件，核心用途是设置拖放时的鼠标反馈样式（比如显示 “复制 / 移动” 光标、自定义拖放图标），让用户直观知道当前拖放的类型。