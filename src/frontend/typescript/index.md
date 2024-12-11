# TypeScritp基础

`TypeScript` 作为 `JavaScript` 语言的超集，它为 `JavaScript` 添加了可选择的类型标注，大大增强了代码的可读性和可维护性。同时，它提供最新和不断发展的 `JavaScript` 特性，能让我们建立更健壮的组件。

引用[官网](https://www.typescriptlang.org/zh/)的定义

> `TypeScript` 扩展了 `JavaScript`，为它添加了类型支持。
>
> `TypeScript` 可以在您运行代码之前找到错误并提供修复，从而改善您的开发体验。
>
> 任何浏览器，任何操作系统，任何运行 `JavaScript` 的地方，完全开源。

用 `TypeScript` 编写的文件以 `.ts` 为后缀；用 `TypeScript` 编写 `React` 时，以 `.tsx` 为后缀。

---

##  类型声明

```ts
let a: string // 变量a只能存储字符串
let b: number // 变量b只能存储数值
let c: boolean // 变量c只能存储布尔值

a = 'hello'
a = 100 // 警告： 不能将类型“number”分配给类型“string”

function demo(x: number, y: number):number {
    return x + y;
}

demo(100,200)
demo(100, '200') // 警告： 类型“string”的参数不能赋给类型“number”的参数
demo(100, 200, 300) // 警告： 应有2个参数，但获得3个
demo(100)     		// 警告： 应有2个参数，但获得1个

```



---



## 类型推断

```ts
let d = -99 // TypeScript会推断出变量d的类型是数字
d = false  	// 警告： 不能将类型“boolean”分配给类型“number”
```





---

## 类型总览

JavaScript中的数据类型：

::: tip

`string`、`number`、`boolean`、`null`、`undefined`、`bigint`、`symbol`、`object`

> 备注： 其中`object`包含： `Array`、`Function`、`Date`...

:::



TypeScript中的数据类型：

::: tip

1. 以上所有
2. 四个新类型： `void`、`never`、`unknown`、`any`、`enum`、`tuple`
3. 自定义类型： `type`、`interface`

:::

注意点： JS 中的这三个构造函数： `Number` 、 `String` 、 `Boolean` ，他们只⽤于包装对象，正 常开发时，很少去使⽤他们，在 TS 中也是同理。