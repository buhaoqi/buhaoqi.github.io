---
# 这部分是关键！侧边栏显示名由这里决定
title: ListBox 控件  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: ListBox 控件  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 5  # 侧边栏中排在第1位
---

## 本节高考考点
### ListBox控件属性
| 属性 | 属性值 | 属性说明 | 注意 |
| :--- | :--- | :--- | :--- |
| Items | 对象集合 | 列表中的项目集合 | 使用 `Items.Add()` 添加项目 |
| MultiColumn | `true` 或 `false` | 是否以多列形式显示 | 适合项目较多的情况 |
| SelectedItems | 集合 | 当前选中的项目集合（多选模式） | 类型为 `SelectedObjectCollection` |
| Sorted | `true` 或 `false` | 是否对项目自动排序 | 为 `true` 时按字母顺序排序 |
| Text | 字符串 | 当前选中项的文本（单选模式） | 未选中时为空字符串 |


## 一、用途


## 二、特点


## 三、属性

### 1.Items属性

#### 1. Items 属性核心概念
`Items` 是 ListBox（列表框）控件最核心的基础属性，本质是 `ListBox.ObjectCollection` 类型的集合，核心作用是**管理 ListBox 中显示的所有列表项**。它是 ListBox 显示内容的直接载体（非数据源绑定场景下），支持对列表项进行「添加、删除、清空、遍历、查询」等全量操作，核心特点：
- 可添加任意类型的对象（字符串、数字、自定义对象等），显示时默认调用对象的 `ToString()` 方法；
- 是有序集合，项的索引从 `0` 开始，可通过索引直接访问指定项；
- 若 ListBox 绑定了 `DataSource`（数据源），`Items` 集合会变为只读状态，无法直接修改。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `Items` 属性最常用的「添加、删除、清空、遍历」操作，适合新手快速掌握核心用法。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 ListBox 控件（命名：listBox1）
- 4个 Button 控件（命名：btnAdd、btnDelete、btnClear、btnTraverse）
- 1个 Label 控件（命名：label1，用于显示操作结果）

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace ListBoxItemsDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化按钮文本和点击事件
            btnAdd.Text = "添加项";
            btnAdd.Click += BtnAdd_Click;

            btnDelete.Text = "删除选中项";
            btnDelete.Click += BtnDelete_Click;

            btnClear.Text = "清空所有项";
            btnClear.Click += BtnClear_Click;

            btnTraverse.Text = "遍历所有项";
            btnTraverse.Click += BtnTraverse_Click;

            label1.Text = "点击按钮操作ListBox的Items集合";
        }

        // 操作1：添加项（单个添加/批量添加）
        private void BtnAdd_Click(object sender, EventArgs e)
        {
            // 方式1：单个添加字符串项
            listBox1.Items.Add("苹果");
            // 方式2：批量添加多个项（数组/List均可）
            listBox1.Items.AddRange(new string[] { "香蕉", "橙子", "葡萄" });
            // 拓展：添加非字符串项（如数字），显示时调用ToString()
            listBox1.Items.Add(100);

            label1.Text = $"添加成功！当前Items总数：{listBox1.Items.Count}";
        }

        // 操作2：删除选中项（按项删除/按索引删除）
        private void BtnDelete_Click(object sender, EventArgs e)
        {
            if (listBox1.SelectedItem == null)
            {
                label1.Text = "请先选中要删除的项！";
                return;
            }

            // 方式1：按选中的项删除（推荐，直观）
            listBox1.Items.Remove(listBox1.SelectedItem);
            // 方式2：按索引删除（listBox1.SelectedIndex为选中项的索引）
            // listBox1.Items.RemoveAt(listBox1.SelectedIndex);

            label1.Text = $"删除成功！当前Items总数：{listBox1.Items.Count}";
        }

        // 操作3：清空所有项
        private void BtnClear_Click(object sender, EventArgs e)
        {
            listBox1.Items.Clear(); // 一键清空所有项
            label1.Text = $"已清空所有项！当前Items总数：{listBox1.Items.Count}";
        }

        // 操作4：遍历所有项（读取每一个项的内容）
        private void BtnTraverse_Click(object sender, EventArgs e)
        {
            if (listBox1.Items.Count == 0)
            {
                label1.Text = "Items集合为空，无项可遍历！";
                return;
            }

            // 遍历Items集合，拼接所有项的内容
            string allItems = "ListBox所有项：\n";
            for (int i = 0; i < listBox1.Items.Count; i++)
            {
                // 通过索引访问指定项：Items[i]
                allItems += $"索引{i}：{listBox1.Items[i]}\n";
            }

            label1.Text = allItems;
        }
    }
}
```

##### 步骤3：运行效果
1. 点击「添加项」：ListBox 会依次显示「苹果、香蕉、橙子、葡萄、100」，Label 显示总数为 5；
2. 选中某一项（如「香蕉」），点击「删除选中项」：该项被移除，总数减少为 4；
3. 点击「清空所有项」：ListBox 变为空白，总数为 0；
4. 重新添加项后点击「遍历所有项」：Label 会按索引列出所有项的内容，比如「索引0：苹果、索引1：香蕉...」。

#### 3. 核心使用注意事项
1. **索引规则**：`Items` 是有序集合，索引从 `0` 开始，`Items.Count` 表示集合中项的总数，可通过 `Items[index]` 直接访问指定位置的项；
2. **非字符串项**：添加数字、自定义对象等非字符串项时，ListBox 会调用对象的 `ToString()` 方法显示文本，若需自定义显示内容，需重写对象的 `ToString()` 方法；
3. **数据源冲突**：若通过 `listBox1.DataSource = 数据源` 绑定数据（如 `List<string>`），`Items` 集合会只读，此时增删项需修改绑定的数据源，而非直接操作 `Items`；
4. **空值判断**：操作 `Items` 前建议先判断 `Items.Count > 0`（是否有项）、`SelectedItem != null`（是否选中项），避免空引用异常。

#### 总结
1. `Items` 是 ListBox 的核心集合属性，用于**管理所有列表项**，支持添加、删除、清空、遍历等基础操作；
2. 常用方法：`Add()`（单条添加）、`AddRange()`（批量添加）、`Remove()`/`RemoveAt()`（删除）、`Clear()`（清空）、`Count`（获取总数）；
3. 绑定 `DataSource` 后 `Items` 只读，需操作数据源而非直接修改 `Items`，且非字符串项显示依赖 `ToString()` 方法。

--- 

### 2. MultiColumn属性
#### 1. MultiColumn 属性核心概念
`MultiColumn` 是 ListBox（列表框）控件的基础布尔型属性，核心作用是**控制 ListBox 中的列表项是否以「多列」形式显示**，而非默认的单列垂直排列：
- 默认值为 `false`：ListBox 以单列显示所有项，项超出可视区域时显示**垂直滚动条**，需上下滚动查看；
- 设为 `true`：ListBox 自动将项拆分为多列显示，先填满第一列，再填充第二列、第三列……项超出可视区域时显示**水平滚动条**，需左右滚动查看；
- 配合 `ColumnWidth` 属性（默认 0，自动适配）使用：可手动设置每一列的宽度（单位：像素），精准控制多列显示效果。

#### 2. 基础示例（C# WinForms）
以下示例通过切换「单列/多列」模式，直观展示 `MultiColumn` 的核心用法，代码极简且可直接运行，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 ListBox 控件（命名：listBox1，建议适当拉大宽度/高度，方便查看多列效果）；
- 2个 Button 控件（命名：btnSingleColumn、btnMultiColumn）；
- 1个 Label 控件（命名：label1，用于提示当前状态）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace ListBoxMultiColumnDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化：添加足够多的测试项（便于体现多列效果）
            string[] fruits = { "苹果", "香蕉", "橙子", "葡萄", "草莓", "芒果", "荔枝", "西瓜", "菠萝", "樱桃", "猕猴桃", "蓝莓" };
            listBox1.Items.AddRange(fruits);

            // 初始化按钮文本和点击事件
            btnSingleColumn.Text = "单列显示（默认）";
            btnSingleColumn.Click += BtnSingleColumn_Click;

            btnMultiColumn.Text = "多列显示";
            btnMultiColumn.Click += BtnMultiColumn_Click;

            label1.Text = "当前模式：单列（MultiColumn = false）";
        }

        // 按钮1：切换为单列模式（默认）
        private void BtnSingleColumn_Click(object sender, EventArgs e)
        {
            listBox1.MultiColumn = false; // 核心：关闭多列
            // 重置列宽（恢复默认）
            listBox1.ColumnWidth = 0;
            label1.Text = "当前模式：单列（MultiColumn = false）\n项超出时显示垂直滚动条";
        }

        // 按钮2：切换为多列模式，并设置列宽
        private void BtnMultiColumn_Click(object sender, EventArgs e)
        {
            listBox1.MultiColumn = true; // 核心：开启多列
            listBox1.ColumnWidth = 80; // 设置每列宽度为80像素（按需调整）
            label1.Text = "当前模式：多列（MultiColumn = true）\n列宽80像素，项超出时显示水平滚动条";
        }
    }
}
```

