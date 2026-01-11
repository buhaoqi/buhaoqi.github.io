---
noteId: "3aa81730781b11f09d1b4112a27977ba"
tags: []

---

# C# 八种整数类型应用代码题（10道）

## 题目列表

1. **数据类型选择与溢出** - 模拟人口统计
2. **位运算应用** - 权限管理系统
3. **循环边界处理** - 斐波那契数列生成器
4. **枚举与标志位** - 用户状态管理
5. **数值转换与验证** - 温度转换器
6. **随机数生成范围** - 抽奖系统
7. **二进制操作** - IP地址转换
8. **数学计算优化** - 大数阶乘计算
9. **数据存储优化** - 学生成绩统计
10. **跨平台兼容性** - 文件大小格式化

---

## 详细题目与参考答案

### **题目1：数据类型选择与溢出**
**场景**：模拟人口统计系统，处理不同规模城市的人口数据

```csharp
using System;

class PopulationStatistics
{
    static void Main()
    {
        // 1. 小村庄：人口少于255人
        byte villagePopulation = 150;
        Console.WriteLine($"村庄人口: {villagePopulation}");
        
        // 2. 小城市：人口少于65,535人
        ushort smallCityPopulation = 50000;
        Console.WriteLine($"小城市人口: {smallCityPopulation}");
        
        // 3. 大城市：人口少于2,147,483,647人
        int bigCityPopulation = 10_000_000;  // 使用下划线分隔提高可读性
        Console.WriteLine($"大城市人口: {bigCityPopulation:N0}");
        
        // 4. 国家人口：可能超过21亿
        long countryPopulation = 1_400_000_000L;
        Console.WriteLine($"国家人口: {countryPopulation:N0}");
        
        // 5. 溢出演示与处理
        try
        {
            checked
            {
                byte maxByte = byte.MaxValue;
                Console.WriteLine($"byte最大值: {maxByte}");
                // byte overflow = (byte)(maxByte + 1); // 这会抛出溢出异常
            }
        }
        catch (OverflowException ex)
        {
            Console.WriteLine($"溢出异常: {ex.Message}");
        }
        
        // 6. 使用checked和unchecked
        unchecked
        {
            byte wrappedValue = (byte)(byte.MaxValue + 1);
            Console.WriteLine($"溢出后的值(不检查): {wrappedValue}");
        }
        
        // 7. 人口增长计算
        short initialPopulation = 30000;
        short annualGrowth = 1500;
        short years = 10;
        
        // 注意：这里可能溢出，需要类型提升
        int projectedPopulation = initialPopulation + (annualGrowth * years);
        Console.WriteLine($"10年后预测人口: {projectedPopulation}");
    }
}
```

### **题目2：位运算应用 - 权限管理系统**
**场景**：使用字节的位来表示不同权限

```csharp
using System;

class PermissionSystem
{
    // 使用[Flags]枚举定义权限
    [Flags]
    enum UserPermissions : byte  // 使用byte节省空间
    {
        None = 0,           // 0000 0000
        Read = 1,           // 0000 0001
        Write = 2,          // 0000 0010
        Execute = 4,        // 0000 0100
        Delete = 8,         // 0000 1000
        Admin = 16,         // 0001 0000
        All = Read | Write | Execute | Delete | Admin
    }
    
    static void Main()
    {
        // 1. 基础权限设置
        UserPermissions user1 = UserPermissions.Read | UserPermissions.Write;
        Console.WriteLine($"用户1权限: {user1} (值: {(byte)user1})");
        
        // 2. 添加权限
        user1 |= UserPermissions.Execute;
        Console.WriteLine($"添加执行权限后: {user1}");
        
        // 3. 移除权限
        user1 &= ~UserPermissions.Write;
        Console.WriteLine($"移除写权限后: {user1}");
        
        // 4. 检查权限
        bool canRead = (user1 & UserPermissions.Read) == UserPermissions.Read;
        bool canDelete = (user1 & UserPermissions.Delete) == UserPermissions.Delete;
        Console.WriteLine($"能否读取: {canRead}, 能否删除: {canDelete}");
        
        // 5. 切换权限（有则移除，无则添加）
        user1 ^= UserPermissions.Read;
        Console.WriteLine($"切换读权限后: {user1}");
        user1 ^= UserPermissions.Read;
        Console.WriteLine($"再次切换读权限后: {user1}");
        
        // 6. 使用sbyte表示带符号的权限级别
        sbyte permissionLevel = -1;  // 表示超级管理员
        sbyte normalUser = 1;        // 普通用户
        Console.WriteLine($"权限级别: 管理员={permissionLevel}, 普通用户={normalUser}");
        
        // 7. 使用位运算进行权限组合验证
        UserPermissions requiredPermissions = UserPermissions.Read | UserPermissions.Write;
        UserPermissions userPermissions = UserPermissions.Read | UserPermissions.Execute | UserPermissions.Delete;
        
        bool hasRequired = (userPermissions & requiredPermissions) == requiredPermissions;
        Console.WriteLine($"是否具有所需权限: {hasRequired}");
        
        // 8. 使用ushort扩展更多权限
        ushort extendedPermissions = 0b1111_1111_1111_1111;  // 16位全部权限
        Console.WriteLine($"扩展权限值(16进制): 0x{extendedPermissions:X4}");
    }
}
```

### **题目3：循环边界处理 - 斐波那契数列生成器**
**场景**：生成斐波那契数列，注意整数类型的边界

```csharp
using System;

class FibonacciGenerator
{
    static void Main()
    {
        Console.WriteLine("=== 不同整数类型的斐波那契数列 ===");
        
        // 1. 使用byte（快速溢出演示）
        Console.WriteLine("\n1. 使用byte类型:");
        GenerateFibonacci<byte>(12);
        
        // 2. 使用ushort
        Console.WriteLine("\n2. 使用ushort类型:");
        GenerateFibonacci<ushort>(24);
        
        // 3. 使用uint
        Console.WriteLine("\n3. 使用uint类型:");
        GenerateFibonacci<uint>(47);  // 第47项会溢出
        
        // 4. 使用ulong
        Console.WriteLine("\n4. 使用ulong类型:");
        GenerateFibonacci<ulong>(93);  // 第93项会溢出
        
        // 5. 带符号版本对比
        Console.WriteLine("\n5. 使用int类型（带符号）:");
        GenerateFibonacci<int>(46);
        
        // 6. 安全生成（检测溢出）
        Console.WriteLine("\n6. 安全生成（检测溢出）:");
        SafeFibonacciGeneration();
    }
    
    static void GenerateFibonacci<T>(int count) where T : unmanaged, IComparable<T>
    {
        try
        {
            checked
            {
                dynamic a = (T)0;
                dynamic b = (T)1;
                
                Console.Write($"{a}, {b}");
                
                for (int i = 2; i < count; i++)
                {
                    dynamic next = a + b;
                    Console.Write($", {next}");
                    a = b;
                    b = next;
                    
                    // 检查是否接近最大值
                    if (typeof(T) == typeof(byte) && b.CompareTo(200) >= 0)
                        break;
                }
            }
        }
        catch (OverflowException)
        {
            Console.Write(" [溢出!]");
        }
        Console.WriteLine();
    }
    
    static void SafeFibonacciGeneration()
    {
        // 使用ulong可以生成更多的斐波那契数
        ulong maxUlong = ulong.MaxValue;
        ulong a = 0;
        ulong b = 1;
        int count = 0;
        
        Console.Write($"第{count++}: {a}");
        
        while (b <= maxUlong - a)  // 检查加法是否会溢出
        {
            Console.Write($", 第{count++}: {b}");
            ulong next = a + b;
            a = b;
            b = next;
        }
        
        Console.WriteLine($"\n在溢出前生成了 {count} 项");
        Console.WriteLine($"最后一项: {b} (接近最大值: {maxUlong})");
    }
}
```

### **题目4：枚举与标志位 - 用户状态管理**
**场景**：使用不同整数类型管理用户状态

