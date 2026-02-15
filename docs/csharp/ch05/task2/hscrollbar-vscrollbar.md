---
# 这部分是关键！侧边栏显示名由这里决定
title: HScrollBar|VScrollBar控件  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: HScrollBar|VScrollBar控件  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 8  # 侧边栏中排在第1位
---

## 本节高考考点
### HScrollBar｜VScrollBar控件属性
| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| Value | 整数 | 滚动条的当前值 | 必须在 `Minimum` 和 `Maximum` 之间 |
| SmallChange | 整数 | 点击箭头按钮时的变化量 | 默认为 1 |
| LargeChange | 整数 | 点击滑块空白区域时的变化量 | 默认为 10 |



## 一、用途


## 二、特点


## 三、属性
### 1.Value属性
#### 1. Value 属性核心概念
`Value` 是 HScrollBar（水平滚动条）控件最核心的数值型属性，核心作用是**获取或设置滚动条滑块的当前位置**，是操作滚动条的基础属性，核心特点：
- 数值约束：`Value` 始终在 `[Minimum, Maximum - LargeChange]` 范围内（`Minimum` 为最小值，默认 0；`Maximum` 为最大值，默认 100；`LargeChange` 是点击滚动条轨道时滑块的步长，默认 10），超出该范围的赋值会被自动修正；
- 可读写性：既可以通过代码主动设置 `Value` 来移动滑块位置，也可以读取 `Value` 获取用户操作后的滑块位置；
- 事件关联：`Value` 变化（用户拖动滑块、点击滚动箭头/轨道、代码赋值）会触发 `ValueChanged` 事件。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `Value` 属性的「读取当前值」「代码设置值」「响应值变化」核心用法，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 HScrollBar 控件（命名：hScrollBar1）；
- 1个 Button 控件（命名：btnSetValue，文本：「设置Value为50」）；
- 1个 Label 控件（命名：label1，用于显示当前Value值）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace HScrollBarValueDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化滚动条基础参数（可选，使用默认值也可）
            hScrollBar1.Minimum = 0;       // 最小值（默认0）
            hScrollBar1.Maximum = 100;     // 最大值（默认100）
            hScrollBar1.LargeChange = 10;  // 点击轨道的步长（默认10）
            hScrollBar1.SmallChange = 1;   // 点击箭头的步长（默认1）

            // 绑定事件：Value变化时实时显示
            hScrollBar1.ValueChanged += HScrollBar1_ValueChanged;
            // 绑定按钮点击事件
            btnSetValue.Click += BtnSetValue_Click;

            // 初始化显示当前Value
            label1.Text = $"当前Value值：{hScrollBar1.Value}";
        }

        // 滚动条Value变化时触发：实时读取并显示Value
        private void HScrollBar1_ValueChanged(object sender, EventArgs e)
        {
            label1.Text = $"当前Value值：{hScrollBar1.Value}";
        }

        // 按钮点击：通过代码设置Value
        private void BtnSetValue_Click(object sender, EventArgs e)
        {
            // 核心：设置Value为50（会自动约束在有效范围内）
            hScrollBar1.Value = 50;
            // 手动触发显示（也可依赖ValueChanged事件）
            label1.Text = $"已手动设置Value为：{hScrollBar1.Value}";
        }
    }
}
```

##### 步骤3：运行效果
1. 初始状态：`hScrollBar1.Value = 0`，Label 显示「当前Value值：0」；
2. 用户操作：
   - 点击滚动条右侧箭头：`Value` 每次+1（SmallChange=1），Label 实时更新；
   - 点击滚动条轨道（滑块右侧）：`Value` 每次+10（LargeChange=10），Label 实时更新；
   - 拖动滑块到任意位置：Label 立即显示当前 `Value`；
3. 代码设置：点击「设置Value为50」按钮，滑块会跳到50的位置，Label 显示「已手动设置Value为：50」；
4. 边界验证：若尝试设置 `hScrollBar1.Value = 100`，因 `Maximum-LargeChange=90`，`Value` 会被自动修正为90，Label 显示90。

#### 3. 核心使用注意事项
1. **有效范围约束**：`Value` 的实际最大值不是 `Maximum`，而是 `Maximum - LargeChange`（因为滑块有宽度，无法完全到达 `Maximum` 位置），例如 `Maximum=100`、`LargeChange=10` 时，`Value` 最大为90；
2. **步长影响**：
   - `SmallChange`：点击滚动条左右箭头时，`Value` 的增减幅度（默认1）；
   - `LargeChange`：点击滚动条轨道（滑块两侧空白区域）时，`Value` 的增减幅度（默认10）；
3. **赋值自动修正**：若设置的 `Value` 小于 `Minimum`，会自动改为 `Minimum`；大于 `Maximum-LargeChange`，会自动改为 `Maximum-LargeChange`；
4. **事件触发时机**：用户拖动滑块时，仅在松开鼠标后触发 `ValueChanged`；点击箭头/轨道时，每点击一次立即触发一次 `ValueChanged`；代码设置 `Value` 也会触发该事件。

#### 总结
1. `Value` 是 HScrollBar 的核心属性，用于**获取/设置滑块的当前位置**，数值受 `Minimum`、`Maximum`、`LargeChange` 约束；
2. `Value` 的有效范围是 `[Minimum, Maximum - LargeChange]`，超出范围的赋值会被自动修正；
3. `Value` 变化（用户操作/代码赋值）会触发 `ValueChanged` 事件，可通过该事件实时响应滚动条位置变化。

---

### 2.SmallChange属性
#### 1. SmallChange 属性核心概念
`SmallChange` 是 HScrollBar（水平滚动条）控件的基础数值型属性，核心作用是**设置或获取点击滚动条左右箭头按钮时，滑块位置（Value 属性）的增减步长**，是控制滚动条精细调节的关键属性，核心特点：
- 数值规则：`SmallChange` 为非负整数（默认值为 1），表示每次点击箭头时 `Value` 的变化量；若设置为 0，点击箭头不会改变 `Value`；
- 生效场景：仅对「点击滚动条两端的箭头按钮」生效，拖动滑块、点击滚动条轨道不会受该属性影响；
- 与 `LargeChange` 区分：`LargeChange` 是点击滚动条轨道（滑块两侧空白区域）时的步长，`SmallChange` 是点击箭头的精细步长，二者独立；
- 可读写性：既可以通过代码设置步长，也可以读取当前步长值，赋值后立即生效。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `SmallChange` 的「读取步长」「设置步长」「验证步长生效效果」核心用法，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 HScrollBar 控件（命名：hScrollBar1）；
- 2个 Button 控件（命名：btnSetSmallChange、btnGetSmallChange，文本分别为「设置步长为5」「读取当前步长」）；
- 1个 Label 控件（命名：label1，用于显示步长和Value变化）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace HScrollBarSmallChangeDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化滚动条基础参数（固定范围，便于观察步长效果）
            hScrollBar1.Minimum = 0;       // 最小值
            hScrollBar1.Maximum = 100;     // 最大值
            hScrollBar1.LargeChange = 10;  // 轨道步长（不影响SmallChange）

            // 绑定事件：Value变化时实时显示当前值
            hScrollBar1.ValueChanged += HScrollBar1_ValueChanged;
            // 绑定按钮点击事件
            btnSetSmallChange.Click += BtnSetSmallChange_Click;
            btnGetSmallChange.Click += BtnGetSmallChange_Click;

            // 初始化显示
            label1.Text = $"初始SmallChange：{hScrollBar1.SmallChange}\n当前Value：{hScrollBar1.Value}";
        }

        // 滚动条Value变化时：显示当前Value和SmallChange
        private void HScrollBar1_ValueChanged(object sender, EventArgs e)
        {
            label1.Text = $"当前SmallChange：{hScrollBar1.SmallChange}\n当前Value：{hScrollBar1.Value}\n（点击箭头时Value增减{hScrollBar1.SmallChange}）";
        }

        // 按钮1：设置SmallChange为5（修改箭头步长）
        private void BtnSetSmallChange_Click(object sender, EventArgs e)
        {
            // 核心：设置SmallChange为5
            hScrollBar1.SmallChange = 5;
            label1.Text = $"已设置SmallChange为5！\n当前Value：{hScrollBar1.Value}";
        }

        // 按钮2：读取当前SmallChange值
        private void BtnGetSmallChange_Click(object sender, EventArgs e)
        {
            int currentSmallChange = hScrollBar1.SmallChange;
            label1.Text = $"当前SmallChange步长：{currentSmallChange}\n点击箭头时Value每次增减{currentSmallChange}";
        }
    }
}
```

