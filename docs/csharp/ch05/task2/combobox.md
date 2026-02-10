---
# 这部分是关键！侧边栏显示名由这里决定
title: ComboBox 控件  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: ComboBox 控件  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 4  # 侧边栏中排在第1位
---

## 一、用途


## 二、特点


## 三、属性

### 1.DroppedDown属性
#### 一、DroppedDown属性核心作用
ComboBox控件的`DroppedDown`属性是**控制下拉列表展开/收起状态**的核心布尔属性：
- `DroppedDown = true`：强制展开ComboBox的下拉列表（显示所有选项）；
- `DroppedDown = false`：强制收起下拉列表（隐藏选项）；
- 核心区别：用户点击ComboBox的下拉箭头也会切换该状态，但`DroppedDown`允许通过**代码主动控制**下拉列表的显示/隐藏，而非仅依赖用户手动操作。

#### 二、基础用法（极简WinForms示例）
##### 步骤1：设计器准备控件（可视化操作）
1. 新建WinForms项目，拖入以下控件并设置属性：
   | 控件类型 | Name（关键） | Text属性 | 说明 |
   |----------|--------------|----------|------|
   | ComboBox | cmbDemo      | （清空） | 演示DroppedDown的核心控件 |
   | Button   | btnOpen      | 展开下拉列表 | 点击展开ComboBox选项 |
   | Button   | btnClose     | 收起下拉列表 | 点击收起ComboBox选项 |
   | Label    | lblTip       | 下拉列表状态：未展开 | 显示当前状态提示 |

2. 给`cmbDemo`添加测试选项：
   选中`cmbDemo`→右侧属性面板找到`Items`→点击“...”→输入“选项1”“选项2”“选项3”（每行一个）→确定。

##### 步骤2：编写核心代码（注释全覆盖）
双击窗体空白处，粘贴以下代码（通过按钮控制DroppedDown属性）：
```csharp
using System;
using System.Drawing;
using System.Windows.Forms;

namespace ComboBoxDroppedDownDemo
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();

            // 绑定按钮点击事件（控制DroppedDown）
            btnOpen.Click += BtnOpen_Click;
            btnClose.Click += BtnClose_Click;

            // 补充：绑定ComboBox的状态事件（辅助提示）
            cmbDemo.DropDown += CmbDemo_DropDown; // 展开时触发
            cmbDemo.CloseUp += CmbDemo_CloseUp;   // 收起时触发
        }

        // 点击“展开”按钮：设置DroppedDown=true
        private void BtnOpen_Click(object sender, EventArgs e)
        {
            // 核心：强制展开下拉列表
            cmbDemo.DroppedDown = true;
        }

        // 点击“收起”按钮：设置DroppedDown=false
        private void BtnClose_Click(object sender, EventArgs e)
        {
            // 核心：强制收起下拉列表
            cmbDemo.DroppedDown = false;
        }

        // ComboBox展开时更新提示（辅助感知状态）
        private void CmbDemo_DropDown(object sender, EventArgs e)
        {
            lblTip.Text = "下拉列表状态：已展开";
            lblTip.ForeColor = Color.Blue;
        }

        // ComboBox收起时更新提示（辅助感知状态）
        private void CmbDemo_CloseUp(object sender, EventArgs e)
        {
            lblTip.Text = "下拉列表状态：已收起";
            lblTip.ForeColor = Color.Black;
        }
    }
}
```

##### 运行效果（新手直观验证）
1. 程序启动后：`cmbDemo`显示空白，`lblTip`显示“下拉列表状态：未展开”；
2. 点击`btnOpen`按钮：`cmbDemo`的下拉列表自动展开（显示“选项1/2/3”），`lblTip`变为蓝色“已展开”；
3. 点击`btnClose`按钮：下拉列表立即收起，`lblTip`变回黑色“已收起”；
4. 手动点击`cmbDemo`的下拉箭头：也会触发`DropDown`/`CloseUp`事件，提示同步更新（验证属性与手动操作的联动）。

#### 三、新手常见使用场景
| 场景类型 | 示例代码（核心逻辑） | 说明 |
|----------|----------------------|------|
| 自动展开下拉 | `// 窗体加载时自动展开ComboBox<br>private void MainForm_Load(object sender, EventArgs e)<br>{<br>    cmbDemo.DroppedDown = true;<br>}` | 适配“默认显示所有选项”的场景（如快捷选择） |
| 条件触发展开 | `// 输入框有内容时，自动展开ComboBox<br>private void txtInput_TextChanged(object sender, EventArgs e)<br>{<br>    if(!string.IsNullOrEmpty(txtInput.Text))<br>    {<br>        cmbDemo.DroppedDown = true;<br>    }<br>}` | 提升输入+选择的交互效率 |
| 强制收起避免误操作 | `// 选择选项后立即收起<br>private void cmbDemo_SelectedIndexChanged(object sender, EventArgs e)<br>{<br>    cmbDemo.DroppedDown = false;<br>    lblTip.Text = $"已选择：{cmbDemo.Text}";<br>}` | 选择完成后自动收起，优化界面整洁度 |

