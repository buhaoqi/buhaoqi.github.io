---
# 这部分是关键！侧边栏显示名由这里决定
title: TabControl控件  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: TabControl控件  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---

## 一、用途


## 二、特点


## 三、属性

### 1.SelectedTab属性
#### 1. SelectedTab 属性核心概念
`SelectedTab` 是 TabControl（选项卡控件）最核心的基础属性，核心作用是**获取或设置 TabControl 中当前被选中（激活）的 TabPage（标签页）**，核心特点：
- 类型与取值：属性类型为 `TabPage`，取值为 TabControl 中已存在的某个标签页对象；无标签页时为 `null`；
- 可读写性：既可以读取该属性获取当前选中的标签页，也可以通过赋值直接切换选中的标签页（无需用户手动点击）；
- 关联索引：与 `SelectedIndex` 属性一一联动——`SelectedTab` 对应标签页的索引就是 `SelectedIndex`，修改其中一个会同步改变另一个；
- 事件触发：无论是手动点击标签页，还是通过代码修改 `SelectedTab`，都会触发 `SelectedIndexChanged` 事件（可用于响应标签页切换）。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `SelectedTab` 的「读取当前选中标签页」「代码切换选中标签页」核心用法，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 TabControl 控件（命名：tabControl1）；
- 手动为 tabControl1 添加 2 个 TabPage（命名：tabPage1、tabPage2，Text 分别设为「个人信息」「爱好」）；
- 2个 Button 控件（命名：btnGetTab、btnSetTab，文本分别为「获取当前选中标签页」「切换到「爱好」标签页」）；
- 1个 Label 控件（命名：label1，用于显示操作结果）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace TabControlSelectedTabDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 初始化标签页文本（也可在设计器中设置）
            tabPage1.Text = "个人信息";
            tabPage2.Text = "爱好";

            // 绑定按钮点击事件
            btnGetTab.Click += BtnGetTab_Click;
            btnSetTab.Click += BtnSetTab_Click;

            // 初始化显示：默认选中第一个标签页
            label1.Text = $"初始选中标签页：{tabControl1.SelectedTab.Text}";
        }

        // 按钮1：读取当前选中的标签页（SelectedTab核心读取用法）
        private void BtnGetTab_Click(object sender, EventArgs e)
        {
            // 空值判断：避免无标签页时出现空引用异常
            if (tabControl1.SelectedTab == null)
            {
                label1.Text = "TabControl中无标签页";
                return;
            }

            // 读取SelectedTab的文本和索引
            string tabText = tabControl1.SelectedTab.Text;
            int tabIndex = tabControl1.SelectedIndex;
            label1.Text = $"当前选中标签页：{tabText}（索引：{tabIndex}）";
        }

        // 按钮2：通过代码设置SelectedTab，切换选中的标签页
        private void BtnSetTab_Click(object sender, EventArgs e)
        {
            // 核心：将SelectedTab赋值为tabPage2，直接切换到「爱好」标签页
            tabControl1.SelectedTab = tabPage2;
            label1.Text = $"已切换到：{tabControl1.SelectedTab.Text}（索引：{tabControl1.SelectedIndex}）";
        }
    }
}
```

##### 步骤3：运行效果
1. 初始状态：TabControl 默认选中第一个标签页「个人信息」，Label 显示「初始选中标签页：个人信息」；
2. 点击「获取当前选中标签页」：Label 显示「当前选中标签页：个人信息（索引：0）」；
3. 点击「切换到「爱好」标签页」：TabControl 立即切换到第二个标签页「爱好」，Label 显示「已切换到：爱好（索引：1）」；
4. 手动点击「个人信息」标签页后，再次点击「获取当前选中标签页」：Label 会更新为「个人信息（索引：0）」，验证读取功能。

#### 3. 核心使用注意事项
1. **赋值有效性**：只能将 `SelectedTab` 赋值为 TabControl 的 `TabPages` 集合中已存在的 TabPage 对象（如示例中的 tabPage2），若赋值为未添加到 TabControl 的 TabPage，赋值会无效，`SelectedTab` 保持原有值；
2. **空值安全**：若 TabControl 中未添加任何 TabPage（`tabControl1.TabPages.Count = 0`），`SelectedTab` 为 `null`，读取前必须做空值判断（如示例中的 `if (tabControl1.SelectedTab == null)`），避免空引用异常；
3. **与 SelectedIndex 联动**：`SelectedTab = tabPage2` 等价于 `SelectedIndex = 1`，修改其中一个属性，另一个会自动同步；
4. **事件触发**：代码修改 `SelectedTab` 会触发 `SelectedIndexChanged` 事件，与用户手动点击标签页的触发效果完全一致，示例：
   ```csharp
   // 绑定标签页切换事件
   tabControl1.SelectedIndexChanged += (s, e) => {
       label1.Text = $"标签页切换为：{tabControl1.SelectedTab.Text}";
   };
   ```

#### 总结
1. `SelectedTab` 是 TabControl 的核心属性，用于**获取/设置当前选中的标签页对象**，支持代码直接切换标签页；
2. 赋值时需确保 TabPage 已添加到 TabControl 的 `TabPages` 集合，读取前需做空值判断；
3. 与 `SelectedIndex` 一一联动，修改 `SelectedTab` 会触发 `SelectedIndexChanged` 事件。


---

### 2.TabPages属性

#### 1. TabPages 属性核心概念
`TabPages` 是 TabControl（选项卡控件）最核心的集合属性，核心作用是**管理 TabControl 中所有的 TabPage（标签页）对象**，是操作标签页的基础载体，核心特点：
- 类型与本质：属性类型为 `TabControl.TabPageCollection`，是专门存储 TabPage 的有序集合，索引从 `0` 开始；
- 可读写性：支持「添加、删除、清空、遍历、按索引访问」等全量集合操作，可通过代码动态管理标签页；
- 基础行为：新创建的 TabControl 无默认标签页（`TabPages.Count = 0`），需手动通过 `TabPages` 添加；
- 关联显示：添加到 `TabPages` 的 TabPage 会自动显示在 TabControl 中，移除后则从界面消失。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `TabPages` 最常用的「添加、删除、清空、遍历读取」核心用法，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 TabControl 控件（命名：tabControl1）；
- 4个 Button 控件（命名：btnAddTab、btnDeleteTab、btnClearTabs、btnGetTabs，文本分别为「添加标签页」「删除选中标签页」「清空所有标签页」「读取所有标签页」）；
- 1个 Label 控件（命名：label1，用于显示操作结果）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace TabControlTabPagesDemo
{
    public partial class Form1 : Form
    {
        // 用于生成唯一的标签页名称
        private int tabIndex = 1;

        public Form1()
        {
            InitializeComponent();
            // 绑定按钮点击事件
            btnAddTab.Click += BtnAddTab_Click;
            btnDeleteTab.Click += BtnDeleteTab_Click;
            btnClearTabs.Click += BtnClearTabs_Click;
            btnGetTabs.Click += BtnGetTabs_Click;

            // 初始化显示
            label1.Text = $"当前标签页数量：{tabControl1.TabPages.Count}\n暂无标签页";
        }

        // 按钮1：添加标签页（TabPages核心添加操作）
        private void BtnAddTab_Click(object sender, EventArgs e)
        {
            // 1. 创建新的TabPage对象
            TabPage newTab = new TabPage();
            newTab.Text = $"标签页{tabIndex}"; // 设置标签页显示文本
            newTab.Name = $"tabPage{tabIndex}"; // 设置标签页名称（可选）

            // 2. 核心：将TabPage添加到TabPages集合
            tabControl1.TabPages.Add(newTab);

            // 3. 自动选中新增的标签页
            tabControl1.SelectedTab = newTab;

            // 更新显示
            label1.Text = $"已添加「{newTab.Text}」\n当前标签页总数：{tabControl1.TabPages.Count}";
            tabIndex++;
        }

        // 按钮2：删除选中的标签页（按对象删除）
        private void BtnDeleteTab_Click(object sender, EventArgs e)
        {
            // 空值判断：无标签页/未选中标签页时提示
            if (tabControl1.TabPages.Count == 0 || tabControl1.SelectedTab == null)
            {
                label1.Text = "无可删除的标签页！";
                return;
            }

            // 核心：从TabPages中移除选中的TabPage
            string deletedTabText = tabControl1.SelectedTab.Text;
            tabControl1.TabPages.Remove(tabControl1.SelectedTab);

            // 更新显示
            label1.Text = $"已删除「{deletedTabText}」\n当前标签页总数：{tabControl1.TabPages.Count}";
        }

        // 按钮3：清空所有标签页
        private void BtnClearTabs_Click(object sender, EventArgs e)
        {
            // 核心：清空TabPages集合
            tabControl1.TabPages.Clear();

            // 更新显示
            label1.Text = $"已清空所有标签页\n当前标签页总数：{tabControl1.TabPages.Count}";
        }

        // 按钮4：遍历读取所有标签页（按索引访问）
        private void BtnGetTabs_Click(object sender, EventArgs e)
        {
            if (tabControl1.TabPages.Count == 0)
            {
                label1.Text = "当前无标签页！";
                return;
            }

            // 核心：遍历TabPages集合（按索引访问）
            string allTabs = "所有标签页：\n";
            for (int i = 0; i < tabControl1.TabPages.Count; i++)
            {
                TabPage tab = tabControl1.TabPages[i]; // 按索引获取标签页
                allTabs += $"索引{i}：{tab.Text}\n";
            }
            allTabs += $"总数：{tabControl1.TabPages.Count}";

            // 更新显示
            label1.Text = allTabs;
        }
    }
}
```

