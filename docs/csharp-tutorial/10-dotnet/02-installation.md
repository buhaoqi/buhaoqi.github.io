---
noteId: "fb76bbb0678111f0b0d6278e683d20b1"
tags: []

---

安装 .NET 的步骤因操作系统和需求不同而有所差异。以下是全平台详细指南：

---

### **一、安装前的准备**
1. **查看系统要求**  
   - [官方文档](https://aka.ms/dotnet/system-requirements) 确认支持的OS版本
   - 确保磁盘空间 ≥ 2GB（SDK需更多空间）

2. **卸载旧版本**（可选）  
   ```bash
   # Windows
   dotnet-core-uninstall remove-all
   # macOS/Linux
   sudo rm -rf /usr/local/share/dotnet
   ```

---

### **二、各平台安装方法**

#### **1. Windows**
##### **方法一：官方安装包（推荐）**
1. 下载 [.NET SDK](https://dotnet.microsoft.com/download)  
   - 选择 **LTS**（长期支持版）或 **Current**（最新版）
2. 运行下载的 `.exe` 安装程序
3. 勾选所有组件（包括运行时和SDK）

##### **方法二：命令行（管理员权限）**
```powershell
winget install Microsoft.DotNet.SDK
```

##### **验证安装**
```cmd
dotnet --version
```

#### **2. macOS**
##### **方法一：Homebrew（推荐）**
```bash
brew install --cask dotnet
```

##### **方法二：手动安装**
```bash
# 下载PKG安装包
curl -L https://aka.ms/install-dotnet-macos -o dotnet.pkg
sudo installer -pkg dotnet.pkg -target /
```

##### **验证安装**
```bash
dotnet --info
```

#### **3. Linux（以Ubuntu为例）**
##### **方法一：APT仓库**
```bash
# 添加微软包仓库
wget https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb

# 安装SDK
sudo apt update && sudo apt install -y dotnet-sdk-8.0
```

##### **方法二：脚本安装**
```bash
curl -sSL https://dot.net/v1/dotnet-install.sh | bash
export PATH=$PATH:$HOME/.dotnet
```

##### **验证安装**
```bash
dotnet --list-sdks
```

---

### **三、安装特定版本**
#### **1. 查看可用版本**
```bash
dotnet --list-sdks
```

#### **2. 安装指定版本**
```bash
# Windows
winget install Microsoft.DotNet.SDK.7.0

# Linux/macOS
sudo apt install dotnet-sdk-7.0
# 或
./dotnet-install.sh --version 7.0.100
```

---

### **四、开发环境配置**
#### **1. IDE 支持**
| 工具               | 说明                              |
|--------------------|----------------------------------|
| Visual Studio 2022 | Windows首选，安装时勾选.NET工作负载 |
| VS Code            | 安装 [C#扩展](https://aka.ms/vscode-dotnet) |
| Rider              | JetBrains跨平台IDE               |

#### **2. 验证开发环境**
```bash
# 创建并运行新项目
dotnet new console -o HelloWorld
cd HelloWorld
dotnet run
```
预期输出：  
```
Hello, World!
```

---

### **五、常见问题解决**
1. **命令未找到**  
   - 检查PATH环境变量是否包含 `%USERPROFILE%\.dotnet\tools`（Win）或 `$HOME/.dotnet`（Linux/macOS）

2. **版本冲突**  
   - 使用 `global.json` 固定项目SDK版本：
     ```bash
     dotnet new globaljson --sdk-version 8.0.100
     ```

3. **代理问题**  
   ```bash
   export DOTNET_SYSTEM_NET_HTTP_USEPROXY=true
   export HTTP_PROXY=http://your-proxy:port
   ```

---

### **六、卸载 .NET**
#### **Windows**
```powershell
winget uninstall Microsoft.DotNet.SDK
```

#### **macOS/Linux**
```bash
sudo rm -rf /usr/local/share/dotnet
sudo rm -rf ~/.dotnet
```

---

通过以上步骤，您可以在任何主流平台上完成.NET的安装和基础配置。如需特定版本或遇到问题，可参考[官方安装文档](https://dotnet.microsoft.com/download)。