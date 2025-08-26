---
noteId: "edce72c079ef11f096197f4ef3b2c3fb"
tags: []

---

## Array.Sort()练习题（10题）

1. 将整数数组 `{9, 4, 2, 7, 1}` 使用 `Array.Sort()` 按升序排序。
2. 将字符串数组 `{ "banana", "apple", "cherry" }` 使用 `Array.Sort()` 按字典顺序排序。
3. 将数组 `{ 10, 2, 8, 5, 3 }` 使用 `Array.Sort()` 排序后，再使用 `Array.Reverse()` 实现降序排序。
4. 将数组 `{ 5, 9, 2, 7, 6, 1 }` 的第 2 个元素起连续 3 个元素（即 9, 2, 7）按升序排序。
5. 对数组 `{ 100, 50, 200, 30, 10 }` 的最后三个元素使用区间排序。
6. 对数组 `{ "dog", "cat", "apple", "zebra", "bat" }` 的中间 3 个元素排序后，再整体倒序输出。
7. 将浮点数组 `{3.1, 2.4, 5.6, 1.2}` 进行升序排序。
8. 将数组 `{ 5, 4, 3, 2, 1 }` 通过排序和反转的方式变为 `{1, 2, 3, 4, 5}`，再变为 `{5, 4, 3, 2, 1}`。
9. 给定数组 `{8, 3, 7, 9, 2, 6}`，只对下标 1 \~ 4 的元素进行排序，不影响其他位置。
10. 对字符串数组 `{ "Sun", "Earth", "Mars", "Venus" }` 使用 `Array.Sort()` 排序，再用 `Array.Reverse()` 实现降序排序。



## Array.Sort()练习题参考答案

```c#
// C# Array.Sort() 方法练习题及参考答案
using System;

class Program
{
    static void Main()
    {
        // 题 1：升序排序整数数组
        int[] arr1 = { 9, 4, 2, 7, 1 };
        Array.Sort(arr1);
        Console.WriteLine("题1: " + string.Join(", ", arr1));

        // 题 2：按字典顺序排序字符串数组
        string[] arr2 = { "banana", "apple", "cherry" };
        Array.Sort(arr2);
        Console.WriteLine("题2: " + string.Join(", ", arr2));

        // 题 3：升序后再倒序（降序）
        int[] arr3 = { 10, 2, 8, 5, 3 };
        Array.Sort(arr3);
        Array.Reverse(arr3);
        Console.WriteLine("题3: " + string.Join(", ", arr3));

        // 题 4：区间排序部分数组
        int[] arr4 = { 5, 9, 2, 7, 6, 1 };
        Array.Sort(arr4, 1, 3); // 排序元素9,2,7
        Console.WriteLine("题4: " + string.Join(", ", arr4));

        // 题 5：最后三个元素排序
        int[] arr5 = { 100, 50, 200, 30, 10 };
        Array.Sort(arr5, 2, 3); // 200, 30, 10
        Console.WriteLine("题5: " + string.Join(", ", arr5));

        // 题 6：中间三个字符串排序+整体倒序
        string[] arr6 = { "dog", "cat", "apple", "zebra", "bat" };
        Array.Sort(arr6, 1, 3); // cat, apple, zebra
        Array.Reverse(arr6);
        Console.WriteLine("题6: " + string.Join(", ", arr6));

        // 题 7：浮点数排序
        double[] arr7 = { 3.1, 2.4, 5.6, 1.2 };
        Array.Sort(arr7);
        Console.WriteLine("题7: " + string.Join(", ", arr7));

        // 题 8：先升序再降序
        int[] arr8 = { 5, 4, 3, 2, 1 };
        Array.Sort(arr8);
        Console.WriteLine("题8-升序: " + string.Join(", ", arr8));
        Array.Reverse(arr8);
        Console.WriteLine("题8-降序: " + string.Join(", ", arr8));

        // 题 9：仅对中间部分排序
        int[] arr9 = { 8, 3, 7, 9, 2, 6 };
        Array.Sort(arr9, 1, 4); // 3, 7, 9, 2 => 2,3,7,9
        Console.WriteLine("题9: " + string.Join(", ", arr9));

        // 题 10：字符串排序后倒序
        string[] arr10 = { "Sun", "Earth", "Mars", "Venus" };
        Array.Sort(arr10);
        Array.Reverse(arr10);
        Console.WriteLine("题10: " + string.Join(", ", arr10));
    }
}
```