```csharp
using System;

class UserStatusManager
{
    // 使用sbyte表示带状态码
    enum StatusCode : sbyte
    {
        Error = -1,
        Offline = 0,
        Online = 1,
        Away = 2,
        Busy = 3,
        DoNotDisturb = 4
    }
    
    // 使用ushort表示详细状态
    [Flags]
    enum DetailedStatus : ushort
    {
        None = 0,
        Active = 1 << 0,        // 0000 0000 0000 0001
        InMeeting = 1 << 1,     // 0000 0000 0000 0010
        OnBreak = 1 << 2,       // 0000 0000 0000 0100
        WorkingRemotely = 1 << 3,
        AvailableForChat = 1 << 4,
        TrainingMode = 1 << 5,
        // ... 最多16种状态
    }
    
    static void Main()
    {
        // 1. 基本状态管理
        StatusCode currentStatus = StatusCode.Online;
        Console.WriteLine($"当前状态: {currentStatus} (值: {(sbyte)currentStatus})");
        
        // 2. 状态转换
        currentStatus = (StatusCode)3;
        Console.WriteLine($"转换后的状态: {currentStatus}");
        
        // 3. 状态验证
        bool isValid = Enum.IsDefined(typeof(StatusCode), (sbyte)5);
        Console.WriteLine($"值5是否是有效状态: {isValid}");
        
        // 4. 详细状态设置
        DetailedStatus userStatus = DetailedStatus.Active | 
                                   DetailedStatus.WorkingRemotely | 
                                   DetailedStatus.AvailableForChat;
        
        Console.WriteLine($"\n详细状态: {userStatus}");
        Console.WriteLine($"状态值: {(ushort)userStatus} (二进制: {Convert.ToString((ushort)userStatus, 2).PadLeft(16, '0')})");
        
        // 5. 状态检查
        bool isActive = userStatus.HasFlag(DetailedStatus.Active);
        bool isInMeeting = userStatus.HasFlag(DetailedStatus.InMeeting);
        Console.WriteLine($"是否活跃: {isActive}, 是否在会议中: {isInMeeting}");
        
        // 6. 状态切换
        userStatus ^= DetailedStatus.AvailableForChat;
        Console.WriteLine($"切换聊天可用性后: {userStatus}");
        
        // 7. 使用byte进行简单状态压缩
        byte compressedStatus = 0;
        // 第0位: 是否在线 (1位)
        // 第1-3位: 状态类型 (3位，8种状态)
        // 第4-7位: 保留 (4位)
        
        compressedStatus |= 1 << 0;  // 设置在线
        compressedStatus |= (2 << 1) & 0b0000_1110;  // 设置状态类型为2
        
        Console.WriteLine($"\n压缩状态字节: {Convert.ToString(compressedStatus, 2).PadLeft(8, '0')}");
        
        // 8. 解析压缩状态
        bool isOnline = (compressedStatus & 0b0000_0001) != 0;
        byte statusType = (byte)((compressedStatus & 0b0000_1110) >> 1);
        Console.WriteLine($"解析: 在线={isOnline}, 状态类型={statusType}");
        
        // 9. 使用int进行扩展状态（32位系统优化）
        int extendedState = 0;
        extendedState |= 1 << 0;   // 位0: 在线
        extendedState |= 1 << 5;   // 位5: 静音
        extendedState |= 1 << 10;  // 位10: 视频开启
        
        Console.WriteLine($"\n扩展状态(32位): {Convert.ToString(extendedState, 2).PadLeft(32, '0')}");
    }
}
```

### **题目5：数值转换与验证 - 温度转换器**
**场景**：实现温度转换并处理边界情况

```csharp
using System;

class TemperatureConverter
{
    static void Main()
    {
        Console.WriteLine("=== 温度转换器 ===");
        
        // 1. 摄氏度转华氏度（使用short）
        short celsius = 100;
        short fahrenheit = CelsiusToFahrenheit(celsius);
        Console.WriteLine($"{celsius}°C = {fahrenheit}°F");
        
        // 2. 华氏度转摄氏度（边界检查）
        sbyte safeFahrenheit = 32;
        sbyte convertedCelsius = FahrenheitToCelsius(safeFahrenheit);
        Console.WriteLine($"{safeFahrenheit}°F = {convertedCelsius}°C");
        
        // 3. 极端温度测试（使用不同整数类型）
        TestExtremeTemperatures();
        
        // 4. 温度范围验证
        ValidateTemperatureRange();
        
        // 5. 批量转换演示
        BatchTemperatureConversion();
    }
    
    static short CelsiusToFahrenheit(short celsius)
    {
        // 公式: F = C × 9/5 + 32
        // 使用checked防止溢出
        try
        {
            checked
            {
                // 先乘后除避免精度问题
                int result = celsius * 9 / 5 + 32;
                return (short)result;
            }
        }
        catch (OverflowException)
        {
            Console.WriteLine($"警告: 温度转换溢出 (C={celsius})");
            return celsius > 0 ? short.MaxValue : short.MinValue;
        }
    }
    
    static sbyte FahrenheitToCelsius(sbyte fahrenheit)
    {
        // 公式: C = (F - 32) × 5/9
        try
        {
            checked
            {
                int result = (fahrenheit - 32) * 5 / 9;
                return (sbyte)result;
            }
        }
        catch (OverflowException)
        {
            Console.WriteLine($"警告: 温度转换溢出 (F={fahrenheit})");
            return 0;
        }
    }
    
    static void TestExtremeTemperatures()
    {
        Console.WriteLine("\n=== 极端温度测试 ===");
        
        // 使用不同整数类型存储极端温度
        sbyte coldestCelsius = -128;  // sbyte最小值
        byte hottestCelsius = 100;    // 常见最高温度
        short absoluteZeroC = -273;   // 绝对零度（近似）
        ushort sunSurfaceC = 5500;    // 太阳表面温度
        
        Console.WriteLine($"最冷温度(sbyte): {coldestCelsius}°C");
        Console.WriteLine($"常见高温(byte): {hottestCelsius}°C");
        Console.WriteLine($"绝对零度(short): {absoluteZeroC}°C");
        Console.WriteLine($"太阳表面(ushort): {sunSurfaceC}°C");
        
        // 转换并显示
        Console.WriteLine($"\n绝对零度转华氏度: {CelsiusToFahrenheit(absoluteZeroC)}°F");
    }
    
    static void ValidateTemperatureRange()
    {
        Console.WriteLine("\n=== 温度范围验证 ===");
        
        // 地球合理温度范围
        const short MinEarthTemp = -90;   // 南极最低
        const short MaxEarthTemp = 60;    // 沙漠最高
        
        short[] testTemps = { -100, -50, 0, 25, 70, 100 };
        
        foreach (short temp in testTemps)
        {
            bool isValid = IsValidEarthTemperature(temp);
            string validity = isValid ? "有效" : "无效";
            Console.WriteLine($"{temp}°C: {validity}");
        }
    }
    
    static bool IsValidEarthTemperature(short temperature)
    {
        return temperature >= -90 && temperature <= 60;
    }
    
    static void BatchTemperatureConversion()
    {
        Console.WriteLine("\n=== 批量温度转换 ===");
        
        // 使用byte数组存储每日温度（-128到127范围，使用sbyte）
        sbyte[] celsiusTemps = { -10, 0, 5, 15, 25, 30, 35 };
        
        Console.WriteLine("摄氏度\t华氏度");
        Console.WriteLine("-------\t-------");
        
        foreach (sbyte celsius in celsiusTemps)
        {
            short fahrenheit = CelsiusToFahrenheit(celsius);
            Console.WriteLine($"{celsius}°C\t{fahrenheit}°F");
        }
        
        // 统计温度分布
        int belowZero = 0;
        int normal = 0;
        int hot = 0;
        
        foreach (sbyte celsius in celsiusTemps)
        {
            if (celsius < 0) belowZero++;
            else if (celsius <= 30) normal++;
            else hot++;
        }
        
        Console.WriteLine($"\n温度分布: 零下{beforeZero}天, 常温{normal}天, 炎热{hot}天");
    }
}
```

### **题目6：随机数生成范围 - 抽奖系统**
**场景**：实现一个抽奖系统，使用不同整数类型

