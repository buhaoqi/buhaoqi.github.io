---
# 这部分是关键！侧边栏显示名由这里决定
title: 控件概述  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 控件概述  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 0  # 侧边栏中排在第1位
---

本节高考考点

1. 掌握控件的概念、属性、方法、事件；
2. 掌握标签(Label)属性：AutoSize、Text、Focused、Font、Height、Size、Visible、Width、Text Align、Name、Image、Anchor、BorderStyle、CanFocus；
3. 掌握文本框(TextBox)的属性：Text、TextLength、MaxLength、Multiline、PasswordChar、SelectedText、ReadOnly、TabIndex；
4. 掌握文本框(TextBox)的事件：TextChanged；
5. 掌握按钮（Button）的属性：Name、Enabled、Text、TabIndex；
6. 掌握按钮（Button）的事件：Click、Enter、MouseUp、TextChanged；
7. 掌握组合框(ComboBox)的属性：DroppedDown、Items、SelectedIndex、SelectedItem、SelectedText、Sorted、Text；
8. 掌握列表框(ListBox)的属性：Items、MultiColumn、SelectedItems、Sorted、Text；
9. 掌握单选按钮(RadioButton)的属性：Checked、Text；
10. 掌握复选框(CheckBox)的属性：Checked、CheckState、Text；
11. 掌握滚动条(HScrollBar、VScrollBar)的属性：Value、SmallChange、LargeChange；
12. 掌握时钟控件(Timer)的属性：Interval；
13. 掌握时钟控件的Tick事件；
14. 了解分组框(GroupBox)的属性：Text、Visible；
15. 了解选项卡(TabControl)的属性：SelectedTab、TabPages、Multiline；


## 一、控件是什么
定义：
1. 控件是构成用户界面的基本元素(零件)。


特点：
- 控件有控制能力。NET提前预设好的功能。
    - 控制输入
    - 控制状态
    - 控制流程
    - 控制选择
- 控件特定的外观。

用途：通过控件可以实现数据展示、用户交互。

2. 控件本质上是一个“类”
```csharp
// 控件本质上是一个“类”(Class)
public class Button : ButtonBase, IButtonControl
{
    // 属性：描述控件的状态
    public string Text { get; set; }
    public bool Enabled { get; set; }
    
    // 方法：控件能执行的操作
    public void PerformClick();
    public void Focus();
    
    // 事件：用户与控件的交互
    public event EventHandler Click;
}

// 实际使用时：
Button btn = new Button();  // 创建按钮控件实例
btn.Text = "确定";          // 设置属性
btn.Click += Btn_Click;     // 订阅事件
```

**从层次结构看**
```
System.Object
    └── System.MarshalByRefObject
        └── System.ComponentModel.Component
            └── System.Windows.Forms.Control  ← 所有控件的基类
                ├── Button                    ← 按钮控件
                ├── TextBox                  ← 文本框控件
                ├── Label                    ← 标签控件
                └── ...                      ← 其他控件
```

## 二、**控件的三大要素**

### **1. 属性（Properties）—— “是什么”**
```csharp
// 外观属性
button1.Text = "点击我";       // 显示的文字
button1.BackColor = Color.Red; // 背景颜色
button1.Size = new Size(100, 30); // 尺寸

// 行为属性
button1.Enabled = true;        // 是否可用
button1.Visible = true;        // 是否可见
button1.TabStop = true;        // 是否可以用Tab键选中
```

### **2. 方法（Methods）—— “能做什么”**
```csharp
// 控件操作自己的方法
button1.Focus();           // 让按钮获得焦点
button1.Show();            // 显示控件
button1.Hide();            // 隐藏控件
button1.Refresh();         // 强制重绘

// 控件操作其他控件的方法
textBox1.Clear();          // 清空文本框内容
listBox1.Items.Add("新项"); // 向列表添加项
```

### **3. 事件（Events）—— “对什么反应”**
```csharp
// 用户交互事件
button1.Click += Button1_Click;        // 鼠标点击
textBox1.TextChanged += TextBox1_TextChanged; // 文本变化

// 键盘事件
textBox1.KeyPress += TextBox1_KeyPress;       // 按键
textBox1.KeyDown += TextBox1_KeyDown;         // 键按下
textBox1.KeyUp += TextBox1_KeyUp;             // 键释放

// 鼠标事件
button1.MouseMove += Button1_MouseMove;       // 鼠标移动
button1.MouseClick += Button1_MouseClick;     // 鼠标点击
```
## 三、**控件分类（按功能）**

