---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务三 对话框  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务三 对话框  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 4  # 侧边栏中排在第1位
---

## 一、消息框

### 1.消息框是什么

消息框MessageBox是Windows系统预定义的交互对话框，用于提示程序执行结果、错误信息等，属于人机交互的常用窗口；

在C#中位于`System.Windows.Forms`命名空间。

### 2.消息框语法
仅提供`Show()`方法用于显示消息框，标准格式为：

```csharp
Public Static MessageBox.Show(string text, string title, MessageBoxButtons buttons, MessageBoxIcon icon)
```

### 3.关键参数说明
| 参数名 | 作用 | 枚举类型与取值 |
|--------|------|----------------|
| `text` | 消息框内的提示文本 | 直接输入字符串 |
| `title` | 消息框标题栏文本 | 直接输入字符串 |
| `buttons` | 指定显示的按钮组合 | `MessageBoxButton`枚举：✅`OK`（确定）、`OKCancel`（确定/取消）✅`YesNoCancel`（是/否/取消）、`YesNo`（是/否）✅`AbortRetryIgnore`（中止/重试/忽略）、`RetryCancel`（重试/取消） |
| `icon` | 指定显示的图标样式 | `MessageBoxIcon`枚举：✅`None`（无图标）、`Hand/Error/Stop`（错误红叉）✅`Question`（问号）、`Exclamation/Warning`（警告感叹号）✅`Asterisk/Information`（信息小写i） |

### 4.返回值规范
`MessageBox.Show()`返回值为`DialogResult`枚举类型，用于判断用户点击的按钮：
| 返回值 | 对应操作 |
|--------|----------|
| `OK` | 点击【确定】 |
| `Cancel` | 点击【取消】 |
| `Yes/No` | 点击【是/否】 |
| `Abort/Rery/Ignore` | 点击【中止/重试/忽略】 |
| `None` | 对话框未触发返回 |


![消息框](./images/messagebox.png)

### 4.用法
#### 示例1：最简用法（仅提示文本）
这是最基础的用法，只显示提示文本和默认的【确定】按钮。
```csharp
private void button1_Click(object sender, EventArgs e)
{
    // 仅传入提示文本，标题默认是应用程序名，按钮只有【确定】
    MessageBox.Show("这是最简单的消息框");
}
```
**效果**：弹出一个只有“这是最简单的消息框”文本和【确定】按钮的消息框，标题栏显示你的项目名称。

#### 示例2：带自定义标题的消息框
在基础文本上，添加自定义的标题栏文字。
```csharp
private void button2_Click(object sender, EventArgs e)
{
    // 第一个参数：提示文本；第二个参数：标题栏文本
    MessageBox.Show("操作完成！", "提示");
}
```
**效果**：消息框标题栏显示“提示”，内容显示“操作完成！”，按钮仍为【确定】。

#### 示例3：带指定按钮组合的消息框
自定义消息框显示的按钮（如【是/否】、【确定/取消】等）。
```csharp
private void button3_Click(object sender, EventArgs e)
{
    // 第三个参数：指定按钮组合（MessageBoxButtons枚举）
    MessageBox.Show("是否删除这条数据？", "确认", MessageBoxButtons.YesNo);
}
```
**效果**：标题“确认”，内容“是否删除这条数据？”，按钮显示【是】和【否】。

#### 示例4：带按钮+图标的消息框
在按钮基础上，添加系统预设的图标（如警告、错误、信息等）。
```csharp
private void button4_Click(object sender, EventArgs e)
{
    // 第四个参数：指定图标（MessageBoxIcon枚举）
    MessageBox.Show("输入的格式错误！", "错误", MessageBoxButtons.OK, MessageBoxIcon.Error);
}
```
**效果**：标题“错误”，内容“输入的格式错误！”，左侧显示红色叉号图标，按钮为【确定】。

#### 示例5：完整用法（带返回值处理）
获取用户点击的按钮结果，并根据结果执行不同逻辑（最常用的实战用法）。
```csharp
private void button5_Click(object sender, EventArgs e)
{
    // 接收消息框的返回值（DialogResult枚举）
    DialogResult result = MessageBox.Show("是否保存修改？", "保存", 
        MessageBoxButtons.YesNoCancel, MessageBoxIcon.Question);

    // 根据用户点击的按钮执行逻辑
    if (result == DialogResult.Yes)
    {
        MessageBox.Show("已保存！", "成功");
    }
    else if (result == DialogResult.No)
    {
        MessageBox.Show("未保存，直接退出", "提示");
    }
    else if (result == DialogResult.Cancel)
    {
        MessageBox.Show("操作已取消", "提示");
    }
}
```
**效果**：弹出带【是/否/取消】按钮+问号图标的消息框，点击不同按钮会触发对应的提示。

#### 示例6：消息返回值