#### 四、核心总结
1. `DroppedDown`是布尔属性，核心用于**代码主动控制ComboBox下拉列表的展开/收起**；
2. 触发逻辑：`true`展开、`false`收起，与用户手动点击下拉箭头的效果一致；
3. 新手注意：仅当ComboBox有选项（`Items`不为空）时，设置`DroppedDown=true`才会显示下拉列表，空列表无视觉变化。

---

### 2.Items属性
#### 一、Items属性核心作用
ComboBox控件的`Items`属性是**存储下拉列表所有可选选项的集合**（类型为`ComboBox.ObjectCollection`），是ComboBox能显示下拉选项的核心基础：
- 支持**添加、删除、清空、遍历、查询**选项；
- 可在设计器中静态添加选项，也可在代码中动态维护（新手最常用）；
- 选项可以是字符串（最基础），也可存储简单对象（新手先掌握字符串场景）。

#### 二、基础用法（极简WinForms示例）
##### 步骤1：设计器准备控件（可视化操作）
1. 新建WinForms项目，拖入以下控件并设置属性：
   | 控件类型 | Name（关键） | Text属性 | 说明 |
   |----------|--------------|----------|------|
   | ComboBox | cmbItemsDemo | （清空） | 演示Items属性的核心控件 |
   | Button   | btnAdd       | 添加选项 | 点击添加单个选项 |
   | Button   | btnDelete    | 删除选中项 | 点击删除当前选中的选项 |
   | Button   | btnClear     | 清空所有选项 | 点击清空下拉列表 |
   | Label    | lblTip       | 提示：当前选项数=0 | 显示选项数量/操作结果 |

##### 步骤2：编写核心代码（注释全覆盖）
双击窗体空白处，粘贴以下代码（覆盖Items的核心操作：添加、删除、清空、遍历）：
```csharp
using System;
using System.Drawing;
using System.Windows.Forms;

namespace ComboBoxItemsDemo
{
    public partial class MainForm : Form
    {
        // 用于计数添加的选项（避免重复）
        private int _optionCount = 1;

        public MainForm()
        {
            InitializeComponent();

            // 1. 初始化：代码批量添加初始选项（新手常用）
            cmbItemsDemo.Items.AddRange(new string[] { "初始选项1", "初始选项2", "初始选项3" });
            
            // 2. 更新初始提示（获取Items.Count：选项总数）
            UpdateTip();

            // 3. 绑定按钮点击事件
            btnAdd.Click += BtnAdd_Click;
            btnDelete.Click += BtnDelete_Click;
            btnClear.Click += BtnClear_Click;
        }

        // 核心操作1：添加单个选项（Items.Add）
        private void BtnAdd_Click(object sender, EventArgs e)
        {
            string newOption = $"新增选项{_optionCount}";
            // 添加选项到Items集合末尾
            cmbItemsDemo.Items.Add(newOption);
            _optionCount++;
            
            // 提示添加成功
            lblTip.Text = $"提示：添加成功「{newOption}」，当前选项数={cmbItemsDemo.Items.Count}";
            lblTip.ForeColor = Color.Green;
        }

        // 核心操作2：删除选中项（Items.Remove/Items.RemoveAt）
        private void BtnDelete_Click(object sender, EventArgs e)
        {
            // 先判断是否有选中项
            if (cmbItemsDemo.SelectedIndex == -1)
            {
                lblTip.Text = "提示：请先选中要删除的选项！";
                lblTip.ForeColor = Color.Red;
                return;
            }

            // 方式1：按选中的文本删除（Items.Remove）
            string selectedText = cmbItemsDemo.SelectedItem.ToString();
            cmbItemsDemo.Items.Remove(selectedText);

            // 方式2（可选）：按索引删除（Items.RemoveAt）
            // cmbItemsDemo.Items.RemoveAt(cmbItemsDemo.SelectedIndex);

            // 更新提示
            lblTip.Text = $"提示：删除成功「{selectedText}」，当前选项数={cmbItemsDemo.Items.Count}";
            lblTip.ForeColor = Color.Orange;
        }

        // 核心操作3：清空所有选项（Items.Clear）
        private void BtnClear_Click(object sender, EventArgs e)
        {
            cmbItemsDemo.Items.Clear(); // 清空Items集合
            _optionCount = 1; // 重置计数
            UpdateTip();
            lblTip.ForeColor = Color.Black;
        }

        // 辅助方法：更新选项数量提示
        private void UpdateTip()
        {
            lblTip.Text = $"提示：当前选项数={cmbItemsDemo.Items.Count}";
        }
    }
}
```

