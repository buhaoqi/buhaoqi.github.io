---
title: 数据类型
description: 介绍 MySQL 的三大类数据类型：数值类型（整数、浮点、定点数）、字符串类型（CHAR、VARCHAR、TEXT）与日期时间类型（DATE、TIME、DATETIME、TIMESTAMP）。
keywords: [MySQL, 数据类型, INT, FLOAT, DOUBLE, DECIMAL, CHAR, VARCHAR, TEXT, DATE, TIME, DATETIME, TIMESTAMP, 对口升学]
sidebar_label: 3.2 数据类型
sidebar_position: 2
slug: /mysql/ch03/2-data-types
tags: [MySQL, 第三章, DDL, 对口升学]
---

## 知识点

### 1. 数值类型

#### （1）整数类型

| 类型 | 字节数 | 有符号取值范围 |
| --- | --- | --- |
| `TINYINT` | 1 | -128 ~ 127 |
| `SMALLINT` | 2 | -32768 ~ 32767 |
| `MEDIUMINT` | 3 | -8388608 ~ 8388607 |
| `INT` / `INTEGER` | 4 | -2147483648 ~ 2147483647 |
| `BIGINT` | 8 | -2⁶³ ~ 2⁶³-1 |

- 加 `UNSIGNED` 可声明为无符号整数，最小值从 0 开始，最大取值范围扩大一倍；
- 显示宽度如 `INT(11)` 只影响显示格式，不影响取值范围（MySQL 8.0 起已废弃）；
- `BOOL` / `BOOLEAN` 是 `TINYINT(1)` 的同义词。

#### （2）浮点数类型

| 类型 | 字节数 | 说明 |
| --- | --- | --- |
| `FLOAT` | 4 | 单精度浮点，约 7 位有效数字 |
| `DOUBLE` | 8 | 双精度浮点，约 15 位有效数字 |

- 语法：`FLOAT(M, D)`、`DOUBLE(M, D)`，`M` 为总位数，`D` 为小数位数；
- 浮点数为**近似值**，可能存在精度误差，不适合存储金额。

#### （3）定点数类型

- `DECIMAL(M, D)`（也可写作 `NUMERIC`、`DEC`）：以字符串形式存储，为**精确值**；
- `M` 为总位数（最大 65），`D` 为小数位数（最大 30），默认 `DECIMAL(10,0)`；
- **适合存储金额、成绩等对精度要求高的数据**。

```sql
CREATE TABLE t (
    id INT UNSIGNED,
    price DECIMAL(10, 2),   -- 如 12345678.12
    score FLOAT(5, 2)
);
```

### 2. 字符串类型

| 类型 | 特点 | 最大长度 | 适用场景 |
| --- | --- | --- | --- |
| `CHAR(M)` | **定长**，不足补空格，存取时会去掉尾部空格 | 0~255 字符 | 性别、手机号、固定编码 |
| `VARCHAR(M)` | **变长**，按实际长度存储，需额外 1~2 字节记录长度 | 0~65535 字节 | 姓名、地址、标题 |
| `TINYTEXT` | 变长文本 | 255 字节 | 短文本 |
| `TEXT` | 变长文本 | 65535 字节 | 文章内容、备注 |
| `MEDIUMTEXT` | 变长文本 | 16MB | 较长文本 |
| `LONGTEXT` | 变长文本 | 4GB | 超长文本 |
| `BLOB` | 二进制大对象 | 65535 字节 | 图片、文件 |
| `ENUM` | 枚举，从列表中取一个值 | 最多 65535 个成员 | 状态、类别 |
| `SET` | 集合，可取列表中多个值 | 最多 64 个成员 | 多选项 |

> `CHAR` 与 `VARCHAR` 的区别是高频考点：`CHAR` 定长、存取快但可能浪费空间；`VARCHAR` 变长、节省空间但需额外长度字节。

### 3. 日期和时间类型

| 类型 | 格式 | 取值范围 | 说明 |
| --- | --- | --- | --- |
| `DATE` | `YYYY-MM-DD` | 1000-01-01 ~ 9999-12-31 | 只存日期 |
| `TIME` | `HH:MM:SS` | -838:59:59 ~ 838:59:59 | 时间或时间间隔 |
| `DATETIME` | `YYYY-MM-DD HH:MM:SS` | 1000-01-01 00:00:00 ~ 9999-12-31 23:59:59 | 日期 + 时间，与时区无关 |
| `TIMESTAMP` | `YYYY-MM-DD HH:MM:SS` | 1970-01-01 00:00:01 UTC ~ 2038-01-19 | 时间戳，随时区转换，占用 4 字节 |
| `YEAR` | `YYYY` | 1901 ~ 2155 | 只存年份 |

> `DATETIME` 与 `TIMESTAMP` 的区别是常考点：`DATETIME` 按输入原样存储（与时区无关，占 8 字节）；`TIMESTAMP` 存储为 UTC 并随服务器时区转换（占 4 字节，范围到 2038 年）。

```sql
CREATE TABLE events (
    event_date DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 考点提示

- 高频考点：`CHAR` 与 `VARCHAR` 的区别；`FLOAT/DOUBLE`（近似）与 `DECIMAL`（精确）的区别；`DATETIME` 与 `TIMESTAMP` 的区别。
- 金额类数据应选用 `DECIMAL`，不能选 `FLOAT`——常见判断题。
- 字符串字面量和日期值需用单引号括起来，如 `'2026-11-28'`。
