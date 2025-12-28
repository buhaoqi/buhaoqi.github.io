---
noteId: "9ba45960e33011f0b58d335bcefc697a"
tags: []

---





## 查找与搜索

| 方法语法格式 | 用途 | 返回值 | 参数说明 |
|-------------|------|--------|----------|
| `Array.IndexOf(Array array, object value)` | 查找指定值第一次出现的索引 | `int` | `array`: 要搜索的数组<br>`value`: 要查找的值 |
| `Array.IndexOf(Array array, object value, int startIndex)` | 从指定索引开始查找指定值第一次出现的索引 | `int` | `array`: 要搜索的数组<br>`value`: 要查找的值<br>`startIndex`: 开始搜索的索引 |
| `Array.IndexOf(Array array, object value, int startIndex, int count)` | 从指定索引开始，在指定范围内查找指定值第一次出现的索引 | `int` | `array`: 要搜索的数组<br>`value`: 要查找的值<br>`startIndex`: 开始搜索的索引<br>`count`: 要搜索的元素数量 |
| `Array.LastIndexOf(Array array, object value)` | 查找指定值最后一次出现的索引 | `int` | `array`: 要搜索的数组<br>`value`: 要查找的值 |
| `Array.LastIndexOf(Array array, object value, int startIndex)` | 从指定索引开始向前查找指定值最后一次出现的索引 | `int` | `array`: 要搜索的数组<br>`value`: 要查找的值<br>`startIndex`: 开始搜索的索引 |
| `Array.LastIndexOf(Array array, object value, int startIndex, int count)` | 从指定索引开始，在指定范围内向前查找指定值最后一次出现的索引 | `int` | `array`: 要搜索的数组<br>`value`: 要查找的值<br>`startIndex`: 开始搜索的索引<br>`count`: 要搜索的元素数量 |
| `Array.BinarySearch(Array array, object value)` | 在已排序数组中执行二分查找 | `int` | `array`: 已排序的数组<br>`value`: 要查找的值 |
| `Array.BinarySearch(Array array, int index, int length, object value)` | 在已排序数组的指定范围内执行二分查找 | `int` | `array`: 已排序的数组<br>`index`: 搜索范围的起始索引<br>`length`: 搜索范围的长度<br>`value`: 要查找的值 |
| `Array.Find<T>(T[] array, Predicate<T> match)` | 搜索匹配指定条件的第一个元素 | `T` | `array`: 要搜索的数组<br>`match`: 定义搜索条件的委托 |
| `Array.FindAll<T>(T[] array, Predicate<T> match)` | 搜索匹配指定条件的所有元素 | `T[]` | `array`: 要搜索的数组<br>`match`: 定义搜索条件的委托 |
| `Array.FindIndex<T>(T[] array, Predicate<T> match)` | 搜索匹配条件的第一个元素的索引 | `int` | `array`: 要搜索的数组<br>`match`: 定义搜索条件的委托 |
| `Array.FindIndex<T>(T[] array, int startIndex, Predicate<T> match)` | 从指定索引开始搜索匹配条件的第一个元素的索引 | `int` | `array`: 要搜索的数组<br>`startIndex`: 开始搜索的索引<br>`match`: 定义搜索条件的委托 |
| `Array.FindIndex<T>(T[] array, int startIndex, int count, Predicate<T> match)` | 从指定索引开始，在指定范围内搜索匹配条件的第一个元素的索引 | `int` | `array`: 要搜索的数组<br>`startIndex`: 开始搜索的索引<br>`count`: 要搜索的元素数量<br>`match`: 定义搜索条件的委托 |
| `Array.FindLast<T>(T[] array, Predicate<T> match)` | 搜索匹配指定条件的最后一个元素 | `T` | `array`: 要搜索的数组<br>`match`: 定义搜索条件的委托 |
| `Array.FindLastIndex<T>(T[] array, Predicate<T> match)` | 搜索匹配条件的最后一个元素的索引 | `int` | `array`: 要搜索的数组<br>`match`: 定义搜索条件的委托 |
| `Array.FindLastIndex<T>(T[] array, int startIndex, Predicate<T> match)` | 从指定索引开始向前搜索匹配条件的最后一个元素的索引 | `int` | `array`: 要搜索的数组<br>`startIndex`: 开始搜索的索引<br>`match`: 定义搜索条件的委托 |
| `Array.FindLastIndex<T>(T[] array, int startIndex, int count, Predicate<T> match)` | 从指定索引开始，在指定范围内向前搜索匹配条件的最后一个元素的索引 | `int` | `array`: 要搜索的数组<br>`startIndex`: 开始搜索的索引<br>`count`: 要搜索的元素数量<br>`match`: 定义搜索条件的委托 |
| `Array.Exists<T>(T[] array, Predicate<T> match)` | 确定数组是否包含匹配条件的元素 | `bool` | `array`: 要搜索的数组<br>`match`: 定义搜索条件的委托 |