```csharp
using System;

class LotterySystem
{
    static void Main()
    {
        Random random = new Random();
        
        Console.WriteLine("=== 抽奖系统 ===");
        
        // 1. 简单抽奖（0-9，使用byte）
        byte simpleLottery = (byte)random.Next(0, 10);
        Console.WriteLine($"简单抽奖结果: {simpleLottery}");
        
        // 2. 双色球风格（使用不同整数类型）
        GenerateDoubleColorBall(random);
        
        // 3. 大乐透风格（使用ushort范围）
        GenerateSuperLotto(random);
        
        // 4. 限号抽签（使用sbyte表示有正负的号码）
        GenerateLimitedLottery(random);
        
        // 5. 多级奖项系统
        AwardDistributionDemo();
    }
    
    static void GenerateDoubleColorBall(Random random)
    {
        Console.WriteLine("\n=== 双色球模拟 ===");
        
        // 红球：1-33，选6个不重复（使用byte）
        byte[] redBalls = new byte[6];
        byte count = 0;
        
        while (count < 6)
        {
            byte ball = (byte)random.Next(1, 34);
            
            // 检查是否重复
            bool isDuplicate = false;
            for (byte i = 0; i < count; i++)
            {
                if (redBalls[i] == ball)
                {
                    isDuplicate = true;
                    break;
                }
            }
            
            if (!isDuplicate)
            {
                redBalls[count] = ball;
                count++;
            }
        }
        
        // 排序
        Array.Sort(redBalls);
        
        // 蓝球：1-16（使用byte）
        byte blueBall = (byte)random.Next(1, 17);
        
        Console.Write("红球: ");
        foreach (byte ball in redBalls)
        {
            Console.Write($"{ball:D2} ");
        }
        Console.WriteLine($"\n蓝球: {blueBall:D2}");
    }
    
    static void GenerateSuperLotto(Random random)
    {
        Console.WriteLine("\n=== 大乐透模拟 ===");
        
        // 前区：1-35，选5个（使用byte）
        // 后区：1-12，选2个（使用byte）
        
        ushort[] frontArea = GenerateUniqueNumbers(random, 5, 1, 35);
        ushort[] backArea = GenerateUniqueNumbers(random, 2, 1, 12);
        
        Console.Write("前区: ");
        foreach (ushort num in frontArea)
        {
            Console.Write($"{num:D2} ");
        }
        Console.Write("\n后区: ");
        foreach (ushort num in backArea)
        {
            Console.Write($"{num:D2} ");
        }
        Console.WriteLine();
    }
    
    static ushort[] GenerateUniqueNumbers(Random random, int count, int min, int max)
    {
        ushort[] numbers = new ushort[count];
        int generated = 0;
        
        while (generated < count)
        {
            ushort num = (ushort)random.Next(min, max + 1);
            bool isDuplicate = false;
            
            for (int i = 0; i < generated; i++)
            {
                if (numbers[i] == num)
                {
                    isDuplicate = true;
                    break;
                }
            }
            
            if (!isDuplicate)
            {
                numbers[generated] = num;
                generated++;
            }
        }
        
        Array.Sort(numbers);
        return numbers;
    }
    
    static void GenerateLimitedLottery(Random random)
    {
        Console.WriteLine("\n=== 限号抽签 ===");
        
        // 使用sbyte表示可以有负数的抽签（如：-5到5）
        sbyte[] luckyNumbers = new sbyte[10];
        
        for (int i = 0; i < luckyNumbers.Length; i++)
        {
            luckyNumbers[i] = (sbyte)random.Next(-5, 6);
        }
        
        Console.Write("幸运号码: ");
        foreach (sbyte num in luckyNumbers)
        {
            // 显示正负号
            string sign = num >= 0 ? "+" : "";
            Console.Write($"{sign}{num} ");
        }
        Console.WriteLine();
        
        // 统计正负数
        sbyte positiveCount = 0;
        sbyte negativeCount = 0;
        sbyte zeroCount = 0;
        
        foreach (sbyte num in luckyNumbers)
        {
            if (num > 0) positiveCount++;
            else if (num < 0) negativeCount++;
            else zeroCount++;
        }
        
        Console.WriteLine($"正数: {positiveCount}, 负数: {negativeCount}, 零: {zeroCount}");
    }
    
    static void AwardDistributionDemo()
    {
        Console.WriteLine("\n=== 奖项分布系统 ===");
        
        // 使用不同整数类型表示不同奖项
        byte firstPrizeCount = 1;      // 一等奖数量
        ushort secondPrizeCount = 5;   // 二等奖数量
        uint thirdPrizeCount = 100;    // 三等奖数量
        ulong participationCount = 1000000; // 参与人数
        
        // 奖项金额（使用有符号类型，因为可能是负数？不，金额不会是负数）
        short firstPrizeAmount = 10000;
        int secondPrizeAmount = 5000;
        long thirdPrizeAmount = 1000;
        
        Console.WriteLine("奖项设置:");
        Console.WriteLine($"一等奖: {firstPrizeCount}名 × ${firstPrizeAmount:N0}");
        Console.WriteLine($"二等奖: {secondPrizeCount}名 × ${secondPrizeAmount:N0}");
        Console.WriteLine($"三等奖: {thirdPrizeCount}名 × ${thirdPrizeAmount:N0}");
        
        // 计算总奖金池
        long totalPrizePool = (long)firstPrizeCount * firstPrizeAmount +
                             (long)secondPrizeCount * secondPrizeAmount +
                             (long)thirdPrizeCount * thirdPrizeAmount;
        
        Console.WriteLine($"\n总奖金池: ${totalPrizePool:N0}");
        Console.WriteLine($"参与人数: {participationCount:N0}");
        
        // 计算中奖概率
        ulong totalWinners = (ulong)firstPrizeCount + secondPrizeCount + thirdPrizeCount;
        double winProbability = (double)totalWinners / participationCount * 100;
        
        Console.WriteLine($"中奖概率: {winProbability:F6}%");
        
        // 使用checked验证奖金计算
        try
        {
            checked
            {
                // 模拟极端情况：如果奖金过高可能溢出
                long extremePrize = long.MaxValue / 2;
                long doubleExtreme = extremePrize * 2;
                Console.WriteLine($"极端奖金计算: {extremePrize} × 2 = {doubleExtreme}");
            }
        }
        catch (OverflowException)
        {
            Console.WriteLine("警告: 奖金计算溢出！");
        }
    }
}
```

### **题目7：二进制操作 - IP地址转换**
**场景**：处理IP地址的二进制表示和转换

