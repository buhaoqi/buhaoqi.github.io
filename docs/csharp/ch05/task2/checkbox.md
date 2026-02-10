---
# 这部分是关键！侧边栏显示名由这里决定
title: CheckBox控件  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: CheckBox控件  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 7  # 侧边栏中排在第1位
---

## 一、用途


## 二、特点


## 三、属性
### 1.Checked属性
#### 1. Checked 属性核心概念
`Checked` 是 CheckBox（复选框）控件最核心的基础布尔属性，核心作用是**获取或设置复选框是否处于“选中”状态**，核心特点与 RadioButton 有明显区别：
- 取值规则：`true` 表示复选框被选中（呈现“勾选”样式），`false` 表示未选中（默认状态，无勾选）；
- 无互斥特性（关键）：CheckBox 不存在“同容器互斥”规则，多个 CheckBox 可同时被选中（`Checked = true`），这是与 RadioButton 最核心的差异；
- 可读写性：既可以通过代码主动设置 `Checked` 来勾选/取消勾选，也可以读取 `Checked` 判断用户是否选中了该复选框；
- 事件关联：`Checked` 状态变化（手动点击/代码修改）会触发 `CheckedChanged` 事件。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `Checked` 属性的「读取选中状态」「代码设置选中状态」「多复选框独立选中」核心用法，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 3个 CheckBox 控件（命名：chkReading、chkSports、chkGames，文本分别为「读书」「运动」「游戏」）；
- 2个 Button 控件（命名：btnGetStatus、btnSetGame，文本分别为「查看选中状态」「勾选「游戏」」）；
- 1个 Label 控件（命名：label1，用于显示操作结果）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace CheckBoxCheckedDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化控件文本（也可在设计器中直接设置）
            chkReading.Text = "读书";
            chkSports.Text = "运动";
            chkGames.Text = "游戏";
            btnGetStatus.Text = "查看选中状态";
            btnSetGame.Text = "勾选「游戏」";
            label1.Text = "请勾选复选框或点击按钮测试";

            // 绑定按钮点击事件
            btnGetStatus.Click += BtnGetStatus_Click;
            btnSetGame.Click += BtnSetGame_Click;
        }

        // 按钮1：读取所有CheckBox的Checked状态
        private void BtnGetStatus_Click(object sender, EventArgs e)
        {
            // 读取Checked属性判断是否选中
            string reading = chkReading.Checked ? "选中" : "未选中";
            string sports = chkSports.Checked ? "选中" : "未选中";
            string games = chkGames.Checked ? "选中" : "未选中";
            
            label1.Text = $"读书：{reading}\n运动：{sports}\n游戏：{games}";
        }

        // 按钮2：通过代码设置CheckBox的Checked状态
        private void BtnSetGame_Click(object sender, EventArgs e)
        {
            // 核心：设置chkGames的Checked为true（勾选），不影响其他CheckBox
            chkGames.Checked = true;
            label1.Text = "已通过代码勾选「游戏」复选框！";
        }
    }
}
```

##### 步骤3：运行效果
1. 手动勾选：同时勾选「读书」「运动」复选框，点击「查看选中状态」，Label 显示「读书：选中、运动：选中、游戏：未选中」；
2. 代码设置：点击「勾选「游戏」」按钮，「游戏」复选框自动勾选，「读书」「运动」的选中状态保持不变（体现无互斥性）；
3. 取消勾选：手动点击已选中的复选框（如「读书」），其 `Checked` 变为 `false`，再次点击「查看选中状态」可看到状态更新。

#### 3. 核心使用注意事项
1. **无互斥规则**：CheckBox 无“同容器互斥”限制，多个复选框可同时选中，这是与 RadioButton 最关键的区别（RadioButton 同容器仅能选一个）；
2. **赋值生效逻辑**：设置 `chkBox.Checked = true/false` 会立即改变勾选状态，且不会影响其他任何 CheckBox 的状态；
3. **事件触发**：无论是手动点击还是代码修改 `Checked`，都会触发 `CheckedChanged` 事件（可用于实时响应勾选状态变化），示例：
   ```csharp
   // 绑定CheckedChanged事件，实时显示「运动」的勾选状态
   chkSports.CheckedChanged += (s, e) => {
       label1.Text = chkSports.Checked ? "勾选了运动" : "取消了运动";
   };
   ```
4. **三态扩展（基础了解）**：CheckBox 有 `TriState` 属性（默认 `false`），设为 `true` 时会出现“半选”状态（`CheckState.Indeterminate`），但基础场景下 `Checked` 仅关注“全选/未选”（半选时 `Checked` 仍为 `false`）。

#### 总结
1. `Checked` 是 CheckBox 的核心布尔属性，`true` 表示勾选、`false` 表示未勾选，支持**读写操作**；
2. CheckBox 无互斥性，多个控件可同时选中，这是与 RadioButton 的核心差异；
3. 读取 `Checked` 可判断用户的多选选择，设置 `Checked` 可通过代码指定勾选状态，状态变化会触发 `CheckedChanged` 事件。

---

### 2.CheckState属性
#### 1. CheckState 属性核心概念
`CheckState` 是 CheckBox（复选框）控件的基础枚举型属性，核心作用是**获取或设置复选框的完整勾选状态**，是对 `Checked` 布尔属性的扩展，核心特点：
- 枚举取值（共3种）：
  - `CheckState.Unchecked`：未选中（默认状态，复选框无勾选，对应 `Checked = false`）；
  - `CheckState.Checked`：全选中（复选框显示对勾，对应 `Checked = true`）；
  - `CheckState.Indeterminate`：半选/不确定状态（复选框填充灰色，仅当 `TriState = true` 时可用，此时 `Checked` 仍为 `false`）；
- 三态前提：默认 `TriState = false`（双态模式），`CheckState` 仅能取 `Unchecked/Checked`；需手动设置 `TriState = true` 才能启用 `Indeterminate` 半选状态；
- 可读写性：既可以通过代码设置 `CheckState` 切换状态，也可以读取该属性判断当前完整状态；
- 事件关联：`CheckState` 变化会触发 `CheckStateChanged` 事件（同时也会触发 `CheckedChanged` 事件）。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `CheckState` 的「三态启用」「状态读取」「代码设置半选」核心用法，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 CheckBox 控件（命名：chkTest，文本：「测试三态复选框」）；
- 2个 Button 控件（命名：btnGetState、btnSetIndeterminate，文本分别为「读取状态」「设置半选状态」）；
- 1个 Label 控件（命名：label1，用于显示操作结果）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace CheckBoxCheckStateDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 核心：启用三态模式（否则无法设置Indeterminate）
            chkTest.TriState = true;
            chkTest.Text = "测试三态复选框（点击可循环切换状态）";

            // 初始化按钮文本和事件
            btnGetState.Text = "读取状态";
            btnGetState.Click += BtnGetState_Click;
            btnSetIndeterminate.Text = "设置半选状态";
            btnSetIndeterminate.Click += BtnSetIndeterminate_Click;

            label1.Text = "点击复选框或按钮测试CheckState属性";
        }

        // 按钮1：读取CheckState和Checked的关联状态
        private void BtnGetState_Click(object sender, EventArgs e)
        {
            // 读取CheckState枚举值
            string checkState = chkTest.CheckState.ToString();
            // 读取Checked（仅反映是否全选）
            string isChecked = chkTest.Checked.ToString();

            label1.Text = $"当前CheckState：{checkState}\n对应的Checked值：{isChecked}";
        }

        // 按钮2：通过代码设置半选状态（Indeterminate）
        private void BtnSetIndeterminate_Click(object sender, EventArgs e)
        {
            // 核心：设置CheckState为Indeterminate（需TriState=true）
            chkTest.CheckState = CheckState.Indeterminate;
            label1.Text = "已通过代码设置为半选状态！";
        }
    }
}
```

