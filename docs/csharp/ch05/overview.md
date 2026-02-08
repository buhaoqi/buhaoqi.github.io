---
# 这部分是关键！侧边栏显示名由这里决定
title: 概述  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 概述  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---

## 高考考点

### 任务一 窗体设计
1. 掌握窗体的概念、属性、方法、事件；
2. 掌握C#窗体的创建和使用方法；
3. 掌握窗体的属性：Name、Height、Width、<strike>Visible</strike>、WindowState、<strike>Dock</strike>、Font、BackColor、ForeColor、Icon、Size；
4. 掌握窗体的常用方法：Activate、Close、Refresh、Show、Hide；
5. 掌握窗体的事件：FormClosed、FormClosing、KeyDown、KeyPress、KeyUp、 Load、MouseClick、MouseDoubleClick、MouseDown、MouseMove、MouseUp、Resize、**GiveFeedback**
6. 了解多窗体间的调用的功能实现方法；
### 任务二 常用控件
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
了解分组框(GroupBox)的属性：Text、Visible；
14. 了解选项卡(TabControl)的属性：SelectedTab、TabPages、Multiline；

### 任务三 对话框
1. 了解对话框控件、消息框。

### 任务四 文档程序设计
1. 了解多文档界面窗体；
2. 了解菜单(MainMenu)控件、ToolTip控件

## 一、窗体应用程序的项目结构

```
MyWindowsApp/                         ← 解决方案文件夹
├── MyWindowsApp.sln                  ← 解决方案文件
└── MyWindowsApp/                     ← 项目文件夹
    ├── Properties/                   ← 项目属性文件夹
    │   ├── AssemblyInfo.cs          ← 程序集信息
    │   ├── Resources.resx           ← 资源文件
    │   ├── Settings.settings        ← 设置文件
    │   └── Resources.Designer.cs    ← 资源设计器文件
    ├── bin/                         ← 编译输出文件夹
    │   ├── Debug/                   ← 调试版本
    │   └── Release/                 ← 发布版本
    ├── obj/                         ← 临时编译文件夹
    ├── Form1.cs                     ← 主窗体代码文件
    ├── Form1.Designer.cs            ← 窗体设计器文件
    ├── Program.cs                   ← 程序入口点
    └── MyWindowsApp.csproj          ← 项目文件
```
可以手动修改 VS 不要手动修改
```csharp
✅ 可以安全修改：
1. Form1.cs - 写你的业务逻辑
2. Program.cs - 修改启动逻辑
3. Properties/Resources.resx - 添加资源
4. Properties/Settings.settings - 添加设置

❌ 不要手动修改：
1. Form1.Designer.cs - VS自动生成
2. Properties/Resources.Designer.cs - 自动生成
3. Properties/Settings.Designer.cs - 自动生成
4. bin/ 和 obj/ 文件夹 - 编译生成
```

## 二、事件对象


## 一、窗体应用设计练习题集

### **练习1：学生信息录入系统**
```csharp
// 目标：掌握Label、TextBox、Button、ComboBox的基本使用
```
**设计要求：**
1. 窗体包含：
   - 5个Label：姓名、学号、性别、班级、专业
   - 4个TextBox：姓名、学号
   - 2个RadioButton：男、女（放在GroupBox中）
   - 2个ComboBox：班级（下拉选择）、专业（可输入）
   - 2个Button：提交、清空

**功能要求：**
- 提交按钮：验证输入，显示信息摘要
- 清空按钮：重置所有控件
- 班级ComboBox：预置"计算机1班"、"计算机2班"、"网络1班"
- 专业ComboBox：允许输入新专业

**考察知识点：**
- 窗体基本属性设置
- 控件的Anchor/Dock布局
- TextBox的MaxLength、ReadOnly属性
- RadioButton的Checked属性
- ComboBox的Items操作

---

### **练习2：简单计算器**
```csharp
// 目标：掌握Button事件、TextBox显示
```
**设计要求：**
1. 实现四则运算计算器
2. 界面元素：
   - 1个TextBox：显示输入和结果（ReadOnly=True）
   - 16个Button：0-9数字、+-*/运算符、=、C（清除）、.（小数点）

**功能要求：**
- 实现连续计算：如 3 + 4 × 2
- 错误处理：除数为零提示
- 支持小数运算
- C按钮清除所有输入

**考察知识点：**
- Button的Click事件处理
- TextBox的Text属性动态更新
- 控件命名规范（btnAdd, txtDisplay等）
- 窗体键盘事件（KeyDown处理数字输入）

---