> 记忆口诀：显输交选控定布，控件分类不糊涂

|口诀字|对应分类|核心控件|
|---|---|---|
|显|显示类|Label（标签）|
|输|输入类|TextBox（文本框）|
|交|交互类|Button（按钮）|
|选|选择类|ComboBox、ListBox、RadioButton、CheckBox|
|控|控制类|HScrollBar、VScrollBar（滚动条）|
|定|定时类|Timer（时钟控件）|
|布|布局类|GroupBox、TabControl（容器 / 布局控件）|

## 四、Label控件

### 1.基础属性

Label 控件的基础属性直接决定显示效果

| 属性 | 属性值 |  属性说明 | 注意 |
|------|------------|----------|------|
| **Text** | `任意字符串`| 在 label 上显示文本内容 | 1.值类型:string <br /> 2.默认属性 <br />3.支持空字符串和多行文本（使用`\n`换行）<br />4. 属性永远不会为null，即使为空也是空字符串 |
| **Font** | `new Font("字体名", 字号, 字形)`<br /> new Font("微软雅黑", 16, FontStyle.Bold);| 设置Label显示文本的字体、字号、字形。 | 1.值类型:System.Drawing.Font<br />2.字体名:"微软雅黑"、"宋体"等<br /> 3.字号：通常1-1638（常用8-72）<br /> 4.字形：Regular（常规）、Bold（粗体）、<br />Italic（斜体）、Underline（下划线）、<br />Strikeout（删除线） |
| **Image** |`Image.FromFile("路径")`<br />Image.FromFile(@".\images\logo2.png");<br />`Properties.Resources.图片名`|在Label上显示图片 |1.值类型:System.Drawing.Image<br />2.图片格式：BMP、GIF、JPEG、PNG、ICO等<br /> 3. 需配合ImageAlign属性控制图片位置 <br /> 4.可与文本同时显示或单独显示<br />5.用于显示图标、Logo、状态指示器等图形元素。 |
| **TextAlign** |`TopLeft`、`TopCenter`、<br />`TopRight`、`MiddleLeft`、<br />`MiddleCenter`、`MiddleRight`、<br />`BottomLeft`、`BottomCenter`、<br />`BottomRight` | 控制Label中文本和图片的对齐方式。 | 1.System.Drawing.ContentAlignment<br /> 2.当AutoSize=true时，TextAlign效果可能不明显<br /> 3. 当有Image时，TextAlign控制文本位置，<br />ImageAlign控制图片位置<br />4. 默认值为TopLeft<br />5. 多行文本仍然受对齐方式影响<br />6. 与ImageAlign配合可实现图文混排布局 |


FontStyle:

```csharp
public enum FontStyle
{
    Regular = 0,      // 常规
    Bold = 1,         // 粗体
    Italic = 2,       // 斜体
    Underline = 4,    // 下划线
    Strikeout = 8     // 删除线
}
```

### 2.实战属性

实战属性：实战中高频出现

