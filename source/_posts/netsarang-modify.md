---
title: 解除 Xshell/Xftp 7 个人免费版退出弹窗
excerpt: 'Xshell 是一个强大的安全终端模拟软件，它支持SSH1, SSH2, 以及Microsoft Windows 平台的TELNET 协议。'
tags:
  - Xshell
  - Xftp
categories:
  - 软件修改
abbrlink: 160ecfdc
date: 2023-06-12 08:16:09
---
## 准备工作

1. 电脑已安装 [Xshell/Xftp 7](https://www.netsarang.com/en/free-for-home-school/)，且运行过一次
2. Windows 下有可以读取 HEX 的编辑程序（也可以使用在线编辑器 [HexEd](https://hexed.it/) 在线平台）

## Xshell 修改步骤

1. 找到 Xshell 7 图标，右键 –  打开文件所在的位置 – 找到 Xshell.exe（建议备份该执行文件）
2. 打开 HexEd 在线平台，左上角【打开文件】，选择 Xshell.exe 文件，然后查找：
`74 11 6A 00 6A 07 6A 01`
将第一位的74替换为EB，修改后的结果为：
`EB 11 6A 00 6A 07 6A 01`
3. 保存文件

## Xftp 修改步骤

1. 找到 Xftp 7 图标，右键 –  打开文件所在的位置 – 找到 Xftp.exe（建议备份该执行文件）
2. 打开 HexEd 在线平台，左上角【打开文件】，选择 Xftp.exe 文件，然后查找：
`75 10 6A 00 6A 07 50 6A`
将第一位的74替换为EB，修改后的结果为：
`EB 10 6A 00 6A 07 50 6A`
3. 保存文件

## 参考
[^1]: https://blog.upx8.com/3430