##### 步骤3：运行效果
1. 初始/点击「单列显示」：ListBox 中 12 个水果项垂直排列成一列，超出窗体高度的部分需拖动**垂直滚动条**查看；
2. 点击「多列显示」：ListBox 自动将项拆分为多列（比如第一列显示「苹果、香蕉、橙子、葡萄」，第二列显示「草莓、芒果、荔枝、西瓜」……），超出窗体宽度的部分需拖动**水平滚动条**查看；
3. 调整 `ColumnWidth` 的值（如改为 100）：每列的宽度会变大，列数会相应减少（比如从 3 列变为 2 列）。

#### 3. 核心使用注意事项
1. **排列规则**：多列模式下，ListBox 遵循「先列后行」的填充规则——先填满第一列的所有行，再从第二列第一行开始填充，而非「先行后列」；
2. **ColumnWidth 配合**：`MultiColumn = true` 时，`ColumnWidth` 控制每列的宽度（默认 0，自动适配控件宽度均分），建议根据项的文本长度设置合适值，避免文本被截断；
3. **滚动条变化**：单列模式显示垂直滚动条，多列模式显示水平滚动条（若项总数超出多列可视区域）；
4. **无自定义列数**：`MultiColumn` 仅控制「是否多列」，无法手动指定列数（列数由控件宽度、`ColumnWidth`、项总数自动计算）；
5. **兼容性**：该属性对「直接添加项」和「绑定数据源（DataSource）」的 ListBox 均生效，不影响项的增删操作。