| 属性 | 属性值 | 属性说明 | 注意 |
|------|--------|----------|------|
| **AutoSize** | 1. `true`（自动调整大小,默认）<br />2. `false`（固定大小） | 控制Label是否自动调整大小以适应其文本内容。当设置为`true`时，Label的宽度和高度会根据Text属性的内容自动计算。 | 1. 值类型：`bool`<br />2. 当`AutoSize=true`时，手动设置`Width`和`Height`属性无效<br />3. 与`Anchor`属性配合使用时要注意布局变化<br />4. 多行文本时需要结合`WordWrap`属性使用<br />5. 设置固定大小时应先设置`AutoSize=false` |
| **Visible** | 1. `true`（可见，默认）<br />2. `false`（隐藏） | 控制Label控件在窗体上是否可见。设置为`false`时，控件完全隐藏且不占用布局空间。 | 1. 值类型：`bool`<br />2. 与`Enabled`属性的区别：<br />   - `Enabled=false`：控件可见但灰显，不可交互<br />   - `Visible=false`：控件完全不可见<br />3. 父控件`Visible=false`时，子控件也不可见<br />4. 隐藏的控件仍存在于控件集合中，可通过代码访问 |
| **Size** | `new Size(宽度, 高度)`<br />示例：`new Size(200, 50)` | 同时设置Label控件的宽度和高度（单位：像素）。该属性是`Width`和`Height`的组合表示。 | 1. 值类型：`System.Drawing.Size`<br />2. 修改`Size`属性会自动将`AutoSize`设置为`false`<br />3. 可通过`Size.Width`和`Size.Height`分别访问宽度和高度<br />4. 与`MaximumSize`和`MinimumSize`属性配合可实现大小限制<br />5. 设计时可通过拖拽控件边框直观调整 |
| **Width**<br />**Height** | 整数值（像素）<br />示例：`Width = 200`<br />`Height = 50` | 分别设置Label控件的宽度（`Width`）和高度（`Height`）。这两个属性是`Size`属性的分解表示。 | 1. 值类型：`int`<br />2. 当`AutoSize=true`时，这两个属性为只读<br />3. 等价关系：<br />   - `label.Width` = `label.Size.Width`<br />   - `label.Height` = `label.Size.Height`<br />4. 设置其中一个不会影响另一个<br />5. 可通过`MaximumSize`和`MinimumSize`限制范围 |
| **BorderStyle** | 1. `None`（无边框，默认）<br />2. `FixedSingle`（单线边框）<br />3. `Fixed3D`（三维凹陷边框） | 设置Label控件的边框样式。用于增强控件的视觉层次感，使其在界面上更加突出。 | 1. 值类型：`System.Windows.Forms.BorderStyle`<br />2. `FixedSingle`：创建简单的单像素边框<br />3. `Fixed3D`：创建具有三维凹陷效果的边框<br />4. 设置边框后可能需要调整内边距或文本位置<br />5. 常用场景：<br />   - `None`：普通文本标签<br />   - `FixedSingle`：标题框、分组标签<br />   - `Fixed3D`：状态指示、输入框标签 |


### 3.次要属性

| 属性 | 属性值 | 属性说明 | 注意 |
|------|--------|----------|------|
| **Name** | 任意合法的C#标识符<br />**示例：**<br />`lblUserName`<br />`lblStatus`<br />`lblCopyright`<br />`lblErrorInfo` | Label控件在代码中的唯一标识符。用于在程序中通过名称引用和操作控件，是事件处理和数据绑定的基础。 | 1. 值类型：`string`<br />2. 命名规范：建议使用`lbl`前缀 + 描述性名称<br />3. 设计器中修改Name属性会自动更新代码中的变量名<br />4. 同一容器内控件Name不能重复<br />5. 运行时可通过`Controls.Find("控件名", true)`查找控件 |
| **Anchor** | `AnchorStyles`枚举值的组合<br />**常用组合示例：**<br />`AnchorStyles.Top \| AnchorStyles.Left`（默认）<br />`AnchorStyles.Top \| AnchorStyles.Right`<br />`AnchorStyles.Bottom \| AnchorStyles.Right`<br />`AnchorStyles.Top \| AnchorStyles.Bottom \| AnchorStyles.Left \| AnchorStyles.Right`（All）<br />`AnchorStyles.None` | 控制Label控件如何相对于其父容器边缘进行定位。当容器大小改变时，锚定的边将保持与容器边缘的固定距离。 | 1. 值类型：`System.Windows.Forms.AnchorStyles`<br />2. 与`Dock`属性互斥，只能使用其中一个<br />3. **常用布局场景：**<br />   - `Top,Left`：固定左上角位置<br />   - `Top,Right`：固定在右上角<br />   - `Bottom,Right`：固定在右下角<br />   - `All`：随容器拉伸/收缩<br />4. 默认值为`Top,Left`<br />5. 设计时可通过属性窗口直观设置 |
| **CanFocus** | 1. `true`（可以接收焦点）<br />2. `false`（不能接收焦点，**默认**）<br />**示例：**<br />`label1.CanFocus` // 返回false<br />`label1.TabStop = true;`<br />`label1.CanFocus` // 可能返回true | 只读属性，用于判断 Label 是否可以接收焦点。默认情况下，Label 的 CanFocus 返回 false。 | 1. 值类型：`bool`（只读）<br />2. **Label默认不能获得焦点**<br />3. 要使Label可以接收焦点，需要同时设置：<br />   - `TabStop = true`<br />   - `Enabled = true`<br />   - `Visible = true`<br />4. 通常Label不需要焦点，特殊需求时才启用<br />5. 焦点相关属性还包括：`TabStop`、`TabIndex` |
| **Focused** | 1. `true`（当前拥有焦点）<br />2. `false`（当前没有焦点）<br />**示例：**<br />`if (label1.Focused)`<br />`{`<br />`    // 当前label拥有焦点`<br />`}`<br />`else`<br />`{`<br />`    // 当前label没有焦点`<br />`}` | 指示Label控件当前是否拥有输入焦点。这是一个只读属性，用于检查控件的焦点状态。 | 1. 值类型：`bool`（只读）<br />2. **由于Label默认CanFocus=false**，因此Focused通常也为false<br />3. 如果需要让Label获得焦点，需要先启用焦点接收能力<br />4. **焦点获取方法：**<br />   - `label1.Focus()`<br />   - 用户通过Tab键切换<br />   - 用户鼠标点击（如果支持）<br />5. 焦点事件：`Enter`（获得焦点）、`Leave`（失去焦点） |

