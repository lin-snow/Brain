# Java 

## 匿名内部类

内部类是定义在另一个类或方法中的类。根据位置和用途，Java 内部类分为以下几种：

- **静态嵌套类**：用 `static` 修饰的内部类。
- **成员内部类**：作为外部类的成员存在。
- **局部内部类**：定义在方法或代码块中。
- **匿名内部类**：没有名字的内部类，通常用于快速实现接口或继承类。

匿名内部类是一种局部内部类（定义在方法或表达式中），但由于它没有名字且同时定义和实例化，所以它有自己独特的用途。

示例：

```java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Running...");
    }
}

Runnable runnable = new MyRunnable();

```

接口是抽象的，必须声明某个类`implement`实现接口，不能直接实例化。 但是可以使用匿名内部类的语法糖，如以下方式：

```java
Runnable runnable = new Runnable() { 
    @Override
    public void run() {
        System.out.println("Running...");
    }
};

```

 第一行的第一个Runnable和第二个Runnable须保持一致，都是待实现接口的名字，匿名内部类的语法要求必须与要实现的接口或要继承的父类的名字一致



这里的 `new Runnable()` 并不是直接实例化接口 `Runnable`，而是：

1. 定义了一个没有名字的类。
2. 这个类实现了 `Runnable` 接口。
3. 同时创建了这个类的一个实例。



::: tip

在 Java 8 及以上版本中，**匿名内部类**如果实现的是一个**函数式接口**（即只有一个抽象方法的接口），可以替换为 **Lambda 表达式**。这是因为 Lambda 表达式本质上是对函数式接口的简洁实现。所以可以这么写：

```java
Runnable runnable = () -> System.out.println("Running...");
```



:::



---



## 方法引用

假定我们定义了一个求和的接口：

```java
public interface Study {
    int sum(int a, int b);   //待实现的求和方法
}
```

但是我们在别的地方已经有一个实现好的sum方法了，比如Integer中的sum方法。所以我们可以直接引用过来

```java
public static void main(String[] args) {
    Study study = (a, b) -> Integer.sum(a, b);   //直接使用Integer为我们通过好的求和方法
    System.out.println(study.sum(10, 20));
}
```

方法引用其实本质上就相当于将其他方法的实现，直接作为接口中抽象方法的实现。任何方法都可以通过方法引用作为实现



---



## 异常机制

**Java分两种异常**：

- 编译时异常
- 运行时异常



### 异常处理：

```java
public static void main(String[] args) {
    try {    //使用try-catch语句进行异常捕获
        Object object = null;
        object.toString();
    } catch (NullPointerException e){   //因为异常本身也是一个对象，catch中实际上就是用一个局部变量去接收异常

    }
    System.out.println("程序继续正常运行！");
}
```

 

## 泛型

不能传基本数据类型，需要使用其包装类型。但是基本类型的数组可以传

### 泛型方法

```java
// 示例
public static <T> T test(T t) {
    return t;
}
```

### 泛型的界限

```java
class Person<T extends Number> { // 这里的泛型T被限定上界为Number,所以T必须是Number或是Number的子类
    
}
```



