---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务七 同步训练   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务七 同步训练   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  7  # 侧边栏中排在第1位
---

## 写程序运行结果

分析下面的 C#程序，窗体中有一命令按钮(名称为：button1)，窗体启动后，单击命令按钮，窗体显示的结果为：

```csharp
private void button1_Click(object sender, EventArgs e)
{
    string strA;
    int iLA = 0;
    int iCount = 0;
    strA = "X33A2E445G";
    string strB;
    iLA = strA.Length;
    for (int i = 1; i < iLA; i++)
    {
        strB = strA.Substring(i, 1);
        if (strB.CompareTo("G") <= 0 && strB.CompareTo("A") >= 0)
        {
            i = i + 1;
            iCount = iCount + 1;
        }
    }
    MessageBox.Show(Convert.ToChar(64 + iCount).ToString());
}
```

答案: C