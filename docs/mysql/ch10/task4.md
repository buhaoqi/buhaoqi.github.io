---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务四 物理结构设计  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务四 物理结构设计  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 4  # 侧边栏中排在第1位
---

## 一、 物理结构设计是什么

数据库物理结构设计是指对给定的**逻辑数据模型**，选取最适合应用环境的物理结构（包括存储结构与存取方法）的过程。

## 二、物理结构设计的基本步骤
物理设计分为两步：
1.  **确定数据库的物理结构**：根据逻辑模型和应用需求，设计具体的存储与存取方案。
2.  **评价物理结构**：重点从**时间效率**（响应速度）和**空间效率**（存储利用率）两个维度评估方案优劣，选择最优解。


## 三、物理结构设计的核心内容

物理设计依赖于具体的数据库管理系统（DBMS），设计时需充分了解：
- 所用DBMS的内部特征，特别是其提供的存取方法和存储结构。
- 数据的特性、用途，以及应用环境的处理频率、响应时间要求。

通常关系数据库物理设计的内容包括：
1.  为关系模式选择合适的**存取方法**。
2.  设计关系、索引等数据库文件的**物理存储结构**。

## 四、关系模式存取方法选择
为满足多用户共享数据的需求，需为关系建立多条存取路径，常见的存取方法有两种：

### 1. 索引存取方法
- 核心是确定对关系的哪些属性列建立索引、组合索引或唯一索引。
- **注意事项**：
  - 关系上的索引数量不宜过多，因为系统维护和查询索引都有性能开销。
  - 更新频率很高的表不适合建立索引，否则每次更新都需修改索引，会大幅增加维护成本。

### 2. 聚簇存取方法
- 核心是将某个属性（或属性组，称为**聚簇码**）上具有相同值的元组，集中存放在连续的物理块中。
- **优势**：
  - 大幅提高按聚簇码进行查询的效率。
  - 不仅适用于单个关系，也适用于经常进行连接操作的多个关系（可按连接属性值聚集存储）。

---

## 五、确定数据库的存储结构
这一步需综合权衡**存取时间、存储空间利用率、维护代价**三个相互矛盾的因素，选择折中方案。

### 1. 确定数据的存放位置
为提升系统性能，需将数据按特性分开存放：
- 易变部分与稳定部分分离。
- 经常存取部分与存取频率较低部分分离。

### 2. 确定系统配置
利用关系数据库管理系统提供的系统配置变量和存储分配参数，进行物理优化。

### 3. 评价物理结构
综合衡量时间效率、空间效率、维护代价及用户需求，从多个设计方案中选出最优解。


## 六、物理设计的结果

```sql
-- 这是物理层面的具体实现
CREATE TABLE users (
    user_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    reg_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id),
    UNIQUE KEY idx_username (username),
    INDEX idx_email (email(20))  -- 对email前缀建索引
) ENGINE=InnoDB 
ROW_FORMAT=DYNAMIC
PARTITION BY RANGE (YEAR(reg_time)) (
    PARTITION p2023 VALUES LESS THAN (2024),
    PARTITION p2024 VALUES LESS THAN (2025)
);

CREATE TABLE orders (
    order_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    order_time DATETIME NOT NULL,
    PRIMARY KEY (order_id),
    INDEX idx_user_time (user_id, order_time),  -- 复合索引
    FOREIGN KEY (user_id) REFERENCES users(user_id)
) ENGINE=InnoDB
TABLESPACE orders_ts;  -- 指定表空间
```