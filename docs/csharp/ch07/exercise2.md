---
# 这部分是关键！侧边栏显示名由这里决定
title: 八、同步训练  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 八、同步训练  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  8  # 侧边栏中排在第1位
---
## 创建类：Student

```csharp
using System;

class Student
{
	string Name{ get;set; }
	int Age{ get;set;	}
	// 在创建实例的同时完成赋值：
	public Student(string name,int age)
	{
		Name = name;
		Age = age;
		Console.WriteLine("学生初始化完毕");
	}
	//方法内部并没有使用name和age参数，而是直接用了类的Name/Age属性，所以没必要声明这两个参数。
	public void ShowInfo()
	{
		Console.WriteLine($"学生姓名：{Name},年龄：{Age}");
	}
}
class Program
{
	static void Main()
	{
		Student s1 = new Student("张三",18);
		s1.ShowInfo();
	}
}
```

## 创建类：Father

```csharp
using System;

class Father
{
	// 属性:带有方法体的字段
	public string BirthName{get;set;}
	public string GivenName{get;set;}
	public int Age{get;set;}
	//构造函数：没有返回值的方法
	public Father(string birthName,string givenName,int age)
	{
		BirthName = birthName;
		GivenName = givenName;
		Age = age;
	}
	//方法:类成员的排版遵循“先静态，后动态”原则
	public void ShowInfo()
	{
		Console.WriteLine($"父亲信息：姓名：{BirthName}{GivenName}，年龄：{Age}");
	}
}
class Program
{
	static void Main()
	{
		Father f1 = new Father("张","三",30);
		f1.ShowInfo();
	}
}
```

## 创建继承类：protected 

```csharp
using System;

class Father
{
	//protected:自己和子类可见
	string _birthName;
	string _givenName;
	// protected字段：存储数据，子类可访问
	protected int _age;
	// 只读属性，外部不能改
	public string BirthName{get;}
	public string GivenName{get;}
	// 属性：管控字段（校验+只读/只写）增强代码健壮性
	public int Age
    {
        get { return _age; }
        protected set // 保护级set：只有当前类+子类能修改
        {
            // 校验：年龄不能为负数
            if (value >= 0)
                _age = value;
            else
                _age = 0;
        }
    }
	//构造函数
	public Father(string birthName,string givenName,int age)
	{
		_birthName = birthName;
		_givenName = givenName;
		Age = age; // 通过属性赋值，触发校验
	}
	//方法
	public void ShowInfo()
	{
		Console.WriteLine($"信息：姓名：{_birthName}{_givenName}，年龄：{_age}");
	}
}
class Child:Father
{
	// ❌ 不写构造函数会报错！因为编译器不知道怎么调用父类的有参构造函数
	// 如果父类没有无参构造函数，子类就必须显式写构造函数，并通过base(...)调用父类的有参构造函数；
	// 如果父类有无参构造函数（哪怕是默认的、没写出来的），子类可以不写构造函数（编译器会自动帮子类生成无参构造函数，并隐式调用父类的无参构造函数）。
	public Child(string birthName,string givenName,int age):base(birthName,givenName,age)
	{
		Console.WriteLine("子类构造函数执行");
	}
}
class Program
{
	static void Main()
	{
		Father f1 = new Father("张","三",30);
		f1.ShowInfo();
		
		Child c1 = new Child("张", "帅", 10); 
		c1.ShowInfo();
		
		// 外部无法修改Xing（只读），也无法修改Age（set是protected）
        // f.Xing = "李"; // 报错
        // f.Age = 40; // 报错
	}
}
```

## 继承: 调用无参构造函数

```csharp
using System;

// 父类：Animal
class Animal
{
    // 自动属性（无需手动定义私有字段）
    public string Name { get; set; }
    public string Color { get; set; }
    public int Age { get; set; }

    // 正确的构造函数（无返回值，名称与类名一致）
    public Animal()
    {
        Name = "未命名";
        Color = "黑色";
        Age = 3;
    }

    // 普通方法
    public void Sleep()
    {
        Console.WriteLine($"{Name}今天睡了 5 小时。");
    }
}

// 子类：Dog（继承自 Animal）
class Dog : Animal
{
    public void MakeSound()
    {
        Console.WriteLine("汪汪");
    }
}

// 入口类
class Program
{
    static void Main()
    {
        Dog d1 = new Dog();
        Console.WriteLine(d1.Name);   // 输出：未命名
        Console.WriteLine(d1.Age);    // 输出：3
        Console.WriteLine(d1.Color);  // 输出：黑色
        d1.Sleep();                   // 输出：未命名今天睡了 5 小时。
        d1.MakeSound();               // 新增：验证子类方法（可选）
    }
}
```