##### 步骤3：运行效果
1. 点击「添加标签页」：TabControl 会依次添加「标签页1」「标签页2」等，新增的标签页会自动选中，Label 显示总数和新增名称；
2. 选中某个标签页（如「标签页1」），点击「删除选中标签页」：该标签页被移除，总数减少，Label 提示删除成功；
3. 点击「清空所有标签页」：所有标签页消失，总数变为 0；
4. 重新添加多个标签页后，点击「读取所有标签页」：Label 会按索引列出所有标签页（如「索引0：标签页1、索引1：标签页2」）。

#### 3. 核心使用注意事项
1. **索引规则**：`TabPages` 是有序集合，索引从 `0` 开始，`TabPages.Count` 表示标签页总数，可通过 `TabPages[index]` 直接访问指定位置的标签页；
2. **常用操作方法**：
   - 添加：`Add(TabPage)`（单条添加）、`AddRange(TabPage[])`（批量添加）；
   - 删除：`Remove(TabPage)`（按对象删除）、`RemoveAt(int index)`（按索引删除）；
   - 清空：`Clear()`（清空所有）；
3. **空值判断**：操作 `TabPages` 前建议先判断 `TabPages.Count > 0`（是否有标签页）、`SelectedTab != null`（是否选中标签页），避免空引用异常；
4. **批量添加示例**：若需一次性添加多个标签页，可使用 `AddRange`：
   ```csharp
   // 批量添加2个标签页
   TabPage[] tabs = new TabPage[] { new TabPage("批量标签1"), new TabPage("批量标签2") };
   tabControl1.TabPages.AddRange(tabs);
   ```
