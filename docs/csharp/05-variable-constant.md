---
noteId: "2691a0a03f3511f081f2eb75db5e372e"
tags: []

---

## 量是什么

![变量](./images/measure.jpg)

- 动词:测量、计量、丈量
- 名词：容器

## 变量

![变量](./images/what-is-variables.jpeg)

### 变量是什么
定义：

- 变量是命名的内存地址。
- 变量是数据的别名。
- 变量是程序引用数据的一种方式。

你可以理解为：变量是一个存储数据的容器。变量就是可以变化的量，变量与常量相对应，常量指不可以变化的量。

### 声明变量

语法

```csharp
数据类型 变量名; //声明变量可以不赋值
``` 

示例

```csharp
int age;
string name;
bool isOnline;
```

注意

1.变量必须先初始化才能使用。

```csharp
int y;
// Console.WriteLine(y); // ❌ 错误：未赋值
```

2.声明变量时，必须指定数据类型；

3.变量类型不能修改

```csharp
int x = 10;
x = 20; // ✅ 正确
// x = "hello"; // ❌ 错误：类型不匹配
```

### 初始化变量

定义：初始化变量指第一次为变量赋值。

语法

```csharp
数据类型 变量名 = 值; //声明变量的同时赋值
```

示例

```csharp
int age = 25;
string name = "Alice";
bool isOnline = true;
```

### 变量命名规则

必须遵守的规则

* 只能包含字母、数字和下划线，不能以数字开头
* 不能使用 C# 关键字作为变量名（如 `int`, `class` 等）

推荐规则：

1.驼峰式: 推荐使用2个以上的单词命名，第一个单词首字母小写，其他单词首字母大写

```c#
int userAge;
string userName;
```
2.有语义

```c#
int t = 18; // t没有语义，不推荐
int age = 18; //推荐
string a = "张三"; //a没有语义，不推荐
string name = "张三"; //推荐
```

命名规范(推荐)

| **用途**     | **命名方式**    | **示例**              | **说明**                  |
| ---------- | ----------- | ------------------- | ----------------------- |
| **变量名**    | **小驼峰命名法**  | `userName`, `count` | 首字母小写，每个单词首字母大写         |
| **方法名**    | **帕斯卡命名法**  | `GetUserName()`     | 所有单词首字母大写               |
| **类名/结构名** | **帕斯卡命名法**  | `Person`, `CarInfo` | 所有单词首字母大写               |
| **常量名**    | **帕斯卡命名法** | `MaxLength`        | 所有单词首字母大写  |

## 常量
### 常量是什么

**常量指值不可变的变量。**也就是说，常量是指在程序运行期间值始终不能改变。一旦声明并赋值，就不能再修改它的值。

### 常量的声明
因为常量的值是不可变值，所以在声明常量时，必须初始化。

语法：

```csharp
const 数据类型 常量名 = 值;
```
示例：

```csharp
const double Pi = 3.14159;
const int MaxScore = 100;
```

注意：

* `Pi` 和 `MaxScore` 是常量，**不能在程序中被重新赋值**
* 如果尝试修改它们，会报错：

```csharp
Pi = 3.14; // ❌ 编译错误：不能给常量赋值
```

### 常量的命名方法

微软官方推荐使用“帕斯卡命名法”（PascalCase）命名常量。

```csharp
const int MaxValue = 100;
readonly string DefaultName = "Admin";
```
### 常量的应用场景

- 定义数学常数：

  ```csharp
  const double Gravity = 9.8;
  ```

- 定义配置信息（不变的）：

  ```csharp
  const string AppName = "MyApp";
  const string AppAuthor = "张三";
  ```
