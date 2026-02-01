---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 数据库安全概述  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 数据库安全概述  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---

## 一、用户管理是什么

用户管理就是管理用户，包括
- 用户的增删改查
- 用户权限的增删改查

MySQL中的用户管理是数据库安全性的核心环节之一。

## 二、用户的核心标识：用户名+主机
MySQL中，用户的唯一标识是「用户名+主机名」（而非仅用户名），主机名用于限制用户的登录来源，常见取值：
- `'user'@'localhost'`：仅允许本地（数据库所在服务器）登录；
- `'user'@'192.168.1.100'`：仅允许指定IP登录；
- `'user'@'192.168.1.%'`：允许指定网段（192.168.1开头）登录；
- `'user'@'%'`：允许任意主机登录（生产环境慎用，风险较高）。


### 二、创建用户（CREATE USER）
MySQL 8.0及以上版本**必须先创建用户，再授权**（不能通过`GRANT`直接创建用户）；低版本（如5.7）可通过`GRANT`同时创建用户，但不推荐。

#### 语法：
```sql
CREATE USER '用户名'@'主机名'
IDENTIFIED BY '密码'  -- 设置登录密码
[WITH 资源限制参数];  -- 可选：限制用户的资源使用（如最大连接数）
```

#### 示例：
```sql
-- 1. 创建本地登录的用户test_user，密码为123456
CREATE USER 'test_user'@'localhost' IDENTIFIED BY '123456';

-- 2. 创建允许任意主机登录的用户web_user，指定密码插件（兼容旧客户端）
-- MySQL 8.0默认密码插件是caching_sha2_password，旧客户端可能不支持，需指定mysql_native_password
CREATE USER 'web_user'@'%' 
IDENTIFIED WITH mysql_native_password BY 'Web@123456';

-- 3. 创建带资源限制的用户：每小时最多执行1000次查询，最多同时2个连接
CREATE USER 'limit_user'@'localhost' 
IDENTIFIED BY 'Limit@123'
WITH 
  MAX_QUERIES_PER_HOUR 1000
  MAX_CONNECTIONS_PER_HOUR 2;
```


### 三、用户授权（GRANT）
授权是为用户分配操作权限（如查询、修改数据），权限分为不同层级（从大到小）：**全局权限 → 数据库权限 → 表权限 → 列权限 → 存储程序权限**。

#### 语法：
```sql
GRANT 权限类型 ON 权限范围 TO '用户名'@'主机名'
[WITH GRANT OPTION];  -- 可选：允许该用户将自己的权限授予其他用户
```

#### 常见权限类型：
| 权限类型       | 作用说明                     |
|----------------|------------------------------|
| ALL PRIVILEGES | 所有权限（除GRANT OPTION外） |
| SELECT         | 查询权限（表/列）            |
| INSERT/UPDATE/DELETE | 增/改/删数据权限       |
| CREATE/DROP    | 创建/删除数据库、表的权限    |
| ALTER          | 修改表结构的权限             |
| GRANT OPTION   | 授权权限（将自己的权限转授） |

#### 权限范围示例：
```sql
-- 1. 全局权限：授予用户所有数据库的所有权限（谨慎使用）
GRANT ALL PRIVILEGES ON *.* TO 'admin_user'@'localhost' WITH GRANT OPTION;

-- 2. 数据库权限：授予用户test_db数据库的所有表的查询、插入权限
GRANT SELECT, INSERT ON test_db.* TO 'test_user'@'localhost';

-- 3. 表权限：授予用户test_db数据库中user表的修改、删除权限
GRANT UPDATE, DELETE ON test_db.user TO 'test_user'@'localhost';

-- 4. 列权限：仅授予用户test_db.user表中name、age列的查询权限
GRANT SELECT (name, age) ON test_db.user TO 'test_user'@'localhost';
```


### 四、查看用户权限（SHOW GRANTS）
用于查看用户已获得的权限，支持查看「当前用户」或「指定用户」的权限。

#### 语法：
```sql
-- 查看当前登录用户的权限
SHOW GRANTS;

-- 查看指定用户的权限
SHOW GRANTS FOR '用户名'@'主机名';
```

#### 示例：
```sql
-- 查看test_user@localhost的权限
SHOW GRANTS FOR 'test_user'@'localhost';
```


### 五、修改用户信息
#### 1. 修改用户密码
不同MySQL版本/密码插件的修改方式略有差异：
```sql
-- 方式1：ALTER USER（推荐，适用于所有版本）
ALTER USER 'test_user'@'localhost' IDENTIFIED BY 'NewPass@123';

-- 方式2：SET PASSWORD（MySQL 8.0前常用，8.0后需指定用户）
SET PASSWORD FOR 'test_user'@'localhost' = 'NewPass@123';
```

#### 2. 修改用户名/主机
MySQL不支持直接修改用户名/主机，需通过「重命名用户」实现：
```sql
-- 将用户test_user@localhost重命名为new_user@192.168.1.%
RENAME USER 'test_user'@'localhost' TO 'new_user'@'192.168.1.%';
```


### 六、回收用户权限（REVOKE）
用于收回已授予用户的权限，语法与`GRANT`对应，需确保「权限类型+范围」与授权时一致。

#### 语法：
```sql
REVOKE 权限类型 ON 权限范围 FROM '用户名'@'主机名';
```

#### 示例：
```sql
-- 回收test_user@localhost对test_db数据库的INSERT权限
REVOKE INSERT ON test_db.* FROM 'test_user'@'localhost';

-- 回收用户的全局所有权限
REVOKE ALL PRIVILEGES ON *.* FROM 'admin_user'@'localhost';
```


### 七、删除用户（DROP USER）
用于删除用户，同时会自动回收该用户的所有权限。

#### 语法：
```sql
DROP USER '用户名'@'主机名';
```

#### 示例：
```sql
-- 删除test_user@localhost用户
DROP USER 'test_user'@'localhost';
```


### 八、高级用户管理：账户锁定/解锁
可临时锁定用户（禁止登录），或解锁已锁定的用户。

#### 语法：
```sql
-- 锁定用户
ALTER USER 'test_user'@'localhost' ACCOUNT LOCK;

-- 解锁用户
ALTER USER 'test_user'@'localhost' ACCOUNT UNLOCK;
```


### 核心流程总结
MySQL用户管理的典型流程是：
`创建用户（CREATE USER）→ 授权（GRANT）→ 查看权限（SHOW GRANTS）→ 管理（修改/锁定）→ 回收权限（REVOKE）/删除用户（DROP USER）`

要不要我帮你整理一份MySQL用户管理的常用操作速查表？