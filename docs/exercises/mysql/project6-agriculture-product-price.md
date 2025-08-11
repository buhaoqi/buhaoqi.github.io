---
noteId: "e107f290764911f0b17689cded98ae44"
tags: []

---

## 练习:农产品价格表

### 1. 创建农产品价格表

| 类别   | 农产品品种 | 大通农批市场 | 光明农批市场 | 物美超市 | 沃尔玛超市 | 联华超市 | 新发地农批市场 |
| ------ | ---------- | ------------ | ------------ | -------- | ---------- | -------- | -------------- |
| 粮食类 | 稻谷       | 3.50         | 3.65         | 2.65     | 2.89       | 3.90     | 3.58           |
| 粮食类 | 大豆       | 4.80         | 4.70         | 4.40     | 4.20       | 4.50     | 4.75           |
| 粮食类 | 玉米       | 3.00         | 3.00         | 2.70     | 2.30       | 2.50     | 3.00           |
| 蔬菜类 | 黄瓜       | 1.00         | 1.30         | 1.30     | 1.20       | 1.30     | 1.15           |
| 蔬菜类 | 茄子       | 2.20         | 2.00         | 2.48     | 2.28       | 2.35     | 2.10           |
| 蔬菜类 | 卷心菜     | 0.48         | 0.48         | 0.68     | 0.48       | 0.58     | 0.48           |
| 蔬菜类 | 四季豆     | 1.40         | 1.30         | 1.80     | 1.70       | 1.90     | 1.35           |
| 蔬菜类 | 青椒       | 1.00         | 1.00         | 1.50     | 1.50       | 1.50     | 1.00           |
| 蔬菜类 | 豇豆       | 0.65         | 0.65         | 0.80     | 0.75       | 0.80     | 0.65           |
| 蔬菜类 | 芹菜       | 2.70         | 2.80         | 2.80     | 2.80       | 3.00     | 2.75           |
| 蔬菜类 | 西红柿     | 1.80         | 1.80         | 2.30     | 1.90       | 2.00     | 1.80           |
| 蔬菜类 | 韭菜       | 2.20         | 2.30         | 2.20     | 2.50       | 2.50     | 2.25           |
| 蔬菜类 | 香菜       | 2.20         | 2.30         | 2.50     | 2.60       | 2.60     | 2.25           |
| 蔬菜类 | 胡萝卜     | 1.80         | 1.90         | 2.10     | 2.00       | 2.20     | 1.85           |
| 肉蛋类 | 牛肉       | 28.00        | 27.50        | 27.00    | 26.80      | 26.80    | 27.75          |
| 肉蛋类 | 羊肉       | 26.00        | 26.00        | 25.60    | 25.20      | 25.60    | 26.00          |
| 肉蛋类 | 猪肉       | 14.00        | 14.20        | 12.80    | 12.60      | 12.80    | 14.10          |
| 肉蛋类 | 白条鸡     | 7.00         | 7.00         | 6.80     | 6.20       | 6.60     | 7.00           |
| 肉蛋类 | 鸡蛋       | 4.60         | 4.60         | 3.30     | 3.20       | 3.30     | 4.60           |

建表SQL语句

```sql
CREATE TABLE agri_prices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(20),
    p_name VARCHAR(50),
    datong DECIMAL(5,2),
    guangming DECIMAL(5,2),
    wumei DECIMAL(5,2),
    walmart DECIMAL(5,2),
    lianhua DECIMAL(5,2),
    xinfadi DECIMAL(5,2)
);
```

### 2.插入价格数据