##### 补充：设计器中添加Items（新手入门）
无需代码，直接在设计器操作：
1. 选中`cmbItemsDemo`→右侧属性面板找到`Items`属性→点击右侧“...”按钮；
2. 在弹出的“字符串集合编辑器”中，每行输入一个选项（如“设计器选项1”）；
3. 点击“确定”，运行程序后ComboBox会显示这些选项。

##### 运行效果（新手直观验证）
1. 程序启动后：`cmbItemsDemo`下拉列表显示“初始选项1/2/3”，`lblTip`显示“当前选项数=3”；
2. 点击`btnAdd`：下拉列表新增“新增选项1”，提示变为绿色“添加成功”，选项数+1；
3. 选中某个选项（如“初始选项2”），点击`btnDelete`：该选项被删除，提示变为橙色“删除成功”，选项数-1；
4. 点击`btnClear`：所有选项被清空，提示变回“当前选项数=0”。

#### 三、新手常见使用场景
| 场景类型 | 示例代码（核心逻辑） | 说明 |
|----------|----------------------|------|
| 批量添加选项 | `cmbCity.Items.AddRange(new string[] { "北京", "上海", "广州" });` | 初始化时一次性添加多个选项，效率更高 |
| 按索引获取选项 | `string firstOption = cmbItemsDemo.Items[0].ToString();` | 索引从0开始，获取指定位置的选项（需判断索引是否有效） |
| 检查选项是否存在 | `if(cmbItemsDemo.Items.Contains("新增选项1")) { MessageBox.Show("选项已存在！"); }` | 添加前校验，避免重复选项 |
| 遍历所有选项 | `foreach (var item in cmbItemsDemo.Items) { Console.WriteLine(item.ToString()); }` | 打印/处理所有选项（如导出、校验） |

#### 四、核心总结
1. `Items`是ComboBox的选项集合，所有下拉选项都存储在这个属性中；
2. 核心操作：`Add`（添加单个）、`AddRange`（批量添加）、`Remove`（按内容删除）、`RemoveAt`（按索引删除）、`Clear`（清空）；
3. 新手注意：操作`Items`后可通过`Items.Count`获取选项总数，删除/获取选项前需校验（如判断选中索引≠-1），避免报错。
---

### 3. SelectedIndex属性
#### 一、SelectedIndex属性核心作用
ComboBox控件的`SelectedIndex`属性是**表示当前选中项索引的整型属性**，是操作ComboBox选中状态的核心基础：
- 索引规则：下拉列表中第一个选项索引为`0`，第二个为`1`，依此类推；
- 未选中任何项时，`SelectedIndex = -1`（新手必记的判断条件）；
- 核心价值：可通过代码**获取当前选中项的位置**，或**强制设置选中某一项**（无需用户手动点击），是新手操作ComboBox选中状态的首选属性。

#### 二、基础用法（极简WinForms示例）
##### 步骤1：设计器准备控件（可视化操作）
1. 新建WinForms项目，拖入以下控件并设置属性：
   | 控件类型 | Name（关键） | Text属性 | 说明 |
   |----------|--------------|----------|------|
   | ComboBox | cmbIndexDemo | （清空） | 演示SelectedIndex的核心控件 |
   | Button   | btnGetIndex  | 获取选中索引 | 点击显示当前选中项的索引/文本 |
   | Button   | btnSetIndex  | 设置选中第2项 | 点击强制选中下拉列表第2项 |
   | Label    | lblTip       | 提示：未选中任何项 | 显示选中状态/操作结果 |

2. 给`cmbIndexDemo`添加测试选项：
   选中控件→右侧属性面板找到`Items`→点击“...”→输入“选项1”“选项2”“选项3”（每行一个）→确定。