## 继承：调用有参构造函数

```csharp
using System;

// 父类：Animal
class Animal
{
    // 自动属性（无需手动定义私有字段）
    public string Name { get; set; }
    public string Color { get; set; }
    public int Age { get; set; }

    // 正确的构造函数（无返回值，名称与类名一致）
    public Animal()
    {
        Name = "未命名";
        Color = "黑色";
        Age = 3;
    }
		public Animal(string name,string color,int age)
    {
        Name = name;
        Color = color;
        Age = age;
    }
    // 普通方法
    public void Sleep()
    {
        Console.WriteLine($"{Name}今天睡了 5 小时。");
    }
}

// 子类：Dog（继承自 Animal）
class Dog : Animal
{
  	// 调用父类有参构造函数 子类必须定义构造函数并使用 base 调用父类构造函数
    public Dog(string name,string color,int age):base(name,color,age){}
    public void MakeSound()
    {
        Console.WriteLine("汪汪");
    }
}

// 入口类
class Program
{
    static void Main()
    {
        Dog d1 = new Dog();
        Console.WriteLine(d1.Name);   // 输出：未命名
        Console.WriteLine(d1.Age);    // 输出：3
        Console.WriteLine(d1.Color);  // 输出：黑色
        d1.Sleep();                   // 输出：未命名今天睡了 5 小时。
        d1.MakeSound();               // 新增：验证子类方法（可选）
    }
}
```

## 继承：自动获得父类非私有成员

- 父类：Animal
  - 字段：_name, _age, _color
  - 方法：Eat(), MakeSound()
- 子类：Dog
  - 方法:  ShowInfo()、Dance()

```csharp
using System;

// 实际场景：基础动物类（宠物医院通用档案）
public class Animal
{
    // 1. 私有字段：核心数据完全私有化，杜绝外部直接修改（实际开发标准）
    private string _name;   // 宠物名字
    private int _age;       // 宠物年龄
    private string _breed;  // 品种（私有，仅内部使用）

    // 2. 受保护字段：子类可访问，但外部不可见（业务意义：毛色是动物通用属性，但无需对外暴露）
    protected string _furColor; 

    // 3. 公共属性：对外提供访问接口，带业务校验（实际开发核心）
    public string Name
    {
        get { return _name; }
        set 
        {
            // 业务校验：名字不能为空，默认"未知宠物"
            _name = string.IsNullOrWhiteSpace(value) ? "未知宠物" : value.Trim();
        }
    }
    public int Age
    {
        get { return _age; }
        set 
        {
            // 业务校验：非负，默认0
            _age = value < 0 ? 0 : value;
        }
    }

    // 4. 构造函数：初始化动物档案（避免零散赋值）
    public Animal(string breed, string name, int age, string furColor)
    {
        _breed = breed;
        Name = name;       // 通过属性赋值，触发校验
        Age = age;         // 通过属性赋值，触发校验
        _furColor = furColor; // protected字段仅内部/子类可赋值
    }

    // 5. 公共方法：对外提供的核心行为（宠物进食）
    public void Eat(string food)
    {
        Console.WriteLine($"【{_breed}】{Name}（{Age}岁）正在吃{food}");
    }

    // 6. 受保护方法：子类可复用的通用行为（外部不可见，睡眠时长（小时））
    protected void Sleep(int hours)
    {
        Console.WriteLine($"【{_breed}】{Name}睡了{hours}小时");
    }

    // 7. 私有方法：宠物呼吸 仅内部使用的基础生理行为，无需对外暴露（子类/外部均不可见）
    private void Breathe()
    {
        Console.WriteLine($"{Name}正常呼吸中...");
    }

    // 补充：内部调用私有方法（体现私有方法的作用）
    public void CheckHealth()
    {
        Breathe(); // 健康检查包含呼吸检测，内部调用私有方法
        Console.WriteLine($"【{_breed}】{Name}健康状态正常");
    }
}

// 实际场景：狗类（继承动物类，专属品种逻辑）
public class Dog : Animal
{
    // 子类私有字段：狗的专属属性（如品种细分）
    private string _dogBreed; // 如：金毛、哈士奇

    // 子类构造函数：调用父类构造函数，初始化专属属性
    public Dog(string dogBreed, string name, int age, string furColor) 
        : base("犬类", name, age, furColor) // 父类品种固定为"犬类"
    {
        _dogBreed = dogBreed; // 初始化子类专属字段
    }

    // 子类公共方法：展示狗的完整档案（体现protected字段的访问）
    public void ShowDogProfile()
    {
        // 访问父类protected字段 ✓
        Console.WriteLine($"🐶 狗狗档案：");
        Console.WriteLine($"  品种：{_dogBreed}");
        Console.WriteLine($"  名字：{Name}（父类public属性）");
        Console.WriteLine($"  年龄：{Age}岁（父类public属性）");
        Console.WriteLine($"  毛色：{_furColor}（父类protected字段）");

        // 调用父类public方法 ✓
        Eat("狗粮");
        // 调用父类protected方法 ✓
        Sleep(8);
        // 调用父类私有方法 ❌（编译报错，注释演示）
        // Breathe(); 
    }

    // 子类专属方法：狗的特有行为
    public void Bark(string emotion)
    {
        string barkSound;
        switch (emotion)
        {
            case "开心":
                barkSound = "汪汪汪～";
                break;
            case "警惕":
                barkSound = "汪！汪！";
                break;
            default:
                barkSound = "呜汪...";
                break;
        }
        Console.WriteLine($"{Name}（{_dogBreed}）{emotion}地叫：{barkSound}");
    }
}

// 实际场景：程序入口（宠物档案管理演示）
public class Program
{
    static void Main(string[] args)
    {
        // 1. 创建狗狗档案（符合实际业务：初始化即赋值，而非零散修改）
        Dog d1 = new Dog("金毛", "旺财", 3, "金黄色");

        // 2. 访问公共成员（符合实际：外部仅能操作public成员）
        d1.Name = "来福"; // 修改名字（触发属性校验）
        d1.Age = -1;      // 尝试设置负数年龄（自动修正为0）
        d1.Eat("牛肉粒"); // 调用公共方法
        d1.CheckHealth(); // 调用公共方法（内部触发私有方法）

        // 3. 访问子类方法
        Console.WriteLine("\n----- 狗狗专属信息 -----");
        d1.ShowDogProfile();
        d1.Bark("开心");

        // 4. 禁止访问受保护/私有成员（体现封装性）
        // d1._furColor = "黑色"; // ❌ 编译报错：protected字段外部不可访问
        // d1.Sleep(5);          // ❌ 编译报错：protected方法外部不可访问
    }
}
```

