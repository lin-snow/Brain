# Java高级

![](deviceio.jpg)

## Java-IO

JDK提供了一套用于IO操作的框架，根据流的传输方向和读取单位，分为字节流InputStream和OutputStream以及字符流Reader和Writer的IO框架。字节流一次读取一个`byte`的大小，而字符流一次读取一个字符，也就是一个char的大小（在读取纯文本的时候更加合适）

## 文件字节流

`FileInputStream`: 用来获取文件的输入流  

```java
FileInputStream stream = new FileInputStream("path to file");
```

### 文件路径

- 可以使用绝对路径

- 也可以使用相对路径,默认路径为当前Main Class的同级目录，比如`src`目录

  

---

## 文件字节输出流

与文件字节输入流类似，如果输出的文件不存在会默认创建，结尾建议使用`.flush()`保证文件写入硬盘



## 文件对象

```java
File file = new File("hello/text.txt")
```



利用`file.createNewFile()`或者`file.mkdir()`返回的布尔值判断是否创建成功。

如果前面路径中的文件夹还没有创建，则使用`file.mkdirs()`即可创建

---

## 缓冲流

![](iobuffer.webp)

缓冲流有**缓冲字符流**和 

要创建一个缓冲字节流，只需要将原本的流作为构造参数传入BufferedInputStream即可：

```java
public static void main(String[] args) {
    try (BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream("test.txt"))){   //传入FileInputStream
        System.out.println((char) bufferedInputStream.read());   //操作和原来的流是一样的
    }catch (IOException e){
        e.printStackTrace();
    }
}
```

实际上进行I/O操作的并不是BufferedInputStream，而是我们传入的FileInputStream，而BufferedInputStream虽然有着同样的方法，但是进行了一些额外的处理然后再调用FileInputStream的同名方法，这样的写法称为`装饰者模式`.

 IO操作一般不能重复读取内容， 而缓冲流提供了缓冲机制，一部分内容可以被暂时保存，支持`reset()`和`mark()`操作。

- **`reset()`**会使当前读取的位置回到mark()调用时的位置
- mark()的`**readlimit**`属性需要大于缓冲区的大小，并且一旦读取超过后则会使`mark()`失效
- 缓冲输入流可以嵌套

##  数据流

数据流DataInputStream也是FilterInputStream的子类，同样采用装饰者模式，最大的不同是它支持基本数据类型的直接读取

## 对象流

ObjectOutputStream不仅支持基本数据类型，通过对对象的序列化操作，以某种格式保存对象，来支持对象类型的IO，注意：它不是继承自FilterInputStream的。

```java
public static void main(String[] args) {
    try (ObjectOutputStream outputStream = new ObjectOutputStream(new FileOutputStream("output.txt"));
         ObjectInputStream inputStream = new ObjectInputStream(new FileInputStream("output.txt"))){
        People people = new People("lbw");
        outputStream.writeObject(people);
      	outputStream.flush();
        people = (People) inputStream.readObject();
        System.out.println(people.name);
    }catch (IOException | ClassNotFoundException e) {
        e.printStackTrace();
    }
}

static class People implements Serializable{   //必须实现Serializable接口才能被序列化
    String name;

    public People(String name){
        this.name = name;
    }
}
```

```java
static class People implements Serializable{
    private static final long serialVersionUID = 123456;   //在序列化时，会被自动添加这个属性，它代表当前类的版本，我们也可以手动指定版本。

    String name;

    public People(String name){
        this.name = name;
    }
}
```

当发生版本不匹配时，会无法反序列化为对象. 如果我们不希望某些属性参与到序列化中进行保存，我们可以添加`transient`关键字：



---

## 多线程

![](multithread.png)

### `start()`和`run()`的区别

**首先**，系统通过**调用线程类的start（）方法来启动一个线程**，此时这个线程处于就绪状态，而非运行状态，也就意味着这个线程可以被JVM来调度执行。

**然后**，在这个调度执行过程中，JVM会通过**调用线程类的run（）方法来完成实际的操作**，当run（）方法结束后，此线程就会终止。

