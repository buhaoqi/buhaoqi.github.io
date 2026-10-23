---
noteId: "79f7be90e83711f0929283172aee279e"
tags: []

---

## **一、函数基础介绍**

### **1. 函数概览**
| 函数 | 语法 | 功能 | 返回类型 |
|------|------|------|----------|
| **UPPER()** | `=UPPER(text)` | 转换为**大写字母** | 文本 |
| **LOWER()** | `=LOWER(text)` | 转换为**小写字母** | 文本 |
| **PROPER()** | `=PROPER(text)` | 转换为**首字母大写**（每个单词） | 文本 |

### **2. 参数说明**
| 参数 | 说明 | 必需 |
|------|------|------|
| **text** | 要转换的文本 | 是 |

**重要特性**：
- 只影响英文字母，中文、数字、符号不受影响
- 返回结果是**文本类型**
- 原单元格内容不变
- 可以嵌套在其他函数中使用

---

## **二、详细示例数据表**

### **表1：员工信息表（混合大小写）**
| 工号 | 姓名 | 英文名 | 邮箱 | 部门 | 职位 |
|------|------|--------|------|------|------|
| E001 | 张明 | john Smith | john.smith@company.com | IT Department | Senior Engineer |
| E002 | 李华 | MARY WANG | mary.wang@COMPANY.com | SALES Dept. | sales manager |
| E003 | 王芳 | peter zhang | PETER.ZHANG@COMPANY.COM | hr | HR Specialist |
| E004 | 赵强 | LISA li | lisa.li@company.Com | Finance | finance analyst |
| E005 | 孙丽 | david chen | david.chen@COMPANY.com | Marketing | Marketing Director |

### **表2：产品信息表**
| 产品ID | 产品名称 | 产品代码 | 规格说明 | 颜色选项 |
|--------|----------|----------|----------|----------|
| P001 | iPhone 15 | ip-15-pro-max | 6.7英寸, A17芯片 | Black, White, Gold |
| P002 | MacBook Pro | mbp-14-m2 | 14英寸, M2 Pro芯片 | space gray, silver |
| P003 | 华为P60 | hw-p60-pro | 徕卡影像, 120Hz刷新率 | ROCCO红, 翡冷翠 |
| P004 | 三星电视 | samsung-qled-75 | 75英寸, QLED, 4K | BLACK, WHITE |
| P005 | 索尼耳机 | sony-wh-1000xm5 | 降噪, 30小时续航 | black, BLUE, silver |

### **表3：客户信息表**
| 客户ID | 客户名称 | 公司名称 | 地址 | 联系人 | 备注 |
|--------|----------|----------|------|--------|------|
| C001 | ABC科技有限公司 | abc Technology co., ltd. | 北京市海淀区中关村 | Zhang San | VIP客户 |
| C002 | XYZ贸易公司 | XYZ TRADING COMPANY | 上海市浦东新区 | Li Si | 新客户 |
| C003 | 123电商平台 | 123 E-COMMERCE PLATFORM | 广州市天河区 | Wang Wu | 长期合作 |
| C004 | DEF制造集团 | def manufacturing group | 深圳市南山区 | Zhao Liu | 紧急订单 |
| C005 | GHI咨询顾问 | GHI Consulting Advisors | 成都市锦江区 | Sun Qi | 需跟进 |

---

## **三、UPPER() 函数详解**

### **1. 基础用法**
```excel
=UPPER("hello world")           // 返回：HELLO WORLD
=UPPER("Excel 2024")            // 返回：EXCEL 2024
=UPPER("abc123@#$")             // 返回：ABC123@#$
=UPPER(A2)                      // 返回A2单元格内容的大写形式
```

### **2. 实际应用示例**

#### **示例1：标准化英文名**
```excel
在表1的D列（标准化英文名）：
=UPPER(C2)  // C列是英文名

结果：
john Smith → JOHN SMITH
MARY WANG → MARY WANG
peter zhang → PETER ZHANG
```

#### **示例2：统一邮箱域名**
```excel
假设邮箱格式不一致，统一转换为大写：
=UPPER(D2)  // D列是邮箱

结果：
john.smith@company.com → JOHN.SMITH@COMPANY.COM
mary.wang@COMPANY.com → MARY.WANG@COMPANY.COM
```

#### **示例3：产品代码标准化**
```excel
在表2的C列（标准产品代码）：
=UPPER(C2)

结果：
ip-15-pro-max → IP-15-PRO-MAX
mbp-14-m2 → MBP-14-M2
hw-p60-pro → HW-P60-PRO
```

### **3. 特殊字符处理**
```excel
中文：=UPPER("你好Hello")         // 返回：你好HELLO
数字：=UPPER("abc123")            // 返回：ABC123
符号：=UPPER("email@domain.com")  // 返回：EMAIL@DOMAIN.COM
空格：=UPPER("a b c")             // 返回：A B C
```