### **练习3：个人偏好设置面板**
```csharp
// 目标：掌握CheckBox、RadioButton、GroupBox
```
**设计要求：**
1. 模拟软件设置界面
2. 界面分区域：
   - 外观设置（GroupBox）：
     - RadioButton：浅色/深色/自动
     - CheckBox：显示工具栏、显示状态栏
   - 通知设置（GroupBox）：
     - CheckBox：新消息提醒、声音提醒、桌面通知
   - 应用按钮区域：应用、取消、恢复默认

**功能要求：**
- "应用"按钮：保存设置（暂时用MessageBox显示）
- "取消"按钮：恢复修改前的状态
- "恢复默认"：重置所有选项

**考察知识点：**
- GroupBox容器使用
- CheckBox的CheckState（Checked/Unchecked/Indeterminate）
- RadioButton分组（同一GroupBox内互斥）
- 窗体颜色动态切换（BackColor属性）

---

### **练习4：课程选择系统**
```csharp
// 目标：掌握ListBox、ComboBox、数据同步
```
**设计要求：**
1. 窗体布局：
   - 左侧ListBox：可选课程列表（预置10门课程）
   - 右侧ListBox：已选课程列表
   - 中间4个Button：`>`（添加）、`>>`（添加全部）、`<`（移除）、`<<`（移除全部）
   - 底部：ComboBox（排序方式）、CheckBox（是否允许重复选择）

**功能要求：**
- 双击课程可快速添加/移除
- 排序功能：按字母顺序排序ListBox
- 限制功能：当CheckBox未选中时，不能重复选择同一课程
- 显示已选课程数量（用Label显示）

**考察知识点：**
- ListBox的Items集合操作（Add、Remove）
- SelectedIndex和SelectedItem属性
- Sorted属性控制排序
- 控件间数据同步

---

### **练习5：文本编辑器**
```csharp
// 目标：掌握菜单、滚动条、多行文本框
```
**设计要求：**
1. 实现简单文本编辑器
2. 主要控件：
   - 多行TextBox（带垂直滚动条）
   - MainMenu：文件（新建、打开、保存、退出）、编辑（复制、剪切、粘贴）、格式（字体、颜色）
   - HScrollBar：控制字体大小（10-30pt）
   - StatusStrip：显示字符数、当前时间

**功能要求：**
- 文件操作：用MessageBox模拟（实际考试可能只要求消息提示）
- 字体颜色：通过ColorDialog设置
- 实时统计：TextBox的TextChanged事件更新字符数
- Timer控件：状态栏显示当前时间（每秒更新）

**考察知识点：**
- TextBox的Multiline、ScrollBars属性
- MenuStrip控件使用
- HScrollBar的Value、SmallChange属性
- Timer的Interval和Tick事件
- TextChanged事件处理

---

### **练习6：图片浏览器**
```csharp
// 目标：掌握PictureBox、TabControl、对话框控件
```
**设计要求：**
1. 窗体包含：
   - TabControl：两个TabPage（浏览、设置）
   - 浏览页：PictureBox、Button（打开图片）、Label（显示图片信息）
   - 设置页：调整PictureBox的SizeMode（Stretch、Zoom等）

**功能要求：**
- 打开图片：使用OpenFileDialog选择图片
- 图片适应：通过RadioButton选择SizeMode
- 信息显示：图片路径、尺寸、大小
- 窗体Resize事件：图片随窗体大小调整

**考察知识点：**
- PictureBox的Image、SizeMode属性
- OpenFileDialog的使用
- TabControl的SelectedTab属性
- 窗体的Resize事件处理

---

### **练习7：学生成绩管理系统（单窗体）**
```csharp
// 目标：综合应用多个控件，实现完整功能
```
**设计要求：**
1. 主界面分区：
   - 输入区：TextBox（姓名、成绩）、ComboBox（科目）、Button（添加）
   - 显示区：DataGridView或ListBox显示记录
   - 操作区：Button（计算平均分、最高分、清除所有）
   - 统计区：Label显示统计结果

**功能要求：**
- 数据验证：成绩必须是0-100的数字
- 统计功能：实时计算平均分、最高最低分
- 排序功能：按成绩排序显示
- 查找功能：输入姓名查找成绩

**考察知识点：**
- 多个控件协同工作
- 数据验证逻辑
- 集合数据操作和统计
- 窗体布局和美观性

---

### **练习8：多窗体通讯系统**
```csharp
// 目标：掌握多窗体调用、窗体间传值
```
**设计要求：**
1. 主窗体（Form1）：
   - 显示学生列表（ListBox）
   - 按钮：添加学生、编辑学生、删除学生
2. 子窗体（Form2）：
   - 学生信息编辑界面
   - 模式对话框形式