#### 总结
1. `MultiColumn` 是布尔属性，`true` 时 ListBox 以**多列**显示项（先列后行填充），`false` 时以单列显示（默认）；
2. 多列模式下需配合 `ColumnWidth` 设置列宽，滚动条从「垂直」变为「水平」；
3. 核心特点：无法手动指定列数，列数由控件宽度、列宽、项总数自动决定。

--- 

### 3. SelectedItems属性

#### 1. SelectedItems 属性核心概念
`SelectedItems` 是 ListBox（列表框）控件的基础集合属性，核心作用是**获取 ListBox 中所有被选中的项**（支持多选场景），核心特点：
- 类型为 `ListBox.SelectedObjectCollection`，是**只读集合**（仅能读取，无法直接添加/删除选中项）；
- 多选前提：需先将 ListBox 的 `SelectionMode` 属性设为 `MultiSimple`（单击直接多选）或 `MultiExtended`（按住 Ctrl/Shift 多选），默认 `SelectionMode = Single`（仅能选一个项），此时 `SelectedItems` 最多包含 1 个项；
- 与 `SelectedItem` 区别：`SelectedItem` 仅返回**第一个**选中项（单个值），`SelectedItems` 返回**所有**选中项（集合）；
- 常用操作：通过 `Count` 获取选中项数量、遍历集合读取所有选中项、判断是否包含指定项。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `SelectedItems` 的核心用法（多选设置、读取、遍历），适合新手快速理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 ListBox 控件（命名：listBox1，建议适当拉大尺寸，方便多选操作）；
- 1个 Button 控件（命名：btnGetSelectedItems，文本：“获取所有选中项”）；
- 1个 Label 控件（命名：label1，用于显示选中项结果）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace ListBoxSelectedItemsDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 1. 初始化ListBox：添加测试项
            listBox1.Items.AddRange(new string[] { 
                "Python", "C#", "Java", "JavaScript", "Go", "PHP" 
            });

            // 2. 关键：设置允许多选（必选，否则SelectedItems仅能选1个）
            // MultiSimple：单击项直接选中/取消选中；MultiExtended：按住Ctrl/Shift多选
            listBox1.SelectionMode = SelectionMode.MultiSimple;

            // 3. 绑定按钮点击事件
            btnGetSelectedItems.Click += BtnGetSelectedItems_Click;
            label1.Text = "请选中多个项后点击按钮";
        }

        // 按钮点击：读取并显示所有选中项
        private void BtnGetSelectedItems_Click(object sender, EventArgs e)
        {
            // 先判断是否有选中项（避免遍历空集合）
            if (listBox1.SelectedItems.Count == 0)
            {
                label1.Text = "未选中任何项！";
                return;
            }

            // 遍历SelectedItems集合，拼接所有选中项
            string result = $"选中项数量：{listBox1.SelectedItems.Count}\n选中项列表：\n";
            foreach (var item in listBox1.SelectedItems)
            {
                // item 为选中项的原始对象（此处是字符串）
                result += $"- {item}\n";
            }

            // 显示结果
            label1.Text = result;
        }
    }
}
```

##### 步骤3：运行效果
1. 启动程序后，ListBox 显示 6 个编程语言项，因 `SelectionMode = MultiSimple`，可单击多个项（如 Python、Java、Go），选中的项会高亮显示；
2. 点击「获取所有选中项」按钮：Label 会显示选中项数量（如 3），并列出所有选中项（“- Python\n- Java\n- Go”）；
3. 若未设置 `SelectionMode`（默认 Single），仅能选中 1 个项，`SelectedItems.Count` 最多为 1；
4. 若切换 `SelectionMode = MultiExtended`，需按住 Ctrl 键单击多选（取消选中也需 Ctrl），按住 Shift 键可选中连续项。

#### 3. 核心使用注意事项
1. **多选前提**：必须设置 `SelectionMode` 为 `MultiSimple`/`MultiExtended`，否则 `SelectedItems` 无“多选”意义；
2. **只读特性**：`SelectedItems` 仅能读取选中项，无法直接通过 `SelectedItems.Add()`/`Remove()` 修改选中状态，需用 `listBox1.SetSelected(索引, true/false)` 手动设置项的选中状态；
3. **空值判断**：读取 `SelectedItems` 前建议先判断 `SelectedItems.Count > 0`，避免遍历空集合导致无意义输出；
4. **索引关联**：`SelectedIndices` 属性（选中项的索引集合）与 `SelectedItems` 一一对应，`SelectedIndices[0]` 对应 `SelectedItems[0]` 的索引；
5. **数据类型**：`SelectedItems` 中的每一项类型与添加到 `Items` 中的项类型一致（如添加字符串则为 string，添加自定义对象则为对应类型）。

#### 总结
1. `SelectedItems` 是 ListBox 的多选核心属性，用于**获取所有被选中的项**（只读集合）；
2. 使用前提：需将 `SelectionMode` 设为 `MultiSimple`/`MultiExtended` 开启多选，默认 Single 仅支持单选；
3. 核心操作：通过 `Count` 获取选中项数量，通过遍历读取所有选中项，无法直接修改集合，需用 `SetSelected` 调整选中状态。

--- 

### 4. Sorted属性
#### 1. Sorted 属性核心概念
`Sorted` 是 ListBox（列表框）控件的基础布尔型属性，核心作用是**控制 ListBox 中的列表项是否自动按字母/拼音顺序排序**，核心特点：
- 默认值为 `false`：ListBox 中的项严格按照「添加顺序」显示，不会自动调整位置；
- 设为 `true`：ListBox 会自动将所有项按**系统默认的字母顺序（英文不区分大小写、中文按拼音）** 重新排列，后续新增的项也会自动插入到排序后的对应位置；
- 关键限制：若 ListBox 通过 `DataSource` 绑定数据源（如 `List<string>`），`Sorted` 属性会完全失效，需在数据源层面（如 `List.Sort()`）实现排序。

#### 2. 基础示例（C# WinForms）
以下示例通过切换「排序/不排序」模式，直观展示 `Sorted` 属性的核心用法，代码极简、可直接运行，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 ListBox 控件（命名：listBox1，适当拉大尺寸方便查看）；
- 2个 Button 控件（命名：btnNoSort、btnUseSort，文本分别为「不排序（默认）」「启用排序」）；
- 1个 Label 控件（命名：label1，用于提示当前状态）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace ListBoxSortedDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 绑定按钮点击事件
            btnNoSort.Click += BtnNoSort_Click;
            btnUseSort.Click += BtnUseSort_Click;
            label1.Text = "点击按钮查看Sorted属性效果";
        }

        // 按钮1：不启用排序（默认状态），按添加顺序显示项
        private void BtnNoSort_Click(object sender, EventArgs e)
        {
            // 清空原有项，避免干扰
            listBox1.Items.Clear();
            // 核心：设置Sorted为false（默认值，显式写清便于理解）
            listBox1.Sorted = false;
            // 添加无序的测试项（中文+英文混合）
            listBox1.Items.AddRange(new string[] { 
                "香蕉", "Apple", "橙子", "Banana", "葡萄", "Cherry" 
            });
            label1.Text = "当前状态：Sorted = false，按添加顺序显示";
        }

        // 按钮2：启用排序，自动按字母/拼音顺序显示项
        private void BtnUseSort_Click(object sender, EventArgs e)
        {
            listBox1.Items.Clear();
            // 核心：设置Sorted为true，开启自动排序
            listBox1.Sorted = true;
            // 添加和上面完全相同的无序测试项
            listBox1.Items.AddRange(new string[] { 
                "香蕉", "Apple", "橙子", "Banana", "葡萄", "Cherry" 
            });
            label1.Text = "当前状态：Sorted = true，按字母/拼音顺序显示";
        }
    }
}
```