##### 步骤2：编写核心代码（注释全覆盖）
双击窗体空白处，粘贴以下代码（覆盖“获取/设置”SelectedIndex的核心逻辑）：
```csharp
using System;
using System.Drawing;
using System.Windows.Forms;

namespace ComboBoxSelectedIndexDemo
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();

            // 绑定按钮点击事件
            btnGetIndex.Click += BtnGetIndex_Click;
            btnSetIndex.Click += BtnSetIndex_Click;

            // 补充：绑定选中项变化事件（实时反馈）
            cmbIndexDemo.SelectedIndexChanged += CmbIndexDemo_SelectedIndexChanged;
        }

        // 核心操作1：获取SelectedIndex（查看选中状态）
        private void BtnGetIndex_Click(object sender, EventArgs e)
        {
            // 获取当前选中项的索引
            int selectedIdx = cmbIndexDemo.SelectedIndex;

            if (selectedIdx == -1)
            {
                // 未选中时的提示
                lblTip.Text = "提示：未选中任何项（SelectedIndex = -1）";
                lblTip.ForeColor = Color.Black;
            }
            else
            {
                // 选中时：通过索引获取对应文本（Items[索引]）
                string selectedText = cmbIndexDemo.Items[selectedIdx].ToString();
                lblTip.Text = $"提示：选中第{selectedIdx + 1}项（索引={selectedIdx}），文本={selectedText}";
                lblTip.ForeColor = Color.Blue;
            }
        }

        // 核心操作2：设置SelectedIndex（强制选中某一项）
        private void BtnSetIndex_Click(object sender, EventArgs e)
        {
            // 要选中第2项 → 索引=1（新手注意：索引从0开始）
            int targetIndex = 1;

            // 校验索引是否有效（避免超出选项数量报错）
            if (targetIndex >= 0 && targetIndex < cmbIndexDemo.Items.Count)
            {
                // 强制设置选中项
                cmbIndexDemo.SelectedIndex = targetIndex;
                lblTip.Text = $"提示：已强制选中第{targetIndex + 1}项（索引={targetIndex}）";
                lblTip.ForeColor = Color.Green;
            }
            else
            {
                lblTip.Text = "提示：索引无效（超出选项数量）！";
                lblTip.ForeColor = Color.Red;
            }
        }

        // 补充：选中项变化时实时更新提示
        private void CmbIndexDemo_SelectedIndexChanged(object sender, EventArgs e)
        {
            // 复用“获取索引”的逻辑，实时反馈
            BtnGetIndex_Click(sender, e);
        }
    }
}
```

##### 运行效果（新手直观验证）
1. 程序启动后：`cmbIndexDemo`无选中项，`lblTip`显示“未选中任何项（SelectedIndex = -1）”；
2. 手动选中“选项3”，点击`btnGetIndex`：提示变为“选中第3项（索引=2），文本=选项3”；
3. 点击`btnSetIndex`：`cmbIndexDemo`自动选中“选项2”，提示变为绿色“已强制选中第2项（索引=1）”；
4. 若删除所有选项后点击`btnSetIndex`：提示红色“索引无效”（验证校验逻辑）。

#### 三、新手常见使用场景
| 场景类型 | 示例代码（核心逻辑） | 说明 |
|----------|----------------------|------|
| 初始化默认选中项 | `// 窗体加载时默认选中第一个选项<br>private void MainForm_Load(object sender, EventArgs e)<br>{<br>    if(cmbIndexDemo.Items.Count > 0)<br>    {<br>        cmbIndexDemo.SelectedIndex = 0;<br>    }<br>}` | 打开界面时自动选中常用选项，提升体验 |
| 判断是否选中项 | `if(cmbCity.SelectedIndex == -1)<br>{<br>    MessageBox.Show("请选择城市！");<br>    return;<br>}` | 提交数据前校验，避免未选择就操作 |
| 按索引切换选中项 | `// 点击按钮切换到下一项<br>private void btnNext_Click(object sender, EventArgs e)<br>{<br>    int nextIdx = cmbIndexDemo.SelectedIndex + 1;<br>    if(nextIdx >= cmbIndexDemo.Items.Count) nextIdx = 0;<br>    cmbIndexDemo.SelectedIndex = nextIdx;<br>}` | 实现“上一项/下一项”快捷切换 |
| 获取选中项文本 | `string text = cmbIndexDemo.Items[cmbIndexDemo.SelectedIndex].ToString();` | 通过索引精准获取选中项内容（比SelectedItem更直观） |

#### 四、核心总结
1. `SelectedIndex`是整型属性，索引从`0`开始，未选中时为`-1`（新手必记判断条件）；
2. 核心用法：`获取`（查看选中位置）、`设置`（强制选中某一项）；
3. 新手关键：操作前务必校验索引有效性（`索引 >= 0 且 索引 < Items.Count`），避免数组越界报错。

---

### 4.SelectedItem属性
#### 一、SelectedItem属性核心作用
ComboBox控件的`SelectedItem`属性是**表示当前选中项“实际内容”的对象属性**（类型为`object`），与`SelectedIndex`（选中项索引）是“内容”和“位置”的对应关系：
- 未选中任何项时，`SelectedItem = null`（新手必记的判断条件）；
- 选中项时，`SelectedItem`直接指向该选项的内容（如字符串“选项2”），无需通过索引（`Items[索引]`）间接获取；
- 核心价值：**直接获取/设置选中项的内容**，比`SelectedIndex`更直观（无需计算索引），是新手操作选中项“内容”的首选属性。