##### 步骤3：运行效果
1. 初始状态：`SmallChange = 1`，点击滚动条左侧/右侧箭头，`Value` 每次增减 1（如从 0→1→2 或 5→4→3），Label 实时显示变化；
2. 点击「设置步长为5」：`SmallChange` 变为 5，再次点击箭头，`Value` 每次增减 5（如从 0→5→10 或 10→5→0），步长明显变大；
3. 点击「读取当前步长」：Label 会显示当前 `SmallChange` 的数值（初始1，设置后5），验证读取功能；
4. 边界验证：若设置 `hScrollBar1.SmallChange = 0`，点击箭头时 `Value` 不再变化，体现「步长为0时箭头失效」。

#### 3. 核心使用注意事项
1. **数值约束**：`SmallChange` 必须≥0，若设置为负数会抛出运行时异常，建议赋值前做非负判断；
2. **生效范围**：仅对「点击箭头按钮」生效，拖动滑块（Value 连续变化）、点击轨道（按 LargeChange 步长变化）均不受 `SmallChange` 影响；
3. **与Value范围联动**：即使设置了 `SmallChange`，`Value` 仍会被约束在 `[Minimum, Maximum - LargeChange]` 范围内，例如 `Value=95`、`SmallChange=5`、`Maximum-LargeChange=90` 时，点击右箭头 `Value` 只会变为90（不会超范围）；
4. **即时生效**：修改 `SmallChange` 后无需刷新控件，立即对后续的箭头点击操作生效。