##### 步骤3：运行效果
1. 点击「不排序（默认）」：ListBox 显示顺序为「香蕉 → Apple → 橙子 → Banana → 葡萄 → Cherry」（和添加顺序完全一致）；
2. 点击「启用排序」：ListBox 自动排序，显示顺序为「Apple → Banana → Cherry → 橙子 → 葡萄 → 香蕉」（英文按字母、中文按拼音排序）；
3. 若新增项（如执行 `listBox1.Items.Add("芒果")`），启用排序后「芒果」会自动插入到「葡萄」和「香蕉」之间，无需手动调整位置。

#### 3. 核心使用注意事项
1. **设置时机**：建议在「添加项之前」设置 `Sorted` 属性，若先添加项再修改 `Sorted`，ListBox 会立即对已有项重新排序（少量项无性能影响，大量项建议提前设置）；
2. **排序规则**：
   - 字符串项：英文按字母顺序（不区分大小写，如 Apple 和 apple 视为同一顺序），中文按系统默认拼音顺序；
   - 非字符串项（如数字、自定义对象）：按项的 `ToString()` 结果排序，若需自定义排序，需重写 `ToString()` 或改用数据源排序；
3. **数据源冲突**：绑定 `DataSource` 时 `Sorted` 失效，例如：
   ```csharp
   // 绑定数据源后，Sorted=true 也不会生效
   List<string> fruits = new List<string> { "香蕉", "苹果" };
   listBox1.DataSource = fruits;
   listBox1.Sorted = true; // 无效，仍按List原有顺序显示
   ```
