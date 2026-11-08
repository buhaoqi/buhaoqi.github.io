---
title: 任务二 MySQL的安装与配置
description: 数据库原理与应用技术《MySQL》项目二 MySQL工具使用 任务二 MySQL的安装与配置知识点总结。学会在Windows平台下对MySQL 5.7版本的安装和配置，掌握下载、安装、配置环境变量等完整流程。
keywords: [MySQL, MySQL安装, MySQL配置, MySQL 5.7, Windows安装MySQL, MySQL环境变量, MySQL安装包, MSI安装, 数据库安装, 对口升学]
sidebar_label: 任务二 MySQL的安装与配置
sidebar_position: 2
slug: /mysql/proj2/task2-mysql-install-config
tags: [MySQL, 项目二, 任务二, 对口升学]
---

## 知识点

### 1.MySQL 5.7有哪三种安装包？各有什么特点？

答：（1）mysql-5.7.36-win64.zip：压缩包，直接从官网下载，解压后即可使用，但需要用户进行一些配置，比较烦琐。
（2）mysql-5.7.36-win64.msi：安装包，MSI即Microsoft Installer的简写，是微软格式的安装包。该安装包包含纯粹的MySQL数据库安装包，提供图形化的安装向导，安装简单快捷，但如果有依赖没有安装，需要用户手动安装依赖软件。
（3）mysql-installer-community-5.7.36.1.msi：带安装器的安装包，不仅安装简单快捷，而且功能更齐全，能自动安装所需的依赖，能升级、修改、卸载安装包。教材推荐使用这种安装包。

### 2.如何下载MySQL安装文件？

答：推荐使用MySQL官网 https://www.mysql.com 下载。进入官网后点击"DOWNLOADS"，选择社区版"MySQL Community Server"，打开下载页面（也可通过网址 https://dev.mysql.com/downloads/mysql/ 直接进入）。在"Select Version"中选择版本（如5.7.36），选择操作系统为Microsoft Windows，点击"Go to Download Page"转到MSI安装包下载页，选择历史版本Archives，选择第二个离线安装包（带安装器的软件包），单击Download下载即可。

### 3.MySQL安装器提供了哪五种安装类型？

答：（1）Developer Default：开发者默认安装，安装所有MySQL开发所需的产品。
（2）Server only：仅服务器安装，只安装MySQL Server产品。
（3）Client only：仅客户端安装，只安装MySQL Client产品，不包含服务器。
（4）Full：完整安装，安装所有MySQL产品和功能。
（5）Custom：自定义安装，手动选择需要安装在系统上的产品。

教材建议选择自定义安装（Custom）。

### 4.简述MySQL 5.7的安装配置步骤。

答：MySQL 5.7的安装配置共12个步骤：
步骤1：运行安装包，双击下载的安装文件开始安装。
步骤2：启动安装器，自动检索当前电脑中是否已安装MySQL，提示是否升级安装器时选择NO。
步骤3：选择安装类型，建议选择Custom（自定义安装）。
步骤4：选择产品，展开MySQL Servers，选择"MySQL Server 5.7.36 - X64"添加到右侧框。
步骤5：设置路径，点击Advanced Options，设置安装目录和数据目录（建议设在D盘）。
步骤6：执行安装，单击Execute开始安装。
步骤7：开始配置，单击Next进入Product Configuration产品配置。
步骤8：服务器类型配置，Config Type选择默认的Development Computer，端口号默认3306。
步骤9：设置服务器账户和密码，设置Root账户密码，可添加新用户。
步骤10：设置服务名称，默认为"MySQL57"，默认勾选开机自动启动。
步骤11：应用配置，单击Execute执行配置。
步骤12：配置完成，单击Finish完成全部安装和配置。

### 5.安装MySQL后，开始菜单中会出现哪三个MySQL程序？

