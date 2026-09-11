---
# 这部分是关键！侧边栏显示名由这里决定
title: 任务二 网络拓扑结构  # 文档标题，若无 sidebar_label 则作为侧边栏名
sidebar_label: 任务二 网络拓扑结构  # 显式指定侧边栏显示名（优先级最高）
sidebar_position: 1  # 侧边栏中排在第1位
---

根据《计算机网络基础》教材内容，以简答题形式逐行提取的知识点如下：

---

**1. 什么是计算机网络拓扑结构？**  
答：将网络中的计算机、设备等视为节点，通信线路视为连线，用图形方式表示它们之间的连接关系，即为计算机网络拓扑结构。

**2. 网络拓扑结构在设计中的作用是什么？**  
答：拓扑结构影响网络性能、系统可靠性、通信费用和投资，并且是实现各种协议的基础，是网络设计的第一步。

**3. 局域网的三种主要拓扑结构分别是什么？**  
答：星型拓扑、总线型拓扑和环型拓扑。

**4. 星型拓扑结构的定义是什么？**  
答：用一个节点作为中心节点，其他所有节点直接与中心节点相连，中心节点通常为集线器或交换机。

**5. 星型拓扑结构的控制方式是什么？**  
答：属于集中控制型，整个网络由中心节点执行集中式控制管理，各节点间通信都需通过中心节点。

**6. 星型拓扑结构有哪些优点？**  
答：①控制简单；②故障诊断和隔离容易，单个连接点故障只影响一个设备；③方便提供服务和网络重新配置。

**7. 星型拓扑结构有哪些缺点？**  
答：①需要大量电缆，安装维护工作量大；②中心节点负担重，易成瓶颈，一旦故障全网受影响。

**8. 总线型拓扑结构的定义是什么？**  
答：所有节点都直接连接到一条主干电缆（总线）上，无中心节点，常用同轴电缆或光缆。

**9. 总线型拓扑结构的信息传递方式是什么？**  
答：信息以基带形式串行传递，从发送节点向两端扩散，属广播式网络，节点通过地址匹配接收信息。

**10. 总线型拓扑结构有哪些特点？**  
答：①组网费用低；②传输速度随用户增多而下降；③扩展灵活但节点数量有限；④单个节点故障不影响网络，但总线中断会导致全网瘫痪；⑤同一时刻仅一个节点可发送数据。

**11. 环型拓扑结构的定义是什么？**  
答：各节点通过点到点链路首尾相连形成闭合环，数据沿固定方向在各节点间传输。

**12. 环型拓扑结构中的“令牌”是什么？**  
答：令牌是一个数据帧，由控制信息和数据信息组成，包含源地址、目标地址及忙/闲状态，用于控制传输权限。

**13. 环型拓扑结构有哪些特点？**  
答：①适用于IEEE 802.5令牌网；②组网简单、投资省；③维护困难，任一节点故障会导致全网中断；④扩展性能差，添加或移出节点需中断网络；⑤信息流单向，路径选择简单，但节点过多会降低传输速率。

**14. 什么是混合拓扑结构？**  
答：将多种拓扑结构（如星型和总线型）组合而成的网络结构，兼有不同拓扑结构的优点。

**15. 什么是蜂窝拓扑结构？**  
答：以无线传输介质（微波、卫星、红外等）为特征，用于无线局域网和城域网的结构，每个蜂窝中心设有无线收发设备。

**16. 目前应用最广泛的局域网拓扑结构是哪种？说明原因。**  
答：星型拓扑结构。原因是：①控制简单，便于管理和监控；②故障隔离容易，单点故障不影响全网；③服务方便，易于网络重新配置；④符合综合布线标准，支持多种宽带需求。


我先逐张读取这5页教材截图，再整理成简答题形式的知识点。

5 页内容已读完，是"任务一：计算机网络拓扑结构"。我先读取可视化规范，稍后除简答题清单外，再附一张拓扑结构对比图方便复习。

我按可视化规范读取 HTML/SVG 模式所需的规范文件，然后生成简答题清单和对比图。

5 页教材内容已完整读取（模块一 · 任务一：计算机网络拓扑结构）。下面先给出按知识点拆成的简答题清单，再附一张拓扑结构对比图。

## 一、拓扑结构基本概念