```csharp
using System;

class IPAddressConverter
{
    static void Main()
    {
        Console.WriteLine("=== IP地址转换器 ===");
        
        // 1. 将IP地址转换为32位整数
        string ipAddress = "192.168.1.1";
        uint ipAsUint = IPToUInt(ipAddress);
        Console.WriteLine($"{ipAddress} → {ipAsUint} (0x{ipAsUint:X8})");
        
        // 2. 将32位整数转回IP地址
        string restoredIP = UIntToIP(ipAsUint);
        Console.WriteLine($"{ipAsUint} → {restoredIP}");
        
        // 3. 子网掩码操作
        string subnetMask = "255.255.255.0";
        uint maskAsUint = IPToUInt(subnetMask);
        uint networkAddress = ipAsUint & maskAsUint;
        uint broadcastAddress = ipAsUint | ~maskAsUint;
        
        Console.WriteLine($"\n子网掩码: {subnetMask}");
        Console.WriteLine($"网络地址: {UIntToIP(networkAddress)}");
        Console.WriteLine($"广播地址: {UIntToIP(broadcastAddress)}");
        
        // 4. 检查IP是否在子网内
        string testIP = "192.168.1.100";
        uint testIPAsUint = IPToUInt(testIP);
        bool isInSameSubnet = (testIPAsUint & maskAsUint) == networkAddress;
        Console.WriteLine($"{testIP} 是否在同一子网: {isInSameSubnet}");
        
        // 5. IPv4地址分类（使用byte表示类别）
        AnalyzeIPClass(ipAddress);
        
        // 6. 使用二进制位操作分解IP
        DecomposeIPAddress(ipAddress);
        
        // 7. 特殊IP地址处理
        HandleSpecialIPs();
    }
    
    static uint IPToUInt(string ipAddress)
    {
        string[] parts = ipAddress.Split('.');
        if (parts.Length != 4)
            throw new ArgumentException("无效的IP地址格式");
        
        // 使用byte.Parse确保每个部分在0-255范围内
        byte b1 = byte.Parse(parts[0]);
        byte b2 = byte.Parse(parts[1]);
        byte b3 = byte.Parse(parts[2]);
        byte b4 = byte.Parse(parts[3]);
        
        // 组合为32位整数: b1.b2.b3.b4
        return (uint)((b1 << 24) | (b2 << 16) | (b3 << 8) | b4);
    }
    
    static string UIntToIP(uint ip)
    {
        // 提取每个字节
        byte b1 = (byte)((ip >> 24) & 0xFF);
        byte b2 = (byte)((ip >> 16) & 0xFF);
        byte b3 = (byte)((ip >> 8) & 0xFF);
        byte b4 = (byte)(ip & 0xFF);
        
        return $"{b1}.{b2}.{b3}.{b4}";
    }
    
    static void AnalyzeIPClass(string ipAddress)
    {
        Console.WriteLine("\n=== IP地址分类分析 ===");
        
        uint ip = IPToUInt(ipAddress);
        byte firstOctet = (byte)(ip >> 24);
        
        // IP地址分类
        char ipClass;
        if (firstOctet <= 127) ipClass = 'A';
        else if (firstOctet <= 191) ipClass = 'B';
        else if (firstOctet <= 223) ipClass = 'C';
        else if (firstOctet <= 239) ipClass = 'D';  // 组播
        else ipClass = 'E';                         // 实验
        
        Console.WriteLine($"{ipAddress} 属于: 类{ipClass}");
        
        // 显示第一个字节的二进制
        Console.WriteLine($"第一个字节({firstOctet})二进制: {Convert.ToString(firstOctet, 2).PadLeft(8, '0')}");
        
        // 根据类别显示网络位和主机位
        switch (ipClass)
        {
            case 'A':
                Console.WriteLine("格式: 网络.主机.主机.主机 (8位网络, 24位主机)");
                break;
            case 'B':
                Console.WriteLine("格式: 网络.网络.主机.主机 (16位网络, 16位主机)");
                break;
            case 'C':
                Console.WriteLine("格式: 网络.网络.网络.主机 (24位网络, 8位主机)");
                break;
        }
    }
    
    static void DecomposeIPAddress(string ipAddress)
    {
        Console.WriteLine("\n=== IP地址分解 ===");
        
        uint ip = IPToUInt(ipAddress);
        
        Console.WriteLine($"完整IP: {ipAddress}");
        Console.WriteLine($"二进制: {Convert.ToString(ip, 2).PadLeft(32, '0')}");
        Console.WriteLine($"十六进制: 0x{ip:X8}");
        
        // 分解为四个字节
        byte[] octets = new byte[4];
        for (int i = 0; i < 4; i++)
        {
            octets[i] = (byte)((ip >> (24 - i * 8)) & 0xFF);
            Console.WriteLine($"字节{i+1}: {octets[i]:D3} (0x{octets[i]:X2}, 二进制: {Convert.ToString(octets[i], 2).PadLeft(8, '0')})");
        }
        
        // 使用sbyte显示有符号表示（仅用于演示）
        sbyte[] signedOctets = new sbyte[4];
        for (int i = 0; i < 4; i++)
        {
            signedOctets[i] = (sbyte)octets[i];
            // 注意：大于127的值会被解释为负数
            Console.WriteLine($"有符号字节{i+1}: {signedOctets[i]} (如果>127则显示为负数)");
        }
    }
    
    static void HandleSpecialIPs()
    {
        Console.WriteLine("\n=== 特殊IP地址 ===");
        
        // 定义特殊IP地址
        (string name, string ip)[] specialIPs = {
            ("环回地址", "127.0.0.1"),
            ("私有A类", "10.0.0.1"),
            ("私有B类", "172.16.0.1"),
            ("私有C类", "192.168.1.1"),
            ("自动配置", "169.254.0.1"),
            ("广播", "255.255.255.255"),
            ("网络", "0.0.0.0")
        };
        
        foreach (var special in specialIPs)
        {
            uint ipValue = IPToUInt(special.ip);
            
            // 检查特殊属性
            bool isPrivate = IsPrivateIP(ipValue);
            bool isLoopback = (ipValue & 0xFF000000) == 0x7F000000; // 127.x.x.x
            bool isLinkLocal = (ipValue & 0xFFFF0000) == 0xA9FE0000; // 169.254.x.x
            
            string properties = "";
            if (isPrivate) properties += "私有, ";
            if (isLoopback) properties += "环回, ";
            if (isLinkLocal) properties += "链路本地, ";
            if (ipValue == 0) properties += "网络地址, ";
            if (ipValue == 0xFFFFFFFF) properties += "广播地址, ";
            
            if (properties.Length > 0)
                properties = properties.TrimEnd(',', ' ');
            
            Console.WriteLine($"{special.name,-12}: {special.ip,-15} → {ipValue,10} ({properties})");
        }
    }
    
    static bool IsPrivateIP(uint ip)
    {
        byte first = (byte)(ip >> 24);
        byte second = (byte)(ip >> 16);
        
        // 10.0.0.0/8
        if (first == 10) return true;
        
        // 172.16.0.0/12
        if (first == 172 && second >= 16 && second <= 31) return true;
        
        // 192.168.0.0/16
        if (first == 192 && second == 168) return true;
        
        return false;
    }
}
```

### **题目8：数学计算优化 - 大数阶乘计算**
**场景**：计算阶乘并处理不同类型整数的限制

```csharp
using System;
using System.Numerics;

class FactorialCalculator
{
    static void Main()
    {
        Console.WriteLine("=== 阶乘计算器（不同整数类型） ===");
        
        // 1. 使用byte计算阶乘（很快溢出）
        Console.WriteLine("\n1. byte类型阶乘:");
        CalculateFactorial<byte>(5);
        CalculateFactorial<byte>(10);  // 会溢出
        
        // 2. 使用ushort计算阶乘
        Console.WriteLine("\n2. ushort类型阶乘:");
        CalculateFactorial<ushort>(8);
        CalculateFactorial<ushort>(10); // 注意边界
        
        // 3. 使用uint计算阶乘
        Console.WriteLine("\n3. uint类型阶乘:");
        CalculateFactorial<uint>(12);
        
        // 4. 使用ulong计算阶乘
        Console.WriteLine("\n4. ulong类型阶乘:");
        CalculateFactorial<ulong>(20);
        
        // 5. 使用有符号类型对比
        Console.WriteLine("\n5. 有符号类型对比:");
        CalculateFactorial<short>(7);
        CalculateFactorial<int>(12);
        CalculateFactorial<long>(20);
        
        // 6. 大数阶乘（使用System.Numerics.BigInteger）
        Console.WriteLine("\n6. 大数阶乘（BigInteger）:");
        CalculateBigFactorial(50);
        CalculateBigFactorial(100);
        
        // 7. 阶乘缓存优化
        Console.WriteLine("\n7. 阶乘缓存优化:");
        FactorialWithCache();
    }
    
    static void CalculateFactorial<T>(int n) where T : unmanaged, IComparable<T>
    {
        try
        {
            checked
            {
                dynamic result = (T)1;
                
                for (int i = 2; i <= n; i++)
                {
                    result *= i;
                }
                
                Console.WriteLine($"{n}! = {result:N0}");
                
                // 显示类型信息
                Type type = typeof(T);
                string typeName = type.Name;
                T maxValue = (T)type.GetField("MaxValue").GetValue(null);
                
                Console.WriteLine($"  类型: {typeName}, 最大值: {maxValue:N0}");
                
                // 检查是否接近最大值
                if (IsCloseToMaxValue(result, maxValue))
                {
                    Console.WriteLine($"  警告: 接近{typeName}最大值!");
                }
            }
        }
        catch (OverflowException)
        {
            Console.WriteLine($"{n}! = [溢出! {typeof(T).Name}无法容纳]");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"{n}! = [错误: {ex.Message}]");
        }
    }
    
    static bool IsCloseToMaxValue<T>(T value, T maxValue) where T : IComparable<T>
    {
        // 简单判断：如果值大于最大值的90%，则认为接近
        dynamic val = value;
        dynamic max = maxValue;
        
        // 对于整数类型，比较是否接近最大值
        if (typeof(T) == typeof(byte))
            return val > 200;  // byte.MaxValue = 255
        else if (typeof(T) == typeof(ushort))
            return val > 60000;  // ushort.MaxValue = 65535
        else if (typeof(T) == typeof(uint))
            return val > 4000000000;  // uint.MaxValue ≈ 42.9亿
        else if (typeof(T) == typeof(ulong))
            return val > 18000000000000000000;  // ulong.MaxValue ≈ 1.84e19
            
        return false;
    }
    
    static void CalculateBigFactorial(int n)
    {
        try
        {
            BigInteger result = 1;
            
            for (int i = 2; i <= n; i++)
            {
                result *= i;
            }
            
            Console.WriteLine($"{n}! = {result}");
            Console.WriteLine($"  位数: {result.ToString().Length} 位");
            
            // 对于大数，显示近似值
            if (n >= 20)
            {
                string strResult = result.ToString();
                if (strResult.Length > 50)
                {
                    string approx = strResult.Substring(0, 20) + "..." + 
                                   strResult.Substring(strResult.Length - 20);
                    Console.WriteLine($"  近似: {approx}");
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"{n}! = [错误: {ex.Message}]");
        }
    }
    
    static void FactorialWithCache()
    {
        Console.WriteLine("=== 使用缓存的阶乘计算 ===");
        
        // 使用uint数组缓存结果
        uint[] factorialCache = new uint[13];  // 13! = 6,227,020,800 > uint.MaxValue
        
        factorialCache[0] = 1;
        factorialCache[1] = 1;
        
        Console.WriteLine("预计算阶乘缓存:");
        Console.WriteLine($"0! = {factorialCache[0]}");
        Console.WriteLine($"1! = {factorialCache[1]}");
        
        try
        {
            for (int i = 2; i < factorialCache.Length; i++)
            {
                checked
                {
                    factorialCache[i] = factorialCache[i - 1] * (uint)i;
                    Console.WriteLine($"{i}! = {factorialCache[i]:N0}");
                }
            }
        }
        catch (OverflowException)
        {
            Console.WriteLine("缓存填充时发生溢出");
        }
        
        // 使用缓存进行计算
        Console.WriteLine("\n使用缓存计算:");
        int[] testValues = { 0, 1, 5, 10, 12 };
        
        foreach (int n in testValues)
        {
            if (n < factorialCache.Length)
            {
                Console.WriteLine($"{n}! = {factorialCache[n]:N0} (来自缓存)");
            }
            else
            {
                Console.WriteLine($"{n}! = [需要动态计算，超出缓存范围]");
            }
        }
        
        // 性能对比：缓存 vs 实时计算
        Console.WriteLine("\n=== 性能对比 ===");
        
        const int iterations = 1000000;
        int valueToCompute = 10;
        
        var stopwatch = System.Diagnostics.Stopwatch.StartNew();
        
        // 实时计算
        uint realTimeResult = 1;
        for (int i = 1; i <= iterations; i++)
        {
            realTimeResult = 1;
            for (int j = 2; j <= valueToCompute; j++)
            {
                realTimeResult *= (uint)j;
            }
        }
        
        stopwatch.Stop();
        long realTimeMs = stopwatch.ElapsedMilliseconds;
        
        stopwatch.Restart();
        
        // 使用缓存
        uint cachedResult = 0;
        for (int i = 1; i <= iterations; i++)
        {
            cachedResult = factorialCache[valueToCompute];
        }
        
        stopwatch.Stop();
        long cachedMs = stopwatch.ElapsedMilliseconds;
        
        Console.WriteLine($"计算 {valueToCompute}! {iterations:N0} 次:");
        Console.WriteLine($"实时计算: {realTimeMs}ms, 结果: {realTimeResult:N0}");
        Console.WriteLine($"缓存读取: {cachedMs}ms, 结果: {cachedResult:N0}");
        Console.WriteLine($"速度提升: {(double)realTimeMs / cachedMs:F1} 倍");
    }
}
```

