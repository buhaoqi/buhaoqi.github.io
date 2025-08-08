---
noteId: "231af080742711f0ac7f012540a4f7e6"
tags: []

---


### **9. 联合查询（UNION）**
```sql
SELECT name FROM employees
UNION
SELECT name FROM contractors;
```
- **UNION ALL**：保留重复记录。
- **UNION**：自动去重。

---