5. **名称与文本区别**：`TabPage.Name` 是控件的唯一标识（代码访问用），`TabPage.Text` 是界面显示的标签文本，二者可不同。

#### 总结
1. `TabPages` 是 TabControl 的核心集合属性，用于**管理所有标签页（TabPage）**，支持添加、删除、清空、遍历等基础操作；
2. 常用方法：`Add()`（单条添加）、`AddRange()`（批量添加）、`Remove()`/`RemoveAt()`（删除）、`Clear()`（清空），可通过索引 `TabPages[index]` 访问指定标签页；
3. 操作前需做空值/数量判断，避免空引用异常，新增的标签页需添加到 `TabPages` 才会显示在界面上。

---

### 3.Multiline属性

#### 1. Multiline 属性核心概念
`Multiline` 是 TabControl（选项卡控件）的基础布尔型属性，核心作用是**控制标签页（TabPage）的标题栏是否允许多行显示**，是调整标签页布局的关键属性，核心特点：
- 取值规则：`false`（默认值）表示标签页标题单行显示；`true` 表示标题自动换行成多行显示；
- 滚动条关联：
  - `Multiline = false`：标签页数量超出 TabControl 宽度时，标题栏两端显示**水平滚动箭头**，需点击箭头查看隐藏的标签页；
  - `Multiline = true`：标题栏自动换行，所有标签页标题都可见，无水平滚动箭头；
- 独立于内容：仅影响标签页标题的布局，不改变 TabPage 内部控件的显示、交互逻辑；
- 可读写性：既可以通过代码设置单行/多行模式，也可以读取该属性判断当前布局状态，赋值后立即生效。

