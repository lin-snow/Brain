# Docker 基础

这里记录着一些Docker相关的知识

## Dcoekr常用命令

![](dockercmdmindmap.png)



## Docker流程

**Docker** 包括三个基本概念：

-  镜像（`Image`）：Docker 镜像是一个特殊的文件系统，除了提供[容器](https://cloud.tencent.com/product/tke?from_column=20065&from=20065)运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像不包含任何动态数据，其内容在构建之后也不会被改变。 
-  容器（`Container`）：镜像（`Image`）和容器（`Container`）的关系，就像是面向对象程序设计中的 `类` 和 `实例` 一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。 
-  仓库（`Repository`）：仓库（`Repository`）类似Git的远程仓库，集中存放镜像文件。 

三者关系可以用下图表示：



![](dockersys.png)