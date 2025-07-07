---
title: Debian 更换软件源
tags:
  - Linux
  - Debian
  - 软件源
categories:
  - Linux
abbrlink: 14a1a1a5
date: 2023-06-12 08:32:35
---
## 备份原有的源

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.backup
```

## 选择源

常用镜像站：<https://mirrors.quickso.cn>

## 更换源

编辑/etc/apt/sources.list文件(需要使用sudo)

## 更新源

更新源：

```bash
sudo apt update
```

更新软件

```bash
sudo apt-get upgrade
```

修复损坏的软件包，尝试卸载出错的包，重新安装正确版本的

```bash
sudo apt -f install
```

> 推荐使用一键换源脚本
> <https://linuxmirrors.cn/>
>
> ```bash
> bash <(curl -sSL https://linuxmirrors.cn/main.sh)
> ```