#### 2. 基础示例（C# WinForms）
以下示例极简且可直接运行，覆盖 `Multiline` 的「切换单行/多行模式」「验证布局效果」核心用法，适合新手理解。

##### 步骤1：创建WinForms窗体并添加控件
新建WinForms项目，在窗体上添加：
- 1个 TabControl 控件（命名：tabControl1，适当拉大宽度，便于观察多行效果）；
- 2个 Button 控件（命名：btnSingleLine、btnMultiLine，文本分别为「单行显示（默认）」「多行显示」）；
- 1个 Label 控件（命名：label1，用于显示当前模式）。

##### 步骤2：完整代码（Form1.cs）
```csharp
using System;
using System.Windows.Forms;

namespace TabControlMultilineDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // 1. 初始化：添加足够多的标签页（8个，便于体现单行时的滚动效果）
            for (int i = 1; i <= 8; i++)
            {
                TabPage tab = new TabPage();
                tab.Text = $"标签页{i}"; // 设置标签页显示文本
                tabControl1.TabPages.Add(tab);
            }

            // 2. 绑定按钮点击事件
            btnSingleLine.Text = "单行显示（默认）";
            btnSingleLine.Click += BtnSingleLine_Click;
            btnMultiLine.Text = "多行显示";
            btnMultiLine.Click += BtnMultiLine_Click;

            // 3. 初始化显示当前模式
            UpdateMultilineStatus();
        }

        // 辅助方法：更新Label显示当前Multiline状态
        private void UpdateMultilineStatus()
        {
            string mode = tabControl1.Multiline ? "多行显示（无滚动条）" : "单行显示（带水平滚动条）";
            label1.Text = $"当前模式：{mode}\n标签页总数：{tabControl1.TabPages.Count}";
        }

        // 按钮1：切换为单行模式（默认）
        private void BtnSingleLine_Click(object sender, EventArgs e)
        {
            // 核心：设置Multiline为false，单行显示+水平滚动条
            tabControl1.Multiline = false;
            UpdateMultilineStatus();
        }

        // 按钮2：切换为多行模式
        private void BtnMultiLine_Click(object sender, EventArgs e)
        {
            // 核心：设置Multiline为true，多行显示+无滚动条
            tabControl1.Multiline = true;
            UpdateMultilineStatus();
        }
    }
}
```

##### 步骤3：运行效果
1. 初始/点击「单行显示」：`Multiline = false`，TabControl 标题栏仅显示一行标签页（如「标签页1-5」），右侧出现水平滚动箭头，点击箭头可查看「标签页6-8」，Label 显示「单行显示（带水平滚动条）」；
2. 点击「多行显示」：`Multiline = true`，标题栏自动换行（如第一行显示「标签页1-4」，第二行显示「标签页5-8」），所有标签页都可见，水平滚动箭头消失，Label 显示「多行显示（无滚动条）」；
3. 调整 TabControl 宽度：缩小控件宽度，单行模式下需要滚动的标签页数量增加，多行模式下换行的行数会增加（如从2行变为3行）。

#### 3. 核心使用注意事项
1. **换行规则**：多行模式下，标签页标题按「先行后列」填充——先填满第一行的所有位置，再从第二行第一个位置开始填充，行数由 TabControl 宽度、标签页数量、标题长度自动计算，无法手动指定行数；
2. **标题长度影响**：若标签页标题过长（如「超长名称的标签页1」），单行模式下标题会被截断（末尾显示「...」）或需要更多滚动操作，多行模式下会优先换行，尽可能显示完整标题；
3. **即时生效**：修改 `Multiline` 后无需刷新控件/窗体，界面会立即更新标题栏布局，无需重新添加标签页；
4. **垂直空间占用**：多行模式下，TabControl 会占用更多垂直空间（行数×单行高度），需注意窗体布局，避免遮挡下方控件；
5. **兼容性**：该属性对「手动添加」和「动态生成」的标签页均生效，不影响 `SelectedTab`「TabPages」等核心属性的使用。

#### 总结
1. `Multiline` 是布尔属性，`true` 时 TabControl 标签页标题**多行显示**（无水平滚动条），`false` 时单行显示（默认，带水平滚动条）；
2. 仅影响标题栏布局，不改变标签页内容的显示和交互逻辑；
3. 行数由 TabControl 宽度、标签页数量自动计算，无法手动指定，赋值后立即生效。