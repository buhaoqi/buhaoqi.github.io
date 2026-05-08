---
# 这部分是关键！侧边栏显示名由这里决定
title: 练习题：创建类基础  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 练习题：创建类基础  # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  7  # 侧边栏中排在第1位
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