##### 步骤3：运行效果
1. 初始状态：`CheckState = Unchecked`，`Checked = false`，点击「读取状态」可验证；
2. 手动点击复选框：
   - 第一次点击：`CheckState = Checked`，`Checked = true`（全选，显示对勾）；
   - 第二次点击：`CheckState = Indeterminate`，`Checked = false`（半选，灰色填充）；
   - 第三次点击：回到 `Unchecked`，循环切换；
3. 点击「设置半选状态」：复选框立即变为灰色半选状态，Label 提示设置成功；
4. 若注释 `chkTest.TriState = true`（恢复双态）：
   - 无法设置 `Indeterminate`，代码设置该值会自动转为 `Unchecked`；
   - 用户点击仅在 `Unchecked/Checked` 间切换。

#### 3. 核心使用注意事项
1. **三态启用前提**：`Indeterminate` 半选状态仅在 `TriState = true` 时生效，否则 `CheckState` 只能是 `Unchecked/Checked`，设置 `Indeterminate` 会被忽略；
2. **与Checked的关联**：
   - `CheckState = Checked` → `Checked = true`；
   - `CheckState = Unchecked/Indeterminate` → `Checked = false`；
   - 仅 `Checked` 无法区分「未选」和「半选」，需用 `CheckState`；
3. **用户操作逻辑**：`TriState = true` 时，用户点击复选框会按「Unchecked → Checked → Indeterminate → Unchecked」循环切换；
4. **事件触发**：修改 `CheckState` 会同时触发 `CheckStateChanged` 和 `CheckedChanged` 事件，可根据需求绑定对应事件（如关注完整状态用 `CheckStateChanged`）。

#### 总结
1. `CheckState` 是枚举属性，包含 `Unchecked`（未选）、`Checked`（全选）、`Indeterminate`（半选）三种状态，比 `Checked` 更全面；
2. 半选状态需先设置 `TriState = true` 才能启用，否则仅支持双态；
3. `Checked` 仅反映「是否全选」，无法区分未选和半选，需通过 `CheckState` 读取完整状态。

