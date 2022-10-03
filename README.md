# Web Resume案例的知识点

## svg文件
定义
- SVG: Scalable Vector Graphics
- 可缩放的矢量图形。
- 是一种使用 XML标记语言描述二维矢量图形的文件格式。

用法
- 可以和HTML、CSS、JS配合使用。
- SVG文件可使用代码编辑器创建并修改。
- SVG文件也可通过常见图形软件导出生成，如：
    - Adobe Illustrator
    - Adobe XD
    - Adobe Figma
    - 等

## `<progress>`标签
定义
- `<progress>`标签用于表示某项任务的完成进度。

用法
- `<progress>`标签常常需要与`<label>`标签搭配使用，以提升用户的可访问性。
- `<progress>`标签需要与JS配合来控制任务的完成进度。
- `<progress>`标签只表示完成进度，不表示量的大小。如果要表示量的大小，请使用`<meter>`标签。


## CSS变量
定义
- CSS变量指使用`--`开头定义的一个可以在文档中复用的名字。
- 该改名字包含一个值。
- `--`是自定义属性的标识符。
- CSS变量也就是指CSS自定义属性。

用法
- 调用变量必须使用`var()`函数。如`background: var(--primary-color)`
- 定义全局变量必须定义在`:root`伪类选择器内，如 `:root{--primary-color: #ff0;}`
- 定义局部变量可以定义在你希望应用变量的选择器内。


## 