```sql
INSERT INTO agri_prices (category, p_name, datong, guangming, wumei, walmart, lianhua, xinfadi) VALUES
('粮食类', '稻谷', 3.50, 3.65, 2.65, 2.89, 3.90, 3.58),
('粮食类', '大豆', 4.80, 4.70, 4.40, 4.20, 4.50, 4.75),
('粮食类', '玉米', 3.00, 3.00, 2.70, 2.30, 2.50, 3.00),
('蔬菜类', '黄瓜', 1.00, 1.30, 1.30, 1.20, 1.30, 1.15),
('蔬菜类', '茄子', 2.20, 2.00, 2.48, 2.28, 2.35, 2.10),
('蔬菜类', '卷心菜', 0.48, 0.48, 0.68, 0.48, 0.58, 0.48),
('蔬菜类', '四季豆', 1.40, 1.30, 1.80, 1.70, 1.90, 1.35),
('蔬菜类', '青椒', 1.00, 1.00, 1.50, 1.50, 1.50, 1.00),
('蔬菜类', '豇豆', 0.65, 0.65, 0.80, 0.75, 0.80, 0.65),
('蔬菜类', '芹菜', 2.70, 2.80, 2.80, 2.80, 3.00, 2.75),
('蔬菜类', '西红柿', 1.80, 1.80, 2.30, 1.90, 2.00, 1.80),
('蔬菜类', '韭菜', 2.20, 2.30, 2.20, 2.50, 2.50, 2.25),
('蔬菜类', '香菜', 2.20, 2.30, 2.50, 2.60, 2.60, 2.25),
('蔬菜类', '胡萝卜', 1.80, 1.90, 2.10, 2.00, 2.20, 1.85),
('肉蛋类', '牛肉', 28.00, 27.50, 27.00, 26.80, 26.80, 27.75),
('肉蛋类', '羊肉', 26.00, 26.00, 25.60, 25.20, 25.60, 26.00),
('肉蛋类', '猪肉', 14.00, 14.20, 12.80, 12.60, 12.80, 14.10),
('肉蛋类', '白条鸡', 7.00, 7.00, 6.80, 6.20, 6.60, 7.00),
('肉蛋类', '鸡蛋', 4.60, 4.60, 3.30, 3.20, 3.30, 4.60);
```

### 3.练习题:查询价格表

说明：价格表查询主要练习数学函数。

**基础函数应用**

1. 查询所有蔬菜类商品，显示价格差最大的前3名（用ABS计算物美和沃尔玛价差）
2. 随机显示5条肉蛋类商品，并为每个商品生成0-10的随机整数（RAND结合CEIL）
3. 计算各大市场玉米价格的整数部分（FLOOR）和小数部分
4. 显示所有价格包含.99结尾的商品（TRUNCATE取两位小数后判断）
5. 查询价格波动超过10%的商品（用POW计算方差）
6. 按价格最后一位奇偶分类显示（MOD结合TRUNCATE）

**进阶计算题**

7. 将新发地价格四舍五入到整数后与原始价格对比
8. 计算光明市场价格的平方根（SQRT）并保留两位小数
9. 生成随机排序的粮食类商品列表（RAND）
10. 查询物美价格比沃尔玛高0.5元以上的商品（ABS差值）
11. 显示联华市场价格的小数部分（TRUNCATE）
12. 按价格个位数分组统计商品数量（MOD）
13. 计算大通市场价格的上取整值（CEIL）
14. 找出价格完全相同的市场组合（ROUND比较）
15. 生成带随机折扣系数（0.8-1.0）的价格模拟

**综合应用题**

16. 计算各商品平均价格的整数部分（FLOOR）
17. 查询价格小数部分大于0.5的商品（TRUNCATE）
18. 按价格最后两位数字排序（MOD结合TRUNCATE）
19. 计算各市场价格的三次方（POW）
20. 显示价格与其平方根的差值（SQRT）
21. 生成随机价格波动预测（RAND结合ROUND）
22. 查询价格个位数为偶数的商品（MOD）
23. 计算市场价差绝对值的平方（POW+ABS）
24. 显示价格小数点后两位的截断值（TRUNCATE）
25. 按价格整数部分奇偶性筛选商品

**高级查询题**

26. 计算各商品最高价与最低价差值的绝对值
27. 生成带随机尾数（0-0.99）的价格模拟
28. 查询价格完全整数的商品（TRUNCATE对比）
29. 按价格小数部分四舍五入到十分位
30. 综合应用：生成带随机系数和取整的报价单