要求：

**界面设计**：在Windows窗体（Form1）上添加`Button`控件（命名button1）。

**核心代码**：在按钮点击事件中，通过`MessageBox.Show()`实现带按钮选择的消息框，并根据返回值做交互提示：

```csharp
private void button1_Click(object sender, EventArgs e)
{
    // 弹出含【是/否/取消】的消息框，显示警告图标
    DialogResult result = MessageBox.Show("测试一下消息对话框", "测试", 
        MessageBoxButtons.YesNoCancel, MessageBoxIcon.Warning);
    // 根据用户点击反馈
    if (result == DialogResult.Yes)
        MessageBox.Show("你单击的为'是'按钮");
    else if (result == DialogResult.No)
        MessageBox.Show("你单击的为'否'按钮");
    else if (result == DialogResult.Cancel)
        MessageBox.Show("你单击的为'取消'按钮");
    else
        MessageBox.Show("你没有进行任何的操作！");
}
```

## 二、提示框（ToolTip控件）


### 1.用途
`ToolTip`是Windows窗体中用于**交互提示**的控件，当用户将鼠标悬停在指定控件上时，自动显示简短提示信息，提升程序人机交互体验。

### 2.**实现逻辑**

向窗体添加`ToolTip`组件后，窗体中所有控件会**自动新增ToolTip属性**，直接通过属性窗口设置该属性，即可为控件绑定提示信息，无需编写额外代码。

### 3.核心语法（属性/方法）
`ToolTip`的使用以**属性配置**为主，代码调用为辅，核心语法如下（均需引入`System.Windows.Forms`命名空间）：

| 类型       | 名称/语法                                                                 | 说明                                                                 |
|------------|---------------------------------------------------------------------------|----------------------------------------------------------------------|
| 核心属性   | `toolTip1.SetToolTip(Control control, string text)`                       | 为指定控件绑定提示文本（代码方式）|
|            | `toolTip1.ToolTipTitle`                                                  | 设置提示框的标题（可选，使提示更规范）|
|            | `toolTip1.InitialDelay`                                                  | 设置鼠标悬停后提示框显示的延迟时间（毫秒，默认500ms）|
|            | `toolTip1.AutoPopDelay`                                                  | 设置提示框自动消失的延迟时间（毫秒，默认5000ms）|
| 核心方法   | `toolTip1.RemoveAll()`                                                    | 移除所有控件绑定的提示信息                                           |
|            | `toolTip1.Show(string text, Control control)`                            | 手动触发显示提示框（无需鼠标悬停）|
|            | `toolTip1.Hide(Control control)`                                         | 手动隐藏指定控件的提示框                                             |

### 4.用法
#### 方式1：可视化配置（推荐，零代码，新手首选）
适用于固定提示文本的场景，步骤如下：
1. 打开Windows窗体设计器，从“工具箱”拖拽`ToolTip`控件到窗体（控件会出现在窗体底部的组件栏，无需显示在界面）；
2. 选中需要添加提示的控件（如Button1），在右侧“属性窗口”中找到`ToolTip on toolTip1`属性；
3. 在该属性中输入提示文本（如“点击提交数据”），保存后运行程序；
4. 验证效果：鼠标悬停在该控件上，自动显示设置的提示文本。

#### 方式2：代码动态配置（灵活，适用于动态提示场景）
适用于提示文本需要根据业务逻辑变化的场景，示例代码如下：
```csharp
using System;
using System.Windows.Forms;

namespace ToolTipDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            
            // 1. 初始化ToolTip控件（若设计时已添加，可直接用toolTip1）
            ToolTip toolTip1 = new ToolTip();
            
            // 2. 基础配置：延迟时间、标题
            toolTip1.InitialDelay = 300; // 鼠标悬停300ms后显示
            toolTip1.AutoPopDelay = 3000; // 提示框显示3秒后消失
            toolTip1.ToolTipTitle = "操作提示"; // 提示框标题
            
            // 3. 为控件绑定提示文本
            toolTip1.SetToolTip(button1, "点击提交表单");
            toolTip1.SetToolTip(textBox1, "请输入11位手机号");
            
            // 4. 动态修改提示文本（示例：按钮点击后修改文本框提示）
            button1.Click += (sender, e) => 
            {
                toolTip1.SetToolTip(textBox1, "输入错误！请重新输入11位手机号");
            };
        }
    }
}
```

