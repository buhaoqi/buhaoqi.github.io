---
# 这部分是关键！侧边栏显示名由这里决定
title: GroupBox 控件  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: GroupBox 控件  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 10  # 侧边栏中排在第1位
---

## 本节高考考点
### GroupBox控件属性
| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| Text | 字符串 | 显示在边框上的标题 | 可为空 |
| Visible | `true` 或 `false` | 是否显示该分组框及其内部控件 | 为 `false` 时整个分组隐藏 |


## 一、用途


## 二、特点


## 三、属性
### 1.属性
#### 1. Text 属性核心概念
`Text` 是 GroupBox（分组框）控件最基础的可读写属性，核心作用是**设置或获取 GroupBox 左上角显示的标题文本**，主要用于对内部控件进行逻辑分组标识，核心特点：
- 可读写性：既可以通过代码/设计器赋值修改标题，也可以读取当前标题文本，赋值后立即生效；
- 分组标识：Text 是 GroupBox 的核心视觉标识，用于区分不同功能组的控件（如“性别组”“爱好组”），不影响内部控件的功能；
- 支持快捷键：文本中包含 `&` 时，其后的字符会成为快捷键（如 `Text="性别(&S)"`，按 Alt+S 可将焦点定位到 GroupBox 内的第一个控件），需显示 `&` 则用 `&&` 转义；
- 独立于内部控件：修改 Text 仅改变标题显示，不会影响 GroupBox 内 RadioButton、CheckBox 等控件的状态或功能。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `Text` 属性的「读取标题」「设置标题」「快捷键使用」核心用法，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 GroupBox 控件（命名：groupBox1）；
- 2个 RadioButton 控件（放入 groupBox1 内，命名：radioBtnMale、radioBtnFemale，文本分别为「男」「女」）；
- 2个 Button 控件（命名：btnGetText、btnSetText，文本分别为「获取分组标题」「设置分组标题」）；
- 1个 Label 控件（命名：label1，用于显示操作结果）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace GroupBoxTextDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化内部RadioButton文本
            radioBtnMale.Text = "男";
            radioBtnFemale.Text = "女";

            // 绑定按钮点击事件
            btnGetText.Text = "获取分组标题";
            btnGetText.Click += BtnGetText_Click;
            btnSetText.Text = "设置分组标题";
            btnSetText.Click += BtnSetText_Click;

            // 初始化显示
            label1.Text = "当前分组标题：" + groupBox1.Text;
        }

        // 按钮1：读取GroupBox的Text（标题）
        private void BtnGetText_Click(object sender, EventArgs e)
        {
            // 读取Text属性获取分组标题
            string currentText = string.IsNullOrEmpty(groupBox1.Text) 
                ? "未设置标题" 
                : groupBox1.Text;
            
            label1.Text = $"当前分组标题：{currentText}";
        }

        // 按钮2：设置GroupBox的Text（带快捷键）
        private void BtnSetText_Click(object sender, EventArgs e)
        {
            // 核心：设置标题为「性别(&S)」，Alt+S为快捷键
            groupBox1.Text = "性别(&S)";
            label1.Text = "已设置分组标题为：性别(&S)\n提示：按Alt+S可聚焦到分组内第一个控件";
        }
    }
}
```

##### 步骤3：运行效果
1. 初始状态：GroupBox 无标题（Text 为空），点击「获取分组标题」，Label 显示「当前分组标题：未设置标题」；
2. 点击「设置分组标题」：GroupBox 左上角立即显示「性别(S)」（S 下有下划线，代表快捷键），Label 提示设置成功；
3. 快捷键验证：按下 `Alt+S`，焦点会自动定位到 groupBox1 内的第一个 RadioButton（「男」），体现快捷键的作用；
4. 再次点击「获取分组标题」：Label 会准确读取到「性别(&S)」，验证读取功能。

#### 3. 核心使用注意事项
1. **可读写特性**：GroupBox 的 `Text` 完全可读写，赋值语句 `groupBox1.Text = "新标题"` 会立即更新左上角的标题显示，无任何隐藏约束；
2. **快捷键与转义**：
   - `&` 用于设置快捷键（如 `&爱好` 对应 Alt+A），按下快捷键会将焦点定位到分组内第一个可交互控件（RadioButton/CheckBox 等）；
   - 若需显示纯 `&` 符号，需用 `&&` 转义（如 `Text="&&分组"` 会显示「&分组」）；
3. **空文本处理**：未设置 `Text` 时，`groupBox1.Text` 返回空字符串，GroupBox 仅显示边框、无标题，读取时建议增加空值判断；
4. **与内部控件独立**：修改 `Text` 不会改变内部控件的任何状态（如 RadioButton 的 `Checked`、CheckBox 的 `CheckState`），仅作为分组标识；
5. **文本对齐**：GroupBox 的标题仅显示在左上角，无专门的文本对齐属性，若需调整标题位置，需通过调整 GroupBox 尺寸或结合其他控件实现。

#### 总结
1. `Text` 是 GroupBox 的可读写属性，核心用于**设置/获取分组框的标题文本**，是分组标识的核心手段，赋值后立即生效；
2. 支持 `&` 设置快捷键（Alt+指定字符聚焦分组内控件），显示 `&` 需用 `&&` 转义；
3. `Text` 仅控制标题显示，与内部控件的功能、状态完全独立，不影响控件交互逻辑。

---

### 2.Visible属性
#### 1. Visible 属性核心概念
`Visible` 是 GroupBox（分组框）控件的基础布尔型属性，核心作用是**控制 GroupBox 及其内部所有子控件是否在界面上显示**，核心特点：
- 取值规则：`true`（默认值）表示 GroupBox 及内部控件正常显示；`false` 表示 GroupBox 及内部所有控件完全隐藏（界面上无显示、不占用空间，且无法交互）；
- 级联生效（关键）：设置 GroupBox 的 `Visible` 会**同步影响其内部所有子控件**（如 RadioButton、CheckBox、TextBox 等）的可见性，无需单独设置子控件的 `Visible`；
- 可读写性：既可以通过代码主动设置显示/隐藏，也可以读取该属性判断当前可见状态；
- 交互关联：`Visible = false` 时，GroupBox 及内部控件不仅不可见，还会完全失效（无法点击、聚焦，也不会触发任何事件）。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `Visible` 属性的「隐藏分组框」「显示分组框」「读取可见状态」核心用法，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 GroupBox 控件（命名：groupBox1，Text：「用户性别」）；
- 2个 RadioButton 控件（放入 groupBox1 内，命名：radioBtnMale、radioBtnFemale，文本分别为「男」「女」）；
- 2个 Button 控件（命名：btnHideGroup、btnShowGroup，文本分别为「隐藏分组框」「显示分组框」）；
- 1个 Label 控件（命名：label1，用于显示当前可见状态）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace GroupBoxVisibleDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化内部RadioButton文本
            radioBtnMale.Text = "男";
            radioBtnFemale.Text = "女";
            groupBox1.Text = "用户性别";

            // 绑定按钮点击事件
            btnHideGroup.Text = "隐藏分组框";
            btnHideGroup.Click += BtnHideGroup_Click;
            btnShowGroup.Text = "显示分组框";
            btnShowGroup.Click += BtnShowGroup_Click;

            // 初始化显示当前状态
            UpdateVisibleStatus();
        }

        // 辅助方法：更新Label显示当前Visible状态
        private void UpdateVisibleStatus()
        {
            string status = groupBox1.Visible ? "显示" : "隐藏";
            label1.Text = $"当前分组框状态：{status}";
        }

        // 按钮1：隐藏GroupBox（包括内部所有控件）
        private void BtnHideGroup_Click(object sender, EventArgs e)
        {
            // 核心：设置Visible为false，分组框及内部控件全部隐藏
            groupBox1.Visible = false;
            UpdateVisibleStatus();
        }

        // 按钮2：显示GroupBox（包括内部所有控件）
        private void BtnShowGroup_Click(object sender, EventArgs e)
        {
            // 核心：设置Visible为true，分组框及内部控件全部显示
            groupBox1.Visible = true;
            UpdateVisibleStatus();
        }
    }
}
```