### 4.查询价格表答案

1. 查询所有蔬菜类商品，显示价格差最大的前3名（用ABS计算物美和沃尔玛价差）

```sql
SELECT product, ABS(wu_mei - wal_mart) AS price_diff 
FROM produce_prices 
WHERE category = '蔬菜类'
ORDER BY price_diff DESC 
LIMIT 3;
```

2. 随机显示5条肉蛋类商品，并为每个商品生成0-10的随机整数（RAND结合CEIL）

```sql
SELECT product, CEIL(RAND()*10) AS random_num 
FROM produce_prices 
WHERE category = '肉蛋类'
ORDER BY RAND() 
LIMIT 5;
```

3. 计算各大市场玉米价格的整数部分（FLOOR）和小数部分

```sql
SELECT 
    FLOOR(da_tong) AS da_tong_int,
    da_tong - FLOOR(da_tong) AS da_tong_decimal,
    ...其他市场同样处理...
FROM produce_prices 
WHERE product = '玉米';
```

4. 显示所有价格包含.99结尾的商品（TRUNCATE取两位小数后判断）

```sql
SELECT product 
FROM produce_prices 
WHERE TRUNCATE(da_tong,2) - TRUNCATE(da_tong,1) = 0.09 
   OR ...其他市场同样判断...;
```

5. 查询价格波动超过10%的商品（用POW计算方差）

```sql
SELECT product,
       POW(MAX(da_tong) - MIN(da_tong), 2) AS variance
FROM produce_prices
GROUP BY product
HAVING variance > 0.1;
```

6. 按价格最后一位奇偶分类显示（MOD结合TRUNCATE）

```sql
SELECT product,
       CASE MOD(TRUNCATE(da_tong*10,0),2)
           WHEN 0 THEN '偶' ELSE '奇' END AS parity
FROM produce_prices;
```

**7. 将新发地价格四舍五入到整数后与原始价格对比**

```sql
SELECT product, 
       xin_fa_di AS original_price,
       ROUND(xin_fa_di, 0) AS rounded_price
FROM produce_prices;
```

解析：使用ROUND(数值,0)实现整数四舍五入

**8. 计算光明市场价格的平方根并保留两位小数**

```sql
SELECT product,
       guang_ming,
       ROUND(SQRT(guang_ming), 2) AS sqrt_price
FROM produce_prices;
```

注意：仅计算正数平方根，价格字段需保证非负

**9. 生成随机排序的粮食类商品列表**

```sql
SELECT product 
FROM produce_prices
WHERE category = '粮食类'
ORDER BY RAND();
```

原理：RAND()为每条记录生成随机排序因子

**10. 查询物美价格比沃尔玛高0.5元以上的商品**

```sql
SELECT product, wu_mei, wal_mart
FROM produce_prices
WHERE wu_mei - wal_mart > 0.5;
```

**11. 显示联华市场价格的小数部分**

```sql
SELECT product,
       lian_hua,
       lian_hua - TRUNCATE(lian_hua, 0) AS decimal_part
FROM produce_prices;
```

技巧：用原值减整数部分获取纯小数

**12. 按价格个位数分组统计商品数量**

```sql
SELECT 
    MOD(TRUNCATE(lian_hua, 0), 10) AS units_digit,
    COUNT(*) AS product_count
FROM produce_prices
GROUP BY units_digit;
```

**13. 计算大通市场价格的上取整值**

```sql
SELECT product,
       da_tong,
       CEIL(da_tong) AS ceil_price
FROM produce_prices;
```

**14. 找出价格完全相同的市场组合**

```sql
SELECT product,
       CONCAT_WS('=', 
           ROUND(da_tong,2), 
           ROUND(guang_ming,2),
           ...其他市场...
       ) AS same_prices
FROM produce_prices
WHERE ROUND(da_tong,2) = ROUND(guang_ming,2)
   OR ROUND(da_tong,2) = ROUND(wu_mei,2)
   ...其他组合比较...;
```

关键点：使用ROUND消除小数精度差异