答：（1）MySQL 5.7 Command Line Client：MySQL普通的命令行客户端，仅支持ASCII编码，不支持Unicode编码，无法处理一些特殊字符。
（2）MySQL 5.7 Command Line Client - Unicode：支持Unicode编码的命令行客户端，支持更广泛的字符集和语言，可以处理更复杂的数据。
（3）MySQL Installer - Community：MySQL安装器，用于管理MySQL产品的安装、升级和卸载。

### 6.如何为MySQL配置环境变量？

答：配置MySQL环境变量的步骤如下：
（1）打开MySQL安装目录下的bin文件夹，复制该路径（如D:\Program Files\MySQL\MySQL Server 5.7\bin）。
（2）右击"此电脑"→选择"属性"→单击"高级系统属性"→在系统属性对话框中单击"环境变量"。
（3）在系统变量中选中Path，点击"编辑"。
（4）在弹出的"编辑环境变量"对话框中，单击"新建"，在光标处粘贴已复制的路径。
（5）点击"确定"保存。

配置完成后，在命令提示符（CMD窗口）的任意目录下都可以执行MySQL命令。

### 7.安装MySQL时如何设置Root账户密码和添加新用户？

答：在安装配置的第9步"Accounts and Roles"中设置Root账户密码。在"MySQL Root Password"和"Repeat Password"两个框中输入并确认密码。可单击下方"Add User"按钮添加新用户，需设置用户名、主机名（Host）、角色（Role）和密码。例如添加用户名为"abc"、角色为数据库管理员DB Admin的新用户。

### 8.安装MySQL时服务器类型配置有哪些选项？

答：在"Type and Networking"配置页面中：
- Config Type（配置类型）：选择默认的Development Computer（开发计算机）即可。
- Connectivity（连接方式）：默认选择TCP/IP，端口号默认为3306。如果已安装了其他版本的MySQL，要注意两个版本的端口设置为不同的。
- 还可选择Named Pipes（命名管道）、Shared Memory（共享内存）等连接方式。
- 可勾选"Show Advanced and Logging Options"进行高级配置。

### 9.安装MySQL时会生成哪两个文件目录？

答：安装MySQL时会生成两个文件目录：
（1）安装目录（Install Directory）：即程序安装路径，如D:\Program Files\MySQL\MySQL Server 5.7，存放MySQL的程序文件和bin文件夹。
（2）数据目录（Data Directory）：即数据存储路径，如D:\ProgramData\MySQL\MySQL Server 5.7，存放MySQL的数据库文件。

### 10.安装MySQL时遇到Microsoft Visual C++ 2013依赖如何处理？

答：运行MySQL需要一些基础支持。如果该电脑是第一次安装MySQL，安装向导会自动检查并提示安装"Microsoft Visual C++ 2013"依赖，且提供安装链接。点击该链接即可继续安装该依赖组件，安装完成后再继续MySQL的安装流程。

### 11.MySQL的默认端口号是多少？安装时可以修改吗？

答：MySQL的默认端口号是3306。安装时在"Type and Networking"配置页面的Connectivity中默认选择TCP/IP，端口号默认为3306，可以不用修改。但如果已经安装了其他版本的MySQL，需要注意将两个版本的端口设置为不同的端口号。

### 12.安装MySQL时Windows服务名称是什么？有什么作用？

答：安装MySQL时Windows服务名称默认为"MySQL57"，默认勾选"Start the MySQL Server at System Startup"（开机自动启动MySQL服务器）。该服务名称用于在Windows服务管理中标识MySQL服务，后续通过命令行启动或停止MySQL服务时需要使用此名称（如net start mysql57）。

### 13.应用配置（Apply Configuration）阶段会执行哪些配置步骤？

答：应用配置阶段会执行以下配置步骤：
（1）Writing configuration file：写入配置文件。
（2）Updating Windows Firewall rules：更新Windows防火墙规则。
（3）Adjusting Windows service：调整Windows服务。
（4）Initializing database：初始化数据库（可能需要较长时间）。
（5）Starting the server：启动服务器。
（6）Applying security settings：应用安全设置。
（7）Updating the Start menu link：更新开始菜单链接。
