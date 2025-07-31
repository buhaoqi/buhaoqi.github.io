---
noteId: "837cf3a06d2f11f085edc39629fab101"
tags: []

---

> 10.掌握按钮（Button）的事件：Click、Enter、MouseUp、TextChanged；

下面是对 WinForms 中 **Button 控件的常用事件：`Click`、`Enter`、`MouseUp`、`TextChanged`** 的详解，结合教学用途和实例，适合用于中职课程、C# 初学者视频教程或教材内容编写。

---

## 🎓 教学主题：掌握按钮（Button）的常用事件

---

### ✅ 一、事件概览

| 事件名           | 触发时机               | 主要用途          |
| ------------- | ------------------ | ------------- |
| `Click`       | 用户点击按钮时            | 最常用事件，用于执行操作  |
| `Enter`       | 焦点进入按钮时（如 Tab 键切换） | 可以高亮按钮或提示     |
| `MouseUp`     | 鼠标按下后松开时           | 用于拖放、右键弹出菜单等  |
| `TextChanged` | 按钮文字内容变化时          | 很少使用，但可用于状态联动 |

---

## 🔹 1. `Click` —— 点击按钮时触发（最常用）

### 📌 说明：

用户用鼠标点击按钮，或按下 Enter 键激活按钮，就会触发这个事件。

### ✅ 应用场景：

* 提交表单
* 启动操作
* 打开新窗口

### 🧪 示例代码：

```csharp
private void button1_Click(object sender, EventArgs e)
{
    MessageBox.Show("你点击了按钮！");
}
```

---

## 🔹 2. `Enter` —— 当按钮获得焦点时触发

### 📌 说明：

当用户通过 Tab 键或程序控制使按钮获得焦点，就会触发 `Enter` 事件。

### ✅ 应用场景：

* 给按钮加边框或改变背景颜色（高亮）
* 显示帮助信息或提示文字

### 🧪 示例代码：

```csharp
private void button1_Enter(object sender, EventArgs e)
{
    button1.BackColor = Color.LightGreen;
}
```

---

## 🔹 3. `MouseUp` —— 鼠标按下后松开时触发

### 📌 说明：

鼠标在按钮上按下再松开，就会触发 `MouseUp`，可以用来区分点击时的行为。

### ✅ 应用场景：

* 实现拖拽功能
* 在释放鼠标时更新界面
* 处理右键菜单弹出

### 🧪 示例代码：

```csharp
private void button1_MouseUp(object sender, MouseEventArgs e)
{
    if (e.Button == MouseButtons.Right)
    {
        MessageBox.Show("你松开了右键！");
    }
}
```

---

## 🔹 4. `TextChanged` —— 按钮文字内容发生变化时触发

### 📌 说明：

当按钮的 `Text` 属性值发生变化时触发。

> **注意：** 用户点击按钮不会改变文字，通常是代码动态修改 `Text` 时触发。

### ✅ 应用场景：

* 按钮状态联动（例：当文字变成“处理中…”时，禁用按钮）
* 日志记录：监听按钮状态变化

### 🧪 示例代码：

```csharp
private void button1_TextChanged(object sender, EventArgs e)
{
    this.Text = "按钮状态已改变：" + button1.Text;
}
```

---

## 🎯 教学建议

| 事件            | 建议演示方法                     |
| ------------- | -------------------------- |
| `Click`       | 经典案例：点击按钮弹出消息框或修改 Label 内容 |
| `Enter`       | 设置按钮背景色变化，让学生体验焦点移动        |
| `MouseUp`     | 区分左键和右键，演示不同响应             |
| `TextChanged` | 点击按钮改变其文字，引导学生观察事件是否触发     |

---

## 🧠 巩固练习题（可用于课堂练习）

1. 编写一个程序，点击按钮后显示“按钮已点击”（使用 `Click`）。
2. 设置按钮获得焦点时改变背景颜色，失去焦点时恢复（`Enter` + `Leave`）。
3. 鼠标右键松开按钮时弹出提示“你使用了右键”（使用 `MouseUp`）。
4. 当按钮文字变为“提交中...”时，将按钮禁用；改为“提交”时重新启用（监听 `TextChanged`）。

---