### 3.Text属性
#### 1. Text 属性核心概念
`Text` 是 CheckBox（复选框）控件的基础可读写属性，核心作用是**设置或获取复选框左侧/右侧显示的文本标签**，是用户识别复选框用途的核心标识，核心特点：
- 可读写性：既可以通过代码/设计器赋值修改显示文本，也可以读取当前显示的文本内容，赋值后立即生效；
- 独立于选中状态：`Text` 仅控制显示的文本标签，与 `Checked`/`CheckState`（勾选状态）完全独立，修改文本不会影响勾选状态；
- 支持基础格式：可通过换行符 `\n` 实现文本换行，也可通过 `&` 设置快捷键（按 Alt+指定字符选中复选框），需显示 `&` 则用 `&&` 转义；
- 文本对齐：可结合 `TextAlign` 属性调整文本相对于复选框方框的对齐方式（默认左对齐）。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `Text` 属性的「读取文本」「设置文本」「换行/快捷键」核心用法，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 CheckBox 控件（命名：chkDemo）；
- 2个 Button 控件（命名：btnGetText、btnSetText，文本分别为「获取文本」「设置文本」）；
- 1个 Label 控件（命名：label1，用于显示操作结果）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Drawing;
using System.Windows.Forms;

namespace CheckBoxTextDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化复选框文本对齐方式（默认MiddleLeft，文本在方框右侧居中）
            chkDemo.TextAlign = ContentAlignment.MiddleLeft;

            // 绑定按钮事件
            btnGetText.Text = "获取文本";
            btnGetText.Click += BtnGetText_Click;
            btnSetText.Text = "设置文本";
            btnSetText.Click += BtnSetText_Click;

            label1.Text = "点击按钮测试CheckBox的Text属性";
        }

        // 按钮1：读取CheckBox的Text内容
        private void BtnGetText_Click(object sender, EventArgs e)
        {
            // 读取Text属性，增加空值判断
            string currentText = string.IsNullOrEmpty(chkDemo.Text) 
                ? "未设置文本" 
                : chkDemo.Text;
            
            label1.Text = $"当前Text内容：{currentText}";
        }

        // 按钮2：通过代码设置CheckBox的Text内容
        private void BtnSetText_Click(object sender, EventArgs e)
        {
            // 1. 带快捷键的文本（&S：Alt+S为快捷键）
            // 2. 换行文本（\n实现多行显示）
            chkDemo.Text = "记住密码(&S)\n（有效期7天）"; 
            
            label1.Text = "已设置文本：\n「记住密码(&S)\\n（有效期7天）」\n提示：按Alt+S可选中该复选框";
        }
    }
}
```

##### 步骤3：运行效果
1. 初始状态：点击「获取文本」，Label 显示「当前Text内容：未设置文本」；
2. 点击「设置文本」：
   - CheckBox 显示两行文本，第一行「记住密码(S)」（S下有下划线，代表快捷键），第二行「（有效期7天）」；
   - 按 `Alt+S` 快捷键，可快速选中/取消选中该复选框；
3. 再次点击「获取文本」：Label 会准确读取到包含 `&` 和 `\n` 的完整文本内容；
4. 手动修改：若在设计器中直接修改 CheckBox 的 Text 属性，运行后也能通过「获取文本」按钮读取到修改后的内容。

#### 3. 核心使用注意事项
1. **可读写特性**：CheckBox 的 `Text` 是完全可读写的，赋值语句 `chkDemo.Text = "新文本"` 会立即更新显示，这与 ListBox 的只读 Text 形成明显区别；
2. **快捷键与转义**：
   - 文本中 `&` 是快捷键标识（如 `&Save` 对应 Alt+S），按下 Alt+指定字符可快速切换复选框的勾选状态；
   - 若需显示纯 `&` 符号，需用 `&&` 转义（如 `Text="&&是转义符"` 会显示「&是转义符」）；
3. **换行与对齐**：
   - 用 `\n` 可实现文本换行，适合需要补充说明的场景（如示例中的“有效期7天”）；
   - `TextAlign` 属性（如 `ContentAlignment.TopRight`）可调整文本相对于复选框方框的位置，默认是 `MiddleLeft`；
4. **空文本处理**：未设置 `Text` 时，`chkDemo.Text` 返回空字符串，读取时建议增加空值判断，避免显示异常；
5. **与选中状态独立**：修改 `Text` 不会改变 `Checked`/`CheckState`，反之勾选状态变化也不会影响文本内容。

#### 总结
1. `Text` 是 CheckBox 的可读写属性，核心用于**设置/获取复选框的显示文本标签**，赋值后立即生效；
2. 支持换行（`\n`）、快捷键（`&`）等基础格式，显示 `&` 需用 `&&` 转义；
3. `Text` 与勾选状态（`Checked`/`CheckState`）完全独立，仅控制显示内容，不影响复选框的选中逻辑。

