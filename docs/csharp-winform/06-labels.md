---
noteId: "8ac081505eec11f0a138bb2f2278db69"
tags: []

---

> 掌握标签(Label)属性：AutoSize、Text、Focused、Font、Height、Size、Visible、Width、Text Align、Name、Image、Anchor、BorderStyle、CanFocus；


下面是对 WinForms 中 Label 控件常用属性的详细讲解，适合用于中职教学、C# 初学者课程视频脚本或课件整理使用。

---

## 🎓 教学主题：掌握 Label（标签）控件的常用属性

---

### ✅ **基础属性**

---

### 🔹 1. `Text`

**作用：**
设置或获取 Label 显示的文字内容。

**示例：**

```csharp
label1.Text = "欢迎学习 C#";
```

---

### 🔹 2. `Name`

**作用：**
Label 控件在代码中的“名字”，用于在代码中引用该控件。

**示例：**

```csharp
// Name: labelWelcome
labelWelcome.Text = "Hello";
```

---

### 🔹 3. `AutoSize`

**作用：**
决定 Label 是否自动根据内容调整大小。

* `true`：内容变大，Label 自动变大。
* `false`：固定大小，多余内容会被截断。

**示例：**

```csharp
label1.AutoSize = true;
```

---

### 🔹 4. `Font`

**作用：**
设置 Label 显示文字的字体、字号、样式。

**示例：**

```csharp
label1.Font = new Font("微软雅黑", 14, FontStyle.Bold);
```

---

### 🔹 5. `TextAlign`

**作用：**
设置文字在 Label 内部的对齐方式（仅在 `AutoSize=false` 时有作用）。

**示例：**

```csharp
label1.TextAlign = ContentAlignment.MiddleCenter;
```

---

### 🔹 6. `Visible`

**作用：**
控制 Label 是否可见。

**示例：**

```csharp
label1.Visible = false;  // 隐藏标签
```

---

### 🔹 7. `Image`

**作用：**
让标签显示一张图片（常与 `TextImageRelation` 联用）。

**示例：**

```csharp
label1.Image = Image.FromFile("logo.png");
```

---

## 📏 尺寸与定位相关属性

---

### 🔹 8. `Width` / `Height`

**作用：**
设置或获取标签的宽度和高度（单位：像素）。

**示例：**

```csharp
label1.Width = 200;
label1.Height = 50;
```

---

### 🔹 9. `Size`

**作用：**
组合设置宽度和高度。

**示例：**

```csharp
label1.Size = new Size(150, 30);
```

---

### 🔹 10. `Anchor`

**作用：**
设置标签在窗体大小变化时，是否跟随某些边缘一起移动或缩放。

**示例：**

```csharp
label1.Anchor = AnchorStyles.Top | AnchorStyles.Right;
```

---

## 🎨 外观与焦点相关属性

---

### 🔹 11. `BorderStyle`

**作用：**
设置 Label 边框样式。

* `None`：无边框
* `FixedSingle`：单线边框
* `Fixed3D`：立体边框

**示例：**

```csharp
label1.BorderStyle = BorderStyle.FixedSingle;
```

---

### 🔹 12. `Focused`（只读）

**作用：**
表示该 Label 当前是否拥有焦点。

> 注意：Label 默认不可获得焦点。

**示例：**

```csharp
bool isFocused = label1.Focused;
```

---

### 🔹 13. `CanFocus`（只读）

**作用：**
表示该控件当前是否 *有资格* 获取焦点（可视、启用等条件满足）。

**示例：**

```csharp
bool canFocus = label1.CanFocus;
```

---

## 🎯 教学建议

| 属性                        | 建议演示方式                |
| ------------------------- | --------------------- |
| `Text`、`Font`、`TextAlign` | 用按钮控制 Label 外观变化      |
| `AutoSize`                | 切换 true/false 比较效果    |
| `Image`                   | 设置带图标的 Label          |
| `Visible`                 | 按钮控制 Label 显隐         |
| `Anchor`                  | 调整窗体大小，观察 Label 的位置变化 |
| `BorderStyle`             | 轮流设置不同边框样式            |
| `Focused` / `CanFocus`    | 演示 Label 默认不能获取焦点     |

---

## 🧠 巩固练习题（示例）

1. 设置一个 Label，点击按钮改变其字体为加粗 20 号字。
2. 演示 Label 在 AutoSize 为 false 时如何截断文字，并用 TextAlign 调整文字居中。
3. 让 Label 显示一张本地图片，并设置 Fixed3D 边框。
4. 在按钮中显示 Label 当前的 Focused 和 CanFocus 状态。
5. 创建一个可伸缩窗体，观察 Label 使用不同 Anchor 设置时的位置变化。

---