### **题目9：数据存储优化 - 学生成绩统计**
**场景**：使用最合适的整数类型存储学生成绩数据

```csharp
using System;

class StudentGrades
{
    struct StudentRecord
    {
        public byte StudentId;      // 0-255个学生
        public sbyte Chinese;       // -128到127分（支持负分？不，应该是0-100）
        public sbyte Math;          // 使用sbyte但只存正数
        public sbyte English;
        public sbyte Science;
        public short Total;         // 总分可能超过127
        public byte Rank;           // 排名
    }
    
    static void Main()
    {
        Console.WriteLine("=== 学生成绩统计系统 ===");
        
        // 1. 创建学生记录数组
        StudentRecord[] students = new StudentRecord[5];
        
        // 初始化数据
        InitializeStudentData(students);
        
        // 2. 显示学生成绩
        DisplayStudentGrades(students);
        
        // 3. 计算总分和平均分
        CalculateTotalsAndAverages(students);
        
        // 4. 排名计算
        CalculateRanks(students);
        
        // 5. 成绩分析
        AnalyzeGrades(students);
        
        // 6. 内存占用分析
        AnalyzeMemoryUsage();
        
        // 7. 大数据量测试
        LargeDatasetSimulation();
    }
    
    static void InitializeStudentData(StudentRecord[] students)
    {
        // 使用Random生成成绩
        Random random = new Random();
        
        for (int i = 0; i < students.Length; i++)
        {
            students[i].StudentId = (byte)(i + 1);
            
            // 生成0-100分的成绩
            students[i].Chinese = (sbyte)random.Next(60, 101);
            students[i].Math = (sbyte)random.Next(60, 101);
            students[i].English = (sbyte)random.Next(60, 101);
            students[i].Science = (sbyte)random.Next(60, 101);
        }
    }
    
    static void DisplayStudentGrades(StudentRecord[] students)
    {
        Console.WriteLine("\n=== 学生成绩表 ===");
        Console.WriteLine("学号\t语文\t数学\t英语\t科学");
        Console.WriteLine("----\t----\t----\t----\t----");
        
        foreach (var student in students)
        {
            Console.WriteLine($"{student.StudentId:D2}\t" +
                            $"{student.Chinese}\t" +
                            $"{student.Math}\t" +
                            $"{student.English}\t" +
                            $"{student.Science}");
        }
    }
    
    static void CalculateTotalsAndAverages(StudentRecord[] students)
    {
        Console.WriteLine("\n=== 总分和平均分 ===");
        Console.WriteLine("学号\t总分\t平均分");
        Console.WriteLine("----\t----\t------");
        
        // 使用int存储总平均分，避免溢出
        int classTotal = 0;
        
        for (int i = 0; i < students.Length; i++)
        {
            // 计算每个学生的总分（使用short）
            short total = (short)(students[i].Chinese + 
                                 students[i].Math + 
                                 students[i].English + 
                                 students[i].Science);
            
            students[i].Total = total;
            
            // 计算平均分（使用float）
            float average = total / 4.0f;
            
            Console.WriteLine($"{students[i].StudentId:D2}\t" +
                            $"{total}\t" +
                            $"{average:F1}");
            
            classTotal += total;
        }
        
        // 班级平均分
        float classAverage = classTotal / (students.Length * 4.0f);
        Console.WriteLine($"\n班级平均分: {classAverage:F1}");
    }
    
    static void CalculateRanks(StudentRecord[] students)
    {
        Console.WriteLine("\n=== 成绩排名 ===");
        
        // 使用冒泡排序按总分排序
        for (int i = 0; i < students.Length - 1; i++)
        {
            for (int j = 0; j < students.Length - 1 - i; j++)
            {
                if (students[j].Total < students[j + 1].Total)
                {
                    // 交换
                    var temp = students[j];
                    students[j] = students[j + 1];
                    students[j + 1] = temp;
                }
            }
        }
        
        // 分配排名（处理并列）
        byte rank = 1;
        for (int i = 0; i < students.Length; i++)
        {
            if (i > 0 && students[i].Total < students[i - 1].Total)
            {
                rank = (byte)(i + 1);
            }
            students[i].Rank = rank;
        }
        
        // 显示排名
        Console.WriteLine("排名\t学号\t总分");
        Console.WriteLine("----\t----\t----");
        
        foreach (var student in students)
        {
            Console.WriteLine($"{student.Rank}\t" +
                            $"{student.StudentId:D2}\t" +
                            $"{student.Total}");
        }
    }
    
    static void AnalyzeGrades(StudentRecord[] students)
    {
        Console.WriteLine("\n=== 成绩分析 ===");
        
        // 统计各科目优秀(>=90)、良好(>=80)、及格(>=60)的人数
        byte[] chineseStats = new byte[3]; // [优秀, 良好, 及格]
        byte[] mathStats = new byte[3];
        byte[] englishStats = new byte[3];
        byte[] scienceStats = new byte[3];
        
        foreach (var student in students)
        {
            UpdateGradeStats(chineseStats, student.Chinese);
            UpdateGradeStats(mathStats, student.Math);
            UpdateGradeStats(englishStats, student.English);
            UpdateGradeStats(scienceStats, student.Science);
        }
        
        Console.WriteLine("科目\t优秀\t良好\t及格\t不及格");
        Console.WriteLine("----\t----\t----\t----\t------");
        
        DisplaySubjectStats("语文", chineseStats, students.Length);
        DisplaySubjectStats("数学", mathStats, students.Length);
        DisplaySubjectStats("英语", englishStats, students.Length);
        DisplaySubjectStats("科学", scienceStats, students.Length);
        
        // 找出最高分和最低分
        sbyte maxChinese = sbyte.MinValue;
        sbyte minChinese = sbyte.MaxValue;
        short maxTotal = short.MinValue;
        short minTotal = short.MaxValue;
        
        foreach (var student in students)
        {
            if (student.Chinese > maxChinese) maxChinese = student.Chinese;
            if (student.Chinese < minChinese) minChinese = student.Chinese;
            if (student.Total > maxTotal) maxTotal = student.Total;
            if (student.Total < minTotal) minTotal = student.Total;
        }
        
        Console.WriteLine($"\n语文最高分: {maxChinese}, 最低分: {minChinese}");
        Console.WriteLine($"总分最高: {maxTotal}, 最低: {minTotal}");
    }
    
    static void UpdateGradeStats(byte[] stats, sbyte grade)
    {
        if (grade >= 90) stats[0]++;      // 优秀
        else if (grade >= 80) stats[1]++; // 良好
        else if (grade >= 60) stats[2]++; // 及格
    }
    
    static void DisplaySubjectStats(string subject, byte[] stats, int totalStudents)
    {
        byte excellent = stats[0];
        byte good = stats[1];
        byte pass = stats[2];
        byte fail = (byte)(totalStudents - (excellent + good + pass));
        
        Console.WriteLine($"{subject}\t{excellent}\t{good}\t{pass}\t{fail}");
    }
    
    static void AnalyzeMemoryUsage()
    {
        Console.WriteLine("\n=== 内存占用分析 ===");
        
        // StudentRecord结构体大小分析
        Console.WriteLine("StudentRecord结构体字段:");
        Console.WriteLine($"  byte StudentId: {sizeof(byte)} 字节");
        Console.WriteLine($"  sbyte Chinese: {sizeof(sbyte)} 字节");
        Console.WriteLine($"  sbyte Math: {sizeof(sbyte)} 字节");
        Console.WriteLine($"  sbyte English: {sizeof(sbyte)} 字节");
        Console.WriteLine($"  sbyte Science: {sizeof(sbyte)} 字节");
        Console.WriteLine($"  short Total: {sizeof(short)} 字节");
        Console.WriteLine($"  byte Rank: {sizeof(byte)} 字节");
        Console.WriteLine($"  总计: {sizeof(byte) * 2 + sizeof(sbyte) * 4 + sizeof(short)} 字节");
        
        // 对比：如果使用int存储所有成绩
        Console.WriteLine("\n对比：如果使用int存储所有字段:");
        Console.WriteLine($"  int StudentId: {sizeof(int)} 字节");
        Console.WriteLine($"  int Chinese: {sizeof(int)} 字节");
        Console.WriteLine($"  int Math: {sizeof(int)} 字节");
        Console.WriteLine($"  int English: {sizeof(int)} 字节");
        Console.WriteLine($"  int Science: {sizeof(int)} 字节");
        Console.WriteLine($"  int Total: {sizeof(int)} 字节");
        Console.WriteLine($"  int Rank: {sizeof(int)} 字节");
        Console.WriteLine($"  总计: {sizeof(int) * 7} = 28 字节");
        
        Console.WriteLine($"\n内存节省: {28 - 8} = 20 字节/学生");
        Console.WriteLine($"10万学生节省: {20 * 100000 / 1024 / 1024:F1} MB");
    }
    
    static void LargeDatasetSimulation()
    {
        Console.WriteLine("\n=== 大数据量模拟 ===");
        
        const int studentCount = 10000;
        
        // 使用不同的存储方案
        Console.WriteLine($"模拟 {studentCount:N0} 个学生:");
        
        // 方案1：使用优化的小类型（我们的StudentRecord）
        long memory1 = studentCount * 8L;  // 8字节/学生
        Console.WriteLine($"方案1（优化）: {memory1 / 1024} KB");
        
        // 方案2：使用int存储所有数据
        long memory2 = studentCount * 28L;  // 28字节/学生
        Console.WriteLine($"方案2（int）: {memory2 / 1024} KB");
        
        // 方案3：使用类（引用类型，有额外开销）
        long memory3 = studentCount * (8 + 28 + 16);  // 对象头+字段+引用开销（估算）
        Console.WriteLine($"方案3（类）: {memory3 / 1024} KB");
        
        Console.WriteLine($"\n优化方案节省:");
        Console.WriteLine($"  相比int方案: {(memory2 - memory1) / 1024} KB");
        Console.WriteLine($"  相比类方案: {(memory3 - memory1) / 1024} KB");
        
        // 性能测试
        Console.WriteLine("\n性能影响:");
        Console.WriteLine("小类型优势:");
        Console.WriteLine("  1. 更少的内存占用 → 更好的缓存局部性");
        Console.WriteLine("  2. 更少的内存带宽占用");
        Console.WriteLine("  3. 更快的数组遍历速度");
        Console.WriteLine("\n注意事项:");
        Console.WriteLine("  1. 需要注意溢出问题");
        Console.WriteLine("  2. 类型转换可能需要额外指令");
        Console.WriteLine("  3. 不适用于需要负分的场景");
    }
}
```

