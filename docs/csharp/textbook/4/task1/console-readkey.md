---
noteId: "9b1c5700f10d11f0a08251b51a587dfd"
tags: []

---

详解 Console.ReadKey() 的用法

## 📌 一、用途
主要用于控制台程序的**交互控制**：

1. **程序暂停** - 防止窗口一闪而过
2. **获取按键** - 接收用户的键盘输入
3. **菜单选择** - 无需按回车就能选择
4. **简单控制** - 游戏、工具的基本操作

## 📝 二、语法

### 基本语法
```csharp
// 方式1：最常用，获取按键信息
ConsoleKeyInfo keyInfo = Console.ReadKey();

// 方式2：控制是否显示按键
ConsoleKeyInfo keyInfo = Console.ReadKey(true);  // 不显示按键
ConsoleKeyInfo keyInfo = Console.ReadKey(false); // 显示按键

// 方式3：只暂停，不关心按了什么键
Console.ReadKey();  // 简单暂停程序
```

## 🔧 三、参数说明

### `intercept` 参数（可选）
- **默认值**：`false`（显示按键）
- **`true`**：按键不会显示在屏幕上
- **`false`**：按键会显示在屏幕上

**示例对比：**
```csharp
// 示例1：显示按键（默认）
Console.Write("请按一个键：");
ConsoleKeyInfo key1 = Console.ReadKey();  // 按'A'会显示A
Console.WriteLine($"\n你按了：{key1.KeyChar}");

// 示例2：不显示按键
Console.Write("请输入密码：");
ConsoleKeyInfo key2 = Console.ReadKey(true);  // 按'A'不会显示
Console.WriteLine($"\n你按了（但不显示）：{key2.KeyChar}");
```

## 📤 四、返回值

`ReadKey()` 返回一个 `ConsoleKeyInfo` 对象，包含：

```csharp
ConsoleKeyInfo key = Console.ReadKey();

// 1. KeyChar - 按键对应的字符
char character = key.KeyChar;  // 如 'A', '1', ' '

// 2. Key - 按键的枚举值
ConsoleKey keyType = key.Key;  // 如 ConsoleKey.A, ConsoleKey.Enter

// 3. Modifiers - 组合键（如Ctrl、Alt、Shift）
ConsoleModifiers modifiers = key.Modifiers;  // 如 Ctrl+Alt
```

### 常用按键的 Key 值：
```csharp
// 字母键
ConsoleKey.A  // A键
ConsoleKey.B  // B键
// ...

// 数字键
ConsoleKey.D0  // 数字0
ConsoleKey.D1  // 数字1
// ...

// 功能键
ConsoleKey.Enter     // 回车键
ConsoleKey.Escape    // ESC键
ConsoleKey.Spacebar  // 空格键
ConsoleKey.Backspace // 退格键

// 方向键
ConsoleKey.UpArrow    // 上箭头
ConsoleKey.DownArrow  // 下箭头
ConsoleKey.LeftArrow  // 左箭头
ConsoleKey.RightArrow // 右箭头
```

## 🎯 五、不同用法示例（基础版）

### 示例1：最简单的暂停程序
```csharp
static void Example1_BasicPause()
{
    Console.WriteLine("程序开始运行...");
    Console.WriteLine("正在计算...");
    
    // 模拟一些工作
    System.Threading.Thread.Sleep(1000);
    
    Console.WriteLine("计算完成！");
    
    // 暂停，等待用户按键
    Console.WriteLine("按任意键退出程序...");
    Console.ReadKey();  // 按任意键继续
}
```

### 示例2：获取用户按键并显示
```csharp
static void Example2_GetKey()
{
    Console.WriteLine("按键测试");
    Console.Write("请按任意一个键：");
    
    // 获取按键（会显示在屏幕上）
    ConsoleKeyInfo key = Console.ReadKey();
    
    Console.WriteLine($"\n你按了：{key.KeyChar}");
    Console.WriteLine($"按键代码：{key.Key}");
    
    // 判断特定按键
    if (key.Key == ConsoleKey.Enter)
        Console.WriteLine("你按了回车键！");
    else if (key.Key == ConsoleKey.Escape)
        Console.WriteLine("你按了ESC键！");
    else if (char.IsDigit(key.KeyChar))
        Console.WriteLine("你按了一个数字！");
    else if (char.IsLetter(key.KeyChar))
        Console.WriteLine("你按了一个字母！");
}
```

### 示例3：简单的菜单选择
```csharp
static void Example3_SimpleMenu()
{
    Console.WriteLine("=== 简单菜单 ===");
    Console.WriteLine("A. 开始游戏");
    Console.WriteLine("B. 查看帮助");
    Console.WriteLine("C. 退出程序");
    Console.Write("\n请选择 (A/B/C): ");
    
    // 不显示用户按的键
    ConsoleKeyInfo choice = Console.ReadKey(true);
    
    Console.WriteLine($"\n你选择了：{choice.KeyChar}");
    
    // 处理选择
    switch (char.ToUpper(choice.KeyChar))
    {
        case 'A':
            Console.WriteLine("开始游戏...");
            break;
        case 'B':
            Console.WriteLine("显示帮助...");
            break;
        case 'C':
            Console.WriteLine("退出程序");
            break;
        default:
            Console.WriteLine("无效选择！");
            break;
    }
}
```