**功能要求：**
- 添加学生：打开Form2，输入信息后返回主窗体显示
- 编辑学生：双击ListBox项，在Form2中编辑
- 删除学生：选中后删除，需要确认（MessageBox）
- 窗体传值：Form1向Form2传递数据，Form2返回结果

**考察知识点：**
- Show()和ShowDialog()的区别
- 通过构造函数或属性传递数据
- 窗体的DialogResult属性
- 窗体生命周期（Load、Closing、Closed）

---

### **练习9：游戏：打地鼠**
```csharp
// 目标：掌握Timer、鼠标事件、随机数
```
**设计要求：**
1. 游戏界面：
   - 3×3的Button网格（模拟地鼠洞）
   - Label显示分数、剩余时间
   - Timer控制游戏时间（60秒）
2. 游戏规则：
   - 地鼠随机出现在某个Button上（改变颜色或文本）
   - 点击出现地鼠的Button得10分
   - 点击空Button扣5分

**功能要求：**
- 游戏控制：开始、暂停、重置按钮
- 难度选择：通过ComboBox选择地鼠出现频率
- 鼠标事件：MouseEnter改变按钮外观
- 音效反馈：点击时播放系统声音

**考察知识点：**
- Timer的Interval控制游戏节奏
- Random类生成随机位置
- Button的Mouse事件处理
- 游戏状态管理

---

### **练习10：控件属性动态调整器**
```csharp
// 目标：深入理解控件属性
```
**设计要求：**
创建可动态调整其他控件属性的窗体：
1. 左侧：目标控件（如TextBox）
2. 右侧：属性调整面板：
   - TrackBar调整字体大小
   - ComboBox选择BackColor
   - CheckBox切换ReadOnly
   - TextBox输入显示文字

**知识点：**
- 运行时动态修改控件属性
- 事件联动：一个控件变化影响另一个
- 类型转换和属性验证

---

### **练习11：事件跟踪器**
```csharp
// 目标：理解事件触发顺序
```
**设计要求：**
创建记录窗体事件发生的日志系统：
1. 为窗体添加所有要求掌握的事件处理器
2. 每个事件触发时，在ListBox中添加记录
3. 显示事件参数（如MouseEventArgs的位置）

**知识点：**
- 窗体事件的触发时机
- 事件参数的使用
- 事件顺序的理解（如Click由MouseDown+MouseUp组成）

---

## **二、考试重点专项训练**

### **训练1：键盘快捷键实现**
```csharp
// 要求：为窗体添加键盘快捷键
// Ctrl+N：新建  Ctrl+S：保存  Ctrl+Q：退出
// 考察：KeyDown、KeyPress事件，ModifierKeys判断
```

### **训练2：数据验证**
```csharp
// 要求：实现注册表单验证
// 用户名：3-10字符  密码：6位以上  邮箱：包含@
// 考察：TextChanged实时验证，错误提示（用Label或ErrorProvider）
```

### **训练3：动态控件生成**
```csharp
// 要求：运行时根据输入数字N，生成N个TextBox
// 考察：Controls集合操作，控件动态创建和布局
```


## **三、项目文件结构建议**
```
WindowsFormsPractice/
├── BasicExercises/        # 基础练习
│   ├── Exercise1_StudentInfo/
│   ├── Exercise2_Calculator/
│   └── Exercise3_Settings/
├── IntermediateExercises/  # 中级练习
│   ├── Exercise4_CourseSelect/
│   ├── Exercise5_TextEditor/
│   └── Exercise6_ImageViewer/
└── AdvancedExercises/     # 综合练习
    ├── Exercise7_ScoreManager/
    ├── Exercise8_MultiForm/
    └── Exercise9_WhackAMole/
```

## **四、考试答题技巧**

1. **先画界面**：拖放控件，设置基本属性
2. **再写事件**：从最简单的事件开始
3. **后做美化**：调整布局和颜色
4. **最后测试**：各种边界情况都要测试

## **五、常见陷阱**
```csharp
// 陷阱1：Show() vs ShowDialog()
Form2 f2 = new Form2();
f2.Show();      // 非模态，主窗体可操作
f2.ShowDialog(); // 模态，必须关闭f2才能操作主窗体

// 陷阱2：事件重复绑定
button.Click += Button_Click; // 每次执行都会新增绑定
// 解决方法：在Load事件中绑定一次

// 陷阱3：窗体关闭 vs 应用程序退出
this.Close();    // 关闭当前窗体
Application.Exit(); // 退出整个应用
```

通过这9个循序渐进的实际练习，你不仅能够掌握考试大纲的所有考点，还能获得实际开发Windows窗体应用的能力。每个练习都针对多个考点设计，建议按顺序完成，并做好学习笔记！