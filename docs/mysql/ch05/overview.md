---
# 这部分是关键！侧边栏显示名由这里决定
title: 概述  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 概述  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 0  # 侧边栏中排在第1位
---


## 三、非约束属性（Non-constraint Attributes）

👉 **作用：描述列的默认行为或存储特性，不直接判断数据合法性**

### 常见非约束属性

| 属性                    | 说明   |
| --------------------- | ---- |
| `DEFAULT`             | 默认值  |
| `AUTO_INCREMENT`      | 自动增长 |
| `COMMENT`             | 列注释  |
| `VISIBLE / INVISIBLE` | 是否可见 |
| `CHARACTER SET`       | 字符集  |
| `COLLATE`             | 排序规则 |

📌 特点：

* **不直接否定数据是否合法**
* 更多是 **“怎么存、怎么显示”**

---