### **题目10：跨平台兼容性 - 文件大小格式化**
**场景**：处理文件大小并确保跨平台兼容性

```csharp
using System;

class FileSizeFormatter
{
    static void Main()
    {
        Console.WriteLine("=== 文件大小格式化器 ===");
        
        // 1. 基础文件大小表示
        DemonstrateBasicFileSizes();
        
        // 2. 文件大小格式化
        FormatFileSizes();
        
        // 3. 跨平台大小限制
        DemonstratePlatformLimits();
        
        // 4. 网络传输大小计算
        CalculateNetworkTransfer();
        
        // 5. 存储设备容量计算
        CalculateStorageCapacity();
    }
    
    static void DemonstrateBasicFileSizes()
    {
        Console.WriteLine("\n=== 基本文件大小 ===");
        
        // 使用不同整数类型表示不同大小的文件
        byte tinyFile = 100;          // 100字节 - 小配置文件
        ushort smallFile = 50000;     // 50KB - 小图片
        uint mediumFile = 5000000;    // 5MB - MP3歌曲
        ulong largeFile = 1500000000; // 1.5GB - 电影文件
        ulong hugeFile = 5000000000000; // 5TB - 大型数据库
        
        Console.WriteLine($"小文件: {tinyFile} 字节");
        Console.WriteLine($"图片文件: {smallFile:N0} 字节");
        Console.WriteLine($"MP3文件: {mediumFile:N0} 字节");
        Console.WriteLine($"电影文件: {largeFile:N0} 字节");
        Console.WriteLine($"数据库文件: {hugeFile:N0} 字节");
        
        // 使用checked验证文件大小操作
        try
        {
            checked
            {
                // 模拟文件增长
                uint currentSize = 4000000000;  // 4GB
                uint addedSize = 300000000;     // 300MB
                uint newSize = currentSize + addedSize;
                
                Console.WriteLine($"\n文件增长: {FormatBytes(currentSize)} + {FormatBytes(addedSize)} = {FormatBytes(newSize)}");
                
                // 测试溢出情况
                uint maxSize = uint.MaxValue;  // ~4.29GB
                uint overflowTest = maxSize + 1;  // 这会溢出
            }
        }
        catch (OverflowException)
        {
            Console.WriteLine("文件大小计算溢出！需要使用更大的数据类型。");
        }
    }
    
    static void FormatFileSizes()
    {
        Console.WriteLine("\n=== 文件大小格式化 ===");
        
        ulong[] fileSizes = {
            1,                    // 1字节
            1023,                 // 1023字节
            1024,                 // 1KB
            1048576,              // 1MB
            1073741824,           // 1GB
            1099511627776,        // 1TB
            1125899906842624,     // 1PB
            500,                  // 500字节
            1500,                 // 1.46KB
            999999,               // 976.56KB
            1000000,              // 976.56KB
            1000000000,           // 953.67MB
            1000000000000         // 931.32GB
        };
        
        Console.WriteLine("原始字节\t格式化后\t二进制倍数\t十进制倍数");
        Console.WriteLine("--------\t--------\t--------\t--------");
        
        foreach (ulong size in fileSizes)
        {
            string binaryFormat = FormatBytes(size);                    // 二进制倍数 (1024)
            string decimalFormat = FormatBytesDecimal(size);            // 十进制倍数 (1000)
            string shortFormat = FormatBytesShort(size);                // 简短格式
            
            Console.WriteLine($"{size,13:N0}\t{binaryFormat,10}\t{decimalFormat,10}\t{shortFormat,10}");
        }
    }
    
    static string FormatBytes(ulong bytes)
    {
        string[] suffixes = { "B", "KB", "MB", "GB", "TB", "PB", "EB" };
        
        if (bytes == 0) return "0 B";
        
        int suffixIndex = 0;
        double size = bytes;
        
        while (size >= 1024 && suffixIndex < suffixes.Length - 1)
        {
            size /= 1024;
            suffixIndex++;
        }
        
        return $"{size:0.##} {suffixes[suffixIndex]}";
    }
    
    static string FormatBytesDecimal(ulong bytes)
    {
        string[] suffixes = { "B", "KB", "MB", "GB", "TB", "PB", "EB" };
        
        if (bytes == 0) return "0 B";
        
        int suffixIndex = 0;
        double size = bytes;
        
        while (size >= 1000 && suffixIndex < suffixes.Length - 1)
        {
            size /= 1000;
            suffixIndex++;
        }
        
        return $"{size:0.##} {suffixes[suffixIndex]}";
    }
    
    static string FormatBytesShort(ulong bytes)
    {
        const ulong KB = 1024UL;
        const ulong MB = KB * 1024;
        const ulong GB = MB * 1024;
        const ulong TB = GB * 1024;
        
        if (bytes >= TB)
            return $"{(double)bytes / TB:F1} TB";
        else if (bytes >= GB)
            return $"{(double)bytes / GB:F1} GB";
        else if (bytes >= MB)
            return $"{(double)bytes / MB:F1} MB";
        else if (bytes >= KB)
            return $"{(double)bytes / KB:F1} KB";
        else
            return $"{bytes} B";
    }
    
    static void DemonstratePlatformLimits()
    {
        Console.WriteLine("\n=== 平台限制 ===");
        
        // 32位系统限制
        Console.WriteLine("32位系统文件限制:");
        uint max32BitFile = uint.MaxValue;  // 4GB - 1
        Console.WriteLine($"最大文件大小: {FormatBytes(max32BitFile)}");
        
        // FAT32文件系统限制
        uint fat32MaxFile = 4294967295 - 1;  // 4GB - 1
        Console.WriteLine($"FAT32最大文件: {FormatBytes(fat32MaxFile)}");
        
        // 64位系统理论限制
        ulong max64BitFile = ulong.MaxValue;
        Console.WriteLine($"\n64位系统理论最大文件: {FormatBytes(max64BitFile)}");
        Console.WriteLine($"相当于: {max64BitFile / 1099511627776UL:N0} TB");
        
        // 实际限制
        Console.WriteLine("\n实际限制:");
        Console.WriteLine("NTFS最大文件: 256TB");
        Console.WriteLine("ext4最大文件: 16TB");
        Console.WriteLine("ReFS最大文件: 35PB");
        
        // 使用有符号类型表示文件大小变化
        Console.WriteLine("\n文件大小变化（使用有符号类型）:");
        long initialSize = 1000000;  // 1MB
        long added = 500000;         // 500KB
        long removed = 200000;       // 200KB
        
        long newSize = initialSize + added - removed;
        Console.WriteLine($"初始: {FormatBytes((ulong)initialSize)}, " +
                         $"添加: {FormatBytes((ulong)added)}, " +
                         $"移除: {FormatBytes((ulong)removed)}, " +
                         $"最终: {FormatBytes((ulong)newSize)}");
        
        // 文件大小可以为负数吗？（特殊情况）
        sbyte deletedFileSize = -1;  // 可能用于表示已删除
        Console.WriteLine($"\n特殊值: 已删除文件大小 = {deletedFileSize}");
    }
    
    static void CalculateNetworkTransfer()
    {
        Console.WriteLine("\n=== 网络传输计算 ===");
        
        // 文件大小
        uint fileSize = 2147483648;  // 2GB
        
        // 不同网络速度下的传输时间
        ushort[] speedsKbps = { 56, 256, 1000, 10000, 100000 };  // Kbps
        
        Console.WriteLine($"文件大小: {FormatBytes(fileSize)}");
        Console.WriteLine("\n传输时间估算:");
        Console.WriteLine("速度(Kbps)\t时间");
        Console.WriteLine("----------\t----------");
        
        foreach (ushort speed in speedsKbps)
        {
            // 计算时间（秒）
            double bits = fileSize * 8.0;
            double seconds = bits / (speed * 1000);
            
            TimeSpan time = TimeSpan.FromSeconds(seconds);
            
            string timeStr;
            if (time.TotalDays >= 1)
                timeStr = $"{time.TotalDays:F1} 天";
            else if (time.TotalHours >= 1)
                timeStr = $"{time.TotalHours:F1} 小时";
            else if (time.TotalMinutes >= 1)
                timeStr = $"{time.TotalMinutes:F1} 分钟";
            else
                timeStr = $"{time.TotalSeconds:F0} 秒";
            
            Console.WriteLine($"{speed,10}\t{timeStr}");
        }
        
        // 使用byte表示传输进度百分比
        Console.WriteLine("\n传输进度模拟:");
        byte totalChunks = 100;
        byte transferredChunks = 0;
        
        Random random = new Random();
        while (transferredChunks < totalChunks)
        {
            // 模拟每次传输1-5个块
            byte chunksThisTime = (byte)random.Next(1, 6);
            
            // 防止溢出
            if (transferredChunks + chunksThisTime > totalChunks)
                chunksThisTime = (byte)(totalChunks - transferredChunks);
            
            transferredChunks += chunksThisTime;
            
            // 计算百分比
            byte percent = (byte)(transferredChunks * 100 / totalChunks);
            
            Console.WriteLine($"传输: {transferredChunks}/{totalChunks} 块 ({percent}%)");
            
            // 模拟延迟
            System.Threading.Thread.Sleep(100);
        }
    }
    
    static void CalculateStorageCapacity()
    {
        Console.WriteLine("\n=== 存储设备容量 ===");
        
        // 常见存储设备容量（字节）
        ulong[] deviceCapacities = {
            1_440_000,              // 1.44MB 软盘
            650_000_000,            // 650MB CD
            4_700_000_000,          // 4.7GB DVD
            25_000_000_000,         // 25GB 蓝光
            500_000_000_000,        // 500GB 硬盘
            1_000_000_000_000,      // 1TB 硬盘
            2_000_000_000_000,      // 2TB 硬盘
            12_000_000_000_000,     // 12TB 硬盘
            64_000_000_000_000,     // 64TB 企业级
            1_000_000_000_000_000   // 1PB 存储系统
        };
        
        string[] deviceNames = {
            "3.5\" 软盘",
            "CD-ROM",
            "DVD",
            "蓝光光盘",
            "500GB 硬盘",
            "1TB 硬盘",
            "2TB 硬盘",
            "12TB 硬盘",
            "64TB 存储",
            "1PB 存储系统"
        };
        
        Console.WriteLine("设备\t\t容量\t\t格式化后\t可存储文件数*");
        Console.WriteLine("----\t\t----\t\t--------\t------------");
        
        // 假设平均文件大小10MB
        const ulong avgFileSize = 10 * 1024 * 1024;  // 10MB
        
        for (int i = 0; i < deviceCapacities.Length; i++)
        {
            ulong capacity = deviceCapacities[i];
            string formatted = FormatBytes(capacity);
            ulong fileCount = capacity / avgFileSize;
            
            // 使用不同的整数类型存储文件数
            string fileCountStr;
            if (fileCount <= byte.MaxValue)
                fileCountStr = $"{(byte)fileCount} 个";
            else if (fileCount <= ushort.MaxValue)
                fileCountStr = $"{(ushort)fileCount:N0} 个";
            else if (fileCount <= uint.MaxValue)
                fileCountStr = $"{(uint)fileCount:N0} 个";
            else
                fileCountStr = $"{fileCount:N0} 个";
            
            Console.WriteLine($"{deviceNames[i],-15}\t{capacity,18:N0}\t{formatted,10}\t{fileCountStr}");
        }
        
        // 容量计算中的注意事项
        Console.WriteLine("\n注意事项:");
        Console.WriteLine("1. 制造商使用十进制(1000)，系统使用二进制(1024)");
        Console.WriteLine("2. 格式化后会有容量损失");
        Console.WriteLine("3. 系统文件占用部分空间");
        
        // 演示容量差异
        Console.WriteLine("\n容量差异示例:");
        ulong marketed1TB = 1_000_000_000_000;  // 制造商说的1TB
        ulong actual1TB = 1_099_511_627_776;    // 实际的1TB (2^40)
        
        double differenceGB = (actual1TB - marketed1TB) / (1024.0 * 1024 * 1024);
        
        Console.WriteLine($"宣传的1TB: {FormatBytesDecimal(marketed1TB)}");
        Console.WriteLine($"实际的1TB: {FormatBytes(actual1TB)}");
        Console.WriteLine($"差异: {differenceGB:F1} GB ({differenceGB/1024:F2} TB)");
    }
}
```