#### 二、基础用法（极简WinForms示例）
##### 步骤1：设计器准备控件（可视化操作）
1. 新建WinForms项目，拖入以下控件并设置属性：
   | 控件类型 | Name（关键） | Text属性 | 说明 |
   |----------|--------------|----------|------|
   | ComboBox | cmbItemDemo  | （清空） | 演示SelectedItem的核心控件 |
   | Button   | btnGetItem   | 获取选中项 | 点击显示当前选中项的内容 |
   | Button   | btnSetItem   | 设置选中“选项2” | 点击强制选中指定内容的选项 |
   | Label    | lblTip       | 提示：未选中任何项 | 显示选中状态/操作结果 |

2. 给`cmbItemDemo`添加测试选项：
   选中控件→右侧属性面板找到`Items`→点击“...”→输入“选项1”“选项2”“选项3”（每行一个）→确定。

##### 步骤2：编写核心代码（注释全覆盖）
双击窗体空白处，粘贴以下代码（覆盖“获取/设置”SelectedItem的核心逻辑）：
```csharp
using System;
using System.Drawing;
using System.Windows.Forms;

namespace ComboBoxSelectedItemDemo
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();

            // 绑定按钮点击事件
            btnGetItem.Click += BtnGetItem_Click;
            btnSetItem.Click += BtnSetItem_Click;

            // 补充：绑定选中项变化事件（实时反馈）
            cmbItemDemo.SelectedIndexChanged += CmbItemDemo_SelectedIndexChanged;
        }

        // 核心操作1：获取SelectedItem（查看选中内容）
        private void BtnGetItem_Click(object sender, EventArgs e)
        {
            // 获取当前选中项的内容（类型为object，需转字符串）
            object selectedObj = cmbItemDemo.SelectedItem;

            if (selectedObj == null)
            {
                // 未选中时的提示
                lblTip.Text = "提示：未选中任何项（SelectedItem = null）";
                lblTip.ForeColor = Color.Black;
            }
            else
            {
                // 转换为字符串（新手必做：避免类型报错）
                string selectedText = selectedObj.ToString();
                lblTip.Text = $"提示：选中项内容 = {selectedText}";
                lblTip.ForeColor = Color.Blue;
            }
        }

        // 核心操作2：设置SelectedItem（强制选中指定内容的选项）
        private void BtnSetItem_Click(object sender, EventArgs e)
        {
            // 要选中的目标内容
            string targetItem = "选项2";

            // 先校验内容是否存在于Items中（避免设置无效内容）
            if (cmbItemDemo.Items.Contains(targetItem))
            {
                // 强制设置选中项（直接赋值内容）
                cmbItemDemo.SelectedItem = targetItem;
                lblTip.Text = $"提示：已强制选中「{targetItem}」";
                lblTip.ForeColor = Color.Green;
            }
            else
            {
                lblTip.Text = $"提示：「{targetItem}」不存在于下拉列表中！";
                lblTip.ForeColor = Color.Red;
            }
        }

        // 补充：选中项变化时实时更新提示
        private void CmbItemDemo_SelectedIndexChanged(object sender, EventArgs e)
        {
            // 复用“获取选中项”的逻辑，实时反馈
            BtnGetItem_Click(sender, e);
        }
    }
}
```

##### 运行效果（新手直观验证）
1. 程序启动后：`cmbItemDemo`无选中项，`lblTip`显示“未选中任何项（SelectedItem = null）”；
2. 手动选中“选项3”，点击`btnGetItem`：提示变为“选中项内容 = 选项3”；
3. 点击`btnSetItem`：`cmbItemDemo`自动选中“选项2”，提示变为绿色“已强制选中「选项2」”；
4. 若修改代码中`targetItem`为“选项4”（不存在的内容），点击`btnSetItem`：提示红色“「选项4」不存在于下拉列表中”（验证校验逻辑）。

#### 三、新手常见使用场景
| 场景类型 | 示例代码（核心逻辑） | 说明 |
|----------|----------------------|------|
| 直接获取选中内容 | `string city = cmbCity.SelectedItem?.ToString();` | 加`?.`避免null报错，直接获取选中的城市/选项内容 |
| 初始化默认选中项 | `// 窗体加载时默认选中“选项1”<br>private void MainForm_Load(object sender, EventArgs e)<br>{<br>    cmbItemDemo.SelectedItem = "选项1";<br>}` | 无需记索引，直接按内容设置，更直观 |
| 判断是否选中项 | `if(cmbItemDemo.SelectedItem == null)<br>{<br>    MessageBox.Show("请选择一个选项！");<br>    return;<br>}` | 比判断`SelectedIndex == -1`更贴合“内容”逻辑 |
| 按内容切换选中项 | `// 点击按钮选中“选项3”<br>private void btnSelect3_Click(object sender, EventArgs e)<br>{<br>    cmbItemDemo.SelectedItem = "选项3";<br>}` | 无需计算索引，直接按业务内容设置 |