## 五、TextBox控件

### 1. **基础属性（必考）**


| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| **Text** | 任意字符串 | 获取或设置 TextBox 中显示的文本内容。 | 1. 值类型：`string` <br /> 2. **默认属性** <br /> 3. 支持空字符串和多行文本（需设置 `Multiline=True`，使用 `\n` 换行）<br /> 4. 属性永远不会为 `null`，即使为空也是空字符串 |
| **MaxLength** | 整数 (如 10, 20) | 设置用户可在 TextBox 中输入的最大字符数。 | 1. 值类型：`int` <br /> 2. 默认值为 **0**，表示不限制输入长度 <br /> 3. 仅限制**用户输入**，不影响通过代码（如 `TextBox.Text = “...”`）设置的文本 <br /> 4. 适用于限制用户名、密码、验证码等输入框的长度 |


### 2. **重要属性（常考）**

| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| **ReadOnly** | `true` 或 `false` | 设置 TextBox 是否为只读模式。 | 1. 值类型：`bool` <br /> 2. 默认值为 `false`，表示可编辑 <br /> 3. 设置为 `true` 时，用户无法修改文本，但可选中、复制文本 <br /> 4. 常用于显示只读信息或配置项 |
| **PasswordChar** | 单个字符（如 `*`、`•`） | 设置用于屏蔽密码输入的字符。 | 1. 值类型：`char` <br /> 2. 默认值为 `\0`（空字符），表示正常显示文本 <br /> 3. 设置后，输入的所有字符将显示为该字符，但实际 `Text` 属性仍为真实内容 <br /> 4. 常用于密码框、验证码输入框等敏感信息输入 |

### 3. **一般属性（可能考）**

| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| **Multiline** | `true` 或 `false` | 设置 TextBox 是否支持多行文本输入与显示。 | 1. 值类型：`bool` <br /> 2. 默认值为 `false`，表示单行模式 <br /> 3. 设置为 `true` 时，可通过回车换行，并可调整控件高度 <br /> 4. 在多行模式下可配合 `ScrollBars` 属性使用 |
| **SelectedText** | 字符串 | 获取或设置 TextBox 中当前选中的文本内容。强调用代码选中。 | 1. 值类型：`string` <br /> 2. 运行时属性，设计时不可见 <br /> 3. 若未选中任何文本，则为空字符串 <br /> 4. 常用于实现文本的替换、复制、剪切等操作 |


### 4. **了解属性（较少考）**

| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| **TextLength** | 返回整数（如 5, 20） | 获取 TextBox 中字符总数。 | 1. 值类型：`int`<br />2. 只读属性，设计时不可设置<br />3. 与 `Text.Length` 属性值相同，但性能更优<br />4. 常用于实时统计输入字数或验证输入是否超出限制 |
| **TabIndex** | 整数（如 0, 1, 2...） | 设置控件在 Tab 键顺序中的位置。 | 1. 值类型：`int`<br />2. 默认值根据控件添加顺序自动递增<br />3. Tab 键顺序影响用户使用 Tab 键在窗体控件间导航的顺序<br />4. 数值越小，Tab 键焦点越早到达该控件 |



## 六、Button控件(按钮)

### Button控件属性
| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| Name | 字符串 | 控件名称，用于代码中引用 | 建议采用有意义的名称，如 `btnSubmit` |
| Enabled | `true` 或 `false` | 设置按钮是否可用 | 为 `false` 时按钮变灰，不可点击 |
| Text | 字符串 | 按钮上显示的文本 | 可使用 `&` 设置快捷键，如 `&Save` 表示 `Alt+S` |
| TabIndex | 整数 | 设置 Tab 键顺序 | 数值越小，Tab 键越早聚焦到此按钮 |