#### 总结
1. `SmallChange` 是 HScrollBar 的基础属性，用于**控制点击滚动条箭头按钮时 Value 的增减步长**，默认值为1，需设置为非负整数；
2. 该属性仅对箭头点击生效，与控制轨道步长的 `LargeChange` 相互独立；
3. 设置 `SmallChange` 可调整滚动条的精细调节程度（值越小调节越精细），赋值后立即生效且受 Value 范围约束。
---

### 3.LargeChange属性
#### 1. LargeChange 属性核心概念
`LargeChange` 是 HScrollBar（水平滚动条）控件的基础数值型属性，核心作用是**设置或获取点击滚动条轨道（滑块左右两侧的空白区域）时，滑块位置（Value 属性）的增减步长**，是控制滚动条粗粒度调节的关键属性，核心特点：
- 数值规则：`LargeChange` 为非负整数（默认值为 10），表示每次点击轨道时 `Value` 的变化量；若设置为 0，点击轨道不会改变 `Value`；
- 生效场景：仅对「点击滚动条轨道（滑块两侧空白）」生效，拖动滑块、点击滚动条箭头按钮不会受该属性影响；
- 与 `SmallChange` 区分：`SmallChange` 是点击箭头按钮的精细步长（默认1），`LargeChange` 是点击轨道的粗粒度步长，二者完全独立；
- 可读写性：既可以通过代码设置步长，也可以读取当前步长值，赋值后立即生效；
- 范围关联：`Value` 的最大有效值为 `Maximum - LargeChange`（因滑块有宽度，无法完全到达 `Maximum` 位置），这一约束由 `LargeChange` 决定。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `LargeChange` 的「读取步长」「设置步长」「验证步长生效效果」核心用法，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 HScrollBar 控件（命名：hScrollBar1）；
- 2个 Button 控件（命名：btnSetLargeChange、btnGetLargeChange，文本分别为「设置轨道步长为20」「读取当前轨道步长」）；
- 1个 Label 控件（命名：label1，用于显示步长和Value变化）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace HScrollBarLargeChangeDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化滚动条基础参数（固定范围，便于观察步长效果）
            hScrollBar1.Minimum = 0;        // 最小值
            hScrollBar1.Maximum = 100;      // 最大值
            hScrollBar1.SmallChange = 1;    // 箭头步长（固定为1，不干扰LargeChange测试）

            // 绑定事件：Value变化时实时显示当前值和LargeChange
            hScrollBar1.ValueChanged += HScrollBar1_ValueChanged;
            // 绑定按钮点击事件
            btnSetLargeChange.Click += BtnSetLargeChange_Click;
            btnGetLargeChange.Click += BtnGetLargeChange_Click;

            // 初始化显示
            label1.Text = $"初始LargeChange：{hScrollBar1.LargeChange}\n当前Value：{hScrollBar1.Value}\n（点击轨道时Value增减{hScrollBar1.LargeChange}）";
        }

        // 滚动条Value变化时：实时显示当前状态
        private void HScrollBar1_ValueChanged(object sender, EventArgs e)
        {
            label1.Text = $"当前LargeChange：{hScrollBar1.LargeChange}\n当前Value：{hScrollBar1.Value}\n（点击轨道增减{hScrollBar1.LargeChange} | 点击箭头增减{hScrollBar1.SmallChange}）";
        }

        // 按钮1：设置LargeChange为20（修改轨道步长）
        private void BtnSetLargeChange_Click(object sender, EventArgs e)
        {
            // 核心：设置LargeChange为20
            hScrollBar1.LargeChange = 20;
            label1.Text = $"已设置LargeChange为20！\n当前Value：{hScrollBar1.Value}\n（点击轨道时Value会增减20）";
        }

        // 按钮2：读取当前LargeChange值
        private void BtnGetLargeChange_Click(object sender, EventArgs e)
        {
            int currentLargeChange = hScrollBar1.LargeChange;
            label1.Text = $"当前轨道步长（LargeChange）：{currentLargeChange}\n点击轨道时Value每次增减{currentLargeChange}";
        }
    }
}
```

##### 步骤3：运行效果
1. 初始状态：`LargeChange = 10`，点击滚动条滑块右侧的轨道，`Value` 从 0→10→20（每次+10）；点击滑块左侧轨道，`Value` 从 20→10→0（每次-10），Label 实时显示变化；
2. 点击「设置轨道步长为20」：`LargeChange` 变为 20，再次点击轨道，`Value` 每次增减 20（如 0→20→40 或 40→20→0），步长明显变大；
3. 点击「读取当前轨道步长」：Label 会显示当前 `LargeChange` 的数值（初始10，设置后20），验证读取功能；
4. 边界验证：`Maximum=100`、`LargeChange=20` 时，`Value` 最大有效值为 `100-20=80`，若 `Value=80` 时点击右侧轨道，`Value` 不会超过80，体现范围约束；
5. 对比验证：点击箭头按钮时，`Value` 仍每次增减1（`SmallChange=1`），说明 `LargeChange` 不影响箭头步长。

#### 3. 核心使用注意事项
1. **数值约束**：`LargeChange` 必须≥0，若设置为负数会抛出 `ArgumentOutOfRangeException` 运行时异常，建议赋值前做非负判断（如 `if (newValue >= 0) hScrollBar1.LargeChange = newValue;`）；
2. **生效范围**：仅对「点击轨道（滑块两侧空白）」生效，拖动滑块（Value 连续变化）、点击箭头按钮（按 `SmallChange` 步长）均不受 `LargeChange` 影响；
3. **Value 范围核心约束**：`Value` 的最大有效值由 `Maximum - LargeChange` 决定，这是滚动条的核心规则——滑块的宽度对应 `LargeChange`，因此无法完全到达 `Maximum` 位置；
4. **即时生效**：修改 `LargeChange` 后无需刷新控件，立即对后续的轨道点击操作生效；
5. **步长设计建议**：`LargeChange` 建议设置为 `Maximum` 的10%~20%（如 `Maximum=100` 时设为10~20），符合用户对「粗调节」的操作习惯。

#### 总结
1. `LargeChange` 是 HScrollBar 的基础属性，用于**控制点击滚动条轨道时 Value 的增减步长**，默认值为10，需设置为非负整数；
2. 该属性仅对轨道点击生效，与控制箭头步长的 `SmallChange` 相互独立，且决定了 `Value` 的最大有效值（`Maximum - LargeChange`）；
3. 设置 `LargeChange` 可调整滚动条的粗粒度调节程度（值越大调节幅度越大），赋值后立即生效且受数值非负约束。



## 示例

```c#
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp6
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void vScrollBar1_Scroll(object sender, ScrollEventArgs e)
        {

        }

        private void vScrollBar1_ValueChanged(object sender, EventArgs e)
        {
            label1.Text = $"当前Value值：{vScrollBar1.Value}";

        }

        private void button1_Click(object sender, EventArgs e)
        {
            // 核心：设置Value为50（会自动约束在有效范围内）
            hScrollBar1.Value = 100;
            // 手动触发显示（也可依赖ValueChanged事件）
            label1.Text = $"已手动设置Value为：{vScrollBar1.Value}";
        }
    }
}

```