## 多态-虚方法

```csharp
using System;

public class  Shape
{
  //属性
  public string Name{ get; set;}
  //构造函数
  public Shape(string name)
  {
    Name = name;
  }
  //虚方法：具体的实现是"虚"的，可以在子类中变成不同的"实"体
  public virtual double GetArea()
  {
    Console.WriteLine($"{Name}无面积计算逻辑");
    return 0;
  }
}
// 子类 1：矩形
public class Rectangle : Shape
{
  public double Width { get; set; }
  public double Height { get; set; }
  public Rectangle(string name, double w, double h):base(name)
  {
    Width = w;
    Height = h;
  }
  // 重写父类虚方法
  public override double GetArea()
  {
    double area = Width * Height;
    Console.WriteLine($"{Name}面积：{area:F2}");
    return area;
  }
}
// 子类 2：圆形
public class Circle:Shape
{
  // 属性
  public double Radius{ get; set; }
  // 构造函数
  public Circle( string name, double r) : base( name )
  {
    Radius = r;
  }
  // 重写虚方法
  public override double GetArea()
  {
    double area = Math.PI * Radius * Radius;
    Console.WriteLine($"{Name}面积：{area:F2}");
    return area;
  }
}
// 测试
class Program
{
  static void Main()
  {
    // 父类引用指向不同子类实例（多态核心）执行子类实例的逻辑
    Shape s1 = new Rectangle("矩形",5,3);
    Shape s2 = new Circle("圆形",2);
    
    //同一方法调用，执行不同逻辑
    s1.GetArea();
    s2.GetArea();
  }
}
```

## 多态：抽象类

```csharp
using System;

// 抽象类 Shape
abstract class Shape
{
  public string Name{ get; set; }
  public Shape(string name)
  {
    Name = name;
  }
  // 抽象方法 GetArea()
  public abstract double GetArea();
}

class Square : Shape
{
  public double Side{ get; set; }
  public Square(string name, double side) : base(name)
  {
     Side = side;
  }
  
  // 必须实现抽象方法
  public override double GetArea()
  {
    return Side * Side;
  }
  
  class Program
  {
    static void Main()
    {
      Shape s1 = new Square("正方形",4);
      Console.WriteLine($"{s1.Name}面积：{s1.GetArea()}");
    }
  }
}
```