### 5.注意事项
1. **控件添加规则**：一个`ToolTip`控件可绑定窗体中**所有控件**的提示信息，无需为每个控件单独添加ToolTip组件，避免资源浪费；
2. **提示文本规范**：文本需简短（建议1-2行，不超过20字），避免冗长导致提示框过大影响界面；
3. **显示时机控制**：若需即时显示提示（如用户操作错误后），可使用`Show()`方法手动触发，而非依赖鼠标悬停；
4. **多ToolTip管理**：若窗体需区分不同类型的提示（如普通提示/错误提示），可添加多个ToolTip控件，分别配置样式/延迟；
5. **兼容性注意**：ToolTip仅适用于`Windows Forms`（WinForm）项目，`WPF`/`ASP.NET`等项目需使用对应框架的提示组件（如WPF的`ToolTip`、Web的`title`属性）；
6. **性能优化**：避免为大量控件（如数百个）绑定ToolTip，或设置过短的`InitialDelay`，可能导致界面卡顿。

### 6.总结
1. `ToolTip`核心用途是为WinForm控件添加悬停提示，提升交互体验，零代码/代码方式均可实现；
2. 新手优先使用**可视化属性配置**，动态提示场景用`SetToolTip()`方法；
3. 使用时需注意文本简洁、控件复用、显示延迟配置，避免影响界面体验和性能。

## 三、对话框(Show()与 ShowDialog())


### 1.对话框是什么
WinForm对话框是自定义窗体，根据**显示状态**分为模式窗体和非模式窗体，核心差异在于对其他窗体的交互权限：
| 类型         | 定义与核心特征                                                                 |
|--------------|--------------------------------------------------------------------------------|
| **模式窗体** | 窗体显示时，**其他所有窗体不可用**（无法点击、切换），必须关闭该窗体后，其他窗体才能恢复操作。 |
| **非模式窗体** | 窗体显示时，**用户可自由切换/操作其他窗体**，无需关闭当前窗体即可与其他界面交互。|

### 2.语法
两种窗体的显示依赖窗体对象的不同方法，需先**实例化窗体对象**，再调用对应显示方法：
1. **模式窗体**：调用 `ShowDialog()` 方法
   ```csharp
   // 1. 实例化目标窗体对象
   窗体类 窗体对象名 = new 窗体类();
   // 2. 以模式方式显示窗体
   窗体对象名.ShowDialog();
   ```
2. **非模式窗体**：调用 `Show()` 方法
   ```csharp
   // 1. 实例化目标窗体对象
   窗体类 窗体对象名 = new 窗体类();
   // 2. 以非模式方式显示窗体
   窗体对象名.Show();
   ```

### 3.任务
1.界面与属性设计

* **控件添加**：主窗体Form1添加2个Button控件；新增Form2、Form3两个子窗体，每个子窗体添加1个Label控件。

* **属性设置**（核心Text属性）：
  | 对象       | 属性 | 属性值               |
  |------------|------|----------------------|
  | Form1      | Text | 模式与非模式         |
  | Button1    | Text | 打开模式对话框       |
  | Button2    | Text | 打开非模式对话框     |
  | Form2/Label| Text | 我是模式对话框       |
  | Form3/Label| Text | 我是非模式对话框     |

2. 核心代码实现

将代码写在主窗体按钮的`Click`事件中，完成窗体实例化与显示：
```csharp
// 按钮1：打开模式对话框（Form2）
private void button1_Click(object sender, EventArgs e)
{
    Form2 frm = new Form2(); // 实例化Form2对象
    frm.ShowDialog();         // 以模式方式显示Form2
}

// 按钮2：打开非模式对话框（Form3）
private void button2_Click(object sender, EventArgs e)
{
    Form3 frm = new Form3(); // 实例化Form3对象
    frm.Show();              // 以非模式方式显示Form3
}
```

3. 运行效果

* 点击【打开模式对话框】：弹出Form2，此时无法操作Form1，关闭Form2后，Form1恢复可操作；
* 点击【打开非模式对话框】：弹出Form3，此时可直接点击Form1，无需关闭Form3。

### 4.使用场景与注意事项
1. **模式窗体适用场景**：需要用户**必须完成当前窗体操作**后才能继续后续流程的场景（如登录窗口、确认提交、数据编辑弹窗）；
2. **非模式窗体适用场景**：允许用户**同时操作多个窗体**的场景（如辅助工具窗口、数据查询弹窗）；
3. **关键注意**：
   - 显示前必须**实例化窗体对象**，不可直接调用静态方法显示；
   - 模式窗体可通过`DialogResult`获取用户操作结果（如确认/取消），非模式窗体无此特性；
   - 非模式窗体显示后，若需关闭需手动调用`Close()`方法，或通过窗体自身关闭按钮操作。

### 5.核心总结
WinForm中模式与非模式窗体的核心区别在于**交互权限**，通过`ShowDialog()`和`Show()`方法快速切换显示方式；实战中需根据业务需求选择对应窗体类型，模式窗体适用于强制交互的场景，非模式窗体适用于灵活交互的场景。

## 四、通用对话框