### Button控件事件
| 事件 | 事件描述 | 示例 | 注意 |
| :--- | :--- | :--- | :--- |
| Click | 用户单击按钮时触发 | `private void btnOk_Click(...) { MessageBox.Show("已点击"); }` | 最常用的事件 |
| Enter | 按钮获得焦点时触发 | `private void btnOk_Enter(...) { btnOk.BackColor = Color.Yellow; }` | 常用于焦点提示 |
| MouseUp | 鼠标按键释放时触发 | `private void btnOk_MouseUp(...) { if(e.Button == MouseButtons.Right) {...} }` | 可区分鼠标左右键 |
| TextChanged | 按钮文本改变时触发 | `private void btnOk_TextChanged(...) { ... }` | 较少使用 |

## 七、ComboBox控件

### ComboBox控件属性
| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| DroppedDown | `true` 或 `false` | 设置下拉列表是否展开 | 可通过代码控制展开/收起 |
| Items | 字符串集合 | 下拉列表中的选项集合 | 使用 `Add()`、`Remove()` 等方法管理 |
| SelectedIndex | 整数 | 当前选中项的索引（从0开始） | `-1` 表示未选中 |
| SelectedItem | 对象 | 当前选中的项 | 通常为字符串 |
| SelectedText | 字符串 | 可编辑部分中选中的文本 | 仅当 `DropDownStyle` 为 `DropDown` 时有效 |
| Sorted | `true` 或 `false` | 是否对选项自动排序 | 为 `true` 时按字母顺序排序 |
| Text | 字符串 | 当前显示的文本内容 | 在 `DropDownList` 模式下为选中项的文本 |

## 八、ListBox控件

### ListBox控件属性
| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| Items | 对象集合 | 列表中的项目集合 | 使用 `Items.Add()` 添加项目 |
| MultiColumn | `true` 或 `false` | 是否以多列形式显示 | 适合项目较多的情况 |
| SelectedItems | 集合 | 当前选中的项目集合（多选模式） | 类型为 `SelectedObjectCollection` |
| Sorted | `true` 或 `false` | 是否对项目自动排序 | 为 `true` 时按字母顺序排序 |
| Text | 字符串 | 当前选中项的文本（单选模式） | 未选中时为空字符串 |

## 九、RadioButton控件


### RadioButton控件属性
| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| Checked | `true` 或 `false` | 是否被选中 | 为 `true` 时表示选中状态 |
| Text | 字符串 | 显示在单选框旁边的文本 | 用于说明选项含义 |

## 十、CheckBox控件

### CheckBox控件属性
| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| Checked | `true` 或 `false` | 是否被选中（二态） | 当 `ThreeState=true` 时可能为 `null` |
| CheckState | `Unchecked`/`Checked`/`Indeterminate` | 复选框的状态（三态） | 适用于需要"不确定"状态的场景 |
| Text | 字符串 | 显示在复选框旁边的文本 | 用于说明选项含义 |


## 十一、HScrollBar｜VScrollBar控件


### HScrollBar｜VScrollBar控件属性
| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| Value | 整数 | 滚动条的当前值 | 必须在 `Minimum` 和 `Maximum` 之间 |
| SmallChange | 整数 | 点击箭头按钮时的变化量 | 默认为 1 |
| LargeChange | 整数 | 点击滑块空白区域时的变化量 | 默认为 10 |


## 十二、Timer控件


### Timer控件属性
| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| Interval | 整数（毫秒） | Tick 事件的时间间隔 | 默认为 100 毫秒 |



### Timer控件事件
| 事件 | 事件描述 | 示例 | 注意 |
| :--- | :--- | :--- | :--- |
| Tick | 达到 Interval 时间间隔时触发 | `private void timer1_Tick(...) { label1.Text = DateTime.Now.ToString(); }` | 需启动计时器后才触发 |


## 十三、GroupBox控件

### GroupBox控件属性
| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| Text | 字符串 | 显示在边框上的标题 | 可为空 |
| Visible | `true` 或 `false` | 是否显示该分组框及其内部控件 | 为 `false` 时整个分组隐藏 |

## 十四、TabControl控件


### TabControl控件属性
| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| SelectedTab | TabPage 对象 | 当前选中的标签页 | 可通过代码切换 |
| TabPages | TabPage 集合 | 所有的标签页集合 | 使用 `Add()` 添加新页 |
| Multiline | `true` 或 `false` | 标签过多时是否允许多行显示 | 为 `true` 时可换行 |
