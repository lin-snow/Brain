# 开发环境

## 选择哪些编译器?

### MinGW系列

### **1. 原始 MinGW**

- **来源**：最早的 MinGW 项目，由 [MinGW.org](http://www.mingw.org/) 开发和维护。
- 特点：
  - 提供最基础的 GCC 工具链，适合简单的 Windows 应用开发。
  - 支持 Win32 API，但较少关注现代 C++ 标准。
  - 更新较慢，社区活跃度降低。
- **适用场景**：仅用于小型、简单的 Windows 程序开发，或者教学用途。
- 不足：
  - GCC 和 GDB 版本较老，现代 C++ 支持不足。
  - 在大型项目中可能会遇到依赖和性能问题。



### **2. MinGW-w64**

- **来源**：由社区分叉自原始 MinGW，活跃的开发维护项目。官网：[MinGW-w64](http://mingw-w64.org/)。
- 特点：
  - **64 位支持：** 原始 MinGW 仅支持 32 位，而 MinGW-w64 同时支持 32 位和 64 位目标平台。
  - **现代化：** 提供更全面的 C++ 标准库支持，包括对 C++17、C++20 的较好兼容性。
  - **工具链丰富：** 包含更现代的 GCC 和 GDB。
- **适用场景**：适合需要现代 C++ 支持和跨平台开发的项目。
- 不足：
  - 工具链配置和使用可能比原始 MinGW 更复杂一些。



### **3. TDM-GCC**

- **来源**：由第三方开发者（TDM）维护的 MinGW 分支，基于 MinGW 和 MinGW-w64。官网：TDM-GCC。
- 特点：
  - 提供用户友好的安装程序，易于快速上手。
  - 默认静态链接标准库，减少运行时对动态链接库的依赖。
  - 集成多线程支持，特别是在 64 位平台上的表现更好。
- **适用场景**：入门开发者、小型项目，以及需要简单配置和安装的场景。
- 不足：
  - 相比 MinGW-w64，更新频率较低。
  - 不适合高度定制化的开发需求。



### **MSYS2（推荐）**

- **来源**：基于 MinGW-w64 的现代化项目，支持丰富的工具链。官网：[MSYS2](https://www.msys2.org/)。
- 特点：
  - **包管理器（pacman）：** 提供类似 Linux 的包管理工具，可快速安装和更新 MinGW-w64 工具链及依赖库。
  - **完整环境：** 包含 MinGW-w64 的 32 位和 64 位工具链，并且可以作为一个类 Unix 环境运行。
  - **灵活性：** 允许同时安装多种工具链（如 GCC、Clang 等）。
- **适用场景**：适合需要完整开发环境、快速安装依赖包的开发者，特别是跨平台项目。
- 不足：
  - 安装和配置对初学者稍有复杂。



---



## 如何区分 MinGW-w64 构建版本？

**目标架构**

- `i686`：适合 32 位目标程序。
- `x86_64`：适合 64 位目标程序。

**线程模型**

- **posix**：使用 POSIX 风格的多线程，适合跨平台需求较高的项目。
- **win32**：使用 Win32 API 多线程，适合纯 Windows 应用。

**异常处理**

- **sjlj**：适合 32 位程序，异常处理开销较小，但性能稍低。
- **dwarf**：适合 32 位程序，性能高，但仅支持单线程。
- **seh**：推荐用于 64 位程序，性能高，支持多线程。

**C标准库**

MSVCRT与UCRT --这是微软Windows上C标准库的两个变体。

MSVCRT (Microsoft Visual C++ Runtime)默认可用于所有Microsoft版本，但由于向后兼容性问题，过去一直存在兼容性问题，无法兼容C99，因此缺少一些功能。

UCRT (Universal )是Microsoft默认使用的较新版本。它应该工作并表现为代码是用MSVC编译的

---



## Ubuntu下如何配置C/C++开发环境？

### gcc/g++

`sudo apt install build-essential`

`build-essential`包含了GCC、GNU Binutils（链接器和汇编器）等开发工具。

### cmake

`sudo apt install cmake`
或
`sudo snap install cmake`



---