#### 四、核心总结
1. `SelectedItem`是选中项的“内容对象”，未选中时为`null`，选中时需转`string`使用；
2. 核心用法：`获取`（直接拿选中内容）、`设置`（直接赋值要选中的内容，需确保内容在Items中）；
3. 新手对比：`SelectedIndex`管“位置”，`SelectedItem`管“内容”，优先用`SelectedItem`（更直观），需控制位置时用`SelectedIndex`。

---

### 5.SelectedText属性
#### 1. SelectedText 属性核心概念
`SelectedText` 是 ComboBox（下拉组合框）控件的基础属性，作用是**获取或设置 ComboBox 编辑区域中用户手动选中的文本片段**。需重点注意：
- 仅当 ComboBox 的 `DropDownStyle` 属性设为 `DropDown`（可编辑，默认值）时，`SelectedText` 才有效；若设为 `DropDownList`（仅下拉选择，不可编辑），`SelectedText` 始终为空字符串。
- 它与 `Text`/`SelectedItem` 不同：`Text` 是 ComboBox 编辑区域的完整文本，`SelectedItem` 是下拉列表中选中项的完整对象/文本，而 `SelectedText` 只是其中被鼠标/键盘选中的部分。

#### 2. 基础示例（C# WinForms）
以下是最简可运行示例，演示 `SelectedText` 的读取和设置：

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 ComboBox 控件（命名：comboBox1）
- 2个 Button 控件（命名：btnGetSelectedText、btnSetSelectedText）
- 1个 Label 控件（命名：label1，用于显示结果）

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace ComboBoxSelectedTextDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化ComboBox：设置可编辑样式 + 添加测试项
            comboBox1.DropDownStyle = ComboBoxStyle.DropDown; // 关键：必须设为DropDown
            comboBox1.Items.AddRange(new string[] { "Python基础", "C#进阶", "Java实战" });
            // 绑定按钮点击事件
            btnGetSelectedText.Text = "获取选中的文本";
            btnGetSelectedText.Click += BtnGetSelectedText_Click;
            btnSetSelectedText.Text = "设置选中的文本";
            btnSetSelectedText.Click += BtnSetSelectedText_Click;
        }

        // 点击按钮：读取SelectedText并显示
        private void BtnGetSelectedText_Click(object sender, EventArgs e)
        {
            string selectedText = comboBox1.SelectedText;
            if (string.IsNullOrEmpty(selectedText))
            {
                label1.Text = "未选中任何文本";
            }
            else
            {
                label1.Text = $"选中的文本：{selectedText}";
            }
        }

        // 点击按钮：设置SelectedText（替换当前选中的文本）
        private void BtnSetSelectedText_Click(object sender, EventArgs e)
        {
            // 先让ComboBox编辑区域有文本，再选中部分文本并替换
            if (string.IsNullOrEmpty(comboBox1.Text))
            {
                comboBox1.Text = "C#基础"; // 先填充基础文本
            }
            // 手动选中前2个字符，再替换为"Java"
            comboBox1.SelectionStart = 0; // 选中起始位置
            comboBox1.SelectionLength = 2; // 选中长度
            comboBox1.SelectedText = "Java"; // 替换选中的文本
            label1.Text = "已将选中的文本替换为：Java";
        }
    }
}
```

##### 步骤3：运行效果
1. 启动程序后，在 ComboBox 编辑区域手动选中部分文本（比如选中“Python基础”中的“Python”），点击“获取选中的文本”，Label 会显示“选中的文本：Python”；
2. 点击“设置选中的文本”，程序会先填充“C#基础”，选中前2个字符“C#”并替换为“Java”，最终 ComboBox 显示“Java基础”，Label 提示替换成功；
3. 若将 `DropDownStyle` 改为 `DropDownList`，无论是否选中项，`SelectedText` 始终为空。

#### 3. 核心使用注意事项
1. `SelectedText` 是**瞬时属性**：仅当 ComboBox 处于激活（焦点）状态且有文本被选中时，才能读取到有效值；失去焦点后，`SelectedText` 会清空。
2. 设置 `SelectedText` 时，需先通过 `SelectionStart`（选中起始索引）和 `SelectionLength`（选中长度）指定选中范围，否则设置无效。
3. 只读样式（`DropDownList`）下，`SelectedText` 无任何作用，需改用 `SelectedItem` 或 `Text` 获取完整选中项。

#### 总结
1. `SelectedText` 仅作用于 ComboBox 可编辑区域（`DropDown` 样式），表示**手动选中的文本片段**，而非完整选中项；
2. 读取 `SelectedText` 需保证控件有焦点且文本被选中，设置时需先指定 `SelectionStart` 和 `SelectionLength`；
3. 区分核心属性：`SelectedText`（选中片段）≠ `Text`（完整文本）≠ `SelectedItem`（下拉选中项）。

---

### 6.Sorted属性
#### 1. Sorted 属性核心概念
`Sorted` 是 ComboBox（下拉组合框）控件的基础布尔型属性，核心作用是**控制下拉列表中的选项是否自动按字母顺序排序**：
- 默认值为 `false`，此时下拉列表中的项会按照「添加顺序」显示；
- 设为 `true` 时，下拉列表中的项会自动按**系统默认的字母顺序（不区分大小写）** 重新排列，且后续新增的项也会自动插入到排序后的对应位置。
- 注意：该属性仅对直接通过 `Items.Add()`/`Items.AddRange()` 添加的项生效，若 ComboBox 绑定了数据源（`DataSource`），`Sorted` 属性会失效。

#### 2. 基础示例（C# WinForms）
以下示例通过对比「排序」和「不排序」两种状态，直观展示 `Sorted` 属性的用法，代码极简且可直接运行。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 ComboBox 控件（命名：comboBox1）
- 2个 Button 控件（命名：btnNoSort、btnUseSort）
- 1个 Label 控件（命名：label1，用于提示当前状态）

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace ComboBoxSortedDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化按钮文本和点击事件
            btnNoSort.Text = "不排序（默认）";
            btnNoSort.Click += BtnNoSort_Click;
            btnUseSort.Text = "启用排序";
            btnUseSort.Click += BtnUseSort_Click;
            label1.Text = "点击按钮查看排序效果";
        }

        // 按钮1：不启用排序（默认状态），按添加顺序显示项
        private void BtnNoSort_Click(object sender, EventArgs e)
        {
            // 先清空原有项，避免干扰
            comboBox1.Items.Clear();
            // 设置Sorted为false（默认值，可省略，此处显式写清便于理解）
            comboBox1.Sorted = false;
            // 添加无序的测试项
            comboBox1.Items.AddRange(new string[] { "香蕉", "苹果", "橙子", "葡萄", "草莓" });
            label1.Text = "当前状态：Sorted = false，按添加顺序显示";
        }

        // 按钮2：启用排序，自动按字母顺序显示项
        private void BtnUseSort_Click(object sender, EventArgs e)
        {
            comboBox1.Items.Clear();
            // 核心：设置Sorted为true，开启自动排序
            comboBox1.Sorted = true;
            // 添加和上面完全相同的无序测试项
            comboBox1.Items.AddRange(new string[] { "香蕉", "苹果", "橙子", "葡萄", "草莓" });
            label1.Text = "当前状态：Sorted = true，按字母顺序显示";
        }
    }
}
```

