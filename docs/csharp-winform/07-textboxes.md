---
noteId: "8f1228305eec11f0a138bb2f2278db69"
tags: []

---

> 掌握文本框(TextBox)的属性：Text、TextLength、MaxLength、Multiline、PasswordChar、SelectedText、ReadOnly、TabIndex；

下面是对 WinForms 中 **TextBox（文本框）控件常用属性**的系统讲解，适合用作中职教学讲稿、课件内容或初学者 C# 视频脚本参考。

---

## 🎓 教学主题：掌握 TextBox 控件的常用属性

---

## ✅ 一、文本内容相关属性

---

### 🔹 1. `Text`

**作用：**
获取或设置文本框中的内容。

**用途示例：**

* 获取用户输入
* 给文本框设置默认提示语

```csharp
string name = textBox1.Text;
textBox1.Text = "请输入姓名";
```

---

### 🔹 2. `TextLength`（只读）

**作用：**
获取当前文本框中字符的长度。

**用途：**
用于判断是否输入了内容或是否超过特定长度。

```csharp
int length = textBox1.TextLength;
```

---

### 🔹 3. `MaxLength`

**作用：**
限制用户最多能输入多少个字符。

**用途：**
适用于账号、手机号、验证码等输入框。

```csharp
textBox1.MaxLength = 11;
```

---

### 🔹 4. `SelectedText`（可读写）

**作用：**
获取或设置用户当前选中的文本。

```csharp
string selected = textBox1.SelectedText;
textBox1.SelectedText = "替换的文字";
```

---

## ✅ 二、显示样式与交互属性

---

### 🔹 5. `Multiline`

**作用：**
是否允许多行输入。

* `true`：可以输入多行
* `false`：只能单行输入

**应用：** 适合做留言框、备注等场景。

```csharp
textBox1.Multiline = true;
```

---

### 🔹 6. `PasswordChar`

**作用：**
设置输入内容显示为某个特定字符（通常用于密码框）。

```csharp
textBox1.PasswordChar = '*';
```

---

### 🔹 7. `ReadOnly`

**作用：**
设置文本框是否只读（不能输入，但可以复制文本）。

**区别：**

* `Enabled = false`：完全禁用、变灰，无法选中。
* `ReadOnly = true`：可以选中和复制，但无法修改。

```csharp
textBox1.ReadOnly = true;
```

---

### 🔹 8. `TabIndex`

**作用：**
设置在按 Tab 键时的“焦点切换顺序”。

**用途：**
控制用户在表单中输入时的流程。

```csharp
textBox1.TabIndex = 0;
textBox2.TabIndex = 1;
```

---

## 🎯 教学建议与课堂演示

| 属性                   | 演示建议                      |
| -------------------- | ------------------------- |
| `Text`, `TextLength` | 输入内容后点击按钮显示字符数量           |
| `MaxLength`          | 设置限制，尝试输入超过限制的内容          |
| `Multiline`          | 设置 true，观察出现的换行能力和滚动条     |
| `PasswordChar`       | 设置后模拟密码输入效果               |
| `SelectedText`       | 选择部分文字后，点击按钮读取            |
| `ReadOnly`           | 演示用户可选中但不能编辑              |
| `TabIndex`           | 设置多个 TextBox，演示 Tab 键切换顺序 |

---

## 🧠 巩固练习题（适合课后练习）

1. 编写一个窗体应用，用户输入文本后点击按钮，弹出输入的文字长度（使用 `TextLength`）。
2. 创建一个密码输入框，输入内容应使用星号 `*` 替代（设置 `PasswordChar`）。
3. 设置一个 `MaxLength=5` 的文本框，测试无法继续输入第6个字符。
4. 在窗体中放置 3 个 TextBox，设置合理的 `TabIndex`，观察 Tab 键切换顺序。
5. 让一个 TextBox 显示欢迎语但不允许用户编辑（使用 `ReadOnly`）。

---