4. **无反向排序**：`Sorted` 仅支持「升序」，无法直接设置降序，若需降序需手动处理项的顺序（如反转集合后添加）。

#### 总结
1. `Sorted` 是布尔属性，`true` 时 ListBox 项自动按**字母/拼音升序**排列，`false` 时按添加顺序显示（默认）；
2. 该属性仅对「直接通过 Items 添加的项」生效，绑定 `DataSource` 时失效；
3. 建议在添加项前设置 `Sorted`，非字符串项排序依赖 `ToString()` 方法，且仅支持升序。

--- 

### 5. Text属性

#### 1. Text 属性核心概念
`Text` 是 ListBox（列表框）控件的基础属性，核心作用是**读取当前选中项的文本内容**，与 ComboBox 的 Text 属性有本质区别，核心特点：
- **只读特性（关键）**：ListBox 的 Text 属性仅支持「读取」，无法通过赋值（如 `listBox1.Text = "测试"`）修改列表项或选中状态，赋值操作会被忽略；
- **关联选中项**：有选中项时，Text 等于**第一个选中项**的 `ToString()` 结果（多选场景下仅返回首个选中项文本）；无选中项时，Text 为空字符串；
- **快捷访问**：`Text` 等价于 `listBox1.SelectedItem?.ToString()`（`SelectedItem` 为 null 时 Text 为空），是读取选中项文本的简化方式。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `Text` 属性的核心用法（读取、多选场景表现、赋值无效演示），适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 ListBox 控件（命名：listBox1，适当拉大尺寸）；
- 2个 Button 控件（命名：btnGetText、btnSetText，文本分别为「获取Text内容」「尝试设置Text」）；
- 1个 Label 控件（命名：label1，用于显示结果）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace ListBoxTextDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 1. 初始化ListBox：添加测试项，支持多选（体现Text仅返回首个选中项）
            listBox1.Items.AddRange(new string[] { "Python", "C#", "Java", "JavaScript" });
            listBox1.SelectionMode = SelectionMode.MultiSimple; // 开启多选

            // 2. 绑定按钮点击事件
            btnGetText.Click += BtnGetText_Click;
            btnSetText.Click += BtnSetText_Click;
            label1.Text = "请选中项后点击按钮测试";
        }

        // 按钮1：读取Text属性（核心用法）
        private void BtnGetText_Click(object sender, EventArgs e)
        {
            string currentText = listBox1.Text;
            if (string.IsNullOrEmpty(currentText))
            {
                label1.Text = "无选中项，Text为空";
            }
            else
            {
                // 对比显示Text和SelectedItem（验证两者关联）
                label1.Text = $"Text内容：{currentText}\n首个选中项：{listBox1.SelectedItem}";
            }
        }

        // 按钮2：演示Text属性赋值无效
        private void BtnSetText_Click(object sender, EventArgs e)
        {
            // 尝试给Text赋值（无任何效果）
            listBox1.Text = "Go语言";
            label1.Text = $"尝试设置Text为「Go语言」，但实际Text仍为：{listBox1.Text}\n（ListBox的Text属性只读，赋值无效）";
        }
    }
}
```

##### 步骤3：运行效果
1. 无选中项时：点击「获取Text内容」，Label 显示「无选中项，Text为空」；
2. 单选场景：选中「C#」，点击「获取Text内容」，Label 显示「Text内容：C#\n首个选中项：C#」；
3. 多选场景：选中「Python」「Java」「JavaScript」，点击「获取Text内容」，Label 仅显示首个选中项「Python」；
4. 点击「尝试设置Text」：Label 显示赋值后 Text 仍为原有内容（或空），验证赋值无效。

#### 3. 核心使用注意事项
1. **只读特性**：ListBox 的 Text 是「只读属性」，这是与 ComboBox 最核心的区别（ComboBox 的 Text 可读写），任何对 `listBox1.Text = "xxx"` 的赋值操作都不会生效；
2. **多选场景限制**：即使开启多选（`SelectionMode = MultiSimple/MultiExtended`），Text 仅返回**第一个**选中项的文本，若需获取所有选中项，需使用 `SelectedItems` 集合；
3. **非字符串项处理**：若 ListBox 中添加了数字、自定义对象等非字符串项，Text 会返回该对象的 `ToString()` 结果，例如添加 `listBox1.Items.Add(100)`，选中后 Text 为「100」；
4. **空值安全**：读取 Text 前可先判断 `listBox1.SelectedItem != null`，避免依赖空文本做逻辑判断（无选中项时 Text 为空字符串）。

#### 总结
1. ListBox 的 `Text` 属性仅用于**读取首个选中项的文本**，是 `SelectedItem?.ToString()` 的快捷方式，且为只读属性（赋值无效）；
2. 多选场景下 `Text` 仅返回第一个选中项，获取所有选中项需用 `SelectedItems`；
3. 非字符串项的 `Text` 内容由对象的 `ToString()` 方法决定，无选中项时 Text 为空。