##### 步骤3：运行效果
1. 点击「不排序（默认）」按钮：ComboBox 下拉列表显示顺序为「香蕉 → 苹果 → 橙子 → 葡萄 → 草莓」（和添加顺序一致）；
2. 点击「启用排序」按钮：ComboBox 下拉列表会自动按中文拼音字母顺序重新排列，显示为「苹果 → 橙子 → 葡萄 → 草莓 → 香蕉」；
3. 若新增项（比如再执行 `comboBox1.Items.Add("芒果")`），启用排序后「芒果」会自动插入到「葡萄」和「草莓」之间，无需手动调整顺序。

#### 3. 核心使用注意事项
1. **设置时机**：建议在「添加项之前」设置 `Sorted` 属性，若先添加项再改 `Sorted`，控件会立即对已有项重新排序，虽不影响功能，但略耗性能（少量项可忽略）；
2. **数据源冲突**：若通过 `comboBox1.DataSource = 数据源` 绑定数据（如List、DataTable），`Sorted` 属性会完全失效，需在数据源层面（如List.Sort()）实现排序；
3. **排序规则**：对字符串项按「系统区域的字母/拼音顺序」排序（中文按拼音，英文不区分大小写）；对非字符串项（如数字），会按其 `ToString()` 结果排序。

#### 总结
1. `Sorted` 是布尔属性，`true` 时ComboBox下拉项自动排序，`false` 时按添加顺序显示（默认）；
2. 该属性仅对直接添加的项生效，绑定 `DataSource` 时失效；
3. 建议在添加项前设置 `Sorted`，能避免不必要的重复排序操作。
---