##### 步骤3：运行效果
1. 初始状态：`groupBox1.Visible = true`，界面显示「用户性别」分组框及内部的「男/女」单选按钮，Label 显示「当前分组框状态：显示」；
2. 点击「隐藏分组框」：分组框及内部的单选按钮立即从界面消失（不占用任何空间），Label 显示「当前分组框状态：隐藏」，此时无法点击/操作原分组框内的控件；
3. 点击「显示分组框」：分组框及内部控件重新显示在原位置，Label 恢复显示「显示」，控件可正常交互（如选中单选按钮）；
4. 级联验证：若单独设置 `radioBtnMale.Visible = false`（仅隐藏“男”按钮），再隐藏/显示分组框，恢复显示后“男”按钮仍保持隐藏（GroupBox 的 Visible 不会覆盖子控件自身的 Visible 配置）。

#### 3. 核心使用注意事项
1. **级联效果细节**：
   - GroupBox 隐藏（`Visible=false`）时，无论内部子控件的 `Visible` 是 `true` 还是 `false`，都会同步隐藏；
   - GroupBox 显示（`Visible=true`）时，子控件的可见性由其自身的 `Visible` 决定（如子控件设为 `false`，则仅该子控件隐藏）；
2. **布局影响**：`Visible=false` 时，GroupBox 会从界面布局中“消失”，下方/右侧的控件会自动填充其空间（区别于 `Enabled=false`：仅灰显，仍占用空间）；
3. **交互失效**：隐藏的 GroupBox 及内部控件无法响应任何事件（如 `Click`、`CheckedChanged`），也无法通过代码聚焦（`Focus()` 无效）；
4. **即时生效**：修改 `Visible` 后无需刷新窗体/控件，界面会立即更新显示/隐藏状态；
5. **状态保留**：隐藏后再显示，内部控件的状态（如 RadioButton 的 `Checked`、TextBox 的 `Text`）会完全保留，不会重置。

#### 总结
1. `Visible` 是 GroupBox 的布尔属性，核心用于**控制分组框及内部所有子控件的显示/隐藏**，`true` 显示、`false` 隐藏且交互失效；
2. 具有级联生效特性，但不会覆盖子控件自身的 `Visible` 配置（显示时子控件按自身状态展示）；
3. 隐藏后控件不占用界面空间，且状态会完整保留，显示后可恢复原有交互逻辑。