---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务四 角色管理  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务四 角色管理  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 3  # 侧边栏中排在第1位
---
## 考点
掌握角色的创建、授权和回收。

## 一、角色是什么
角色是一组具有相同权限的用户。

## 二、向多个用户授权相同权限的步骤
1. 创建新角色
2. 授予角色权限
3. 为用户分配角色

## 三、语法：创建角色

```sql
CREATE ROLE 角色名1, 角色名2, ...角色名n;
```

示例
```sql
CREATE ROLE 'a_developer','a_reader','a_writer';
```

## 四、语法：授予角色权限

```sql
GRANT 权限列表 ON 关系 TO 角色;
```
示例

```sql
GRANT INSERT,DELETE,UPDATE ON student.Score TO a_developer;
```

## 五、语法：查看角色权限

```sql
SHOW GRANTS FOR 角色;
```
示例
```sql
SHOW GRANTS FOR a_developer;
```

## 六、语法：回收角色权限

```sql
REVOKE 权限列表 ON 关系 FROM 角色;
```

示例

```sql
REVOKE ALL PRIVILEGES ON student.Course From a_developer;
```

## 七、语法：为用户分配角色

```sql
GRANT 角色名 TO 用户名;
```

示例

```sql
GRANT a_developer TO liming;
```