**1. 什么是拓扑学？它与计算机网络有什么关系？**
拓扑学是几何学的分支，由图论演变而来。它先把实体抽象为与大小、形状无关的点，再把连接实体的线路抽象为线，进而研究点、线、面之间的关系。计算机网络设计正是借用了这一概念。

**2. 什么是计算机网络的拓扑结构？**
不考虑实际网络的地理位置，把网络中的计算机、设备等视为节点，把通信线路视为连线——即将通信子网中的通信处理机和其他通信设备抽象为与大小、形状无关的点，将连接节点的通信线路抽象为线，这种点、线连接而成的几何图形就是网络拓扑结构。

**3. 网络拓扑结构能反映什么？**
能反映网络中各实体之间的结构关系。

**4. 为什么说网络拓扑结构的选择和设计是计算机网络设计的第一步？**
① 必须确定各计算机和其他网络设备在网络中的位置；② 拓扑结构直接关系到网络的性能、系统可靠性、通信及投资费用（如总线型拓扑传输介质使用量少、投资少）；③ 拓扑结构是实现各种协议的基础。

## 二、局域网拓扑结构的分类

**5. 局域网拓扑结构主要有哪几种？还有哪些其他结构？**
主要有星型、总线型、环型三种；实际建设中还存在混合结构和蜂窝拓扑结构。

## 三、星型拓扑结构

**6. 什么是星型拓扑结构？中心节点可以是哪些设备？**
用一个节点作为中心节点，其他节点直接与中心节点相连。中心节点可以是文件服务器，也可以是连接设备（常见的为集线器或交换机）。

**7. 星型拓扑属于什么控制类型的网络？节点间如何通信？**
属于集中控制型网络，整个网络由中心节点执行集中式控制管理，各节点间的通信都要通过中心节点：发送节点先把数据发到中心节点，再由中心节点转送到目的节点。中心节点相当复杂，而各节点的通信处理负担都很小。

**8. 星型拓扑结构的优点有哪些？**
① 控制简单：外围节点只与中心节点相连，介质访问控制方法简单，易于监控和管理；② 故障诊断和隔离容易：可从中心节点对连接线路逐一隔离检测，单个连接点故障只影响一个设备，不影响全网连通性；③ 方便服务：中心节点可方便地对各站点提供服务及网络重新配置。

**9. 星型拓扑结构的缺点有哪些？**
① 需要耗费大量电缆，安装、维护工作量大；② 中心节点负担重，容易形成"瓶颈"，一旦发生故障，全网都受影响。

**10. 星型拓扑结构的总体评价与应用情况？**
相对简单、便于管理、建网容易，是目前局域网普遍采用的一种拓扑结构。采用星型结构的局域网一般使用双绞线或光纤作为传输介质，符合综合布线标准，能满足多种宽带需求。

## 四、总线型拓扑结构

**11. 什么是总线型拓扑结构？总线采用的介质是什么？**
所有节点都直接连到一条主干电缆上，这条主干电缆称为总线。总线所用介质一般是同轴电缆（分粗缆和细缆）或光缆。

**12. 为什么总线型网络又称"广播式网络"？**
总线结构中无中心节点控制，公用总线上的信息多以基带形式串行传递，传递方向总是从发送信息的节点向两端扩散，如同广播电台发射信息一样。各节点接收信息时都进行地址检查，判断是否与自己的地址相符，相符才接收。

**13. 总线型拓扑结构有哪些特点？**
① 不需要另外的互联设备，组网费用低；② 各节点共用总线带宽，传输速度随接入用户增多而下降；③ 用户扩展较灵活（加一个接线器即可），但可连接的用户数量有限；④ 维护较容易，单个节点失效不影响全网，但总线某处中断则整个网络或相应主干网络中断，故障排查困难；⑤ 一次仅能一个端用户发送数据，其他端用户必须等待获得发送权。

## 五、环型拓扑结构

**14. 什么是环型拓扑结构？**
由网络中若干节点通过点到点的链路首尾相连形成一个闭合的环，公共传输电缆组成环型连接，数据在环路中沿一个方向在各节点间传输。

**15. 环型拓扑一般适用于什么网络？什么是"令牌"？**
一般仅适用于 IEEE 802.5 的令牌网（Token Ring Network）。"令牌"其实是一个数据帧，由控制信息和数据信息两部分组成；控制信息包含源地址、目标地址及数据帧的忙、闲状态（"忙"表示携带了数据信息）等信息，令牌在环型连接的结点中依次传递。