---

## **四、LOWER() 函数详解**

### **1. 基础用法**
```excel
=LOWER("HELLO WORLD")           // 返回：hello world
=LOWER("EXCEL 2024")            // 返回：excel 2024
=LOWER("ABC123@#$")             // 返回：abc123@#$
=LOWER(A2)                      // 返回A2单元格内容的小写形式
```

### **2. 实际应用示例**

#### **示例1：统一部门名称小写**
```excel
在表1的F列（标准部门名）：
=LOWER(E2)  // E列是部门

结果：
IT Department → it department
SALES Dept. → sales dept.
hr → hr（保持不变）
Finance → finance
```

#### **示例2：颜色选项标准化**
```excel
在表2的E列（标准颜色）：
=LOWER(E2)

结果：
Black, White, Gold → black, white, gold
space gray, silver → space gray, silver（已小写）
BLACK, WHITE → black, white
```

#### **示例3：统一文件命名**
```excel
创建标准化文件名：
="report_" & LOWER(A2) & "_" & TEXT(TODAY(), "yyyymmdd") & ".xlsx"

假设A2="SALES_DATA"，今天2024-01-02
结果：report_sales_data_20240102.xlsx
```

### **3. 与TRIM函数结合**
```excel
清除空格并转小写：
=LOWER(TRIM(A2))

例如："  HELLO  WORLD  " → "hello world"
```

---

## **五、PROPER() 函数详解**

### **1. 基础用法**
```excel
=PROPER("hello world")          // 返回：Hello World
=PROPER("excel 2024")           // 返回：Excel 2024
=PROPER("abc-def")              // 返回：Abc-Def
=PROPER("o'brien")              // 返回：O'Brien
```

### **2. 实际应用示例**

#### **示例1：规范化英文姓名**
```excel
在表1的G列（规范英文名）：
=PROPER(C2)

结果：
john Smith → John Smith
MARY WANG → Mary Wang
peter zhang → Peter Zhang
LISA li → Lisa Li
```

#### **示例2：规范公司名称**
```excel
在表3的C列（规范公司名）：
=PROPER(C2)

结果：
abc Technology co., ltd. → Abc Technology Co., Ltd.
XYZ TRADING COMPANY → Xyz Trading Company
DEF制造集团 → Def制造集团（中文部分不受影响）
```

#### **示例3：规范职位名称**
```excel
在表1的H列（规范职位）：
=PROPER(F2)

结果：
Senior Engineer → Senior Engineer（保持不变）
sales manager → Sales Manager
HR Specialist → Hr Specialist（注意：HR变成Hr，可能不符合预期）
Marketing Director → Marketing Director
```

### **3. PROPER()的局限性**
```excel
特殊缩写处理：
=PROPER("usa today")           // 返回：Usa Today（期望：USA Today）
=PROPER("iphone 15")           // 返回：Iphone 15（期望：iPhone 15）
=PROPER("mcdonald's")          // 返回：Mcdonald'S（期望：McDonald's）

解决方法：后续手动修正或使用查找替换
```

---

## **六、函数组合使用**

### **组合1：UPPER + TRIM + CLEAN**
```excel
清洗并转换数据：
=UPPER(TRIM(CLEAN(A2)))

作用：
1. CLEAN：移除不可打印字符
2. TRIM：移除首尾空格，多个空格变单个
3. UPPER：转换为大写
```

### **组合2：PROPER + SUBSTITUTE**
```excel
处理特殊名称：
=SUBSTITUTE(PROPER("mcdonald's"), "Mcdonald'S", "McDonald's")

或更通用：
=SUBSTITUTE(SUBSTITUTE(PROPER(A2), "Mcdonald'S", "McDonald's"), "Iphone", "iPhone")
```

### **组合3：嵌套在IF函数中**
```excel
条件转换：
=IF(B2="重要客户", UPPER(A2), PROPER(A2))

或：
=IF(LOWER(C2)="vip", UPPER(B2), PROPER(B2))
```

### **组合4：与查找函数结合**
```excel
查找时不区分大小写：
=VLOOKUP(LOWER(查找值), LOWER(查找区域), 列号, FALSE)

但注意：LOWER(查找区域)不能直接用在VLOOKUP中
正确做法：使用辅助列或EXACT函数
```

---

## **七、实际工作场景应用**

### **场景1：数据清洗与标准化**

#### **案例：统一客户数据库**
```excel
问题：客户数据来自不同系统，大小写不一致
目标：统一为标准格式（公司名首字母大写，其余小写）

原始数据在A列，清洗步骤：
1. B列：去空格 =TRIM(A2)
2. C列：全小写 =LOWER(B2)
3. D列：规范化 =PROPER(C2)
4. E列：特殊处理 =SUBSTITUTE(SUBSTITUTE(D2, "Co., Ltd.", "Co., Ltd."), "Inc.", "Inc.")
```

