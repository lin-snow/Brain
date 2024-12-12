# TypeScript基础

`TypeScript` 作为 `JavaScript` 语言的超集，它为 `JavaScript` 添加了可选择的类型标注，大大增强了代码的可读性和可维护性。同时，它提供最新和不断发展的 `JavaScript` 特性，能让我们建立更健壮的组件。

引用[官网](https://www.typescriptlang.org/zh/)的定义

> `TypeScript` 扩展了 `JavaScript`，为它添加了类型支持。
>
> `TypeScript` 可以在您运行代码之前找到错误并提供修复，从而改善您的开发体验。
>
> 任何浏览器，任何操作系统，任何运行 `JavaScript` 的地方，完全开源。

用 `TypeScript` 编写的文件以 `.ts` 为后缀；用 `TypeScript` 编写 `React` 时，以 `.tsx` 为后缀。

---



## 类型声明

```ts
let a: string //变量a只能存储字符串
let b: number //变量a只能存储数值
let c: boolean //变量a只能存储布尔值
a = 'hello'
a = 100 //警告：不能将类型“number”分配给类型“string”
b = 666
b = '你好'//警告：不能将类型“string”分配给类型“number”
c = true
c = 666 //警告：不能将类型“number”分配给类型“boolean”
// 参数x必须是数字，参数y也必须是数字，函数返回值也必须是数字
function demo(x:number,y:number):number{
 return x + y
}
demo(100,200)
demo(100,'200') //警告：类型“string”的参数不能赋给类型“number”的参数
demo(100,200,300) //警告：应有 2 个参数，但获得 3 个
demo(100) //警告：应有 2 个参数，但获得 1 个
```



## 类型推断

```ts
let d = -99 //TypeScript会推断出变量d的类型是数字
d = false //警告：不能将类型“boolean”分配给类型“number”
```



## 类型总览

JavaScript中的数据类型：

::: tip

`string`、`number`、`boolean`、`null`、`undefined`、`bigint`、`symbol`、`object`

> 备注： 其中`object`包含： `Array`、`Function`、`Date`...

:::



::: tip TypeScript中的数据类型：

1. 以上所有
2. 四个新类型： `void`、`never`、`unknown`、`any`、`enum`、`tuple`
3. 自定义类型： `type`、`interface`

:::



注意点： JS 中的这三个构造函数： `Number` 、 `String` 、 `Boolean` ，他们只⽤于包装对象，正 常开发时，很少去使⽤他们，在 TS 中也是同理。

---



---

::: tip

JavaScript 原始类型也同样适应于 TypeScript 的类型系统，因此 `string`、`number`、`boolean` 也可以被用作类型注解

:::



| 类型    | 描述                             | 举例                      |
| ------- | :--------------------------------: | ------------------------- |
| number  | 任意数字                         | 1 , -33 , 2.5             |
| string  | 任意字符串                       | 'hello' , 'ok' , '你 好'  |
| boolean | 布尔值 true 或 false             | true 、 false             |
| 字⾯量   | 值只能是字⾯量值                 | 值本身                    |
| any     | 任意类型                         | 1 、 'hello' 、 true .... |
| unknown | 类型安全的 any                   | 1 、 'hello' 、 true .... |
| never   | 不能是任何值                     | ⽆值                      |
| void    | 空 或 undefined                  | 空 或 undefined           |
| object  | 任意的 JS 对象                   |` {name:'张三'}  `           |
| tuple   | 元素， TS 新增类型，固定⻓度数组 | 组 [4,5]                  |
| enum    | 枚举， TS 中新增类型             | `enum{A, B}    `            |



### `object`

关于 Object 与 object ，直接说结论：在类型限制时， Object ⼏乎不⽤，因为范围太⼤了，⽆ 意义。

1. object 的含义：任何【⾮原始值类型】，包括：对象、函数、数组等，限制的范围⽐较宽泛,用的少
2. Object 的含义： Object 的实例对象，限制的范围太⼤了，⼏乎不⽤

```ts
let a:Object //a的值必须是Object的实例对象，
// 以下代码，均⽆警告，因为给a赋的值，都是Object的实例对象
a = {}
a = {name:'张三'}
a = [1,3,5,7,9]
a = function(){}
a = 1 // 1不是Object的实例对象，但其包装对象是Object的实例
a = true // true不是Object的实例对象，但其包装对象是Object的实例
a = '你好' // “你好”不是Object的实例对象，但其包装对象是Object的实例

// 以下代码均有警告
a = null // 警告：不能将类型“null”分配给类型“Object”
a = undefined // 警告：不能将类型“undefined”分配给类型“Object”
```



### ⾃定义类型

⾃定义类型，可以更灵活的限制类型

```ts
// 性别的枚举
enum Gender {
 Male,
 Female
}
// ⾃定义⼀个年级类型（⾼⼀、⾼⼆、⾼三）
type Grade = 1 | 2 | 3
// ⾃定义⼀个学⽣类型
type Student = {
 name:string,
 age:number,
 gender:Gender,
 grade:Grade
}
// 定义两个学⽣变量：s1、s2
let s1:Student
let s2:Student
s1 = {name:'张三',age:18,gender:Gender.Male,grade:1}
s2 = {name:'李四',age:18,gender:Gender.Female,grade:2}
```



## 抽象类

常规类：

```ts
class Person {
 name: string
 age: number
 constructor(name:string,age:number){
 this.name = name
 this.age = age
 }
}
const p1 = new Person('张三',18)
const p2 = new Person('李四',19)
console.log(p1)
console.log(p2)

```

继承：

```ts
// Person类
class Person { }
// Teacher类继承Person
class Teacher extends Person { }
// Student类继承Person
class Student extends Person { }
// Person实例
const p1 = new Person('周杰伦',38)
// Student实例
const s1 = new Student('张同学',18)
const s2 = new Student('李同学',20)
// Teacher实例
const t1 = new Teacher('刘⽼师',40)
const t2 = new Teacher('孙⽼师',50)
```

抽象类：不能去实例化，但可以被别⼈继承，抽象类⾥有抽象⽅法

```ts
// Person（抽象类）
abstract class Person { }
// Teacher类继承Person
class Teacher extends Person {
 // 构造器
 constructor(name: string,age: number){
 super(name,age)
 }
 // ⽅法
 speak(){
 console.log('你好！我是⽼师:',this.name)
 }
}
// Student类继承Person
class Student extends Person { }
// Person实例
// const p1 = new Person('周杰伦',38) // 由于Person是抽象类，所以此处不可以new Perso
n的实例对象
```



## 接⼝

接⼝梳理： 

1. 接⼝⽤于限制⼀个类中包含哪些属性和⽅法：

```ts
// Person接⼝
interface Person {
 // 属性声明
 name: string
 age: number
 // ⽅法声明
 speak():void
}
// Teacher实现Person接⼝
class Teacher implements Person {
 name: string
 age: number
 // 构造器
 constructor(name: string,age: number){
 this.name = name
 this.age = age
 }
 // ⽅法
 speak(){
 console.log('你好！我是⽼师:',this.name)
 }
}
```



2. 接⼝是可以重复声明的：

```ts
// Person接⼝
interface PersonInter {
 // 属性声明
 name: string
 age: number
}
// Person接⼝
interface PersonInter {
 // ⽅法声明
 speak():void
}
// Person类继承PersonInter
class Person implements PersonInter {
 name: string
 age: number
 // 构造器
 constructor(name: string,age: number){
 this.name = name
 this.age = age
 }
 // ⽅法
 speak(){
 console.log('你好！我是⽼师:',this.name)
 }
}
```

3. 【接⼝】与【⾃定义类型】的区别： 接⼝可以： 1. 当⾃定义类型去使⽤； 2. 可以限制类的结构； ⾃定义类型： 1. 仅仅就是⾃定义类型；

::: tip

接⼝可以：

1. 当⾃定义类型去使⽤； 

2. 可以限制类的结构；



⾃定义类型： 

1. 仅仅就是⾃定义类型；

:::



::: tip 【 接口 】 与 【 抽象类 】 的 区 别：

抽象类：

1. 可以有普通⽅法，也可以 有 抽 象 ⽅ 法 ； 2. 使 ⽤ extends 关 键 字 去 继承抽 象 类 ； 



接口中： 

1. 只能 有 抽 象 ⽅ 法 ； 
2. 使 ⽤ implements 关 键 字 去 实 现 接 ⼝

:::



## 属性修饰符

| `readonly`  | 只读属性 | 属性⽆法修改               |
| ----------- | -------- | -------------------------- |
| `public`    | 公开的   | 可以在类、⼦类和对象中修改 |
| `protected` | 受保护的 | 可以在类、⼦类中修改       |
| `private`   | 私有的   | 可以在类中修改             |



## 泛型

定义⼀个函数或类时，有些情况下⽆法确定其中要使⽤的具体类型（返回值、参数、属性的类型不能确 定），此时就需要泛型了 举例：  就是泛型，（不⼀定⾮叫 T ），设置泛型后即可在函数中使⽤ T 来表示该类型：

```ts
function test<T>(arg: T): T{
return arg;
}
// 不指名类型，TS会⾃动推断出来
test(10)
// 指名具体的类型
test<number>(10)
```

泛型可以写多个：

```ts
function test<T, K>(a: T, b: K): K{
 return b;
}
// 为多个泛型指定具体⾃值
test<number, string>(10, "hello");

```

类中同样可以使⽤泛型：

```ts
class MyClass<T>{
 prop: T;
 constructor(prop: T){
 this.prop = prop;
 }
}
```

也可以对泛型的范围进⾏约束：

```ts
interface Demo{
 length: number;
}
// 泛型T必须是MyInter的⼦类，即：必须拥有length属性
function test<T extends Demo>(arg: T): number{
 return arg.length;
}
test(10) // 类型“number”的参数不能赋给类型“Demo”的参数
test({name:'张三'}) // 类型“{ name: string; }”的参数不能赋给类型“Demo”的参数
test('123')
test({name:'张三',length:10})
```

### 泛型变量

假设我们需要定义一个函数，该函数的作用是返回任何传入的值，那么我们自然会想到使用 `any`

```ts
function identity(arg: any): any {
  return arg
}
```

虽然结果是符合预期的，但使用 `any` 将失去类型检查，违背使用 `TypeScript` 的初衷。即使明确不需要类型检查，但如果项目中开启了 `noImplicitAny` 配置，会导致我们无法使用 `any`

此时泛型就派上了用场：我们可以使用 `<>` 定义一个参数变量 `Type` 用于捕获实际传入的类型，通过该参数变量，我们就可以指定实参和返回值为对应的类型

```ts
function identity<T>(arg: T): T {
  return arg
}

console.log(identity<string>('linsnow'))
```

上述代码意为：`identity` 函数接收 **类型参数** `T` 和参数 `arg` ，参数 `arg` 和函数返回值类型是 `T`；当传入 `string` 类型的参数时，`T` 的具体类型就是 `string`



### 箭头函数和对象字面量

以上述例子为例，我们可以将其改造为箭头函数形式

```ts
const identity: <T>(arg: T) => T = (arg) => arg
```

为方便理解，可以把上述代码拆解为：

```ts
type GenericFn = <T>(arg: T) => T
let identity: GenericFn
identity = (arg) => arg // identity = (arg) => { return arg }
```

对于箭头函数的泛型定义，我们还可以使用对象字面量的形式书写

```ts
type GenericFn = { <T>(arg: T): T }
```

---



## 可选参数

如果一个函数接受一个参数，而这个参数又是可选的，这时可以用 `?` 表示可选的参数：

```ts
function add(x: number, y?: number): number {
  if (y) {
    return x + y
  } else {
    return x
  }
}

add(10, 20) // 30
add(10) // 10
```

::: warning

可选参数必须接在必需参数后面，即**可选参数后面不允许再出现必需参数**

:::



## 剩余参数

在 `ES6` 中，可以使用 `...变量名` 的方式获取函数的剩余参数（`rest` 参数）

```ts
/* rest 是一个数组，我们可以使用数组的类型来定义它 */
function getTotal(a: number, ...rest: number[]) {
  console.log(a) // 1
  console.log(rest) // [2, 3, 4]
}

getTotal(1, 2, 3, 4)
```



---

## 类型断言

类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。`TypeScript` 会假设你已经进行了必须的检查。

类型断言有两种形式。其一是“尖括号”语法：

```ts
let someValue: any = 'this is a string'

let strLength: number = (<string>someValue).length
```

另一个为 `as` 语法：

```ts
let someValue: any = 'this is a string'

let strLength: number = (someValue as string).length
```

两种形式是等价的。使用哪个大多数情况下是凭个人喜好；在 `tsx` 文件中我们只能使用 `as` 语法。



