---
noteId: "d9421700686811f0b38abb3f8df447a5"
tags: []

---

当然可以！以下是《C# 初学者实例教程》第13课《多态（Polymorphism）》的完整教学**视频口播脚本**，专为讲解“面向对象三大特性”中的**多态**设计，时长建议 10\~12 分钟，适合你当前课程系列的风格与节奏。

---

## 🎬 C# 初学者实例教程

### 第13课：《多态 —— 用统一方式操作不同对象》

---

### 🎙️【开场动画建议】

画面展示：多个不同的动物（🐶🐱🦁）响应同一个命令 `animal.Speak()`，却发出不同叫声。

🎙️讲解人旁白：

> “大家好，欢迎回到《C# 初学者实例教程》。今天我们将讲解继承的延伸 —— 多态（Polymorphism）。”

---

### 🎯【本课目标】

> “通过本课你将掌握：
>
> 1. 什么是多态；
> 2. 如何使用 `virtual` 和 `override`；
> 3. 如何用父类引用调用子类方法；
> 4. 多态的好处与实际应用。”

---

## 🧠 一、什么是多态？

🎙️

> “多态，简单说，就是**同一个操作，作用在不同对象上时表现出不同的行为**。”

🎯 举个例子：

> “动物都会叫，但狗汪汪叫，猫喵喵叫，狮子吼声震天。我们可以统一使用 `animal.Speak()`，但具体效果由对象类型决定，这就是多态。”

---

## 🔠 二、实现多态的基本语法

🎙️

> “C# 实现多态的核心是两个关键字：`virtual` 和 `override`。”

```csharp
public class Animal
{
    public virtual void Speak()
    {
        Console.WriteLine("动物在发出声音");
    }
}

public class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("狗：汪汪！");
    }
}

public class Cat : Animal
{
    public override void Speak()
    {
        Console.WriteLine("猫：喵喵！");
    }
}
```

---

## 🧪 三、用父类引用调用子类方法

🎙️

> “多态的关键在于：**我们使用的是父类引用，调用的是子类行为**。”

```csharp
Animal a1 = new Dog();
Animal a2 = new Cat();

a1.Speak(); // 输出：狗：汪汪！
a2.Speak(); // 输出：猫：喵喵！
```

📌 提示动画：

> “这就好像你命令一个‘动物’，但它根据自己的身份决定怎么执行。”

---

## 🧩 四、多态的实际意义

🎙️

> “多态让我们的代码：
> ✅ 更加灵活
> ✅ 更加统一
> ✅ 更加易扩展”

🎯 例子：

> “比如你写了一个方法 `MakeAnimalSpeak(Animal a)`，不论你传入的是狗、猫还是狮子，程序都能正确响应，这大大简化了代码结构。”

---

## 🧬 五、非虚方法不能被重写

🎙️

> “注意：只有用 `virtual` 声明的方法，才能在子类中使用 `override` 重写。否则你只是新写了一个方法，不会形成多态。”

错误示例：

```csharp
public class Animal
{
    public void Speak() { Console.WriteLine("动物"); }
}
public class Dog : Animal
{
    public void Speak() { Console.WriteLine("狗"); }
}
```

```csharp
Animal a = new Dog();
a.Speak(); // ❌ 仍输出：动物（不会多态）
```

---

## ⚠️ 六、小结：virtual vs override vs new

| 关键词        | 用法说明             |
| ---------- | ---------------- |
| `virtual`  | 声明父类中可被子类重写的方法   |
| `override` | 子类中重写父类的虚方法      |
| `new`      | 子类中隐藏父类同名方法（不推荐） |

---

## 🧠 七、课堂演练建议

🎙️

> “请你试着完成一个多态练习：
>
> * 创建一个 `Shape` 类，包含 `Draw()` 方法；
> * 创建 `Circle`、`Rectangle` 两个子类，重写 `Draw()`；
> * 编写一个方法 `DrawShape(Shape s)`，并分别传入不同图形。”

---

## 🧾 本课小结

🎙️

> “本节课，我们学习了多态的核心内容：
>
> * 多态的定义；
> * `virtual` + `override` 实现多态；
> * 用父类引用统一操作；
> * 多态让代码更灵活、统一、可扩展。”

---

## 🎬 下节预告

🎙️

> “下一课，我们将结合前几课所学，讲解‘抽象类（abstract）’—— 当你不希望父类有完整实现，而是只定义接口和规范时，该怎么办？我们下节课见！”

---

需要我为这一课准备课堂练习题、PPT、示例代码或可下载的项目模板吗？只要说一声，我可以继续准备！
