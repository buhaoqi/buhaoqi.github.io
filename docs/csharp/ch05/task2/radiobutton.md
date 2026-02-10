---
# 这部分是关键！侧边栏显示名由这里决定
title: RadioButton控件  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: RadioButton控件  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 6  # 侧边栏中排在第1位
---

## 一、用途


## 二、特点


## 三、属性
### 1. Checked属性
#### 1. Checked 属性核心概念
`Checked` 是 RadioButton（单选按钮）控件最核心的基础布尔属性，核心作用是**获取或设置单选按钮是否处于“选中”状态**，核心特点：
- 取值规则：`true` 表示单选按钮被选中（呈现“圆点填充”样式），`false` 表示未选中（默认状态，圆点为空）；
- 互斥特性（关键）：**同一容器内**（如 Form、Panel、GroupBox）的 RadioButton 会自动互斥——选中其中一个（`Checked = true`），同容器内其他 RadioButton 的 `Checked` 会自动变为 `false`；不同容器的 RadioButton 互不影响；
- 可读写性：既可以通过代码主动设置 `Checked` 来选中/取消单选按钮，也可以读取 `Checked` 判断用户是否选中了该按钮；
- 事件关联：`Checked` 状态变化（手动点击/代码修改）会触发 `CheckedChanged` 事件。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `Checked` 属性的「读取选中状态」「代码设置选中状态」「容器互斥」核心用法，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 Panel 控件（命名：panel1，用于包裹单选按钮，体现容器互斥）；
- 2个 RadioButton 控件（放入 panel1 中，命名：radioBtnMale、radioBtnFemale，文本分别为「男」「女」）；
- 2个 Button 控件（命名：btnCheckStatus、btnSetMale，文本分别为「查看选中状态」「设置选中‘男’」）；
- 1个 Label 控件（命名：label1，用于显示操作结果）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace RadioButtonCheckedDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化控件文本（也可在设计器中直接设置）
            radioBtnMale.Text = "男";
            radioBtnFemale.Text = "女";
            btnCheckStatus.Text = "查看选中状态";
            btnSetMale.Text = "设置选中「男」";
            label1.Text = "请选择性别或点击按钮测试";

            // 绑定按钮点击事件
            btnCheckStatus.Click += BtnCheckStatus_Click;
            btnSetMale.Click += BtnSetMale_Click;
        }

        // 按钮1：读取所有RadioButton的Checked状态
        private void BtnCheckStatus_Click(object sender, EventArgs e)
        {
            // 读取Checked属性判断是否选中
            string maleStatus = radioBtnMale.Checked ? "选中" : "未选中";
            string femaleStatus = radioBtnFemale.Checked ? "选中" : "未选中";
            
            label1.Text = $"「男」：{maleStatus}\n「女」：{femaleStatus}";
        }

        // 按钮2：通过代码设置RadioButton的Checked状态
        private void BtnSetMale_Click(object sender, EventArgs e)
        {
            // 核心：设置radioBtnMale的Checked为true，同容器内的radioBtnFemale会自动变为false
            radioBtnMale.Checked = true;
            label1.Text = "已通过代码设置「男」为选中状态！";
        }
    }
}
```

##### 步骤3：运行效果
1. 手动点击：点击「女」单选按钮，再点击「查看选中状态」，Label 显示「男：未选中，女：选中」；
2. 代码设置：点击「设置选中‘男’」按钮，「男」单选按钮自动选中，「女」自动取消选中，Label 提示设置成功；
3. 互斥验证：若将两个 RadioButton 移出 Panel（直接放在 Form 上），仍保持互斥；若新增一个 Panel 并放入第三个 RadioButton，该按钮与前两个互不影响（可同时选中）。

#### 3. 核心使用注意事项
1. **容器互斥规则**：只有放在**同一容器**（Form/Panel/GroupBox）内的 RadioButton 才会互斥，若需分组单选（如“性别组”“学历组”），需将不同组的 RadioButton 放入不同 Panel/GroupBox；
2. **赋值生效逻辑**：设置 `radioBtn.Checked = true` 时，无需手动取消同容器其他 RadioButton 的选中状态，控件会自动处理；
3. **事件触发**：无论是手动点击还是代码修改 `Checked`，都会触发 `CheckedChanged` 事件（可用于实时响应选中状态变化），示例：
   ```csharp
   // 绑定CheckedChanged事件，实时显示选中状态
   radioBtnMale.CheckedChanged += (s, e) => {
       label1.Text = radioBtnMale.Checked ? "选中了男" : "取消了男";
   };
   ```
4. **默认选中**：若需窗体加载时默认选中某个 RadioButton，可在构造函数中添加 `radioBtnMale.Checked = true;`。

#### 总结
1. `Checked` 是 RadioButton 的核心布尔属性，`true` 表示选中、`false` 表示未选中，支持**读写操作**；
2. 同一容器内的 RadioButton 自动互斥，设置一个 `Checked = true` 会自动取消同容器其他项的选中状态；
3. 读取 `Checked` 可判断用户选择，设置 `Checked` 可通过代码指定选中项，是单选按钮最基础的使用方式。

---

### 2. Text属性
#### 1. Text 属性核心概念
`Text` 是 RadioButton（单选按钮）控件的基础可读写属性，核心作用是**设置或获取单选按钮右侧显示的文本标签**，是用户识别单选按钮用途的核心标识，核心特点：
- 可读写性：既可以通过代码/设计器赋值修改显示文本，也可以读取当前显示的文本内容，赋值后立即生效；
- 独立于选中状态：`Text` 仅控制显示的文本标签，与 `Checked`（选中状态）属性完全独立，修改文本不会影响选中状态；
- 支持基础格式：可通过换行符 `\n` 实现文本换行，也可结合 `TextAlign` 属性调整文本相对于按钮的对齐方式（如左对齐、居中）；
- 快捷键标识：文本中包含 `&` 时，其后的字符会成为快捷键（如 `Text="男(&M)"`，按 Alt+M 可选中该单选按钮），需显示 `&` 则用 `&&` 转义。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `Text` 属性的「读取文本」「设置文本」「换行/快捷键」核心用法，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 2个 RadioButton 控件（命名：radioBtn1、radioBtn2）；
- 2个 Button 控件（命名：btnGetText、btnSetText，文本分别为「获取文本」「设置文本」）；
- 1个 Label 控件（命名：label1，用于显示操作结果）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Drawing;
using System.Windows.Forms;

namespace RadioButtonTextDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化RadioButton基础样式
            radioBtn1.TextAlign = ContentAlignment.MiddleLeft; // 文本左对齐（默认）
            radioBtn2.TextAlign = ContentAlignment.MiddleLeft;

            // 绑定按钮点击事件
            btnGetText.Text = "获取文本";
            btnGetText.Click += BtnGetText_Click;
            btnSetText.Text = "设置文本";
            btnSetText.Click += BtnSetText_Click;

            label1.Text = "点击按钮测试Text属性";
        }

        // 按钮1：读取所有RadioButton的Text内容
        private void BtnGetText_Click(object sender, EventArgs e)
        {
            // 读取Text属性获取显示文本
            string text1 = string.IsNullOrEmpty(radioBtn1.Text) ? "未设置文本" : radioBtn1.Text;
            string text2 = string.IsNullOrEmpty(radioBtn2.Text) ? "未设置文本" : radioBtn2.Text;
            
            label1.Text = $"单选按钮1文本：{text1}\n单选按钮2文本：{text2}";
        }

        // 按钮2：通过代码设置RadioButton的Text内容
        private void BtnSetText_Click(object sender, EventArgs e)
        {
            // 基础文本设置
            radioBtn1.Text = "男(&M)"; // &M：设置Alt+M为快捷键
            // 换行文本设置（\n实现换行）
            radioBtn2.Text = "女\n(性别选项)"; 
            
            label1.Text = "已设置文本：\n单选按钮1：男(&M)（Alt+M快捷键）\n单选按钮2：女\\n(性别选项)（换行显示）";
        }
    }
}
```

