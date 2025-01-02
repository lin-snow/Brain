# 如何快速安装WSL2(Ubuntu)?

## 开启Linux子系统支持
以`管理员启动Windows PowerShell`并输入以下命令
```shell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

## 检查运行WSL2的要求
要更新到 WSL 2，您必须运行 Windows 10...
- 对于 x64 系统：版本 1903 或更高版本，内部版本 18362.1049 或更高版本。
- 对于 ARM64 系统：版本 2004 或更高版本，内部版本 19041 或更高版本。
  或 Windows 11。

如果不满足条件请先更新Windows系统。

## 启用虚拟机功能
以管理员身份打开 PowerShell 并运行：
```shell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

## 安装Linux内核更新包
1. 下载最新软件包：[适用于 x64 计算机的 WSL2 Linux 内核更新包](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
2. 运行在上一步中下载的更新包。（双击以运行 - 系统将提示您提升权限，选择“是”以批准此安装。

## 将 WSL 2 设置为默认版本
打开 PowerShell 并运行以下命令，在安装新的 Linux 发行版时将 WSL 2 设置为默认版本：
```shell
wsl --set-default-version 2
```

## 安装您选择的 Linux 发行版
[Ubuntu 24.04 版本](https://wslstorestorage.blob.core.windows.net/wslblob/Ubuntu2404-240425.AppxBundle)

[Ubuntu 22.04 LTS](https://aka.ms/wslubuntu2204)

[Ubuntu 20.04 版本](https://aka.ms/wslubuntu2004)

[Ubuntu 18.04 版本](https://aka.ms/wsl-ubuntu-1804)

## 安装 Windows 终端（推荐）
[Windows Terminal下载](https://github.com/microsoft/terminal/releases)