**15. 生成带随机折扣系数（0.8-1.0）的价格模拟**

```sql
SELECT product,
       da_tong * (0.8 + RAND()*0.2) AS discount_da_tong,
       ROUND(guang_ming * (0.8 + RAND()*0.2), 2) AS discount_guang_ming
FROM produce_prices;
```

公式：RAND()*0.2生成0-0.2的随机增量

**16. 计算各商品平均价格的整数部分**

```sql
SELECT product,
       FLOOR(AVG(da_tong + guang_ming + wu_mei + wal_mart + lian_hua + xin_fa_di)/6) AS avg_int
FROM produce_prices
GROUP BY product;
```

**17. 查询价格小数部分大于0.5的商品**

```sql
SELECT product, da_tong
FROM produce_prices
WHERE da_tong - TRUNCATE(da_tong, 0) > 0.5;
```

**18. 按价格最后两位数字排序（大通市场为例）**

```sql
SELECT product, da_tong,
       MOD(TRUNCATE(da_tong*100,0),100) AS last_two_digits
FROM produce_prices
ORDER BY last_two_digits DESC;
```

 技巧：da_tong*100将小数点后两位转为整数，MOD取最后两位

**19. 计算各市场价格的三次方（光明市场示例）**

```sql
SELECT product, guang_ming,
       POW(guang_ming, 3) AS cubed_price
FROM produce_prices;
```

**20. 显示价格与其平方根的差值（沃尔玛示例）**

```sql
SELECT product, wal_mart,
       wal_mart - ROUND(SQRT(wal_mart),2) AS diff_sqrt
FROM produce_prices;
```

**21. 生成±10%随机波动预测（联华市场示例）**

```sql
SELECT product, lian_hua,
       ROUND(lian_hua * (0.9 + RAND()*0.2), 2) AS simulated_price
FROM produce_prices;
```

**22. 查询价格个位数为偶数的商品（新发地市场）**

```sql
SELECT product, xin_fa_di
FROM produce_prices
WHERE MOD(TRUNCATE(xin_fa_di,0), 2) = 0;
```

**23. 计算大通与光明价差绝对值的平方**

```sql
SELECT product,
       POW(ABS(da_tong - guang_ming), 2) AS squared_diff
FROM produce_prices;
```

**24. 显示价格小数点后两位的截断值（物美超市）**

```sql
SELECT product, 
       TRUNCATE(wu_mei, 2) AS truncated_price
FROM produce_prices;
```

**25. 筛选整数部分为奇数的商品（沃尔玛）**

```sql
SELECT product, wal_mart
FROM produce_prices
WHERE MOD(TRUNCATE(wal_mart,0), 2) = 1;
```

**26. 计算最高最低价差绝对值**

```sql
SELECT product,
       ABS(GREATEST(da_tong, guang_ming, wu_mei, wal_mart, lian_hua, xin_fa_di) -
       LEAST(da_tong, guang_ming, wu_mei, wal_mart, lian_hua, xin_fa_di)) AS price_range
FROM produce_prices;
```

**27. 生成带随机尾数的价格（大通市场）**

```sql
SELECT product,
       TRUNCATE(da_tong,0) + ROUND(RAND(), 2) AS random_tail_price
FROM produce_prices;
```

**28. 查询价格完全整数的商品（联华超市）**

```sql
SELECT product, lian_hua
FROM produce_prices
WHERE lian_hua = TRUNCATE(lian_hua, 0);
```

**29. 四舍五入到十分位（光明市场）**

```sql
SELECT product,
       ROUND(guang_ming, 1) AS tenth_rounded
FROM produce_prices;
```

**30. 综合报价单（含随机折扣和取整）**

```sql
SELECT product,
       CEIL(da_tong * (0.8 + RAND()*0.2)) AS quote_da_tong,
       FLOOR(guang_ming * (0.9 + RAND()*0.1)) AS quote_guang_ming,
       ROUND(wu_mei * (0.85 + RAND()*0.15), 1) AS quote_wu_mei
FROM produce_prices;
```

# 