### 1.通用对话框是什么
.NET框架提供的**Windows标准模式对话框**，用于实现文件操作、颜色/字体选择等通用交互功能，所有通用对话框均为模式窗体，需通过`ShowDialog()`方法显示。

### 2.**使用方式**

从工具箱双击对应对话框控件，会自动添加至窗体底部的**组件栏**（非界面可视控件），直接通过控件实例配置属性、调用显示方法即可。

### 3. 打开文件对话框（OpenFileDialog）
* **功能**：提供标准“打开”窗口，支持用户选择待打开的文件。
* **常用属性**：
  | 属性 | 作用 | 说明 |
  |------|------|------|
  | `Filter` | 文件筛选器 | 定义“文件类型”下拉选项，格式：`描述|后缀|描述|后缀`（如`图片文件(*.bmp,*.jpg)|*.bmp;*.jpg`），多类型用分号分隔 |
  | `InitialDirectory` | 初始目录 | 设置对话框默认打开的文件夹（如`D:\\`） |
  | `Multiselect` | 多选设置 | 是否允许选择多个文件，默认`false`（单选） |

### 4.保存文件对话框（SaveFileDialog）
* **功能**：提供标准“另存为”窗口，支持用户指定文件保存路径与名称。
* **属性特点**：
  - 共享`OpenFileDialog`的大部分属性（`Filter`/`InitialDirectory`），**无`Multiselect`属性**；
  - 特有属性：
    | 属性 | 作用 | 默认值 |
    |------|------|--------|
    | `CreatePrompt` | 文件不存在时是否提示创建 | `false` |
    | `OverwritePrompt` | 文件已存在时是否提示覆盖 | `true` |

### 5.颜色对话框（ColorDialog）
* **功能**：提供标准颜色选择窗口，支持用户选择标准颜色或自定义颜色。
* **核心特点**：无复杂专属属性，核心通过`ShowDialog()`显示，选中的颜色可通过控件的`Color`属性获取。

### 6.字体对话框（FontDialog）
* **功能**：提供标准字体设置窗口，支持用户调整文本的**字体、字形、字号、颜色**，并可预览设置效果。
* **核心特点**：无复杂专属属性，核心通过`ShowDialog()`显示，设置的字体可通过控件的`Font`属性获取。

### 7.实战任务实施

界面与属性设计
* **界面控件**：在`Form1`上添加4个`Button`控件；同时从工具箱添加`OpenFileDialog`、`SaveFileDialog`、`ColorDialog`、`FontDialog`四个通用对话框控件（至组件栏）。
* **按钮属性设置**：
  | 控件 | 属性 | 属性值 |
  |------|------|--------|
  | Button1 | `Text` | “打开”对话框 |
  | Button2 | `Text` | “另存为”对话框 |
  | Button3 | `Text` | “颜色”对话框 |
  | Button4 | `Text` | “字体”对话框 |

核心代码实现

在按钮的`Click`事件中，配置对话框属性并调用`ShowDialog()`显示：
```csharp
// 按钮1：打开文件对话框（仅选图片文件，初始目录为D盘）
private void button1_Click(object sender, EventArgs e)
{
    openFileDialog1.InitialDirectory = "D:\\"; // 设置初始目录
    // 设置筛选器：仅显示bmp/gif/jpg格式图片
    openFileDialog1.Filter = "bmp文件(*.bmp)|*.bmp|gif文件(*.gif)|*.gif|jpg文件(*.jpg)|*.jpg";
    openFileDialog1.ShowDialog(); // 显示对话框
}

// 按钮2：另存为对话框
private void button2_Click(object sender, EventArgs e)
{
    saveFileDialog1.ShowDialog();
}

// 按钮3：颜色对话框
private void button3_Click(object sender, EventArgs e)
{
    colorDialog1.ShowDialog();
}

// 按钮4：字体对话框
private void button4_Click(object sender, EventArgs e)
{
    fontDialog1.ShowDialog();
}
```

运行效果

* 点击【打开】：弹出D盘目录下的图片选择对话框；
* 点击【另存为】：弹出文件保存路径选择对话框；
* 点击【颜色】：弹出标准/自定义颜色选择窗口；
* 点击【字体】：弹出字体、字形、字号等设置窗口。

### 8.核心要点总结

1. **共性**：所有通用对话框均为**模式窗体**，必须通过`ShowDialog()`显示，无法使用`Show()`；
2. **配置关键**：`OpenFileDialog`的`Filter`（筛选器）和`InitialDirectory`（初始目录）是实现文件筛选、目录定位的核心属性；
3. **数据获取**：对话框显示后，可通过控件自身属性（如`ColorDialog.Color`、`FontDialog.Font`、`OpenFileDialog.FileName`）获取用户选择的结果；
4. **使用场景**：适用于文件操作、颜色/字体快速设置等标准化交互场景，无需自定义窗体，提升开发效率。