#### **代码示例**：
```excel
=SUBSTITUTE(SUBSTITUTE(
    PROPER(LOWER(TRIM(A2))), 
    " Co., Ltd.", " Co., Ltd."),
    " Inc.", " Inc.")
```

### **场景2：创建唯一标识符**

#### **案例：生成用户ID**
```excel
数据：姓名=张三, 手机=13800138001
生成ID：姓名拼音+手机后4位

步骤：
1. 获取拼音（假设在B列）
2. 统一小写：=LOWER(B2)
3. 提取手机后4位：=RIGHT(C2, 4)
4. 组合：=LOWER(B2) & RIGHT(C2, 4)

结果：zhangsan8001
```

### **场景3：数据验证与匹配**

#### **案例：邮箱格式验证**
```excel
检查邮箱是否全小写：
=EXACT(D2, LOWER(D2))
返回TRUE表示已是全小写，FALSE表示包含大写

强制转换并检查：
=IF(EXACT(D2, LOWER(D2)), D2, "需要修正：" & LOWER(D2))
```

### **场景4：报告生成**

#### **案例：自动生成邮件内容**
```excel
邮件模板：
=UPPER("销售报告") & " - " & TEXT(TODAY(), "yyyy年mm月dd日") & CHAR(10) &
"尊敬的" & PROPER(B2) & "：" & CHAR(10) &
"这是您" & MONTH(TODAY()) & "月份的销售数据摘要：" & CHAR(10) &
"销售额：" & TEXT(C2, "¥#,##0") & CHAR(10) &
"完成率：" & TEXT(D2, "0%")

结果：
销售报告 - 2024年01月02日
尊敬的张明：
这是您1月份的销售数据摘要：
销售额：¥158,000
完成率：125%
```

---

## **八、常见问题与解决方案**

### **问题1：转换后无法计算**
```excel
现象：=UPPER("100") + 10 返回错误
原因：TEXT函数返回文本类型
解决：=VALUE(UPPER("100")) + 10
或：=--UPPER("100") + 10
```

### **问题2：中文也被"转换"**
```excel
现象：=UPPER("你好Hello") 返回 "你好HELLO"
说明：这是正常现象，只转换英文字母
期望行为：如果需要处理中英文混合，正常使用即可
```

### **问题3：PROPER转换错误**
```excel
情况1：缩写被错误转换
原始：IBM Company → Ibm Company（期望：IBM Company）
解决：=SUBSTITUTE(PROPER(A2), "Ibm ", "IBM ")

情况2：特殊名称
原始：o'brien → O'Brien（正确）
原始：mc'donald → Mc'Donald（可能错误）
解决：需要定制替换规则
```

### **问题4：性能问题**
```excel
大数据量时优化建议：
1. 使用辅助列：先在其他列转换，再引用
2. 避免在数组公式中重复转换
3. 考虑使用Power Query进行批量转换
```

### **问题5：大小写敏感匹配**
```excel
VLOOKUP默认不区分大小写
需要区分时：=INDEX(返回区域, MATCH(TRUE, EXACT(查找值, 查找区域), 0))
```

---

## **九、与相关函数对比**

### **1. TEXT函数**
```excel
UPPER/LOWER/PROPER：只处理大小写
TEXT：复杂格式化，但返回文本

示例：
=TEXT(1234.56, "0")         // "1235"
=UPPER(TEXT(1234.56, "0"))  // "1235"
```

### **2. EXACT函数（大小写敏感比较）**
```excel
=EXACT("Hello", "hello")    // FALSE
=EXACT(LOWER("Hello"), LOWER("hello"))  // TRUE
```

### **3. FIND vs SEARCH**
```excel
FIND：区分大小写
=FIND("E", "Excel")         // 1
=FIND("e", "Excel")         // #VALUE!

SEARCH：不区分大小写
=SEARCH("e", "Excel")       // 1

结合使用：
=IF(ISNUMBER(FIND(UPPER("e"), UPPER("Excel"))), "找到", "未找到")
```

### **4. REPLACE/SUBSTITUTE**
```excel
可以结合大小写转换进行替换：
=SUBSTITUTE(UPPER(A2), "OLD", "NEW")
```

---

## **十、高级技巧与应用**

### **技巧1：创建动态下拉列表**
```excel
数据验证中使用：
假设A2:A10是部门列表
数据验证公式：=LOWER(A2:A10)

用户输入时可以忽略大小写
```

### **技巧2：密码强度检查**
```excel
检查密码是否包含大小写：
=AND(
    EXACT(A2, UPPER(A2))=FALSE,  // 不全是大写
    EXACT(A2, LOWER(A2))=FALSE,  // 不全是小写
    LEN(A2)>=8                   // 长度≥8
)
```

