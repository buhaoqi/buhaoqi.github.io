---
noteId: "b8fd2a20742011f0ac7f012540a4f7e6"
tags: []

---


### **6. 多表连接（JOIN）**
#### **连接类型**
| 类型                | 说明                                     |
|---------------------|------------------------------------------|
| `INNER JOIN`        | 返回两个表匹配的行（交集）               |
| `LEFT JOIN`         | 返回左表所有行 + 右表匹配的行            |
| `RIGHT JOIN`        | 返回右表所有行 + 左表匹配的行            |
| `FULL OUTER JOIN`   | 返回所有行（MySQL需用`UNION`模拟）       |

#### **示例**
```sql
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d 
    ON e.department_id = d.id;
```

---