### 示例4：确认对话框
```csharp
static void Example4_Confirmation()
{
    Console.WriteLine("重要操作：删除所有文件");
    Console.Write("确定要删除吗？(Y/N): ");
    
    ConsoleKeyInfo answer = Console.ReadKey(true);
    
    if (char.ToUpper(answer.KeyChar) == 'Y')
    {
        Console.WriteLine("\n文件已删除！");
    }
    else if (char.ToUpper(answer.KeyChar) == 'N')
    {
        Console.WriteLine("\n操作已取消。");
    }
    else
    {
        Console.WriteLine("\n无效输入，请按Y或N。");
    }
}
```

### 示例5：方向键控制
```csharp
static void Example5_ArrowKeys()
{
    Console.WriteLine("使用方向键移动，按ESC退出");
    
    int position = 0;
    
    while (true)
    {
        // 显示当前位置
        Console.SetCursorPosition(0, 1);
        Console.WriteLine($"当前位置：{position}    ");
        
        Console.Write("请按方向键：");
        ConsoleKeyInfo key = Console.ReadKey(true);
        
        if (key.Key == ConsoleKey.LeftArrow)
        {
            position--;
            Console.WriteLine("向左移动");
        }
        else if (key.Key == ConsoleKey.RightArrow)
        {
            position++;
            Console.WriteLine("向右移动");
        }
        else if (key.Key == ConsoleKey.Escape)
        {
            Console.WriteLine("\n程序结束");
            break;
        }
        else
        {
            Console.WriteLine("请使用方向键");
        }
    }
}
```

### 示例6：输入密码（显示*号）
```csharp
static void Example6_PasswordInput()
{
    Console.Write("请输入密码：");
    string password = "";
    
    while (true)
    {
        ConsoleKeyInfo key = Console.ReadKey(true);
        
        // 按回车结束输入
        if (key.Key == ConsoleKey.Enter)
        {
            Console.WriteLine();  // 换行
            break;
        }
        
        // 按退格删除
        if (key.Key == ConsoleKey.Backspace)
        {
            if (password.Length > 0)
            {
                password = password.Remove(password.Length - 1);
                Console.Write("\b \b");  // 删除一个星号
            }
        }
        // 普通字符
        else if (!char.IsControl(key.KeyChar))
        {
            password += key.KeyChar;
            Console.Write("*");  // 显示星号
        }
    }
    
    Console.WriteLine($"你输入的密码是：{password}");
}
```

## 📚 六、练习题（由易到难）

### 练习1：基础暂停
```csharp
// 创建一个程序，显示"Hello World!"，
// 然后等待用户按任意键后才退出
```

**提示代码：**
```csharp
Console.WriteLine("Hello World!");
// 在这里添加暂停代码
```

### 练习2：按键检测器
```csharp
// 编写程序，要求用户按5次任意键，
// 每次显示按键信息，最后显示统计结果
// 示例输出：
// 第1次按键：A
// 第2次按键：Enter
// ...
// 总共按了5次键
```

### 练习3：选择题测验
```csharp
// 创建一个简单的选择题：
// 问题：C#是什么？
// A. 编程语言
// B. 游戏名称  
// C. 电影名称
// D. 音乐类型
// 
// 用户按A/B/C/D选择，显示是否正确
```

### 练习4：猜数字游戏
```csharp
// 程序随机生成1-10的数字
// 用户按数字键猜测
// 提示太大/太小，直到猜中
// 按ESC可以退出游戏
```

### 练习5：简单计算器
```csharp
// 实现一个简单的两数计算器：
// 1. 输入第一个数字（用ReadLine）
// 2. 选择运算符（用ReadKey选择+、-、*、/）
// 3. 输入第二个数字（用ReadLine）
// 4. 显示计算结果
```

### 练习6：文本阅读器
```csharp
// 显示一段长文本（超过一屏）
// 使用空格键翻页
// 使用ESC键退出阅读
// 显示当前页数/总页数
```

## 💡 使用技巧

1. **清屏操作**：`Console.Clear()` 可以清除屏幕
2. **光标位置**：`Console.SetCursorPosition(x, y)` 控制光标
3. **颜色设置**：`Console.ForegroundColor` 改变文字颜色
4. **按键检查**：`Console.KeyAvailable` 检查是否有按键（不阻塞）

## ⚠️ 注意事项

1. **混合使用问题**：`ReadKey()` 后使用 `ReadLine()` 可能需要清空缓冲区
2. **特殊按键**：功能键（F1-F12）没有对应的 KeyChar
3. **组合键**：Ctrl、Alt、Shift 等需要检查 Modifiers 属性
4. **中文输入**：可能无法正确处理中文输入

## 📖 总结

`Console.ReadKey()` 是控制台编程中非常实用的方法，掌握它可以让你的程序：
- ✅ 与用户更好地交互
- ✅ 创建菜单和选项
- ✅ 实现游戏控制
- ✅ 暂停程序查看结果