### 7.Text属性
#### 1. Text 属性核心概念
`Text` 是 ComboBox（下拉组合框）控件最基础、最常用的核心属性，作用是**获取或设置 ComboBox 显示/编辑区域的完整文本内容**，其表现随 `DropDownStyle`（下拉样式）不同而略有差异：
- 当 `DropDownStyle = DropDown`（可编辑，默认）：`Text` 对应编辑框内的全部文本，可手动输入任意内容，也可选择下拉项后自动填充为选中项的文本；
- 当 `DropDownStyle = DropDownList`（仅选择，不可编辑）：`Text` 等同于选中项的文本，无法手动输入修改，只能通过选择下拉项改变；
- 无选中项且无手动输入时，`Text` 为空字符串。
需重点区分：`Text` 是「完整文本」，而 `SelectedText` 是「编辑框中选中的文本片段」，`SelectedItem` 是「下拉列表中选中的完整项对象」。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `Text` 属性的「读取」「设置」，以及不同样式下的表现，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 ComboBox 控件（命名：comboBox1）
- 2个 Button 控件（命名：btnGetText、btnSetText）
- 1个 Label 控件（命名：label1，用于显示结果）

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace ComboBoxTextDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化ComboBox：添加测试项，默认设为可编辑样式
            comboBox1.DropDownStyle = ComboBoxStyle.DropDown;
            comboBox1.Items.AddRange(new string[] { "北京", "上海", "广州", "深圳" });
            
            // 初始化按钮文本和点击事件
            btnGetText.Text = "获取Text内容";
            btnGetText.Click += BtnGetText_Click;
            btnSetText.Text = "设置Text内容";
            btnSetText.Click += BtnSetText_Click;
            
            label1.Text = "点击按钮测试Text属性";
        }

        // 按钮1：读取Text属性并显示
        private void BtnGetText_Click(object sender, EventArgs e)
        {
            string currentText = comboBox1.Text;
            if (string.IsNullOrEmpty(currentText))
            {
                label1.Text = "当前Text为空";
            }
            else
            {
                label1.Text = $"当前Text内容：{currentText}";
            }
        }

        // 按钮2：手动设置Text属性
        private void BtnSetText_Click(object sender, EventArgs e)
        {
            // 场景1：可编辑样式下，直接设置Text为任意内容（无需在下拉项中存在）
            comboBox1.Text = "杭州"; 
            label1.Text = $"已手动设置Text为：{comboBox1.Text}\n（注：杭州不在下拉项中，可编辑样式下仍生效）";

            // 可选测试：切换为仅选择样式，再尝试设置Text
            // comboBox1.DropDownStyle = ComboBoxStyle.DropDownList;
            // comboBox1.Text = "杭州"; // 无效，Text仍为空（因杭州不在下拉项中）
            // comboBox1.Text = "上海"; // 有效，Text会显示上海（因上海在下拉项中）
        }
    }
}
```

##### 步骤3：运行效果
1. 初始状态：点击下拉列表选择「广州」，再点击「获取Text内容」，Label 显示「当前Text内容：广州」；
2. 手动输入：在 ComboBox 编辑框中输入「成都」（不在下拉项中），点击「获取Text内容」，Label 显示「当前Text内容：成都」（可编辑样式支持自定义输入）；
3. 设置Text：点击「设置Text内容」，ComboBox 编辑框立即显示「杭州」，Label 提示设置成功；
4. 切换样式：若取消代码中「可选测试」的注释，将样式改为 `DropDownList`：
   - 尝试设置 `Text = "杭州"`（不在下拉项）：Text 仍为空，设置无效；
   - 尝试设置 `Text = "上海"`（在下拉项）：Text 显示「上海」，设置有效。

#### 3. 核心使用注意事项
1. **可编辑样式（DropDown）**：`Text` 可自由读写，即使设置的内容不在下拉项中也生效；
2. **仅选择样式（DropDownList）**：`Text` 只读（手动设置非下拉项内容时无效），仅能通过选择下拉项改变，且始终等于 `SelectedItem.ToString()`；
3. **联动关系**：选择下拉项时，`Text` 会自动同步为选中项的文本；修改 `Text`（可编辑样式）不会自动选中下拉项（需手动匹配）。

#### 总结
1. `Text` 属性代表 ComboBox 显示/编辑区域的**完整文本**，是最常用的基础属性；
2. 可编辑样式下 `Text` 可自由读写（支持自定义内容），仅选择样式下仅能读取/设置下拉项中存在的文本；
3. 区分核心属性：`Text`（完整文本）≠ `SelectedText`（选中片段）≠ `SelectedItem`（选中项对象）。

