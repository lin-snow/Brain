# JavaScript Object(对象)

对象与原始类型的根本区别之一是，对象是“通过引用”存储和复制的。

**赋值了对象的变量存储的不是对象本身，而是该对象“在内存中的地址” —— 换句话说就是对该对象的“引用”。**

## 创建对象

```js
let user = new Object(); // 构造函数语法
let user = {}; // 字面量语法

let user = {
    name: "John",
    age: "30",
    "likes birds": true // 多次属性名必须加引号
}
```



我们可以用下面的方法访问属性：

- 点符号: `obj.property`。
- 方括号 `obj["property"]`，方括号允许从变量中获取键，例如 `obj[varWithKey]`。



其他操作：

- 删除属性：`delete obj.prop`。
- 检查是否存在给定键的属性：`"key" in obj`。
- 遍历对象：`for(let key in obj)` 循环。

---



## 拷贝一个对象

由于对象是引用类型，所以要复制一个对象可以使用Object.assign的方法

### “浅拷贝”（嵌套对象被通过引用进行拷贝）

**假设待拷贝对象的属性都为原始数据类型**：

```js
Object.assign(dest, [scr1, scr2, scr3])
```

- 第一个参数 `dest` 是指目标对象。
- 更后面的参数 `src1, ..., srcN`（可按需传递多个参数）是源对象。
- 该方法将所有源对象的属性拷贝到目标对象 `dest` 中。换句话说，从第二个开始的所有参数的属性都被拷贝到第一个参数的对象中。
- 调用结果返回 `dest`。

或者

```js
let user = {
    name: "mike"
};

let clone = Object.assign({}, user);
```



### **深拷贝**

使用 [lodash](https://lodash.com/) 库的 [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep)



---

## 对象方法，'this'

- 存储在对象属性中的函数被称为“方法”。
- 方法允许对象进行像 `object.doSomething()` 这样的“操作”。
- 方法可以将对象引用为 `this`。

`this` 的值是在程序运行时得到的。

- 一个函数在声明时，可能就使用了 `this`，但是这个 `this` 只有在函数被调用时才会有值。
- 可以在对象之间复制函数。
- 以“方法”的语法调用函数时：`object.method()`，调用过程中的 `this` 值是 `object`。

请注意箭头函数有些特别：它们没有 `this`。在箭头函数内部访问到的 `this` 都是从外部获取的。



---

## 构造器

构造函数，或简称构造器，就是常规函数，但大家对于构造器有个共同的约定，就是其命名**首字母要大写**。

构造函数只能使用 `new` 来调用。构造器没有 `return` 语句。



---

## 可选链

解决**”不存在的属性“**的问题，访问的对象属性为null或者undefined时会导致报错，所以可以用可选链.

可选链 `?.` 语法有三种形式：

1. `obj?.prop` —— 如果 `obj` 存在则返回 `obj.prop`，否则返回 `undefined`。
2. `obj?.[prop]` —— 如果 `obj` 存在则返回 `obj[prop]`，否则返回 `undefined`。
3. `obj.method?.()` —— 如果 `obj.method` 存在则调用 `obj.method()`，否则返回 `undefined`。

正如我们所看到的，这些语法形式用起来都很简单直接。`?.` 检查左边部分是否为 `null/undefined`，如果不是则继续运算。

`?.` 链使我们能够安全地访问嵌套属性。

示例：

```js
let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
```

**可选链具有短路效应**

::: warning 不要过度使用可选链！

例如，如果根据我们的代码逻辑，`user` 对象必须存在，但 `address` 是可选的，那么我们应该这样写 `user.address?.street`，而不是这样 `user?.address?.street`。



如果我们滥用 `?.`，会导致代码中的错误在不应该被消除的地方消除了，这会导致调试更加困难。

:::

::: warning `?.` **前的变量必须已声明**

如果未声明变量 `user`，那么 `user?.anything` 会触发一个错误

:::



---