##### 步骤3：运行效果
1. 初始状态：点击「获取文本」，Label 显示「单选按钮1文本：未设置文本，单选按钮2文本：未设置文本」；
2. 点击「设置文本」：
   - radioBtn1 显示「男(M)」（M下有下划线，按 Alt+M 可选中该单选按钮）；
   - radioBtn2 显示两行文本：第一行「女」，第二行「(性别选项)」；
3. 再次点击「获取文本」：Label 会准确读取到设置的文本内容（包括&和\n）；
4. 手动修改：若在设计器中直接修改 RadioButton 的 Text 属性，运行后也能通过 `btnGetText` 读取到修改后的内容。

#### 3. 核心使用注意事项
1. **可读写特性**：RadioButton 的 `Text` 是完全可读写的（区别于 ListBox 的 Text 只读），赋值语句 `radioBtn.Text = "新文本"` 会立即更新显示；
2. **快捷键与转义**：
   - 文本中 `&` 是快捷键标识（如 `&Male` 对应 Alt+M），若需显示纯 `&`，需写 `&&`（如 `Text="&&是转义符"` 会显示「&是转义符」）；
3. **换行与对齐**：
   - 用 `\n` 实现文本换行，适合需要多行说明的场景；
   - `TextAlign` 属性（如 `ContentAlignment.TopRight`）可调整文本相对于单选按钮圆点的位置，默认是 `MiddleLeft`（文本在圆点右侧居中）；
4. **空文本处理**：若未设置 `Text`，`radioBtn.Text` 返回空字符串，读取时建议增加空值判断，避免显示异常。

#### 总结
1. `Text` 是 RadioButton 的可读写属性，核心用于**设置/获取单选按钮的显示文本标签**，赋值立即生效；
2. 支持换行（`\n`）、快捷键（`&`）等基础格式，显示 `&` 需用 `&&` 转义；
3. `Text` 与 `Checked` 独立，仅控制显示内容，不影响单选按钮的选中状态。

