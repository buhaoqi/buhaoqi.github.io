---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 窗体设计  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 窗体设计  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 2  # 侧边栏中排在第1位
---

## 一、窗体的概念(考点)

1.窗体是一个类
> 窗体是一种容器类对象。
>
> 窗体使用 System.Windows.Forms 命名控件定义 Form 类
>
> 每实例化一个窗体类，就产生一个窗体。

2.窗体是一个特殊类
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

3.窗体是图形化界面

- 窗体是用户与计算机交互的图形化界面
- 窗体是组成窗体应用程序的基本单元。
- 窗体可以存放各种控件
- C#中通过窗体设计器设计窗体。

4.窗体由以下四部分组成：

- 标题栏
- 控制按钮
- 边界
- 窗口区

## 二、属性的概念(考点)
属性是对控件或窗体的特征描述。

- 属性用于定义窗体或控件的外观样式、尺寸大小、功能状态、显示内容等静态特征。
- 属性不用写复杂逻辑，只需通过设计器可视化设置或代码赋值，就能改变窗体或控件的表现形式。

## 三、方法的概念(考点)
方法是窗体、控件预设的功能(动作)。
- 方法是一段封装好的功能代码.
- 方法通过`对象.方法名()`的语法调用。窗体或控件会立刻执行对应的动作（比如关闭窗体、清空文本、添加列表项）。

示例

```csharp
// 1. 无参数方法（最常用）：对象名.方法名();
this.Close(); // 窗体调用Close方法，关闭窗体
txtName.Clear(); // 文本框调用Clear方法，清空内容

// 2. 有参数方法：对象名.方法名(参数值);
lstStu.Items.Add("张三"); // 列表框调用Add方法，传入参数"张三"，添加列表项
cboCourse.Items.RemoveAt(0); // 组合框调用RemoveAt方法，传入参数0，删除第1项
```

## 四、事件的概念(考点)

### **1. 事件是什么？**

事件是C#窗体应用程序中的一种消息通知机制。可以通过提供事件处理程序来为事件添加可执行代码。
- 当指定事件发生时，会触发提前绑定好的事件处理函数。

```csharp
// 形象理解：事件就像"通知"或"警报"
// 用户操作 → 触发事件 → 执行代码

// 生活比喻：
// 门铃响了（事件发生）→ 你去开门（事件处理）
// 手机来电（事件发生）→ 你接电话（事件处理）
```

### **2. 事件的三个要素**
```csharp
// 1. 事件主体：谁触发事件？（如：按钮）
// 2. 事件：发生了什么？（如：Click点击）
// 3. 事件处理程序：怎么处理？（你写的代码，就是方法）

Button button1;               // 事件主体
button1.Click                // 事件
private void button1_Click() // 事件处理程序
```
## 五、创建窗体(考点)
在 VS 中，创建一个窗体应用项目，系统会自动生成一个空白窗体，名称为“Form1“。

## 六、窗体的属性
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

### 7.示例
题目：“窗体实例”的属性设置

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


## 七、窗体的方法

|方法|说明|考点|
|---|---|---|
|Active||是|
|Show||是|
|Hide||是|
|Close||是|
|Refresh||是|

## 八、窗体的事件

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


## 九、事件绑定
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