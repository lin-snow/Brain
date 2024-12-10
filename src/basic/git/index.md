# Git
## Git常用命令


## Git配置代理
7890默认为mihomo的代理端口，根据自己实际的代理工具的端口修改

1. 全局代理配置(http/https代理)
```shell
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890
```

2. 只对Github进行代理(http/https代理)
```shell
git config --global http.https://github.com.proxy https://127.0.0.1:7890
git config --global https.https://github.com.proxy https://127.0.0.1:7890
```

3. sock5代理设置
```shell
git config --global http.https://github.com.proxy socks5://127.0.0.1:7890
git config --global https.https://github.com.proxy socks5://127.0.0.1:7890
```

4. 验证代理配置
代理配置完后，可以查看一下完整的全局配置
```shell
git config --global -l
```
或者
```shell
git config --get http.proxy
git config --get https.proxy
```

1. 取消代理
```shell
git config --global --unset http.proxy
git config --global --unset https.proxy
```