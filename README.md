# fed-e-task-01


## 选择题
### 1、下面关于虚拟 DOM 的说法正确的是：
A. 使用虚拟 DOM 不需要手动操作 DOM，可以极大的提高程序的性能。

B. 使用虚拟 DOM 不需要手动操作 DOM，可以极大的提高开发效率。

C. 虚拟 DOM 可以维护程序的状态，通过对比两次状态的差异更新真实 DOM。

D. 虚拟 DOM 本质上是 JavaScript 对象，可以跨平台，例如服务器渲染、Weex 开发等。

### 答案：BCD

### 2、下面关于 Snabbdom 库的描述错误的是：
A. Snabbdom 库是一个高效的虚拟 DOM 库，Vue.js 的虚拟 DOM 借鉴了 Snabbdom 库。

B. 使用 h() 函数创建 VNode 对象，描述真实 DOM 结构。

C. Snabbdom 库本身可以处理 DOM 的属性、事件、样式等操作。

D. 使用 patch(oldVnode, null) 可以清空页面元素

### 答案：D

## 简答题
### 1、请简述 patchVnode 函数的执行过程。

### 答案：

1. 先触发prepatch函数和update函数。
2. 判断新老节点，有以下几种情况：
- 新节点有text属性，且不等于旧节点的text属性。如果老节点有children，移除children对应的DOM元素。设置新节点对应DOM元素的text内容。
- 新老节点都有children，且不相等。调用updateChildren函数，对比子节点，更新子节点的差异。
- 只有新节点有children属性。如果老节点有text属性，清空对应DOM元素的text内容，添加所有子节点。
- 只有老节点有children属性。移除所有老节点。
- 只有老节点有text属性。清空对应DOM元素的text内容。
3. 触发postpatch函数