## 排序与顺序

| 方法语法格式 | 用途 | 返回值 | 参数说明 |
|-------------|------|--------|----------|
| `Array.Sort(Array array)` | 对整个一维数组进行升序排序 | `void` | `array`: 要排序的一维数组 |
| `Array.Sort(Array keys, Array items)` | 根据第一个数组的键对两个相关数组进行排序 | `void` | `keys`: 包含排序键的数组<br>`items`: 包含对应项的数组 |
| `Array.Sort(Array array, IComparer comparer)` | 使用指定的比较器对整个数组排序 | `void` | `array`: 要排序的数组<br>`comparer`: 比较元素时使用的比较器实现 |
| `Array.Sort(Array array, int index, int length)` | 对数组中指定范围的元素进行升序排序 | `void` | `array`: 要排序的数组<br>`index`: 排序起始索引<br>`length`: 要排序的元素数量 |
| `Array.Sort(Array array, int index, int length, IComparer comparer)` | 使用指定的比较器对数组指定范围排序 | `void` | `array`: 要排序的数组<br>`index`: 排序起始索引<br>`length`: 要排序的元素数量<br>`comparer`: 比较元素时使用的比较器 |
| `Array.Sort(Array keys, Array items, int index, int length)` | 根据第一个数组的键对两个相关数组的指定范围排序 | `void` | `keys`: 包含排序键的数组<br>`items`: 包含对应项的数组<br>`index`: 排序起始索引<br>`length`: 要排序的元素数量 |
| `Array.Reverse(Array array)` | 反转整个数组中元素的顺序 | `void` | `array`: 要反转的一维数组 |
| `Array.Reverse(Array array, int index, int length)` | 反转数组指定部分中元素的顺序 | `void` | `array`: 要反转的数组<br>`index`: 起始索引<br>`length`: 要反转的元素数 |

## 常用示例说明：

### 1. 基本排序
```csharp
int[] numbers = { 9, 4, 2, 7, 1 };
Array.Sort(numbers);  // 对整个数组排序
```

### 2. 范围排序
```csharp
int[] numbers = { 5, 9, 2, 7, 6, 1 };
Array.Sort(numbers, 1, 3);  // 从索引1开始，排序3个元素
```

### 3. 使用自定义比较器
```csharp
string[] words = { "apple", "banana", "cherry" };
Array.Sort(words, StringComparer.OrdinalIgnoreCase);  // 不区分大小写排序
```

### 4. 对两个相关数组排序
```csharp
string[] names = { "Tom", "Alice", "Bob" };
int[] scores = { 85, 90, 78 };
Array.Sort(names, scores);  // 按姓名排序，分数数组相应调整
// 结果: names = ["Alice", "Bob", "Tom"], scores = [90, 78, 85]
```

### 5. 泛型数组排序
```csharp
double[] values = { 3.1, 2.4, 5.6, 1.2 };
Array.Sort(values);  // 泛型版本，更高效
```

重要特性：**就地排序**：所有重载都直接在原数组上操作，不创建新数组



## 遍历与操作

| 方法语法格式 | 用途 | 返回值 | 参数说明 |
|-------------|------|--------|----------|
| `Array.ForEach<T>(T[] array, Action<T> action)` | 对指定数组的每个元素执行指定操作 | `void` | `array`: 要操作的数组<br>`action`: 要对每个元素执行的操作委托 |



## 复制操作

| 方法语法格式 | 用途 | 返回值 | 参数说明 |
|-------------|------|--------|----------|
| `Array.Copy(Array sourceArray, Array destinationArray, int length)` | 从数组的第一个元素开始复制指定数量的元素 | `void` | `sourceArray`: 源数组<br>`destinationArray`: 目标数组<br>`length`: 要复制的元素数 |
| `Array.CopyTo(Array sourceArray, int sourceIndex, Array destinationArray, int destinationIndex, int length)` | 从指定的源索引开始复制元素到目标数组的指定索引 | `void` | 同ConstrainedCopy参数 |

