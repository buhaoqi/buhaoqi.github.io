---
noteId: "9ba45960e33011f0b58d335bcefc697a"
tags: []

---




# C#数组常用静态方法

| 方法语法格式 | 用途 | 返回值 | 参数说明 |
|-------------|------|--------|----------|
| **查找与搜索** | | | |
| `Array.IndexOf(Array array, object value)` | 查找指定值第一次出现的索引 | `int` | `array`: 要搜索的数组<br>`value`: 要查找的值 |
| `Array.LastIndexOf(Array array, object value)` | 查找指定值最后一次出现的索引 | `int` | `array`: 要搜索的数组<br>`value`: 要查找的值 |
| `Array.BinarySearch(Array array, object value)` | 在已排序数组中执行二分查找 | `int` | `array`: 已排序的数组<br>`value`: 要查找的值 |
| `Array.Find<T>(T[] array, Predicate<T> match)` | 搜索匹配指定条件的第一个元素 | `T` | `array`: 要搜索的数组<br>`match`: 定义搜索条件的委托 |
| `Array.FindAll<T>(T[] array, Predicate<T> match)` | 搜索匹配指定条件的所有元素 | `T[]` | `array`: 要搜索的数组<br>`match`: 定义搜索条件的委托 |
| `Array.FindIndex<T>(T[] array, Predicate<T> match)` | 搜索匹配条件的第一个元素的索引 | `int` | `array`: 要搜索的数组<br>`match`: 定义搜索条件的委托 |
| `Array.FindLast<T>(T[] array, Predicate<T> match)` | 搜索匹配指定条件的最后一个元素 | `T` | `array`: 要搜索的数组<br>`match`: 定义搜索条件的委托 |
| `Array.FindLastIndex<T>(T[] array, Predicate<T> match)` | 搜索匹配条件的最后一个元素的索引 | `int` | `array`: 要搜索的数组<br>`match`: 定义搜索条件的委托 |
| `Array.Exists<T>(T[] array, Predicate<T> match)` | 确定数组是否包含匹配条件的元素 | `bool` | `array`: 要搜索的数组<br>`match`: 定义搜索条件的委托 |
| **排序与顺序** | | | |
| `Array.Sort(Array array)` | 使用数组元素的默认比较器进行排序 | `void` | `array`: 要排序的一维数组 |
| `Array.Sort(Array keys, Array items)` | 基于第一个数组中的键排序两个数组 | `void` | `keys`: 包含排序键的数组<br>`items`: 要排序的数组 |
| `Array.Reverse(Array array)` | 反转整个数组中元素的顺序 | `void` | `array`: 要反转的一维数组 |
| `Array.Reverse(Array array, int index, int length)` | 反转数组指定部分中元素的顺序 | `void` | `array`: 要反转的数组<br>`index`: 起始索引<br>`length`: 要反转的元素数 |
| **条件检查** | | | |
| `Array.TrueForAll<T>(T[] array, Predicate<T> match)` | 确定数组中的所有元素是否都匹配指定条件 | `bool` | `array`: 要检查的数组<br>`match`: 定义检查条件的委托 |
| **遍历与操作** | | | |
| `Array.ForEach<T>(T[] array, Action<T> action)` | 对指定数组的每个元素执行指定操作 | `void` | `array`: 要操作的数组<br>`action`: 要对每个元素执行的操作委托 |
| **类型转换** | | | |
| `Array.ConvertAll<TInput, TOutput>(TInput[] array, Converter<TInput, TOutput> converter)` | 将一种类型的数组转换为另一种类型 | `TOutput[]` | `array`: 要转换的源数组<br>`converter`: 将对象从一种类型转换为另一种类型的委托 |
| **大小调整** | | | |
| `Array.Resize<T>(ref T[] array, int newSize)` | 将数组的大小更改为指定的新大小 | `void` | `array`: 要调整大小的一维数组引用<br>`newSize`: 新数组的大小 |
| **复制操作** | | | |
| `Array.Copy(Array sourceArray, Array destinationArray, int length)` | 从数组的第一个元素开始复制指定数量的元素 | `void` | `sourceArray`: 源数组<br>`destinationArray`: 目标数组<br>`length`: 要复制的元素数 |
| `Array.ConstrainedCopy(Array sourceArray, int sourceIndex, Array destinationArray, int destinationIndex, int length)` | 执行约束复制操作，确保所有操作都成功或都失败 | `void` | `sourceArray`: 源数组<br>`sourceIndex`: 源数组起始索引<br>`destinationArray`: 目标数组<br>`destinationIndex`: 目标数组起始索引<br>`length`: 要复制的元素数 |
| `Array.CopyTo(Array sourceArray, int sourceIndex, Array destinationArray, int destinationIndex, int length)` | 从指定的源索引开始复制元素到目标数组的指定索引 | `void` | 同ConstrainedCopy参数 |
| **清空与初始化** | | | |
| `Array.Clear(Array array, int index, int length)` | 将数组中的一系列元素设置为默认值 | `void` | `array`: 要清除的数组<br>`index`: 起始索引<br>`length`: 要清除的元素数 |
| `Array.Fill<T>(T[] array, T value)` | 将指定值分配给数组的每个元素 | `void` | `array`: 要填充的数组<br>`value`: 要分配给每个元素的值 |
| `Array.Fill<T>(T[] array, T value, int startIndex, int count)` | 将指定值分配给数组指定范围内的每个元素 | `void` | `array`: 要填充的数组<br>`value`: 要分配的值<br>`startIndex`: 起始索引<br>`count`: 要填充的元素数 |
| **创建与比较** | | | |
| `Array.CreateInstance(Type elementType, int length)` | 创建指定类型和长度的一维数组 | `Array` | `elementType`: 数组元素的类型<br>`length`: 数组的大小 |
| `Array.CreateInstance(Type elementType, int length1, int length2)` | 创建指定类型的二维数组 | `Array` | `elementType`: 数组元素的类型<br>`length1`: 第一维大小<br>`length2`: 第二维大小 |
| `Array.Empty<T>()` | 返回指定类型的空数组 | `T[]` | 无参数，类型参数`T`指定数组元素类型 |