---

## 总结

这10道C#整数类型应用题目涵盖了：

### **技术要点覆盖：**
1. **数据类型选择**：根据不同场景选择最合适的整数类型
2. **溢出处理**：使用`checked`/`unchecked`控制溢出行为
3. **位运算应用**：权限管理、标志位、二进制操作
4. **性能优化**：内存占用、计算效率、缓存使用
5. **边界条件处理**：循环边界、数值范围验证
6. **实际应用场景**：温度转换、抽奖系统、IP地址、文件大小等

### **八种整数类型特点：**
- **`byte`** (0-255)：小范围计数、标志位、紧凑存储
- **`sbyte`** (-128-127)：有符号小数值、特殊状态码
- **`short`** (-32,768-32,767)：中等范围数值、节省空间
- **`ushort`** (0-65,535)：无符号中等数值、端口号等
- **`int`** (-2.1B-2.1B)：通用整数、默认选择
- **`uint`** (0-4.3B)：大范围无符号数、IP地址等
- **`long`** (-9.2E18-9.2E18)：超大整数、时间戳等
- **`ulong`** (0-1.8E19)：最大无符号整数、文件大小等

### **学习价值：**
这些题目不仅练习了C#语法，更重要的是培养了：
- **类型意识**：为不同数据选择最合适的类型
- **溢出思维**：预见并处理边界情况
- **性能思维**：考虑内存占用和计算效率
- **实际问题解决能力**：将数据类型知识应用到真实场景

