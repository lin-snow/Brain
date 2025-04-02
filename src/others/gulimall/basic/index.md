# 基础篇  
## 硬件准备  
- ThinkBook 16+ R7-7845H 4050 32G  
- MagicBook 15 2020 8G  

## 环境搭建
- Windows11 on ThinkBook 16+  
- Linux 环境（Ubuntu 24.04.02 LTS）：  

1. 设置root账号：  
```bash
sudo passwd root
```

2. 开启SSH 登录：  
```bash
apt install openssh-server  

systemctl start ssh  

systemctl enable ssh  
```

3. 允许root用户登录：  
```bash
vim /etc/ssh/sshd_config
```
在配置文件中，我们需要找到以下行：  
#PermitRootLogin prohibit-password  
将其改为：  
PermitRootLogin yes  

4. 盒盖不休眠：  
配置文件  
```bash
/etc/systemd/logind.conf
```
编辑文件`/etc/systemd/logind.conf`  
将`#HandleLidSwitch=suspend`  
注意前面的 # 也要去掉  
修改为(无操作)  
`HandleLidSwitch=ignore`  

5. 关闭图形模式：  
编辑 GRUB 配置 文件，设置系统空闲 10 秒后自动关闭屏幕或黑屏： 

打开 GRUB 配置文件：  
```bash
sudo nano /etc/default/grub
```  
在文件中找到如下行：  
```bash
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"  
```
修改它，添加 consoleblank=10 参数（即空闲 10 秒后黑屏）：  
```bash
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash consoleblank=10"  
```
这个参数的作用是设置终端在 10 秒内没有任何键盘输入时会进入黑屏模式。  

保存并退出（按 Ctrl + X，然后按 Y 和 Enter）。  

更新 GRUB 配置：
```bash  
sudo update-grub  
```

重启系统：  
```bash
sudo reboot  
```

---

MySQL:
