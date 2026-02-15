---
# 这部分是关键！侧边栏显示名由这里决定
title: TextBox控件  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: TextBox控件  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 2  # 侧边栏中排在第1位
---
## 本节高考考点
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



## 一、TextBox 控件用途

用途是**文本输入/可编辑显示**，覆盖单行、密码、多行文本等场景；与Label相比，TextBox更适合需要用户交互或长文本显示（支持滚动）的场景，Label则适合纯展示短文本。

TextBox是WinForm中最常用的**文本输入/显示控件**，主要用于和用户进行文本交互，常见场景包括：
1. **单行文本输入**：如登录界面的用户名、搜索框、手机号/验证码输入框等；
2. **密码输入**：通过掩码隐藏输入内容（如用`*`代替真实字符）；
3. **多行文本编辑**：如备注、留言、简单的文本内容编辑（替代简易记事本）；
4. **只读文本显示**：展示无需用户修改的文本（比Label更适合长文本，支持滚动）。


## 三、TextBox控件属性
### 1.Text属性
你想掌握WinForm中TextBox控件的`Text`属性用法，包括核心作用、设置/读取文本的方式、单行/多行场景的使用差异，以及结合其他属性的实用场景和关键注意事项，对吧？

#### 一、Text属性核心定义
TextBox的`Text`属性是**可读可写的字符串类型属性**，也是TextBox最核心的属性——它用于存储、展示用户输入的文本内容，或由程序主动设置文本值。默认值为空字符串（`""`），支持单行文本（默认）和多行文本（需配合`Multiline = true`），可包含普通字符、转义字符（如换行符`\r\n`）、特殊符号等。

#### 二、Text属性基础用法（附代码示例）
##### 1. 静态设置/读取文本（窗体加载时）
在窗体初始化阶段设置TextBox的初始文本，或读取默认值（通常为空）：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // 示例1：设置单行TextBox初始文本（如默认提示填充）
    textBoxUserName.Text = "请输入用户名"; // 初始提示文本
    textBoxUserName.ForeColor = Color.Gray; // 提示文字置灰

    // 示例2：设置多行TextBox初始文本（结合换行符）
    textBoxRemark.Multiline = true; // 开启多行模式
    textBoxRemark.ScrollBars = ScrollBars.Vertical; // 显示垂直滚动条
    textBoxRemark.Text = $"默认备注：{Environment.NewLine}1. 无特殊要求{Environment.NewLine}2. 请补充详细信息";

    // 示例3：读取初始Text值（默认空字符串）
    string initText = textBoxPassword.Text;
    MessageBox.Show($"密码框初始文本：{initText}"); // 输出：空字符串
}
```

##### 2. 动态修改/读取文本（按钮点击/业务触发）
这是`Text`最常用的场景，比如提交表单时读取输入、清空文本、赋值新内容：
```csharp
// 示例1：提交按钮点击时，读取TextBox输入内容
private void btnSubmit_Click(object sender, EventArgs e)
{
    // 读取用户名和密码
    string userName = textBoxUserName.Text.Trim(); // Trim()去除首尾空格
    string password = textBoxPassword.Text;

    // 简单校验
    if (string.IsNullOrEmpty(userName))
    {
        MessageBox.Show("用户名不能为空！");
        return;
    }

    // 展示读取的内容
    MessageBox.Show($"提交信息：{Environment.NewLine}用户名：{userName}{Environment.NewLine}密码：{new string('*', password.Length)}");
}

// 示例2：清空TextBox文本（两种等价方式）
private void btnClear_Click(object sender, EventArgs e)
{
    // 方式1：直接赋值为空字符串（最常用）
    textBoxUserName.Text = "";
    // 方式2：调用Clear()方法（语义更清晰）
    textBoxPassword.Clear();
    textBoxRemark.Clear();
}

// 示例3：动态赋值新文本
private void btnSetText_Click(object sender, EventArgs e)
{
    textBoxUserName.Text = "默认用户名"; // 覆盖原有文本
    textBoxRemark.Text += $"{Environment.NewLine}—— 自动补充的备注（{DateTime.Now:HH:mm:ss}）"; // 追加文本
}
```

##### 3. 区分Text和Clear()（清空文本）
清空TextBox文本有两种等价方式，可根据语义选择：
```csharp
// 方式1：赋值为空字符串（简洁）
textBox1.Text = "";
// 方式2：调用Clear()方法（更直观，推荐）
textBox1.Clear();
// 两者效果完全一致，都会清空Text并触发TextChanged事件
```

#### 三、Text属性的核心实用场景
##### 1. 输入校验（读取Text判断有效性）
结合`Text`读取用户输入，校验格式、长度、非空等，是表单提交的核心逻辑：
```csharp
// 示例：校验手机号格式（简单正则）
private void btnCheckPhone_Click(object sender, EventArgs e)
{
    string phone = textBoxPhone.Text.Trim();
    // 正则匹配11位手机号
    System.Text.RegularExpressions.Regex regex = new System.Text.RegularExpressions.Regex(@"^1[3-9]\d{9}$");
    
    if (string.IsNullOrEmpty(phone))
    {
        labelTip.Text = "⚠️ 手机号不能为空！";
        labelTip.ForeColor = Color.Red;
    }
    else if (!regex.IsMatch(phone))
    {
        labelTip.Text = "⚠️ 手机号格式错误（需11位有效号码）！";
        labelTip.ForeColor = Color.Red;
    }
    else
    {
        labelTip.Text = "✅ 手机号格式正确！";
        labelTip.ForeColor = Color.Green;
    }
}
```

##### 2. 多行文本处理（结合Multiline属性）
`Text`支持存储多行文本，需配合`Multiline = true`，换行符用`\r\n`或`Environment.NewLine`（跨平台兼容）：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    textBoxMultiLine.Multiline = true;
    textBoxMultiLine.Size = new Size(300, 100);
    // 方式1：用Environment.NewLine换行（推荐）
    textBoxMultiLine.Text = $"第一行文本{Environment.NewLine}第二行文本{Environment.NewLine}第三行文本";
    // 方式2：用\r\n换行（Windows专用）
    // textBoxMultiLine.Text = "第一行文本\r\n第二行文本\r\n第三行文本";
}

// 读取多行文本并拆分每行
private void btnReadMultiLine_Click(object sender, EventArgs e)
{
    string multiText = textBoxMultiLine.Text;
    // 按换行符拆分每行
    string[] lines = multiText.Split(new[] { Environment.NewLine }, StringSplitOptions.None);
    string result = "多行文本拆分结果：\n";
    for (int i = 0; i < lines.Length; i++)
    {
        result += $"第{i+1}行：{lines[i]}\n";
    }
    labelResult.Text = result;
}
```

##### 3. 密码框文本处理（结合PasswordChar）
当TextBox作为密码框使用时（设置`PasswordChar`或`UseSystemPasswordChar`），`Text`仍存储**真实的明文内容**，仅界面显示掩码字符：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // 设置为密码框
    textBoxPassword.PasswordChar = '*'; // 显示为*
    // 或使用系统默认密码字符
    // textBoxPassword.UseSystemPasswordChar = true;
}

private void btnShowPwd_Click(object sender, EventArgs e)
{
    // 读取真实密码（Text存储明文）
    string realPwd = textBoxPassword.Text;
    MessageBox.Show($"真实密码：{realPwd}"); // 输出输入的明文，而非*
}
```

##### 4. 实时响应输入变化（TextChanged事件）
结合`TextChanged`事件，实时监听`Text`的变化（如实时校验、显示输入长度）：
```csharp
// 实时显示输入长度（结合MaxLength）
private void textBoxUserName_TextChanged(object sender, EventArgs e)
{
    TextBox tb = sender as TextBox;
    if (tb != null)
    {
        int currentLen = tb.TextLength;
        int maxLen = tb.MaxLength;
        labelLenTip.Text = $"已输入：{currentLen}/{maxLen} 字符";
        // 长度达标时标绿
        labelLenTip.ForeColor = currentLen >= 6 ? Color.Green : Color.Orange;
    }
}
```

#### 四、使用Text属性的关键注意事项
##### 1. 区分Text和SelectedText（新手易混淆）
- `Text`：TextBox的**全部文本内容**；
- `SelectedText`：TextBox中**被用户选中的部分文本**（可单独赋值，替换选中内容）。
示例对比：
```csharp
private void btnReplaceSelected_Click(object sender, EventArgs e)
{
    // 替换选中的文本（未选中则插入到光标位置）
    textBoxRemark.SelectedText = "[替换内容]";
    // 读取全部文本（包含替换后的内容）
    string allText = textBoxRemark.Text;
    MessageBox.Show($"全部文本：{allText}");
}
```

##### 2. 文本截断（结合MaxLength）
当通过代码给`Text`赋值超过`MaxLength`限制的内容时，文本会**自动截断**到`MaxLength`长度：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    textBox1.MaxLength = 5; // 限制最多5个字符
    textBox1.Text = "123456789"; // 赋值9个字符
    MessageBox.Show($"实际Text值：{textBox1.Text}"); // 输出：12345（截断后）
}
```

##### 3. 只读/禁用状态下的Text操作
- `ReadOnly = true`：用户无法编辑，但程序可通过`Text`赋值/读取（界面光标仍可显示）；
- `Enabled = false`：控件禁用，用户和程序都无法修改`Text`（仅可读取）。

##### 4. 特殊字符处理
- 转义字符：`\t`（制表符）、`\\`（反斜杠）、`\"`（双引号）等需转义；
- 若需显示原始转义字符（如`\n`），需用`@`Verbatim字符串：
  ```csharp
  textBox1.Text = @"C:\Users\test\note.txt"; // 显示：C:\Users\test\note.txt
  ```

##### 5. 空文本判断
推荐使用`string.IsNullOrEmpty(tb.Text.Trim())`判断是否为有效输入（去除首尾空格后为空），避免用户仅输入空格的情况：
```csharp
// 推荐写法
if (string.IsNullOrEmpty(textBoxUserName.Text.Trim()))
{
    MessageBox.Show("用户名不能为空（仅空格也无效）！");
}
```

#### 总结
1. `Text`是TextBox最核心的属性，可读可写，用于存储/展示全部文本内容，支持单行/多行；
2. 常用操作：设置初始文本、读取用户输入、清空文本、实时响应输入变化（TextChanged）；
3. 关键注意：区分`Text`和`SelectedText`，结合`Multiline/PasswordChar/MaxLength`使用，判断空文本时建议先`Trim()`。

---

### 2.TextLength 属性

#### 一、`TextLength` 核心定义
`TextLength`是TextBox的**只读属性**，专门用于获取当前TextBox中`Text`属性的字符总数（包括空格、换行符等所有可见/不可见字符）。它的核心优势是：**无需手动访问`Text`属性就能获取长度，且能避免空引用异常**。

#### 二、`TextLength` 基础用法（附代码示例）
##### 1. 基本读取：获取当前文本长度
直接通过`textBox1.TextLength`读取即可，无需额外计算，示例如下：
```csharp
// 示例1：简单读取文本长度并弹窗显示
private void btnGetLength_Click(object sender, EventArgs e)
{
    // 假设textBox1中输入了“锄禾日当午”
    int length = textBox1.TextLength; // 此时length = 5
    MessageBox.Show($"当前输入的字符数：{length}");
}
```

##### 2. 实用场景1：实时显示输入字符数（最常用）
结合`TextChanged`事件，实时展示用户输入的字符数（比如评论、昵称输入框的“已输入X/50字”提示）：
```csharp
// 窗体加载时绑定事件
private void Form1_Load(object sender, EventArgs e)
{
    // 设置输入框最大长度
    textBox1.MaxLength = 50;
    // 绑定文本变化事件
    textBox1.TextChanged += TextBox1_TextChanged;
}

// 文本变化时实时更新字符数提示
private void TextBox1_TextChanged(object sender, EventArgs e)
{
    // 获取当前长度
    int currentLen = textBox1.TextLength;
    // 显示到Label上（label1用于提示）
    label1.Text = $"已输入：{currentLen}/50 字";
    
    // 可选：超过最大长度时标红提示
    if (currentLen >= textBox1.MaxLength)
    {
        label1.ForeColor = Color.Red;
    }
    else
    {
        label1.ForeColor = Color.Black;
    }
}
```

##### 3. 实用场景2：判断文本是否为空（简化代码）
替代`string.IsNullOrEmpty(textBox1.Text)`，代码更简洁：
```csharp
private void btnCheckEmpty_Click(object sender, EventArgs e)
{
    if (textBox1.TextLength == 0)
    {
        MessageBox.Show("输入框不能为空！");
    }
    else
    {
        MessageBox.Show("输入内容有效！");
    }
}
```

#### 三、`TextLength` vs `Text.Length`（关键区别）
很多新手会混淆`textBox1.TextLength`和`textBox1.Text.Length`，核心差异在于**空引用安全**：

| 场景                | `TextLength` | `Text.Length` |
|---------------------|--------------|---------------|
| Text为空字符串（""） | 返回0        | 返回0         |
| Text为null（极端情况） | 返回0      | 抛出`NullReferenceException`空引用异常 |
| 性能                | 略优（直接读取控件内部值） | 需先访问Text属性再计算 |

> 注意：WinForm中TextBox的`Text`属性默认是空字符串（""）而非null，所以日常使用中两者结果一致，但`TextLength`是更安全、更贴合TextBox控件的写法（符合“控件自有属性优先”的最佳实践）。

#### 四、注意事项
1. `TextLength`是**只读属性**，不能赋值（比如`textBox1.TextLength = 10;`会报错）；
2. 计算的是**字符数**而非字节数（比如中文、英文、数字都算1个字符）；
3. 多行TextBox中，换行符（`\r\n`）会算2个字符（Windows换行符是回车+换行）。

#### 总结
1. `TextLength`是TextBox的只读属性，核心作用是**安全、便捷地获取文本字符总数**；
2. 相比`Text.Length`，它能避免空引用异常，且更贴合控件自身的设计；
3. 最常用场景：实时显示输入字符数、判断输入框是否为空、配合`MaxLength`做输入校验。

---

### 3.ReadOnly属性
你想掌握WinForm中TextBox控件的`ReadOnly`属性用法，包括核心作用、开启/关闭后的效果差异、动态切换的实用场景，以及和`Enabled`属性的关键区别等注意事项，对吧？

#### 一、ReadOnly属性核心定义
TextBox的`ReadOnly`属性是**可读可写的布尔类型（bool）属性**，核心作用是控制TextBox的文本是否允许**用户手动编辑**：
- 默认值：`false`（用户可正常输入、删除、修改文本）；
- 设为`true`时：用户无法编辑文本（输入/删除/修改操作无效），但仍可聚焦控件、选中/复制文本，程序也能通过代码修改`Text`属性；
- 核心特征：仅限制“用户手动编辑”，不限制“程序操作”和“文本复制”，控件视觉上仍为正常状态（无灰显）。

#### 二、ReadOnly属性基础用法（附代码示例）
##### 1. 静态设置只读状态（窗体加载时）
初始化时将TextBox设为只读，用于展示无需修改的内容（如用户信息、订单编号）：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // 示例1：展示用户ID（只读，不允许编辑）
    textBoxUserId.ReadOnly = true;
    textBoxUserId.Text = "U123456789"; // 程序可赋值
    textBoxUserId.ForeColor = Color.Gray; // 手动调整颜色，区分只读状态
    textBoxUserId.PlaceholderText = "用户ID（只读）";

    // 示例2：默认可编辑的输入框（省略ReadOnly=false，因默认值）
    textBoxUserName.ReadOnly = false;
    textBoxUserName.Text = "请输入用户名";
}
```

##### 2. 动态切换只读状态（按钮点击）
根据业务场景临时切换编辑/只读状态（如密码查看、表单提交后锁定）：
```csharp
// 示例1：切换密码框的只读/编辑状态（配合显示/隐藏密码）
private void btnTogglePwdReadOnly_Click(object sender, EventArgs e)
{
    // 切换ReadOnly状态
    textBoxPassword.ReadOnly = !textBoxPassword.ReadOnly;
    
    if (textBoxPassword.ReadOnly)
    {
        textBoxPassword.PasswordChar = '\0'; // 显示明文（查看密码）
        btnTogglePwdReadOnly.Text = "隐藏密码（可编辑）";
    }
    else
    {
        textBoxPassword.PasswordChar = '*'; // 恢复掩码
        btnTogglePwdReadOnly.Text = "查看密码（只读）";
    }
}

// 示例2：表单提交后锁定所有输入框（设为只读）
private void btnSubmit_Click(object sender, EventArgs e)
{
    // 简单校验
    if (string.IsNullOrEmpty(textBoxUserName.Text.Trim()))
    {
        MessageBox.Show("用户名不能为空！");
        return;
    }

    // 提交成功后，锁定所有输入框为只读
    textBoxUserName.ReadOnly = true;
    textBoxPhone.ReadOnly = true;
    textBoxRemark.ReadOnly = true;

    MessageBox.Show("提交成功！输入框已锁定，不可编辑");
}
```

##### 3. 读取ReadOnly状态（判断当前是否只读）
读取状态用于业务逻辑校验（如仅当可编辑时执行输入校验）：
```csharp
private void btnCheckReadOnly_Click(object sender, EventArgs e)
{
    // 读取多个TextBox的只读状态
    bool isUserIdReadOnly = textBoxUserId.ReadOnly;
    bool isUserNameReadOnly = textBoxUserName.ReadOnly;

    MessageBox.Show(
        $"只读状态：{Environment.NewLine}" +
        $"用户ID框：{(isUserIdReadOnly ? "只读" : "可编辑")}{Environment.NewLine}" +
        $"用户名框：{(isUserNameReadOnly ? "只读" : "可编辑")}"
    );
}
```

#### 三、ReadOnly属性的核心实用场景
##### 1. 展示只读数据（最常用）
用于展示无需修改的静态数据，同时允许用户复制内容（如订单号、身份证号）：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // 展示身份证号（只读，允许复制）
    textBoxIdCard.ReadOnly = true;
    textBoxIdCard.Text = "110101199001011234";
    textBoxIdCard.Cursor = Cursors.Default; // 光标改为默认，提示不可编辑（可选）
}
```

##### 2. 临时锁定输入（表单预览/提交后）
表单提交、预览时，临时将输入框设为只读，防止用户误修改，取消预览/重新编辑时可恢复：
```csharp
// 预览表单：锁定输入
private void btnPreview_Click(object sender, EventArgs e)
{
    SetAllTextBoxReadOnly(true);
    labelTip.Text = "当前为预览模式，输入框只读（可复制）";
}

// 重新编辑：恢复可编辑
private void btnEdit_Click(object sender, EventArgs e)
{
    SetAllTextBoxReadOnly(false);
    labelTip.Text = "当前为编辑模式，可修改内容";
}

// 批量设置TextBox只读状态的工具方法
private void SetAllTextBoxReadOnly(bool isReadOnly)
{
    foreach (Control ctrl in this.Controls)
    {
        if (ctrl is TextBox tb && tb.Name != "textBoxUserId") // 排除用户ID框
        {
            tb.ReadOnly = isReadOnly;
        }
    }
}
```

##### 3. 密码框临时查看（只读+显示明文）
结合`PasswordChar`，实现“只读查看密码明文”的功能（用户无法修改，仅可查看/复制）：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // 初始为密码框（掩码显示）
    textBoxPassword.PasswordChar = '*';
    textBoxPassword.ReadOnly = false;
}

// 查看密码：设为只读+显示明文
private void btnViewPwd_Click(object sender, EventArgs e)
{
    textBoxPassword.ReadOnly = true;
    textBoxPassword.PasswordChar = '\0'; // 清空掩码，显示明文
}

// 关闭查看：恢复可编辑+掩码
private void btnHidePwd_Click(object sender, EventArgs e)
{
    textBoxPassword.ReadOnly = false;
    textBoxPassword.PasswordChar = '*';
}
```

#### 四、使用ReadOnly的关键注意事项（新手易混淆）
##### 1. 核心区别：ReadOnly vs Enabled（重中之重）
新手极易混淆`ReadOnly = true`和`Enabled = false`，两者效果差异巨大，清晰对比如下：

| 特性                | `ReadOnly = true`                          | `Enabled = false`                          |
|---------------------|--------------------------------------------|--------------------------------------------|
| 用户编辑            | ❌ 不可编辑                                 | ❌ 不可编辑                                 |
| 聚焦/选中/复制      | ✅ 可聚焦、选中、复制文本                   | ❌ 无法聚焦，也无法选中/复制文本            |
| 程序修改Text        | ✅ 可通过代码赋值/修改                      | ❌ 禁止修改（代码赋值也无效）               |
| 视觉样式            | 正常（无灰显）                             | 灰显（控件变浅，提示不可用）               |
| 事件响应            | 可响应Click、GotFocus等事件                | 不响应任何用户交互事件                     |
| 适用场景            | 展示可复制的只读数据（如订单号）| 完全禁用控件（如无权限操作）|

示例对比：
```csharp
// ReadOnly=true：可聚焦、复制，程序可改Text
textBox1.ReadOnly = true;
textBox1.Text = "ReadOnly状态"; // 生效
textBox1.Focus(); // 生效（可选中复制）

// Enabled=false：灰显、不可聚焦，程序改Text也无效
textBox2.Enabled = false;
textBox2.Text = "Enabled=false状态"; // 无效（Text不变）
textBox2.Focus(); // 无效（无法聚焦）
```

##### 2. ReadOnly=true时仍可执行的操作
- 控件可聚焦（按Tab键或点击），光标会显示在文本中；
- 可选中全部/部分文本（鼠标拖动或Ctrl+A），并复制（Ctrl+C）；
- 程序可自由修改`Text`属性（不受限制）；
- 仍会响应`GotFocus`、`LostFocus`、`Click`等事件。

##### 3. 视觉样式优化（默认无标识）
`ReadOnly = true`时，TextBox视觉上无任何变化（和可编辑状态一致），用户可能误以为可编辑，建议手动调整样式提示：
```csharp
// 只读状态下调整样式，提示用户
private void SetTextBoxReadOnlyStyle(TextBox tb, bool isReadOnly)
{
    tb.ReadOnly = isReadOnly;
    if (isReadOnly)
    {
        tb.ForeColor = Color.Gray; // 文字置灰
        tb.Cursor = Cursors.Arrow; // 光标改为箭头（默认是I型）
    }
    else
    {
        tb.ForeColor = Color.Black; // 恢复黑色
        tb.Cursor = Cursors.IBeam; // 恢复输入光标
    }
}

// 使用示例
SetTextBoxReadOnlyStyle(textBoxUserId, true);
```

##### 4. 密码框的ReadOnly表现
当TextBox设置`PasswordChar`（密码框）且`ReadOnly = true`时：
- 用户仍无法编辑文本，但可选中/复制文本（复制的是明文，而非掩码字符）；
- 若需禁止复制密码，需结合`Enabled = false`或自定义处理（如屏蔽Ctrl+C）。

##### 5. 快捷键的影响
`ReadOnly = true`时，仅编辑类快捷键（Ctrl+V、Delete、Backspace）失效，复制/选中类快捷键（Ctrl+A、Ctrl+C）仍生效。

#### 总结
1. `ReadOnly`是bool属性，核心控制“用户是否可手动编辑”，设为true时仍可聚焦、复制，程序也能修改`Text`；
2. 核心用法：展示只读可复制的数据、临时锁定输入框、密码明文查看；
3. 关键区别：和`Enabled = false`相比，`ReadOnly = true`保留聚焦/复制/程序修改能力，视觉无灰显；
4. 优化建议：只读状态下手动调整文字颜色/光标样式，提升用户体验。

---

### 4.PasswordChar属性
你想掌握WinForm中TextBox控件的`PasswordChar`属性用法，包括核心作用、设置/取消密码掩码的方式、和系统默认密码字符的区别，以及实际开发中的实用场景（如切换密码显隐）和关键注意事项，对吧？

#### 一、PasswordChar属性核心定义
TextBox的`PasswordChar`属性是**可读可写的字符（char）类型属性**，核心作用是为TextBox设置**密码掩码字符**——当该属性设为非空字符时，用户输入的明文内容会被该字符替代显示（仅界面隐藏，`Text`属性仍存储真实明文），实现密码输入的隐私保护。
- 默认值：`\0`（空字符，等价于`char.MinValue`，表示不启用密码掩码，直接显示明文）；
- 核心限制：仅在`Multiline = false`（单行模式，默认）时生效，**多行模式下PasswordChar完全无效**（WinForm设计规则，无法通过该属性实现多行密码框）；
- 取值规则：可设为任意单个字符（如`*`、`●`、`#`等），设为`\0`则恢复明文显示。

#### 二、PasswordChar属性基础用法（附代码示例）
##### 1. 静态设置密码掩码（窗体加载时）
初始化时将TextBox设为密码框，指定固定掩码字符（最常用的基础场景）：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // 示例1：设置星号（*）作为密码掩码（最常用）
    textBoxPwd.PasswordChar = '*';
    textBoxPwd.PlaceholderText = "请输入密码（6-16位）";
    textBoxPwd.MaxLength = 16; // 配合MaxLength限制密码长度

    // 示例2：设置圆点（●）作为密码掩码（更贴近系统样式）
    textBoxPwd2.PasswordChar = '●';
    textBoxPwd2.PlaceholderText = "请输入确认密码";
    textBoxPwd2.MaxLength = 16;

    // 示例3：默认状态（不设置，等价于PasswordChar = '\0'）
    textBoxNormal.PasswordChar = '\0'; // 明文显示，非密码框
}
```

##### 2. 动态切换密码显隐（按钮点击）
通过切换`PasswordChar`的值，实现“显示密码明文/隐藏为掩码”的切换功能（提升用户体验）：
```csharp
// 标记当前是否显示明文
private bool isShowPwd = false;

// 点击按钮切换密码显隐
private void btnTogglePwd_Click(object sender, EventArgs e)
{
    if (isShowPwd)
    {
        // 隐藏：恢复密码掩码（星号）
        textBoxPwd.PasswordChar = '*';
        btnTogglePwd.Text = "显示密码";
    }
    else
    {
        // 显示：清空掩码，展示明文
        textBoxPwd.PasswordChar = '\0';
        btnTogglePwd.Text = "隐藏密码";
    }
    isShowPwd = !isShowPwd; // 切换状态标记
}
```

##### 3. 读取PasswordChar值（判断掩码状态）
读取当前设置的掩码字符，用于业务逻辑校验（如判断是否为密码框模式）：
```csharp
private void btnCheckPwdMode_Click(object sender, EventArgs e)
{
    // 读取PasswordChar值
    char pwdChar = textBoxPwd.PasswordChar;
    
    // 判断是否启用密码掩码
    if (pwdChar == '\0')
    {
        MessageBox.Show("当前为明文显示模式（非密码框）");
    }
    else
    {
        MessageBox.Show($"当前为密码框模式，掩码字符：{pwdChar}");
    }
}
```

#### 三、PasswordChar的核心实用场景
##### 1. 基础密码输入框（带长度校验）
结合`MaxLength`和`TextChanged`，实现带长度提示的密码输入框：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    textBoxPwd.PasswordChar = '*';
    textBoxPwd.MaxLength = 16;
    textBoxPwd.PlaceholderText = "请输入密码";
}

// 实时显示密码长度
private void textBoxPwd_TextChanged(object sender, EventArgs e)
{
    int currentLen = textBoxPwd.TextLength;
    int maxLen = textBoxPwd.MaxLength;
    labelPwdTip.Text = $"密码长度：{currentLen}/{maxLen}";
    
    // 长度不足6位标橙，达标标绿
    labelPwdTip.ForeColor = currentLen >= 6 ? Color.Green : Color.Orange;
}
```

##### 2. 密码显隐切换（结合CheckBox）
用CheckBox替代按钮，实现更直观的密码显隐切换（常见于登录界面）：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    textBoxPwd.PasswordChar = '*';
    // 绑定CheckBox的状态变更事件
    checkBoxShowPwd.CheckedChanged += CheckBoxShowPwd_CheckedChanged;
    checkBoxShowPwd.Text = "显示密码";
}

// CheckBox状态变更时切换密码显隐
private void CheckBoxShowPwd_CheckedChanged(object sender, EventArgs e)
{
    CheckBox cb = sender as CheckBox;
    if (cb != null)
    {
        // 勾选则显示明文，否则显示掩码
        textBoxPwd.PasswordChar = cb.Checked ? '\0' : '*';
    }
}
```

##### 3. 区分PasswordChar和UseSystemPasswordChar
WinForm还提供`UseSystemPasswordChar`（布尔属性），用于使用系统默认密码掩码字符，两者核心区别和优先级如下：
| 特性                | `PasswordChar`                | `UseSystemPasswordChar`       |
|---------------------|--------------------------------|--------------------------------|
| 类型                | char（自定义字符）| bool（是否使用系统默认）|
| 优先级              | 低（UseSystemPasswordChar=true时失效） | 高（启用后覆盖PasswordChar）|
| 视觉效果            | 自定义字符（如*、●）| 系统默认掩码（通常是●，随系统主题变化） |

示例对比：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // 示例1：自定义掩码（PasswordChar）
    textBoxPwd1.PasswordChar = '*';
    textBoxPwd1.PlaceholderText = "自定义掩码（*）";

    // 示例2：系统默认掩码（UseSystemPasswordChar）
    textBoxPwd2.UseSystemPasswordChar = true;
    textBoxPwd2.PlaceholderText = "系统默认掩码（●）";

    // 示例3：两者同时设置（UseSystemPasswordChar优先级更高）
    textBoxPwd3.PasswordChar = '#'; // 该设置会被覆盖
    textBoxPwd3.UseSystemPasswordChar = true;
    textBoxPwd3.PlaceholderText = "系统掩码覆盖自定义";
}
```

#### 四、使用PasswordChar的关键注意事项
##### 1. 多行模式下PasswordChar完全无效
当`Multiline = true`时，无论设置何种`PasswordChar`值，TextBox都会显示明文（WinForm的设计限制），如需多行密码框需自定义实现（新手不推荐）：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    textBoxMultiLine.Multiline = true;
    textBoxMultiLine.Size = new Size(200, 80);
    textBoxMultiLine.PasswordChar = '*'; // 无效！多行模式仍显示明文
    textBoxMultiLine.Text = "多行密码框无效示例";
}
```

##### 2. Text属性始终存储明文
无论是否设置`PasswordChar`，`Text`属性都存储用户输入的**原始明文**，仅界面显示掩码——读取密码时直接取`Text`即可，无需解密：
```csharp
private void btnGetPwd_Click(object sender, EventArgs e)
{
    // 读取真实密码（明文）
    string realPwd = textBoxPwd.Text;
    // 展示密码（用*替代显示，保护隐私）
    MessageBox.Show($"密码明文：{realPwd}\n密码掩码展示：{new string('*', realPwd.Length)}");
}
```

##### 3. 只读状态下仍可复制明文
当`ReadOnly = true`时，用户无法编辑密码，但仍可选中/复制文本（复制的是明文，而非掩码字符）；若需禁止复制，需结合`Enabled = false`：
```csharp
// 只读状态：可复制明文
textBoxPwd.ReadOnly = true;
textBoxPwd.PasswordChar = '*';
textBoxPwd.Focus(); // 可聚焦，选中后Ctrl+C复制明文

// 禁用状态：不可复制，灰显
textBoxPwd.Enabled = false;
textBoxPwd.PasswordChar = '*';
textBoxPwd.Focus(); // 无法聚焦，无法复制
```

##### 4. 空字符的正确设置方式
设置`PasswordChar`为明文模式时，需赋值`\0`（空字符），而非`' '`（空格）：
```csharp
// ✅ 正确：清空掩码，显示明文
textBoxPwd.PasswordChar = '\0';

// ❌ 错误：掩码变为空格，仍隐藏明文（用户输入的每个字符显示为空格）
textBoxPwd.PasswordChar = ' ';
```

#### 总结
1. `PasswordChar`是char类型属性，用于设置密码掩码字符，默认`\0`（明文），仅单行模式生效；
2. 核心用法：静态设置密码掩码、动态切换密码显隐（按钮/CheckBox），结合`MaxLength`限制密码长度；
3. 关键优先级：`UseSystemPasswordChar = true`时会覆盖`PasswordChar`的自定义设置；
4. 核心注意：`Text`始终存储明文，多行模式下`PasswordChar`无效，只读状态仍可复制明文。

---

### 5.Multiline属性
你想掌握WinForm中TextBox控件的`Multiline`属性用法，包括核心作用、开启/关闭后的效果差异、单行/多行模式的行为区别，以及结合滚动条、换行符等的实用场景和关键注意事项，对吧？

#### 一、Multiline属性核心定义
TextBox的`Multiline`属性是**可读可写的布尔类型（bool）属性**，核心作用是控制TextBox是否允许输入/显示**多行文本**：
- 默认值：`false`（单行模式）—— 文本仅在一行显示，超出宽度会横向滚动（无滚动条），Enter键视为“确认”（触发窗体默认按钮），且无法手动调整TextBox的高度（Size.Height失效）；
- 设为`true`（多行模式）—— 支持文本换行显示，Enter键触发换行，可自由调整TextBox的高度（Size.Height生效），还能配合`ScrollBars`属性显示滚动条，`AutoSize`属性对多行模式完全无效（必须手动设置Size）。

#### 二、Multiline属性基础用法（附代码示例）
##### 1. 静态设置多行模式（窗体加载时）
初始化时开启多行模式，适配备注、留言等需输入长文本的场景：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // 示例1：基础多行文本框（带垂直滚动条）
    textBoxRemark.Multiline = true; // 开启多行模式
    textBoxRemark.Size = new Size(300, 120); // 手动设置宽高（多行模式Height生效）
    textBoxRemark.ScrollBars = ScrollBars.Vertical; // 仅显示垂直滚动条（文本超高度时出现）
    textBoxRemark.MaxLength = 500; // 限制最大字符数（.NET 4.0+对多行生效）
    textBoxRemark.PlaceholderText = "请输入备注（最多500字，支持换行）";
    // 初始化多行文本（用Environment.NewLine换行，跨平台兼容）
    textBoxRemark.Text = $"初始备注：{Environment.NewLine}1. 无特殊要求{Environment.NewLine}2. 可换行输入详细信息";

    // 示例2：单行模式（默认，可省略Multiline=false）
    textBoxSingleLine.Multiline = false;
    textBoxSingleLine.Size = new Size(300, 25); // 单行模式Height仅显示一行高度
    textBoxSingleLine.PlaceholderText = "单行输入框（Enter键触发确认）";
}
```

##### 2. 动态切换单行/多行模式（按钮点击）
根据业务需求临时切换模式（如普通输入/长文本编辑）：
```csharp
// 点击按钮切换单行/多行模式
private void btnToggleMultiline_Click(object sender, EventArgs e)
{
    // 切换Multiline状态
    textBoxDemo.Multiline = !textBoxDemo.Multiline;

    if (textBoxDemo.Multiline)
    {
        // 切换为多行：调整尺寸、显示滚动条、提示换行
        textBoxDemo.Size = new Size(300, 120);
        textBoxDemo.ScrollBars = ScrollBars.Vertical;
        textBoxDemo.PlaceholderText = "当前为多行模式（Enter键换行）";
        btnToggleMultiline.Text = "切换为单行模式";
    }
    else
    {
        // 切换为单行：恢复单行尺寸、隐藏滚动条、提示Enter确认
        textBoxDemo.Size = new Size(300, 25);
        textBoxDemo.ScrollBars = ScrollBars.None;
        textBoxDemo.PlaceholderText = "当前为单行模式（Enter键确认）";
        btnToggleMultiline.Text = "切换为多行模式";
    }
}
```

##### 3. 读取Multiline状态（判断当前模式）
读取状态用于业务逻辑校验（如仅对多行文本框统计行数）：
```csharp
private void btnCheckMode_Click(object sender, EventArgs e)
{
    bool isMultiline = textBoxRemark.Multiline;
    string modeDesc = isMultiline ? "多行模式" : "单行模式";
    MessageBox.Show($"TextBox当前模式：{modeDesc}\n可输入行数：{(isMultiline ? "无限制（带滚动条）" : "仅1行")}");
}
```

#### 三、Multiline属性的核心实用场景
##### 1. 多行备注/留言框（最常用）
结合`ScrollBars`、`MaxLength`和`TextChanged`，实现带行数/字符数统计的多行输入框：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    textBoxComment.Multiline = true;
    textBoxComment.Size = new Size(350, 150);
    textBoxComment.ScrollBars = ScrollBars.Vertical;
    textBoxComment.MaxLength = 1000;
    // 绑定文本变化事件，实时统计
    textBoxComment.TextChanged += TextBoxComment_TextChanged;
}

// 实时统计行数和字符数
private void TextBoxComment_TextChanged(object sender, EventArgs e)
{
    TextBox tb = sender as TextBox;
    if (tb == null) return;

    // 统计字符数（含换行符）
    int charCount = tb.TextLength;
    int maxChar = tb.MaxLength;
    // 统计行数（按换行符拆分）
    string[] lines = tb.Text.Split(new[] { Environment.NewLine }, StringSplitOptions.None);
    int lineCount = lines.Length;

    // 显示统计信息
    labelStat.Text = $"行数：{lineCount} | 字符数：{charCount}/{maxChar}";
    // 字符数超限时标红
    labelStat.ForeColor = charCount >= maxChar ? Color.Red : Color.Black;
}
```

##### 2. 读取/拆分多行文本
多行模式下，可按换行符拆分文本为单行数组，便于批量处理（如导入/导出文本）：
```csharp
// 读取并拆分多行文本
private void btnReadMultiText_Click(object sender, EventArgs e)
{
    if (!textBoxComment.Multiline)
    {
        MessageBox.Show("当前为单行模式，无多行文本可拆分");
        return;
    }

    string multiText = textBoxComment.Text;
    // 按系统换行符拆分（避免跨平台问题）
    string[] lines = multiText.Split(new[] { Environment.NewLine }, StringSplitOptions.RemoveEmptyEntries);

    // 拼接拆分结果
    string result = "多行文本拆分结果：\n";
    for (int i = 0; i < lines.Length; i++)
    {
        result += $"第{i+1}行：{lines[i]}\n";
    }
    labelResult.Text = result;
}
```

##### 3. 调整Enter键行为
多行模式下Enter键默认换行，单行模式下Enter键触发窗体“默认按钮”（如提交按钮），可通过代码自定义该行为：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // 单行输入框：Enter键触发提交
    textBoxSingleLine.Multiline = false;
    textBoxSingleLine.KeyDown += TextBoxSingleLine_KeyDown;

    // 多行输入框：Enter键换行（默认行为，无需额外处理）
    textBoxMultiLine.Multiline = true;
}

// 单行模式下，Enter键触发提交按钮点击
private void TextBoxSingleLine_KeyDown(object sender, KeyEventArgs e)
{
    if (e.KeyCode == Keys.Enter)
    {
        btnSubmit.PerformClick(); // 模拟点击提交按钮
        e.SuppressKeyPress = true; // 阻止Enter键的默认音效
    }
}

// 提交按钮逻辑
private void btnSubmit_Click(object sender, EventArgs e)
{
    MessageBox.Show($"提交内容：{textBoxSingleLine.Text}");
}
```

#### 四、使用Multiline的关键注意事项
##### 1. PasswordChar在多行模式下完全无效
这是WinForm的核心设计规则：当`Multiline = true`时，无论是否设置`PasswordChar`/`UseSystemPasswordChar`，TextBox都会显示明文，无法实现“多行密码框”：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    textBoxPwdMulti.Multiline = true;
    textBoxPwdMulti.PasswordChar = '*'; // 无效！多行模式仍显示明文
    textBoxPwdMulti.Text = "多行密码无效示例\n第二行明文";
}
```

##### 2. AutoSize对多行模式无效
单行模式下`AutoSize = true`（默认）会自动调整宽度适配文本，但多行模式下`AutoSize`完全失效，必须**手动设置Size**（尤其是Height），否则TextBox会保持默认高度（仅能显示一行）：
```csharp
// ❌ 错误：多行模式下AutoSize=true无效，Height仍为默认值
textBoxMulti.AutoSize = true;
textBoxMulti.Multiline = true;

// ✅ 正确：手动设置Size，指定宽高
textBoxMulti.AutoSize = false; // 显式关闭（可选，多行模式默认忽略）
textBoxMulti.Multiline = true;
textBoxMulti.Size = new Size(300, 120);
```

##### 3. Enter键与AcceptsReturn属性
- 默认：`Multiline = true`时`AcceptsReturn = true`（Enter键换行），`Multiline = false`时`AcceptsReturn = false`（Enter键触发默认按钮）；
- 自定义：可手动设置`AcceptsReturn`覆盖默认行为（如多行模式下禁止Enter换行）：
  ```csharp
  // 多行模式下禁止Enter换行（Enter键触发提交）
  textBoxMultiLine.AcceptsReturn = false;
  textBoxMultiLine.KeyDown += (s, e) => {
      if (e.KeyCode == Keys.Enter) btnSubmit.PerformClick();
  };
  ```

##### 4. 换行符的正确使用
多行文本的换行符推荐用`Environment.NewLine`（跨Windows/Linux兼容），而非硬编码`\r\n`（仅Windows有效）：
```csharp
// ✅ 推荐：跨平台兼容
textBoxMulti.Text = $"第一行{Environment.NewLine}第二行{Environment.NewLine}第三行";

// ❌ 不推荐：仅Windows有效
// textBoxMulti.Text = "第一行\r\n第二行\r\n第三行";
```

##### 5. 滚动条的配合使用
多行模式下建议配合`ScrollBars`属性，避免文本超出控件范围无法查看：
- `ScrollBars.None`：无滚动条（文本超尺寸时被截断）；
- `ScrollBars.Vertical`：仅垂直滚动条（推荐，适配长文本）；
- `ScrollBars.Horizontal`：仅水平滚动条（文本不换行时使用）；
- `ScrollBars.Both`：水平+垂直滚动条（适配无规则长文本）。

#### 总结
1. `Multiline`是布尔属性，默认`false`（单行），设为`true`时支持多行文本、调整高度、Enter键换行，`AutoSize`失效；
2. 核心用法：多行备注/留言框（结合`ScrollBars`/`MaxLength`）、读取/拆分多行文本、自定义Enter键行为；
3. 关键限制：`PasswordChar`在多行模式下无效，必须手动设置`Size`，换行符优先用`Environment.NewLine`；
4. 行为差异：单行模式Enter键触发默认按钮，多行模式Enter键默认换行（可通过`AcceptsReturn`调整）。

---

### 6.SelectedText属性
你想掌握WinForm中TextBox控件的`SelectedText`属性用法，包括核心作用、读取/修改选中文本的方式、实用场景（如替换选中内容、自定义复制粘贴），以及和`Text`属性的区别、使用时的关键注意事项，对吧？

#### 一、SelectedText属性核心定义
TextBox的`SelectedText`属性是**可读可写的字符串类型属性**，核心作用是：
- 读取：获取当前被用户选中（鼠标拖动/键盘选择）的文本片段；
- 设置：用新字符串**替换**当前选中的文本（无选中时，新内容会直接插入到光标所在位置）。
- 核心特征：
  - 无选中文本时，读取返回空字符串（`""`）；
  - 赋值后选中状态会自动取消，光标移至新内容的末尾；
  - 支持单行/多行模式，跨行吗本的选中和替换规则一致；
  - 仅依赖“选中状态”，不受`MaxLength`直接限制（但最终`Text`总长度仍需符合`MaxLength`）。

#### 二、SelectedText属性基础用法（附代码示例）
##### 1. 读取选中的文本（最基础用法）
获取用户选中的文本片段，用于复制、校验、替换等逻辑：
```csharp
private void btnReadSelected_Click(object sender, EventArgs e)
{
    // 读取当前选中的文本
    string selected = textBoxDemo.SelectedText;
    
    if (string.IsNullOrEmpty(selected))
    {
        MessageBox.Show("未选中任何文本！");
    }
    else
    {
        MessageBox.Show($"选中的文本：{selected}\n选中长度：{selected.Length}");
    }
}
```

##### 2. 替换选中的文本（核心场景）
用指定内容替换选中的文本，无选中时插入到光标位置：
```csharp
// 示例1：将选中的文本替换为【已替换】
private void btnReplaceSelected_Click(object sender, EventArgs e)
{
    if (string.IsNullOrEmpty(textBoxDemo.SelectedText))
    {
        MessageBox.Show("请先选中需要替换的文本！");
        return;
    }
    
    // 替换选中的文本
    textBoxDemo.SelectedText = "【已替换】";
    // 替换后选中状态消失，光标移至替换内容末尾
}

// 示例2：无选中时，插入固定内容到光标位置
private void btnInsertText_Click(object sender, EventArgs e)
{
    // 无论是否选中，直接赋值SelectedText：有选中则替换，无选中则插入
    textBoxDemo.SelectedText = $"[{DateTime.Now:HH:mm:ss}] ";
}
```

##### 3. 清空选中的文本
通过赋值空字符串，快速删除选中的文本：
```csharp
private void btnDeleteSelected_Click(object sender, EventArgs e)
{
    if (string.IsNullOrEmpty(textBoxDemo.SelectedText))
    {
        MessageBox.Show("未选中任何文本，无需删除！");
        return;
    }
    
    // 赋值空字符串，删除选中的文本
    textBoxDemo.SelectedText = "";
}
```

#### 三、SelectedText的核心实用场景
##### 1. 自定义复制/剪切/粘贴功能
结合`SelectedText`实现自定义的复制、剪切、粘贴逻辑（替代系统快捷键）：
```csharp
// 自定义复制：将选中的文本复制到剪贴板
private void btnCopy_Click(object sender, EventArgs e)
{
    if (!string.IsNullOrEmpty(textBoxDemo.SelectedText))
    {
        Clipboard.SetText(textBoxDemo.SelectedText);
        MessageBox.Show("复制成功！");
    }
    else
    {
        MessageBox.Show("无选中文本可复制！");
    }
}

// 自定义剪切：复制+删除选中的文本
private void btnCut_Click(object sender, EventArgs e)
{
    if (!string.IsNullOrEmpty(textBoxDemo.SelectedText))
    {
        Clipboard.SetText(textBoxDemo.SelectedText);
        textBoxDemo.SelectedText = ""; // 删除选中的文本
        MessageBox.Show("剪切成功！");
    }
    else
    {
        MessageBox.Show("无选中文本可剪切！");
    }
}

// 自定义粘贴：将剪贴板内容插入到光标/替换选中文本
private void btnPaste_Click(object sender, EventArgs e)
{
    if (Clipboard.ContainsText())
    {
        string pasteText = Clipboard.GetText();
        textBoxDemo.SelectedText = pasteText; // 插入/替换
        MessageBox.Show("粘贴成功！");
    }
    else
    {
        MessageBox.Show("剪贴板中无文本可粘贴！");
    }
}
```

##### 2. 批量替换选中的敏感词
对选中的文本进行关键词替换（如过滤敏感词、统一格式）：
```csharp
// 替换选中文本中的敏感词（示例：将"测试"替换为"示例"）
private void btnReplaceSensitive_Click(object sender, EventArgs e)
{
    string selected = textBoxDemo.SelectedText;
    if (string.IsNullOrEmpty(selected))
    {
        MessageBox.Show("请先选中文本！");
        return;
    }
    
    // 替换敏感词
    string newText = selected.Replace("测试", "示例");
    textBoxDemo.SelectedText = newText;
    MessageBox.Show("敏感词替换完成！");
}
```

##### 3. 全选文本后操作（结合SelectAll()）
先通过`SelectAll()`选中全部文本，再用`SelectedText`批量修改：
```csharp
// 全选文本并转换为大写
private void btnToUpper_Click(object sender, EventArgs e)
{
    if (string.IsNullOrEmpty(textBoxDemo.Text))
    {
        MessageBox.Show("文本框为空！");
        return;
    }
    
    textBoxDemo.SelectAll(); // 选中全部文本
    textBoxDemo.SelectedText = textBoxDemo.SelectedText.ToUpper(); // 转换为大写
}

// 全选文本并清空
private void btnClearAll_Click(object sender, EventArgs e)
{
    textBoxDemo.SelectAll();
    textBoxDemo.SelectedText = ""; // 等价于textBoxDemo.Clear()
}
```

##### 4. 定位光标后插入固定内容
结合`SelectionStart`（光标位置）和`SelectedText`，在指定位置插入内容：
```csharp
// 在文本开头插入标题
private void btnInsertTitle_Click(object sender, EventArgs e)
{
    // 将光标移至文本开头
    textBoxDemo.SelectionStart = 0;
    // 取消选中（避免替换原有文本）
    textBoxDemo.SelectionLength = 0;
    // 插入标题
    textBoxDemo.SelectedText = "【备注】";
}
```

#### 四、使用SelectedText的关键注意事项
##### 1. 核心区别：SelectedText vs Text（新手易混淆）
| 特性                | `SelectedText`                          | `Text`                          |
|---------------------|-----------------------------------------|---------------------------------|
| 作用                | 仅操作**选中的文本片段**（无选中则插入） | 操作**全部文本内容**            |
| 赋值效果            | 替换选中文本/插入到光标位置             | 覆盖整个文本内容                |
| 无选中时读取        | 返回空字符串                            | 返回全部文本                    |
| 选中全文本时赋值    | 替换全部文本（等价于Text赋值）| 覆盖全部文本                    |

示例对比：
```csharp
// 假设TextBox.Text = "Hello World"，选中了"World"
textBoxDemo.SelectedText = "CSharp"; // 结果：Text = "Hello CSharp"
textBoxDemo.Text = "CSharp"; // 结果：Text = "CSharp"（覆盖全部）
```

##### 2. 只读/禁用状态的影响
- `ReadOnly = true`：仍可读取/修改`SelectedText`（选中、替换、插入都生效），但用户无法手动输入；
- `Enabled = false`：完全无法操作`SelectedText`（读取为空，赋值无效），控件灰显且无光标。

示例：
```csharp
textBoxDemo.ReadOnly = true;
textBoxDemo.SelectAll();
textBoxDemo.SelectedText = "只读状态仍可替换文本"; // 生效！
```

##### 3. MaxLength的间接限制
`SelectedText`赋值时，不会直接校验长度，但最终`Text`的总长度需符合`MaxLength`：
- 若替换/插入后总长度超过`MaxLength`，超出部分会被自动截断；
- 示例：`MaxLength=5`，当前`Text="123"`，选中`"3"`后赋值`"456"` → 最终`Text="12456"`（刚好5位）。

##### 4. 多行模式下的选中规则
多行模式下，`SelectedText`支持跨行吗本的选中和替换，换行符会被包含在选中内容中：
```csharp
// 多行文本："第一行\n第二行\n第三行"，选中第二行
textBoxDemo.SelectedText = "替换后的第二行"; 
// 结果："第一行\n替换后的第二行\n第三行"
```

##### 5. 赋值后选中状态消失
对`SelectedText`赋值后，无论是否有选中文本，选中状态都会被取消，光标会移至新内容的末尾：
```csharp
textBoxDemo.SelectAll(); // 选中全部文本
textBoxDemo.SelectedText = "新内容"; // 赋值后选中状态消失，光标在"新内容"末尾
```

#### 总结
1. `SelectedText`是TextBox的可读可写字符串属性，核心用于获取/替换选中的文本，无选中时赋值会插入到光标位置；
2. 核心用法：自定义复制/剪切/粘贴、替换选中内容、全选文本批量修改、光标定位插入内容；
3. 关键区别：和`Text`（全部文本）区分开，`ReadOnly=true`时仍可操作，`Enabled=false`时完全不可用；
4. 注意事项：赋值后选中状态消失，`MaxLength`会间接限制最终文本长度，多行模式支持跨行选中替换。

---

### 7.TextLength属性
你想掌握WinForm中TextBox控件的`TextLength`属性用法，包括核心作用、读取方式、实用场景（如实时显示输入长度、校验文本长度），以及和`Text.Length`的区别、使用时的关键注意事项，对吧？

#### 一、TextLength属性核心定义
TextBox的`TextLength`属性是**只读的整型（int）属性**，核心作用是**实时获取`Text`属性中包含的字符总数**（涵盖字母、数字、中文、空格、换行符、特殊符号等所有字符）：
- 默认值：`0`（TextBox为空时）；
- 核心特征：
  - 只读属性，无法手动赋值（如`textBox1.TextLength = 10;`会编译报错）；
  - 实时同步：`Text`内容变化时，`TextLength`会立即更新，无需手动刷新；
  - 性能优势：相比`textBox1.Text.Length`，`TextLength`是控件内部维护的数值，直接读取无需创建字符串副本，大文本场景下更高效；
  - 全场景生效：单行/多行、密码框、只读状态下均能准确返回真实文本长度。

#### 二、TextLength属性基础用法（附代码示例）
##### 1. 基础读取：获取当前文本长度
最核心的基础用法，直接读取`TextLength`值，用于展示、校验等逻辑：
```csharp
private void btnGetTextLength_Click(object sender, EventArgs e)
{
    // 读取当前文本长度（无需先获取Text，直接读属性）
    int currentLength = textBoxDemo.TextLength;
    
    // 对比Text.Length（结果一致，但性能不同）
    int textLength = textBoxDemo.Text.Length;
    
    MessageBox.Show(
        $"当前文本长度：{currentLength} 个字符\n" +
        $"Text.Length对比：{textLength} 个字符\n" +
        $"两者结果：{(currentLength == textLength ? "一致" : "不一致")}"
    );
}
```

##### 2. 实时显示输入长度（结合TextChanged事件）
这是`TextLength`最常用的场景，实时反馈用户输入的字符数（配合`MaxLength`效果更佳）：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // 初始化：设置最大长度，绑定文本变化事件
    textBoxInput.Multiline = false;
    textBoxInput.MaxLength = 50;
    textBoxInput.PlaceholderText = "请输入内容（最多50字符）";
    textBoxInput.TextChanged += TextBoxInput_TextChanged;
}

// 文本变化时，实时更新长度提示
private void TextBoxInput_TextChanged(object sender, EventArgs e)
{
    TextBox tb = sender as TextBox;
    if (tb == null) return;
    
    // 读取TextLength，显示已输入/最大长度
    labelLengthTip.Text = $"已输入：{tb.TextLength}/{tb.MaxLength} 字符";
    
    // 视觉提示：长度不足6位标橙，达标标绿，满额标红
    if (tb.TextLength == 0)
    {
        labelLengthTip.ForeColor = Color.Black;
    }
    else if (tb.TextLength < 6)
    {
        labelLengthTip.ForeColor = Color.Orange;
    }
    else if (tb.TextLength == tb.MaxLength)
    {
        labelLengthTip.ForeColor = Color.Red;
    }
    else
    {
        labelLengthTip.ForeColor = Color.Green;
    }
}
```

#### 三、TextLength的核心实用场景
##### 1. 文本长度校验（非空/最小/最大）
替代`Text.Length`进行长度校验，逻辑更简洁、性能更优：
```csharp
// 提交时校验文本长度
private void btnSubmit_Click(object sender, EventArgs e)
{
    // 1. 校验非空（TextLength=0等价于Text为空）
    if (textBoxInput.TextLength == 0)
    {
        MessageBox.Show("输入内容不能为空！");
        return;
    }
    
    // 2. 校验最小长度
    const int minLength = 6;
    if (textBoxInput.TextLength < minLength)
    {
        MessageBox.Show($"输入内容不能少于{minLength}个字符！");
        return;
    }
    
    // 3. 校验最大长度（实际不会触发，因MaxLength会自动截断）
    if (textBoxInput.TextLength > textBoxInput.MaxLength)
    {
        MessageBox.Show($"输入内容不能超过{textBoxInput.MaxLength}个字符！");
        return;
    }
    
    // 校验通过，提交内容
    MessageBox.Show($"提交成功！内容长度：{textBoxInput.TextLength} 字符");
}
```

##### 2. 多行文本的行数+字符数双统计
结合换行符拆分，同时统计行数和总字符数（`TextLength`包含换行符）：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    textBoxMultiLine.Multiline = true;
    textBoxMultiLine.ScrollBars = ScrollBars.Vertical;
    textBoxMultiLine.TextChanged += TextBoxMultiLine_TextChanged;
}

// 多行文本：统计行数+总字符数
private void TextBoxMultiLine_TextChanged(object sender, EventArgs e)
{
    TextBox tb = sender as TextBox;
    if (tb == null) return;
    
    // 总字符数（包含换行符）
    int totalChars = tb.TextLength;
    // 行数（按系统换行符拆分）
    string[] lines = tb.Text.Split(new[] { Environment.NewLine }, StringSplitOptions.None);
    int lineCount = lines.Length;
    
    labelMultiTip.Text = $"总行数：{lineCount} | 总字符数：{totalChars}（含换行符）";
}
```

##### 3. 密码框的真实长度校验
密码框中`TextLength`返回**真实明文的字符数**（不受`PasswordChar`掩码影响），可用于密码长度校验：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    textBoxPwd.PasswordChar = '*';
    textBoxPwd.MaxLength = 16;
    textBoxPwd.TextChanged += TextBoxPwd_TextChanged;
}

// 密码长度实时校验
private void TextBoxPwd_TextChanged(object sender, EventArgs e)
{
    TextBox tb = sender as TextBox;
    labelPwdTip.Text = $"密码长度：{tb.TextLength}/16";
    labelPwdTip.ForeColor = tb.TextLength >= 8 ? Color.Green : Color.Orange;
}
```

##### 4. 大文本场景的高效长度读取
当TextBox包含上万字符的大文本时，`TextLength`的性能优势尤为明显（避免创建字符串副本）：
```csharp
// 模拟大文本场景，对比性能
private void btnBigTextTest_Click(object sender, EventArgs e)
{
    // 生成10万字符的大文本
    string bigText = new string('a', 100000);
    textBoxBigText.Text = bigText;
    
    // 测试TextLength读取耗时
    Stopwatch sw1 = Stopwatch.StartNew();
    int len1 = textBoxBigText.TextLength;
    sw1.Stop();
    
    // 测试Text.Length读取耗时
    Stopwatch sw2 = Stopwatch.StartNew();
    int len2 = textBoxBigText.Text.Length;
    sw2.Stop();
    
    MessageBox.Show(
        $"大文本长度：{len1} 字符\n" +
        $"TextLength读取耗时：{sw1.Elapsed.TotalMilliseconds:F4} ms\n" +
        $"Text.Length读取耗时：{sw2.Elapsed.TotalMilliseconds:F4} ms\n" +
        $"性能差异：TextLength快 {(sw2.Elapsed.TotalMilliseconds / sw1.Elapsed.TotalMilliseconds):F2} 倍"
    );
}
```

#### 四、使用TextLength的关键注意事项
##### 1. 核心区别：TextLength vs Text.Length
新手极易混淆两者，核心差异和选择原则如下：
| 特性                | `TextLength`                          | `Text.Length`                          |
|---------------------|---------------------------------------|----------------------------------------|
| 类型                | 控件只读属性                          | 字符串实例属性                         |
| 读取逻辑            | 直接读取控件内部维护的数值            | 先创建`Text`字符串副本，再取长度       |
| 性能                | 高效（尤其大文本）| 低效（大文本时创建副本耗时）|
| 结果                | 与`Text.Length`完全一致               | 与`TextLength`完全一致                 |
| 适用场景            | 所有长度读取场景（推荐）| 仅需同时操作字符串时使用               |

**选择原则**：仅需获取长度时，优先用`TextLength`；需同时对`Text`字符串做拆分/替换等操作时，再用`Text.Length`。

##### 2. 只读属性，无法赋值
`TextLength`是只读属性，任何手动赋值的尝试都会编译报错：
```csharp
// ❌ 错误：编译报错（属性或索引器“TextBox.TextLength”无法赋值 -- 它是只读的）
textBox1.TextLength = 10;

// ✅ 正确：修改文本长度需通过Text属性
textBox1.Text = "新文本"; // TextLength会自动更新为4
```

##### 3. 包含所有字符（包括换行符/空格）
`TextLength`会统计**所有字符**，包括：
- 空格、制表符（`\t`）；
- 换行符（Windows下`\r\n`算2个字符，`Environment.NewLine`等价于`\r\n`）；
- 特殊符号（如`!@#$%^&*`）。

示例：
```csharp
textBox1.Text = "第一行\r\n第二行"; // 内容：第一行+换行+第二行
MessageBox.Show($"TextLength：{textBox1.TextLength}"); // 输出：7（第一行3 + \r\n2 + 第二行2）
```

##### 4. 只读/禁用状态的影响
- `ReadOnly = true`：`TextLength`仍实时更新（程序修改`Text`时，长度同步变化）；
- `Enabled = false`：`TextLength`仍返回当前文本长度（仅无法修改`Text`，读取不受影响）。

##### 5. MaxLength的自动截断
当通过代码赋值超过`MaxLength`的文本时，`Text`会被自动截断，`TextLength`返回截断后的真实长度：
```csharp
textBox1.MaxLength = 5;
textBox1.Text = "123456789"; // 赋值9个字符，自动截断为5个
MessageBox.Show($"截断后TextLength：{textBox1.TextLength}"); // 输出：5
```

#### 总结
1. `TextLength`是TextBox的只读整型属性，核心作用是**实时、高效获取Text的字符总数**，无法手动赋值；
2. 核心用法：实时显示输入长度、校验文本长度（非空/最小/最大）、多行文本统计、大文本场景高效读取；
3. 关键优势：相比`Text.Length`，无需创建字符串副本，大文本场景性能更优；
4. 注意事项：包含所有字符（换行符/空格等），密码框中返回真实明文长度，只读/禁用状态下仍可读取。

---

### 8.TabIndex属性

你想掌握WinForm中TextBox控件的`TabIndex`属性用法，包括核心作用、设置/修改Tab键切换焦点顺序的方式、容器嵌套场景的表现，以及结合`TabStop`的实用场景和关键注意事项，对吧？

#### 一、TabIndex属性核心定义
TextBox的`TabIndex`属性是**可读可写的整型（int）属性**，核心作用是：
控制控件在**同一容器内**（窗体/Panel/GroupBox等）按`Tab`键（向前）/`Shift+Tab`键（向后）切换焦点的顺序。
- 默认值：由控件添加到容器的顺序自动分配（从0开始递增，比如先加的TextBox1.TabIndex=0，后加的TextBox2.TabIndex=1）；
- 取值规则：
  - 仅支持≥0的整数，设置为负数会被自动重置为0；
  - 同一容器内建议保证`TabIndex`唯一（重复时运行时会自动调整，可能导致切换顺序混乱）；
- 容器独立性：`TabIndex`是**相对于直接父容器**的——比如Panel里的TextBox，其`TabIndex`仅和Panel内的其他控件排序，与窗体上的控件无关。

#### 二、TabIndex属性基础用法（附代码示例）
##### 1. 静态设置Tab顺序（窗体加载时）
按业务逻辑手动设置`TabIndex`，让Tab键切换符合用户操作习惯（如登录界面：用户名→密码→验证码→提交按钮）：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // 登录界面控件Tab顺序规划：
    // 1. 用户名TextBox（TabIndex=0）
    textBoxUserName.TabIndex = 0;
    textBoxUserName.PlaceholderText = "请输入用户名";
    
    // 2. 密码TextBox（TabIndex=1）
    textBoxPwd.TabIndex = 1;
    textBoxPwd.PasswordChar = '*';
    
    // 3. 验证码TextBox（TabIndex=2）
    textBoxVerifyCode.TabIndex = 2;
    textBoxVerifyCode.MaxLength = 6;
    
    // 4. 提交按钮（TabIndex=3，按钮也有TabIndex）
    btnSubmit.TabIndex = 3;

    // 额外：设置默认聚焦到用户名框
    textBoxUserName.Focus();
}
```
此时按`Tab`键，焦点会按「用户名→密码→验证码→提交按钮」的顺序切换；按`Shift+Tab`则反向切换。

##### 2. 动态修改TabIndex（业务触发）
根据业务场景调整Tab顺序（比如权限不足时，跳过验证码输入框）：
```csharp
// 模拟：无权限时，跳过验证码输入框（调整Tab顺序）
private void btnChangeTabOrder_Click(object sender, EventArgs e)
{
    // 隐藏验证码框，并调整后续控件的TabIndex
    textBoxVerifyCode.Visible = false;
    // 让提交按钮的TabIndex变为2，接在密码框（1）之后
    btnSubmit.TabIndex = 2;

    MessageBox.Show("已跳过验证码输入框，Tab顺序变为：用户名→密码→提交按钮");
}
```

##### 3. 读取TabIndex值（判断切换顺序）
读取控件的`TabIndex`，用于校验或展示Tab顺序：
```csharp
private void btnReadTabIndex_Click(object sender, EventArgs e)
{
    string tabOrder = "当前Tab顺序：\n";
    tabOrder += $"用户名框：TabIndex={textBoxUserName.TabIndex}\n";
    tabOrder += $"密码框：TabIndex={textBoxPwd.TabIndex}\n";
    tabOrder += $"验证码框：TabIndex={textBoxVerifyCode.TabIndex}\n";
    tabOrder += $"提交按钮：TabIndex={btnSubmit.TabIndex}";
    
    MessageBox.Show(tabOrder);
}
```

#### 三、TabIndex的核心实用场景
##### 1. 业务逻辑化的Tab顺序（最常用）
按用户操作流程设置Tab顺序，提升交互体验——比如表单填写界面，按「姓名→手机号→地址→备注→提交」的逻辑排序：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // 表单填写Tab顺序
    textBoxName.TabIndex = 0;       // 姓名
    textBoxPhone.TabIndex = 1;      // 手机号
    textBoxAddress.TabIndex = 2;    // 地址
    textBoxRemark.TabIndex = 3;     // 备注（多行）
    btnSubmitForm.TabIndex = 4;     // 提交按钮
}
```

##### 2. 容器嵌套时的Tab顺序（Panel/GroupBox）
子容器（如Panel）内的控件`TabIndex`是**独立排序**的，焦点先在父容器（窗体）的控件间切换，进入子容器后再按子容器内的TabIndex切换：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    // 父容器（窗体）的控件：TabIndex=0
    textBoxOutside.TabIndex = 0;
    textBoxOutside.PlaceholderText = "窗体上的TextBox（TabIndex=0）";

    // 创建Panel（子容器）
    Panel panel = new Panel();
    panel.Size = new Size(300, 100);
    panel.Location = new Point(20, 50);
    panel.BorderStyle = BorderStyle.FixedSingle;
    this.Controls.Add(panel);

    // Panel内的TextBox1：相对于Panel的TabIndex=0
    TextBox tb1 = new TextBox();
    tb1.PlaceholderText = "Panel内TextBox1（TabIndex=0）";
    tb1.TabIndex = 0;
    panel.Controls.Add(tb1);

    // Panel内的TextBox2：相对于Panel的TabIndex=1
    TextBox tb2 = new TextBox();
    tb2.PlaceholderText = "Panel内TextBox2（TabIndex=1）";
    tb2.Location = new Point(0, 30);
    tb2.TabIndex = 1;
    panel.Controls.Add(tb2);

    // 窗体上的按钮：TabIndex=1
    btnTest.TabIndex = 1;
}
```
此时Tab键切换顺序：  
窗体TextBox（0）→ Panel（进入子容器）→ Panel内TextBox1（0）→ Panel内TextBox2（1）→ 退出Panel → 窗体按钮（1）。

##### 3. 结合TabStop控制是否参与Tab切换
`TabStop`是bool属性（默认true），控制控件是否参与Tab键切换——即使设置了`TabIndex`，若`TabStop=false`，控件也不会被Tab键聚焦：
```csharp
private void Form1_Load(object sender, EventArgs e)
{
    textBox1.TabIndex = 0;
    textBox1.TabStop = true; // 参与Tab切换（默认）

    textBox2.TabIndex = 1;
    textBox2.TabStop = false; // 不参与Tab切换（即使TabIndex=1）

    textBox3.TabIndex = 2;
    textBox3.TabStop = true;
}
```
此时Tab键切换顺序：textBox1 → textBox3（跳过textBox2）。

##### 4. 禁用/只读状态对TabIndex的影响
- `Enabled = false`：控件禁用，**不参与Tab切换**（即使有TabIndex和TabStop=true），也无法点击聚焦；
- `ReadOnly = true`：控件只读，**仍参与Tab切换**（可通过Tab键聚焦，能选中/复制文本）。

示例：
```csharp
textBoxDisabled.TabIndex = 1;
textBoxDisabled.Enabled = false; // 不参与Tab切换

textBoxReadOnly.TabIndex = 2;
textBoxReadOnly.ReadOnly = true; // 仍参与Tab切换
```

#### 四、使用TabIndex的关键注意事项
##### 1. TabIndex仅控制Tab键顺序，不影响点击聚焦
`TabIndex`只决定按Tab键的切换顺序，用户**点击控件仍可直接聚焦**（无论TabIndex是多少）：
```csharp
// 即使textBox2.TabIndex=99（远大于textBox1的0），点击textBox2仍可直接聚焦
textBox1.TabIndex = 0;
textBox2.TabIndex = 99;
```

##### 2. 同一容器内TabIndex建议唯一
若同一容器内多个控件设置相同的TabIndex，运行时WinForm会自动调整（比如按控件添加顺序分配递增的TabIndex），可能导致预期外的切换顺序，建议手动保证唯一性。

##### 3. 取值范围限制
`TabIndex`的有效值是≥0的整数：
- 设置为负数（如-1）：会被自动重置为0；
- 设置为超大数（如999）：只要唯一，仍有效（但建议按业务逻辑从小到大设置，便于维护）。

##### 4. 动态添加控件的TabIndex
动态创建的控件，若不手动设置TabIndex，会自动分配当前容器内最大的TabIndex+1：
```csharp
// 动态添加TextBox，自动分配TabIndex
private void btnAddTextBox_Click(object sender, EventArgs e)
{
    TextBox tb = new TextBox();
    tb.Location = new Point(20, 20 + this.Controls.OfType<TextBox>().Count() * 30);
    // 不手动设置TabIndex，自动分配最大值+1
    this.Controls.Add(tb);
    MessageBox.Show($"动态TextBox的TabIndex：{tb.TabIndex}");
}
```

##### 5. 窗体的AcceptButton/CancelButton不占Tab顺序
窗体的`AcceptButton`（默认按钮，Enter键触发）和`CancelButton`（取消按钮，Esc键触发）即使有TabIndex，也不会参与Tab键切换（仅响应快捷键）。

#### 总结
1. `TabIndex`是TextBox的可读写整型属性，核心控制**同一容器内**Tab键切换焦点的顺序，默认由添加顺序分配，取值≥0；
2. 核心用法：按业务逻辑设置静态Tab顺序、动态调整Tab顺序（如隐藏控件时）、结合`TabStop`控制是否参与Tab切换；
3. 关键规则：容器嵌套时子容器内TabIndex独立排序，`Enabled=false`不参与Tab切换，`ReadOnly=true`仍参与，TabIndex仅控制Tab键，不影响点击聚焦；
4. 最佳实践：同一容器内保证TabIndex唯一，按用户操作流程从小到大设置，提升交互体验。

---

## 四、TextBox控件的事件

### 1.TextChanged事件
你想了解TextBox控件的TextChanged事件的具体用法，包括这个事件的触发时机、如何绑定事件以及编写对应的处理逻辑，对吧？

#### TextChanged事件核心概念
`TextChanged` 是TextBox控件的核心事件之一，**当TextBox中的文本内容发生任何改变时（用户输入/删除字符、程序代码修改Text属性），该事件会立即触发**。它常用来实现“实时响应”类功能，比如输入校验、实时计算、字符计数提示等。

#### 用法1：通过设计器快速绑定（新手推荐）
1. 打开WinForms窗体设计器，拖入一个TextBox控件（命名为`txtInput`）和一个Label控件（命名为`lblTip`）；
2. 选中TextBox控件，在右侧“属性”面板切换到“事件”（闪电图标）；
3. 找到`TextChanged`事件，双击右侧空白处，自动生成事件处理方法；
4. 在生成的方法中编写业务逻辑。

#### 用法2：手动代码绑定（灵活可控）
直接在窗体的构造函数/加载事件中手动绑定事件，代码如下：

```csharp
using System;
using System.Windows.Forms;

namespace TextBoxTextChangedDemo
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();

            // 手动绑定TextChanged事件（核心代码）
            txtInput.TextChanged += TxtInput_TextChanged;
        }

        // TextChanged事件处理方法
        private void TxtInput_TextChanged(object sender, EventArgs e)
        {
            // 1. 获取触发事件的TextBox控件
            TextBox txt = sender as TextBox;
            
            // 2. 空值校验（避免空引用异常）
            if (txt == null || string.IsNullOrEmpty(txt.Text))
            {
                lblTip.Text = "请输入内容";
                return;
            }

            // 3. 业务逻辑示例：实时显示输入的字符数
            lblTip.Text = $"已输入 {txt.Text.Length} 个字符";

            // 扩展示例：实时校验手机号格式（仅示例，可根据需求修改）
            if (txt.Text.Length == 11 && long.TryParse(txt.Text, out _))
            {
                lblTip.Text += " | 手机号格式初步合法";
            }
            else if (txt.Text.Length > 11)
            {
                lblTip.Text += " | 手机号长度超出限制";
            }
        }
    }
}
```

#### 关键注意事项
1. **触发频率**：每输入/删除一个字符都会触发一次，若需降低触发频率（比如输入完成后再校验），可结合`Timer`控件延迟执行；
2. **避免无限循环**：不要在`TextChanged`事件中直接修改当前TextBox的`Text`属性（比如自动补全字符），否则会再次触发事件，导致死循环。如需修改，可先解绑事件，修改后重新绑定：
   ```csharp
   // 临时解绑事件
   txtInput.TextChanged -= TxtInput_TextChanged;
   // 修改Text属性
   txtInput.Text = "修改后的内容";
   // 重新绑定事件
   txtInput.TextChanged += TxtInput_TextChanged;
   ```
3. **空值处理**：必须对`sender`转换后的TextBox和`Text`属性做空值校验，避免运行时异常。

#### 总结
1. `TextChanged`事件在TextBox文本**发生任何改变**时触发，核心用于实现实时响应类功能；
2. 绑定方式分设计器可视化绑定和代码手动绑定，新手优先用设计器，复杂场景用手动绑定；
3. 使用时需注意空值校验和避免无限循环，必要时结合Timer降低触发频率。