**16. 环型拓扑结构有哪些特点？**
① 网络组建比较简单、投资较省（除工作站外只有传输介质和连接器材，无集线器、交换机等集中设备），但所能实现的功能最简单；② 维护困难：节点间直接串联，任何一个节点出故障都会造成整个网络中断、瘫痪；同轴电缆采用插针式接触方式易接触不良，查找故障点非常困难；③ 扩展性能差：添加或移出节点必须中断整个网络；④ 信息流沿固定方向流动，两个节点仅有一条道路，简化了路径选择控制；⑤ 各节点均为"自举控制"（按所装网络协议对收发信息自动引导控制），控制软件简单；⑥ 信息源串行穿过各个节点，环中节点过多时影响传输速率，使网络响应时间延长。

## 六、混合结构与蜂窝拓扑结构

**17. 什么是混合拓扑结构？有何特点？**
将多种拓扑结构的局域网连在一起而形成的结构（如星型结构与总线结构组合而成）。混合拓扑结构兼并了不同拓扑结构的优点。

**18. 什么是蜂窝拓扑结构？有何特征？适用于什么网络？**
蜂窝拓扑结构是无线局域网中常用的结构，以无线传输介质（微波、卫星、红外等）的点到点传输和多点传输为特征，是一种无线网使用的拓扑结构，适用于局域网和城域网。处于每个蜂窝中心位置的为无线收发设备。

## 七、任务实施

**19. 本任务的实施步骤是什么？**
① 启动计算机，以"计算机网络的拓扑结构"为关键词搜索；② 分析搜索结果，总结每种拓扑结构的特点；③ 确定并分析目前应用最广泛的拓扑结构，从连接便利、维护方便等方面分析其应用最广泛的原因。

---

五种局域网拓扑结构对比图（依据教材内容绘制）：

