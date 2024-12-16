# Java高级

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