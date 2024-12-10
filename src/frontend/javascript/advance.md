# JavaScript高级

## 闭包

```js
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };

  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1
```



---

## 函数绑定

当将对象方法作为回调进行传递，例如传递给 `setTimeout`，这儿会存在一个常见的问题：“丢失 `this`”。

**解决**：使用**包装器**

```js
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);
```

---

## 深入理解箭头函数

1. 箭头函数没有**this**

2. 箭头函数没有**arguments**

   当我们需要使用当前的 `this` 和 `arguments` 转发一个调用时，这对装饰器（decorators）来说非常有用。

   例如，`defer(f, ms)` 获得了一个函数，并返回一个包装器，该包装器将调用延迟 `ms` 毫秒：

   ```js
   function defer(f, ms) {
     return function() {
       setTimeout(() => f.apply(this, arguments), ms);
     };
   }
   
   function sayHi(who) {
     alert('Hello, ' + who);
   }
   
   let sayHiDeferred = defer(sayHi, 2000);
   sayHiDeferred("John"); // 2 秒后显示：Hello, John
   ```

---

## 类

基本的类语法看起来像这样：

```javascript
class MyClass {
  prop = value; // 属性

  constructor(...) { // 构造器
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter 方法
  set something(...) {} // setter 方法

  [Symbol.iterator]() {} // 有计算名称（computed name）的方法（此处为 symbol）
  // ...
}
```



为了隐藏内部接口，我们使用受保护的或私有的属性：

- 受保护的字段以 `_` 开头。这是一个众所周知的约定，不是在语言级别强制执行的。程序员应该只通过它的类和从它继承的类中访问以 `_` 开头的字段。
- 私有字段以 `#` 开头。JavaScript 确保我们只能从类的内部访问它们。



---

## 错误处理

`try...catch` 结构允许我们处理执行过程中出现的 error。从字面上看，它允许“尝试”运行代码并“捕获”其中可能发生的 error。

语法如下：

```javascript
try {
  // 执行此处代码
} catch (err) {
  // 如果发生 error，跳转至此处
  // err 是一个 error 对象
} finally {
  // 无论怎样都会在 try/catch 之后执行
}
```

这儿可能会没有 `catch` 或者没有 `finally`，所以 `try...catch` 或 `try...finally` 都是可用的。

Error 对象包含下列属性：

- `message` —— 人类可读的 error 信息。
- `name` —— 具有 error 名称的字符串（Error 构造器的名称）。
- `stack`（没有标准，但得到了很好的支持）—— Error 发生时的调用栈。

如果我们不需要 error 对象，我们可以通过使用 `catch {` 而不是 `catch (err) {` 来省略它。

我们也可以使用 `throw` 操作符来生成自定义的 error。从技术上讲，`throw` 的参数可以是任何东西，但通常是继承自内建的 `Error` 类的 error 对象。

---

## async/await

```js
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // 等待，直到 promise resolve (*)

  alert(result); // "done!"
}

f();
```



函数前面的关键字 `async` 有两个作用：

1. 让这个函数总是返回一个 promise。
2. 允许在该函数内使用 `await`。

Promise 前的关键字 `await` 使 JavaScript 引擎等待该 promise settle，然后：

1. 如果有 error，就会抛出异常 —— 就像那里调用了 `throw error` 一样。
2. 否则，就返回结果。

这两个关键字一起提供了一个很好的用来编写异步代码的框架，这种代码易于阅读也易于编写。

有了 `async/await` 之后，我们就几乎不需要使用 `promise.then/catch`，但是不要忘了它们是基于 promise 的，因为有些时候（例如在最外层作用域）我们不得不使用这些方法。

---

## 模块

**示例：**

例如，我们有一个 `sayHi.js` 文件导出了一个函数：

```js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

……然后另一个文件可能导入并使用了这个函数：

```js
// 📁 main.js
import { sayHi } from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
```



1. 一个模块就是一个文件。浏览器需要使用

   ```js
   <script type="module">
   ```

   以使`import/export`可以工作。模块（译注：相较于常规脚本）有几点差别：

   - 默认是延迟解析的（deferred）。
   - Async 可用于内联脚本。
   - 要从另一个源（域/协议/端口）加载外部脚本，需要 CORS header。
   - 重复的外部脚本会被忽略

2. 模块具有自己的本地顶级作用域，并可以通过 `import/export` 交换功能。

3. 模块始终使用 `use strict`。

4. 模块代码只执行一次。导出仅创建一次，然后会在导入之间共享。

当我们使用模块时，每个模块都会实现特定功能并将其导出。然后我们使用 `import` 将其直接导入到需要的地方即可。浏览器会自动加载并解析脚本。



### 动态导入

如果我们有以下模块 `say.js`：

```js
// 📁 say.js
export function hi() {
  alert(`Hello`);
}

export function bye() {
  alert(`Bye`);
}

export default function() {
  alert("Module loaded (export default)!");
}
```

……那么，可以像下面这样进行动态导入：

```js
let {hi, bye} = await import('./say.js');

hi();
bye();

// 访问default
let { default: say } = await import('./say.js');
say();
```



---