## 使用示例

```csharp
// 查找方法示例
int[] numbers = { 1, 3, 5, 7, 9, 5, 3 };
int index = Array.IndexOf(numbers, 5);  // 返回 2
int lastIndex = Array.LastIndexOf(numbers, 5);  // 返回 5
int found = Array.Find(numbers, x => x > 6);  // 返回 7

// 排序与反转示例
int[] arr = { 5, 2, 8, 1, 9 };
Array.Sort(arr);  // arr变为 {1, 2, 5, 8, 9}
Array.Reverse(arr);  // arr变为 {9, 8, 5, 2, 1}

// 条件检查示例
bool allPositive = Array.TrueForAll(arr, x => x > 0);  // 返回 true
bool existsEven = Array.Exists(arr, x => x % 2 == 0);  // 返回 true

// 遍历与操作示例
Array.ForEach(arr, x => Console.Write(x + " "));  // 输出: 9 8 5 2 1

// 类型转换示例
int[] intArray = { 1, 2, 3 };
string[] strArray = Array.ConvertAll(intArray, x => x.ToString());  // {"1", "2", "3"}

// 大小调整示例
Array.Resize(ref arr, 10);  // 将数组大小扩展到10

// 复制操作示例
int[] source = { 1, 2, 3, 4, 5 };
int[] dest = new int[5];
Array.Copy(source, dest, 3);  // dest前3个元素变为 {1, 2, 3}

// 清空与初始化示例
int[] clearArray = { 1, 2, 3, 4, 5 };
Array.Clear(clearArray, 1, 3);  // 数组变为 {1, 0, 0, 0, 5}
Array.Fill(clearArray, 9);  // 数组变为 {9, 9, 9, 9, 9}

// 创建数组示例
Array multiDim = Array.CreateInstance(typeof(int), 3, 4);  // 创建3x4的二维数组
int[] empty = Array.Empty<int>();  // 返回空的int数组
```