每道题都有完整可运行的代码，建议初学者亲手输入并运行，观察不同整数类型的行为特点。




## **开场**  
> 🎙️ “大家好！欢迎观看《C#初学者实例教程》的第6课《数据类型入门》。
> 
> 在第4课中，我们手写了一个‘Hello World’程序，总算是踏上了编程之路。
> 
> 上路之后，首先要做的事情就是：“理解数据”。
>
> 数据就是信息，信息又分为：文本、数字等等。数据是程序运行过程中操作的对象。程序的运行离不开数据。程序运行的核心任务就是：获取数据、处理数据、输出数据。
>
> “数据”本身具有不同的特点，比如：数字可以用来计算，文本可以用来描述事物。一盏灯有亮与不亮两种状态等等。
>
> 针对不同特点的数据，程序采用了不同的存储方式和处理方式，这就是数据类型。
>
> 今天这节课，我们就来**认识C#程序里的五种基本数据类型：整数、浮点数、字符串、字符和布尔值。**
>
> 它们是C#里最常用、最基础的数据类型，学会它们就能处理大部分日常编程需求”

---

## 数值

数值就是用来计算的数字。

数值可以直接书写，不需要用引号包裹。你可以试着在你的代码里写几个整数和浮点数（比如你的年龄、身高），看看IDE会不会报错。

数值大体上可以分为两种类型：整数类型和浮点数类型。今天我们主要学习整数类型。


## 整数类型
整数最容易理解，整数就是没有小数点的数字。

整数的性格非常直截了当。比如：

```csharp
//比如：可以记录年份，今年是2025年
2025 
//可以记录一个人的年纪:小明今年18岁
18 
//也可以记录今天走了多少步：爷爷今天走了8千步
8000 
100//收获了100个赞
```


## 数值相加

> 🎙️“你可能会问：数值能不能拿来‘加一加’？当然可以！
> C#中的加号运算符(`+`) 和数学中的加号运算符是一样的，都是一个十字。当它用在数字之间时，就表示数学上的加法。比如：

```csharp
Console.WriteLine(2 + 3); //点击运行，结果是5
Console.WriteLine(0.1 + 0.2); //点击运行，结果是0.3，但是要注意的是，浮点数的计算可能会有微小误差，比如你运行 0.1 + 0.2 可能不等于0.3，这不是你的错，而是计算机的‘精度限制’，我们以后会详细揭晓这个秘密。
```

两个数值相加，得到的仍然是一个数值，非常符合我们的日常习惯。

---

## 字符串（string）

字符串，顾名思义，就是一串字符。但是要注意的是：字符串必须使用英文双引号包裹。只要你用上英文双引号，编译器就知道你在说‘字符串’。忘了引号？对不起，编译器可不听你解释，直接报错。”比如：

```csharp
//使用双引号包裹的Hello World就是一个合法的字符串
"Hello World"
//如果忘记双引号，编译器立刻用红色波浪线提示你：这里有语法错误
Hello World
//你也不能使用单引号包裹，单引号在C#中不能包裹字符串，会报错。
'Hello World'
```
即使是数字，如果你包裹了引号，它就变成字符串了。它长得像数字，但性格完全不同。

```c#
"1234567"
```
字符串中的字符可以是任意字符，比如：字母、数字、汉字、空格、标点符号等等。比如
```c#
//可以是中文
"我是一条字符串。"
//也可以是空格
"      Hello C#"
//只要使用引号包裹，哪怕包裹的内容为空也是合法的。这叫做‘空字符串’。就像我打开冰箱，里面什么都没有——但这台冰箱依然存在。”
""
```

## 字符串拼接

数值可以用加号做加法运算。那字符串之间能不能‘加一加’呢？答案是：可以！

当 `+` 运算符用于两个字符串时，它的含义就变成了‘拼接字符串’，而不能说“加法运算”。比如

```csharp
//"Hello"和”World"用加号连接，运行后就变成了一个连着的单词HelloWorld，中加没有空格
Console.WriteLine("Hello" + "World");// HelloWorld
//如果你想加空格，可以这样写：
Console.WriteLine("Hello" + " " + "World");// 这样就拼接了空格。
Console.WriteLine("Hello " + "World");//也可以在Hello后面添加一个空格，这样写更简洁。
//需要注意的是：如果一个字符串Hello 加上 一个数值100，结果会是什么呢？运行看一下
Console.WriteLine("Hello" + 100); //结果是一个字符串“Hello100”。
// 也就是说，一个字符串 加 一个数值，结果还是字符串。
//数值100会被自动转为字符串100。
//一个符号，两个用途，看场合行事。
```

```c#
 //数值不需要引号
 Console.WriteLine(100);
 //字符串必须使用双引号包裹
 Console.WriteLine("Hello");
 //数值就是用于计算的数字
 Console.WriteLine(3 + 2);
 //字符串相加等于拼接字符串
 Console.WriteLine("Hello" + " " + "World");
 //字符串+数值 = 字符串
 Console.WriteLine("Hello" + 100);

 //布尔值常常用来比较大小
 Console.WriteLine(10 > 5);
 //布尔值常常用来比较大小
 Console.WriteLine(10 < 5); 
```

---

## 布尔（bool）
在程序语言中，有一种特别简单又特别重要的数据类型，叫做：布尔值（Boolean，简称 Bool）。

布尔值用于表示“真”或“假”。它的值只有两个

```c#
true

false
//都必须小写。
```
这两个值常常出现在比较表达式的运算结果中，比如
```c#
Console.WriteLine(10 > 5);//点及运行，结果是true，表示10>5是成立的。
Console.WriteLine(10 < 5); //点击运行，结果是false，表示10< 5是不成立的。
```
别小看这两个小小的值，

它们可是程序的“方向盘”，true 和 false——一个说‘是’，一个说‘否’，掌控着代码的走向与命运。

- 手机是否有电？
- 今天有没有下雨？
- 登录密码是否正确？
- 商品是否有库存？

就这么简单，却足以构建出智能的逻辑、条件的抉择。

**一句话：有它，程序才懂“对”与“错”；有它，程序才明白是“继续”还是“终止”。**


## 总结

“到目前为止，我们已经认识了三种最常见的数据类型：

| 数据类型       | 说明          | 举例                |用途|
| ---------- | ------------- | --------------------------- |---|
| 整数 | 没有小数点的整数      | `100`、`0`、`-5`              |计数、整数计算|
| 字符串 | 双引号里的字符       | `"Hello"`、`"abc"`、`"2025年"` |存储文本、消息|
| 布尔值 | true或false | `true`、`false`              |条件判断|

## 结束语

本节课就到这里，这里是不好奇编程，我是张杰。

如果这个视频对你有帮助，别忘了点赞、收藏、关注，感谢观看，我们下期再见！

慢慢学，一点点进步就很好！

---

## 练习

### 1.判断题

- "" 表示字符串不存在 (❌)
- -10 是合法的整型数据 (✅)
- true 和 false 可写成全大写 (❌)
- 3.0 和 3 在C#中是相同类型 (❌)
- "2025" 可以进行数学计算 (❌)

### 2.oh my ish

```
        __                                     __   
  ____  / /_     ____ ___  __  __   ____  _____/ /_  
 / __ \/ __ \   / __ `__ \/ / / /  /_  / / ___/ __ \ 
/ /_/ / / / /  / / / / / / /_/ /    / /_(__  ) / / / 
\____/_/ /_/  /_/ /_/ /_/\__, /    /___/____/_/ /_/  
                        /____/                       
```
### 3.Dog

```
  / \__
 (    @\___
 /         O
/   (_____/
/_____/   U

```
### 4.Cat

```c#
 /\_/\
( o.o )
 > ^ <
```

### 5.kid

```c#
Console.WriteLine("  .--.");
Console.WriteLine(" (o_o )");
Console.WriteLine(" /)__)");
Console.WriteLine(" -\"--\"-");
```

