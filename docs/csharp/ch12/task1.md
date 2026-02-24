---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务一 图形设计基础   # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务一 图形设计基础   # 显式指定侧边栏显示名（优先级最高）
sidebar_position:  1  # 侧边栏中排在第1位
---

## **ADO.NET是什么**

- ADO.NET是一个框架的名字。
- 框架是一个技术体系。
- ADO.NET提供了一种统一的方式来连接各种数据库。比如：SQL Server, MySQL, Oracle等
- ADO.NET是微软提供的通用访问技术。
- ADO.NET是System.Data
- 你可以把 [ADO.NET](https://ado.net/) 想象成一个 **“工具箱”** 的品牌名称，而这个工具箱里装有各种具体的工具（类）。
- **包含内容**：[ADO.NET](https://ado.net/) 包含许多具体的**类**、**接口**、**枚举**等。例如：
  - `System.Data.SqlClient` 命名空间（用于 SQL Server）
  - `System.Data.Odbc` 命名空间
  - `System.Data.OleDb` 命名空间
  - 核心类如 `Connection`, `Command`, `DataReader`, `DataAdapter`, `DataSet` 等。

## **MySQLConnection是什么**

### **MySqlConnection：一个具体的类**

- **定位**：`MySqlConnection` 是 MySQL 官方提供的 [ADO.NET](https://ado.net/) 数据提供程序（`MySql.Data` 程序集）中的一个**具体的类**。
- **作用**：它专门用于管理与 MySQL 数据库的**唯一会话**。它继承自 `System.Data.Common.DbConnection` 类，是 [ADO.NET](https://ado.net/) 框架中“连接”概念针对 MySQL 数据库的具体实现。
- **类比**：在微软官方的 SQL Server 提供程序中，对应的类是 `System.Data.SqlClient.SqlConnection`。

这个类就是上面提到的 [ADO.NET](https://ado.net/) “工具箱” 里的一件**具体工具**。



## **引入命名空间**

```
using MySql.Data.MySqlClient; // 引入MySQL的ADO.NET提供程序命名空间
using System.Data; // 引入核心ADO.NET命名空间


```

当你在代码中写

```
MySqlConnection conn = new MySqlConnection(connectionString);

```

你正是在使用ADO.NET技术框架下的一个名为`MysqlConnection`的具体类来执行操作。



## **2. 基本使用步骤**

使用 `MySqlConnection` 的四个基本步骤：

```
// 1. 创建连接
// 2. 打开连接
// 3. 执行操作
// 4. 关闭连接
```

## **3. 最简单的完整示例**

```
using MySql.Data.MySqlClient;
using System;

class Program
{
    static void Main()
    {
        // 第一步：创建连接字符串（就像写地址）
        string connectionString = "server=localhost;database=students;user=root;password=123456";
        
        // 第二步：创建连接对象（就像拿起电话）
        MySqlConnection connection = new MySqlConnection(connectionString);
        
        try
        {
            // 第三步：打开连接（就像拨号）
            connection.Open();
            Console.WriteLine("成功连接到数据库！");
            
            // 第四步：在这里执行数据库操作...
            // （下一节会详细讲）
            
        }
        catch (Exception ex)
        {
            Console.WriteLine($"连接失败：{ex.Message}");
        }
        finally
        {
            // 第五步：关闭连接（就像挂电话）
          //检查数据库连接对象的当前状态是否为“已打开”。


            if (connection.State == System.Data.ConnectionState.Open)
            {
                connection.Close();
                Console.WriteLine("连接已关闭");
            }
        }
    }
}
```

## **4. 连接字符串详解**

连接字符串就像数据库的"地址"，告诉程序如何找到数据库：

```
// 基本格式
"server=服务器地址;database=数据库名;user=用户名;password=密码"

// 实际例子
"server=localhost;database=students;user=root;password=123456"

// 更多选项
"server=localhost;database=students;user=root;password=123456;port=3306;charset=utf8"
```

**参数说明：**

- `server`：数据库服务器地址（localhost 表示本机）
- `database`：要连接的数据库名称
- `user`：用户名
- `password`：密码
- `port`：端口号（MySQL 默认是 3306）
- `charset`：字符编码（推荐 utf8）

## **5. 使用 using 的推荐写法**

```
using (MySqlConnection connection = new MySqlConnection(connectionString))
{
    connection.Open();
    Console.WriteLine("连接成功！");
    
    // 执行数据库操作...
    
} // 这里会自动调用 connection.Close()
```

## **6. 实际应用：查询学生数据**

结合我们之前的学生表例子：

```
using MySql.Data.MySqlClient;
using System;

class Program
{
    static void Main()
    {
        string connectionString = "server=localhost;database=students;user=root;password=123456";
        
        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            try
            {
                // 打开连接
                connection.Open();
                
                // 创建 SQL 命令
                string sql = "SELECT s_name, chinese FROM students";
                MySqlCommand command = new MySqlCommand(sql, connection);
                
                // 执行查询
                MySqlDataReader reader = command.ExecuteReader();
                
                // 读取数据
                Console.WriteLine("学生语文成绩：");
                while (reader.Read())
                {
                    string name = reader["s_name"].ToString();
                    int score = Convert.ToInt32(reader["chinese"]);
                    Console.WriteLine($"{name}：{score}分");
                }
                
                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"出错了：{ex.Message}");
            }
        }
    }
}
```

## **7. MySqlConnection 的常用属性**

```
using (MySqlConnection connection = new MySqlConnection(connectionString))
{
    connection.Open();
    
    // 查看连接状态
    Console.WriteLine($"连接状态：{connection.State}");
    
    // 查看数据库名称
    Console.WriteLine($"数据库：{connection.Database}");
    
    // 查看服务器版本
    Console.WriteLine($"MySQL版本：{connection.ServerVersion}");
    
    // 查看连接超时时间
    Console.WriteLine($"超时时间：{connection.ConnectionTimeout}秒");
}
```

## **8. 重要的方法**

### **Open() - 打开连接**

```
connection.Open(); // 建立到数据库的连接
```

### **Close() - 关闭连接**

```
connection.Close(); // 关闭连接，释放资源
```

### **CreateCommand() - 创建命令**

```
MySqlCommand command = connection.CreateCommand();
command.CommandText = "SELECT * FROM students";
```

### **BeginTransaction() - 开始事务**

```
MySqlTransaction transaction = connection.BeginTransaction();
// 执行多个相关操作，要么全部成功，要么全部失败
```

## **9. 连接状态管理**

```
MySqlConnection connection = new MySqlConnection(connectionString);

// 检查连接状态
if (connection.State == System.Data.ConnectionState.Closed)
{
    Console.WriteLine("连接是关闭的");
    connection.Open();
}

if (connection.State == System.Data.ConnectionState.Open)
{
    Console.WriteLine("连接是打开的");
    // 可以执行数据库操作
}

connection.Close();

if (connection.State == System.Data.ConnectionState.Closed)
{
    Console.WriteLine("连接又关闭了");
}
```

## **10. 完整的错误处理示例**

```
string connectionString = "server=localhost;database=students;user=root;password=123456";
MySqlConnection connection = null;

try
{
    connection = new MySqlConnection(connectionString);
    connection.Open();
    
    Console.WriteLine("连接成功！");
    
    // 执行你的数据库操作...
    
}
catch (MySqlException ex)  // 专门捕获 MySQL 错误
{
    Console.WriteLine($"MySQL错误 {ex.Number}：{ex.Message}");
}
catch (Exception ex)       // 捕获其他错误
{
    Console.WriteLine($"一般错误：{ex.Message}");
}
finally                    // 无论如何都会执行
{
    if (connection != null && connection.State == System.Data.ConnectionState.Open)
    {
        connection.Close();
        Console.WriteLine("连接已安全关闭");
    }
}
```

## **11. 初学者常见问题**

### **问题1：忘记打开连接**

```
// 错误！
MySqlConnection connection = new MySqlConnection(connectionString);
// 忘记调用 connection.Open();
MySqlCommand command = new MySqlCommand("SELECT ...", connection); // 会报错！
```

### **问题2：连接字符串写错**

```
// 错误：拼写错误
"server=localhost;databse=students;" // database 拼错了

// 错误：缺少必要参数
"server=localhost;database=students;" // 缺少 user 和 password
```

### **问题3：使用已关闭的连接**

```
using (var connection = new MySqlConnection(connectionString))
{
    connection.Open();
    // 操作数据库...
} // 连接在这里自动关闭

// 错误：尝试使用已关闭的连接
connection.Open(); // 会报错！
```

## **12. 最佳实践总结**

1. **总是使用 using**：确保连接被正确关闭
2. **妥善处理异常**：使用 try-catch 处理可能的错误
3. **及时关闭连接**：用完就关，不要长时间占用
4. **保护连接字符串**：不要将密码硬编码在代码中
5. **测试连接**：先测试连接是否成功，再执行操作

## **13. 记忆技巧**

把 `MySqlConnection` 想象成"电话"：

- `new MySqlConnection()` = 拿起电话
- `Open()` = 拨号
- 执行操作 = 通话
- `Close()` = 挂电话

记住这个比喻，就能理解 `MySqlConnection` 的基本用法了！

# Connection 对象详解（适合初学者）

## **1. Connection 对象是什么？**

**Connection 对象**就像是你的应用程序和数据库之间的"电话线"或"桥梁"。它负责建立、维护和关闭与数据库的物理连接。

## **2. 生活中的比喻**

### **比喻1：打电话**

```
应用程序 = 你
数据库 = 朋友
Connection = 电话线
打开连接 = 拨号
关闭连接 = 挂电话
```

### **比喻2：过桥**

```
应用程序 = 河的这边
数据库 = 河的那边  
Connection = 桥梁
打开连接 = 放下桥
关闭连接 = 收起桥
```

## **3. Connection 对象的核心作用**

### **建立连接**

```
// 创建连接对象（准备好电话线）
MySqlConnection connection = new MySqlConnection(connectionString);

// 建立实际连接（拨号）
connection.Open();
```

### **管理连接状态**

```
// 检查连接状态
if (connection.State == ConnectionState.Open)
{
    Console.WriteLine("连接已建立，可以通话");
}
else
{
    Console.WriteLine("连接已断开，需要重新拨号");
}
```

### **释放资源**

```
// 关闭连接（挂电话）
connection.Close();
```

## **4. 完整的"打电话"过程**

```
using System;
using MySql.Data.MySqlClient;

class Program
{
    static void Main()
    {
        // 1. 找到朋友的电话号码（连接字符串）
        string phoneNumber = "server=localhost;database=students;user=root;password=123456";
        
        // 2. 拿起电话（创建Connection对象）
        using (MySqlConnection phoneLine = new MySqlConnection(phoneNumber))
        {
            try
            {
                // 3. 拨号（打开连接）
                phoneLine.Open();
                Console.WriteLine("电话接通了！可以开始聊天了");
                
                // 4. 实际对话（数据库操作）
                string sql = "SELECT s_name FROM students";
                MySqlCommand command = new MySqlCommand(sql, phoneLine);
                // ... 执行查询
                
            }
            catch (Exception ex)
            {
                Console.WriteLine($"电话打不通：{ex.Message}");
            }
            // 5. 自动挂电话（using语句自动Close）
        }
    }
}
```

## **5. Connection 对象的重要属性**

```
using (MySqlConnection connection = new MySqlConnection(connectionString))
{
    connection.Open();
    
    // 查看连接信息
    Console.WriteLine($"数据库：{connection.Database}");        // 当前数据库
    Console.WriteLine($"连接状态：{connection.State}");         // 连接状态
    Console.WriteLine($"服务器版本：{connection.ServerVersion}"); // MySQL版本
    Console.WriteLine($"超时时间：{connection.ConnectionTimeout}秒"); // 连接超时
    Console.WriteLine($"连接ID：{connection.ServerThread}");    // 服务器线程ID
}
```

## **6. Connection 对象的重要方法**

### **Open() - 打开连接**

```
connection.Open(); // 建立到数据库的物理连接
```

### **Close() - 关闭连接**

```
connection.Close(); // 断开连接，释放资源
```

### **CreateCommand() - 创建命令**

```
// 创建与这个连接关联的SQL命令
MySqlCommand command = connection.CreateCommand();
command.CommandText = "SELECT * FROM students";
```

### **BeginTransaction() - 开始事务**

```
// 开始一个数据库事务（保证一系列操作要么全部成功，要么全部失败）
MySqlTransaction transaction = connection.BeginTransaction();
```

### **ChangeDatabase() - 切换数据库**

```
// 在同一个连接中切换到不同的数据库
connection.ChangeDatabase("another_database");
```

## **7. 连接状态（ConnectionState）**

```
MySqlConnection connection = new MySqlConnection(connectionString);

Console.WriteLine($"初始状态：{connection.State}"); // Closed

connection.Open();
Console.WriteLine($"打开后：{connection.State}");   // Open

connection.Close(); 
Console.WriteLine($"关闭后：{connection.State}");   // Closed

// 其他可能的状态：
// - Connecting：正在连接
// - Executing：正在执行命令  
// - Fetching：正在获取数据
// - Broken：连接中断
```

## **8. 为什么需要 Connection 对象？**

### **没有 Connection 的情况：**

```
应用程序 → ??? → 数据库
```

**问题**：不知道如何连接到数据库，无法发送命令

### **有 Connection 的情况：**

```
应用程序 → Connection → 数据库
```

**好处**：

- 知道数据库在哪里（连接字符串）
- 建立了通信渠道
- 可以发送 SQL 命令
- 可以接收查询结果

## **9. 实际工作流程**

```
// 第一步：创建Connection（准备工具）
MySqlConnection connection = new MySqlConnection(connectionString);

// 第二步：打开连接（建立通道）
connection.Open();

// 第三步：创建Command（准备要说的话）
MySqlCommand command = new MySqlCommand("SELECT...", connection);

// 第四步：执行Command（说出话并等待回应）
MySqlDataReader reader = command.ExecuteReader();

// 第五步：处理结果（理解对方的回应）
while (reader.Read())
{
    Console.WriteLine(reader["s_name"]);
}

// 第六步：关闭连接（结束通话）
connection.Close();
```

## **10. 不同数据库的 Connection 对象**

虽然语法类似，但不同数据库有自己的 Connection 类：

```
// MySQL
MySqlConnection mysqlConn = new MySqlConnection(...);

// SQL Server  
SqlConnection sqlConn = new SqlConnection(...);

// Oracle
OracleConnection oracleConn = new OracleConnection(...);

// SQLite
SQLiteConnection sqliteConn = new SQLiteConnection(...);
```

## **11. 初学者常见误区**

### **误区1：以为 Connection 就是数据库**

```
// 错误理解：Connection = 数据库
// 正确理解：Connection = 到数据库的连接通道

MySqlConnection connection = new MySqlConnection(...);
// connection 不是数据库本身，而是访问数据库的通道
```

### **误区2：长时间保持连接打开**

```
// 不好：连接一直开着，浪费资源
connection.Open();
// ... 很长时间后才 Close()

// 好：用完立即关闭
connection.Open();
// 执行操作...
connection.Close(); // 立即关闭
```

### **误区3：忘记关闭连接**

```
// 错误：忘记关闭连接
connection.Open();
// 执行操作...
// 忘记调用 connection.Close()

// 正确：使用 using 自动关闭
using (var connection = new MySqlConnection(...))
{
    connection.Open();
    // 执行操作...
} // 自动关闭
```

## **12. 总结**

**Connection 对象的核心身份**：

- 🏗️ **桥梁建造者**：建立应用程序和数据库之间的通道
- 📞 **通信管理员**：管理连接的打开、关闭和状态
- 🔧 **资源协调者**：为 Command、DataReader 等提供工作环境
- 💰 **资源守护者**：确保数据库连接资源被正确释放

记住这个简单的定义： **Connection 对象就是让你的程序能够与数据库"对话"的通信通道！**



## **1. ADO是什么**



## **2. connection对象是什么**

connection对象用于连接数据库

connection对象用于管理数据库事务

connection提供了数据源属性和用户身份验证属性

connection提供了程序与数据源建立连接的方法

## **3. 数据库连接字符串是什么**



## **4. Mysql.Data.dll工具包的用途是什么**



## **5. 添加代码**

```
//引入MySQL命名控件
using Mysql.Data.Mysqlclient;

//connection连接字符串
MysqlConnection类
  connectionStr ="server=服务器名;uid=用户名;password=密码;database=数据库名称"
```



从你提供的截图内容来看，第5题的完整描述是：

> 1. 检测是否与数据库连接成功的第一步是（ ）。 A. 包装引用对象 B. 创建连接字符串 C. 创建MySQL连接对象 D. 打开连接

------

**答案是 A. 包装引用对象**，原因如下：

在 C# 中使用 MySQL 数据库时，首先要通过 NuGet 安装 `MySql.Data` 包，这一步通常被称为“包装引用对象”或“添加引用”。 如果不先引用对应的数据库连接库（即包装引用对象），后续的创建连接字符串、创建连接对象、打开连接等步骤都无法进行。

------

**正确顺序**是：

1. **A. 包装引用对象**（添加 `MySql.Data` 引用）
2. **B. 创建连接字符串**
3. **C. 创建MySQL连接对象**
4. **D. 打开连接**（并在此时检测连接是否成功）

因此，虽然检测连接是否成功是在“打开连接”步骤中发生的，但第一步必须确保已经引用了相应的数据库连接库，否则代码编译都不会通过。