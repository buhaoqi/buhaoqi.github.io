---
noteId: "a396d2806da411f0bd7bcfcb8d3200d9"
tags: []

---

下面是 **Visual Studio 编写 C# 代码的常用快捷键清单**，包含 **代码编写、调试、导航、重构、界面操作** 等分类，适合初学者和进阶用户查阅、记忆和打印使用。

---

## 🧠 一、代码编写快捷键

| 快捷键                        | 功能说明               |
| -------------------------- | ------------------ |
| Shift + Alt + ；|多光标输入选择|
|Shift + Alt + . |多光标输入选择|
| `Ctrl + K, Ctrl + D`       | 自动格式化整个文档（缩进、对齐）   |
| `Ctrl + K, Ctrl + C`       | 注释选中代码             |
| `Ctrl + K, Ctrl + U`       | 取消注释选中代码           |
| `Ctrl + Space`             | 显示代码补全提示（智能感知）     |
| `Tab` / `Shift + Tab`      | 增加 / 减少缩进          |
| `Ctrl + .`                 | 显示快速操作（修复、引入命名空间等） |
| `Ctrl + /`                 | 快速注释 / 取消注释（英文输入法） |
| `Alt + ↑ / ↓`              | 移动当前行（或选中行）上下位置    |
| `Ctrl + D` 或 `Ctrl + E, V` | 复制当前行（需配置或插件支持）    |


Shift + Alt + Up/Down 垂直选择
---

## 🧭 二、代码导航快捷键

| 快捷键                             | 功能说明                     |
| ------------------------------- | ------------------------ |
| `F12`                           | 跳转到定义（Go to Definition）  |
| `Ctrl + F12`                    | 跳转到声明（Go to Declaration） |
| `Alt + F12`                     | 内联查看定义（Peek Definition）  |
| `Ctrl + -` / `Ctrl + Shift + -` | 后退 / 前进到上一个位置            |
| `Ctrl + ,`                      | 快速搜索文件、类、方法（导航一切）        |
| `Ctrl + Shift + F`              | 全局查找                     |
| `Ctrl + F`                      | 当前文档查找                   |
| `Ctrl + G`                      | 跳转到指定行                   |

---

## 🧰 三、调试相关快捷键

| 快捷键                 | 功能说明                |
| ------------------- | ------------------- |
| `F5`                | 启动调试                |
| `Ctrl + F5`         | 启动但不调试（仅运行）         |
| `F9`                | 设置 / 取消断点           |
| `F10`               | 单步调试（逐过程 Step Over） |
| `F11`               | 单步调试（逐语句 Step Into） |
| `Shift + F11`       | 跳出当前函数（Step Out）    |
| `Ctrl + Shift + F9` | 清除所有断点              |
| `Ctrl + Alt + Q`    | 快速打开立即窗口            |

---

## 🛠 四、重构快捷键

| 快捷键                | 功能说明                 |
| ------------------ | -------------------- |
| `Ctrl + R, R`      | 重命名标识符               |
| `Ctrl + .`         | 快速修复建议（引入命名空间、生成方法等） |
| `Ctrl + R, G`      | 提取方法（Extract Method） |
| `Ctrl + Shift + R` | 开启“重构”录制模式（修改多个地方）   |

---

## 📐 五、界面/窗口操作快捷键

| 快捷键                  | 功能说明          |
| -------------------- | ------------- |
| `Ctrl + Shift + B`   | 编译整个解决方案      |
| `F6`                 | 编译当前项目        |
| `Ctrl + Shift + S`   | 全部保存          |
| `Ctrl + Tab`         | 快速切换打开的文件     |
| `Ctrl + Alt + L`     | 打开“解决方案资源管理器” |
| `Ctrl + \, Ctrl + E` | 打开“错误列表”      |
| `Ctrl + Alt + O`     | 打开“输出”窗口      |
| `Ctrl + Alt + I`     | 打开“立即窗口”      |

---

## 🔁 建议配置和技巧

* ✅ 设置为 **Visual Studio 默认键盘方案**：
  工具 > 选项 > 键盘 > 选择 “Visual Studio” 映射方案
* ✅ 可自定义快捷键：
  工具 > 选项 > 键盘 > 搜索命令 > 分配你喜欢的快捷键

---

### 🧾 小贴士：如何记忆？

| 类型            | 首字母联想                          |
| ------------- | ------------------------------ |
| 格式 Format     | `K + D`（K for “Kindly Format”） |
| 注释 Comment    | `K + C`（C for Comment）         |
| 调试 Debug      | `F5`（最常用）                      |
| 定义 Definition | `F12`（Find Definition）         |
| 快修 Fix        | `Ctrl + .`（点开建议）               |

---



![vs快捷键](./images/cs-shortcut.png)

## 选择类

|快捷键|说明|
|---|---|
||选择一行|

CTRL + K + C  注释
CTRL + K + U  取消注释

CTRL + K,CTRL + D  格式化

CTRL + ,  代码搜索
CTRL + Q  功能搜索

CTRL + G  跳转

Alt + /: 调用Copilot

CTRL  + K,S 插入代码

CTRL + R + R 改全部名

CTRL + SPACE： Suggestiong

ctour：创建构造函数

CTRL + X 删除一行

CTRL + L 删除一行

CTRL + Shift + L  删除一行（清剪切板)

ALT + up/down: 移动代码行

CTRL + Alt + B  打开断点

CTRL + F9 删除全部断点

CTRL + M,M  折叠/展开代码

CTRL + Left/Right 快速移动光标

CTRL + Alt + Up/Down 选择多行

CTRL +   Shift + Up/Down  选择下一个

Ctrl + D  复制行

Home/End

Ctrl + Home/End

Ctrl + Shift + Home/End 选择到头/尾 

Shift + 方向键，快速选择代码


