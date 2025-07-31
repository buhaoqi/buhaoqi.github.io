---
noteId: "36cbca20678211f0b0d6278e683d20b1"
tags: []

---

# .NET 运行时（.NET Runtime）详解

.NET 运行时是 .NET 平台的核心执行引擎，它负责管理和执行 .NET 应用程序。以下是全面解析：

## 一、基本定义
.NET 运行时（正式名称为 **Common Language Runtime，CLR**）是一个虚拟机环境，提供：
- **内存管理**（垃圾回收）
- **代码执行**（即时编译JIT或预先编译AOT）
- **类型安全验证**
- **异常处理**
- **线程管理**

## 二、核心组件
| 组件                | 功能说明                                                                 |
|---------------------|--------------------------------------------------------------------------|
| **JIT编译器**       | 将中间语言(IL)编译为机器码                                              |
| **垃圾回收器(GC)**  | 自动内存管理，回收不再使用的对象                                        |
| **类型系统(CTS)**   | 确保类型安全性和跨语言互操作性                                          |
| **基类库(BCL)**     | 提供基础API（文件IO、集合、字符串处理等）                               |
| **程序集加载器**    | 加载和管理.NET程序集(.dll/.exe)                                         |

## 三、运行时工作流程
1. **编译阶段**：C#代码 → C#编译器 → IL代码（.dll/.exe）
2. **执行阶段**：
   - 加载程序集
   - JIT编译IL为本地机器码
   - 托管执行（内存/线程/异常由CLR管理）

```mermaid
graph LR
A[C#源代码] --> B[编译为IL]
B --> C[.NET程序集]
C --> D{运行时加载}
D --> E[JIT编译为机器码]
E --> F[CPU执行]
```

## 四、运行时类型
### 1. **共享运行时**
- 系统级安装，多应用共用
- 版本绑定通过 `global.json` 控制
- 典型路径：
  - Windows: `C:\Program Files\dotnet\shared\Microsoft.NETCore.App`
  - Linux: `/usr/share/dotnet/shared/Microsoft.NETCore.App`

### 2. **自包含部署(SCD)**
- 将运行时与应用打包在一起
- 生成更大的发布包但无需预装运行时
- 创建命令：
  ```bash
  dotnet publish -c Release -r win-x64 --self-contained true
  ```

## 五、运行时与SDK的区别
|                  | .NET Runtime                          | .NET SDK                               |
|-------------------|---------------------------------------|----------------------------------------|
| **用途**         | 仅运行.NET应用                        | 开发+运行（包含编译器、CLI工具等）      |
| **大小**         | ~50-150MB                             | ~200-500MB                             |
| **包含内容**     | CLR+基础库                            | Runtime+编译器+模板+诊断工具           |
| **安装场景**     | 生产环境                              | 开发环境                               |

## 六、运行时版本管理
查看已安装运行时：
```bash
dotnet --list-runtimes
```
输出示例：
```
Microsoft.NETCore.App 6.0.20 [/usr/share/dotnet/shared/Microsoft.NETCore.App]
Microsoft.NETCore.App 7.0.9 [/usr/share/dotnet/shared/Microsoft.NETCore.App]
```

## 七、实际应用场景
1. **服务器应用**：ASP.NET Core需要对应版本运行时
2. **桌面应用**：WPF/WinForms应用依赖桌面运行时
3. **微服务**：容器中通常包含特定运行时版本
4. **云函数**：Azure Functions等无服务器环境预装运行时

## 八、性能特性
- **分层编译**：热点代码优化（从QuickJIT→OptimizedJIT）
- **垃圾回收**：分代式GC（Gen0/Gen1/Gen2）
- **SIMD支持**：通过 `System.Numerics` 实现硬件加速

理解.NET运行时是优化应用性能、排查内存问题和实现跨平台部署的基础。