![](startdiffrun.png)

::: tip 注意：

　　　　如果直接调用线程类的run（）方法，会被当作一个普通的函数来调用。也就是说，start（）方法能够异步地调用run（）方法，但是直接调用run（）方法却是同步的，因此无法达到多线程的目的。

　　　　只有通过调用线程类的start（）方法才能真正达到多线程的目的。

:::

---

### 线程的礼让和加入

- 使用`yield()`方法来将当前资源让位给其他同优先级线程
- 使用`join()`方法来实现线程的加入

注意，线程的加入只是等待另一个线程的完成，并不是将另一个线程和当前线程合并！



---

### 线程锁和线程同步

多线程情况下Java的多线程内存管理：

![](neicun.webp)

高速缓存通过保存内存中数据的副本来提供更加快速的数据访问，但是如果多个处理器的运算任务都涉及同一块内存区域，就可能导致各自的高速缓存数据不一致，在写回主内存时就会发生冲突，这就是引入高速缓存引发的新问题，称之为：**缓存一致性**。

###  线程锁`synchonized`

 通过synchronized关键字来创造一个线程锁，首先我们来认识一下synchronized代码块，它需要在括号中填入一个内容，必须是一个对象或是一个类，我们在value自增操作外套上同步代码块：

```java
private static int value = 0;

public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
        for (int i = 0; i < 10000; i++) {
            synchronized (Main.class){  //使用synchronized关键字创建同步代码块
                value++;
            }
        }
        System.out.println("线程1完成");
    });
    Thread t2 = new Thread(() -> {
        for (int i = 0; i < 10000; i++) {
            synchronized (Main.class){
                value++;
            }
        }
        System.out.println("线程2完成");
    });
    t1.start();
    t2.start();
    Thread.sleep(1000);  //主线程停止1秒，保证两个线程执行完成
    System.out.println(value);
}
```

我们发现，现在得到的结果就是我们想要的内容了，因为在同步代码块执行过程中，拿到了我们传入对象或类的锁（传入的如果是对象，就是对象锁，不同的对象代表不同的对象锁，如果是类，就是类锁，类锁只有一个，实际上类锁也是对象锁，是Class类实例，但是Class类实例同样的类无论怎么获取都是同一个），但是注意两个线程必须使用同一把锁！

当一个线程进入到同步代码块时，会获取到当前的锁，而这时如果其他使用同样的锁的同步代码块也想执行内容，就必须等待当前同步代码块的内容执行完毕，在执行完毕后会自动释放这把锁，而其他的线程才能拿到这把锁并开始执行同步代码块里面的内容（实际上synchronized是一种悲观锁，随时都认为有其他线程在对数据进行修改

synchronized关键字也可以作用于方法上，调用此方法时也会获取锁：

### wait和notify方法

对象的`wait()`方法会暂时使得此线程进入等待状态，同时会释放当前代码块持有的锁，这时其他线程可以获取到此对象的锁，当其他线程调用对象的`notify()`方法后，会唤醒刚才变成等待状态的线程（这时并没有立即释放锁）。注意，必须是在持有锁（同步代码块内部）的情况下使用，否则会抛出异常！

notifyAll其实和notify一样，也是用于唤醒，但是前者是唤醒所有调用`wait()`后处于等待的线程，而后者是看运气随机选择一个。

### 守护线程

当其他所有的非守护线程结束之后，守护线程自动结束，也就是说，Java中所有的线程都执行完毕后，守护线程自动结束，因此守护线程不适合进行IO操作

```java
public static void main(String[] args) throws InterruptedException{
    Thread t = new Thread(() -> {
        while (true){
            try {
                System.out.println("程序正常运行中...");
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    });
    t.setDaemon(true);   //设置为守护线程（必须在开始之前，中途是不允许转换的）
    t.start();
    for (int i = 0; i < 5; i++) {
        Thread.sleep(1000);
    }
}
```

在守护线程中产生的新线程也是守护的。