```
<html style="margin:0;padding:0;">
<div style="background-color:transparent;box-sizing:border-box;--accent:var(--m-05);">
  <div style="padding:4px 2px;font-family:'PingFang SC','Segoe UI',Arial,sans-serif;color:#1A1B1C;line-height:1.55;">
    <div style="font-size:15px;font-weight:600;margin:0 0 4px;">局域网五种拓扑结构对比</div>
    <div style="font-size:12px;color:#6B7280;margin:0 0 12px;">依据《计算机网络基础》模块一·任务一教材内容整理（示意图）</div>

    <div style="display:flex;flex-wrap:wrap;gap:12px;box-sizing:border-box;">

      <!-- 星型 -->
      <div style="flex:1 1 200px;min-width:200px;box-sizing:border-box;border:1px solid rgba(0,0,0,0.08);border-radius:14px;background:#FFFFFF;padding:12px;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span style="background:#9BBBF4;color:#fff;font-size:11px;font-weight:600;border-radius:8px;padding:2px 8px;">星型</span>
          <span style="font-size:11px;color:#6B7280;">集中控制型</span>
        </div>
        <div style="font-size:12px;color:#1A1B1C;margin-bottom:6px;">中心节点为文件服务器或集线器/交换机，各节点直接连中心节点。</div>
        <div style="font-size:12px;font-weight:600;color:#1A1B1C;">优点</div>
        <div style="font-size:12px;color:#1A1B1C;">控制简单 · 故障易隔离（单点故障不影响全网）· 便于提供服务</div>
        <div style="font-size:12px;font-weight:600;color:#1A1B1C;margin-top:4px;">缺点</div>
        <div style="font-size:12px;color:#1A1B1C;">电缆耗费多 · 中心节点易成"瓶颈"</div>
        <div style="font-size:12px;font-weight:600;color:#1A1B1C;margin-top:4px;">应用</div>
        <div style="font-size:12px;color:#1A1B1C;">目前局域网最普遍采用，常用双绞线/光纤</div>
      </div>

      <!-- 总线型 -->
      <div style="flex:1 1 200px;min-width:200px;box-sizing:border-box;border:1px solid rgba(0,0,0,0.08);border-radius:14px;background:#FFFFFF;padding:12px;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span style="background:#A2DDAA;color:#fff;font-size:11px;font-weight:600;border-radius:8px;padding:2px 8px;">总线型</span>
          <span style="font-size:11px;color:#6B7280;">广播式网络</span>
        </div>
        <div style="font-size:12px;color:#1A1B1C;margin-bottom:6px;">所有节点连到一条主干电缆（总线）上，无中心控制，信息向两端扩散。</div>
        <div style="font-size:12px;font-weight:600;color:#1A1B1C;">优点</div>
        <div style="font-size:12px;color:#1A1B1C;">组网费用低 · 扩展灵活 · 单节点失效不影响全网</div>
        <div style="font-size:12px;font-weight:600;color:#1A1B1C;margin-top:4px;">缺点</div>
        <div style="font-size:12px;color:#1A1B1C;">共用带宽，用户增多速度下降 · 总线中断则全网中断 · 一次仅一端可发送</div>
        <div style="font-size:12px;font-weight:600;color:#1A1B1C;margin-top:4px;">介质</div>
        <div style="font-size:12px;color:#1A1B1C;">同轴电缆（粗缆/细缆）或光缆</div>
      </div>

      <!-- 环型 -->
      <div style="flex:1 1 200px;min-width:200px;box-sizing:border-box;border:1px solid rgba(0,0,0,0.08);border-radius:14px;background:#FFFFFF;padding:12px;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span style="background:#F4B393;color:#fff;font-size:11px;font-weight:600;border-radius:8px;padding:2px 8px;">环型</span>
          <span style="font-size:11px;color:#6B7280;">令牌传递</span>
        </div>
        <div style="font-size:12px;color:#1A1B1C;margin-bottom:6px;">节点经点到点链路首尾相连成闭合环，数据沿固定方向逐节点传递。</div>
        <div style="font-size:12px;font-weight:600;color:#1A1B1C;">优点</div>
        <div style="font-size:12px;color:#1A1B1C;">组建简单、投资较省 · 路径选择简化 · 控制软件简单</div>
        <div style="font-size:12px;font-weight:600;color:#1A1B1C;margin-top:4px;">缺点</div>
        <div style="font-size:12px;color:#1A1B1C;">任一节点故障全网瘫痪 · 维护困难 · 扩展须中断网络</div>
        <div style="font-size:12px;font-weight:600;color:#1A1B1C;margin-top:4px;">应用</div>
        <div style="font-size:12px;color:#1A1B1C;">IEEE 802.5 令牌网（Token Ring）</div>
      </div>

      <!-- 混合 -->
      <div style="flex:1 1 200px;min-width:200px;box-sizing:border-box;border:1px solid rgba(0,0,0,0.08);border-radius:14px;background:#FFFFFF;padding:12px;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span style="background:#C9A7E8;color:#fff;font-size:11px;font-weight:600;border-radius:8px;padding:2px 8px;">混合型</span>
          <span style="font-size:11px;color:#6B7280;">组合结构</span>
        </div>
        <div style="font-size:12px;color:#1A1B1C;margin-bottom:6px;">将多种拓扑结构的局域网连在一起形成（如星型＋总线型）。</div>
        <div style="font-size:12px;font-weight:600;color:#1A1B1C;">特点</div>
        <div style="font-size:12px;color:#1A1B1C;">兼并了不同拓扑结构的优点</div>
      </div>

      <!-- 蜂窝 -->
      <div style="flex:1 1 200px;min-width:200px;box-sizing:border-box;border:1px solid rgba(0,0,0,0.08);border-radius:14px;background:#FFFFFF;padding:12px;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span style="background:#94D8C3;color:#fff;font-size:11px;font-weight:600;border-radius:8px;padding:2px 8px;">蜂窝型</span>
          <span style="font-size:11px;color:#6B7280;">无线结构</span>
        </div>
        <div style="font-size:12px;color:#1A1B1C;margin-bottom:6px;">无线局域网常用，每个蜂窝中心位置设无线收发设备。</div>
        <div style="font-size:12px;font-weight:600;color:#1A1B1C;">特征</div>
        <div style="font-size:12px;color:#1A1B1C;">以无线介质（微波/卫星/红外）点到点及多点传输</div>
        <div style="font-size:12px;font-weight:600;color:#1A1B1C;margin-top:4px;">适用</div>
        <div style="font-size:12px;color:#1A1B1C;">局域网和城域网</div>
      </div>

    </div>
  </div>
</div>
</html>
```

简答题共 19 条，覆盖概念、五种拓扑结构的定义/优缺点/应用和任务实施。需要我把这份清单导出成 Word 文档方便背诵吗？