## 注意事项

1. **性能考虑**：
   - `Array.BinarySearch()`要求数组已排序
   - `Array.Copy()`比`Array.ConstrainedCopy()`更快但安全性较低
   - `Array.Resize()`实际创建新数组并复制元素

2. **异常处理**：
   - 大多数方法在参数无效时会抛出`ArgumentNullException`、`ArgumentOutOfRangeException`等异常
   - `Array.BinarySearch()`在找不到元素时返回负数

3. **泛型与非泛型版本**：
   - 带`<T>`的泛型方法提供更好的类型安全
   - 非泛型方法适用于编译时未知类型的情况

4. **委托参数**：
   - `Predicate<T>`：返回bool，用于查找和条件检查
   - `Action<T>`：无返回值，用于遍历操作
   - `Converter<TInput, TOutput>`：返回转换后的值，用于类型转换

5. **静态方法 vs 实例方法**：
   - 表中列出的都是静态方法，通过`Array.`调用
   - 数组实例也有自己的方法如`Clone()`、`CopyTo()`等
## C#数组常用方法汇总

下表列举了C#数组最常用的方法，按功能分类整理：

| 方法类别 | 方法名 | 描述 | 示例 |
|---------|--------|------|------|
| **静态方法** | `Array.CreateInstance()` | 创建指定类型和维度的数组 | `Array arr = Array.CreateInstance(typeof(int), 5);` |
|  | `Array.IndexOf()` | 返回第一个匹配项的索引 | `int index = Array.IndexOf(arr, 42);` |
|  | `Array.LastIndexOf()` | 返回最后一个匹配项的索引 | `int lastIndex = Array.LastIndexOf(arr, 42);` |
|  | `Array.BinarySearch()` | 使用二分搜索算法在已排序数组中查找值 | `int pos = Array.BinarySearch(sortedArr, target);` |
|  | `Array.Sort()` | 对一维数组进行排序 | `Array.Sort(myArray);` |
|  | `Array.Reverse()` | 反转一维数组中的元素顺序 | `Array.Reverse(myArray);` |
|  | `Array.Exists()` | 确定数组是否包含匹配指定条件的元素 | `bool exists = Array.Exists(arr, x => x > 10);` |
|  | `Array.Find()` | 搜索匹配条件的第一个元素 | `int found = Array.Find(arr, x => x > 10);` |
|  | `Array.FindAll()` | 检索所有匹配条件的元素 | `int[] results = Array.FindAll(arr, x => x > 10);` |
|  | `Array.FindIndex()` | 搜索匹配条件的第一个元素的索引 | `int idx = Array.FindIndex(arr, x => x > 10);` |
|  | `Array.FindLast()` | 搜索匹配条件的最后一个元素 | `int last = Array.FindLast(arr, x => x > 10);` |
|  | `Array.FindLastIndex()` | 搜索匹配条件的最后一个元素的索引 | `int lastIdx = Array.FindLastIndex(arr, x => x > 10);` |
|  | `Array.TrueForAll()` | 确定数组中的每个元素是否都满足条件 | `bool all = Array.TrueForAll(arr, x => x > 0);` |
|  | `Array.ForEach()` | 对数组的每个元素执行指定操作 | `Array.ForEach(arr, x => Console.WriteLine(x));` |
|  | `Array.ConvertAll()` | 将一种类型的数组转换为另一种类型 | `string[] strArr = Array.ConvertAll(intArr, x => x.ToString());` |
|  | `Array.Resize()` | 将数组的大小更改为指定的新大小 | `Array.Resize(ref arr, 20);` |
|  | `Array.Clear()` | 将数组中的一系列元素设置为默认值 | `Array.Clear(arr, 0, arr.Length);` |
|  | `Array.Copy()` | 将数组的一部分复制到另一个数组中 | `Array.Copy(source, dest, length);` |
|  | `Array.ConstrainedCopy()` | 保证复制操作的原子性（要么全部成功，要么全部失败） | `Array.ConstrainedCopy(source, 0, dest, 0, 5);` |
| **实例属性** | `Length` | 获取数组中所有维度的元素总数 | `int len = arr.Length;` |
|  | `Rank` | 获取数组的维度数 | `int dimensions = arr.Rank;` |
|  | `GetLength()` | 获取指定维度的元素数 | `int dim0Length = arr.GetLength(0);` |
|  | `GetLowerBound()` | 获取指定维度的下限（通常为0） | `int lowerBound = arr.GetLowerBound(0);` |
|  | `GetUpperBound()` | 获取指定维度的上限 | `int upperBound = arr.GetUpperBound(0);` |
| **实例方法** | `Clone()` | 创建数组的浅拷贝 | `int[] copy = (int[])arr.Clone();` |
|  | `CopyTo()` | 将当前一维数组的所有元素复制到指定的一维数组中 | `arr.CopyTo(destArr, 0);` |
|  | `GetValue()` | 获取数组中指定位置的值 | `object val = arr.GetValue(3);` |
|  | `SetValue()` | 将数组中指定位置的值设置为新值 | `arr.SetValue(42, 3);` |
| **LINQ扩展方法** | `Select()` | 将数组中的每个元素投影到新形式 | `var squares = arr.Select(x => x * x).ToArray();` |
|  | `Where()` | 基于谓词筛选数组元素 | `var filtered = arr.Where(x => x > 0).ToArray();` |
|  | `OrderBy()` / `OrderByDescending()` | 按升序/降序对数组排序 | `var sorted = arr.OrderBy(x => x).ToArray();` |
|  | `First()` / `FirstOrDefault()` | 返回第一个元素 | `int first = arr.FirstOrDefault();` |
|  | `Last()` / `LastOrDefault()` | 返回最后一个元素 | `int last = arr.LastOrDefault();` |
|  | `Any()` | 确定数组是否包含任何元素或满足条件的元素 | `bool any = arr.Any(x => x > 10);` |
|  | `All()` | 确定所有元素是否满足条件 | `bool all = arr.All(x => x > 0);` |
|  | `Count()` | 返回元素总数或满足条件的元素数 | `int count = arr.Count(x => x > 10);` |
|  | `Sum()` / `Average()` | 计算总和/平均值 | `double avg = arr.Average();` |
|  | `Min()` / `Max()` | 查找最小/最大值 | `int max = arr.Max();` |
|  | `ToArray()` | 将集合转换为数组 | `int[] newArr = list.ToArray();` |
|  | `ToList()` | 将数组转换为List | `List<int> list = arr.ToList();` |

## 实用示例

```csharp
// 创建和初始化数组
int[] numbers = { 5, 2, 8, 1, 9 };

// 排序
Array.Sort(numbers);  // 结果: {1, 2, 5, 8, 9}

// 反转
Array.Reverse(numbers);  // 结果: {9, 8, 5, 2, 1}

// 查找元素
int index = Array.IndexOf(numbers, 8);  // 结果: 1

// 使用LINQ筛选
var filtered = numbers.Where(n => n > 5).ToArray();  // 结果: {9, 8}
```

**注意**：
1. 数组是固定大小的，创建后不能直接调整大小（`Array.Resize()`实际创建新数组）
2. 多数静态方法适用于所有数组类型
3. LINQ方法需要引入`System.Linq`命名空间
4. 数组索引从0开始，多维数组使用逗号分隔的索引访问