### **技巧3：智能数据导入**
```excel
导入外部数据时标准化：
=TRIM(PROPER(LOWER(CLEAN(A2))))
一次性完成：去不可见字符→转小写→规范化→去空格
```

### **技巧4：生成测试数据**
```excel
生成随机字符串测试：
=CHAR(RANDBETWEEN(65,90)) &  // 大写字母
 CHAR(RANDBETWEEN(97,122)) & // 小写字母
 CHAR(RANDBETWEEN(48,57))    // 数字
```

### **技巧5：多语言处理**
```excel
判断文本是否主要为英文：
=IF(LEN(A2)=LENB(A2), "英文", "含中文")
英文转换：=PROPER(A2)
中文保持：=A2
```

---

## **十一、综合练习**

### **练习1：客户数据清洗**
**原始数据**：
```
客户名称          公司邮箱
Zhang San        ZHANG.SAN@ABC.COM
LI SI            li.si@xyz.com
wang wu          Wang.Wu@123.com
Zhao Liu         ZHAO.LIU@DEF.COM
```

**要求**：
1. 姓名转为首字母大写
2. 邮箱转为全小写
3. 生成标准格式

**公式**：
```excel
姓名列：=PROPER(A2)
邮箱列：=LOWER(B2)
完整信息：=PROPER(A2) & " <" & LOWER(B2) & ">"
```

### **练习2：产品目录生成**
**要求**：从混乱的产品信息生成标准目录

```excel
原始：A2="iphone 15 pro max - 256gb - space black"
目标："iPhone 15 Pro Max - 256GB - Space Black"

公式：
=PROPER(SUBSTITUTE(SUBSTITUTE(
    SUBSTITUTE(A2, "gb", "GB"),
    "iphone", "iPhone"),
    " - ", " - "))
```

### **练习3：用户名生成规则**
**规则**：
1. 从全名生成用户名
2. 名.姓，全小写
3. 去掉空格和特殊字符
4. 长度不超过20字符

```excel
原始：John O'Brien
步骤：
1. =LOWER(A2)                     // john o'brien
2. =SUBSTITUTE(B2, " ", "")       // johno'brien
3. =SUBSTITUTE(C2, "'", "")       // johnobrien
4. =LEFT(D2, 20)                  // johnobrien
```

---

## **十二、性能优化建议**

### **1. 批量处理原则**
```excel
不好：=UPPER(A2) & UPPER(B2) & UPPER(C2)
好：=UPPER(A2 & B2 & C2)
```

### **2. 避免重复计算**
```excel
使用辅助列存储转换结果，
而不是在每个公式中都转换
```

### **3. 考虑使用Power Query**
对于大数据量清洗：
1. 数据→获取数据→从表格
2. 添加列→格式→大写/小写/每个词首字母大写
3. 关闭并上载

### **4. 数组公式优化**
```excel
旧方法：{=UPPER(A2:A100)}  // 数组公式
新方法（Excel 365）：=UPPER(A2:A100)  // 动态数组
```

---

## **十三、版本兼容性**

| 函数 | Excel 2003 | Excel 2007 | Excel 2010+ | Excel 365 |
|------|------------|------------|-------------|-----------|
| UPPER | ✓ | ✓ | ✓ | ✓ |
| LOWER | ✓ | ✓ | ✓ | ✓ |
| PROPER | ✓ | ✓ | ✓ | ✓ |
| 动态数组支持 | ✗ | ✗ | ✗ | ✓ |

**最佳实践**：
- 所有版本都支持这三个函数
- 可以安全使用
- 无需考虑兼容性问题

---

## **十四、总结与记忆技巧**

### **函数对比总结**
| 函数 | 作用 | 记忆口诀 | 适用场景 |
|------|------|----------|----------|
| **UPPER()** | 转大写 | 全部大写，气势十足 | 代码、缩写、常量 |
| **LOWER()** | 转小写 | 全部小写，低调统一 | 邮箱、网址、文件名 |
| **PROPER()** | 首字母大写 | 首字大写，规范命名 | 人名、地名、标题 |

### **使用原则**
1. **数据录入阶段**：统一格式，减少后期清洗
2. **数据分析前**：先标准化，确保匹配准确
3. **结果输出时**：根据受众选择合适的大小写

### **常见错误避免**
1. 不要指望这些函数处理中文大小写
2. 注意PROPER对缩写的处理
3. 转换后如需计算，记得用VALUE转换回数值

### **一句话总结**
**UPPER()、LOWER()、PROPER() 是Excel的"字母美容师"——UPPER让字母站直了，LOWER让字母躺平了，PROPER让字母有礼貌地鞠躬。**

---