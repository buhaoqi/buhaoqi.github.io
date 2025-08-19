---
noteId: "98fc2410676e11f0b0d6278e683d20b1"
tags: []

---

## 概览

| 运算符 | 描述           | 示例              |
|--------|----------------|-------------------|
| `is`   | 类型检查       | `a is Type`       |
| `as`   | 安全类型转换   | `a as Type`       |
| `()`   | 类型转换       | `(Type)a`         |
| `typeof` | 获取类型对象 | `typeof(Type)`    |
| `nameof` | 获取名称     | `nameof(variable)`|
| `default` | 默认值     | `default(T)`      |


## is运算符



`typeof` 是 C# 中用于获取类型元数据的关键运算符，它在编译时求值并返回 `System.Type` 对象。以下是全面解析：

## 一、基础用法

### 1. 获取类型信息
```csharp
Type intType = typeof(int);       // 获取值类型信息
Type strType = typeof(string);    // 获取引用类型信息
Type listType = typeof(List<>);   // 获取开放泛型类型
```

### 2. 与 `GetType()` 的区别
| 特性              | `typeof`                     | `GetType()`                 |
|-------------------|-----------------------------|-----------------------------|
| **调用时机**      | 编译时                      | 运行时                      |
| **调用对象**      | 类型本身（如 `typeof(int)`） | 对象实例（如 `5.GetType()`）|
| **null处理**      | 不需要实例                  | 需要非null实例              |
| **静态类型支持**  | 支持                        | 不支持                      |

## 二、高级用法

### 1. 泛型类型处理
```csharp
// 获取泛型类型定义
Type openGeneric = typeof(Dictionary<,>);

// 获取封闭泛型类型
Type closedGeneric = typeof(Dictionary<string, int>);

// 运行时构造泛型类型
Type dynamicGeneric = typeof(List<>).MakeGenericType(typeof(int));
```

### 2. 反射应用
```csharp
// 获取类型成员信息
PropertyInfo[] props = typeof(DateTime).GetProperties();
MethodInfo method = typeof(Math).GetMethod("Sqrt");

// 特性检查
bool isSerializable = typeof(MyClass).IsDefined(typeof(SerializableAttribute));
```

### 3. 类型比较
```csharp
// 精确类型匹配
if (typeof(MyClass) == obj.GetType()) { ... }

// 继承关系检查
if (typeof(Button).IsSubclassOf(typeof(Control))) { ... }

// 接口实现检查
if (typeof(IEnumerable).IsAssignableFrom(typeof(List<string>))) { ... }
```

## 三、特殊场景

### 1. 静态类型检查
```csharp
// 编译时验证类型存在
Type mathType = typeof(Math);  // 如果Math类不存在，编译将失败

// 获取嵌套类型
Type nestedType = typeof(ContainerClass.NestedClass);
```

### 2. 与 `nameof` 配合
```csharp
string typeName = nameof(String);    // 返回 "String"
Type type = typeof(string);         // 返回 System.String 的 Type 对象
```

### 3. 动态类型处理
```csharp
// 通过字符串获取类型（部分反射场景）
Type dynamicType = Type.GetType("System.String");
```

## 四、底层原理

1. **编译时行为**：
   ```csharp
   // 编译后等价于：
   Type t = Type.GetTypeFromHandle(typeof(int).TypeHandle);
   ```

2. **类型句柄**：
   - 每个 `typeof` 调用对应一个 `RuntimeTypeHandle`
   - 在模块的元数据中存储类型引用

3. **JIT优化**：
   - 重复 `typeof` 调用会被缓存
   - 不会引起运行时类型加载开销

## 五、最佳实践

1. **性能敏感场景**：
   ```csharp
   // 缓存Type对象
   private static readonly Type _targetType = typeof(MyClass);
   ```

2. **泛型约束**：
   ```csharp
   void Process<T>() where T : new() 
   {
       Type t = typeof(T);  // 获取泛型参数类型
   }
   ```

3. **模式匹配增强**（C# 7.0+）：
   ```csharp
   if (obj.GetType() == typeof(DateTime)) { ... }
   ```

4. **避免的陷阱**：
   ```csharp
   // 错误：不能用于变量
   var x = 5;
   Type t = typeof(x);  // 编译错误

   // 正确做法
   Type t = x.GetType();
   ```

## 六、与其他操作符对比

| 操作符       | 用途                          | 示例                      |
|--------------|-----------------------------|--------------------------|
| `typeof`     | 获取类型元数据                | `typeof(int)`            |
| `is`         | 类型检查                      | `if (obj is string)`     |
| `as`         | 安全类型转换                  | `string s = obj as string` |
| `nameof`     | 获取标识符名称                | `nameof(MyMethod)`       |

`typeof` 是 C# 反射系统的基石运算符，合理使用可以实现：
- 安全的类型元数据访问
- 编译时类型验证
- 高效的动态类型处理

在框架开发、序列化系统和依赖注入容器等场景中具有不可替代的作用。